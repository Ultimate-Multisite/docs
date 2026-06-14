---
title: GridPane samþætting
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integration með GridPane

## Översiktur
GridPane er sérhæfð WordPress hosting stjórnunarstafn sem byggist á því að hjálpa alvarlegum WordPress fagfólum. Þessi tenging gerir mögulega fyrir sjálfsvinnandi samræmi domæna og stjórnun SSL-tækja milli Ultimate Multisite og GridPane.

## Stöðvar
- Sjálfvirkur samræmi domæna (automatic domain syncing)
- Stjórnun SSL-tækja
- Sjálfsvinnandi uppsetning SUNRISE constantar

## Kravðingar
Fylgja eftir þessum constantum verða að skilgreina í lausnari `wp-config.php` skjalinu:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Uppsetningstefnur

### 1. Fáðu GridPane API tengingarskilpurðin þínar

1. Logga inn í GridPane dashboard-inn þínu
2. Gangi yfir í "Settings" > "API"
3. Skapa API key ef þú hefur ekki enn eina
4. Kopla API key þinn

### 2. Fáðu Server og Site ID-myndargildi

1. Í GridPane dashboard-inum þínu, gangi yfir í "Servers"
2. Veldu server sem heldur WordPress multisite þitt
3. Skrifa niður Server ID (sem er sýnt í URL eða á síðu með upplýsingum um serverinn)
4. Gangi yfir í "Sites" og veldu WordPress síðuna þína
5. Skrifa niður Site ID (sem er sýnt í URL eða á síðu með upplýsingum um síðuna)

### 3. Búa constantar í wp-config.php

Búa eftirfarandi constantar í `wp-config.php` skjalinu:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Skyni tengingin

1. Í WordPress admin-stjórnuninni þinni, gangi yfir í Ultimate Multisite > Settings
2. Gangi yfir í "Domain Mapping" tabinn
3. Skolia niður yfir "Host Integrations"
4. Skyni GridPane tengingin (Enable the GridPane integration)
5. Klikka á "Save Changes"

## Hvernig þetta virkar

Þegar domænið er samræmt í Ultimate Multisite:

1. Inngangur sendir upplýsingar til API-n GridPane til að bæta domænin við síðuna þinni
2. GridPane skiptir með sér sjálfskiptum leiðslu SSL-sertifíka
3. Þegar domænleiðsla er fjarlægð, fjarlægir inngangurinn domæni frá GridPane

Inngangurinn skiptir einnig með sér sjálfskiptum leiðslu SUNRISE constant í wp-config.php lausninni þínum, sem er nauðsynleg fyrir að domænleiðsla verki sé rétt.

## Stjórnun SUNRISE Constant
Eitt einstakt eiginleiki á GridPane inngangurinn er að hann sjálfskiptir með sér SUNRISE constant í wp-config.php til að koma í veg fyrir stöðuásetningar við eigin domænleiðslusystemið þess. Þetta tryggir, að bæði systemarn geti virki saman án áhrifa.

## Feilanaskynning
### Áhugamál um API-samband
- Staða að API key-inn þinn er rétt
- Skenni að server og síðu ID-ar þín eru rétt
- Tryggðir að GridPane reikningurinn þinn hafi nauðsynlegum réttindi

### Áhugamál um SSL-sertifíki
- GridPane getur þurfa nokkinn tíma til að leiða SSL-sertifíki
- Staða að domænir þín eru rétt leiðar til IP-heiti serverar þín
- Skenni GridPane SSL-stillingar fyrir síðuna þína

### Domæni ekki bætt við
- Skenni Ultimate Multisite logs fyrir nánastilka villum
- Staða að domænin ekki sé á viðmiðinni í GridPane
- Tryggðir að DNS-skjalanna domænsins sé rétt sett upp
