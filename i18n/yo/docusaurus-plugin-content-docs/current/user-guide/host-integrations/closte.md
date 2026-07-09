---
title: Ìṣepọ̀ Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Ìṣepọ̀ Closte

## Àkótán
Closte jẹ́ pẹpẹ hosting WordPress tí a ń ṣàkóso, tí a kọ́ lórí amáyédẹrùn Google Cloud. Ìṣepọ̀ yìí ń jẹ́ kí domain syncing àti ìṣàkóso SSL certificate láàárín Ultimate Multisite àti Closte ṣẹlẹ̀ láìfọwọ́sọ́wọ́.

## Àwọn Ẹ̀yà
- Domain syncing láìfọwọ́sọ́wọ́
- Ìṣàkóso SSL certificate
- Àtìlẹ́yìn wildcard domain
- Kò sí configuration tí ó nílò bí ó bá ń ṣiṣẹ́ lórí Closte

## Àwọn Ohun Tí Ó Nílò
Constant tó tẹ̀lé yìí gbọ́dọ̀ jẹ́ títúmọ̀ nínú fáìlì `wp-config.php` rẹ bí o bá ń lo Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Constant yìí sábà máa ti jẹ́ títúmọ̀ tẹ́lẹ̀ bí o bá ń ṣe hosting lórí Closte.

## Àwọn Ìtọ́nisọ́nà Setup

### 1. Ṣàyẹ̀wò Closte API Key Rẹ

Bí o bá ń ṣe hosting lórí Closte, constant `CLOSTE_CLIENT_API_KEY` yẹ kí ó ti jẹ́ títúmọ̀ tẹ́lẹ̀ nínú fáìlì `wp-config.php` rẹ. O lè ṣàyẹ̀wò èyí nípa wíwo fáìlì `wp-config.php` rẹ.

### 2. Mú Ìṣepọ̀ Náà Ṣiṣẹ́

1. Nínú admin WordPress rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí tab "Domain Mapping"
3. Yi lọ sísàlẹ̀ sí "Host Integrations"
4. Mú ìṣepọ̀ Closte ṣiṣẹ́
5. Tẹ "Save Changes"

## Bí Ó Ṣe Ń Ṣiṣẹ́

Nígbà tí domain bá jẹ́ mapped nínú Ultimate Multisite:

1. Ìṣepọ̀ náà ń fi ìbéèrè ránṣẹ́ sí API Closte láti fi domain náà kún application rẹ
2. Closte máa ń bójú tó pípèsè SSL certificate láìfọwọ́sọ́wọ́
3. Nígbà tí domain mapping bá jẹ́ yíyọ kúrò, ìṣepọ̀ náà yóò yọ domain náà kúrò ní Closte

Ìṣepọ̀ náà tún ń ṣiṣẹ́ pẹ̀lú ètò àárín àsìkò ìṣàyẹ̀wò DNS nínú Ultimate Multisite, tí ó ń jẹ́ kí o ṣètò bí eto náà ṣe máa ń ṣàyẹ̀wò DNS propagation àti fífúnni ní SSL certificate lọ́pọ̀ ìgbà.

## Ṣíṣe Domain Record

Ìṣepọ̀ yìí ń rí dájú pé nígbà tí a bá dá site kan sílẹ̀ tàbí ṣe ẹ̀dà rẹ̀, domain record kan ni a dá sílẹ̀ láìfọwọ́sọ́wọ́. Èyí ṣe pàtàkì gan-an fún ìṣepọ̀ Closte, nítorí ṣíṣe domain record ló ń fa Closte API láti dá domain àti SSL certificate sílẹ̀.

## Yíyanjú Ìṣòro

### Àwọn Ìṣòro Ìbásopọ̀ API
- Ṣàyẹ̀wò pé Closte API key rẹ tọ́
- Rí dájú pé account Closte rẹ ní àwọn ìyọ̀nda tó ṣe pàtàkì

### Àwọn Ìṣòro SSL Certificate
- Closte lè gba díẹ̀ lára àsìkò láti fúnni ní àwọn SSL certificate (nígbà púpọ̀ 5-10 ìṣẹ́jú)
- Ṣàyẹ̀wò pé àwọn domain rẹ ń tọ́ka dáadáa sí IP address server Closte rẹ
- Ṣàyẹ̀wò àwọn DNS record fún domain rẹ láti rí dájú pé wọ́n ṣètò wọn dáadáa

### A Kò Fi Domain Kún Un
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe kankan
- Ṣàyẹ̀wò pé a kò tíì ti fi domain náà kún Closte tẹ́lẹ̀
- Rí dájú pé àwọn DNS record domain rẹ ni a ṣètò dáadáa

### Àárín Àsìkò Ìṣàyẹ̀wò DNS
- Bí àwọn SSL certificate bá ń pẹ́ jù láti jẹ́ fífúnni, o lè ṣàtúnṣe àárín àsìkò ìṣàyẹ̀wò DNS nínú àwọn ètò Domain Mapping
- Àárín àsìkò àiyipada jẹ́ 300 ìṣẹ́jú-àáyá (5 ìṣẹ́jú), ṣùgbọ́n o lè ṣètò rẹ̀ sí kékeré bí 10 ìṣẹ́jú-àáyá fún ìṣàyẹ̀wò tó yára jù nígbà testing
