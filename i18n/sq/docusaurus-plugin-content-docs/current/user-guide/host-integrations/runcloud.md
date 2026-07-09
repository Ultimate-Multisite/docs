---
title: Integrimi RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrimi me RunCloud {#runcloud-integration}

## Përmbledhje {#overview}
RunCloud është një platformë menaxhimi të serverëve në cloud që ju lejon të shkarkoni dhe menaxhoni lehtë web aplikacione në serverët tuaj cloud. Kjo integrim lejon synkronizimin automatik të domenit dhe menaxhimin e sertifikatave SSL midis Ultimate Multisite dhe RunCloud.

## Karakteristikat {#features}
- Synkronizim automatik i domenit
- Menaxhimi i sertifikave SSL
- Fshirja e domenit kur fshihen mape (mappings)

## Kërkesat {#requirements}
Këto konstanta duhet të definen në skedarin tuaj `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instruktime për Konfigurim {#setup-instructions}

### 1. Merrni Kredencat e API të RunCloud-it tuaj {#1-get-your-runcloud-api-credentials}

1. Sjelleni në dashboard-in tuaj të RunCloud-it
2. Shkoni te "User Profile" (klikoni mbi ikonën tuaj profili në këndin e djathtë të sipërm)
3. Zgjidhni "API" nga menuna
4. Klikoni "Generate API Key" nëse nuk keni një tashmë
5. Kopjoni API Key-n dhe API Secret-in tuaj

### 2. Merrni ID-të e Serverit dhe Aplikacionit tuaj {#2-get-your-server-and-app-ids}

1. Në dashboard-in tuaj të RunCloud-it, shkoni te "Servers"
2. Zgjidhni serverin ku është hostuar multisite WordPress juaj
3. ID-ja e Serverit është i dukshëm në URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Shkoni te "Web Applications" dhe zgjidhni aplikacionin tuaj WordPress
5. ID-ja e Aplikacionit është i dukshme në URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Shtoni Konstanta në wp-config.php {#3-add-constants-to-wp-configphp}

Shtoni konstantit më poshtë në skedarin tuaj `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktivizoni Integrimin {#4-enable-the-integration}

1. Në adminin tuaj të WordPress, shko te Ultimate Multisite > Settings
2. Navigo te tab "Domain Mapping" (Mapele Domainet)
3. Scroll poshtë deri në "Host Integrations" (Integrimet e Hostit)
4. Aktivizo integrimin RunCloud
5. Kliko te "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi dërgon një kërkesë në API-n e RunCloud për të shtuar domenit në aplikacionin tuaj
2. Nëse domeni shtohet me sukses, integrimi gjithashtu do riposterroj certifikatat SSL
3. Kur hiqni mapeimin e domeneve, integrimi do heqë domenit nga RunCloud

Për instalimet e subdomain-eve, integrimi do menaxhojë automatikisht krijimin e subdomain-eve në RunCloud kur shtoni njerëz të rinj në rrjetin tuaj.

## Zgjidhja e Problemeve (Troubleshooting) {#troubleshooting}

### Probleme me Lidhurit me API {#api-connection-issues}
- Verifikoni që kredencialet e API juaj janë korrekte
- Kontrolloni që ID-të e serverit dhe aplikacionit tuaj janë të sakta
- Sigurohuni që llogaria juaj në RunCloud ka të gjitha lejet e nevojshme

### Probleme me Certifikatat SSL {#ssl-certificate-issues}
- RunCloud mund të marrë pak kohë për të dhënë certifikatat SSL
- Verifikoni që domenet tuaja po drejtohen siç duhet te adresa IP e serverit tuaj
- Kontrolloni cilësimet e SSL në RunCloud për aplikacionin tuaj

### Domeni Nuk Shtohet {#domain-not-added}
- Kontrolloni logjet e Ultimate Multisite për ndonjë mesazh gabimi
- Verifikoni që domeni nuk është shtuar tashmë në RunCloud
- Sigurohuni që plani juaj në RunCloud mbështet disa domene
