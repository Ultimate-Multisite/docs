---
title: Whakawhanaungatanga me WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Whakawhanaungatanga me WP Engine {#wp-engine-integration}

## Pūmanawa (Overview) {#overview}
Hea te WP Engine he tūpuna nui o hosting WordPress, he platforma mātanga e whai whakaaro ki te whakamahi mō performance, pūkenga, me te whakawhanake i ngā waka WordPress. Ko te whakawhanaungatanga (integration) ko e hoki i te domain automatically anō i te Ultimate Multisite me WP Engine.

## Manawa (Features) {#features}
- Whakawhanaungatanga domain automatic
- Whakawhanaungatanga subdomain mō installation multisite
- Whakawhanaungatanga mō te whānau pūkenga o WP Engine

## Wāhi Whakawhanaungatanga (Requirements) {#requirements}
Ko te whakawhanaungatanga ko e whai whakaaro ana i te hosting mo WP Engine anō, ā, he whakamahi i te API o WP Engine. He tino pai ahau ki te whakamahinga i te plugin o WP Engine me te whakarite i a ia mō te tika.

Hānei, ko te mea, he tino whai whakaaro ana koe ki te whakawhanaungatanga manu manu (manual configuration), ko e taea ai koe te tōwhiti i te constant (constant) i te file `wp-config.php` o koe:

```php
define('WPE_APIKEY', 'your_api_key'); // Te fōkai pai
// AROHA
define('WPE_API', 'your_api_key'); // Te fōkai alternative
```

## Whakatau (Setup Instructions) {#setup-instructions}

### 1. Whakawātea Plugin WP Engine {#1-verify-wp-engine-plugin}

Ko te hosting mo WP Engine, ko te plugin o WP Engine me te whakatika i a ia ana e tika ana. Kia tiaki i:

1. Ko te plugin o WP Engine e active
2. Ko te file `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` e hoatu

### 2. Whakawhanaungatanga (Enable the Integration) {#2-enable-the-integration}

1. I roto i te admin o WordPress mo koe, pahi ki Ultimate Multisite > Settings
2. Pahi ki te tab "Domain Mapping"
3. Whakarongo ki "Host Integrations"
4. Whakawhanaunga i te WP Engine integration
5. Whakawatea i "Save Changes"

## He aha ia mahi (How It Works) {#how-it-works}

### Whakawhanake Domain (Domain Syncing) {#domain-syncing}

I roto i te Ultimate Multisite, ko te domain e whakatau ana:

1. Ko te whakawhanaungatanga ko e whakamahi i te WP Engine API ki te whakarongo i te domain ki te installation o koe mo WP Engine
2. Ko WP Engine ko e whai whakaaro ki te configuration o te domain me te hoatu SSL certificate
3. I roto i te wā e whakatika ai te whakawhanaungatanga domain, ko te whakawhanaungatanga ko e whero i te domain mo WP Engine

Mōhio ki te whaiaro multisite i ngā subdomain:

1. Ko te whaiaro (integration) e whaiaro akorua ko te subdomain ki WP Engine i roto i te wā e whakawhanainga te wāhi hou.
2. Ko WP Engine e whakahaere ai te whakaritenga o te subdomain.
3. I roto i te wā e whakatika (delete) te wāhi, ka whero te whaiaro ko te subdomain mai i WP Engine.

## Ngā Tohutohu Whakamahinga Whakamahalata (Important Notes) {#subdomain-support}

### Domain Whakawhiti (Wildcard Domains) {#important-notes}

Mō ngā whaiaro multisite i ngā subdomain, he tino mōhana ki te whai wāhi ki te support o WP Engine kia whai wāhi i te whakaritenga domain wildcard. Ko tēnei e hiahia ana katoa ngā subdomain ki te whakawhanake anō i roto i te wā ko e hiahia ana ia ki te whero i tona anake.

### Sertifikati SSL (SSL Certificates) {#wildcard-domains}

Ko WP Engine e whakahaere ai te whakamahi me te whero i ngā sertifikati SSL mō katoa ngā domain e whaiaro mai i roto i tēnei whaiaro. He tino āhua ana, he mea e hiahia ana ki te whakarite anō.

## Whakamutunga (Troubleshooting) {#ssl-certificates}

### Ngā Whainga Whakawhiti API (API Connection Issues) {#troubleshooting}
- Kia whakamārama ko te plugin o WP Engine e active ana me te whaiaro i tona mōhio.
- Ko te mea, he tino tikanga ki te whakamaoritanga o te API key e whakahou ia mōna.
- Whai wāhi ki te support o WP Engine kia whai wāhi i ngā mea e hiahia ana koe i te API.

### Domain Aua Whakawhanainga (Domain Not Added) {#api-connection-issues}
- Kia whakamārama ko te logs o Ultimate Multisite he tino tikanga ki te whakamaoritanga o ngā pēke (error messages).
- Kia whakamārama ko te domain kua whaiaro i WP Engine ona.
- Kia tiaki ana ko te plan o WP Engine e hiahia ana i te whakapapa o ngā domain e whaiaro mai.

### Ngā Whainga Subdomain (Subdomain Issues) {#domain-not-added}
- He tino mōhana ki te whai wāhi ki te support o WP Engine kia whai wāhi i te whakaritenga domain wildcard ko te subdomain e ka taea ana.
- Kia whakamārama ko ngā whakaritenga DNS kua whakahou i runga i te domain nui me ngā subdomain he tino tika.
