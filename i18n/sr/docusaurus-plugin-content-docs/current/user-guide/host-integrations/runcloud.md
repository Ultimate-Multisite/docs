---
title: Integracija RunCloud-a
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integracija sa RunCloud {#runcloud-integration}

## Pregled {#overview}
RunCloud je cloud platform za upravljanje serverima koja vam omogućava da jednostavno postavljate i upravljate web aplikacijama na svojim cloud serverima. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL sertifikatima između Ultimate Multisite-a i RunCloud-a.

## Karakteristike {#features}
- Automatsko sinhronizovanje domena
- Upravljanje SSL sertifikatima
- Uklanjanje domena kada se mape obrišu

## Zahtevi {#requirements}
Slede konstante morate definisati u vašem fajlu `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'vaš_api_ključ');
define('WU_RUNCLOUD_API_SECRET', 'vaš_api_tajni');
define('WU_RUNCLOUD_SERVER_ID', 'vaš_server_id');
define('WU_RUNCLOUD_APP_ID', 'vaš_app_id');
```

## Uputstva za podešavanje {#setup-instructions}

### 1. Dobijte svoje RunCloud API podatke {#1-get-your-runcloud-api-credentials}

1. Prijavite se na svoj RunCloud dashboard
2. Idite na "User Profile" (kliknite na svoju sliku profila u gornjem desnom uglu)
3. Izaberite "API" iz menija
4. Kliknite na "Generate API Key" ako već nemate jedan
5. Kopirajte svoj API Ključ i API Tajnu

### 2. Dobijte svoje Server i App ID-ove {#2-get-your-server-and-app-ids}

1. U svom RunCloud dashboardu, idite na "Servers" (Serveri)
2. Izaberite server gde je hostovan vaš WordPress multisite
3. Server ID je vidljiv u URL-u: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Idite na "Web Applications" i izaberite svoju WordPress aplikaciju
5. App ID je vidljiv u URL-u: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sledeće konstante u vaš fajl `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'vaš_api_ključ');
define('WU_RUNCLOUD_API_SECRET', 'vaš_api_tajni');
define('WU_RUNCLOUD_SERVER_ID', 'vaš_server_id');
define('WU_RUNCLOUD_APP_ID', 'vaš_app_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U admin WordPressu, idite na Ultimate Multisite > Settings
2. Idite do tab "Domain Mapping" (Mapiranje domena)
3. Skrolujte do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju RunCloud
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija šalje zahtev API-ju RunCloud-a da doda domen u vašu aplikaciju
2. Ako se domen uspešno doda, integracija će takođe ponovo implementirati SSL sertifikate
3. Kada se ukloni mape domena, integracija će domen ukloniti iz RunCloud-a

Za instalacije poddomena, integracija će automatski obaviti kreiranje poddomena u RunCloud-u kada se dodaju novi saiti u vašu mrežu.

## Rešavanje problema (Troubleshooting) {#troubleshooting}

### Problemi sa konekcijom API-ja {#api-connection-issues}
- Proverite da li su vaši API kredencijali ispravni
- Proverite da li su ID-ji servera i aplikacije ispravni
- Uverite se da vaš RunCloud nalog ima potrebna dozvola

### Problemi sa SSL sertifikatima {#ssl-certificate-issues}
- RunCloud može potrajati neko vreme da izda SSL sertifikate
- Proverite da li vaši domeni pravilno pokazuju na IP adresu vašeg servera
- Proverite podešavanja SSL-a u RunCloud-u za vašu aplikaciju

### Domen nije dodan {#domain-not-added}
- Proverite logove Ultimate Multisite-a na bilo kakve poruke o greškama
- Proverite da li domen već nije dodan u RunCloud
- Uverite se da vaš plan RunCloud podržava više domena
