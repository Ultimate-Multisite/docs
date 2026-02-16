---
title: Ujumuishaji wa Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Muunganisho wa Closte

## Muhtasari
Closte ni jukwaa la hosting ya WordPress linalodhibitiwa lililojengwa kwenye miundombinu ya Google Cloud. Muunganisho huu unawezesha usawazishaji wa kiotomatiki wa vikoa na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na Closte.

## Vipengele
- Usawazishaji wa kiotomatiki wa vikoa
- Usimamizi wa cheti cha SSL
- Msaada wa vikoa vya wildcard
- Hakuna usanidi unaohitajika ukitumia Closte

## Mahitaji
Kigezo kifuatacho lazima kiwekwe kwenye faili yako ya `wp-config.php` ukitumia Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Kigezo hiki kwa kawaida tayari kimewekwa ukihifadhi kwenye Closte.

## Maelekezo ya Usanidi

### 1. Thibitisha Ufunguo wako wa API wa Closte

Ukihifadhi kwenye Closte, kigezo cha `CLOSTE_CLIENT_API_KEY` kinapaswa kuwa tayari kimewekwa kwenye faili yako ya `wp-config.php`. Unaweza kuthibitisha hili kwa kuangalia faili yako ya `wp-config.php`.

### 2. Wezesha Muunganisho

1. Kwenye paneli ya msimamizi wa WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogea chini hadi "Host Integrations"
4. Wezesha muunganisho wa Closte
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi

Kikoa kinapounganishwa kwenye Ultimate Multisite:

1. Muunganisho unatuma ombi kwa API ya Closte kuongeza kikoa kwenye programu yako
2. Closte inashughulikia kiotomatiki utoaji wa cheti cha SSL
3. Uunganishaji wa kikoa unapoondolewa, muunganisho utaondoa kikoa kutoka Closte

Muunganisho huu pia unafanya kazi na mipangilio ya muda wa kuangalia DNS katika Ultimate Multisite, ikikuruhusu kusanidi mara ngapi mfumo unaangalia usambazaji wa DNS na utoaji wa cheti cha SSL.

## Uundaji wa Rekodi ya Kikoa

Muunganisho huu unahakikisha kwamba tovuti inapotengenezwa au kunakiliwa, rekodi ya kikoa inaundwa kiotomatiki. Hii ni muhimu hasa kwa muunganisho wa Closte, kwani uundaji wa rekodi ya kikoa unachochea API ya Closte kuunda kikoa na cheti cha SSL.

## Utatuzi wa Matatizo

### Matatizo ya Muunganisho wa API
- Thibitisha kuwa ufunguo wako wa API wa Closte ni sahihi
- Hakikisha kuwa akaunti yako ya Closte ina ruhusa zinazohitajika

### Matatizo ya Cheti cha SSL
- Closte inaweza kuchukua muda kutoa vyeti vya SSL (kwa kawaida dakika 5-10)
- Thibitisha kuwa vikoa vyako vinaelekeza vizuri kwenye anwani ya IP ya seva yako ya Closte
- Angalia rekodi za DNS za kikoa chako kuhakikisha zimesanidiwa vizuri

### Kikoa Hakijaongezwa
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Thibitisha kuwa kikoa hakijaongezwa tayari kwenye Closte
- Hakikisha kuwa rekodi za DNS za kikoa chako zimesanidiwa vizuri

### Muda wa Kuangalia DNS
- Vyeti vya SSL vikichukua muda mrefu sana kutolewa, unaweza kurekebisha muda wa kuangalia DNS katika mipangilio ya Domain Mapping
- Muda wa kawaida ni sekunde 300 (dakika 5), lakini unaweza kuuweka chini hadi sekunde 10 kwa kuangalia haraka wakati wa majaribio
