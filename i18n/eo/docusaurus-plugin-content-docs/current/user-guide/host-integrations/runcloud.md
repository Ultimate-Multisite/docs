---
title: Integriteco RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integrazione {#runcloud-integration}

## Aŭvizio (Overview) {#overview}
RunCloud estas cloud-bazita server-menĝa platformo, kiu permesas al vi facile deplopi kaj administra web-aplikojn sur viaj propraj cloud-serveroj. Ĉi tiu integriĝo permesas aŭtomatan domeno-sinkron kaj SSL-sertifikato-administrigon inter Ultimate Multisite kaj RunCloud.

## Funkcioj (Features) {#features}
- Aŭtomata domeno-sinkro
- SSL-sertifikato-administrado
- Domeno forigo, kiam mapoj estas delete

## Requisitoj (Requirements) {#requirements}
La seguenti konstantaĵoj devas esti definita en via `wp-config.php` fakto:

```php
define('WU_RUNCLOUD_API_KEY', 'via_api_clavo');
define('WU_RUNCLOUD_API_SECRET', 'via_api_sekreto');
define('WU_RUNCLOUD_SERVER_ID', 'via_server_ido');
define('WU_RUNCLOUD_APP_ID', 'via_app_ido');
```

## Monti Instrukoj (Setup Instructions) {#setup-instructions}

### 1. Akcepte Via RunCloud API Credencijoj {#1-get-your-runcloud-api-credentials}

1. Logu-sin al via RunCloud dashboardo
2. Altiĝu al "User Profile" (klaku sur viaj profil-imago en la malalta dreta angulo)
3. Selektoj "API" el la menuko
4. Klaku sur "Generate API Key", se vi ne havas unu jużo
5. Kopiu vian API Clavon kaj API Sekreto

### 2. Akcepte Via Server- kaj App ID's {#2-get-your-server-and-app-ids}

1. En via RunCloud dashboardo, altiĝu al "Servers"
2. Selektoj la serveron, kie via WordPress multisite estas alojita
3. La Server ID estas vidbla en la URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Altiĝu al "Web Applications" kaj selektoj vian WordPress aplikacion
5. La App ID estas vidbla en la URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Aggiģi Konstantaĵojn al wp-config.php {#3-add-constants-to-wp-configphp}

Aggiĝu la seguenti konstantaĵoj al via `wp-config.php` fakto:

```php
define('WU_RUNCLOUD_API_KEY', 'via_api_clavo');
define('WU_RUNCLOUD_API_SECRET', 'via_api_sekreto');
define('WU_RUNCLOUD_SERVER_ID', 'via_server_ido');
define('WU_RUNCLOUD_APP_ID', 'via_app_ido');
```

### 4. Aktivizi la Integriĝon {#4-enable-the-integration}

1. Dans la administra de WordPress, alosu Ultimate Multisite > Settings (Konfiguracio)
2. Naviguite al ongo "Domain Mapping" (Mappado de Domenoj)
3. Scrollite nedan al "Host Integrations" (Integracio de Host)
4. Enableite la integracio RunCloud
5. Clickite "Save Changes" (Salva Modifikoj)

## Kiel Funcas {#how-it-works}

Kiam domeno estas mappita en Ultimate Multisite:

1. La integracio sendas petiron al API de RunCloud por a ski ani la domenon al viajajn aplikacian.
2. Se domeno sukcese adadi, la integracio ankaŭ redeployos SSL certificates (sertifikatoj).
3. Kiam mappado de domeno estas forigita, la integracio rimuovas la domenon de RunCloud.

Por instaloj subdomenoj, la integracio aŭtomate maneble la kreon de subdomenoj en RunCloud kiam novaj sitoj estas adadi al viaj retoj.

## Problemo-solviĝo (Troubleshooting) {#troubleshooting}

### Problemo kun API konekto {#api-connection-issues}
- Verifaces ke viajn API credentials (identifikoj) estas ĝustataj
- Kontaces se viaja servero kaj app IDs (identigoj de aplikoj) estas ĝustataj
- Assuras, ke viaja RunCloud konto havas la necesajn permesojn

### Problemo kun SSL certificates {#ssl-certificate-issues}
- RunCloud povas bezoni tempon por eliri SSL certificates
- Verifaces ke viaj domenoj ĝuste apuntigas al la IP-adreso de viaja servero
- Kontaces la SSL settings de RunCloud por via aplikacio

### Domeno ne adita {#domain-not-added}
- Kontaces la Ultimate Multisite logs por ĉian eraro mesaĝoj
- Verifaces, ke la domeno ne estas déjà adita en RunCloud
- Assuras, ke viaja RunCloud plan suportas plurajn domenojn
