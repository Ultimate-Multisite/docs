---
title: Fandefasana WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Fandahana amin'ny WP Engine {#wp-engine-integration}

## Famarahabana (Overview) {#overview}
Ny WP Engine dia sehatra hosting WordPress manokana sy manome tolotra ambony izay manome fahaizana miasa tsara, fiarovana, ary fahafahana mivelatra ho an'ny tranonkala WordPress. Ity fandrindrana ity dia mamela ny fametrahana mivantana (automatic domain syncing) eo amin'ny Ultimate Multisite sy WP Engine.

## Tolotra (Features) {#features}
- Fametrahana mivantana ny domain (Automatic domain syncing)
- Fanohanana subdomain ho an'ny fampiasana multisite
- Fandrindrana tsara miaraka amin'ny rafitry ny WP Engine efa misy

## Fepetra Takiana (Requirements) {#requirements}
Ny fandrindrana dia mahafantatra ho ao amin'ny WP Engine ve ianao ary mampiasa ny API an'ny WP Engine efa voalaza. Tsy mila fanamboarana hafa raha mbola miasa tsara sy voarafitra tsara ny plugin WP Engine.

Na izany aza, raha mila manova ny fandrindrana amin'ny tanana ianao, dia afaka mamaritra iray amin'ireto constants ireto ao anatin'ny rakitra `wp-config.php` anao ianao:

```php
define('WPE_APIKEY', 'your_api_key'); // Fomba tian'ny olona (Preferred method)
// NA
define('WPE_API', 'your_api_key'); // Fomba hafa (Alternative method)
```

## Toromarika Fametrahana (Setup Instructions) {#setup-instructions}

### 1. Fantaro ny Plugin WP Engine {#1-verify-wp-engine-plugin}

Raha mampiasa WP Engine ianao, dia tokony efa voapetra sy voasokajy (activated) ny plugin WP Engine. Fantaro fa:

1. Ny plugin WP Engine dia miasa
2. Misy ny rakitra `wp-content/mu-plugins/wpengine-common/class-wpeapi.php`

### 2. Ampirisihina ny Fandrindrana (Enable the Integration) {#2-enable-the-integration}

1. Ao amin'ny admin WordPress anao, mandehana any Ultimate Multisite > Settings
2. Mandehana any amin'ny "Domain Mapping" tab
3. Mandroso any amin'ny "Host Integrations"
4. Ampirisihina ny fandrindrana WP Engine (Enable the WP Engine integration)
5. Tsindrio ny "Save Changes"

## Ahoana no Asa (How It Works) {#how-it-works}

### Fametrahana Domain (Domain Syncing) {#domain-syncing}

Rehefa misy domain voapetra ao amin'ny Ultimate Multisite:

1. Ny fandrindrana dia mampiasa ny WP Engine API mba hanampiana ilay domain eo amin'ny fampiasana anao ao amin'ny WP Engine
2. Ny WP Engine no mandray andraikitra amin'ny fametrahana ny domain sy ny fanomezana SSL certificate
3. Rehefa esorina ny fandrindrana domain, dia esorina ho avy amin'ny WP Engine ny fandrindrana.

### Fanohanana Subdomain (Subdomain Support) {#subdomain-support}

Ho an'ny fomba fanaovana subdomain multisite:

1. Ny fandrindrana dia manampy ny subdomain tsirairay amin'ny WP Engine rehefa misy toerana vaovao no namboarina.
2. Ny WP Engine no mitantana ny fametrahana ny subdomain.
3. Rehefa very ny toerana, ny fandrindrana dia hamoaka ny subdomain avy ao amin'ny WP Engine.

## Fanamarihana Manan-danja {#important-notes}

### Wildcard Domains (Domaine mivelatra) {#wildcard-domains}

Ho an'ny fampiasana subdomain multisite, dia tsara kokoa raha mifandray amin'ny sampan-draharahan'ny WP Engine ianao mba mangataka fametrahana wildcard domain. Izany dia ahafahana miasa ho azy avy amin'ny subdomain rehetra tsy mila manampy tsirairay izy.

### SSL Certificates (Sertifika SSL) {#ssl-certificates}

Ny WP Engine no mitantana ho azy ny fanomezana sy ny fanavaozana ny sertifika SSL ho an'ireo domain rehetra ampiana tamin'ity fandrindrana ity. Tsy mila fametrahana hafa intsony ianao.

## Fandresena Olana (Troubleshooting) {#troubleshooting}

### Olana amin'ny Fifandraisana API {#api-connection-issues}
- Fantaro fa mavitrika sy voafetra tsara ny plugin WP Engine.
- Raha nanao ny API key manokana ianao, jereo raha marina izany.
- Mifandray amin'ny sampan-draharahan'ny WP Engine raha misy olana amin'ny API ianao.

### Tsy Ampiana Domain {#domain-not-added}
- Jereo ireo logs an'ny Ultimate Multisite raha misy hafatra fahadisoana.
- Fantaro fa tsy voampiana mialoha ny domain ao amin'ny WP Engine.
- Antsoy mba hahazo antoka fa manome fanohanana ny plan WP Engine anao ny isan'ny domain izay ampianao.

### Olana amin'ny Subdomain {#subdomain-issues}
- Raha tsy miasa ny subdomain, mifandray amin'ny sampan-draharahan'ny WP Engine mba mangataka fametrahana wildcard domain.
- Fantaro fa voafetra tsara ny fandrindrana DNS anao ho an'ny domain lehibe sy ny subdomain.
