---
title: Sehemu ya Malipo na DNS ya Mteja
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Usimamizi wa Sehemu ya Malipo na DNS ya Mteja

## Sehemu ya Kuchagua Domain

Sehemu ya **Domain Selection** ni kiungo cha malipo kinachompa wateja chaguo la jinsi ya kupata domain ya tovuti yao. Ongeza sehemu hii kwenye fomu yoyote ya malipo ili kuwezesha uuzaji wa domain.

### Kuongeza sehemu kwenye fomu ya malipo

1. Nenda kwenye **Network Admin › Ultimate Multisite › Checkout Forms**
2. Fungua au unda fomu ya malipo
3. Katika kuhariri malipo, bonyeza **Add Field**
4. Chagua **Domain Selection** kutoka kwenye orodha ya sehemu
5. Sanifisha chaguo za sehemu (ona hapa chini)
6. Hifadhi fomu

### Chaguo za sehemu

**Domain modes** — Chagua tabs ambazo mteja ataziona. Kila mode inaweza kuwimiliki au kuzimishwa kivyake:

| Mode | Inafanya nini |
|---|---|
| **Subdomain** | Mteja anatumia subdomain ya bure kwenye network yako (mfano, `mysite.yournetwork.com`). Hakuna malipo yanayohitajika. |
| **Register New Domain** | Mteja anatafuta domain mpya na kuisajili kupitia provider uliyefanya mipangilio yake. Inatumia bidhaa ya domain inayolingana kwa bei. |
| **Existing Domain** | Mteja anapanga domain ambayo tayari anamiliki. Hakuna ada ya usajili. Domain inapaswa kiotolewe kiotomatiki kwenye tovuti yao. |

**Default mode** — Wakati modes zote tatu zimezimwa, tab gani inafunguliwa kwanza. Weka kwenye **Subdomain** ili kuacha usajili wa domain kuwa wa hiari, au **Register New Domain** ili kuhamasisha ununuzi.

**Domain product** — Chaguo la kuunganisha sehemu hii na bidhaa maalum ya domain. Ikiwa haijafanywa, addon inachagua kiotomatiki bidhaa inayolingana kulingana na TLD ambayo mteja anatafuta.

### Sehemu za Mawasiliano za Msajili

Wakati mteja anachagua tab ya **Register New Domain**, fomu ya malipo inoongeza sehemu za mawasiliano za msajili moja kwa moja:

- Jina la kwanza / Jina la ukoo
- Anwani ya barua pepe
- Anwani (mstari 1, mji, jimbo/wilaya, nambari ya posta, nchi)
- Namba ya simu

Hizi ni muhimu kwa wasajili wote na zinathibitishwa kabla ya kupewa wito wa API wa usajili. Namba za simu huandaliwa kiotomatiki kuwa muundo wa kimataifa wa `+CC.NNN` unaotakiwa na wasajili.

### URL ya Tovuti Inayoundwa Kiotomatiki

Wakati mteja anasajili au anapanga domain, sehemu ya URL ya tovuti inajazwa kiotomatiki kutoka kwenye domain iliyochaguliwa. Wateja hawahitaji kujaza sehemu tofauti ya URL.

### Tabia ya Utafutaji

- Upataji wa domain unathibitishwa kwa wakati halisi kwa kutumia AJAX kadri mteja anavyoandika
- Mapendekezo mbadala ya TLD yanaonyeshwa wakati domain inayopendeza haipo
- Bei inachukuliwa moja kwa moja na kuonyeshwa wazi (bei ya usajili, bei ya urenewal, ada ya faragha ya WHOIS inayoweza kutokea)
- Barua za kupona (Coupon codes) zinatumika kwa bidhaa za domain kama ilivyo kwa bidhaa yoyote nyingine

**Kurekebisha mwitikio wa utafutaji:**

```php
// Ongeza kuchelewesha debounce (milliseconds) ili kupunguza wito wa API kwenye miunganisho ya polepole
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Kuongeza sehemu maalum kwenye fomu ya utafutaji wa domain:**

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

## Usimamizi wa DNS wa Mteja

Wateja wanaweza kusimamia rekodi za DNS kwa domain zao zilizosajiliwa kutoka kwenye ukurasa wa **My Account**, chini ya eneo la domain yao.

### Aina za Rekodi Zinazodumishwa

| Aina | Matumizi |
|---|---|
| **A** | Panga jina la tovuti (hostname) na anwani ya IPv4 |
| **AAAA** | Panga jina la tovuti (hostname) na anwani ya IPv6 |
| **CNAME** | Unda jina la kiashiria (alias) linaloonyesha jina la tovuti lingine |
| **MX** | Weka seva ya kubadilishana barua (mail exchange server) |
| **TXT** | Ongeza rekodi za SPF, DMARC, uthibitisho, au rekodi zingine za maandishi |

### Ni Providers gani zinazosaidia usimamizi wa DNS?

Usimamizi wa DNS (kuongeza, kuhariri, kufuta rekodi) unapatikana na **OpenSRS**, **ResellerClub**, na **Enom**. Domain za Namecheap, GoDaddy, na NameSilo zinaonyesha hali na taarifa za kuisha, lakini DNS lazima isimamishwa moja kwa moja kwenye control panel ya registrar.

### Rekodi za DNS za Kiotomatiki

Unaweza kupanga rekodi za DNS za kiotomatiki ambazo zinatumika kiotomatiki wakati domain inasajiliwa. Nenda kwenye **Settings › Domain Seller › Default DNS Records**.

Thamani za rekodi za kiotomatiki zinasaidia tokens mbili:

| Token | Inabadilishwa na |
|---|---|
| `{DOMAIN}` | Jina la domain lililosajiliwa (mfano, `example.com`) |
| `{SITE_URL}` | URL ya tovuti ya WordPress kwa tovuti ya mteja |

**Mfano — kuonyesha domain kuu na www kwenye IP ya seva yako:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: kuangalia na kuhariri DNS

Watumishi wa network wanaweza kuangalia na kuhariri rekodi za DNS kwa domain yoyote ya mteja kutoka kwenye ukurasa wa kuhariri domain katika **Network Admin › Ultimate Multisite › Domains**.
