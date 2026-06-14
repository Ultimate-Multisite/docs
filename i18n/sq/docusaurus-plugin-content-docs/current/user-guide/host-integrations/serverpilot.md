---
title: Integrimi ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrimi me ServerPilot

## Përmbledhje
ServerPilot është një shërbim në cloud për hostimin e faqeve WordPress dhe të tjerë që përdorin PHP në servere nga DigitalOcean, Amazon, Google ose çdo ofrues serveri tjetër. Kjo integrim lejon sinkronizimin automatik të domenit dhe menaxhimin e sertifikatës SSL midis Ultimate Multisite dhe ServerPilot.

## Karakteristikat
- Sinkronizim automatik i domenit
- Menaxhimi i sertifikatës SSL me Let's Encrypt
- Rritje automatike e sertifikatës SSL

## Kërkesat
Këto konstanta duhet të përcaktohen në skedarin tuaj `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instruktime për Konfigurim

### 1. Merrni Kredencat e API të ServerPilot-it tuaj

1. Sjelleni në dashboard-in tuaj ServerPilot
2. Shkoni te "Account" > "API" (Llogaria > API)
3. Krijoni një çelës API të ri nëse nuk keni një tashmë
4. Kopjoni Client ID dhe API Key tuaj

### 2. Merrni App ID-n tuaj

1. Në dashboard-in tuaj ServerPilot, shkoni te "Apps" (Aplikimet)
2. Zgjidhni aplikacionin ku është hostuar multisite WordPress juaj
3. App ID-ja duket në URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Shtoni Konstanta në wp-config.php

Shtoni konstantit e mëposhtëm në skedarin tuaj `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktivizoni Integrimin

1. Në adminin tuaj WordPress, shkoni te Ultimate Multisite > Settings (Cilësimet)
2. Navigjoni te tab-i "Domain Mapping" (Mapele Domenit)
3. Shkoni poshtë te "Host Integrations" (Integrimet e Hostit)
4. Aktivizoni integrimin ServerPilot
5. Klikoni "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon

### Sinkronizimi i Domenit

Kur një domen mapehet në Ultimate Multisite:

1. Integracioni merr listën aktuale të domenëve nga ServerPilot
2. Ajo shton domenit e ri në listë (siempre me një version www, nëse është e përshtatshme)
3. Ajo dërgon listën e përditësuar te ServerPilot përmes API-s

ServerPilot përditëson listën e domenëve për aplikacionin tuaj

### Menaxhimi i Sertifikatës SSL

Pas sinkronizimit të domenëve:

1. Integracioni aktivizon automatikisht AutoSSL për aplikacionin tuaj
2. ServerPilot menaxhon dhënien dhe instalimin e sertifikatës SSL duke përdorur Let's Encrypt
3. ServerPilot gjithashtu menaxhon rinovimin automatik të sertifikave SSL

## Verifikimi i Sertifikatës SSL

Integracioni është konfiguruar për të rritur numrin e provave të verifikimit të sertifikatës SSL për ServerPilot, pasi mund të marrë pak kohë që ServerPilot të dhënojë dhe instalojë sertifikatën SSL. Në def default, ai do të provojë deri në 5 herë, por kjo mund të rregullohet duke përdorur filters.

## Zgjidhja e Problemeve (Troubleshooting)

### Probleme me Lidhurin me API-n

- Verifikoni që Client ID dhe API Key ju janë korrekte
- Kontrolloni që App ID ju është i saktë
- Sigurohuni që llogaria juaj në ServerPilot të ketë të gjitha lejet e nevojshme

### Probleme me Sertifikatën SSL

- ServerPilot kërkon që domenët të kenë regjistrime DNS valide që tregojnë drejt serverit tuaj para se të dhënojë sertifikatën SSL
- Nëse sertifikatët SSL nuk po dhërohen, kontrolloni nëse domenët tuaj tregojnë si duhet drejt adresës IP të serverit tuaj
- Mund të marrë pak kohë që ServerPilot të dhënojë dhe instalojë sertifikatën SSL (zakonisht 5-15 minuta)

### Domeni Nuk Shtohet

- Kontrolloni logjet e Ultimate Multisite për çdo mesazh gabimi
- Verifikoni që domeni nuk është shtuar tashmë në ServerPilot
- Sigurohuni që plani juaj në ServerPilot të mbështet numrin e domenëve që po shtoni

### Fshirja e Domenit

- Aktualisht, API-ja ServerPilot nuk ofron mënyrën për të fshirë domene individuale.
- Kur një mappendje e domenit hiqet në Ultimate Multisite, integrimi do të përditësojë listën e domenve në ServerPilot duke ekskluduar domenit që është hequr.
