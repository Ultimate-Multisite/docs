---
title: Udibaniso lwe-WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Udibaniso lwe-WP Engine

## Isishwankathelo {#overview}
WP Engine liqonga elikumgangatho ophezulu lokusingathwa kwe-WordPress elilawulwayo, elibonelela ngokusebenza okulungiselelweyo, ukhuseleko, kunye nokukwazi ukwandiswa kwezisayithi ze-WordPress. Olu dibaniso luvumela ukuhambelana ngokuzenzekelayo kweedomeyini phakathi kwe-Ultimate Multisite ne-WP Engine.

## Iimpawu {#features}
- Ukuhambelana ngokuzenzekelayo kweedomeyini
- Inkxaso yee-subdomain kufakelo lwe-multisite
- Udibaniso olungenamthungo neesistim ezikhoyo ze-WP Engine

## Iimfuno {#requirements}
Udibaniso luzifumanisa ngokuzenzekelayo ukuba usingathwe kwi-WP Engine kwaye lusebenzisa i-WP Engine API eyakhelwe ngaphakathi. Akukho lungiselelo longezelelweyo lufunekayo ukuba i-plugin ye-WP Engine iyasebenza kwaye ilungiselelwe ngokuchanekileyo.

Nangona kunjalo, ukuba kufuneka ulungiselele udibaniso ngesandla, ungachaza enye yezi constants kwifayile yakho `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Imiyalelo Yokuseta {#setup-instructions}

### 1. Qinisekisa i-Plugin ye-WP Engine {#1-verify-wp-engine-plugin}

Ukuba usingathwe kwi-WP Engine, i-plugin ye-WP Engine kufanele ukuba sele ifakiwe kwaye yenziwe yasebenza. Qinisekisa ukuba:

1. I-plugin ye-WP Engine iyasebenza
2. Ifayile `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ikhona

### 2. Yenza Udibaniso Lusebenze {#2-enable-the-integration}

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrolela ezantsi ku-"Host Integrations"
4. Yenza udibaniso lwe-WP Engine lusebenze
5. Cofa "Save Changes"

## Indlela Esebenza Ngayo {#how-it-works}

### Ukuhambelana Kweedomeyini {#domain-syncing}

Xa idomeyini idityaniswa kwi-Ultimate Multisite:

1. Udibaniso lusebenzisa i-WP Engine API ukongeza idomeyini kufakelo lwakho lwe-WP Engine
2. WP Engine ilawula ulungiselelo lwedomeyini kunye nokukhutshwa kwesatifikethi se-SSL
3. Xa ukudityaniswa kwedomeyini kususwa, udibaniso luya kususa idomeyini kwi-WP Engine

### Inkxaso Yee-Subdomain {#subdomain-support}

Kufakelo lwe-multisite lwee-subdomain:

1. Udibaniso longeza i-subdomain nganye kwi-WP Engine xa kudalwa isayithi entsha
2. WP Engine ilawula ulungiselelo lwe-subdomain
3. Xa isayithi icinyiwe, udibaniso luya kususa i-subdomain kwi-WP Engine

## Amanqaku Abalulekileyo {#important-notes}

### Iidomeyini ze-Wildcard {#wildcard-domains}

Kufakelo lwe-multisite lwee-subdomain, kuyacetyiswa ukuba uqhagamshelane nenkxaso ye-WP Engine ukuze ucele ulungiselelo lwedomeyini ye-wildcard. Oku kuvumela zonke ii-subdomain ukuba zisebenze ngokuzenzekelayo ngaphandle kokufuna ukongeza nganye ngokwahlukeneyo.

### Izatifikethi ze-SSL {#ssl-certificates}

WP Engine ilawula ngokuzenzekelayo ukukhutshwa nokuhlaziywa kwezazisi ze-SSL kuzo zonke iidomeyini ezongezwe ngolu dibaniso. Akukho lungiselelo longezelelweyo lufunekayo.

## Ukusombulula Iingxaki {#troubleshooting}

### Iingxaki zoQhagamshelo lwe-API {#api-connection-issues}
- Qinisekisa ukuba i-plugin ye-WP Engine iyasebenza kwaye ilungiselelwe ngokuchanekileyo
- Ukuba uchaze i-API key ngesandla, khangela ukuba ichanekile
- Qhagamshelana nenkxaso ye-WP Engine ukuba unengxaki nge-API

### Idomeyini Ayizange Yongezwe {#domain-not-added}
- Jonga iilog ze-Ultimate Multisite ukuze ubone nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba idomeyini ayikongezwanga sele kwi-WP Engine
- Qinisekisa ukuba iplani yakho ye-WP Engine ixhasa inani leedomeyini ozongezayo

### Iingxaki ze-Subdomain {#subdomain-issues}
- Ukuba ii-subdomain azisebenzi, qhagamshelana nenkxaso ye-WP Engine ukuze ucele ulungiselelo lwedomeyini ye-wildcard
- Qinisekisa ukuba iisetingi zakho ze-DNS zilungiselelwe ngokuchanekileyo kwidomeyini ephambili nakwii-subdomain
