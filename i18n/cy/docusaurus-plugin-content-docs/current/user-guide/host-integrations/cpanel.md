---
title: Ychwanegiad cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Ymddianolwg cPanel

## Cyflwyniadau
Mae cPanel yn un o'r cyfannau gwylio web (web hosting control panel) sydd yn hanfodol i lawer ychwanegwyr gweithredol a chwarae (shared and dedicated hosting providers). Mae’r cyfathriau hwn yn sylw'r cysylltiad domain yn awtomatig rhwng Ultimate Multisite a cPanel, gan gael eich cyflwyniadau alias a subdomains yn awtomatig i'ch cyfrifol cPanel.

## Adranau
- Creu domenaid addol (addon domain) yn awtomatig mewn cPanel
- Creu subdomain yn awtomatig mewn cPanel (ar gyfer y chwarae subdomain multisite)
- Ailta domenaid pan cael eu taro pan fydd y cyfathriau wedi'u ddifynnu

## Cyflwyniadau
Rhaid i'r cywiroedd canlynol fod yn cael eu cyflwyno mewn ffeil `wp-config.php` eich:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Oesblygiol, gallwch hefyd cyflwyno:

```php
define('WU_CPANEL_PORT', 2083); // Y cyflwyniad defnyddiol yw 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Y cyflwyniad defnyddiol yw /public_html
```

## Cynllunau Cyfeiriadwy

### 1. Derbyn eich Cyfrifolion cPanel

1. Derbyn eich genedig username a cyfrifolion (password) o'r ychwanegwr gweithredol eich chwarae (hosting provider).
2. Cynllunwch eich host cPanel (oeddf `cpanel.yourdomain.com` neu `yourdomain.com:2083`).

### 2. Ymddangos Cywiroedd i wp-config.php

Ymddangos y cywiroedd canlynol i ffeil `wp-config.php` eich:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Oesblygiol, gallwch gwahanu'r port a'r cyflwyniad (root directory):

```php
define('WU_CPANEL_PORT', 2083); // Gwahanu os oes eich cPanel yn defnyddio port arall
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Gwahanu os mae eich cyfrifol document root yn gwrthod
```

### 3. Gynllunio'r Cyfathriau

1. Yn eich admin WordPress, mynd i Ultimate Multisite > Settings
2. Myndwch i'r tab "Domain Mapping" (Mapiadau Domen)
3. Sgrolwch i lawr i "Host Integrations" (Cysylltiadau Host)
4. Gynnalwch y cysylltiad cPanel yn llai (Enable the cPanel integration)
5. Clic ar "Save Changes" (Safwch y newidiadau)

## Sut mae hyn yn gweithio

### Addon Domains (Domenau Ymddangosol)

Pan cael ei mappio'r domen mewn Ultimate Multisite:

1. Mae'r cysylltiad yn anfon gyfle i API cPanel i dros y domen fel addon domain
2. Mae'r domen wedi'i cyflwyno i gwneud y cyfeiriad i'r dyfodol (root directory) eich gweithredol
3. Pan cael ei ffwrdd y mappio domen, bydd y cysylltiad yn ffwrdd y addon domain o cPanel

### Subdomains (Subdomenaid)

Ar gyfer cyflwyniad multisite subdomain, pan cael site newydd cael ei creu:

1. Mae'r cysylltiad yn dod â'r rhan subdomain o'r domen llawn
2. Mae'n anfon gyfle i API cPanel i dros y subdomain
3. Mae'r subdomain wedi'i cyflwyno i gwneud y cyfeiriad i'r dyfodol (root directory) eich gweithredol

## Notedau pwysig

- Mae'r cysylltiad yn defnyddio API2 o cPanel i chyfathogh gyda'ch cyfrifau cPanel
- Caiff ychwanegau mewn cyfrifau cPanel i dros addon domains a subdomains
- Gall rhai gweithredol (hosting providers) ei hanwy'r amser y addon domains neu subdomains eich gallwch creu

- Mae'r cysylltiad yn cael ei chyflwyno'r cyfrifau DNS; byddwch yn rhaid i chi ddangos eich domenion i'r cyfeiriad IP o'ch gweithredol

## Cynllunio (Troubleshooting)

### Pัญหาau mewn cysylltiad API
- Gwylio bod eich genywir a gyfrifau cPanel yn correg
- Assuredd bod eich host cPanel yn correg ac yn cael ei cyffredin
- Sicrhewch bod eich cyfrifau cPanel wedi'u cael ychwanegau sydd ei angen
- Gofal i ddefnyddio'r URL llawn ar gyfer y host (e.e., `https://cpanel.yourdomain.com`)

### Domen nid wedi cael ei dros
- Gwylio'r log Ultimate Multisite am unrhyw mesg erorau
- Assuredd bod y domen nid wedi cael ei dros i cPanel
- Sicrhewch bod eich cyfrifau cPanel nid wedi cyrraedd ei hanwy ar gyfer addon domains neu subdomains

### Pethau gyda Sertifig SSL

- Mae’r y cyfathrebu (integration) nid yn gwneud y cyflenwi sertifig SSL.
- Byddwch yn angen i ddefnyddio'r toolau SSL/TLS o cPanel neu ffurf AutoSSL i gyflenwi sertifigau SSL ar gyfer eich domenaid.
- Fel alternatiw, gallwch ddefnyddio gwasanaeth fel Let's Encrypt gyda AutoSSL o cPanel.
