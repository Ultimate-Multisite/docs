---
title: Polje za plačilo in DNS stranke
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Upravljanje polja za plačilo in DNS stranke kupca

## Polje izbira domena v checkoutu {#the-domain-selection-checkout-field}

Polje **Domain Selection** je element v checkoutu, ki kupcem daje možnost, kako dobiti domen za svojo spletno stran. Dodajte ga na svoj checkout form, da omogočite prodajo domen.

### Dodajanje polja v checkout form {#adding-the-field-to-a-checkout-form}

1. Pojdite na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Odprite ali ustvarite checkout form
3. V editorju za checkout kliknite na **Add Field** (Dodaj polje)
4. Iz izbiranja polj dodajte **Domain Selection**
5. Konfigurišajte možnosti polja (pogledajte spodaj)
6. Shranite form

### Možnosti polja {#field-options}

**Domain modes** — Izberite, katere tabe kupce bodo videli. Vsaka moda lahko vključite ali izključite samodejno:

| Moda | Kaj to pomeni |
|---|---|
| **Subdomain** (Poddomena) | Kupce uporabljajo brezplačno poddomeno na vašeta mreži (npr. `mysite.yournetwork.com`). Ni potrebna plačba. |
| **Register New Domain** (Registriraj novo domen) | Kupce iščejo novo domen in jo registrirajo preko vaše konfigurirane ponudbe. Uporablja odgovarjajoč izdelek domena za cenik. |
| **Existing Domain** (Obstaja domen) | Kupce povezuje domen, ki ga že lastno imajo. Ni potrebna registracijska taksarna stopnja. Domen je samodejno povezan z njihovim spletnim stranjo. |

**Default mode** (Predstavna moda) — Ko so vključene vse tri mode, katere tabe se prvo odpre? Ustawite na **Subdomain**, če želite ohraniti registracijo domena kot opcijo, ali na **Register New Domain**, da spodbujate nakup.

**Domain product** (Izdelek domena) — Opcionalno pričanjite to polje z določenim izdelkom za domen. Če ni postavljeno, dodatek samodejno izbere odgovarjajoči izdelek na podlagi TLD-ja, ki ga kupce iščejo.

### Polja za stik s registracijo {#registrant-contact-fields}

Ko kupce izbrejo tabo **Register New Domain**, se v checkout form dodajo polja za stik z registracijo:

- Ime / Prezime
- E-poštni naslov
- Naslov (red 1, mesto, država/provincija, poštna številka, država)
- Telefonski imenik

Ti so potrebni vseh registratorjev in jih validirajo pred odpravo API klicu za registracijo. Telefonske številke se avtomatsko formatirajo na mednarodni format `+CC.NNN`, ki ga pričakujejo registratorji.

### Avtomatsko generirana URL stran {#auto-generated-site-url}

Ko kupec se prijavi ali poveže domen, polje site URL je avtomatsko popolnjeno izbranim domenom. Kupci ne morajo vpisati ločeno polje za URL.

### Odanje iskanja (Search behaviour) {#search-behaviour}

- Dostopnost domena se preverja v realnem času z uporabo AJAX-a med vpisovanjem uporabnika
- Predlogi alternativnih TLD so prikazani, če je predvladan domen nedostopabilen
- Cene so dobrana na živ in jasno prikazane (cena registracije, cena obnove, opcionalna taksarna stopina za zasebnost WHOIS)
- Kuponi se uporabljajo za domene izdelke tako kot za druge izdelke

**Uporaba za prilagoditev odzivnosti iskanja:**

```php
// Povečajte čas zakape (v milisekundah), da se zmanjšajo API klic na počasnih povezavah
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Dodajanje prilagojen polj za obrazec iskanja domena:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Dodatne opombe',
    ];
    return $fields;
});
```

---

## Upravljanje DNS-a za stranke {#customer-dns-management}

Stranki lahko upravljajo DNS zapise za svoje registrirane domene s strani stran **Moj račun**, pod vpisom dмена.

### Podporani tipov zapisov (record types) {#supported-record-types}

| Tip | Uporaba |
|---|---|
| **A** | Mapiranje imena hostja na IPv4 naslov |
| **AAAA** | Mapiranje imena hostja na IPv6 naslov |
| **CNAME** | Ustvarjanje aliase, ki kaže na drugi ime hostja |
| **MX** | Ustavitev serverja pošte (mail exchange server) |
| **TXT** | Dodajanje SPF, DMARC, verifikacijskih ali drugih tekstualnih zapisov |

### Kateri ponudniki podpirajo upravljanje DNS-a? {#which-providers-support-dns-management}

Upravljanje DNS-om (dodajanje, urejanje, brisanje zapisov) je na voljo z **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** in **Openprovider**. Domeni **Hostinger** lahko spremenijo name serverje preko Domain Seller. DNS zapisi za hostirane domene upravlja vgrajena integracija Hostinger domain-mapping. Domeni Namecheap, GoDaddy in NameSilo prikazujejo stanje in informacije o poteku, vendar se DNS morajo upravljati neposredno v kontrolni panel registratorja.

### Predvoljni DNS zapisi {#default-dns-records}

Lahko konfigurirate predvoljne DNS zapise, ki se avtomatsko uporabljajo ob registraciji domena. Pojdite na **Settings › Domain Seller › Default DNS Records**.

Predvoljni vrednosti zapisov podpirajo dva tokena:

| Token | Zamenja z |
|---|---|
| `{DOMAIN}` | Registrirano ime domena (npr. `example.com`) |
| `{SITE_URL}` | URL spletnega mesta WordPress-a za strankovo spletno mesto |

**Primer — usmerite apex domen in www na IP vašega serverja:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: ogledanje in urejanje DNS-a {#admin-viewing-and-editing-dns}

Mrečni administratori lahko ogledajo in urejajo DNS zapise za vsako stranko domeno z strani za ureditev domena v **Network Admin › Ultimate Multisite › Domains**.
