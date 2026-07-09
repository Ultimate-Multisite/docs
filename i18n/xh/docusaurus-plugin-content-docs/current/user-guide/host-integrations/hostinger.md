---
title: Udibaniso lwe-Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Udibaniso lwe-Hostinger (hPanel) {#hostinger-hpanel-integration}

## Isishwankathelo {#overview}

I-Hostinger ngumboneleli odumileyo wokusingatha iwebhu onephaneli yolawulo yanamhlanje ebizwa ngokuba yi-hPanel. Udibaniso lwe-Ultimate Multisite Hostinger luvumela ukuvumelanisa i-domain ngokuzenzekelayo phakathi kwe-Ultimate Multisite kunye ne-hPanel ye-Hostinger, likuvumela ukuba ulawule ngokuzenzekelayo iimephu ze-domain kunye nee-subdomain ngqo kwi-admin yakho ye-WordPress.

## Iimpawu {#features}

- Ukwenziwa ngokuzenzekelayo kwe-addon domain kwi-hPanel
- Ukwenziwa ngokuzenzekelayo kwe-subdomain kwi-hPanel (kufakelo lwe-multisite olusebenzisa ii-subdomain)
- Ukususwa kwe-domain xa iimephu zicinyiwe
- Udibaniso olungenamthungo ne-API yolawulo lwe-domain ye-hPanel

## Iimfuno {#requirements}

Ukuze usebenzise udibaniso lwe-Hostinger, kufuneka ube noku:

1. I-akhawunti ye-Hostinger enofikelelo kwi-hPanel
2. I-API token evela ku-Hostinger
3. Ezi constants zilandelayo ezichazwe kwifayile yakho `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ngokuzithandela, unokuchaza kwakhona:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Imiyalelo Yokuseta {#setup-instructions}

### 1. Yenza i-Hostinger API Token Yakho {#1-generate-your-hostinger-api-token}

1. Ngena kwi-akhawunti yakho ye-Hostinger uze ufikelele kwi-hPanel
2. Yiya ku-**Account Settings** → **API Tokens**
3. Cofa **Create New Token**
4. Nika i-token yakho igama elichazayo (umz., "Ultimate Multisite")
5. Khetha iimvume eziyimfuneko:
   - Ulawulo lwe-domain
   - Ulawulo lwe-subdomain
6. Khuphela i-token eyenziweyo uze uyigcine ngokukhuselekileyo

### 2. Fumana i-Account ID Yakho {#2-find-your-account-id}

1. Kwi-hPanel, yiya ku-**Account Settings** → **Account Information**
2. I-Account ID yakho iboniswa kweli phepha
3. Khuphela uze ugcine le ID ukuze uyisebenzise kwinyathelo elilandelayo

### 3. Yongeza ii-Constants ku-wp-config.php {#3-add-constants-to-wp-configphp}

Yongeza ezi constants zilandelayo kwifayile yakho `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ukuba i-akhawunti yakho ye-Hostinger isebenzisa i-API endpoint eyahlukileyo, ungayilungiselela ngokwezifiso:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Vumela Udibaniso {#4-enable-the-integration}

1. Kwi-admin yakho ye-WordPress, yiya ku-**Ultimate Multisite > Settings**
2. Yiya kwithebhu ye-**Domain Mapping**
3. Skrolela ezantsi uye ku-**Host Integrations**
4. Vumela udibaniso lwe-**Hostinger (hPanel)**
5. Cofa **Save Changes**

## Isebenza Njani {#how-it-works}

### Ii-Addon Domains {#addon-domains}

Xa umepha i-domain kwi-Ultimate Multisite:

1. Udibaniso luthumela isicelo kwi-API ye-Hostinger ukongeza i-domain njenge-addon domain
2. I-domain iqwalaselwa ukuba ikhombise kwidirectory yakho ye-root
3. Xa imephu ye-domain isusiwe, udibaniso lususa ngokuzenzekelayo i-addon domain kwi-hPanel

### Ii-Subdomains {#subdomains}

Kufakelo lwe-multisite olusebenzisa ii-subdomain, xa kusenziwa isayithi entsha:

1. Udibaniso lukhupha inxalenye ye-subdomain kwi-domain epheleleyo
2. Luthumela isicelo kwi-API ye-Hostinger ukongeza i-subdomain
3. I-subdomain iqwalaselwa ukuba ikhombise kwidirectory yakho ye-root

## Amanqaku Abalulekileyo {#important-notes}

- Udibaniso lusebenzisa i-REST API ye-Hostinger ukunxibelelana ne-akhawunti yakho
- I-API token yakho kufuneka ibe neemvume eziyimfuneko zolawulo lwe-domain ne-subdomain
- Udibaniso aluphathi uqwalaselo lwe-DNS; ii-domain kufuneka sele zikhonjiswe kwi-akhawunti yakho ye-Hostinger
- Izicelo ze-API zenziwa ngokukhuselekileyo nge-HTTPS
- Gcina i-API token yakho ikhuselekile kwaye ungaze wabelane ngayo esidlangalaleni

## Ukusombulula Iingxaki {#troubleshooting}

### Iingxaki Zoqhagamshelo lwe-API {#api-connection-issues}

- Qinisekisa ukuba i-API token yakho ichanekile kwaye ayiphelelwanga lixesha
- Jonga ukuba i-Account ID yakho ichanekile
- Qinisekisa ukuba i-API token yakho ineemvume eziyimfuneko zolawulo lwe-domain
- Qinisekisa ukuba i-akhawunti yakho ye-Hostinger iyasebenza kwaye ikwimeko entle

### I-Domain Ayizange Yongezwe {#domain-not-added}

- Jonga iilog ze-Ultimate Multisite ukuze ubone nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba i-domain ayikongezwanga sele kwi-akhawunti yakho ye-Hostinger
- Qinisekisa ukuba i-akhawunti yakho ye-Hostinger ayikafikeleli kumda wayo wee-addon domains
- Qinisekisa ukuba i-domain ikhunjiswe ngokufanelekileyo kwii-nameservers zakho ze-Hostinger

### Iingxaki zeSatifikethi se-SSL {#ssl-certificate-issues}

- Udibaniso aluphathi ukukhutshwa kwesatifikethi se-SSL
- I-Hostinger idla ngokubonelela ngezatifikethi ze-SSL zasimahla nge-AutoSSL
- Ungalawula izatifikethi ze-SSL ngqo kwi-hPanel phantsi kwe-**SSL/TLS**
- Kungenjalo, sebenzisa i-Let's Encrypt kunye nophawu lwe-AutoSSL lwe-Hostinger

## Inkxaso {#support}

Ukufumana uncedo olongezelelweyo ngodibaniso lwe-Hostinger, nceda ubhekise ku:

- [Amaxwebhu e-Hostinger API](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Amaxwebhu e-Ultimate Multisite](/)
- [Inkxaso ye-Ultimate Multisite](https://ultimatemultisite.com/support)
