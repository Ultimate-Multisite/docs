---
title: Ukudityaniswa kwe-cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Udibaniso lwe-cPanel {#cpanel-integration}

## Isishwankathelo {#overview}
i-cPanel yenye yeepaneli zolawulo lokusingatha iwebhu ezithandwa kakhulu ezisetyenziswa ngabanikezeli abaninzi bokusingatha okwabelwana ngako nokuzinikeleyo. Olu dibaniso luvumela ukuvumelanisa ngokuzenzekelayo kwamadomeyini phakathi kwe-Ultimate Multisite ne-cPanel, lukuvumela ukuba wongeze ngokuzenzekelayo ii-alias zedomeyini kunye nee-subdomain kwi-akhawunti yakho ye-cPanel.

## Iimpawu {#features}
- Ukwenziwa ngokuzenzekelayo kwe-addon domain kwi-cPanel
- Ukwenziwa ngokuzenzekelayo kwe-subdomain kwi-cPanel (kufakelo lwe-subdomain multisite)
- Ukususwa kwedomeyini xa ii-mapping zicinyiwe

## Iimfuno {#requirements}
Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ngokuzikhethela, unokuchaza kwakhona:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Imiyalelo yoSeto {#setup-instructions}

### 1. Fumana iiNkcukacha zakho ze-cPanel {#1-get-your-cpanel-credentials}

1. Fumana igama lomsebenzisi kunye nephasiwedi yakho ye-cPanel kumnikezeli wakho wokusingatha
2. Qinisekisa i-host yakho ye-cPanel (ngokuqhelekileyo `cpanel.yourdomain.com` okanye `yourdomain.com:2083`)

### 2. Yongeza ii-Constants ku-wp-config.php {#2-add-constants-to-wp-configphp}

Yongeza ezi constants zilandelayo kwifayile yakho `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ngokuzikhethela, unokwenza ngokwezifiso i-port kunye nolawulo olungcambu:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Yenza Udibaniso Lusebenze {#3-enable-the-integration}

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrolela ezantsi ku-"Host Integrations"
4. Yenza udibaniso lwe-cPanel lusebenze
5. Cofa "Save Changes"

## Isebenza Njani {#how-it-works}

### Ii-Addon Domains {#addon-domains}

Xa idomeyini ifakwe kwi-mapping kwi-Ultimate Multisite:

1. Udibaniso luthumela isicelo kwi-API ye-cPanel ukuze longeze idomeyini njenge-addon domain
2. Idomeyini iqwalaselwa ukuba ikhomba kulawulo lwakho olungcambu
3. Xa i-domain mapping isusiwe, udibaniso luya kususa i-addon domain kwi-cPanel

### Ii-Subdomains {#subdomains}

Kufakelo lwe-subdomain multisite, xa isayithi entsha yenziwe:

1. Udibaniso lukhupha inxalenye ye-subdomain kwidomeyini epheleleyo
2. Luthumela isicelo kwi-API ye-cPanel ukuze longeze i-subdomain
3. I-subdomain iqwalaselwa ukuba ikhomba kulawulo lwakho olungcambu

## Amanqaku Abalulekileyo {#important-notes}

- Udibaniso lusebenzisa i-API2 ye-cPanel ukunxibelelana ne-akhawunti yakho ye-cPanel
- I-akhawunti yakho ye-cPanel kufuneka ibe neemvume zokongeza ii-addon domains kunye nee-subdomains
- Abanye abanikezeli bokusingatha banokunciphisa inani lee-addon domains okanye ii-subdomains onokuzidala
- Udibaniso aluphathi uqwalaselo lwe-DNS; kusafuneka ukhombe iidomeyini zakho kwidilesi ye-IP yeseva yakho

## Ukusombulula Iingxaki {#troubleshooting}

### Iingxaki zoQhagamshelo lwe-API {#api-connection-issues}
- Qinisekisa ukuba igama lomsebenzisi kunye nephasiwedi yakho ye-cPanel zichanekile
- Jonga ukuba i-host yakho ye-cPanel ichanekile kwaye iyafikeleleka
- Qinisekisa ukuba i-akhawunti yakho ye-cPanel ineemvume eziyimfuneko
- Zama ukusebenzisa i-URL epheleleyo ye-host (umzekelo, `https://cpanel.yourdomain.com`)

### Idomeyini Ayizange Yongezwe {#domain-not-added}
- Jonga iilog ze-Ultimate Multisite ukuze ufumane nayiphi na imiyalezo yempazamo
- Qinisekisa ukuba idomeyini ayikongezwanga sele kwi-cPanel
- Qinisekisa ukuba i-akhawunti yakho ye-cPanel ayikafikeleli kumda wayo wee-addon domains okanye ii-subdomains

### Iingxaki zeSatifikethi se-SSL {#ssl-certificate-issues}
- Udibaniso aluphathi ukukhutshwa kwesatifikethi se-SSL
- Kuya kufuneka usebenzise izixhobo ze-SSL/TLS ze-cPanel okanye uphawu lwe-AutoSSL ukukhupha izatifikethi ze-SSL zeedomeyini zakho
- Kungenjalo, ungasebenzisa inkonzo efana ne-Let's Encrypt kunye ne-AutoSSL ye-cPanel
