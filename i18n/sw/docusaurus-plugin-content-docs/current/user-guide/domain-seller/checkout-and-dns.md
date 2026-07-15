---
title: Sehemu ya Malipo na DNS ya Mteja
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Uwanja wa Malipo na Usimamizi wa DNS wa Wateja

## Uwanja wa malipo wa Uteuzi wa Kikoa {#the-domain-selection-checkout-field}

Uwanja wa **Uteuzi wa Kikoa** ni kipengele cha malipo kinachowapa wateja chaguo la jinsi ya kupata kikoa cha tovuti yao. Uongeze kwenye fomu yoyote ya malipo ili kuwezesha uuzaji wa vikoa.

### Kuongeza uwanja kwenye fomu ya malipo {#adding-the-field-to-a-checkout-form}

1. Nenda kwenye **Msimamizi wa Mtandao › Ultimate Multisite › Fomu za Malipo**
2. Fungua au unda fomu ya malipo
3. Katika kihariri cha malipo, bofya **Ongeza Uwanja**
4. Chagua **Uteuzi wa Kikoa** kutoka kwenye orodha ya nyuga
5. Sanidi chaguo za uwanja (tazama hapa chini)
6. Hifadhi fomu

### Chaguo za uwanja {#field-options}

**Hali za kikoa** — Chagua vichupo ambavyo mteja ataona. Kila hali inaweza kuwezeshwa au kulemazwa kivyake:

| Hali | Inachofanya |
|---|---|
| **Kikoa kidogo** | Mteja hutumia kikoa kidogo cha bure kwenye mtandao wako (mf., `mysite.yournetwork.com`). Hakuna malipo yanayohitajika. |
| **Sajili Kikoa Kipya** | Mteja hutafuta kikoa kipya na kukisajili kupitia mtoa huduma uliyemsanidi. Hutumia bidhaa ya kikoa inayolingana kwa upangaji bei. |
| **Kikoa Kilichopo** | Mteja huunganisha kikoa anachomiliki tayari. Hakuna ada ya usajili. Kikoa huunganishwa kiotomatiki kwenye tovuti yao. |

**Hali chaguomsingi** — Wakati hali zote tatu zimewezeshwa, ni kichupo kipi hufunguka kwanza. Weka kuwa **Kikoa kidogo** ili kufanya usajili wa kikoa uwe wa hiari, au **Sajili Kikoa Kipya** ili kuhimiza ununuzi.

**Bidhaa ya kikoa** — Kwa hiari, weka uwanja huu ushikwe na bidhaa mahususi ya kikoa. Ikiwa haijawekwa, addon huchagua kiotomatiki bidhaa inayolingana kulingana na TLD ambayo mteja anatafuta.

### Nyuga za mawasiliano ya msajili {#registrant-contact-fields}

Mteja anapochagua kichupo cha **Sajili Kikoa Kipya**, fomu ya malipo huongeza nyuga za mawasiliano ya msajili ndani ya mstari:

- Jina la kwanza / Jina la mwisho
- Anwani ya barua pepe
- Anwani (mstari wa 1, jiji, jimbo/mkoa, msimbo wa posta, nchi)
- Nambari ya simu

Hizi zinahitajika na wasajili wote na huthibitishwa kabla ya mwito wa API wa usajili kufanywa. Nambari za simu huumbizwa kiotomatiki kuwa muundo wa kimataifa wa `+CC.NNN` unaotarajiwa na wasajili.

### URL ya tovuti inayozalishwa kiotomatiki {#auto-generated-site-url}

Mteja anaposajili au kuunganisha kikoa, uwanja wa URL ya tovuti hujazwa kiotomatiki kutoka kwenye kikoa kilichochaguliwa. Wateja hawahitaji kujaza uwanja tofauti wa URL.

### Tabia ya utafutaji {#search-behaviour}

- Upatikanaji wa kikoa hukaguliwa kwa wakati halisi kwa AJAX kadiri mteja anavyoandika
- Mapendekezo mbadala ya TLD huonyeshwa wakati kikoa kinachopendelewa hakipatikani
- Bei huchukuliwa moja kwa moja na kuonyeshwa wazi (bei ya usajili, bei ya usasishaji, ada ya hiari ya faragha ya WHOIS)
- Misimbo ya kuponi hutumika kwa bidhaa za kikoa sawa na bidhaa nyingine yoyote

**Kurekebisha mwitikio wa utafutaji:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Kuongeza nyuga maalum kwenye fomu ya utafutaji wa kikoa:**

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

## Usimamizi wa DNS wa wateja {#customer-dns-management}

Wateja wanaweza kudhibiti rekodi za DNS kwa vikoa vyao vilivyosajiliwa kutoka ukurasa wa **Akaunti Yangu**, chini ya ingizo la kikoa chao.

### Aina za rekodi zinazotumika {#supported-record-types}

| Aina | Matumizi |
|---|---|
| **A** | Unganisha jina la hosti na anwani ya IPv4 |
| **AAAA** | Unganisha jina la hosti na anwani ya IPv6 |
| **CNAME** | Unda jina mbadala linaloelekeza kwenye jina lingine la hosti |
| **MX** | Weka seva ya ubadilishanaji wa barua |
| **TXT** | Ongeza SPF, DMARC, uthibitishaji, au rekodi nyingine za maandishi |

### Ni watoa huduma gani wanaounga mkono usimamizi wa DNS? {#which-providers-support-dns-management}

Usimamizi wa DNS (kuongeza, kuhariri, kufuta rekodi) unapatikana kwa **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, na **Openprovider**. Vikoa vya **Hostinger** vinaweza kusasisha nameservers kupitia Domain Seller; rekodi za DNS kwa vikoa vilivyohostiwa hudhibitiwa na muunganisho mkuu wa uunganishaji-vikoa wa Hostinger. Vikoa vya Namecheap, GoDaddy, na NameSilo huonyesha hali na taarifa za mwisho wa muda, lakini DNS lazima idhibitiwe moja kwa moja kwenye paneli ya udhibiti ya msajili.

### Rekodi chaguomsingi za DNS {#default-dns-records}

Unaweza kusanidi rekodi chaguomsingi za DNS zinazotumika kiotomatiki kikoa kinaposajiliwa. Nenda kwenye **Mipangilio › Domain Seller › Rekodi Chaguomsingi za DNS**.

Thamani chaguomsingi za rekodi zinaunga mkono tokeni mbili:

| Tokeni | Hubadilishwa na |
|---|---|
| `{DOMAIN}` | Jina la kikoa kilichosajiliwa (mf., `example.com`) |
| `{SITE_URL}` | URL ya tovuti ya WordPress kwa tovuti ya mteja |

**Mfano — elekeza kikoa cha apex na www kwenye IP ya seva yako:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Msimamizi: kutazama na kuhariri DNS {#admin-viewing-and-editing-dns}

Wasimamizi wa mtandao wanaweza kutazama na kuhariri rekodi za DNS kwa kikoa chochote cha mteja kutoka ukurasa wa kuhariri wa kikoa katika **Msimamizi wa Mtandao › Ultimate Multisite › Vikoa**.
