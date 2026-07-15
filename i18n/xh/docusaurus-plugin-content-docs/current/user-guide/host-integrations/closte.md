---
title: Udibaniso lwe-Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Udibaniso lwe-Closte

## Isishwankathelo {#overview}
I-Closte liqonga lokusingathwa kwe-WordPress elilawulwayo elakhelwe kwiziseko ze-Google Cloud. Olu dibaniso luvumela ukuvumelanisa okuzenzekelayo kweedomeyini nolawulo lwezatifikethi ze-SSL phakathi kwe-Ultimate Multisite ne-Closte.

## Iimpawu {#features}
- Ukuvumelanisa okuzenzekelayo kweedomeyini
- Ulawulo lwezatifikethi ze-SSL
- Inkxaso yedomeyini ye-wildcard
- Akukho lungelelwaniso lufunekayo ukuba isebenza kwi-Closte

## Iimfuno {#requirements}
Le constant ilandelayo kufuneka ichazwe kwifayile yakho `wp-config.php` ukuba usebenzisa i-Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Le constant idla ngokuba sele ichaziwe ukuba usingathwe kwi-Closte.

## Imiyalelo Yokuseta {#setup-instructions}

### 1. Qinisekisa i-Closte API Key Yakho {#1-verify-your-closte-api-key}

Ukuba usingathwe kwi-Closte, i-constant `CLOSTE_CLIENT_API_KEY` kufanele ibe sele ichaziwe kwifayile yakho `wp-config.php`. Ungakuqinisekisa oku ngokujonga ifayile yakho `wp-config.php`.

### 2. Vumela Udibaniso {#2-enable-the-integration}

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrola ezantsi uye ku-"Host Integrations"
4. Vumela udibaniso lwe-Closte
5. Cofa "Save Changes"

## Indlela Esebenza Ngayo {#how-it-works}

Xa idomeyini imaphiwe kwi-Ultimate Multisite:

1. Udibaniso luthumela isicelo kwi-API ye-Closte ukongeza idomeyini kwisicelo sakho
2. I-Closte iphatha ngokuzenzekelayo ukubonelelwa kwezatifikethi ze-SSL
3. Xa ukimapha idomeyini kususiwe, udibaniso luya kususa idomeyini kwi-Closte

Udibaniso lusebenza kwakhona noseto lwesithuba sokujonga i-DNS kwi-Ultimate Multisite, lukuvumela ukuba ulungiselele ukuba inkqubo ijonga kangaphi ukusasazeka kwe-DNS nokukhutshwa kwesatifikethi se-SSL.

## Ukwenziwa Kwerekhodi Yedomeyini {#domain-record-creation}

Olu dibaniso luqinisekisa ukuba xa isayithi yenziwe okanye ikopiwe, irekhodi yedomeyini yenziwa ngokuzenzekelayo. Oku kubaluleke kakhulu kudibaniso lwe-Closte, kuba ukwenziwa kwerekhodi yedomeyini kuqalisa i-API ye-Closte ukuba yenze idomeyini nesatifikethi se-SSL.

## Ukulungisa Iingxaki {#troubleshooting}

### Iingxaki Zonxibelelwano lwe-API {#api-connection-issues}
- Qinisekisa ukuba i-Closte API key yakho ichanekile
- Qinisekisa ukuba i-akhawunti yakho ye-Closte ineemvume eziyimfuneko

### Iingxaki zeSatifikethi se-SSL {#ssl-certificate-issues}
- I-Closte ingathatha ixesha ukukhupha izatifikethi ze-SSL (ngokuqhelekileyo imizuzu emi-5-10)
- Qinisekisa ukuba iidomeyini zakho zikhomba ngokufanelekileyo kwidilesi ye-IP yeseva yakho ye-Closte
- Jonga iirekhodi ze-DNS zedomeyini yakho ukuqinisekisa ukuba zilungiselelwe ngokuchanekileyo

### Idomeyini Ayifakwanga {#domain-not-added}
- Jonga iilog ze-Ultimate Multisite kuyo nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba idomeyini ayikafakwa sele kwi-Closte
- Qinisekisa ukuba iirekhodi ze-DNS zedomeyini yakho zilungiselelwe ngokufanelekileyo

### Isithuba Sokujonga i-DNS {#dns-check-interval}
- Ukuba izatifikethi ze-SSL zithatha ixesha elide kakhulu ukukhutshwa, ungalungisa isithuba sokujonga i-DNS kuseto lwe-Domain Mapping
- Isithuba esingagqibekanga yimizuzwana engama-300 (imizuzu emi-5), kodwa unokuseta sibe sezantsi kangangemizuzwana eli-10 ukuze kujongwe ngokukhawuleza ngexesha lovavanyo
