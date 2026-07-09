---
title: Entegrasyon WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Entegrasyon ak WP Engine {#wp-engine-integration}

## Aperçu {#overview}
WP Engine se yon platfòm wè WordPress ki gen kalite (premium managed hosting) ki bay pèfòmans optimize, sekirite, epi kapasite pou grandi pou sit WordPress ou. Entegrasyon sa a pèmèt senkronizasyon nan domèn otomatik ant Ultimate Multisite ak WP Engine.

## Fonctionnalite {#features}
- Senkronizasyon domèn otomatik
- Sipò subdomain pou enstalasyon multisite
- Entegrasyon fasil ak sistèm ki egziste deja nan WP Engine

## Requis {#requirements}
Entegrasyon an otomatikman detekte si ou ap bay sit ou sou WP Engine epi li itilize API natif WP Engine. Pa gen okenn konfigirasyon adisyonèl ki bezwen si plugin WP Engine a aktif epi li configure byen.

Sepandan, si ou bezwen configure entegrasyon an menm, ou ka defini youn nan konstante sa yo nan fichye `wp-config.php` ou:

```php
define('WPE_APIKEY', 'your_api_key'); // Metòd preferé a
// OLI
define('WPE_API', 'your_api_key'); // Metòd alternatif la
```

## Enstriksyon Konfigirasyon {#setup-instructions}

### 1. Verify Plugin WP Engine {#1-verify-wp-engine-plugin}

Si ou ap bay sit ou sou WP Engine, plugin WP Engine la dwe deja enstale epi aktif. Verifye ke:

1. Plugin WP Engine a aktif
2. Fichye `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` la egziste

### 2. Aktive Entegrasyon an {#2-enable-the-integration}

1. Nan admin WordPress ou, ale Ultimate Multisite > Settings (Konfigirasyon)
2. Navige nan onglet "Domain Mapping" (Mape Domèn)
3. Desann pou "Host Integrations" (Entegrasyon Host)
4. Active entegrasyon WP Engine la
5. Klike sou "Save Changes" (Sauvech Chanjman yo)

## Kijan Li Travay {#how-it-works}

### Senkronizasyon Domèn {#domain-syncing}

Lè yon domèn mapye nan Ultimate Multisite:

1. Entegrasyon an itilize API WP Engine pou ajoute domèn nan enstalasyon WP Engine ou
2. WP Engine la jere konfigirasyon domèn ak emisyon sertifikat SSL la
3. Lè yon mapaj domèn retire, entegrasyon an ap retire domèn nan WP Engine

### Sipò Subdomain {#subdomain-support}

Pou enstalasyon multisite pou subdomain:

1. Entegrasyon an ajoute chak subdomain nan WP Engine lè yon nouvo sit ki kreye.
2. WP Engine la jere konfigirasyon subdomain yo.
3. Lè ou ap delete yon sit, entegrasyon an ap retire subdomain sa a nan WP Engine.

## Nòt Enpòtan {#important-notes}

### Domèn Wildcard (Wildcard Domains) {#wildcard-domains}

Pou enstalasyon multisite subdomain, li rekonpanse pou ou kontakte sipò WP Engine pou mande konfigirasyon domèn wildcard. Sa pèmèt tout subdomain yo fonksyone otomatikman san ou pa bezwen ajoute chak yon lòt manman.

### Sersèt SSL (SSL Certificates) {#ssl-certificates}

WP Engine la jere otomatikman emisyon ak renouvèl sersèt SSL pou tout domèn ki ajoute atravè entegrasyon sa a. Pa gen okenn konfigirasyon adisyonèl ki bezwen.

## Rezoudè Problèm (Troubleshooting) {#troubleshooting}

### pwoblèm koneksyon API {#api-connection-issues}
- Verifye ke plugin WP Engine la aktif epi li configure byen.
- Si ou te defini kle API manman, verifye ke li kòrèk.
- Kontakte sipò WP Engine si ou gen pwoblèm ak API a.

### Domèn pa ajoute {#domain-not-added}
- Kontwe log Ultimate Multisite pou okenn mesaj erè.
- Verifye ke domèn an pa deja ajoute nan WP Engine.
- Asire w ke plan WP Engine ou la sipò kantite domèn ou ap ajoute.

### pwoblèm subdomain {#subdomain-issues}
- Si subdomain yo pa fonksyone, kontakte sipò WP Engine pou mande konfigirasyon domèn wildcard.
- Verifye ke tout sa DNS ou configure a kòrèk pou domèn prensipal la ak subdomain yo.
