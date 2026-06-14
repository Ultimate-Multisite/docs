---
title: Ymddygiad Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Ymddianion Cloudways

## Cyflwyniadau
Mae Cloudways yn ffurf gweithredol (managed) o chwilio cloud sy'n sylw'r eich bod i ddefnyddio safon WordPress ar gyfer ychwanegau cloud fel DigitalOcean, AWS, Google Cloud, a mwy. Mae’r cyfathriadu hwn yn sylwi'r symudau domain (domain syncing) a'r rheoli certydd SSL rhwng Ultimate Multisite a Cloudways.

## Adranau
- Symudau domain symudol (Automatic domain syncing)
- Rheoli certydd SSL (SSL certificate management)
- Cyddefnyddio domenau ychwanegol (Support for extra domains)
- Cynllunio DNS ar gyfer certydd SSL (DNS validation for SSL certificates)

## Cyflwyniadau
Rhaid i'r cyfaintau canlynol i'w ddarlu yn eich ffeil `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'eimel_cloudways_edrych');
define('WU_CLOUDWAYS_API_KEY', 'gol_api_cloudways');
define('WU_CLOUDWAYS_SERVER_ID', 'id_server_cloudways');
define('WU_CLOUDWAYS_APP_ID', 'id_app_cloudways');
```

Oesblygiol, gallwch hefyd ddarlu:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_o_domena_yn_gwrth,a_rannwyd');
```

## Cynllunau Rheoli

### 1. Derbyn eich Cyfaintau API Cloudways

1. Logi i'r dashboard Cloudways eich.
2. Ymddangos i "Account" > "API Keys".
3. Gynllunwch un gol API os nad oes gennych yn ei gael.
4. Copiwch eich eimel a'r gol API.

### 2. Derbyn eich ID Server a Aplikacio

1. Yn eich dashboard Cloudways, ymddangos i "Servers".
2. Deiliwch y server lle mae eich multisite WordPress yn cael ei gweithredu.
3. Mae'r ID Server yn agor yn yr URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ymddangos i "Applications" a deiliwch eich aplikacio WordPress.
5. Mae'r App ID yn agor yn yr URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ychwanegu Cyfaintau i wp-config.php

Ymddarlwch y cyfaintau canlynol i'r ffeil `wp-config.php` eich:

```php
define('WU_CLOUDWAYS_EMAIL', 'dyddiwr_cloudways_eddf');
define('WU_CLOUDWAYS_API_KEY', 'chirop_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'chirop_server_id');
define('WU_CLOUDWAYS_APP_ID', 'chirop_app_id');
```

Os oes gennych chiwain **ewrth** (maes ychwanegol) sydd yn ddefnyddio ar gyfer y Cloudways aliases list:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Peidiwch â rhoi'ch neryn gweithredol (wildcard) o'r rheini eich hun
Peidiwch â chynllunio `*.chirop-network.com` (neu unrhyw model subdomain o'r rheini eich hun) i `WU_CLOUDWAYS_EXTRA_DOMAINS`. Gweld [Mae'n bwysig — pethau SSL gweithredol](#important--wildcard-ssl-pitfall) iselwch am beth mae hyn yn gwneud i'r certiau SSL per-tenant cael eu cyflwyno.
:::

### 4. Mae'r Cyfathriau wedi'i Gynllhau

1. Yn eich admin WordPress, mynd i Ultimate Multisite > Settings
2. Mynd i'r tab "Domain Mapping" (Cyfluniadau Ddrefn)
3. Cawswch i bennaf i "Host Integrations" (Cyfathriau Gweithredol)
4. Mae'r cyfathriau Cloudways wedi'i chynllhau
5. Click ar "Save Changes" (Cadw newidiadau)

## Sut mae hyn yn gweithio

### Cyfluniadau Ddrefn (Domain Syncing)

Pan cael ddrefn yn cael ei ddefnyddio mewn Ultimate Multisite:

1. Mae'r cyfathriau yn cael eu cyflwyno i gyd sydd ar gael
2. Mae'r ddrefn newydd yn cael ei dros y llyfr ( gyda ffurf www os oes angen)
3. Mae'r llyfr cyfan yn cael ei anfon i Cloudways drwy'r API
4. Mae Cloudways yn cyfathriau'r aliases o ddrefn ar gyfer eich application

Meddefnyddio: Mae'r API Cloudways yn rhoi angen i anfon y llyfr cyfan o ddrefniadau pob amser, nid dim ond i drosu neu dod o hyd i ddrefniadau unigol.

### Rheoli Certiau SSL (SSL Certificate Management)

Ar ôl cael ddrefniadau wedi'u cyfathri:

1. Mae'r cyfathriau yn gweld pa ddrefniadau DNS sydd â chwarae i'ch server
2. Mae'r system yn anfon gyfle i Cloudways i gael certiau Let's Encrypt SSL ar gyfer y ddrefniadau hyn
3. Mae Cloudways yn cael ei rheoli'r cyflwyno a chwarae'r cert SSL

Mae'r cyfathrebu yn rheoli'r certys Let's Encrypt **standard** (nadwyll) o Cloudways. Os oes ffurfyniad wildcard yn cael ei rhoi mewn `WU_CLOUDWAYS_EXTRA_DOMAINS`, mae'r `*.` yn cael ei taro ar y cyfleu cyn y gyflwyniad SSL — nid yw'r wildcard ei ddefnyddio gan y cyfathrebu hwn. I ddefnyddio certys wildcard ar Cloudways, byddwch yn rhaid i chi ei chwarae'n manwl, ond mae hyn yn blocu y gyflwyniad Let's Encrypt ar gyfer domainau custom sydd wedi'u mapi (gweli'r peth hanesydd isod).

## Domainau Addol

Mae'r constant `WU_CLOUDWAYS_EXTRA_DOMAINS` yn sylw i chi ddarganfod domainau **ewr** addol sydd ei ddefnyddio arallai mewn llyfr y alias o'r cyfathrebu Cloudways. Defnyddiwyd y tu mewn iddo i:

- Domainau ewr na cael eu rheoli gan Ultimate Multisite (e.e., safle marthau sy'n rhannu'r un application Cloudways).
- Domainau parked neu staging sydd chi eisiau cael eu cadw ar llyfr y alias o'r application.

**Peidiwch â defnyddio'r constant hwn ar gyfer wildcard subdomain o'ch nodedig (e.e., `*.your-network.com`).** Gweli'r peth hanesydd SSL wildcard isod.

## Importiant — Peth Hanesydd SSL Wildcard

Mae rhywbeth hanesydd pan fyddwch yn dilyn y setffroi cyffredinol o Cloudways yw cyflwyno wildcard fel `*.your-network.com` i `WU_CLOUDWAYS_EXTRA_DOMAINS`, neu ei chwarae'n manwl i gael certys SSL wildcard o Cloudways ar gyfer y wildcard hwn.

**Os ydych chi'r hyn, bydd Cloudways yn gwahaniaethu i ddefnyddio Let's Encrypt ar gyfer domainau custom sydd wedi'u mapi gan Ultimate Multisite.** Mae Cloudways yn gwahaniaethu certys SSL weithredol ar y application gyda'i gael yn llwyr, ac mae certys wildcard sydd wedi'i chwarae ar y application yn blocio'r gyflwyniad Let's Encrypt ar gyfer domainau un-un.

### Setffroi SSL Cloudways Arallangol i Rhedd Ultimate Multisite

1. Yn y tab **SSL Certificate** yn ddefnyddio'r cyflwyniad **Let's Encrypt standard** sy mae'n gwriadu dim ond ar `your-network.com` a `www.your-network.com` — nid rhywfaint (wildcard).
2. Peidiwch â rhoi `*.your-network.com` (neu unrhyw model subdomain o'ch rheiniad) yn `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rhowch y constant hwn ar gyfer **domainau allanol** dim ond.
3. Creu'r wildcard subdomain ar gyfer each ddyn-gwrth (per-tenant) yn lefel **DNS** ond yn unig (record `A` ar gyfer `*.your-network.com` sy mae'n cyfeirio at IP serwer Cloudways eich.
   Yn y dyfodol, bydd y SSL ar gyfer domainau custom a chyfyniadau wedi'u mapiwyd yn cael ei cyflwyni'n awtrol gan y cyfathryd drwy Let's Encrypt.

Os oes angen i'r domainau custom o'ch ddyn-gwrth sydd wedi'u gwblio heb SSL, gwchwch ar y tab SSL Cloudways. Os mae'r certifig rhywfaint (wildcard) yn weithredol yno, tystyrnu ei, cyflwyni eto'r certifig Let's Encrypt standard ar gyfer domain rheiniad canol dim ond, a tystyrnu unrhyw gynnwysau rhywfaint o `WU_CLOUDWAYS_EXTRA_DOMAINS`. Yna re-triggerwch mapiad domain (neu gwchwch ar y un nesaf) ac bydd y cyfathryd yn dechrau cyflwyni certifig ar gyfer domain dim ond.

## Cynllunio Problemyngau

### Pัญหาau mewn cysyllti API
- Gwylio bod eich e-bost a chref API'n cywir
- Gwchwch bod eich IDs serwer a ddefnyddio yn wir
- Sicrhewch bod eich cyfrifau Cloudways gyda'r permisiwnau sydd angen.

### Pัญหา gyda Sertifig SSL
- Mae Cloudways yn rhestru bod domena gyda record DNS gywir sy'n cyfeirio at eich server قبل ychwanegu sertifigau SSL.
- Mae'r cyfathriant yn gwalia recordau DNS قبل ychwanegu sertifigau SSL.
- Os nad yw sertifigau SSL yn cael eu chwanegu, gwalia i sicr ydynt eich domena yn cyfeirio'n iawn at yr adran IP eich server.
- **Domena personol (per-tenant) sydd wedi cael eu cyd-derbynio heb SSL?** Gwalia y tab Sertifig SSL o'r app Cloudways. Os oes sertifig wildcard (aidd yn cael ei chwarae, neu mae'n gwru `*.your-network.com`) yn gweithredol, nid yw Cloudways yn chwanegu sertifigau Let's Encrypt ar gyfer domena personol sydd wedi'u mapi'n rhyngweithiol. Rhowch ei wahan gyda sertifig Let's Encrypt standard sy'n gwru dim ond ar domena rheini'r network ( `your-network.com`, `www.your-network.com`) a taro chiweryn cyllid wildcard o `WU_CLOUDWAYS_EXTRA_DOMAINS`. Yna re-triggerwch mapi domena (neu gweso i'r un nesaf) ac fydd y cyfathriant yn rhestru sertifigau ar gyfer domena.

### Domena Nid wedi cael ei ddefnyddio
- Gwalia log Ultimate Multisite am unrhyw atebau eros.
- Gyfarwyddwch bod y domena nid wedi cael ei ddefnyddio'n rhyngweithiol i Cloudways.
- Sicr bod eich plan Cloudways yn cefnogi'r amser domena sydd chi'n ddefnyddio.
