---
title: Ujumuishaji wa WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Uunganishaji wa WP Engine

## Muhtasari {#overview}
WP Engine ni jukwaa la hali ya juu la hosting ya WordPress linalodhibitiwa ambalo linatoa utendaji bora, usalama, na uwezo wa kukua kwa tovuti za WordPress. Uunganishaji huu unawezesha usawazishaji wa kiotomatiki wa domain kati ya Ultimate Multisite na WP Engine.

## Vipengele {#features}
- Usawazishaji wa kiotomatiki wa domain
- Msaada wa subdomain kwa usakinishaji wa multisite
- Uunganishaji laini na mifumo iliyopo ya WP Engine

## Mahitaji {#requirements}
Uunganishaji huu unagundua kiotomatiki kama unahost kwenye WP Engine na kutumia API ya ndani ya WP Engine. Hakuna usanidi wa ziada unaohitajika ikiwa plugin ya WP Engine imewashwa na kusanidiwa vizuri.

Hata hivyo, ukihitaji kusanidi uunganishaji kwa mikono, unaweza kufafanua mojawapo ya constants hizi kwenye faili yako ya `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Njia inayopendekezwa
// AU
define('WPE_API', 'your_api_key'); // Njia mbadala
```

## Maelekezo ya Usanidi {#setup-instructions}

### 1. Thibitisha Plugin ya WP Engine {#1-verify-wp-engine-plugin}

Ukihost kwenye WP Engine, plugin ya WP Engine inapaswa kuwa tayari imesakinishwa na kuwashwa. Hakikisha kwamba:

1. Plugin ya WP Engine imewashwa
2. Faili `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ipo

### 2. Washa Uunganishaji {#2-enable-the-integration}

1. Kwenye admin yako ya WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Washa uunganishaji wa WP Engine
5. Bonyeza "Save Changes"

## Jinsi Inavyofanya Kazi {#how-it-works}

### Usawazishaji wa Domain {#domain-syncing}

Wakati domain inapotengenezwa kwenye Ultimate Multisite:

1. Uunganishaji unatumia API ya WP Engine kuongeza domain kwenye usakinishaji wako wa WP Engine
2. WP Engine inashughulikia usanidi wa domain na utoaji wa cheti cha SSL
3. Wakati uwekaji wa domain unapoondolewa, uunganishaji utaondoa domain kutoka WP Engine

### Msaada wa Subdomain {#subdomain-support}

Kwa usakinishaji wa multisite wa subdomain:

1. Uunganishaji unaongeza kila subdomain kwenye WP Engine wakati tovuti mpya inapotengenezwa
2. WP Engine inashughulikia usanidi wa subdomain
3. Wakati tovuti inafutwa, uunganishaji utaondoa subdomain kutoka WP Engine

## Mambo Muhimu ya Kuzingatia {#important-notes}

### Domain za Wildcard {#wildcard-domains}

Kwa usakinishaji wa multisite wa subdomain, inashauriwa kuwasiliana na msaada wa WP Engine kuomba usanidi wa domain ya wildcard. Hii inaruhusu subdomain zote kufanya kazi kiotomatiki bila kuhitaji kuongeza kila moja mmoja mmoja.

### Vyeti vya SSL {#ssl-certificates}

WP Engine inashughulikia kiotomatiki utoaji na upya wa vyeti vya SSL kwa domain zote zilizoongezwa kupitia uunganishaji huu. Hakuna usanidi wa ziada unaohitajika.

## Utatuzi wa Matatizo {#troubleshooting}

### Matatizo ya Muunganisho wa API {#api-connection-issues}
- Thibitisha kwamba plugin ya WP Engine imewashwa na kusanidiwa vizuri
- Ikiwa umefafanua API key kwa mikono, hakikisha ni sahihi
- Wasiliana na msaada wa WP Engine ukipata matatizo na API

### Domain Haijaongezwa {#domain-not-added}
- Angalia kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa makosa
- Thibitisha kwamba domain bado haijaongezwa kwenye WP Engine
- Hakikisha mpango wako wa WP Engine unasaidia idadi ya domain unazozongeza

### Matatizo ya Subdomain {#subdomain-issues}
- Ikiwa subdomain hazifanyi kazi, wasiliana na msaada wa WP Engine kuomba usanidi wa domain ya wildcard
- Thibitisha kwamba mipangilio yako ya DNS imesanidiwa vizuri kwa domain kuu na subdomain
