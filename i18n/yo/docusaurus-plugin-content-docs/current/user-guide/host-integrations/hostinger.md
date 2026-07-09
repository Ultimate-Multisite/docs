---
title: Ìṣepọ̀ Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Ìṣepọ̀ Hostinger (hPanel)

## Àkótán

Hostinger jẹ́ olùpèsè ìgbàlejò wẹ́ẹ̀bù tó gbajúmọ̀ pẹ̀lú pánẹ́ẹ̀lì ìṣàkóso òde-òní tí a ń pè ní hPanel. Ìṣepọ̀ Ultimate Multisite Hostinger ń jẹ́ kí ìmúṣẹ́pọ̀ orúkọ ìkápá láàrín Ultimate Multisite àti hPanel ti Hostinger ṣẹlẹ̀ láìfọwọ́ṣọwọ́, kí o lè ṣàkóso àwọn ìbámu orúkọ ìkápá àti àwọn abẹ́-orúkọ ìkápá tààrà láti WordPress admin rẹ.

## Àwọn Ẹ̀yà

- Ṣíṣẹ̀dá orúkọ ìkápá addon láìfọwọ́ṣọwọ́ nínú hPanel
- Ṣíṣẹ̀dá abẹ́-orúkọ ìkápá láìfọwọ́ṣọwọ́ nínú hPanel (fún àwọn ìfìdí multisite abẹ́-orúkọ ìkápá múlẹ̀)
- Yíyọ orúkọ ìkápá nígbà tí a bá pa àwọn ìbámu rẹ́
- Ìṣepọ̀ tó rọrùn pẹ̀lú API ìṣàkóso orúkọ ìkápá ti hPanel

## Àwọn Ìbéèrè

Láti lo ìṣepọ̀ Hostinger, o nílò:

1. Account Hostinger pẹ̀lú ìráyè sí hPanel
2. Àmì API láti Hostinger
3. Àwọn constants wọ̀nyí tí a ṣàlàyé nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ní àṣàyàn, o tún lè ṣàlàyé:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò

### 1. Ṣẹ̀dá Àmì API Hostinger Rẹ

1. Wọlé sí Account Hostinger rẹ kí o sì wọlé sí hPanel
2. Lọ sí **Ètò Account** → **Àwọn Àmì API**
3. Tẹ **Ṣẹ̀dá Àmì Tuntun**
4. Fún àmì rẹ ní orúkọ tó ṣàpèjúwe rẹ (fún àpẹẹrẹ, "Ultimate Multisite")
5. Yan àwọn àṣẹ tó ṣe pàtàkì:
   - Ìṣàkóso orúkọ ìkápá
   - Ìṣàkóso abẹ́-orúkọ ìkápá
6. Daakọ àmì tí a ṣẹ̀dá kí o sì tọ́jú rẹ ní ààbò

### 2. Wá Account ID Rẹ

1. Nínú hPanel, lọ sí **Ètò Account** → **Ìwífún Account**
2. Account ID rẹ ni a fi hàn lórí ojú-ìwé yìí
3. Daakọ kí o sì fi ID yìí pamọ́ fún ìgbésẹ̀ tó tẹ̀lé

### 3. Ṣàfikún Constants sí wp-config.php

Ṣàfikún àwọn constants wọ̀nyí sí fáìlì `wp-config.php` rẹ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Tí Account Hostinger rẹ bá ń lo endpoint API míì, o lè ṣàdáṣe rẹ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Mú Ìṣepọ̀ Náà Ṣiṣẹ́

1. Nínú WordPress admin rẹ, lọ sí **Ultimate Multisite > Ètò**
2. Lọ sí taabu **Ìbámu Orúkọ Ìkápá**
3. Yi lọ sísàlẹ̀ sí **Àwọn Ìṣepọ̀ Olùgbàlejò**
4. Mú ìṣepọ̀ **Hostinger (hPanel)** ṣiṣẹ́
5. Tẹ **Fi Àwọn Àyípadà Pamọ́**

## Bí Ó Ṣe Ń Ṣiṣẹ́

### Àwọn Orúkọ Ìkápá Addon

Nígbà tí o bá ṣe ìbámu orúkọ ìkápá kan nínú Ultimate Multisite:

1. Ìṣepọ̀ náà fi ìbéèrè ránṣẹ́ sí API ti Hostinger láti ṣàfikún orúkọ ìkápá náà gẹ́gẹ́ bí orúkọ ìkápá addon
2. A ṣètò orúkọ ìkápá náà láti tọ́ka sí àkójọ gbòǹgbò rẹ
3. Nígbà tí a bá yọ ìbámu orúkọ ìkápá kan, ìṣepọ̀ náà máa yọ orúkọ ìkápá addon náà kúrò nínú hPanel láìfọwọ́ṣọwọ́

### Àwọn Abẹ́-orúkọ Ìkápá

Fún àwọn ìfìdí multisite abẹ́-orúkọ ìkápá múlẹ̀, nígbà tí a bá ṣẹ̀dá site tuntun:

1. Ìṣepọ̀ náà yọ apá abẹ́-orúkọ ìkápá jáde láti inú orúkọ ìkápá kíkún
2. Ó fi ìbéèrè ránṣẹ́ sí API ti Hostinger láti ṣàfikún abẹ́-orúkọ ìkápá náà
3. A ṣètò abẹ́-orúkọ ìkápá náà láti tọ́ka sí àkójọ gbòǹgbò rẹ

## Àwọn Àkíyèsí Pàtàkì

- Ìṣepọ̀ náà ń lo REST API ti Hostinger láti bá Account rẹ sọ̀rọ̀
- Àmì API rẹ gbọ́dọ̀ ní àwọn àṣẹ tó ṣe pàtàkì fún ìṣàkóso orúkọ ìkápá àti abẹ́-orúkọ ìkápá
- Ìṣepọ̀ náà kì í bójú tó ìṣètò DNS; àwọn orúkọ ìkápá gbọ́dọ̀ ti tọ́ka sí Account Hostinger rẹ tẹ́lẹ̀
- A ń ṣe àwọn ìbéèrè API ní ààbò lórí HTTPS
- Pa àmì API rẹ mọ́ ní ààbò, má sì ṣe pín in ní gbangba láé

## Ìtọ́jú Ìṣòro

### Àwọn Ìṣòro Ìsopọ̀ API

- Ṣàyẹ̀wò pé àmì API rẹ tọ́ àti pé kò tíì parí
- Ṣàyẹ̀wò pé Account ID rẹ tọ́
- Rí i dájú pé àmì API rẹ ní àwọn àṣẹ tó ṣe pàtàkì fún ìṣàkóso orúkọ ìkápá
- Ṣàyẹ̀wò pé Account Hostinger rẹ ṣi ń ṣiṣẹ́ àti pé ó wà ní ipò tó dára

### A Kò Ṣàfikún Orúkọ Ìkápá

- Ṣàyẹ̀wò àwọn àkọsílẹ̀ Ultimate Multisite fún ìfiránṣẹ́ àṣìṣe èyíkéyìí
- Ṣàyẹ̀wò pé a kò tíì ṣàfikún orúkọ ìkápá náà sí Account Hostinger rẹ tẹ́lẹ̀
- Rí i dájú pé Account Hostinger rẹ kò tíì dé ààlà rẹ fún àwọn orúkọ ìkápá addon
- Jẹ́rìí pé orúkọ ìkápá náà tọ́ka dáadáa sí àwọn nameservers Hostinger rẹ

### Àwọn Ìṣòro Ìwé-ẹ̀rí SSL

- Ìṣepọ̀ náà kì í bójú tó fífúnni ní ìwé-ẹ̀rí SSL
- Hostinger sábà máa ń pèsè àwọn ìwé-ẹ̀rí SSL ọ̀fẹ́ nípasẹ̀ AutoSSL
- O lè ṣàkóso àwọn ìwé-ẹ̀rí SSL tààrà nínú hPanel lábẹ́ **SSL/TLS**
- Ní ọ̀nà míì, lo Let's Encrypt pẹ̀lú ẹ̀yà AutoSSL ti Hostinger

## Àtìlẹ́yìn

Fún ìrànlọ́wọ́ àfikún pẹ̀lú ìṣepọ̀ Hostinger, jọ̀wọ́ tọ́ka sí:

- [Ìwé Ìtọ́nisọ́nà API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ìwé Ìtọ́nisọ́nà Ultimate Multisite](/docs)
- [Àtìlẹ́yìn Ultimate Multisite](https://ultimatemultisite.com/support)
