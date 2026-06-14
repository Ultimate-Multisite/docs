---
title: Pānga Whakawātea me DNS o te Wheneaha
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Whakamana Whakamahi me Kaha DNS o te Whene

## Te pāngere Domain Selection checkout field

He mea he pāngere i te checkout he tino whai ake ana ki aha te hoki o te domain o te wāhi. Whakawhana i **Domain Selection** i tō fōmā checkout kia taea ai ngā mea katoa e ngā mea hei pēke i te domain.

### Whakau i te pāngere i te fōmā checkout

1. Pāinga ki **Network Admin › Ultimate Multisite › Checkout Forms**
2. Whakaaro au he fōmā checkout, pe āwhi ana koe i te whakatō i tō fōmā checkout
3. I te editor o te checkout, whakatipu i **Add Field**
4. Whakarite **Domain Selection** mai i te list o ngā pāngere
5. Whakawhana i ngā option o te pāngere (pāpā i roto)
6. Whakawhana i te fōmā

### Option o te pāngere

**Domain modes** — Whakarite i ngā tab he whakaatu ki te koutou. He taea ai whakamahi ana ko ngā mode katoa, he taea ai whakamutu ana ko ngā mode katoa:

| Mode | He aha te tino mahi |
|---|---|
| **Subdomain** | Ka whai te koutou i subdomain mātāho (free) ki te wāhi o tō network (e.g., `mysite.yournetwork.com`). Ae rawa he mea e pēke ana. |
| **Register New Domain** | Ka whakatere te koutou i domain hou me te whakamaoritia ana i a ia mō tō whaiaro e ngā provider he whakatō ana koe. Whakawhana i te puta mai o te product matching ki te whakaingo. |
| **Existing Domain** | Ka whakamahi te koutou i domain he tino kua e hua ana. Ae rawa he pēke whakamana. Ka whakamaoritia ai te domain mātāho ki tō wāhi mātāho automatically. |

**Default mode** — I roto i te wā he katoa ngā mode katoa, he aha te tab he ka whakahou i runga i muri? Whakarite ana i **Subdomain** kia whakatū te whakamaoritia o te domain he mea e taea anō, he tino whakamutunga ki **Register New Domain** kia whakatere i ngā pēke.

**Domain product** — He kaha ai koe ki te whakatō tēnei pāngere ki te product domain-specific he tino tika ana. Ae rawa he set, ko e kore e whakamaoritia ana te addon he matching product based on the TLD he whakatere ana te koutou.

### Pāngere o te whakapā i te whaiaro (Registrant contact fields)

I roto i te wā he whakatere koe i te tab **Register New Domain**, ka whero te fōmā checkout i ngā pāngere o te whakapā i te whaiaro:

- Whānau / Nama
- Email address
- Addres (line 1, city, state/province, postal code, country)
- Phone number

Kua tino pēnei e pēnei ake ana e ngā registrar katoa me te whakamārama i te mea kua oti te whakamārama i te API registration. Ka whakamaoritia ngā nomurau pūtahe (phone numbers) ki te format hoatoa o au ratoa (international format) `+CC.NNN` e whai ake nei e whakaaakitanga o ngā registrar.

### URL o te wāhi i roto i te site (Auto-generated site URL)

I take i te mea ka whakatere koe he mea, ka whakamaoritia te URL o te wāhi i roto i te site (site URL field) anō ana i te domain e whai ake. Kaau e hiahia ngā mea katoa ki te whakatira i te URL i roto i te fēneke.

### Aho whakamua o te whakatira (Search behaviour)

- Ka whakamaoritia te whakahirahira o te domain i te wā real-time me AJAX i roto i te wā ka whakatira koe
- Ka whakaataki ngā suggestion TLD alternative (alternative top-level domains) i roto i te wā ka pēnei te domain e whai ake ana ka pēnei te mea e pēnei te domain e whai ake ana.
- Ka whakahaerehia te whakaingo (pricing) i te wā live me ka whakaataki i te pai (registration price, renewal price, optional WHOIS privacy fee) i runga i te pai.
- Ka whakapatia ngā coupon codes ki ngā mga puta noa o domain products ko te mea katoa.

**Whakawātea te whakatira:**

```php
// Whakaaheke te wā pōtiki (milliseconds) kia whai ake i ngā API calls i ngā koneki pēnei
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Whakapehe i mga puta noa ki te fōme o whakatira domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Kaha o te whakamaoritia DNS (Customer DNS management)

Ka taea e ngā mea katoa te whakamaoritia i ngā record DNS mō ngā domain kua whakatere koe noa i te **My Account** page, i runga i te whakataki o tō domain.

### Ngā wāhi o te record (Supported record types)

| Wāhi | Whakarite |
|---|---|
| **A** | Ka whakatira te hostname ki te IPv4 address |
| **AAAA** | Ka whakatira te hostname ki te IPv6 address |
| **CNAME** | Ka whakahara i alias (alias) e pōtiki ki te hostname hou |
| **MX** | Ka whakamaoritia te mail exchange server |
| **TXT** | Ka puta SPF, DMARC, verification, ko ngā record text kia oti |

### He aha ngā whai whakaaro (providers) ka whakatere DNS?

Kia ora! He tino pai tēnei whakamārama mō te whakahaere o DNS.

He whānau o mga wahi (records) DNS, he tino kaha ana i te **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, me **Openprovider**. Mō domain o **Hostinger**, e taea ai te whakapuaki i ngā nameservers mō te whakamua o te Domain Seller. Ko ngā wahi DNS mō ngā domain o whai hoahoa (hosted domains) e whakahaere ana roto i te core Hostinger domain-mapping integration. Mō **Namecheap**, **GoDaddy**, me **NameSilo** domain, e whakaatu ana ngā statusi me ngā wā o te whae, engari me whakahaere i ngā DNS mōhanga i te panel o te registrar tekau.

### Ngā wahi DNS pēnei (Default DNS records)

E taea ai koe te whakarite ngā wahi DNS pēnei (default DNS records) e whakamahia ana automatically i roto i te wā o te whai hoahoa domain. Pāpāke ki **Settings › Domain Seller › Default DNS Records**.

Ngā mōhaka o ngā wahi pēnei e whakaatu i ngā token rua:

| Token | E whakaiti atu i |
|---|---|
| `{DOMAIN}` | Te ingoa o te domain e whai hoahoa (e.g., `example.com`) |
| `{SITE_URL}` | Te URL o te wahi WordPress mō te wā o te mea o te mea o te mea o te customer |

**Whakarepēri — Whakarite i te apex domain me www ki te IP o tō server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: Whakarite me whakawhiti i ngā DNS

E taea ai mō ngā admin o te whānau (network admins) te whakaahua me te whakawhiti i ngā wahi DNS mō ahau domain o te customer, i runga i te manawa o te whai hoahoa domain i **Network Admin › Ultimate Multisite › Domains**.
