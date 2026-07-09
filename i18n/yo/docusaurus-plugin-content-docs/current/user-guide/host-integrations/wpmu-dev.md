---
title: Ìṣepọ̀ WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Ìṣàkóso WPMU DEV

## Àkótán
WPMU DEV jẹ́ pẹpẹ WordPress tó péye tí ó ń pèsè hosting, plugins, àti àwọn iṣẹ́ fún àwọn site WordPress. Ìṣàkóso yìí ń jẹ́ kí ìmúdọ́gba domain aládàáṣiṣẹ́ àti ìṣàkóso SSL certificate ṣiṣẹ́ láàárín Ultimate Multisite àti WPMU DEV hosting.

## Àwọn Ẹ̀yà
- Ìmúdọ́gba domain aládàáṣiṣẹ́
- Ìṣàkóso SSL certificate
- Àwọn ìgbìyànjú ìmúdájú SSL certificate tí a gbooro sí i

## Àwọn Ohun Tí A Nílò
Ìṣàkóso náà máa ń rí i laifọwọ́yi bóyá o ń ṣe hosting lórí WPMU DEV, ó sì ń lo API tí ó wà nínú rẹ̀. Kò sí ìṣètò àfikún tí a nílò bí o bá ń ṣe hosting lórí WPMU DEV.

Ìṣàkóso náà ń ṣàyẹ̀wò wíwà constant `WPMUDEV_HOSTING_SITE_ID`, èyí tí a máa ń ṣàlàyé laifọwọ́yi nígbà tí a bá ń ṣe hosting lórí WPMU DEV.

## Àwọn Ìtọ́nisọ́nà Ìṣètò

### 1. Ṣàyẹ̀wò WPMU DEV Hosting

Bí o bá ń ṣe hosting lórí WPMU DEV, àwọn constant tó yẹ kí ó ti ṣàlàyé tẹ́lẹ̀. Ṣàyẹ̀wò pé:

1. Constant `WPMUDEV_HOSTING_SITE_ID` ti ṣàlàyé nínú àyíká rẹ
2. O ní membership WPMU DEV tó ń ṣiṣẹ́ pẹ̀lú ìwọlé API

### 2. Mu Ìṣàkóso Náà Ṣiṣẹ́

1. Nínú admin WordPress rẹ, lọ sí Ultimate Multisite > Settings
2. Lọ sí tab "Ìtọ́ka Domain"
3. Yí lọ sílẹ̀ dé "Àwọn Ìṣàkóso Host"
4. Mu ìṣàkóso WPMU DEV ṣiṣẹ́
5. Tẹ "Fi Àwọn Àyípadà Pamọ́"

## Bí Ó Ṣe Ń Ṣiṣẹ́

### Ìmúdọ́gba Domain

Nígbà tí a bá tọ́ka domain kan nínú Ultimate Multisite:

1. Ìṣàkóso náà ń lo WPMU DEV API láti fi domain náà kún account hosting rẹ
2. Ó tún máa ń fi ẹ̀dà www ti domain náà kún un laifọwọ́yi
3. WPMU DEV ń bójú tó ìṣètò domain àti fífúnni ní SSL certificate

### Ìṣàkóso SSL Certificate

A ti ṣètò ìṣàkóso náà láti pọ̀ sí iye àwọn ìgbìyànjú ìmúdájú SSL certificate fún WPMU DEV hosting, nítorí ó lè gba díẹ̀ lára àkókò kí a tó fúnni ní SSL certificates kí a sì fi wọ́n sílẹ̀. Nípa aiyipada, yóò gbìyànjú títí dé ìgbà 10 fún ìmúdájú SSL certificate, ní ìfiwéra pẹ̀lú ìgbìyànjú 5 àgbékalẹ̀.

## Àwọn Àkíyèsí Pàtàkì

### Yíyọ Domain Kúrò

Lọ́wọ́lọ́wọ́, WPMU DEV API kò pèsè ọ̀nà láti yọ domains kúrò. Nígbà tí a bá yọ ìtọ́ka domain kan kúrò nínú Ultimate Multisite, domain náà yóò wà nínú account WPMU DEV hosting rẹ. Iwọ yóò nílò láti yọ ọ́ kúrò lọ́nà ọwọ́ láti dashboard WPMU DEV hosting bí ó bá ṣe pàtàkì.

### Ìjẹ́rìísí API

Ìṣàkóso náà ń lo bọ́tìnì WPMU DEV API tí a fi pamọ́ sínú database WordPress rẹ gẹ́gẹ́ bí option `wpmudev_apikey`. Èyí ni a máa ń ṣètò laifọwọ́yi nígbà tí o bá so site rẹ pọ̀ mọ́ WPMU DEV.

## Ìtọ́jú Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API
- Ṣàyẹ̀wò pé site rẹ ti sopọ̀ dáadáa mọ́ WPMU DEV
- Ṣàyẹ̀wò pé option `wpmudev_apikey` ti ṣètò nínú database WordPress rẹ
- Rí i dájú pé membership WPMU DEV rẹ ń ṣiṣẹ́

### Àwọn Ìṣòro SSL Certificate
- WPMU DEV lè gba díẹ̀ lára àkókò láti fúnni ní SSL certificates (nígbà púpọ̀ ìṣẹ́jú 5-15)
- A ti ṣètò ìṣàkóso náà láti ṣàyẹ̀wò títí dé ìgbà 10 fún SSL certificates
- Bí SSL certificates kò bá tíì jẹ́ fífúnni lẹ́yìn ọ̀pọ̀ ìgbìyànjú, kan sí atilẹ́yìn WPMU DEV

### A Kò Fi Domain Kún Un
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe èyíkéyìí
- Ṣàyẹ̀wò pé domain náà kò tíì ti jẹ́ fífikún sí WPMU DEV
- Rí i dájú pé plan WPMU DEV hosting rẹ ṣe àtìlẹ́yìn fún iye domains tí o ń fi kún un
