---
title: Ààyè Ìparí Ìrajà àti DNS Oníbàárà
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Field Checkout àti Ìṣàkóso DNS Oníbàárà

## Field checkout Yíyan Domain

Field **Domain Selection** jẹ́ èròjà checkout tó fún àwọn oníbàárà ní yíyan bí wọ́n ṣe fẹ́ gba domain site wọn. Ṣàfikún rẹ̀ sí fọ́ọ̀mù checkout èyíkéyìí láti mú títà domain ṣiṣẹ́.

### Ṣíṣàfikún field náà sí fọ́ọ̀mù checkout

1. Lọ sí **Network Admin › Ultimate Multisite › Checkout Forms**
2. Ṣí tàbí dá fọ́ọ̀mù checkout kan sílẹ̀
3. Nínú olóòtú checkout, tẹ **Add Field**
4. Yan **Domain Selection** láti inú àtòjọ field
5. Ṣètò àwọn aṣayan field náà (wo ìsàlẹ̀)
6. Fi fọ́ọ̀mù náà pamọ́

### Àwọn aṣayan field

**Àwọn ipo domain** — Yan àwọn tab tí oníbàárà yóò rí. Ipo kọ̀ọ̀kan lè ṣiṣẹ́ tàbí kí ó má ṣiṣẹ́ lọ́tọ̀ọ̀tọ̀:

| Ipo | Ohun tí ó ń ṣe |
|---|---|
| **Subdomain** | Oníbàárà máa lo subdomain ọ̀fẹ́ lórí network rẹ (fún àpẹẹrẹ, `mysite.yournetwork.com`). Kò nílò ìsanwó. |
| **Register New Domain** | Oníbàárà ń wá domain tuntun, ó sì ń forúkọsílẹ̀ rẹ̀ nípasẹ̀ provider tí o ti ṣètò. Ó máa ń lo ọja domain tó bá a mu fún ìdíyelé. |
| **Existing Domain** | Oníbàárà máa map domain tí ó ti ní tẹ́lẹ̀. Kò sí owó ìforúkọsílẹ̀. Domain náà ni a máa map laifọwọyi sí site wọn. |

**Ipo aiyipada** — Nígbà tí gbogbo ipo mẹ́tẹ̀ẹ̀ta bá ṣiṣẹ́, tab wo ni yóò kọ́kọ́ ṣí. Ṣètò sí **Subdomain** láti jẹ́ kí ìforúkọsílẹ̀ domain jẹ́ àṣàyàn, tàbí **Register New Domain** láti mú kí rírà pọ̀ sí i.

**Ọja domain** — Bí o bá fẹ́, so field yìí mọ́ ọja domain kan pàtó. Bí a kò bá ṣètò rẹ̀, addon náà yóò yan ọja tó bá TLD tí oníbàárà wá mu laifọwọyi.

### Àwọn field ìkànsí registrant

Nígbà tí oníbàárà bá yan tab **Register New Domain**, fọ́ọ̀mù checkout náà yóò ṣàfikún àwọn field ìkànsí registrant sínú ila:

- Orúkọ àkọ́kọ́ / Orúkọ ìdílé
- Àdírẹ́sì email
- Àdírẹ́sì (ila 1, ìlú, ìpínlẹ̀/agbegbe, kóòdù ìfìwéránṣẹ́, orílẹ̀-èdè)
- Nọ́ńbà fóònù

Gbogbo registrars ló nílò àwọn wọ̀nyí, a sì máa ṣàyẹ̀wò ìtọ́jú wọn ṣáájú kí a tó ṣe ìpè API ìforúkọsílẹ̀. Àwọn nọ́ńbà fóònù ni a máa ṣètò laifọwọyi sí fọ́ọ̀mátì àgbáyé `+CC.NNN` tí registrars ń retí.

### URL site tí a dá sílẹ̀ laifọwọyi

Nígbà tí oníbàárà bá forúkọsílẹ̀ tàbí map domain kan, field URL site ni a máa kun laifọwọyi láti domain tí a yan. Àwọn oníbàárà kò nílò láti kun field URL míì lọ́tọ̀.

### Ìhùwàsí ìwá

- A máa ṣàyẹ̀wò wíwà domain ní àsìkò gidi pẹ̀lú AJAX bí oníbàárà ṣe ń tẹ̀
- Àwọn àbá TLD míì ni a máa fi hàn nígbà tí domain tí a fẹ́ bá kò sí
- A máa gba ìdíyelé ní àsìkò gidi, a sì máa fi hàn kedere (owó ìforúkọsílẹ̀, owó ìtúnse, owó àṣàyàn ìpamọ́ WHOIS)
- Àwọn kóòdù coupon kan sí àwọn ọja domain gẹ́gẹ́ bí ọja míì èyíkéyìí

**Ṣíṣe ìtúnṣe ìfèsì ìwá:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ṣíṣàfikún àwọn field àkànṣe sí fọ́ọ̀mù ìwá domain:**

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

## Ìṣàkóso DNS oníbàárà

Àwọn oníbàárà lè ṣàkóso àwọn record DNS fún àwọn domain tí wọ́n forúkọsílẹ̀ láti ojú-ìwé **My Account**, lábẹ́ àkọsílẹ̀ domain wọn.

### Àwọn record type tí a ṣe àtìlẹ́yìn

| Type | Ìlò |
|---|---|
| **A** | Map hostname sí àdírẹ́sì IPv4 |
| **AAAA** | Map hostname sí àdírẹ́sì IPv6 |
| **CNAME** | Ṣẹ̀dá alias tó ń tọ́ka sí hostname míì |
| **MX** | Ṣètò server ìpàṣípààrọ̀ mail |
| **TXT** | Ṣàfikún SPF, DMARC, ìjìẹ́rìsí, tàbí àwọn record ọrọ̀ míì |

### Àwọn provider wo ni ń ṣe àtìlẹ́yìn fún ìṣàkóso DNS?

Ìṣàkóso DNS (ṣàfikún, ṣàtúnṣe, pa record rẹ́) wà pẹ̀lú **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, àti **Openprovider**. Àwọn domain **Hostinger** lè ṣe ìmúdójúìwọ̀n nameservers nípasẹ̀ Domain Seller; àwọn record DNS fún àwọn domain tí a host ni a ń ṣàkóso nípasẹ̀ integration domain-mapping Hostinger pàtàkì. Àwọn domain Namecheap, GoDaddy, àti NameSilo ń fi ipo àti ìwífún ọjọ́ ìparí hàn ṣùgbọ́n DNS gbọ́dọ̀ jẹ́ ṣíṣe àkóso taara nínú control panel registrar.

### Àwọn record DNS aiyipada

O lè ṣètò àwọn record DNS aiyipada tí a máa lo laifọwọyi nígbà tí domain bá forúkọsílẹ̀. Lọ sí **Settings › Domain Seller › Default DNS Records**.

Àwọn iye record aiyipada ṣe àtìlẹ́yìn fún tokens méjì:

| Token | A rọ́pò rẹ̀ pẹ̀lú |
|---|---|
| `{DOMAIN}` | Orúkọ domain tí a forúkọsílẹ̀ (fún àpẹẹrẹ, `example.com`) |
| `{SITE_URL}` | URL site WordPress fún site oníbàárà náà |

**Àpẹẹrẹ — tọ́ka apex domain àti www sí IP server rẹ:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: wíwo àti ṣíṣàtúnṣe DNS

Àwọn admin network lè wo kí wọ́n sì ṣàtúnṣe àwọn record DNS fún domain oníbàárà èyíkéyìí láti ojú-ìwé àtúnṣe domain náà nínú **Network Admin › Ultimate Multisite › Domains**.
