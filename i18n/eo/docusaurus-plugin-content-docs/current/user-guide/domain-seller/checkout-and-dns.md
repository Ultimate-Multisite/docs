---
title: Fila de pagado kaj Kliento DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Campo kaj DNS-menado de Klianto

## La campo Selekto de Domeno {#the-domain-selection-checkout-field}

La campo **Domain Selection** estas elementa en la checkout kiu donas klientoj eleki, kiel ili akiras sianjn domeno. Ado it alian ĉiu checkout form por permi domeno vendon.

### Ado de la campo al checkout formo {#adding-the-field-to-a-checkout-form}

1. Aliri **Network Admin › Ultimate Multisite › Checkout Forms**
2. Ĉiŝi aŭ krei un checkout formon
3. En la editoracheckout, kliku sur **Add Field** (Adu Campo)
4. Elekti **Domain Selection** el la listo de kampoj
5. Konfiguri la opciojn de la campo (vidu alio)
6. Salvi la formon

### Opcioj de la campo {#field-options}

**Domain modes** — Elekti kiuj tabojn klienton vidas. Ĉiu modo povas esti aktiva aŭ deaktivita indefende:

| Modo | Kion ĝi faras |
|---|---|
| **Subdomain** | Kliento uzas liberan subdomain sur via retoj (ekz., `mysite.yournetwork.com`). Sen necesa pago. |
| **Register New Domain** | Kliento serĉas novan domenon kaj registras lin per via konfiguraita providanto. Uzas la korespondantan domeno produkton por precizirlingon. |
| **Existing Domain** | Kliento mapas domenon, kiun ili 이미 possidas. Sen necesa registriĝo. La domeno estas aŭtomate mapita al siaj sitoj. |

**Default mode** — Kiam ĉiuj tri modoj estas aktiva, kiu tabolo ŝtariĝas unue? Seti al **Subdomain**, por ke registriĝo de domeno restu opcional, aŭ **Register New Domain**, por ke oni inkuraj aĉetojn.

**Domain product** — Opционаle pin ĉi tian kampon al specifita domeno produkto. Se ĝi ne estas setita, la addon aŭtomate selektas la korespondantan produkton bazite sur la TLD, kiun klientas serĉas.

### Kampoj de kontakta persona registrianto {#registrant-contact-fields}

Kiam klientas selektas la tabon **Register New Domain**, la checkout formo aldon inline kampojn por kontakto de la registrianto:

- Prima nom / Doma
- Elektronika poŝtelefona (Email address)
- Adreso (linio 1, urbo, ŝtato/provinco, postala kodo, lando)
- Telefono numero

Kiel estas bezonaj necesaj de ĉiuj por ĉiuj registratoroj kaj validiĝas antaŭ la API-vokado de registriĝo. Telefonnomeroj estas aŭtomate formatiĝita en la internacia formato `+CC.NNN`, kiun registratoroj esperas.

### Auto-generita sitio URL (site URL) {#auto-generated-site-url}

Kiam klientas registriĝas aŭ mapas domenon, la campo sito URL estas aŭtomate plenigita el elektita domeno. Klientoj ne bezonas plenumi apartan URL-champon.

### Serĉilaprovo (Search behaviour) {#search-behaviour}

- La disponibilitarto de domeno estas kontrolita en reala tempo per AJAX, kiam la klientas skribas
- Alternativa TLD sugestoj estas montritaj, kiam la preferita domeno ne estas disponabla
- Preco estas akirita live kaj montrita klare (registriĝo preco, renoviĝo preco, opcionala temo WHOIS konfideco)
- Kupon kodoj aplika al domenaj produktoj similaj al ĉirkaŭ aliaj produktoj

**Ajustado de respondo serĉi:**

```php
// Pluaj laŭvortojn (milliseconds) por plibonigi la retkon kaj malrapida konekcioj
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Añadiĝo de tujaj kampoj al la serĉformo de domeno:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Aŭtaj notoj',
    ];
    return $fields;
});
```

---

## Klientaj DNS-menado (Customer DNS management) {#customer-dns-management}

Klientoj povas administra DNS-registrojn por siaj registritaj domenoj el la paĝo **Mia Konta** (My Account), sub siaj domeno-entrado.

### Subtenitaj registraj tipoj (Supported record types) {#supported-record-types}

| Tipo | Uzo |
|---|---|
| **A** | Mapari nomon al IPv4 adreso |
| **AAAA** | Mapari nomon al IPv6 adreso |
| **CNAME** | Krei aliasan aponton al alia nomo |
| **MX** | Aŭtri la serviron de poŝton (mail exchange server) |
| **TXT** | Aŭadi SPF, DMARC, verifikadon aŭ aliaj tekstregistrojn |

### Kio provizondas DNS-menado? {#which-providers-support-dns-management}

DNS-menedri (registri, modifigi, elimini) estas disponabla per **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** kaj **Openprovider**. La domeno de **Hostinger** povas modernizi nomerversajn per Domain Seller; DNS-registroj por alojnitaj domenoj estas administriitaj de la bazaj Hostinger domain-mapping integriĝo. Namecheap, GoDaddy kaj NameSilo domenoj montras staton kaj ekspiradon informojn, sed DNS devas esti administritita direkte en la kontrolpanelo de la registratorso.

### Default DNS-registroj {#default-dns-records}

Vi povas konfiguri default DNS-registrojn, kiuj estas aplikiitaj aŭtomate, kiam domeno estas registrita. Irari al **Settings › Domain Seller › Default DNS Records**.

Default registrovaloroj subtenas du tokenojn:

| Token | Substitutita per |
|---|---|
| `{DOMAIN}` | La registrita domenonimo (ekz., `example.com`) |
| `{SITE_URL}` | La WordPress sita URL por la kliento's sitio |

**Ekzemplo — dirigui apex domeno kaj www al viaj servero IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admina: vidado kaj modifo de DNS {#admin-viewing-and-editing-dns}

ReteAdmin-administrajoj povas vidi kaj modifi DNS-registrojn por ĉian klientdomeno de la domeno's modifa paĝo en **Network Admin › Ultimate Multisite › Domains**.
