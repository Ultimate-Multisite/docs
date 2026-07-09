---
title: Ìṣepọ̀ GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Ìṣepọ̀ GridPane {#gridpane-integration}

## Àkótán {#overview}
GridPane jẹ́ paneli ìṣàkóso ìgbalejo WordPress amọ̀ja tí a kọ́ fún àwọn akosemose WordPress tó ṣe pàtàkì. Ìṣepọ̀ yìí jẹ́ kí ìmúṣiṣẹpọ̀ domain laifọwọyi àti ìṣàkóso ìjẹ́rìí SSL lè ṣẹlẹ̀ láàárín Ultimate Multisite àti GridPane.

## Àwọn Ẹ̀yà {#features}
- Ìmúṣiṣẹpọ̀ domain laifọwọyi
- Ìṣàkóso ìjẹ́rìí SSL
- Ìṣètò laifọwọyi fún constant SUNRISE

## Àwọn Ohun Tó Nílò {#requirements}
Àwọn constant wọ̀nyí gbọ́dọ̀ jẹ́ ṣíṣe àlàyé nínú fáìlì `wp-config.php` rẹ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Àwọn Ìtọ́nisọ́nà Ìṣètò {#setup-instructions}

### 1. Gba Àwọn Ẹ̀rí API GridPane Rẹ {#1-get-your-gridpane-api-credentials}

1. Wọlé sí GridPane Dashboard rẹ
2. Lọ sí "Àwọn Ètò" > "API"
3. Ṣẹ̀dá API key bí o kò bá tíì ní ọ̀kan
4. Ṣàdàkọ API key rẹ

### 2. Gba Àwọn ID Server àti Aaye Rẹ {#2-get-your-server-and-site-ids}

1. Nínú GridPane Dashboard rẹ, lọ sí "Àwọn Server"
2. Yan server tí a ti gbalejo WordPress multisite rẹ sí
3. Ṣàkíyèsí Server ID (tó hàn nínú URL tàbí lórí ojú-ewé àlàyé server)
4. Lọ sí "Àwọn Aaye" kí o sì yan aaye WordPress rẹ
5. Ṣàkíyèsí Site ID (tó hàn nínú URL tàbí lórí ojú-ewé àlàyé aaye)

### 3. Ṣàfikún Àwọn Constant sí wp-config.php {#3-add-constants-to-wp-configphp}

Ṣàfikún àwọn constant wọ̀nyí sí fáìlì `wp-config.php` rẹ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Mú Ìṣepọ̀ Náà Ṣiṣẹ́ {#4-enable-the-integration}

1. Nínú abojuto WordPress rẹ, lọ sí Ultimate Multisite > Àwọn Ètò
2. Lọ sí taabu "Ìtọ́kasí Domain"
3. Yí lọ sísàlẹ̀ sí "Àwọn Ìṣepọ̀ Gbalejo"
4. Mú ìṣepọ̀ GridPane ṣiṣẹ́
5. Tẹ "Fi Àwọn Ìyípadà Pamọ́"

## Bí Ó Ṣe Ń Ṣiṣẹ́ {#how-it-works}

Nígbà tí a bá tọ́ka domain kan nínú Ultimate Multisite:

1. Ìṣepọ̀ náà fi ìbéèrè ránṣẹ́ sí API GridPane láti ṣàfikún domain náà sí aaye rẹ
2. GridPane máa ń bójú tó pípèsè ìjẹ́rìí SSL laifọwọyi
3. Nígbà tí a bá yọ ìtọ́kasí domain kan kúrò, ìṣepọ̀ náà yóò yọ domain náà kúrò ní GridPane

Ìṣepọ̀ náà tún máa ń bójú tó constant SUNRISE laifọwọyi nínú fáìlì wp-config.php rẹ, èyí tí ó ṣe pàtàkì kí ìtọ́kasí domain lè ṣiṣẹ́ dáadáa.

## Ìṣàkóso Constant SUNRISE {#sunrise-constant-management}

Ẹ̀yà aláìlẹ́gbẹ́ kan ti ìṣepọ̀ GridPane ni pé ó máa ń dá constant SUNRISE padà laifọwọyi nínú wp-config.php láti dènà ìjà pẹ̀lú eto ìtọ́kasí domain ti GridPane fúnra rẹ. Èyí ń rí i dájú pé àwọn eto méjèèjì lè ṣiṣẹ́ pọ̀ láìsí ìṣòro.

## Ìtọ́jú Ìṣòro {#troubleshooting}

### Àwọn Ìṣòro Ìsopọ̀ API {#api-connection-issues}
- Ṣàyẹ̀wò pé API key rẹ tọ́
- Ṣàyẹ̀wò pé àwọn ID server àti aaye rẹ tọ́
- Rí i dájú pé Account GridPane rẹ ní àwọn ìyọ̀nda tó ṣe pàtàkì

### Àwọn Ìṣòro Ìjẹ́rìí SSL {#ssl-certificate-issues}
- GridPane lè gba àkókò díẹ̀ láti fúnni ní àwọn ìjẹ́rìí SSL
- Ṣàyẹ̀wò pé àwọn domain rẹ ń tọ́ka dáadáa sí IP address server rẹ
- Ṣàyẹ̀wò àwọn ètò SSL GridPane fún aaye rẹ

### A Kò Ṣàfikún Domain {#domain-not-added}
- Ṣàyẹ̀wò àwọn log Ultimate Multisite fún àwọn ìfiránṣẹ́ àṣìṣe èyíkéyìí
- Ṣàyẹ̀wò pé a kò tíì ṣàfikún domain náà sí GridPane tẹ́lẹ̀
- Rí i dájú pé àwọn àkọsílẹ̀ DNS domain rẹ jẹ́ ṣíṣètò dáadáa
