---
title: Ymddygiad WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Ymddianolion â WP Engine {#wp-engine-integration}

## Oglwyddictod {#overview}
WP Engine yw ffurf gweithredol (managed) WordPress priwog sy'n rhoi perfformiad optimus, diogelwch a chydderau (scalability) ar gyfer safonau WordPress. Mae’r y cyfathrebu hwn yn sylwio'r synchiad domenaid yn awtrol rhwng Ultimate Multisite a WP Engine.

## Adranau {#features}
- Synchiad domenaid yn awtrol
- Cydderau (subdomain) ar gyfer y ddefnydd multisite
- Cyfathrebu llwybr gyda'r systemau sydd ar gael mewn WP Engine

## Cynlluniau {#requirements}
Mae'r cyfathrebu yn sylwi'n awtrol a oes eich bod yn gweithredu ar WP Engine ac yn defnyddio'r APIWP Engine sydd ar gael. Nid oes angen i chi ddynnu ffurf ychwanegol os yw plugin WP Engine yn weithredol ac wedi'i ddefnyddio'n iawn.

Fodd bynnag, os oes angen i chi ddynnu ffurf ychwanegol i'r cyfathrebu, gallwch ddefnyddio un o'r constantau hyn yn eich ffeil `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Ffaddau aelodig
// O,
define('WPE_API', 'your_api_key'); // Ffaddau allweddol
```

## Cynlluniau Rheoli {#setup-instructions}

### 1. Gwylio Plugin WP Engine {#1-verify-wp-engine-plugin}

Os ydych chi'n gweithredu ar WP Engine, bydd y plugin WP Engine wedi cael ei ddefnyddio a weithredol. Gwylio bod:

1. Y plugin WP Engine yn weithredol
2. Y ffeil `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` sydd ar gael

### 2. Gofyn y Cyfathrebu {#2-enable-the-integration}

1. Yn eich admin WordPress, mynd i Ultimate Multisite > Settings
2. Mynd i'r tab "Domain Mapping" (Cymryd Domenaid)
3. Cwmni i lawen i "Host Integrations" (Cyfathregiadau Gweithredol)
4. Weithredol y cyfathrebu WP Engine
5. Clic ar "Save Changes" (Gofyn Mudiadau)

## Sut Mae'n Gweithredu {#how-it-works}

### Synchiad Domenaid {#domain-syncing}

Pan cael domena yn cael ei ymddangos mewn Ultimate Multisite:

1. Mae'r cyfathrebu yn defnyddio'r WP Engine API i dros y domenaidd i eich safonau WP Engine
2. Mae WP Engine yn gwarchod y cynllun domenaid a'r cyflenwiad sertifig SSL
3. Pan cael ei ddifynnu domenaid, bydd y cyfathrebu yn dod â'r domenaidd o WP Engine

### Cydderau (Subdomain Support) {#subdomain-support}

Ar gyferbyn ystafell multisite ar subdomain:

1. Mae'r cyfathrebu yn ychwanegu pob subdomain i WP Engine pan cael site new.
2. Mae WP Engine yn gwarchod y cyfluniad y subdomain.
3. Pan cael site wedi'i ddifais, bydd y cyfathrebu yn taro'r subdomain o WP Engine.

## Notedion pwysig {#important-notes}

### Domenau Wildcard (Wildcard Domains) {#wildcard-domains}

Ar gyfer styllu multisite ar subdomain, mae'n cael ei roi'r cyfarwyddyd i gynnwys support WP Engine i roedd gyda chwarae d domen wildcard. Mae hyn yn sylw'r holl subdomain i weithio'n awt heb angen i sicradd eu allu i gyd yn unigol.

### Certiadau SSL (SSL Certificates) {#ssl-certificates}

Mae WP Engine yn gwarchod y cyfluniad a chwarae certiadau SSL arallion am y holl domenau a cael eu cytuno drwy'r cyfathrebu hwnnw. Nid oes angen i ddodolion ychwanegol.

## Cyfeiriadau (Troubleshooting) {#troubleshooting}

### Pัญหาau mewn cysylltiad API {#api-connection-issues}
- Gwylio bod y plugin WP Engine yn weithiol a wedi'i sicradd'n dda.
- Os ydych chi wedi cyflwyno'r key API yn hanesyddol, gwylio i gael ystyried ei ddadl.
- Contact support WP Engine os oes gennych problem gyda'r API.

### Domen nid cael ei ddefnyddio {#domain-not-added}
- Gwylio'r logau Ultimate Multisite am unrhyw mesg eror.
- Sicradd bod y domen nid wedi cael ei ddefnyddio'n ddiwethaf i WP Engine.
- Sicradd bod eich plan WP Engine yn cefnogi'r amser y domenau sydd chi'n cytuno.

### Pัญหาau ar subdomainau {#subdomain-issues}
- Os nad oes gan subdomainau weithio, contact support WP Engine i roedd gyda chwarae d domen wildcard.
- Gwylio bod eich setiadau DNS wedi'u sicradd yn llawn ar gyfer y domen cyflym a'r subdomainau.
