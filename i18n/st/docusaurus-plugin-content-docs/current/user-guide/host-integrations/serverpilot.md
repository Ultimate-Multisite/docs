---
title: Ho Hlahlobo le ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# SerbaTsoho Integration

## Le Ntlha (Overview) {#overview}
ServerPilot ke mosebetsi oa cloud ho ba le WordPress le sebetsi se fapaneng sa PHP ka server ea DigitalOcean, Amazon, Google, kapa sebope seo sefapaneng sefapaneng. Ho na le ho fetola ha domain ho tsamaea ka ho na le ho na le SSL certificate management ho Ultimate Multisite le ServerPilot.

## Boitshwaro (Features) {#features}
- Ho tsamaea domain ka ho automatic
- Ho managea SSL certificate ka Let's Encrypt
- Ho fetsa fa SSL e fetola ka ho automatic

## Boitshwaro (Requirements) {#requirements}
Ho na constants tse di fetang ba tla ba le mo file ea `wp-config.php` ea hau:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Boitshwaro ba Setsope (Setup Instructions) {#setup-instructions}

### 1. Get Your ServerPilot API Credentials {#1-get-your-serverpilot-api-credentials}

1. Ho fihla (Log in) ka dashboard ea hau ea ServerPilot
2. Ho tla ka "Account" > "API"
3. Ho fetola key e ntlha ha u na le ya
4. Ho kopora Client ID le API Key ea hau

### 2. Get Your App ID {#2-get-your-app-id}

1. Ka dashboard ea hau ea ServerPilot, ho tla ka "Apps"
2. Ho utloa app sefapaneng sa WordPress multisite ea hau e fetang
3. App ID e le le le le mo URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

Ho fana constants tse di fetang ka file ea hau ea `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. Ka admin ea hau ea WordPress, ho tla ka Ultimate Multisite > Settings
2. Ho tla ka tab ea "Domain Mapping"
3. Ho tsamaea ka "Host Integrations"
4. Ho fetola ServerPilot integration e fetang
5. Ho fana "Save Changes"

## Eona e le ea Fa (How It Works) {#how-it-works}

### Domain Syncing {#domain-syncing}

Ha domain e fetolwa ka Ultimate Multisite:

1. Ho fana (integration) e tla ntsa litsi la domaine lehlelo ka ServerPilot
2. E tla ntsa domaine tse ntlha (lefa le www ha ho hloka) mo litsong (list) (along with a www version if applicable)
3. E tla tšoa litsi le fetileng kwa ServerPilot ka API
4. ServerPilot e tla fetola litsi la domaine la hau la application

### Ho Dira Certificate ea SSL (SSL Certificate Management) {#ssl-certificate-management}

Ha domaine a fetilwe:

1. Ho fana (integration) ha ho fana AutoSSL ho hau la application
2. ServerPilot e tla dira hore certificate ea SSL e fane le e ntsa ka Let's Encrypt
3. ServerPilot e tla dira hore certificate ea SSL e fetole a sefetsoe ka tsela e fetileng (automatic renewal)

## Ho Fetola/Ho Tsoela Certificate ea SSL (SSL Certificate Verification) {#ssl-certificate-verification}

Ho fana (integration) ha ho fana ho tsamaisa lebo la tšoa certificate ea SSL ho ServerPilot, ka nako e ka na le nako hore ServerPilot e fetole le e ntsa certificate ea SSL. Ka tsela e fetileng (default), e tla tsamaisa ho feta 5, empa haholo e ka fana ka ho setso (adjust) ka filters.

## Ho Abala (Troubleshooting) {#troubleshooting}

### Moruo oa API (API Connection Issues) {#api-connection-issues}
- Re ke lebo hore Client ID le API Key ea hau e le tseba
- Re ke lebo hore App ID ea hau e le tseba
- Re ke lebo hore account ea hau ea ServerPilot e le lebo le hloka (permissions)

### Moruo oa Certificate ea SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- ServerPilot e hloka hore domaine e le li-DNS records tse le fetileng ho tsoela kwa server ea hau haholo hore e ntsa certificate ea SSL
- Ha a fane certificate ea SSL, re ke lebo hore domaine ea hau e le li-pointing ka IP address ea hau ea server
- E ka na le nako hore ServerPilot e fetole le e ntsa certificate ea SSL (haholo 5-15 di-minute)

### Domain Ha Abala (Domain Not Added) {#domain-not-added}
- Re ke lebo logs ea Ultimate Multisite ho fana le sebopeho sa ho fetola (error messages)
- Re ke lebo hore domain e le tseba e fetilwe ka ServerPilot
- Re ke lebo hore plan ea hau ea ServerPilot e le lebo hore e tsamaisa litsi tsa domaine joang o tla ba a fetolang

### Kelelo la Domeni {#domain-removal}

- Leha lehle, ServerPilot API e ne e na le tsela ya go tsamaisa domenii e leng.
- Le fa se le mapping la domenii e leng a fetwa ka Ultimate Multisite, bo integration o tla tsamaetsa le lista la domenii la ServerPilot go ba le go tsamaisa domenii e fetileng.
