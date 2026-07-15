---
title: Ukuhlanganiswa ne-cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Ukuhlanganiswa kwe-cPanel

## Uhlolojikelele {#overview}
I-cPanel ingelinye lamaphaneli okulawula ukusingathwa kwewebhu athandwa kakhulu asetshenziswa abahlinzeki abaningi bokusingatha okwabiwe nokuzinikele. Lokhu kuhlanganiswa kwenza ukuvumelanisa izizinda ngokuzenzakalelayo phakathi kwe-Ultimate Multisite ne-cPanel, kukuvumela ukuthi wengeze ngokuzenzakalelayo ama-alias ezizinda nama-subdomain ku-Account yakho ye-cPanel.

## Izici {#features}
- Ukwakhiwa okuzenzakalelayo kwe-addon domain ku-cPanel
- Ukwakhiwa okuzenzakalelayo kwe-subdomain ku-cPanel (kokufakwa kwe-multisite kwama-subdomain)
- Ukususwa kwezizinda lapho ukumataniswa kususwa

## Izimfuneko {#requirements}
Ama-constant alandelayo kufanele achazwe efayelini lakho le-`wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ngokuzithandela, ungaphinda uchaze:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Imiyalelo Yokusetha {#setup-instructions}

### 1. Thola Imininingwane Yakho ye-cPanel {#1-get-your-cpanel-credentials}

1. Thola igama lakho lomsebenzisi nephasiwedi ye-cPanel kumhlinzeki wakho wokusingatha
2. Thola umsingathi wakho we-cPanel (ngokuvamile `cpanel.yourdomain.com` noma `yourdomain.com:2083`)

### 2. Engeza Ama-constant ku-wp-config.php {#2-add-constants-to-wp-configphp}

Engeza ama-constant alandelayo efayelini lakho le-`wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ngokuzithandela, ungakwazi ukwenza ngendlela oyifisayo i-port kanye nohla lwemibhalo lwempande:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Nika Amandla Ukuhlanganiswa {#3-enable-the-integration}

1. Ku-admin yakho ye-WordPress, iya ku-Ultimate Multisite > Izilungiselelo
2. Zulazulela kuthebhu ethi "Ukumataniswa Kwezizinda"
3. Skrolela phansi kokuthi "Ukuhlanganiswa Kwabasingathi"
4. Nika amandla ukuhlanganiswa kwe-cPanel
5. Chofoza "Londoloza Izinguquko"

## Kusebenza Kanjani {#how-it-works}

### Ama-Addon Domains {#addon-domains}

Lapho isizinda simataniswa ku-Ultimate Multisite:

1. Ukuhlanganiswa kuthumela isicelo ku-API ye-cPanel ukuze kwengezwe isizinda njenge-addon domain
2. Isizinda silungiselelwa ukuthi sikhombe ohlwini lwakho lwemibhalo lwempande
3. Lapho ukumataniswa kwesizinda kususwa, ukuhlanganiswa kuzosusa i-addon domain ku-cPanel

### Ama-Subdomains {#subdomains}

Kokufakwa kwe-multisite kwama-subdomain, lapho kwakhiwa isayithi elisha:

1. Ukuhlanganiswa kukhipha ingxenye ye-subdomain esizindeni esigcwele
2. Kuthumela isicelo ku-API ye-cPanel ukuze kwengezwe i-subdomain
3. I-subdomain ilungiselelwa ukuthi ikhombe ohlwini lwakho lwemibhalo lwempande

## Amanothi Abalulekile {#important-notes}

- Ukuhlanganiswa kusebenzisa i-API2 ye-cPanel ukuze kuxhumane ne-Account yakho ye-cPanel
- I-Account yakho ye-cPanel kufanele ibe nezimvume zokwengeza ama-addon domains nama-subdomains
- Abanye abahlinzeki bokusingatha bangase bakhawulele inani lama-addon domains noma ama-subdomains ongawakha
- Ukuhlanganiswa akuphathi ukulungiselelwa kwe-DNS; kusadingeka ukhombise izizinda zakho ekhelini le-IP leseva yakho

## Ukuxazulula Izinkinga {#troubleshooting}

### Izinkinga Zokuxhumeka kwe-API {#api-connection-issues}
- Qinisekisa ukuthi igama lakho lomsebenzisi nephasiwedi ye-cPanel kulungile
- Hlola ukuthi umsingathi wakho we-cPanel ulungile futhi uyafinyeleleka
- Qinisekisa ukuthi i-Account yakho ye-cPanel inezimvume ezidingekayo
- Zama ukusebenzisa i-URL egcwele yomsingathi (isb., `https://cpanel.yourdomain.com`)

### Isizinda Asengeziwe {#domain-not-added}
- Hlola amalogi e-Ultimate Multisite ukuze uthole noma yimiphi imilayezo yephutha
- Qinisekisa ukuthi isizinda asikangezwa kakade ku-cPanel
- Qinisekisa ukuthi i-Account yakho ye-cPanel ayikafinyeleli emkhawulweni wayo wama-addon domains noma ama-subdomains

### Izinkinga Zezitifiketi ze-SSL {#ssl-certificate-issues}
- Ukuhlanganiswa akuphathi ukukhishwa kwezitifiketi ze-SSL
- Kuzodingeka usebenzise amathuluzi e-SSL/TLS e-cPanel noma isici se-AutoSSL ukuze ukhiphe izitifiketi ze-SSL zezizinda zakho
- Kungenjalo, ungasebenzisa isevisi efana ne-Let's Encrypt nge-AutoSSL ye-cPanel
