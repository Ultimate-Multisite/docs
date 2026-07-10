---
title: Cysylltu Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Ymddian (hPanel) Cyfathri {#hostinger-hpanel-integration}

## Oglwydd {#overview}

Mae Hostinger yn gynnwys cyfathri web cyffredinol gyda panel cyddefnydd modern o'r enw hPanel. Mae y cyfathri Ultimate Multisite Hostinger yn sylfaenu'r syniad domena'n awtomatig rhwng Ultimate Multisite a hPanel o Hostinger, gan gael eich gallwch ddefnyddio'r rheoliadau domena a subdomena yn awt o'r adeiladu WordPress.

## Gymparau {#features}

- Creu domena addol (addon domain) yn awt mewn hPanel
- Creu subdomena yn awt mewn hPanel (ar gyfer y cyflwyniad multisite subdomena)
- Ailta domena pan cael ei ddifynnu
- Cyfathri sydd yn dda gyda'r API rheoliadau domena o hPanel

## Cynlluniau {#requirements}

I ddefnyddio'r cyfathri Hostinger, mae angen:

1. Cyfrifau Hostinger gyda chymdeithas hPanel
2. Token API o Hostinger
3. Ychwanegau canlynol wedi'u cyflwyno mewn ffeil `wp-config.php` eich:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Mae'n allweddol, gallwch hefyd cyflwyno:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Penodol API endpoint
```

## Cynlluniau Cyflwyniad {#setup-instructions}

### 1. Cyfrifwch eich Token API Hostinger {#1-generate-your-hostinger-api-token}

1. Log in i'r cyfrifau Hostinger eich acwn a cyffwrdd i hPanel
2. Rhewch **Account Settings** → **API Tokens**
3. Clic ar **Create New Token**
4. Tafarnwch enw ddefnyddiol i'ch token (e.e., "Ultimate Multisite")
5. Dewch y gynnwys permisiwnau angen:
   - Rheoliadau domena
   - Rheoliadau subdomena
6. Copiwch y token a chofio'n ddiogel

### 2. Gweld eich ID Acwn {#2-find-your-account-id}

1. Mewn hPanel, rhewch **Account Settings** → **Account Information**
2. Mae eich ID Acwn yn cael ei dangos ar y peidiad hwn
3. Copiwch a chofio'r ID hwn i'r cynllun nesaf

### 3. Ymddangos Canstau i wp-config.php {#3-add-constants-to-wp-configphp}

Ymddangos yr canstau canlynol i ffeil `wp-config.php` eich:

```php
define('WU_HOSTINGER_API_TOKEN', 'chi'ch_token_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'chi'ch_id_account_hostinger');
```

Os oes eich cyfrannau API (API endpoint) o'r Hostinger yn defnyddio'n gynnig arall, gallwch ei gwneud yn ddefnyddiol:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Mae'r Cyfathrebu'n Gynnal {#4-enable-the-integration}

1. Yn eich admin WordPress, mynd i **Ultimate Multisite > Settings** (Cystadellau Amgylchedd > Cysylltiadau)
2. Mynd i'r tab **Domain Mapping** (Cyflwyniad Ddwyllau)
3. Scrolli i lawr i **Host Integrations** (Cysylltiadau Host)
4. Mae'n gynnol y cysylltiad **Hostinger (hPanel)**
5. Clic ar **Save Changes** (Safio newidiadau)

## Sut mae hyn yn gweithio {#how-it-works}

### Addon Domains (Ddwyllau Ymddangosol) {#addon-domains}

Pan mae'ch cyflwyniad dwyllau mewn Ultimate Multisite:

1. Mae'r cysylltiad yn anfon gyfle i API Hostinger i dros y ddwyllau fel addon domain
2. Mae'r ddwyllau wedi'i sicrhau i gwneud cyflwyniad i'r gyfeiriad (root directory) eich gorthwrn
3. Pan cael ei dod o hyd i rhwystrodd dwyllau, mae'r cysylltiad yn taro'r addon domain o hPanel yn awtomatig

### Subdomains (Ddwyllau Cyd-gynllun) {#subdomains}

Ar gyfer cyflwyniad ddwyllau cyd-gynllun, pan cael site newydd ei creu:

1. Mae'r cysylltiad yn dod o hyd i'r rhan subdomain o'r ddwyllau llawn
2. Mae'n anfon gyfle i API Hostinger i dros y subdomain
3. Mae'r subdomain wedi'i sicrhau i gwneud cyflwyniad i'r gyfeiriad (root directory) eich gorthwrn

## Notedion Importantiol {#important-notes}

- Mae'r cysylltiad yn defnyddio API REST o Hostinger i'r cyfathrebu â'ch gorthwrn
- Rhaid i'ch token API gael y gynnigau sydd ei angen ar gyfer rheoli ddwyllau a subdomain
- Mae'r cysylltiad yn dod o hyd i ddefnyddio cyflwyniad DNS; rhaid y ddwyllau wedi'i sicrhau i'r gorthwrn Hostinger eisoes
- Mae gyfleau API yn cael eu gwneud yn ddiogel trwy HTTPS
- Rythelwch eich token API yn ddiogel ac nid dyddwch ei rhannu'n cyhoeddus

## Gofalion (Troubleshooting) {#troubleshooting}

### Pethau Cyfathrebu API {#api-connection-issues}

- Gweldwch bod eich token API yn siarad ac nad yw'n ddefnyddiol
- Gweldwch bod eich Account ID yn siarad
- Sicrhewch bod eich token API gyda'r gweithrediadau sydd angen i'u uellio'r domenaethau
- Gweldwch bod eich cyfrif Hostinger yn weithredol ac mewn cyflwrdd da

### Domenaeth Nid wedi cael ei ychwanegu {#domain-not-added}

- Gweldwch y logau Ultimate Multisite ar gyfer unrhyw atebau eros
- Gweldwch nad yw'r domenaeth wedi cael ei ychwanegu i eich cyfrif Hostinger bellach
- Sicrhewch bod eich cyfrif Hostinger nid wedi cyrraedd ei hanes ar gyfer domenaethau ychwanegol
- Cyflwrwch bod y domenaeth wedi'i rhannu'n dda i'ch serwerau nameserver o Hostinger

### Pัญหาau gyda Certiad SSL {#ssl-certificate-issues}

- Mae'r cyfathriad yn gwneud y cyfleidio certiad SSL bellach
- Mae Hostinger yn rhoi certiaid SSL cyffredinol drwy AutoSSL
- Gallwch ddefnyddio'r certiaid SSL yn uniongyrchol mewn hPanel o Hostinger o dan **SSL/TLS**
- Fel alternatiw, defnyddiwch Let's Encrypt gyda'r ffeithlus AutoSSL o Hostinger

## Cysylltiadau {#support}

Ar gyfer help ychwanegol gyda'r cysylltiad â Hostinger, osaiswch:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
