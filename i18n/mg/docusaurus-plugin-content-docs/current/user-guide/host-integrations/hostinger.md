---
title: Fampifandraisana Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Fandrenana (hPanel) Fandrenana

## Famaritana {#overview}

Hostinger dia mpamatsy fampiasana web malaza izay manana control panel maoderina antsoina hoe hPanel. Ny Ultimate Multisite Hostinger integration dia mamela ny fametrahana automatique an'ny domain eo amin'ny Ultimate Multisite sy ny hPanel an'ny Hostinger, izay ahafahanao mampiasa azy ho fitaovana fitantanana mapping domain sy subdomain ianao mivantana ao amin'ny WordPress admin.

## Toetran'ny Fandaharana (Features) {#features}

- Famoronana addon domain automatique ao amin'ny hPanel
- Famoronana subdomain automática ao amin'ny hPanel (ho an'ny fametrahana subdomain multisite)
- Fandavana ny domain rehefa esorina ny mapping
- Fandefasana tsara miaraka amin'ny API fitantanana domain an'ny hPanel

## Fepetra Takiana (Requirements) {#requirements}

Mba hampiasana ny integration Hostinger, mila ireto zavatra ireto ianao:

1. Kaonty Hostinger misy fidirana ao amin'ny hPanel
2. Token API avy amin'ny Hostinger
3. Ireo constant ireo voalaza eto ao anatin'ny rakitra `wp-config.php` anao:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Safidy hafa, afaka mametraka koa ianao:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint manaraka
```

## Toromarika Fandaharana (Setup Instructions) {#setup-instructions}

### 1. Famoronana Token API an'ny Hostinger-nao {#1-generate-your-hostinger-api-token}

1. Midira ao amin'ny kaontinao Hostinger ary midira ao amin'ny hPanel
2. Mandehana any amin'ny **Account Settings** → **API Tokens**
3. Tsindrio ny **Create New Token**
4. Ampidiro anarana manazava ny token-nao (ohatra: "Ultimate Multisite")
5. Safidio ireo alalana ilaina:
   - Domain management
   - Subdomain management
6. Apetraho ao anaty token noforonina ary ataovy azo antoka fa voatokana tsara

### 2. Fikarohana ny ID Kaontinao {#2-find-your-account-id}

1. Ao amin'ny hPanel, mandehana any amin'ny **Account Settings** → **Account Information**
2. Ny Account ID anao dia haseho eto amin'ity pejy ity
3. Apetraho sy tehirizo ity ID ity ho an'ny dingana manaraka

### 3. Fametrahana ny Constant ao amin'ny wp-config.php {#3-add-constants-to-wp-configphp}

Ampidiro ireo constant ireo ao anatin'ny rakitra `wp-config.php` anao:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Raha ny kaontina Hostinger anao dia mampiasa API endpoint hafa ianao, afaka manova izany ianao:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Ampirisihina ny Fandraisana (Enable the Integration) {#4-enable-the-integration}

1. Ao amin'ny admin WordPress anao, mandehin'ny **Ultimate Multisite > Settings**
2. Mandehin'ny tabilao **Domain Mapping**
3. Mandroso any ambany ka **Host Integrations**
4. Ampirisihina ny fandraisana (Enable) ny integration **Hostinger (hPanel)**
5. Kiky ny **Save Changes**

## Ahoana no Fiasany {#how-it-works}

### Addon Domains (Domaine Fanampiny) {#addon-domains}

Rehefa manao mapping domain ao amin'ny Ultimate Multisite ianao:

1. Ny integration dia mandefa fangatahana iray ho an'ny API an'i Hostinger mba hanampiana ny domain ho addon domain
2. Ny domain dia voafetra mba hifandray amin'ny root directory (lalana fototra) anao
3. Rehefa esorina ny mapping domain, ny integration dia manala ho azy ilay addon domain ao amin'ny hPanel

### Subdomains (Subdomain) {#subdomains}

Ho an'ny fanamboarana multisite amin'ny subdomain, rehefa misy toerana vaovao iompana:

1. Ny integration dia mandray ny ampahany subdomain avy amin'ilay domain feno
2. Mandefa fangatahana iray ho an'ny API an'i Hostinger mba hanampiana ilay subdomain
3. Ny subdomain dia voafetra mba hifandray amin'ny root directory (lalana fototra) anao

## Fanamarihana Manan-danja (Important Notes) {#important-notes}

- Mampiasa ny REST API an'i Hostinger ity integration ity mba hiatrika ny kaontinao
- Ny API token anao dia tsy maintsy manana alalana ilaina ho an'ny fitantanana domain sy subdomain
- Tsy mitantana ny fandrindrana DNS (DNS configuration) io integration io; mila voafetra hatramin'ny kaontina Hostinger anao ireo domain.
- Ny fangatahana API dia atao amin'ny fomba azo antoka mampiasa HTTPS
- Ataovy azo antoka fa tsy zaraina any ivelany ny API token anao ary aza zaraina amin'ny olona na toerana misy azy

## Fandresena Olana (Troubleshooting) {#troubleshooting}

### Olana Amin'ny Fifandraisana API {#api-connection-issues}

- Jereo fa marina ny token API anao dia marina ary tsy ela intsony
- Jereo fa marina ny Account ID anao
- Antsoy fa manana alalana ilaina amin'ny fitantanana domain ny token API anao
- Antsoy fa mavitrika sy salama ny kaontina Hostinger anao

### Domain Tsy Ampidirina {#domain-not-added}

- Jereo ao amin'ny Ultimate Multisite logs raha misy hafatra fahadisoana
- Antsoy fa tsy voafidy intsony ilay domain ao amin'ny kaontina Hostinger anao
- Antsoy fa tsy tonga amin'ny fetrany ny domain addon ao amin'ny kaontina Hostinger anao
- Ampahafantaro fa voatsara tsara ny domain mankany amin'ny nameserver an'Hostinger anao

### Olana momba ny SSL Certificate {#ssl-certificate-issues}

- Tsy mitantena ny fampindramam-bola (issuance) ny SSL certificate ny integration
- Matetika, ny Hostinger dia manome SSL certificates maimaim-poana amin'ny alalan'ny AutoSSL
- Afaka mitantana ny SSL certificates mivantana ao amin'ny hPanel ianao eo ambanin'ny **SSL/TLS**
- Na dia azo atao koa ny mampiasa Let's Encrypt miaraka amin'ny fitaovana AutoSSL an'Hostinger

## Fanohanana {#support}

Ho an'ny fanampiana hafa momba ny integration Hostinger, dia jereo eto:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
