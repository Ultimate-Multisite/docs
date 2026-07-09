---
title: Ìṣepọ̀ ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Ìṣepọ̀ ServerPilot

## Àkópọ̀
ServerPilot jẹ́ iṣẹ́ cloud fún gbígbàlejò WordPress àti àwọn wẹ́bsáìtì PHP míràn lórí àwọn server ní DigitalOcean, Amazon, Google, tàbí olupèsè server míràn. Ìṣepọ̀ yìí ń jẹ́ kí domain syncing àti ìṣàkóso SSL certificate láàárín Ultimate Multisite àti ServerPilot ṣẹlẹ̀ láìọwọ́ṣe.

## Àwọn Ẹ̀ya
- Domain syncing láìọwọ́ṣe
- Ìṣàkóso SSL certificate pẹ̀lú Let's Encrypt
- Ìtúnṣe SSL láìọwọ́ṣe

## Àwọn Ohun Tí A Nílò
Àwọn constants wọ̀nyí gbọ́dọ̀ jẹ́ títúmọ̀ nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò

### 1. Gba Àwọn ServerPilot API Credentials Rẹ

1. Wọlé sínú ServerPilot Dashboard rẹ
2. Lọ sí "Account" > "API"
3. Ṣẹ̀dá API key tuntun bí o kò bá tíì ní ọ̀kan
4. Da Client ID àti API Key rẹ kọ

### 2. Gba App ID Rẹ

1. Nínú ServerPilot Dashboard rẹ, lọ sí "Apps"
2. Yan app tí WordPress multisite rẹ ti wà fún gbígbàlejò
3. App ID náà hàn nínú URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ṣàfikún Constants sí wp-config.php

Ṣàfikún àwọn constants wọ̀nyí sí fáìlì `wp-config.php` rẹ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Mú Ìṣepọ̀ Náà Ṣiṣẹ́

1. Nínú WordPress admin rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí tab "Domain Mapping"
3. Yi lọ sísàlẹ̀ sí "Host Integrations"
4. Mú ìṣepọ̀ ServerPilot ṣiṣẹ́
5. Tẹ "Save Changes"

## Bí Ó Ṣe Ń Ṣiṣẹ́

### Domain Syncing

Nígbà tí a bá map domain kan nínú Ultimate Multisite:

1. Ìṣepọ̀ náà gba àtòkọ domains tó wà lọ́wọ́lọ́wọ́ láti ServerPilot
2. Ó ṣàfikún domain tuntun náà sí àtòkọ náà (pẹ̀lú ẹ̀dà www bí ó bá yẹ)
3. Ó fi àtòkọ tí a ti ṣe imúdójúìwọ̀n ránṣẹ́ sí ServerPilot nípasẹ̀ API
4. ServerPilot ṣe imúdójúìwọ̀n àtòkọ domain fún application rẹ

### Ìṣàkóso SSL Certificate

Lẹ́yìn tí domains bá ti sync:

1. Ìṣepọ̀ náà máa ń mú AutoSSL ṣiṣẹ́ fún application rẹ láìọwọ́ṣe
2. ServerPilot ń bójú tó fífúnni àti fífi SSL certificate sílẹ̀ ní lílo Let's Encrypt
3. ServerPilot tún ń bójú tó ìtúnṣe SSL certificates láìọwọ́ṣe

## Ìjẹ́rìísí SSL Certificate

A ti ṣètò ìṣepọ̀ náà láti pọ̀ sí i iye ìgbìyànjú ìjẹ́rìísí SSL certificate fún ServerPilot, nítorí ó lè gba àkókò díẹ̀ fún ServerPilot láti fúnni ní SSL certificates kí ó sì fi wọ́n sílẹ̀. Nípa àiyẹ̀wò, yóò gbìyànjú dé ìgbà 5, ṣùgbọ́n a lè ṣàtúnṣe èyí ní lílo filters.

## Ìṣàwárí Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API
- Jẹ́rìí pé Client ID àti API Key rẹ tọ́
- Ṣàyẹ̀wò pé App ID rẹ tọ́
- Rí dájú pé ServerPilot account rẹ ní àwọn permissions tí ó yẹ

### Àwọn Ìṣòro SSL Certificate
- ServerPilot nílò kí domains ní DNS records tó pé tí ń tọ́ka sí server rẹ kí ó tó fúnni ní SSL certificates
- Bí SSL certificates kò bá ń jẹ́ fífúnni, ṣàyẹ̀wò pé domains rẹ ń tọ́ka dáadáa sí IP address server rẹ
- Ó lè gba àkókò díẹ̀ fún ServerPilot láti fúnni ní SSL certificates kí ó sì fi wọ́n sílẹ̀ (nígbà púpọ̀ 5-15 ìṣẹ́jú)

### Domain Kò Fi Kún Un
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe èyíkéyìí
- Jẹ́rìí pé domain náà kò tíì jẹ́ fífikún sí ServerPilot tẹ́lẹ̀
- Rí dájú pé ServerPilot plan rẹ ṣe àtìlẹ́yìn fún iye domains tí o ń ṣàfikún

### Yíyọ Domain Kúrò
- Lọ́wọ́lọ́wọ́, ServerPilot API kò pèsè ọ̀nà láti yọ domains kọ̀ọ̀kan kúrò
- Nígbà tí a bá yọ domain mapping kan kúrò nínú Ultimate Multisite, ìṣepọ̀ náà yóò ṣe imúdójúìwọ̀n àtòkọ domain nínú ServerPilot láti yọ domain tí a yọ kúrò náà sílẹ̀
