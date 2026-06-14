---
title: Entegrasyon RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Entegrasyon RunCloud

## Aperçu
RunCloud se yon platfòm jere sèvè ki baze sou nivo kloud (cloud-based) ki pèmèt ou depliye epi jere fasil aplikasyon web yo sou sèvè kloud ou tèt ou. Entegrasyon sa a pèmèt senkronizasyon domèn otomatik ak jere sertifikat SSL ant Ultimate Multisite ak RunCloud.

## Fonctionnalite
- Senkronizasyon domèn otomatik
- Jere sertifikat SSL
- Retire domèn lè mapings yo deletee

## Requis
Ou dwe defini konstante sa yo nan fichye `wp-config.php` ou a:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Enstriksyon Konfigirasyon

### 1. Jwenn Kredyans API RunCloud ou a

1. Log in nan dashboard RunCloud ou a
2. Ale nan "User Profile" (klike sou foto profil ou an kòt dwat la)
3. Chwazi "API" nan mennu a
4. Klike sou "Generate API Key" si ou pa genyen youn deja
5. Kopye API Key ak API Secret ou a

### 2. Jwenn ID Sèvè ak App ou a

1. Nan dashboard RunCloud ou a, ale nan "Servers"
2. Chwazi sèvè kote WordPress multisite ou an aloje
3. Server ID la parèt nan URL la: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Ale nan "Web Applications" epi chwazi aplikasyon WordPress ou a
5. App ID la parèt nan URL la: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ajoute Konstante yo nan wp-config.php

Ajoute konstante sa yo nan fichye `wp-config.php` ou a:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Kòmanse Entegrasyon an

1. Nan ou WordPress admin ou, ale nan Ultimate Multisite > Settings
2. Navige pou tab "Domain Mapping" (Mapeman Domèn)
3. Fè scroll anba pou w jwenn "Host Integrations" (Entegrasyon Host)
4. Active integrasyon RunCloud la
5. Klike sou "Save Changes" (Konserve Chanjman yo)

## Kijan Li Travaye

Lè yon domèn mapye nan Ultimate Multisite:

1. Integrasyon an voye yon demann pou API RunCloud la pou ajoute domèn nan aplikasyon ou a
2. Si domèn an ajoute siksè, integrasyon an ap re-deploy (re-déploy) sertifikat SSL yo tou
3. Lè yon mapye domèn retire, integrasyon an ap retire domèn an nan RunCloud

Pou enstalasyon sous-domèn (subdomain), integrasyon an ap jere otomatikman kreasyon sous-domèn yo nan RunCloud lè nou ajoute nouvo sit sou rezo ou a.

## RezolisyonPwoblèm (Troubleshooting)

### Pwoblèm Koneksyon API
- Verifi ke kredans API ou yo kòrèk
- Konti ke ID sèvè w ak aplikasyon ou yo kòrèk
- Asire ke kont RunCloud ou a gen pèmisyon ki nesesè

### Pwoblèm Sertifikat SSL
- RunCloud ka pran kèk tan pou li bay sertifikat SSL
- Verifi ke domèn ou yo ap pointer byen nan adrès IP sèvè w la
- Konti chanjman SSL ou a nan RunCloud pou aplikasyon ou

### Domèn Pa Ajoute
- Konti log Ultimate Multisite pou okenn mesaj erè
- Verifi ke domèn an pa deja ajoute nan RunCloud
- Asire ke plan RunCloud ou a sipò plizyè domèn
