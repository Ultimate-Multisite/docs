---
title: Kutetezo kwa cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Upatikana ndi cPanel

## Kukhulupirira (Overview) {#overview}
cPanel ndi mukuwoneka wopangidwa kwa web hosting omwe ndi wopopauza kwambiri pamene anthu ambiri amagwiritsa ntchira. Kukhulupirira lili lomwe limapangitsa kuti domain sync imapangidwa m'moyo pakati pa Ultimate Multisite ndi cPanel, komwe limapangitsa kuti muli ndi aliases za domain ndi subdomains ku account yanu ya cPanel.

## Mafunso (Features) {#features}
- Kukhazikitsa addon domain m'cPanel m'moyo
- Kukhazikitsa subdomain m'cPanel (poyenera kwa zinthu zomwe muli ndi subdomain multisite)
- Kupanga domain pamene mappings amapangidwa

## Zomwe Mumagwiritsa Ntchito (Requirements) {#requirements}
Mwachidule, imazomwe zimene zikuyenera kudziwika m'file yanu ya `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Mwachidule, muli ndi ulemu wopangidwa:

```php
define('WU_CPANEL_PORT', 2083); // Kukulitsa ngati cPanel yanu imapangidwa pa port yosiyanasiyana
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Kukulitsa ngati directory ya m'malo wanu ndi yosiyanasiyana
```

## Mwayi Wopanga (Setup Instructions) {#setup-instructions}

### 1. Gundikira Zomwe Mumagwiritsa Ntchito pa cPanel (Get Your cPanel Credentials) {#1-get-your-cpanel-credentials}

1. Ndikupatsani username ndi password ya cPanel kuwunthu wanu wa hosting
2. Kodi muli ndi host ya cPanel yanu (kudzera m'malo monga `cpanel.yourdomain.com` kapena `yourdomain.com:2083`)

### 2. Kukhazikitsa Constants mu wp-config.php (Add Constants to wp-config.php) {#2-add-constants-to-wp-configphp}

Kugonetsa constants zimene zikuyenera ku file yanu ya `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Mwachidule, muli ndi ulemu wopangidwa:

```php
define('WU_CPANEL_PORT', 2083); // Gadziritsa ngati cPanel yanu imapangidwa pa port yosiyanasiyana
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Gadziritsa ngati directory ya m'malo wanu ndi yosiyanasiyana
```

### 3. Kukhulupirira (Enable the Integration) {#3-enable-the-integration}

1. Muwira m'WordPress admin ya vatsa, ndi ulendo ku Ultimate Multisite > Settings
2. Liramba ku tab ya "Domain Mapping" (Kupanga Domain)
3. Ramba m'moyo ku "Host Integrations" (Mwayi wa Kukhala kwa Host)
4. Onesha cPanel integration (Onesha kukhala kwa cPanel)
5. Click "Save Changes" (Chitete Malingaliro)

## Kodi Imeneza Bwera {#how-it-works}

### Addon Domains (Domains Zifotokozera) {#addon-domains}

Pamene domain imapanga m'Ultimate Multisite:

1. Integration imapeto kukhala ndi request ku cPanel API kuti ipereke domain imodzi monga addon domain
2. Domain imapangidwa kuti ipereke ku directory yanu ya m'moyo (root directory)
3. Pamene mapanga domain amapanga, integration imapereka addon domain ku cPanel

### Subdomains (Subdomains) {#subdomains}

Pamene muli ndi subdomain multisite installations, pamene site yatsopano imapangidwa:

1. Integration imapereka chinthu cha subdomain kuchokera kwa domain yomwe yomwe yomwe
2. Imapeto request ku cPanel API kuti ipereke subdomain
3. Subdomain imapangidwa kuti ipereke ku directory yanu ya m'moyo (root directory)

## Zifukwa Zofunika {#important-notes}

- Integration imapereka cPanel API2 kuti ipereke mwayi ndi cPanel account yanu
- CPanel account yanu ikuti imene nkhani zopanga addon domains ndi subdomains
- Kuchuluka kwa hosting zingapo kumapangidwa kwa addons domains kapena subdomains muli kukhala
- Integration imapereka DNS configuration; muli kulimbikitsa domain yanu ku IP address ya server yanu

## Kukhazikitsa Matundu (Troubleshooting) {#troubleshooting}

### Masulira Mwayi wa API (API Connection Issues) {#api-connection-issues}
- Onesha kuti username ndi password ya cPanel yanu ndi yomwe yomwe yomwe
- Onesha kuti host ya cPanel yanu imene ndi yomwe yomwe yomwe yomwe
- Onesha kuti CPanel account yanu imene nkhani zopanga addon domains ndi subdomains

### Domain Siyapangidwa (Domain Not Added) {#domain-not-added}
- Onesha logs ya Ultimate Multisite kuti muli ndi mapeto a mafunso
- Onesha kuti domain imodzi simapangidwa ku cPanel
- Onesha kuti CPanel account yanu simene nkhani ya addon domains kapena subdomains

### Matenda ya Sertifiketi ya SSL {#ssl-certificate-issues}

- Integration haifanyi kazi ya kutoa (issuance) sertifiketi za SSL.
- Unahitaji kutumia zana za SSL/TLS za cPanel au kipengele cha AutoSSL ili kupata sertifiketi za SSL kwa domains zako.
- Kwa njia nyingine, unaweza kutumia huduma kama Let's Encrypt na AutoSSL ya cPanel.
