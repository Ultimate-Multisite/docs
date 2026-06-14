---
title: Closte integrācija
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrācija ar Clostē

## Īsszums
Closte ir pārvaldīta WordPress hostings platforma, kas izstrādāta uz Google Cloud infrastruktūras. Šī integrācija ļauj automātiskai domēnu sinhronizācijai un SSL sertifikātu pārvaldībai starp Ultimate Multisite un Clostē.

## Funkcionalitātes
- Automātiska domēnu sinhronizācija
- SSL sertifikātu pārvaldība
- Wildcard domēnu atbalsts
- Nav nepieciešams konfigurēt, ja strādā uz Closte

## Prasības
Ja jūs izmantojat Clostē, šo konstantu jādefinē jūsu `wp-config.php` failā:

```php
define('CLOSTE_CLIENT_API_KEY', 'jūsu_api_kunci');
```

Šī konstanta parasti jau ir definēta, ja jūs hostējat uz Closte.

## Iestatījumu instrukcijas

### 1. Apstiprini savu Clostes API kluči
Ja jūs hostējat uz Closte, `CLOSTE_CLIENT_API_KEY` konstanta jau jādefinē jūsu `wp-config.php` failā. Jūs varat to apstiprināt, pārbaudot savu `wp-config.php` failu.

### 2. Iespējini integrāciju
1. Savuk WordPress admina menu no Ultimate Multisite dodieties uz Settings (Iestatījumi)
2. Navigējieties uz "Domain Mapping" (Domēnu mapi) tablu
3. Scrolliet lejup, lai atrastu "Host Integrations" (Host integrācijas)
4. Iespējini Clostes integrāciju ielauto
5. Nospiediet "Save Changes" (Saglabāt izmaiņas)

## Kā tas strādā

Kad domēnu mapi tiek izveidots Ultimate Multisite:

1. Integrācija sūta pieprasījumu Clostes API, lai domēnu pievienotu jūsu lietojumam
2. Closte automātiski pārvaldī SSL sertifikāta sniegšanu
3. Kad domēna mapi tiek atņemts, integrācija domēnu noņem Clostē

Integrācija arī strādā ar DNS pārbaudes intervālu iestatījumiem Ultimate Multisite, ļaujot jums noteikt, cik bieži sistēma pārbauda DNS propagāciju un SSL sertifikāta sniegšanu.

Domēna reģistra izveide

Šī integrācija nodrošina, ka, kad tiek izveidots vai duplikots vietne, automātiski tiek izveidots domēna ieraksts. Tas ir īpaši svarīgi Closte integrācijai, jo domēnas ieraksta veidošana spēk atrodī Closte API, lai izveidotu domēnu un SSL sertifikāta.

## Kļūdu likums (Troubleshooting)

### API savienojamības problēmas
- Pārbaudiet, vai jūsu Closte API kluāvs ir pareizs
- Nodrošiniet, ka jūsu Closte kontam ir nepieciešami atļaujas

### SSL sertifikāta problēmas
- Closte var aizņemt kādu laiku sertifikātu izdošanai (parasti 5–10 minūtes)
- Pārbaudiet, vai jūsu domēni labi norāda uz jūsu Closte servera IP adresi
- Pārbaudiet DNS ierakstus jūsu domēnam, lai pārliecinātos, ka tie ir pareizi konfigurēti

### Domēna nav pievienota
- Pārbaudiet Ultimate Multisite logus jebkurām kļūdu ziņojumiem
- Pārbaudiet, vai domēna vēl nav pievienota Closte
- Nodrošiniet, ka jūsu domēnas DNS ieraksti ir labi konfigurēti

### DNS pārbaudes intervāls
- Ja SSL sertifikāti aizņem pārāk daudz laika izdošanai, jūs varat pielāgot DNS pārbaudes intervālu Domēna Mappings iestatījumos.
- Defolt intervāls ir 300 sekundes (5 minūtes), bet jūs varat noteikt to līdz pat 10 sekundēm ātrākajai pārbaudes laikā testēšanai
