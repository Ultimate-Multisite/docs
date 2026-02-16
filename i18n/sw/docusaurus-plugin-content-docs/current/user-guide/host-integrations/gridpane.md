---
title: Muunganisho wa GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Kuunganisha GridPane

## Muhtasari
GridPane ni paneli maalum ya kudhibiti huduma za kuhost WordPress iliyoundwa kwa wataalamu wakubwa wa WordPress. Kuunganisha huku kunawezesha usawazishaji wa kikoa kiotomatiki na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na GridPane.

## Vipengele
- Usawazishaji wa kikoa kiotomatiki
- Usimamizi wa cheti cha SSL
- Usanidi wa kiotomatiki wa SUNRISE constant

## Mahitaji
Lazima ufafanue constants zifuatazo katika faili yako ya `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Maelekezo ya Kusanidi

### 1. Pata Vibali Vyako vya API vya GridPane

1. Ingia kwenye dashibodi yako ya GridPane
2. Nenda "Settings" > "API"
3. Tengeneza funguo ya API ikiwa bado huna
4. Nakili funguo yako ya API

### 2. Pata Vitambulisho vya Seva na Tovuti Yako

1. Katika dashibodi yako ya GridPane, nenda "Servers"
2. Chagua seva ambayo tovuti yako ya WordPress multisite inahostiwa
3. Andika Server ID (inaonekana kwenye URL au kwenye ukurasa wa maelezo ya seva)
4. Nenda "Sites" na uchague tovuti yako ya WordPress
5. Andika Site ID (inaonekana kwenye URL au kwenye ukurasa wa maelezo ya tovuti)

### 3. Ongeza Constants kwenye wp-config.php

Ongeza constants zifuatazo kwenye faili yako ya `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Wezesha Muunganisho

1. Katika eneo la msimamizi wa WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Wezesha muunganisho wa GridPane
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

Kikoa kinapounganishwa katika Ultimate Multisite:

1. Muunganisho unatuma ombi kwa API ya GridPane kuongeza kikoa kwenye tovuti yako
2. GridPane inashughulikia kiotomatiki utoaji wa cheti cha SSL
3. Wakati uunganishaji wa kikoa unaondolewa, muunganisho utaondoa kikoa kutoka GridPane

Muunganisho pia unashughulikia kiotomatiki SUNRISE constant katika faili yako ya wp-config.php, ambayo inahitajika ili uunganishaji wa kikoa ufanye kazi vizuri.

## Usimamizi wa SUNRISE Constant

Kipengele kimoja cha kipekee cha muunganisho wa GridPane ni kwamba kinarudisha kiotomatiki SUNRISE constant katika wp-config.php ili kuzuia migongano na mfumo wa GridPane wa kuunganisha vikoa. Hii inahakikisha kuwa mifumo yote miwili inaweza kufanya kazi pamoja bila matatizo.

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Hakikisha kuwa funguo yako ya API ni sahihi
- Angalia kuwa vitambulisho vya seva na tovuti yako ni sahihi
- Hakikisha kuwa akaunti yako ya GridPane ina ruhusa zinazohitajika

### Matatizo ya Cheti cha SSL
- GridPane inaweza kuchukua muda kutoa vyeti vya SSL
- Hakikisha kuwa vikoa vyako vinaelekeza vizuri kwenye anwani ya IP ya seva yako
- Angalia mipangilio ya SSL ya GridPane kwa tovuti yako

### Kikoa Hakijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Hakikisha kuwa kikoa hakijaongezwa tayari kwenye GridPane
- Hakikisha kuwa rekodi za DNS za kikoa chako zimesanidiwa vizuri
