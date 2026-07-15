---
title: Fandefasana ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Fandraisana ServerPilot

## Famaritrerana (Overview) {#overview}
ServerPilot dia serivisy cloud iray ahafahanao mitazona WordPress sy ireo tranonkala PHP hafa eo amin'ny server ao amin'ny DigitalOcean, Amazon, Google, na mpanome server hafa. Ity fandraisana ity dia mamela ny fametrahana (syncing) automatique an'ny domain sy ny fitantanana ny SSL certificate eo amin'ny Ultimate Multisite sy ServerPilot.

## Toetran'ny Serivisy (Features) {#features}
- Fametrahana automatic an'ny domain (Automatic domain syncing)
- Fitantanam-ba ny SSL certificate miaraka amin'ny Let's Encrypt
- Fanavaozana automatique an'ny SSL (Automatic SSL renewal)

## Fepetra Takiana (Requirements) {#requirements}
Ireo constants ireo dia tsy maintsy voarakitra ao amin'ny rakitra `wp-config.php` anao:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Toromarika Fampidirana (Setup Instructions) {#setup-instructions}

### 1. Fahazoana ny API Credentials an'ny ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Midira ao amin'ny dashboard an'ny ServerPilot ianao
2. Mandehana any amin'ny "Account" > "API"
3. Atao API key vaovao raha tsy manana azy efa
4. Arotsaho ny Client ID sy ny API Key anao

### 2. Fahazoana ny App ID anao {#2-get-your-app-id}

1. Ao amin'ny dashboard an'ny ServerPilot, mandehana any amin'ny "Apps"
2. Safidio ilay app izay misafidiananao ny WordPress multisite-nao
3. Ny App ID dia hita ao amin'ny URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Fametrahana ireo Constants ao amin'ny wp-config.php {#3-add-constants-to-wp-configphp}

Ampidirina ireto constants manaraka ao anatin'ny rakitra `wp-config.php` anao:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Fanondroana ny Fandraisana (Enable the Integration) {#4-enable-the-integration}

1. Ao amin'ny admin WordPress anao, mandehana any amin'ny Ultimate Multisite > Settings
2. Mandehana any amin'ny "Domain Mapping" tab
3. Mandehana latsaka any amin'ny "Host Integrations"
4. Ampidiro ny fandraisana ServerPilot (Enable the ServerPilot integration)
5. Tsindrio ny "Save Changes"

## Ahoana no Fiasany (How It Works) {#how-it-works}

### Fametrahana Domain (Domain Syncing) {#domain-syncing}

Rehefa misafidian'ny domain ianao ao amin'ny Ultimate Multisite:

1. Ny fampifandra (integration) dia mitondra ny lisitry anarana domaine misy amin'ny ServerPilot izany.
2. Ampidirina ny domain vaovao ao anatin'ilay lisitra (miaraka amin'ny dikan-teny www raha misy).
3. Averina ny lisitra nohavaozina ho any amin'ny ServerPilot amin'ny alalan'ny API izany.
4. Manova ny lisitry ny domain ho an'ny fampiharana (application) anao ny ServerPilot.

### Fitantanana Sertifika SSL (SSL Certificate Management) {#ssl-certificate-management}

Aorian'ny fametrahana (sync) ny domain:

1. Ny fampifandra (integration) dia manao automatique ny AutoSSL ho an'ny fampiharanao.
2. Ny ServerPilot no mitantana ny fanomezana sy fametrahana ny sertifika SSL mampiasa Let's Encrypt.
3. Ny ServerPilot koa dia mitantana ny fanavaozana automatique ireo sertifika SSL.

## Fanamarinana Sertifika SSL (SSL Certificate Verification) {#ssl-certificate-verification}

Natao fanamboarana ny fampifandra (integration) mba hanatsarana ny isan'ny fiezahana fametrahana (verification attempts) ny sertifika SSL ho an'ny ServerPilot, satria mety mila fotoana kely ny ServerPilot mba hanomezana sy hametrahana ireo sertifika SSL. Amin'ny ankapobeny dia manandrana mandra-pahatongan'ny 5 izany, fa azo ovaina amin'ny alalan'ny filters (fitaovana fanapahan-kevitra).

## Fanamboarana Olana (Troubleshooting) {#troubleshooting}

### Olana momba ny Fampifandra API (API Connection Issues) {#api-connection-issues}
- Fantaro raha marina ny Client ID sy ny API Key anao.
- Jereo raha marina ny App ID anao.
- Antsoy fa manana zo ilaina amin'ny kaontinao ServerPilot ianao.

### Olana momba ny Sertifika SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Mila ny ServerPilot ho fantatra fa misy DNS records marina mifandray amin'ny server anao alohan'ny hanomezana sertifika SSL izy.
- Raha tsy voaferana ireo sertifika SSL, jereo raha toa ka manaraka tsara ny domain anao ny adiresin-IP (IP address) an'ny server anao izany.
- Mety mila fotoana kely ny ServerPilot mba hanomezana sy hametrahana ireo sertifika SSL (matetika 5-15 minitra).

### Tsy Nampidirina ny Domain (Domain Not Added) {#domain-not-added}
- Jereo ao amin'ny logs an'ny Ultimate Multisite raha misy hafatra fahadisoana (error messages).
- Fantaro fa tsy voafidy (already added) intsony ilay domain ao ServerPilot.
- Antsoy fa manome fanohanana ny isan'ny domain izay ampiana ianao ny plan ServerPilot anao.

### Fandriana (Domain) Fanapahana {#domain-removal}

- Amin'izay anke, ny ServerPilot API dia tsy manome fomba iray hanesorana domain tsirairay.
- Rehefa esorina ny fametrahana domain ao amin'ny Ultimate Multisite, ny integration dia hanavao ny lisitry ny domain ao amin'ny ServerPilot mba hisarahana ilay domain naseho ho esorina.
