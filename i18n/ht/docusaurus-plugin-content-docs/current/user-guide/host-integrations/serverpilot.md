---
title: Entegrasyon ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Entegrasyon akòz ServerPilot {#serverpilot-integration}

## Aperçu {#overview}
ServerPilot se yon sèvis nivo klè (cloud service) pou bay wèb WordPress ak lòt sit PHP sou mwayèn server yo nan DigitalOcean, Amazon, Google, oswa nenpòt lòt pwoyèv. Entegrasyon sa a pèmèt senkronizasyon domèn otomatik epi jere sertifikat SSL ant Ultimate Multisite ak ServerPilot la.

## Fonctionnalite {#features}
- Senkronizasyon domèn otomatik
- Jere sertifikat SSL avè Let's Encrypt
- Renouvelaman SSL otomatik

## Requis {#requirements}
Ou dwe defini konstante sa yo nan fichye `wp-config.php` ou a:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Enstriksyon Konfigirasyon {#setup-instructions}

### 1. Jwenn Kredyans API ServerPilot ou a {#1-get-your-serverpilot-api-credentials}

1. Log in nan dashboard ServerPilot ou a
2. Ale nan "Account" > "API" (Kont akti)
3. Kreye yon nou API key si ou pa genyen youn deja
4. Kopye Client ID ak API Key ou a

### 2. Jwenn App ID ou a {#2-get-your-app-id}

1. Nan dashboard ServerPilot ou a, ale nan "Apps"
2. Chwazi app kote WordPress multisite ou an aloje
3. App ID la parèt nan URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ajoute Konstante yo nan wp-config.php {#3-add-constants-to-wp-configphp}

Ajoute konstante sa yo nan fichye `wp-config.php` ou a:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Kòmanse Entegrasyon an {#4-enable-the-integration}

1. Nan admin WordPress ou a, ale nan Ultimate Multisite > Settings (Konfigirasyon)
2. Navige nan onglet "Domain Mapping" (Mape Domèn)
3. Desannye pou "Host Integrations" (Entegrasyon Mwayèn)
4. Kòmanse entegrasyon ServerPilot la
5. Klike sou "Save Changes" (Sauvech Chanjman yo)

## Kijan Li Travay {#how-it-works}

### Senkronizasyon Domèn {#domain-syncing}

Lè yon domèn mapye nan Ultimate Multisite:

1. Entegrasyon anseye sa liste domèn ki genyen nan ServerPilot la kounye a
2. Li ajoute domèn nouvo a nan lis la (avèk yon vèsyon www si li egziste)
3. Li voye lis ki rafraîchi a ServerPilot yo atravè API a
4. ServerPilot ap rafraîchi lis domèn pou aplikasyon ou

### Jere Sersèt SSL (SSL Certificate Management) {#ssl-certificate-management}

Aprè domèn yo sincronize:

1. Entegrasyon an otomatikman kòmanse AutoSSL pou aplikasyon ou
2. ServerPilot ap jere emisyon ak enstalasyon sersèt SSL la itilize Let's Encrypt
3. ServerPilot ap jere tou renouvèlman otomatik sersèt SSL yo

## Verifikasyon Sersèt SSL (SSL Certificate Verification) {#ssl-certificate-verification}

Entegrasyon an configure pou li grandi kantite esè verifikasyon sersèt SSL pou ServerPilot, paske li ka pran yon ti tan pou ServerPilot bay ak enstale sersèt SSL. Pa defo, li ap eseye jiska 5 fwa, men ou ka ajiste sa itilize filtre yo.

## Rezoudè (Troubleshooting) {#troubleshooting}

### pwoblèm koneksyon API (API Connection Issues) {#api-connection-issues}
- Verifye ke Client ID ak API Key ou a kòrèk
- Kontweke ke App ID ou a kòrèk
- Asire w ke kont ServerPilot ou a gen pèmisyon ki nesesè

### pwoblèm sersèt SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- ServerPilot mande domèn yo gen rekò DNS valide ki ap pointe nan sèvè ou anvan li bay sersèt SSL
- Si sersèt SSL yo pa bay, kontweke ke domèn ou a ap pointe byen sou adrès IP sèvè ou a
- Li ka pran yon ti tan pou ServerPilot bay ak enstale sersèt SSL (anjeneral 5-15 minit)

### Domèn Pa Ajoute (Domain Not Added) {#domain-not-added}
- Kontweke log Ultimate Multisite pou nenpòt mesaj erè
- Verifye ke domèn an pa deja ajoute nan ServerPilot
- Asire w ke plan ServerPilot ou a sipò kantite domèn ou ap ajoute

### Retirasyon Domèn (Domain Removal) {#domain-removal}
- Kounye a, ServerPilot API pa bay fason pou retire domèn endividyèl.
- Lè yon mapaj domèn retire nan Ultimate Multisite, entegrasyon an ap mete ajou lis domèn nan ServerPilot pou eksklou domèn ki te retire a.
