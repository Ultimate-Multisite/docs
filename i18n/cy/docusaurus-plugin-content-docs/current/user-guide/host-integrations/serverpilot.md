---
title: Ymddygiad ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Ymddianol ServerPilot

## Cyflwyniadau {#overview}
ServerPilot yw serfys o fylfach ar gyfer cyflenwi WordPress a wefan PHP eraill ar serverau DigitalOcean, Amazon, Google neu unrhyw darparwr server. Mae'r y cyflenwi hwn yn sylfaenu'r synchiad domenaidd a'r rheoli certysydd SSL rhwng Ultimate Multisite a ServerPilot.

## Eithafau {#features}
- Synchiad domenaidd awtomatig
- Rheoli certysydd SSL gyda Let's Encrypt
- Atalio certysydd SSL awtomatig

## Cynlluniau {#requirements}
Rhaid i'r cyfaintau canolion hyn i ddefnyddio yn eich fyllyn `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Cynlluniau Cyflenwi {#setup-instructions}

### 1. Derbyn eich cyfaintau API ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Logi i'r dashboard ServerPilot eich
2. Ymddangos i "Account" > "API"
3. Creu llwybr API newydd os nad oes gennych yn ei gael
4. Copio eich Client ID a API Key

### 2. Derbyn eich App ID {#2-get-your-app-id}

1. Yn eich dashboard ServerPilot, ymddangos i "Apps"
2. Deilio'r app lle mae eich multisite WordPress wedi'i cyflenwi
3. Mae'r App ID yn agored yn y URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ychwanegu canolion i wp-config.php {#3-add-constants-to-wp-configphp}

Ychwanegwch y canolion canlynol i eich fyllyn `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Gofal y cyflenwi {#4-enable-the-integration}

1. Yn eich admin WordPress, ymddangos i Ultimate Multisite > Settings
2. Ymddangos i'r tab "Domain Mapping" (Cyflenwi Domenaidd)
3. Cwrw i lawr i "Host Integrations" (Cyflenwi Serverau)
4. Gofal y cyflenwi ServerPilot
5. Clic ar "Save Changes" (Gofal Mae'n Cynllunio)

## Sut mae hyn yn gweithio {#how-it-works}

### Synchiad Domenaidd {#domain-syncing}

Pan cael domena wedi'i mappio mewn Ultimate Multisite:

1. Mae'r cyfathrebuwch yn cysylltu'r llyfrgell o domenau ar gyferol o'r ServerPilot.
2. Mae'n ychwanegu'r domena newydd i'r llyfrgell ( gyda ffurf www os oes angen) i'r llyfrgell.
3. Mae'n anfon y llyfrgell wedi'i cyfeiriadoli at ServerPilot drwy'r API.
4. Mae ServerPilot yn cyfathrebu'r llyfrgell domena ar gyfer eich cais.

### Rheoli Certiadau SSL (SSL Certificate Management) {#ssl-certificate-management}

Ar ôl i'r domena cael eu cyfathrebu:

1. Mae'r cysylltiad yn chynllunio AutoSSL ar gyfer eich cais yn awtomatig.
2. Mae ServerPilot yn gwarchod y cyflwyniad a chwarae'r certiadau SSL drwy Let's Encrypt.
3. Mae ServerPilot hefyd yn gwarchod y cyfathrebu atalio'r certiadau SSL yn awtomatig.

## Cynllunio Certiadau SSL (SSL Certificate Verification) {#ssl-certificate-verification}

Mae'r cysylltiad wedi'i cynllunio i sicrwydd mwy o gyfathrebu'r cyfathrebu certiadau SSL ar gyfer ServerPilot, gan fod ychydig amser yn gallai ei ddefnyddio ServerPilot i cyflwyno a chwarae certiadau SSL. Yn ddefnyddio'r cyfnodol, bydd hi'n ceisio i ddau o gymeriadau, ond gall hyn cael ei adeiladu drwy filtru.

## Cynllunio (Troubleshooting) {#troubleshooting}

### Pethau mewn Cysylltiad API (API Connection Issues) {#api-connection-issues}
- Rheoli felly bod eich Client ID a API Key yn corregol.
- Gwylio i sicr ydy eich App ID yn corregol.
- Sicru bod eich cyfrifol ServerPilot gyda'r gynnwys sydd ei angen.

### Pethau mewn Certiadau SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Mae ServerPilot yn rhoi'n rhaid i'r domena gael cyfathrebu DNS wirioneddol yn cyfeiriadu at eich server قبل ychwanegu certiadau SSL.
- Os nad yw certiadau SSL yn cael eu cyflwyno, gwylio i sicr bod eich domena yn cyfeiriadu'n dda at yr adres IP'r server.
- Gallai amser ddau o gymeriadau ServerPilot i cyflwyno a chwarae certiadau SSL (tywyll wrth 5-15 minyt).

### Domena Nid cael ei Wedi Adderiad (Domain Not Added) {#domain-not-added}
- Gwylio'r llogau Ultimate Multisite ar gyfer unrhyw mesg eror.
- Sicru bod y domena nid wedi cael ei adderiad i ServerPilot eto.
- Sicru bod eich cynllun ServerPilot yn cefnogi'r amser domenaedd syddwch yn ychwanegu.

### Arafodau (Domain Removal) {#domain-removal}
- Wedi, mae'r API o ServerPilot yn rhoi fwy o fwy i ddod o gwblhau teithioedd (domains) unigol.
- Pan ydyr y cyfrenau o ddefnyddio mewn Ultimate Multisite, bydd y cyfathreg yn wynebu'r llyfr cyfrenau o ServerPilot i gael y ddod o gwblhau wedi'i cael ei dod o gwblhau.
