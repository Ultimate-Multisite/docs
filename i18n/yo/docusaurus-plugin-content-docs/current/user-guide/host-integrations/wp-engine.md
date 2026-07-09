---
title: Ìṣepọ̀ WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Ìṣepọ̀ WP Engine

## Àkótán
WP Engine jẹ́ pẹpẹ ìgbàlejò WordPress tí a ń ṣàkóso, tó ní ìpele gíga, tó ń pèsè iṣẹ́ tó dára jù, ààbò, àti agbára láti gbooro fún àwọn ojúlé WordPress. Ìṣepọ̀ yìí ń jẹ́ kí ìmúdọ́gba domeni láìfọwọ́ṣe wà láàárín Ultimate Multisite àti WP Engine.

## Àwọn Ẹ̀yà
- Ìmúdọ́gba domeni láìfọwọ́ṣe
- Àtìlẹ́yìn subdomain fún àwọn fifi sori ẹrọ multisite
- Ìṣepọ̀ aláìsí ìdènà pẹ̀lú àwọn eto WP Engine tó wà tẹ́lẹ̀

## Àwọn Ohun Tí A Nílò
Ìṣepọ̀ náà máa ń ṣàwárí láìfọwọ́ṣe bóyá o ń gbàlejò lórí WP Engine, ó sì máa ń lo WP Engine API tó wà nínú rẹ̀. Kò sí àtòjọ míì tí a nílò bí àfikún WP Engine bá ṣiṣẹ́, tí a sì ti ṣàtòjọ rẹ̀ dáadáa.

Síbẹ̀, bí o bá nílò láti ṣàtòjọ ìṣepọ̀ náà pẹ̀lú ọwọ́, o lè ṣàlàyé ọ̀kan nínú àwọn constant wọ̀nyí nínú fáìlì `wp-config.php` rẹ:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò

### 1. Ṣàyẹ̀wò Àfikún WP Engine

Bí o bá ń gbàlejò lórí WP Engine, àfikún WP Engine yẹ kí ó ti fi sori ẹrọ, kí ó sì ti ṣiṣẹ́. Ṣàyẹ̀wò pé:

1. Àfikún WP Engine ń ṣiṣẹ́
2. Fáìlì `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` wà

### 2. Mú Ìṣepọ̀ Náà Ṣiṣẹ́

1. Nínú alákóso WordPress rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí taabu "Ìtọ́ka Domeni"
3. Yí lọ sísàlẹ̀ sí "Àwọn Ìṣepọ̀ Olùgbàlejò"
4. Mú ìṣepọ̀ WP Engine ṣiṣẹ́
5. Tẹ "Fi Àwọn Àyípadà Pamọ́"

## Bí Ó Ṣe Ń Ṣiṣẹ́

### Ìmúdọ́gba Domeni

Nígbà tí a bá tọ́ka domeni kan nínú Ultimate Multisite:

1. Ìṣepọ̀ náà ń lo WP Engine API láti fi domeni náà kún fifi sori ẹrọ WP Engine rẹ
2. WP Engine ń ṣàkóso àtòjọ domeni àti fífi ìwé-ẹ̀rí SSL jáde
3. Nígbà tí a bá yọ ìtọ́ka domeni kan kúrò, ìṣepọ̀ náà yóò yọ domeni náà kúrò nínú WP Engine

### Àtìlẹ́yìn Subdomain

Fún àwọn fifi sori ẹrọ multisite subdomain:

1. Ìṣepọ̀ náà ń fi subdomain kọ̀ọ̀kan kún WP Engine nígbà tí a bá dá ojúlé tuntun kan sílẹ̀
2. WP Engine ń ṣàkóso àtòjọ subdomain náà
3. Nígbà tí a bá pa ojúlé kan rẹ́, ìṣepọ̀ náà yóò yọ subdomain náà kúrò nínú WP Engine

## Àwọn Àkíyèsí Pàtàkì

### Àwọn Domeni Wildcard

Fún àwọn fifi sori ẹrọ multisite subdomain, a dábàá pé kí o kàn sí àtìlẹ́yìn WP Engine láti béèrè àtòjọ domeni wildcard kan. Èyí ń jẹ́ kí gbogbo àwọn subdomain ṣiṣẹ́ láìfọwọ́ṣe láìní láti fi ọkọọkan wọn kún un lọ́tọ̀ọ̀tọ̀.

### Àwọn Ìwé-ẹ̀rí SSL

WP Engine máa ń ṣàkóso fífi ìwé-ẹ̀rí SSL jáde àti ìsọ̀tunṣe rẹ̀ láìfọwọ́ṣe fún gbogbo àwọn domeni tí a fi kún un nípasẹ̀ ìṣepọ̀ yìí. Kò sí àtòjọ míì tí a nílò.

## Yíyanjú Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API
- Ṣàyẹ̀wò pé àfikún WP Engine ń ṣiṣẹ́, àti pé a ti ṣàtòjọ rẹ̀ dáadáa
- Bí o bá ti ṣàlàyé kọ́kọ́rọ́ API pẹ̀lú ọwọ́, ṣàyẹ̀wò pé ó tọ́
- Kàn sí àtìlẹ́yìn WP Engine bí o bá ní ìṣòro pẹ̀lú API

### A Kò Fi Domeni Kún Un
- Ṣàyẹ̀wò àwọn àkọsílẹ̀ Ultimate Multisite fún àwọn ìfiránṣẹ́ àṣìṣe
- Ṣàyẹ̀wò pé a kò tíì ti fi domeni náà kún WP Engine tẹ́lẹ̀
- Rí i dájú pé plan WP Engine rẹ ń ṣàtìlẹ́yìn fún iye àwọn domeni tí o ń fi kún un

### Àwọn Ìṣòro Subdomain
- Bí àwọn subdomain kò bá ṣiṣẹ́, kàn sí àtìlẹ́yìn WP Engine láti béèrè àtòjọ domeni wildcard kan
- Ṣàyẹ̀wò pé àwọn ètò DNS rẹ ni a ti ṣàtòjọ dáadáa fún domeni àkọ́kọ́ àti àwọn subdomain
