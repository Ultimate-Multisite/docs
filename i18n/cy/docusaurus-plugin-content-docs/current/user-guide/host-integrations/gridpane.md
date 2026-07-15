---
title: Ychwanegiadau GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Ymddian GriddyPane

## Oglampiad {#overview}
Mae GridPane yn panel cyddeisio WordPress sydd wedi'i llwybrion ar gyfer proffesiynwyr WordPress sydd â chymdeithas. Mae’r y cyfathriau hwn yn sylw'n gael synchiadau domena a rheoli certydd SSL yn awtrol rhwng Ultimate Multisite a GridPane.

## Eithafau {#features}
- Synchiadau domena awtrol
- Rheoli certydd SSL
- Cyddeisio awtrol o constant SUNRISE

## Cynlluniau {#requirements}
Rhaid i'r cyconstantau canlynol fod wedi'u cyflwyno yn eich ffeil `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Cynlluniau Rheoli {#setup-instructions}

### 1. Derbyn eich Cyfathriau API GridPane {#1-get-your-gridpane-api-credentials}

1. Log in i'r dashboard GridPane eich
2. Ymddangos i "Settings" > "API"
3. Cynllunwch un key API os nad oes gennych yn ei fod
4. Copiwch eich key API

### 2. Derbyn eich IDs Server a Site {#2-get-your-server-and-site-ids}

1. Yn eich dashboard GridPane, ymlwch i "Servers"
2. Dewch y server lle mae eich multisite WordPress wedi'i llwybro
3. Rhaid i'r ID Server fod yn sylw (yn cael ei weld yn yr URL neu ar y dogfynau'r server)
4. Ymddangos i "Sites" a derbyn eich site WordPress
5. Rhaid i'r ID Site fod yn sylw (yn cael ei weld yn yr URL neu ar y dogfynau'r site)

### 3. Ychwanegu Cyconstantau i wp-config.php {#3-add-constants-to-wp-configphp}

Ymddangos y cyconstantau canlynol i eich ffeil `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Gofal y Cyddeisio {#4-enable-the-integration}

1. Yn eich admin WordPress, ymlwch i Ultimate Multisite > Settings
2. Ymddangos i'r tab "Domain Mapping"
3. Dechrau i bennaf i "Host Integrations"
4. Gofal y cyddeisio GridPane
5. Clic ar "Save Changes"

## Sut mae hyn yn gweithio {#how-it-works}

Pan cael domena wedi'i mappio mewn Ultimate Multisite:

1. Mae'r cyfathrebu yn anodd yw'n anfon gyflwyniad i API Gridpane i dros y domenaeth at eich siw.
2. Mae GridPane yn gwneud y cyflenwiad SSL yn awyr.
3. Pan cael ei ddifynnu'r cysyllti domenaeth, bydd y cyflenwiad yn taro'r domenaeth o Gridpane.

Mae'r cyflenwiad hefyd yn gwneud y constant SUNRISE yn awyr mewn fylchembr eich wp-config.php, sydd ei angen i fod y ddifynnu domenaeth yn gweithio'n iawn.

## Rheoli Constant SUNRISE {#sunrise-constant-management}

Mae un ffairfeiriad unigol o Gridpane integration yw ei ddefnyddio'r constant SUNRISE mewn wp-config.php i awyr ychwanegau gyda'r system ddifynnu domenaeth Gridpane ei hun i lawer ychwanegau. Mae hyn yn sicr y bydd y ddau system yn gweithio gyda'i gilydd heb anwylydiaid.

## Cyflwyniad Cynllunio (Troubleshooting) {#troubleshooting}

### Pัญหาau mewn Cysyllti API {#api-connection-issues}
- Gwylio bod eich key API yn dda
- Assurio bod eich IDs server a siw yn dda
- Sicru bod eich cyfrifau Gridpane gyda'r amrywiol sydd ei angen yn dda

### Pัญหาau mewn Cysyllti SSL {#ssl-certificate-issues}
- Gallai GridPane gwneud chymdeithas i ddynnu cyd-fynd SSLau
- Gwylio bod eich domenaethau yn cyfeirio'n iawn i'r amgylchedd IP eich server
- Gwylio'r setau SSL Gridpane ar gyfer eich siw

### Domenaeth Nid cael ei ddefnyddio {#domain-not-added}
- Gwylio'r log Ultimate Multisite am unrhyw mesg erru
- Assurio bod y domenaeth nid wedi cael ei ddefnyddio'n ddyddiad i Gridpane
- Sicru bod eich cyfrifau DNS ychwanegol yn cael eu setlo'n iawn
