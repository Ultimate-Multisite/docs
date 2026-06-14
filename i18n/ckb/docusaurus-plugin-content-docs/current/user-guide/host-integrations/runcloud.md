---
title: Integrasyon RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integration-a RunCloud

## Overzicht
RunCloud is een cloud-gebaseerd platform voor serverbeheer waarmee je webapplicaties eenvoudig kunt plaatsen en beheren op je eigen cloudservers. Deze integratie maakt automatische domein-synchronisatie en SSL-certificaatbeheer mogelijk tussen Ultimate Multisite en RunCloud.

## Kenmerken
- Automatische domein-synchronisatie
- Beheer van SSL-certificaten
- Domein verwijderen wanneer koppelingen worden gewist

## Vereisten
De volgende constante waarden moeten in je `wp-config.php` bestand gedefinieerd zijn:

```php
define('WU_RUNCLOUD_API_KEY', 'jouw_api_key');
define('WU_RUNCLOUD_API_SECRET', 'jouw_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'jouw_server_id');
define('WU_RUNCLOUD_APP_ID', 'jouw_app_id');
```

## Instelinstructies

### 1. Haal je RunCloud API-gegevens op

1. Log in op je RunCloud dashboard.
2. Ga naar "User Profile" (klik op je profielfoto rechtsboven).
3. Selecteer "API" uit het menu.
4. Klik op "Generate API Key" als je er nog geen hebt.
5. Kopieer je API Key en API Secret.

### 2. Haal je Server- en App-ID's op

1. In je RunCloud dashboard, ga naar "Servers".
2. Selecteer de server waar je WordPress multisite gehost is.
3. De Server ID is zichtbaar in de URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ga naar "Web Applications" en selecteer je WordPress applicatie.
5. De App ID is zichtbaar in de URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Voeg Constanten toe aan wp-config.php

Voeg de volgende constante waarden toe aan je `wp-config.php` bestand:

```php
define('WU_RUNCLOUD_API_KEY', 'jouw_api_key');
define('WU_RUNCLOUD_API_SECRET', 'jouw_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'jouw_server_id');
define('WU_RUNCLOUD_APP_ID', 'jouw_app_id');
```

### 4. Schakel de integratie in

١. لە ئیدارەی WordPress، بگواشبە **Ultimate Multisite > Settings** (سەرکردایەتی چەندین سایت)

٢. بۆ لایەنەکەدا، بگواشبە لایەنەکەی **"Domain Mapping"** (پێناساندنی دامێنی)

٣. نزیک بکە دەستی خوارەوە بۆ بەشی **"Host Integrations"** (یەکگرتوو لەگەڵ هاستکردن)

٤. یەکگرتنی **RunCloud** (ئەمانە) چالاک بکە
٥. بۆ ئەوەی گۆڕانکارییەکان هەڵبژێرێیت، بگەڕێ بۆ **"Save Changes"** (گۆڕینی گۆڕانکارییەکان)

## چۆن کار دەکات؟

کاتێک دامێنی لە Ultimate Multisite دا پێناساند دەکرێت:

١. یەکگرتوو داواکارییەک بۆ APIی RunCloud دەبینێت تا دامێنی بۆ ئەپڵیکەیشنی تۆ زیاد بکات
٢. ئەگەر دامێنی بە سەرکەوتوویی زیاد بکرێت، یەکگرتنو ئەو گۆڕانکارییە لەسەر پڕۆژەی SSL (SSL certificates) دووبارە دابنێریت

کاتێک پێناساندکردنی دامێنی دەردەچێتەوە، یەکگرتوو دامێنی لە RunCloud دەدبڕێتەوە.

بۆ دامێنی زیرەکی ناوخۆیی (subdomain installations)، یەکگرتنو بە شێوەیەکی ئۆتۆماتیک کار دەکات بۆ دروستکردنی subdomain'ەکان لە RunCloud کاتێک سایتە نوێیەکانی تۆ زیاد دەکرێن بۆ تۆڕەکەت.

## چارەسەرکردنی کێشەکان (Troubleshooting)

### کێشەی پەیوەندی API (API Connection Issues)
- دڵنیا بەوەی کە مۆڵەتی APIی تۆ دروستە
- چاک بکە کە IDی سروری و ئەپڵیکەیشنت هەڵدەستێت
- دڵنیابە کە کۆمپیوتەرەکەت (RunCloud account) ڕێگەپێدانی پێویست هەیە

### کێشەی پڕۆژەی SSL (SSL Certificate Issues)
- RunCloud دەتوانرێت کاتێکی تر بۆ دروستکردنی SSL certificates بێت
- دڵنیا بەوەی کە دامێنییەکان بە شێوەیەکی دروست بۆ IPی سروری تۆ ئاماژە دەدەن
- تنظیمەکانی SSLی RunCloud بۆ ئەپڵیکەیشنت چاک بکە

### دامێنی زیاد نەکراوە (Domain Not Added)
- لە لاگەکانی Ultimate Multisite دۆخی هەڵەیەک بگەڕێەوە
- دڵنیابە کە دامێنیەکە پێشتر لە RunCloud دا زیاد نییە
- دڵنیابە پلانی RunCloud یەکگرتو پشتگیریی دامێنی زۆر دەبێت
