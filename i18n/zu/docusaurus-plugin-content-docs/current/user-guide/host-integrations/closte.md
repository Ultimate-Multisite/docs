---
title: Ukuhlanganiswa kwe-Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Ukuhlanganiswa kwe-Closte

## Ukubuka konke
I-Closte iyinkundla yokusingatha ye-WordPress ephethwe, eyakhiwe kungqalasizinda ye-Google Cloud. Lokhu kuhlanganiswa kuvumela ukuvumelanisa okuzenzakalelayo kwezizinda nokuphathwa kwezitifiketi ze-SSL phakathi kwe-Ultimate Multisite ne-Closte.

## Izici
- Ukuvumelanisa okuzenzakalelayo kwezizinda
- Ukuphathwa kwezitifiketi ze-SSL
- Ukusekelwa kwezizinda ze-wildcard
- Akudingeki ukulungiselela uma kusebenza ku-Closte

## Izimfuneko
I-constant elandelayo kufanele ichazwe kufayela lakho le-`wp-config.php` uma usebenzisa i-Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Le constant ngokuvamile isivele ichaziwe uma usingathwe ku-Closte.

## Imiyalelo Yokusetha

### 1. Qinisekisa i-Closte API Key Yakho

Uma usingathwe ku-Closte, i-constant ethi `CLOSTE_CLIENT_API_KEY` kufanele isivele ichaziwe kufayela lakho le-`wp-config.php`. Ungakuqinisekisa lokhu ngokuhlola ifayela lakho le-`wp-config.php`.

### 2. Vumela Ukuhlanganiswa

1. Ku-admin yakho ye-WordPress, iya ku-Ultimate Multisite > Izilungiselelo
2. Zulazula uye kuthebhu ethi "Ukuqondanisa Izizinda"
3. Skrolela phansi ku-"Ukuhlanganiswa Kwabasingathi"
4. Vumela ukuhlanganiswa kwe-Closte
5. Chofoza "Londoloza Izinguquko"

## Kusebenza Kanjani

Lapho isizinda siqondaniswa ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthumela isicelo ku-API ye-Closte ukuze kwengezwe isizinda kuhlelo lwakho lokusebenza
2. I-Closte iphatha ngokuzenzakalelayo ukuhlinzekwa kwesitifiketi se-SSL
3. Lapho ukuqondaniswa kwesizinda kususwa, ukuhlanganiswa kuzosusa isizinda ku-Closte

Ukuhlanganiswa futhi kusebenza nesilungiselelo sesikhawu sokuhlola i-DNS ku-Ultimate Multisite, okukuvumela ukuthi ulungiselele ukuthi uhlelo luhlola kangaki ukusabalala kwe-DNS nokukhishwa kwesitifiketi se-SSL.

## Ukwakhiwa Kwerekhodi Lesizinda

Lokhu kuhlanganiswa kuqinisekisa ukuthi lapho isayithi lakhiwa noma likopishwa, irekhodi lesizinda lakhiwa ngokuzenzakalelayo. Lokhu kubaluleke kakhulu ekuhlanganisweni kwe-Closte, ngoba ukwakhiwa kwerekhodi lesizinda kuqalisa i-Closte API ukuthi yakhe isizinda nesitifiketi se-SSL.

## Ukuxazulula Izinkinga

### Izinkinga Zokuxhumeka kwe-API
- Qinisekisa ukuthi i-Closte API key yakho ilungile
- Qinisekisa ukuthi i-Account yakho ye-Closte inezimvume ezidingekayo

### Izinkinga Zesitifiketi se-SSL
- I-Closte ingathatha isikhathi esithile ukukhipha izitifiketi ze-SSL (ngokuvamile imizuzu emi-5-10)
- Qinisekisa ukuthi izizinda zakho zikhomba kahle ekhelini le-IP leseva yakho ye-Closte
- Hlola amarekhodi e-DNS esizinda sakho ukuze uqinisekise ukuthi alungiselelwe kahle

### Isizinda Asengeziwe
- Hlola amalogi e-Ultimate Multisite ukuze uthole noma yimiphi imiyalezo yamaphutha
- Qinisekisa ukuthi isizinda asikangezwa kakade ku-Closte
- Qinisekisa ukuthi amarekhodi e-DNS esizinda sakho alungiselelwe kahle

### Isikhawu Sokuhlola i-DNS
- Uma izitifiketi ze-SSL zithatha isikhathi eside kakhulu ukukhishwa, ungakwazi ukulungisa isikhawu sokuhlola i-DNS kuzilungiselelo Zokuqondanisa Izizinda
- Isikhawu esizenzakalelayo yimizuzwana engu-300 (imizuzu emi-5), kodwa ungasetha sibe ngaphansi kuze kufike kumizuzwana engu-10 ukuze kuhlolwe ngokushesha ngesikhathi sokuhlola
