---
title: Fhàilte a' Chluas agus DNS an Chluasach
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Field agus Gorcha DNS a' chluarach {#checkout-field-and-customer-dns-management}

## Fhàilteachadh an fhadail cheòrsaichean (Domain Selection checkout field) {#the-domain-selection-checkout-field}

Tha **Domain Selection** (Fhàilteachadh an fhadail cheòrsaichean) èifeachd cheòrsaichean a tha air a bhith ar cheòrsaichean a tha a' leum nas eòlas a bhith ag tighinn. Bidh e a' chluarach cheòrsaichean gu robh a' leum a thabhairt choic air faic a bhith a' leum a thabhairt an sin-eòlas (domain).

### A' chluarach fhadail ar cheòrsaichean {#adding-the-field-to-a-checkout-form}

1. Comas do **Network Admin › Ultimate Multisite › Checkout Forms**
2. Bidh e a' chluarach fhadail air a bhith air a bhith agad, no tha e a' leum a thabhairt an sin-eòlas (checkout form).
3. Mar a tha thu air a' cheòrsaichean, cuir **Add Field** (A' chluarach fhadail)
4. Tóg **Domain Selection** (Fhàilteachadh an fhadail cheòrsaichean) a' leum a' chluarach fhadail.
5. Rannsechadh na fhadail (see below).
6. Rannsechadh an fhadail.

### Fhadail options {#field-options}

**Domain modes** — Tóg an tabhan a tha a' leum a' cheòrsaichean a' leum a' faic. Is e mode air a bhith ag tighinn no air a bhith a' leum a' dèanamh air torbhaidh:

| Mode | Tha e a' leum a' dèanamh |
|---|---|
| **Subdomain** (Subdomain) | Bidh an cheòrsaichean a' leum a' faic air sin-eòlas fada (free subdomain) ar tairgseil a tha agad (e.g., `mysite.yournetwork.com`). Tha eachd a' leum a' chluarach. |
| **Register New Domain** (Gorcha sin-eòlas new) | Bidh an cheòrsaichean a' leum a' faic sin-eòlas new agus a' leum a' dèanamh air torbhaidh gu sgaidh a tha agad. Tha e a' leum a' chluarach an sin-eòlas a tha ag tighinn airson prìdhionadh (pricing). |
| **Existing Domain** (Sin-eòlas a' chluarach) | Bidh an cheòrsaichean a' leum a' chluarach sin-eòlas a tha e a' leum a' guth. Tha eachd a' leum a' dèanamh air torbhaidh a' leum a' chluarach. Tha an sin-eòlas ag tighinn gu sgaidh air a site. |

**Default mode** — Nuair a tha sin na triobh mode a' leum a' tighinn, cudromach a bhith a' leum a' cheann tab a' chluarach. Cuir e a' leum a' Subdomain gu robh an gorcha sin-eòlas a bhith optional, no cuir e a' leum a' Register New Domain gu robh a' leum a' dèanamh torbhaidh air a chluarach.

**Domain product** — Tha e a' leum a' pinneadh an fhadail air pròdhadh sin-eòlas a tha ag tighinn? Mar a tha e a' leum a' set, beir an addon a' leum a' dèanamh torbhaidh pròdhadh a tha a' leum a' chluarach gu sgaidh air an TLD a tha a' leum a' cheann.

### Fhadail contact a' chluarach (Registrant contact fields) {#registrant-contact-fields}

Nuair a thabhairt an cheòrsaichean sin tab **Register New Domain** (Gorcha sin-eòlas new), bidh an fhadail cheòrsaichean a' leum a' tighinn air a bhith ag tighinn gu sgaidh:

- Amas a' chluarach / Sin-aon (First name / Last name)
- E-mail address
- Àite (Address - lín 1, caisteal, staid/province, codaid post, tairgseil)
- Numbair phàirc (Phone number)

Se uile aith a tha riaghnaidhnean a hird a' chùlna. Bhaidh na nümfha phàirc a foirmeadh gu mheic air an fòmage `+CC.NNN` a tha a' sgaidh airson aith riaghnaidhnean.

### URL site a thàinig air an t-seòl (Auto-generated site URL) {#auto-generated-site-url}

Nuair a thann a chluain a' sgrìobhdaichinn no a' chlàradh domhainn, tha an fhaighinn site URL a' chlàradh gu mheic air an domhainn a thàinig. Cha thuill a' chluain a' sgrìobhadh a' chlàradh URL seachdaidh.

### Comharbhaidh seanchas (Search behaviour) {#search-behaviour}

- Bhaidh eadar-dheargadh domhainn a' cheannach air an seamaid AJAX gu mheic air a tha thuill a' sgrìobhadh
- Bhaidh eadar-dheargadh TLDs eile a' chlàradh a' chlàradh gu sònach nuair a tha an domhainn a thàinig a' tòiseachadh
- Bhaidh prìs a fhaighinn gu seachdaidh agus a' chlàradh gu mheic (prìs riaghnaidhneach, prìs atharrachadh, feisaidh WHOIS privacy optional)
- Bhaidh codal coupon a' sgrìobhadh air eirinn domhainn a' chlàradh a' chlàradh gu fìor mar a tha eirinn a' chlàradh eile

**Tineadh an seanchas:**

```php
// A' crìochnaich an tòiseachadh (milliseconds) airson a' chluann air aith riaghnaidhneach air coimhneachdan leatamach
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**A' sgrìobhadh fhaighinn a' chluann ùr air an fòmage seanchas domhainn:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Notean a tha fhaighinn'
    ];
    return $fields;
});
```

---

## Bhriseadh DNS a' chluain (Customer DNS management) {#customer-dns-management}

Chaill thuill a' chluain a' sgrìobhadh riaghnaidhnean DNS airson eirinn domhainn a tha a' cheannach air an seamaid **My Account**, a' chlàradh a thàinig.

### Tipean riaghnaidh a tha a' tòiseachadh (Supported record types) {#supported-record-types}

| Tipe | Aig an t-seul |
|---|---|
| **A** | A' chlàradh namhan air a' chluann IPv4 |
| **AAAA** | A' chlàradh namhan air a' chluann IPv6 |
| **CNAME** | Creag an t-seul eile a' chlàradh gu sònach |
| **MX** | Set an seann-bhàs mail |
| **TXT** | Aig SPF, DMARC, fhaighinn, no riaghnaidhnean text eile a' cheannach |

### Còmhraidhean a tha a' tòiseachadh air bhriseadh DNS? {#which-providers-support-dns-management}

Mae còmhla a bhith agad air seachdaidhean DNS (a gineadh, atharrachadh, a guth) gu **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, agus **Openprovider**. Cuilean domain-nòth de Hostinger leic seachdaidhean namsevers a atharrachadh gu Domain Seller; tha seachdaidhean DNS airson domain-nòth a tha sgrùdhaidh de dhòigh (hosted domains) a guthgheadh de chùlchnach air an t-sgrùdhaidh Hostinger. Tha seachdaidhean DNS airson domain-nòth a tha ag obair gu leithid de chùlchnach a tha sgrùdhaidh (control panel) a guthgheadh.

### Seachdaidhean DNS a tha air a bhith agad {#default-dns-records}
Is eadar an t-sgrùdhaidhean DNS a tha agad a bhith ag obair gu leithid de chùlchnach a tha sgrùdhaidh (Default DNS records) a tha agad a bhith agad air a gineadh gu am beò. Comharrach gu **Settings › Domain Seller › Default DNS Records**.

Tha curtachieidhean seachdaidhean a tha ag obair le duinean:

| Token | A thabhail air |
|---|---|
| `{DOMAIN}` | An t-sgrùdhaidh domain-nòth (e.g., `example.com`) |
| `{SITE_URL}` | An t-url site WordPress airson an sith de dhòigh |

**Eisimpleir — a thabhail apex domain agus www gunna air IP de thann:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: a ghlacadh agus atharrachadh seachdaidhean DNS {#admin-viewing-and-editing-dns}

Leic admin-nòth (Network admins) tha thuair a ghlacadh agus a atharrachadh seachdaidhean DNS airson domain-nòth air an t-sgrùdhaidh de dhòigh gu **Network Admin › Ultimate Multisite › Domains**.
