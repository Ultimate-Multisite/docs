---
title: Fampidirana Checkout sy DNS an'ny Mpanjifa
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Fomba Fandraisana Checkout sy Fitantanana DNS ho an'ny Mpanjifa {#checkout-field-and-customer-dns-management}

## Ny champ Domain Selection {#the-domain-selection-checkout-field}

Ny **Domain Selection** dia zavatra eo amin'ny checkout izay manome safidy ny mpanjifa momba ny fomba hanomezany domain an'ny tranonkala. Ampiana azy ao amin'ny endrika checkout rehetra mba hahafahan'ny fivarotana domain izany.

### Fametrahana ilay champ ao amin'ny endrika checkout {#adding-the-field-to-a-checkout-form}

1. Mandehana any amin'**Network Admin › Ultimate Multisite › Checkout Forms**
2. Afaka manokatra na mamorona endrika checkout iray
3. Ao anatin'ny editor checkout, tsindrio **Add Field**
4. Safidio ny **Domain Selection** avy ao amin'ny lisitry ny champ
5. Ataovy azo antoka ny fepetra ho an'ilay champ (jereo eto ambany)
6. Tehirizo ny endrika

### Fepetra ho an'ny champ {#field-options}

**Domain modes** — Safidio izay tabilao hasehon'ny mpanjifa. Afaka azo ampiasaina na tsy ampiasaina isaky ny mode:

| Mode | Inona no ataony |
|---|---|
| **Subdomain** | Mampiasa subdomain maimaim-po an'ny tambajotra (ohatra, `mysite.yournetwork.com`) ny mpanjifa ao amin'ny tambajotranareo ianao. Tsy mila mandoa vola. |
| **Register New Domain** | Mitady domain vaovao ny mpanjifa ary mametraka azy amin'ny alalan'ilay mpamatsy (provider) voafidy anareo. Mampiasa ny vokatra domain mifanaraka ho an'ny vidiny. |
| **Existing Domain** | Manome fametrahana (mapping) domain efa ananany ny mpanjifa. Tsy misy saram-barotra fametrahana. Atao automatique ny fametrahana ilay domain amin'ny tranonkalany. |

**Default mode** — Rehefa voafidy ireo mode telo rehetra, inona no tabilao hivoaka voalohany. Ataovy **Subdomain** raha te ho safidy tsy voatery ny fametrahana domain, na **Register New Domain** raha te hamporisihana ny fividianana.

**Domain product** — Afaka manome fanasiana (pin) ity champ ity amin'ny vokatra domain manokana iray ianao. Raha tsy voafidy, dia safidy ho azy ilay addon mifanaraka amin'ilay TLD (Top-Level Domain) tadiavina ny mpanjifa.

### Champ fifandraisana ho an'ny mpametraka (Registrant contact fields) {#registrant-contact-fields}

Rehefa misafidy ny tabilao **Register New Domain** ny mpanjifa, dia ampiana champ fifandraisana ho an'ny mpametraka ao amin'ny endrika checkout:

- Anarana fototra / Anarana fahefana
- Adiresy (tsoratra 1, tanàna, faritra/province, code postal, firenena)
- Laharan-telefa

Ireto no voalohana ilaina amin'ny mpandefa (registrars) rehetra ary voamarina alohan'ny fampidirana ny API an'ny famarihana. Ny laharana finday dia voarafitra ho endrika iraisam-pirenena `+CC.NNN` izay andrasana avy amin'ny mpandefa.

### URL an'ny tranokala voatavoara ho azy (Auto-generated site URL) {#auto-generated-site-url}

Rehefa misy mampiditra (register) na manome toerana (maps) domain ny mpanjifa, dia voasoratra ho azy ny laharana finday an'ny tranokala avy amin'ilay domain no safidy. Tsy mila mametraka laharana URL hafa izy ireo.

### Fitadiavana (Search behaviour) {#search-behaviour}

- Ny fahatapan'ny domain dia fantatra amin'ny fotoana tena izy (real-time) amin'ny alalan'ny AJAX rehefa mitady ny mpanjifa.
- Azo atao ny manome fanazavana momba ny TLD hafa raha tsy misy ilay domain tian'izy ireo.
- Ny vidiny dia azo avy amin'ny data tena izy ary aseho mazava (vidin'ny famarihana, vidin'ny fanavaozana, saram-barotra WHOIS anisan'ny safidy).
- Ny coupon codes dia miasa ho an'ireo vokatra domain toy ny vokatra hafa rehetra.

**Fanitsiana ny fahaizana mitady (Tuning search responsiveness):**

```php
// Ampianarina ny fotoana fiandohana (debounce delay) (milliseconds) mba hampihenana ny antso API amin'ny fifandraisana salama kokoa
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Fampidirana laharana manokana (custom fields) amin'ny fomba fitadiavana domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Fanamarihana fanampiny',
    ];
    return $fields;
});
```

---

## Fitantanana DNS ho an'ny mpanjifa (Customer DNS management) {#customer-dns-management}

Afaka mitantana ny fampahalalana DNS ho an'ireo domain nampidirina avy amin'ny pejy **My Account** izy ireo, eo ambanin'ny fidirany ao amin'ilay domain.

### Karazan'ny fampahafantarana (Supported record types) {#supported-record-types}

| Karazana | Fampiasana |
|---|---|
| **A** | Mampifandray ny anaran-tsoratra (hostname) amin'ny adiresy IPv4 |
| **AAAA** | Mampifandray ny anaran-tsoratra amin'ny adiresy IPv6 |
| **CNAME** | Mamorona alias manondro ny anaran-tsoratra hafa |
| **MX** | Mametraka ny server famandriana (mail exchange) |
| **TXT** | Manampy SPF, DMARC, fanamarinana, na fampahalalana lahatsoratra hafa |

### Inona no manome fanohanana fitantanana DNS? {#which-providers-support-dns-management}

Fitampanitantana ny fitantanana DNS (fanampiana, fanovana, famafana ny *record*) dia azo atao amin'ny alalan'ny **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, ary **Openprovider**. Ny domain an'i **Hostinger** dia afaka manavao ny *nameservers* amin'ny alalan'ny Domain Seller; ny DNS records ho an'ireo domain voalaza (hosted domains) dia vitan'ny fampifandraisana fototra (*core*) an'i Hostinger momba ny fametrahana domain. Ny domain an'i Namecheap, GoDaddy ary NameSilo dia mampiseho ny sata sy ny fotoana fahaverezany fa tsy maintsy idirana mivantana ao amin'ny *control panel* an'ilay registrar no fitantanana ny DNS.

### DNS records fototra (*Default*) {#default-dns-records}

Afaka mametraka DNS records fototra ianao izay ho voatanterana ho azy rehefa misy domain voarakitra. Mandehana any amin'i **Settings › Domain Seller › Default DNS Records**.

Maneho an'ireo sandan'ny *record* fototra roa izy ireo:

| Token | Ho ovaina amin'izany |
|---|---|
| `{DOMAIN}` | Ny anaran'ny domain voarakitra (ohatra, `example.com`) |
| `{SITE_URL}` | Ny URL an'ny tranonkala WordPress ho an'ilay toerana an'ilay mpanjifa |

**Ohatra — manondro ny apex domain sy www ho amin'ny IP an'ny server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: fijerena sy fanovana DNS {#admin-viewing-and-editing-dns}

Afaka mijery sy manova ny DNS records ho an'ny domain an'ilay mpanjifa rehetra ianao amin'ny alalan'ny pejy fanovana domain ao amin'i **Network Admin › Ultimate Multisite › Domains**.
