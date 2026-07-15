---
title: Përcaktimi i konstanteve të Zori në Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Vendosja konstanteve Sunrise në të vërtetë (true) në Closte

Disa of i host provider bllokojnë `wp-config.php` për arsye sigurie. Kjo do të thotë se Ultimate Multisite nuk mund ta modifikojë automatikisht këtë skedar për të përfshirë konstante të nevojshme që të funksionojnë mapi i domenit dhe tjera veçori. Closte është një nga këto host-e.

Megjithatë, Closte ofron një mënyrë për të shtuar konstante në `wp-config.php` në mënyrë të sigurt. Vetëm duhet të ndiqni hapat e mëposhtëm:

## Në dashboard-in Closte {#on-the-closte-dashboard}

Përpara, ndjeheni në konton tuaj të Closte-it (https://app.closte.com/), klikoni te menynja "Sites" dhe pastaj klikoni te linku "Dashboard" mbi faqen ku po punoni aktualisht:

Ju do të shihni një numër të ri elementesh menuji në anën e majtë të ekranit. Navigjoni te faqja **Settings** (Konfigurime) duke përdorur atë meniu:

Pastaj, në **Settings**, gjeni tabin WP-Config dhe pastaj fushën "Additional wp-config.php content" në atë tabe:

<!-- Ekran i pika i pərënduar: Faça e cilësimeve Closte me tabin WP-Config që tregon fushën Shtesë për përmbajtjen e wp-config.php -->

Në kontekstin e instalimit të Ultimate Multisite, do të duhet të shtoni konstanten `sunrise` në atë fushë. Thjesht shtoni një rresht të ri dhe ngjiten (paste) rreshtin më poshtë. Më pas, klikoni butonin **Save All**.

```php
define('SUNRISE', true);
```

Kështu është kjo, jemi gati. Kthehu te instaluesi i Ultimate Multisite dhe fresko faqen për të vazhduar procesin.
