---
title: Shigarwar RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Shigar RunCloud

## Bincike (Overview)
RunCloud wani wuri ne gudanarwar server na shiga da ke ba ka damar sauƙi don saka da sarrafa manhajoji na web a kan server-server daban-daban. Wannan haɗin yana ba ka damar yin sauyi na domain ko sarrafa SSL certificate tsakanin Ultimate Multisite da RunCloud cikin sauƙi.

## Sifofi (Features)
- Sauya domain ko wuri (Automatic domain syncing)
- Sarrafa SSL certificate
- Cire domain lokacin da aka cire haɗin (Domain removal when mappings are deleted)

## Bukatar (Requirements)
Wannan ƙa'idodin dole ne su zama a cikin fayil ɗin `wp-config.php` na ka:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Shawarar Shirye-shirye (Setup Instructions)

### 1. Samu Bayan Aiki na RunCloud API

1. Shiga cikin dashboard na RunCloud.
2. Ka je zuwa "User Profile" (ka danna hoton shiga a ƙarƙashin waje).
3. Zaɓi "API" daga babban menu.
4. Danna "Generate API Key" idan ba ka da shi ba.
5. Ka ɗauki API Key da API Secret na ka.

### 2. Samu ID na Server da App ɗinka

1. A dashboard na RunCloud, ka je zuwa "Servers".
2. Zaɓi server inda kake samar da WordPress multisite ɗinka.
3. ID na Server yana bayyana a URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ka je zuwa "Web Applications" kuma zaɓi manhajar WordPress ɗinka.
5. ID na App yana bayyana a URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ka ƙara Bayan Aiki (Constants) zuwa wp-config.php

Ka ƙara waɗannan ƙa'idodin zuwa fayil ɗin `wp-config.php` na ka:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Shiga Haɗin (Enable the Integration)

1. A cikin admin ɗin WordPress, zuwa Ultimate Multisite > Settings (Tattalin Arzinta)
2. Zuwa tab ɗin "Domain Mapping" (Haɗa Domain)
3. Dimawa zuwa "Host Integrations" (Haɗa Wurin Gudanar da Wurin)
4. Shiga RunCloud integration (haɗa RunCloud)
5. Danna "Save Changes" (Ajiye Canje-canje)

## Yadda Ake Aiki

Idan aka haɗa domain a Ultimate Multisite:

1. Haɗin yana aiko wajen API ɗin RunCloud don ƙara domain ɗin ku zuwa manhajar ku
2. Idan an ƙara domain cikin nasara, wannan haɗin zai kuma sake fitar da sertifikatun SSL (SSL certificates)
3. Lokacin da aka cire haɗa domain, wannan haɗin zai cire domain ɗin daga RunCloud

Don albarkaci subdomain (subdomain installations), wannan haɗin zai yi aiki ne ba tare da wata matsala don samar da subdomain a RunCloud lokacin da ake ƙara sabbin sites zuwa gida ku.

## Magan Rarraba Matala (Troubleshooting)

### Matsalolin Haɗin API
- Ka tabbatar cewa bayanan API ɗinka na daidai
- Bincika ko ID ɗin server ɗinka da app ɗinka sun daidai
- Ka tabbatar cewa asusunka na RunCloud yana da amurdun da ake bukata

### Matsalolin Sertifikatun SSL
- RunCloud zai iya ɗaukar lokaci don fitar da sertifikatun SSL
- Bincika ko domain ɗinka suna nuna sahihi ga IP ɗin server ɗinka
- Ka bincika tsarin SSL na RunCloud don manhajar ku

### Domain Ba Ya Ka Shiga
- Ka bincika logs (tsarin lissafi) na Ultimate Multisite don wata saƙon matali
- Tabbatar cewa domain ba ya shiga RunCloud ba a yanzu
- Ka tabbatar cewa tsarin RunCloud ɗinka yana tattaunawa da dama
