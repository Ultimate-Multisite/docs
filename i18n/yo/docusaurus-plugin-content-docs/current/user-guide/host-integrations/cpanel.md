---
title: Ìṣepọ̀ cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Ìṣepọ̀ cPanel

## Àkópọ̀
cPanel jẹ́ ọ̀kan lára àwọn paneli ìṣàkóso ìgbàlejò wẹ́ẹ̀bù tí ó gbajúmọ̀ jùlọ tí ọ̀pọ̀ àwọn olupèsè ìgbàlejò tí a pín àti tí a yà sọ́tọ̀ ń lò. Ìṣepọ̀ yìí ń jẹ́ kí mímú domain ṣiṣẹ́pọ̀ láìfọwọ́ṣeé ṣeé ṣe láàárín Ultimate Multisite àti cPanel, tí ó ń jẹ́ kí o lè fi àwọn alias domain àti subdomain kún Account cPanel rẹ láìfọwọ́ṣe.

## Àwọn Ẹ̀yà
- Ṣíṣe addon domain láìfọwọ́ṣe nínú cPanel
- Ṣíṣe subdomain láìfọwọ́ṣe nínú cPanel (fún àwọn fifi multisite subdomain sori ẹrọ)
- Yíyọ domain kúrò nígbà tí a bá pa àwọn mapping rẹ́

## Àwọn Ohun Tí A Nílò
Àwọn constant wọ̀nyí gbọ́dọ̀ jẹ́ ṣíṣe àtọ́ka nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ní àṣàyàn, o tún lè ṣe àtọ́ka:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò

### 1. Gba Àwọn Ẹ̀rí cPanel Rẹ

1. Gba username àti password cPanel rẹ láti ọ̀dọ̀ olupèsè ìgbàlejò rẹ
2. Mọ host cPanel rẹ (nígbà púpọ̀ `cpanel.yourdomain.com` tàbí `yourdomain.com:2083`)

### 2. Fi Àwọn Constant Kún wp-config.php

Fi àwọn constant wọ̀nyí kún fáìlì `wp-config.php` rẹ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ní àṣàyàn, o lè ṣàtúnṣe port àti directory root:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Mú Ìṣepọ̀ Náà Ṣiṣẹ́

1. Nínú admin WordPress rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí taabu "Domain Mapping"
3. Yi lọ sísàlẹ̀ sí "Host Integrations"
4. Mú ìṣepọ̀ cPanel ṣiṣẹ́
5. Tẹ "Save Changes"

## Bí Ó Ṣe Ń Ṣiṣẹ́

### Àwọn Addon Domains

Nígbà tí a bá map domain kan nínú Ultimate Multisite:

1. Ìṣepọ̀ náà fi ìbéèrè ránṣẹ́ sí API cPanel láti fi domain náà kún un gẹ́gẹ́ bí addon domain
2. A ṣètò domain náà kí ó tọ́ka sí directory root rẹ
3. Nígbà tí a bá yọ mapping domain kan kúrò, ìṣepọ̀ náà yóò yọ addon domain náà kúrò nínú cPanel

### Àwọn Subdomains

Fún àwọn fifi multisite subdomain sori ẹrọ, nígbà tí a bá ṣẹ̀dá site tuntun:

1. Ìṣepọ̀ náà yọ apá subdomain kúrò nínú domain kíkún
2. Ó fi ìbéèrè ránṣẹ́ sí API cPanel láti fi subdomain náà kún un
3. A ṣètò subdomain náà kí ó tọ́ka sí directory root rẹ

## Àwọn Àkíyèsí Pàtàkì

- Ìṣepọ̀ náà ń lo API2 cPanel láti bá Account cPanel rẹ sọ̀rọ̀
- Account cPanel rẹ gbọ́dọ̀ ní àwọn ìyọ̀nda láti fi àwọn addon domain àti subdomain kún un
- Díẹ̀ lára àwọn olupèsè ìgbàlejò lè fi ààlà sí iye àwọn addon domain tàbí subdomain tí o lè ṣẹ̀dá
- Ìṣepọ̀ náà kò ṣàkóso ìṣètò DNS; o ṣì nílò láti tọ́ka àwọn domain rẹ sí IP address server rẹ

## Ìṣàwárí àti Ìtọ́jú Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API
- Ṣàyẹ̀wò pé username àti password cPanel rẹ tọ́
- Ṣàyẹ̀wò pé host cPanel rẹ tọ́ àti pé ó ṣeé wọlé sí
- Rí i dájú pé Account cPanel rẹ ní àwọn ìyọ̀nda tó yẹ
- Gbìyànjú lílo URL kíkún fún host náà (fún àpẹẹrẹ, `https://cpanel.yourdomain.com`)

### A Kò Fi Domain Kún Un
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe èyíkéyìí
- Ṣàyẹ̀wò pé domain náà kò tíì wà nínú cPanel tẹ́lẹ̀
- Rí i dájú pé Account cPanel rẹ kò tíì dé ààlà rẹ fún àwọn addon domain tàbí subdomain

### Àwọn Ìṣòro Certificate SSL
- Ìṣepọ̀ náà kò ṣàkóso fífi certificate SSL jáde
- Ìwọ yóò nílò láti lo àwọn irinṣẹ́ SSL/TLS cPanel tàbí ẹ̀yà AutoSSL láti fi àwọn certificate SSL jáde fún àwọn domain rẹ
- Ní ọ̀nà míì, o lè lo iṣẹ́ kan bíi Let's Encrypt pẹ̀lú AutoSSL cPanel
