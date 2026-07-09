---
title: Ukuhlanganiswa kwe-Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Ukuhlanganiswa kwe-Hostinger (hPanel) {#hostinger-hpanel-integration}

## Uhlolojikelele {#overview}

I-Hostinger ingumhlinzeki odumile wokusingatha iwebhu onephaneli yokulawula yesimanje ebizwa nge-hPanel. Ukuhlanganiswa kwe-Ultimate Multisite Hostinger kuvumela ukuvumelanisa izizinda ngokuzenzakalelayo phakathi kwe-Ultimate Multisite ne-hPanel yakwa-Hostinger, kukuvumela ukuthi uphathe ngokuzenzakalelayo ukuhlanganiswa kwezizinda nezizinda ezingaphansi ngokuqondile ku-admin yakho ye-WordPress.

## Izici {#features}

- Ukudalwa kwezizinda ze-addon ngokuzenzakalelayo ku-hPanel
- Ukudalwa kwezizinda ezingaphansi ngokuzenzakalelayo ku-hPanel (kokufakwa kwe-multisite yezizinda ezingaphansi)
- Ukususwa kwezizinda lapho ukuhlanganiswa kususwa
- Ukuhlanganiswa okushelelayo ne-API yokuphatha izizinda ye-hPanel

## Izimfuneko {#requirements}

Ukuze usebenzise ukuhlanganiswa kwe-Hostinger, udinga:

1. I-Account ye-Hostinger enokufinyelela ku-hPanel
2. Ithokheni ye-API evela ku-Hostinger
3. Ama-constants alandelayo achazwe kufayela lakho le-`wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ngokuzikhethela, ungachaza futhi:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Imiyalelo Yokusetha {#setup-instructions}

### 1. Khiqiza Ithokheni Yakho ye-API ye-Hostinger {#1-generate-your-hostinger-api-token}

1. Ngena ku-Account yakho ye-Hostinger bese ufinyelela ku-hPanel
2. Zulazula uye ku-**Izilungiselelo ze-Account** → **Amathokheni e-API**
3. Chofoza **Dala Ithokheni Entsha**
4. Nikeza ithokheni yakho igama elichazayo (isb., "Ultimate Multisite")
5. Khetha izimvume ezidingekayo:
   - Ukuphathwa kwezizinda
   - Ukuphathwa kwezizinda ezingaphansi
6. Kopisha ithokheni ekhiqiziwe bese uyigcina ngokuphepha

### 2. Thola i-Account ID Yakho {#2-find-your-account-id}

1. Ku-hPanel, iya ku-**Izilungiselelo ze-Account** → **Ulwazi lwe-Account**
2. I-Account ID yakho iboniswa kuleli khasi
3. Kopisha bese ulondoloza le ID yesinyathelo esilandelayo

### 3. Engeza Ama-constants ku-wp-config.php {#3-add-constants-to-wp-configphp}

Engeza ama-constants alandelayo kufayela lakho le-`wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Uma i-Account yakho ye-Hostinger isebenzisa i-endpoint ye-API ehlukile, ungayenza ngokwezifiso:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Nika Ukuhlanganiswa Amandla {#4-enable-the-integration}

1. Ku-admin yakho ye-WordPress, iya ku-**Ultimate Multisite > Izilungiselelo**
2. Zulazula uye kuthebhu ethi **Ukuhlanganiswa Kwezizinda**
3. Skrolela phansi ku-**Ukuhlanganiswa Kwabasingathi**
4. Nika amandla ukuhlanganiswa kwe-**Hostinger (hPanel)**
5. Chofoza **Londoloza Izinguquko**

## Kusebenza Kanjani {#how-it-works}

### Izizinda ze-Addon {#addon-domains}

Lapho uhlanganisa isizinda ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthumela isicelo ku-API yakwa-Hostinger ukuze kwengeze isizinda njengesizinda se-addon
2. Isizinda silungiselelwa ukuthi sikhombe kuhla lwemibhalo lwakho lwempande
3. Lapho ukuhlanganiswa kwesizinda kususwa, ukuhlanganiswa kususa ngokuzenzakalelayo isizinda se-addon ku-hPanel

### Izizinda Ezingaphansi {#subdomains}

Kokufakwa kwe-multisite yezizinda ezingaphansi, lapho kudalwa isayithi elisha:

1. Ukuhlanganiswa kukhipha ingxenye yesizinda esingaphansi esizindeni esigcwele
2. Kuthumela isicelo ku-API yakwa-Hostinger ukuze kwengeze isizinda esingaphansi
3. Isizinda esingaphansi silungiselelwa ukuthi sikhombe kuhla lwemibhalo lwakho lwempande

## Amanothi Abalulekile {#important-notes}

- Ukuhlanganiswa kusebenzisa i-REST API yakwa-Hostinger ukuze kuxhumane ne-Account yakho
- Ithokheni yakho ye-API kufanele ibe nezimvume ezidingekayo zokuphatha izizinda nezizinda ezingaphansi
- Ukuhlanganiswa akuphathi ukulungiselelwa kwe-DNS; izizinda kufanele zibe sezivele zikhombe ku-Account yakho ye-Hostinger
- Izicelo ze-API zenziwa ngokuphepha nge-HTTPS
- Gcina ithokheni yakho ye-API iphephile futhi ungalokothi uyabelane ngayo esidlangalaleni

## Ukuxazulula Izinkinga {#troubleshooting}

### Izinkinga Zokuxhumeka kwe-API {#api-connection-issues}

- Qinisekisa ukuthi ithokheni yakho ye-API ilungile futhi ayikaphelelwa isikhathi
- Hlola ukuthi i-Account ID yakho ilungile
- Qinisekisa ukuthi ithokheni yakho ye-API inezimvume ezidingekayo zokuphatha izizinda
- Qinisekisa ukuthi i-Account yakho ye-Hostinger iyasebenza futhi isesimweni esihle

### Isizinda Asengezwanga {#domain-not-added}

- Hlola ama-log e-Ultimate Multisite ukuze uthole noma yimiphi imilayezo yamaphutha
- Qinisekisa ukuthi isizinda asikangezwa kakade ku-Account yakho ye-Hostinger
- Qinisekisa ukuthi i-Account yakho ye-Hostinger ayikafinyeleli emkhawulweni wayo wezizinda ze-addon
- Qinisekisa ukuthi isizinda sikhombe kahle kuma-nameserver akho e-Hostinger

### Izinkinga Zesitifiketi se-SSL {#ssl-certificate-issues}

- Ukuhlanganiswa akuphathi ukukhishwa kwesitifiketi se-SSL
- I-Hostinger ngokuvamile inikeza izitifiketi ze-SSL zamahhala nge-AutoSSL
- Ungaphatha izitifiketi ze-SSL ngokuqondile ku-hPanel ngaphansi kwe-**SSL/TLS**
- Kungenjalo, sebenzisa i-Let's Encrypt nesici se-AutoSSL se-Hostinger

## Ukusekela {#support}

Ukuze uthole usizo olwengeziwe ngokuhlanganiswa kwe-Hostinger, sicela ubheke ku:

- [Imibhalo ye-API ye-Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Imibhalo ye-Ultimate Multisite](/)
- [Ukusekela kwe-Ultimate Multisite](https://ultimatemultisite.com/support)
