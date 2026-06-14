---
title: Checkout Field eta Klientelaren DNS-a
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field eta DNS-aren Kontsumari Nagusiaketa

## Domainako Alegia lekuen leku

**Domain Selection** lekuak checkout element bat da, zein irudiak erabiltzen duen informazioa kontsumariei ematen du. Domainak saldira konponbideak edoze checkout form batean gehitu dezake domainak saldira aktiboa egiteko.

### Lekuaren leku checkout form batean gehitu

1. **Network Admin › Ultimate Multisite › Checkout Forms**-era jarri duzu.
2. Checkout form bat lortu edo zure form bat jartu duzu.
3. Checkout editoran, **Add Field** (Leku gehiatu) klikatu duzu.
4. Legearen listatik **Domain Selection** (Domainako Alegia leku) aldatu duzu.
5. Legearen opsioak konfigura duzu (aurekin astiatuan).
6. Formak saldu duzu.

### Legearen opsioak

**Domain moduak** — Kontsumariei zein astiak ikusten dituzteko aukera ematen duen. Moduak guztiak independentean aktiboa edo deaktiboa egin daiteke:

| Modu | Zer egiten du |
|---|---|
| **Subdomain** (Subdomaina) | Kontsumariek zure network-aren subdomain bat erabiltzen dute (adibidez, `mysite.yournetwork.com`). Pagamendu ez da beharrezkoa. |
| **Register New Domain** (Domainu berri emate) | Kontsumariek domainu berria bilatzen dute eta zure konfiguraatu provider-ek bestela irregistro egiten du. Prezioa emateko domain produktoak erabiltzen dira. |
| **Existing Domain** (Domainu jakinutua) | Kontsumariek jodeletik duten domain bat mapatzen dituzte. Irregistro biltzarren ez da. Domainak automatikoki bere webgunean mapatzen da. |

**Modu defaulta** — Moduak guztiz aktiboa direnenean, zein astia lehen irudi du? Domainarekin irregistroa opsional izateko **Subdomain**-era ematen duzu, edo merkatuak erreguntzen dituzteko **Register New Domain**-era.

**Domain produkto** — Legearen aukerari domain produkto bat ere pinatzea posible da. Ez estektzen duen irikusi, addon-ek kontsumariek bilatzen duen TLD (Top Level Domain) eratu behar duena jakinarazten duen produktoa automatikoki ematen du.

### Registranten kontakto lekuak

Kontsumariek **Register New Domain** astia irudi duenean, checkout form batean registranten kontakto lekuak inline (lekuaren gainean) jartzen dira:

- Lehen pertsa / Apelabetza
- Emaila
- Adresa (linea 1, urdiko, erabilera/provincia, postalekua, maila)
- Telefonoa

Hauzu behar da guztizko registratoriek eskatzen dituen eta registrazio API-ko eskatzea bago egiten da. Telefonoa automatikoki registrarriek eskatzen duen `+CC.NNN` internazional formatu zehatzera formatzen da.

### Automatiko URL-a emateko
Kunde bat registratzen edo domain bat mapatzen duenean, site URL lekuak nahi gertu domainetik automatikoki horren partirri da. Kundek ez dute URL leku batean iraki eta ematen behar.

### Aurrespena eragiketa (Search behaviour)
- Domainaren disponibiltasua real-time AJAX bidez kontrolatzen da, kudeak testiatzen duenean.
- Preferitu domaina ez dagoenean, alternatibo TLDs (Top Level Domains) sugerentziak gertatzen dira.
- Prezioak live hartzen eta argi eragiten dira (registrazio prezioa, berri egindera prezioa, opcional WHOIS gizaldia).
- Kupon kodeak domain produkzioetan beste produktuak bezala aplikatzen dira.

**Aurrespenaren eragiketa optimizatzeko:**

```php
// API eskatzen dituzten konektibide oso lentoakaren bitartean API eskatzeak jarraitzea murriagarria da, debounce delaya handitu
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Domainaren aurrespena eragiketa bidezko lekuak (custom fields) ezartzeko:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Erron-notizak (Additional notes)',
    ];
    return $fields;
});
```

---

## Kundek DNS administrazioa

Kundek bere domainakaren DNS record-ek **My Account** lapurialdean, bere domainaren erregistratzeko lekuan, administrazio dezak.

### Udaldeak (record types) zehatzak

| Uri | Erabiltza |
|---|---|
| **A** | Hostnamea IPv4 adresera mapatu |
| **AAAA** | Hostnamea IPv6 adresera mapatu |
| **CNAME** | Beste hostname bat erakusten aliantzia (alias) sortzea |
| **MX** | Mail exchange servera konpondu |
| **TXT** | SPF, DMARC, bidezko identifikazio edo beste testu record-ek hasi ezarria |

### DNS administrazioa zehatzak zein providerrak suportatzen du?

DNS administrazioa (rekordak gehitu, mugitu, haie) disponible da **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** eta **Openprovider**-ekin. **Hostinger** domeniuak ez daude irekitzenaren (Domain Seller) bidez nameservere mugitzen dezisten; hostatutako domen berezko DNS rekordak Hostinger domain-mapping integrazioa bidez administrazio dira. Namecheap, GoDaddy eta NameSilo domenak estatusu eta amaierri informazioa erakusten dute, baina DNS-ak registrararen kontrol panelan direktu zuzenean administrazio egin behar da.

### Default DNS rekordak

Domenu ematen den default DNS rekordak konfiguru dezakezu, eta horiek domeniu ematenenean automatikoki aplikatzen dira. **Settings › Domain Seller › Default DNS Records** (Konfigurazioa > Domenia Emateko Lehenaren > Default DNS Rekordak) funtziora jarraitu.

Default rekordu-ren mugimendu hauek suportatzen dute token bat du:

| Token | Errogi da |
|---|---|
| `{DOMAIN}` | Domena ematenaren (adibidez, `example.com`) domena nazionala |
| `{SITE_URL}` | Klientaren webgune WordPress-ren URL-a |

**Testu-egia — apex domain eta www-ri server IP-ra mugitu:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admina: DNS ikustea eta mugitzea

Network adminak domena ematenaren edozein kliente-ren DNS rekordak ikustu eta mugitu dezakete domain-en mugitzenaren (edit) lapurialdia **Network Admin › Ultimate Multisite › Domains** (Network Administrazioa > Ultimate Multisite > Domeniak) funtziora jarraituz.
