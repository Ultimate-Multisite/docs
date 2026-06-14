---
title: Integrimi i GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrimi me GridPane

## Përmbledhje
GridPane është një panel kontrolli i veçantë për hostimin WordPress, i ndërtuar për profesionistët serioz të WordPress. Kjo integrim lejon sinkronizimin automatik të domenit dhe menaxhimin e sertifikatave SSL midis Ultimate Multisite dhe GridPane.

## Karakteristikat
- Sinkronizim automatik i domenit
- Menaxhimi i sertifikave SSL
- Konfigurim automatik i konstanteve SUNRISE

## Kërkesat
Konstancat e mëposhtme duhet të përcaktohen në skedarin tuaj `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'ky_api_key_tuaj');
define('WU_GRIDPANE_SERVER_ID', 'id_i_serverit_tuaj');
define('WU_GRIDPANE_APP_ID', 'id_i_aplikacionit_tuaj');
```

## Instruktime për Konfigurim

### 1. Merr Kredencat e API të GridPane-së

1. Hapni dashboard-in tuaj të GridPane-së
2. Shkoni te "Settings" (Konfigurime) > "API"
3. Gjeneroni një api key nëse nuk keni një tashmë
4. Kopjoni api key-n tuaj

### 2. Merr ID-të e Serverit dhe Siti

1. Në dashboard-in tuaj të GridPane-së, shkoni te "Servers" (Serverët)
2. Zgjidhni serverin ku është hostuar multisite WordPress juaj
3. Përcaktoni ID-në e Serverit (i dukshëm në URL ose në faqen e detajeve të serverit)
4. Shkoni te "Sites" (Sitet) dhe zgjidhni sitin tuaj WordPress
5. Përcaktoni ID-në e Sitës (i dukshëm në URL ose në faqen e detajeve të situsit)

### 3. Shtoni Konstante në wp-config.php

Shtoni konstancat e mëposhtme në skedarin tuaj `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'ky_api_key_tuaj');
define('WU_GRIDPANE_SERVER_ID', 'id_i_serverit_tuaj');
define('WU_GRIDPANE_APP_ID', 'id_i_sitis_tuaj');
```

### 4. Aktivizoni Integrimin

1. Në adminin tuaj të WordPress-it, shkoni te Ultimate Multisite > Settings (Konfigurime)
2. Navigjoni te tab-i "Domain Mapping" (Mapele Domenet)
3. Scrolloni poshtë te "Host Integrations" (Integrimet e Hostit)
4. Aktivizoni integrimin GridPane
5. Klikoni "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon

Kur një domen mapehet në Ultimate Multisite:

1. Integracioni dëtonin një kërkesë në API të GridPane për të shtuar domenit te faqen tuaj
2. GridPane menaxhon automatikisht provizimin e sertifikatës SSL
3. Kur fshihet një mappendi e domeneve, integracioni do të hiq domenin nga GridPane

Integracioni gjithashtu menaxhon automatikisht konstanten SUNRISE në skedarin tuaj wp-config.php, e cila është e nevojshme që mappendja e domenit të funksionojë siç duhet.

## Menaxhimi i Konstanteve SUNRISE

Një veçori unik e integracionit GridPane është se ai kthehet automatikisht konstanten SUNRISE në wp-config.php për të parandaluar konflikte me sistemin e vet të mappendjes së domenit të GridPane. Kjo siguron që të dy sistemet mund të punojnë bashkë pa probleme.

## Zgjidhja e Problemeve (Troubleshooting)

### Probleme me Lidhurin në API
- Verifikoni që ky API key është i saktë
- Kontrolloni që ID-të tuaj të serverit dhe faqes janë të sakta
- Sigurohuni që llogaria juaj në GridPane ka të gjitha lejet e nevojshme

### Probleme me Sertifikatën SSL
- GridPane mund të marrë pak kohë për të dhënë sertifikatat SSL
- Verifikoni që domenet tuaja po drejtohen siç duhet te adresa IP e serverit tuaj
- Kontrolloni cilësimet e SSL në GridPane për faqen tuaj

### Domeni Nuk është Shtuar
- Kontrolloni logjet Ultimate Multisite për çdo mesazh gabimi
- Verifikoni që domeni nuk është shtuar tashmë në GridPane
- Sigurohuni që regjistrat DNS të domenit tuaj janë konfiguruar siç duhet
