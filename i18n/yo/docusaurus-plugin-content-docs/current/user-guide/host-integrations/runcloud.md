---
title: Ìṣepọ̀ RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Ìṣepọ̀ RunCloud

## Àkótán
RunCloud jẹ́ pẹpẹ ìṣàkóso server tó dá lórí cloud tí ó jẹ́ kí o lè fi àwọn ìṣàfilọ́lẹ̀ web ránṣẹ́ àti ṣàkóso wọn rọrùn lórí àwọn server cloud tirẹ. Ìṣepọ̀ yìí ń jẹ́ kí ìmúdọ́gba domain laifọwọyi àti ìṣàkóso SSL certificate wà láàárín Ultimate Multisite àti RunCloud.

## Àwọn Ẹ̀ya
- Ìmúdọ́gba domain laifọwọyi
- Ìṣàkóso SSL certificate
- Yíyọ domain kúrò nígbà tí a bá pa àwọn mapping rẹ́

## Àwọn Ìbéèrè
A gbọ́dọ̀ ṣàlàyé àwọn constant wọ̀nyí nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Ìtọ́nisọ́nà Ìṣètò

### 1. Gba Àwọn RunCloud API Credentials Rẹ

1. Wọlé sí RunCloud dashboard rẹ
2. Lọ sí "User Profile" (tẹ àwòrán profáìlì rẹ ní igun òkè-ọtún)
3. Yan "API" láti inú menu
4. Tẹ "Generate API Key" bí o kò bá tíì ní ọ̀kan
5. Da API Key àti API Secret rẹ kọ

### 2. Gba Server àti App IDs Rẹ

1. Nínú RunCloud dashboard rẹ, lọ sí "Servers"
2. Yan server tí WordPress multisite rẹ wà lórí rẹ
3. Server ID hàn nínú URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Lọ sí "Web Applications" kí o sì yan ìṣàfilọ́lẹ̀ WordPress rẹ
5. App ID hàn nínú URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ṣàfikún Àwọn Constant sí wp-config.php

Ṣàfikún àwọn constant wọ̀nyí sí fáìlì `wp-config.php` rẹ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Mu Ìṣepọ̀ Náà Ṣíṣẹ́

1. Nínú admin WordPress rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí taabu "Domain Mapping"
3. Rìn sílẹ̀ dé "Host Integrations"
4. Mu ìṣepọ̀ RunCloud ṣiṣẹ́
5. Tẹ "Save Changes"

## Bí Ó Ṣe Ń Ṣiṣẹ́

Nígbà tí a bá ṣe mapping domain kan nínú Ultimate Multisite:

1. Ìṣepọ̀ náà fi ìbéèrè ránṣẹ́ sí API RunCloud láti ṣàfikún domain náà sí ìṣàfilọ́lẹ̀ rẹ
2. Bí a bá ṣàfikún domain náà ní aṣeyọrí, ìṣepọ̀ náà yóò tún redeploy àwọn SSL certificate
3. Nígbà tí a bá yọ mapping domain kúrò, ìṣepọ̀ náà yóò yọ domain náà kúrò ní RunCloud

Fún àwọn fífi sori ẹrọ subdomain, ìṣepọ̀ náà yóò ṣàkóso dídá àwọn subdomain sílẹ̀ ní RunCloud laifọwọyi nígbà tí a bá ṣàfikún àwọn site tuntun sí network rẹ.

## Ìtọ́jú Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API
- Ṣàyẹ̀wò pé àwọn API credentials rẹ tọ́
- Ṣàyẹ̀wò pé server àti app IDs rẹ tọ́
- Rí dájú pé Account RunCloud rẹ ní àwọn ìyọ̀nda tó yẹ

### Àwọn Ìṣòro SSL Certificate
- RunCloud lè gba àkókò díẹ̀ láti ṣe ìfúnni ní àwọn SSL certificate
- Ṣàyẹ̀wò pé àwọn domain rẹ ń tọ́ka dáadáa sí IP address server rẹ
- Ṣàyẹ̀wò àwọn settings SSL RunCloud fún ìṣàfilọ́lẹ̀ rẹ

### A Kò Ṣàfikún Domain
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún ìfiránṣẹ́ aṣìṣe èyíkéyìí
- Ṣàyẹ̀wò pé domain náà kò tíì wà ní RunCloud tẹ́lẹ̀
- Rí dájú pé plan RunCloud rẹ ṣe àtìlẹ́yìn fún ọ̀pọ̀ domain
