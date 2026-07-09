---
title: Indawo yokugqiba ukuthenga kunye ne-DNS yoMthengi
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Ulawulo lwe-Checkout Field kunye ne-DNS yabathengi

## I-Checkout Field yokukhetha i-domain

I-**Domain Selection** field yinto ye-checkout enika abathengi ukhetho lwendlela yokufumana i-domain yesayithi yabo. Yongeze kuyo nayiphi na ifomu ye-checkout ukuze uvumele ukuthengiswa kwee-domain.

### Ukongeza i-field kwifomu ye-checkout

1. Yiya ku-**Network Admin › Ultimate Multisite › Checkout Forms**
2. Vula okanye wenze ifomu ye-checkout
3. Kumhleli we-checkout, cofa **Add Field**
4. Khetha **Domain Selection** kuluhlu lwee-field
5. Lungisa iinketho ze-field (jonga ngezantsi)
6. Gcina ifomu

### Iinketho ze-field

**Iindlela ze-domain** — Khetha ukuba zeziphi ii-tab ezibonwa ngumthengi. Indlela nganye inokuvulwa okanye icinywe ngokuzimeleyo:

| Indlela | Into eyenzayo |
|---|---|
| **Subdomain** | Umthengi usebenzisa i-subdomain yasimahla kwinethiwekhi yakho (umz., `mysite.yournetwork.com`). Akukho ntlawulo ifunekayo. |
| **Register New Domain** | Umthengi ukhangela i-domain entsha aze ayibhalise ngomboneleli ommiseleyo. Isebenzisa imveliso ye-domain ehambelanayo kumaxabiso. |
| **Existing Domain** | Umthengi udibanisa i-domain asele enayo. Akukho ntlawulo yobhaliso. I-domain idityaniswa ngokuzenzekelayo kwisayithi yakhe. |

**Indlela emiselweyo** — Xa zonke ezi ndlela zintathu zivuliwe, yeyiphi i-tab evuleka kuqala. Yimisa ku-**Subdomain** ukuze ugcine ubhaliso lwe-domain lukhethwa ngokuzithandela, okanye ku-**Register New Domain** ukukhuthaza ukuthengwa.

**Imveliso ye-domain** — Ngokuzithandela, qhoboshela le field kwimveliso ethile ye-domain. Ukuba ayimiselwanga, i-addon ikhetha ngokuzenzekelayo imveliso ehambelanayo ngokusekelwe kwi-TLD ekhangelwa ngumthengi.

### Ii-field zoqhagamshelwano lombhalisi

Xa umthengi ekhetha i-tab ethi **Register New Domain**, ifomu ye-checkout yongeza ii-field zoqhagamshelwano lombhalisi ngaphakathi:

- Igama lokuqala / Ifani
- Idilesi ye-imeyile
- Idilesi (umgca 1, isixeko, iphondo/urhulumente, ikhowudi yeposi, ilizwe)
- Inombolo yefowuni

Ezi ziyafuneka kubo bonke ababhalisi kwaye ziqinisekiswa ngaphambi kokuba kwenziwe umnxeba we-registration API. Iinombolo zefowuni zifomathwa ngokuzenzekelayo kwifomathi yamazwe ngamazwe ethi `+CC.NNN` elindelwe ngababhalisi.

### I-URL yesayithi eyenziwa ngokuzenzekelayo

Xa umthengi ebhalisa okanye edibanisa i-domain, i-field ye-URL yesayithi izaliswa ngokuzenzekelayo kwi-domain ekhethiweyo. Abathengi akufuneki bagcwalise i-field ye-URL eyahlukileyo.

### Ukuziphatha kokukhangela

- Ukufumaneka kwe-domain kujongwa ngexesha lokwenyani nge-AJAX njengoko umthengi echwetheza
- Iingcebiso zezinye ii-TLD ziboniswa xa i-domain ekhethiweyo ingafumaneki
- Amaxabiso alandwa ngexesha lokwenyani kwaye aboniswa ngokucacileyo (ixabiso lobhaliso, ixabiso lohlaziyo, umrhumo wokuzithandela we-WHOIS privacy)
- Iikhowudi ze-coupon zisebenza kwiimveliso ze-domain ngendlela efanayo nayo nayiphi na enye imveliso

**Ukulungelelanisa ukusabela kokukhangela:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ukongeza ii-field ezenzelwe wena kwifomu yokukhangela i-domain:**

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

## Ulawulo lwe-DNS lwabathengi

Abathengi banokulawula iirekhodi ze-DNS zee-domain zabo ezibhalisiweyo kwiphepha le-**My Account**, phantsi kongeniso lwe-domain yabo.

### Iintlobo zeerekhodi ezixhaswayo

| Uhlobo | Ukusetyenziswa |
|---|---|
| **A** | Dibanisa igama lomamkeli kwidilesi ye-IPv4 |
| **AAAA** | Dibanisa igama lomamkeli kwidilesi ye-IPv6 |
| **CNAME** | Yenza isibizo esikhomba kwelinye igama lomamkeli |
| **MX** | Misela iseva yokutshintshiselana ngeposi |
| **TXT** | Yongeza i-SPF, i-DMARC, uqinisekiso, okanye ezinye iirekhodi zombhalo |

### Ngabaphi ababoneleli abaxhasa ulawulo lwe-DNS?

Ulawulo lwe-DNS (ukongeza, ukuhlela, ukucima iirekhodi) luyafumaneka nge-**OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, kunye ne-**Openprovider**. Ii-domain ze-**Hostinger** zinokuhlaziya ii-nameserver nge-Domain Seller; iirekhodi ze-DNS zee-domain ezibanjelweyo zilawulwa ludibaniso oluphambili lwe-Hostinger domain-mapping. Ii-domain ze-Namecheap, GoDaddy, kunye ne-NameSilo zibonisa imeko kunye nolwazi lokuphelelwa lixesha kodwa i-DNS kufuneka ilawulwe ngqo kwipaneli yolawulo yombhalisi.

### Iirekhodi ze-DNS ezimiselweyo

Unokumisela iirekhodi ze-DNS ezimiselweyo ezisetyenziswa ngokuzenzekelayo xa i-domain ibhalisiwe. Yiya ku-**Settings › Domain Seller › Default DNS Records**.

Amaxabiso eerekhodi ezimiselweyo axhasa ii-token ezimbini:

| Token | Itshintshwa ngo |
|---|---|
| `{DOMAIN}` | Igama le-domain ebhalisiweyo (umz., `example.com`) |
| `{SITE_URL}` | I-URL yesayithi ye-WordPress yesayithi yomthengi |

**Umzekelo — khomba i-apex domain kunye ne-www kwi-IP yeseva yakho:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: ukubukela nokuhlela i-DNS

Abalawuli benethiwekhi banokujonga kwaye bahlele iirekhodi ze-DNS zayo nayiphi na i-domain yomthengi kwiphepha lokuhlela le-domain ku-**Network Admin › Ultimate Multisite › Domains**.
