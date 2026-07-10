---
title: >-
  Urugero rwo gukoresha uburyo bwo gukoresha ishyirahamwe n'ubwoko bw'umukoresha
  w'umukoresha (Ultimate Multisite), WordPress, no DNS ya mwana.
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Ururu ya Checkout na Umuco w'Umuco wa DNS {#checkout-field-and-customer-dns-management}

## Fomu ya Ururu ya Domain Selection {#the-domain-selection-checkout-field}

Iyo **Domain Selection** ni ibitemo ry'uko mu checkout riyifasha abakoresha kugira uburyo bwo gushobora kugera ku domain rya site yabo. Yaboneka muri fomu yose ya checkout kugira ngo ubwire ubu bwumco bwa domain.

### Gukoresha ibitemo ry'uko mu fomu ya checkout {#adding-the-field-to-a-checkout-form}

1. Gukoresha **Network Admin › Ultimate Multisite › Checkout Forms**
2. Gusa cyangwa gukora fomu ya checkout
3. Mu editor ya checkout, gukoresha **Add Field**
4. Gukoresha **Domain Selection** ku muto w'ibitemo
5. Gutera uburyo bwo ibitemo (bona ku mwiza)
6. Gusa fomu

### Ibyiciro byo ibitemo {#field-options}

**Domain modes** — Urugero ubutumwa abakoresha tab izihe. Ubutumwa bw'ibitemo bishobora gukorwa cyangwa guhagarwa mu buryo bw'ingenzi:

| Mode | Icyo kintu cyikora |
|---|---|
| **Subdomain** | Abakoresha subdomain yose ku network yawe (urugero, `mysite.yournetwork.com`). Nta rurimo ubushobozi bwo gukoresha. |
| **Register New Domain** | Abakoresha gukoresha domain yashya kandi bakoresha uburyo bw'ubwoko bwawe bwo gukoresha kugira ngo yashobore gukoreshwa mu gushyiramo (pricing). |
| **Existing Domain** | Abakoresha gukora domain yakurikira. Nta rurimo ubushobozi bwo gukoresha. Icyo cy'uko kigira uburyo bw'ubwoko bwawe bwo gukoresha mu gushyiramo (pricing).

**Default mode** — Iyo ubutumwa bose bukurwa, tab izihe yoroshye kwiga? Gusa **Subdomain** kugira ngo ubwire gukora domain ryawe ni cyo kigomba gukoreshwa, cyangwa **Register New Domain** kugira ngo abakoresha bashobore gukora.

**Domain product** — Urugero ubutumwa bishobora gukorwa ku product w'ubwoko bw'domain runaka. Nta rurimo guhagarwa, ibitemo byiza bigomba gukoreshwa mu buryo bwo kubara product yashobora gukoresha ubwoko (TLD) abakoresha bashobora gukoresha.

### Ibyiciro byo umukoresha w'ubwoko (Registrant contact fields) {#registrant-contact-fields}

Iyo umukoresha yoroshye **Register New Domain** tab, fomu ya checkout igira ibyiciro byo umukoresha bishobora gukoreshwa mu gihe cyiza:

- Igice cy'ibanze / Icyemezo
- Email address
- Aho (igice 1, urugero, n'ubwoko bw'amahera, ibihi, igice cy'ibigo, uburere)
- Numero ya telefone

Iyi ni ibyo byo mu gihe cyose n'ubwujobozi bwo gukoresha. Icyo cyose bikurikiza mu gihe cyose kandi bikwiye gushyirwa mu gihe cyo gukora registration API call. Icyo cyose cyo telefoni kigira uburyo bw'ibyo byo mu gihe (international format) `+CC.NNN` cyo gukurikiza n'abanyamwuga bwo registration.

### Site URL yashyirwaho yo mu gihe {#auto-generated-site-url}
Igihe umukoresha yashyira kuri domain cyangwa akoreshe domain, igice cyo site URL kigira uburyo bw'ibyo byo mu gihe (automatically populated) ku domain yashyiramo. Abanyamwuga batagomba gukoresha igice cyo URL cy'ingenzi.

### Gukoresha ubushobozi bwo gushaka {#search-behaviour}
- Ubwujobozi bw'ubwoko bwa domain bikwiye gushakira mu gihe (real-time) ku rugero ukoreshe iyo umukoresha yandikira
- Uburyo bwo gushyiraho TLD ziri zikurikiranwa iyo domain yashaka itarimo
- Ubwoko bw'ibyo byo mu gihe bikwiye gushakira mu gihe kandi bikwiye gushobora kubona neza (amashyiramo y'registration, amashyiramo y'gukoresha cyangwa amafaranga yo ku WHOIS privacy)
- Coupon codes bikwiye gukoreshwa kuri domain products nk'uko byo mu gihe byo mu gihe.

**Gukora uburyo bwo gushaka mu gihe (Tuning search responsiveness):**

```php
// Gukomeza umuvugizi w'debounce (milliseconds) kugira ngo utangire uburyo bw'API ku nshya za konezi
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Gusobanura ibyo byo mu gihe kuri search form y'domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Icyemezo cyangwa ibindi byo mu gihe',
    ];
    return $fields;
});
```

---

## Gukemura DNS kuri abanyamwuga (Customer DNS management) {#customer-dns-management}

Abanyamwuga bashobora gukemura DNS records ku domain babo bafite mu **My Account**, mu gihe cy'ingenzi y'domain.

### Ubwoko bw'ibyo byo mu gihe bikurikiranwa {#supported-record-types}
| Type | Gukoresha
|---|---|
| **A** | Gutangira hostname kuri IPv4 address
| **AAAA** | Gutangira hostname kuri IPv6 address
| **CNAME** | Gukora alias (igice cy'ingenzi) kugaragaza hostname kanini
| **MX** | Gutangira server y'email
| **TXT** | Gutangira SPF, DMARC, gukoresha ubwoko bwa text runaka, cyangwa ibindi byo mu gihe

### Abanyamwuga bafite uburyo bwo gukemura DNS? {#which-providers-support-dns-management}

Gusobanura yemezo (gukoresha, gukoresha, gukoresha) cyo DNS (DNS management) ni ari mu gihe cyo **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, n'**Openprovider**. Icyo cyo Hostinger byo cyo domain yashobora guhindura amakuru y'ibanga (nameservers) binyuze mu gihe cyo Domain Seller; ibanga ry'ibanga (DNS records) ku gihe cyo domain yashyiramo ni gukoresha uburyo bw'ubwoko bw'umukono (core Hostinger domain-mapping integration). Namecheap, GoDaddy, n'NameSilo domain byo bishobora kumenya uburenganzira no igihe cyo gufira (expiry information) ariko DNS ni gukoresha mu gihe cyo uburyo bw'umukono bw'ubwoko bw'umukono (registrar's control panel).

### Amakuru y'ibanga ry'umukono (Default DNS records) {#default-dns-records}

Yishobora gukoresha amakuru y'ibanga ry'umukono (default DNS records) yashobora gufite mu gihe cyo domain yashyiramo. Gukoresha **Settings › Domain Seller › Default DNS Records**.

Amakuru y'ibanga ry'umukono ni igihe cyo gukoresha ibintu bibiri:

| Token | Bishobora guhindurwa kuri |
|---|---|
| `{DOMAIN}` | Izina ry'ibanga (e.g., `example.com`) |
| `{SITE_URL}` | URL y'ubwoko bw'WordPress ku gihe cyo domain ya muntu |

**Urugero — gukoresha apex domain no www kugira ngo yishobore mu server IP yawe:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: gukoresha no guhindura DNS {#admin-viewing-and-editing-dns}

Abantu b'ubwoko bw'umuganda (Network admins) bashobora kumenya no guhindura amakuru y'ibanga ry'umukono kuri domain yose ya muntu mu gihe cyo gufite ku gihe cyo gukoresha **Network Admin › Ultimate Multisite › Domains**.
