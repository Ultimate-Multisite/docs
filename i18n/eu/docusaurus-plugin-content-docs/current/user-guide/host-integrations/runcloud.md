---
title: RunCloud Integrazioa
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integrazioa

## Deskuntzua {#overview}
RunCloud da server-ek garrantzitsu plataforma dauna dago, zein irakurri eta administrazio dezake web aplikazioak zure cloud server-etan lehiak. Hau integrazioak Ultimate Multisite eta RunCloud-ren artean automatik domain sync edo SSL certificate managementa eragiten du.

## Aeragunak {#features}
- Domain sync automatikoa
- SSL certificate managementa
- Mapeamenduak boratzen diren bitartean domain hartzea

## Aurtegiturak {#requirements}
Hau dauden konstante hauek `wp-config.php` file-an definatu behar dira:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Aurtegitura Erregitzenak {#setup-instructions}

### 1. RunCloud API Identifikazioak Hondartu {#1-get-your-runcloud-api-credentials}

1. Zure RunCloud dashboard-era logiatu duzu.
2. "User Profile"-era jarraitu (irizpi-ek handiako partean dagoen zure profilaren ikertua klikatu).
3. Menu-tik "API"a aukeratu.
4. Hau ez dutenean, "Generate API Key"-ra klikatu.
5. Zure API Key eta API Secretak kopiatu duzu.

### 2. Zure Server eta App ID-ak Hondartu {#2-get-your-server-and-app-ids}

1. Zure RunCloud dashboard-era, "Servers"-era jarraitu.
2. WordPress multisitea ospikatu duen servera aukeratu.
3. Server ID-ak URL-an erabil daitezke: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"-era jarraitu eta zure WordPress aplikazioa aukeratu.
5. App ID-ak URL-an erabil daitezke: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Konstante hauek wp-config.php-le Hondartu {#3-add-constants-to-wp-configphp}

Hau dauden konstante hauek zure `wp-config.php` file-an gehitu:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Integrazioa Aktiboa Egitea {#4-enable-the-integration}

1. WordPress administrazioan, Ultimate Multisite > Settings (Konfigurazioa) funduan jarri.
2. "Domain Mapping" (Domein Mapoak) tabera jarri.
3. "Host Integrations" (Host Integrazioak) luzean jarri.
4. RunCloud integrazioa aktibatuu (Enable).
5. "Save Changes" (Gehiak Erdatu) klik egin.

## Ondo Zerbitzuon Moduaren Erdatu (How It Works) {#how-it-works}

Ultimate Multisite-an domein bat mapatuta (mapatu) zenbait erregistroan:

1. Integrazioa RunCloud-ren API-rari eskaera bidaltzen du domain zehatza aplikazioan ezartzeko.
2. Domaina ondo ezarrituta jakin direla, integrazioak SSL sertifikatua ere redeploy (berri bizitzeko) egin du.
3. Domein mapatzea abazten denean, integrazioak domain RunCloud-ren bat gabe eratu du.

Subdomaine instalazioetan, integrazioak network-an lehiak aplikazioak gehiago jartzen duenean RunCloud-an subdomaine hauek automatically (autoamtik) ezarritzea jartzen du.

## Problema Erdatzeko (Troubleshooting) {#troubleshooting}

### API Konektibitatea Problemaak {#api-connection-issues}
- API identifikazioak (credentials) barne dagoen jakin dira.
- Server eta app ID-ak ondo dagozkatu dituen jakin dira.
- RunCloud kontua lehenengo eskatzen behar diren permietsoak ditu jakin dira.

### SSL Sertifikatua Problemaak {#ssl-certificate-issues}
- RunCloud-ek SSL sertifikatuak ematean zehat ezarritzea gurean ahazten du.
- Domain hauek server-ren IP-ra ondo apuntatzen duen jakin dira.
- Aplikazioaren RunCloud SSL aukerak kontrolatu dituen jakin dira.

### Domeina Ez Hasartu (Domain Not Added) {#domain-not-added}
- Ultimate Multisite-aren logs-ek erantzun testuak edo error bat dagoen jakin dira.
- Domaina RunCloud-an ez dagoela jakin dira.
- RunCloud planak domein zehatzak gehiago jartzen ditelako jakin dira.
