---
title: Integracija RunCloud-a
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integracija s RunCloud-om {#runcloud-integration}

## Pregled {#overview}
RunCloud je cloud platform za upravljanje serverima koja vam omogućuje jednostavno postavljanje i upravljanje web aplikacijama na vašim vlastitim cloud serverima. Ova integracija omogućuje automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite-a i RunCloud-a.

## Svojstva {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL sertifikatima
- Uklanjanje domena kada se mape obrišu

## Zahtjevi {#requirements}
Sledeće konstante morate definirati u vašem datoteci `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'vaš_api_ključ');
define('WU_RUNCLOUD_API_SECRET', 'vaša_api_tajna');
define('WU_RUNCLOUD_SERVER_ID', 'vaš_server_id');
define('WU_RUNCLOUD_APP_ID', 'vaš_app_id');
```

## Upute za postavljanje {#setup-instructions}

### 1. Dobavite RunCloud API podatke {#1-get-your-runcloud-api-credentials}

1. Prijavite se na svoj RunCloud dashboard
2. Idite na "User Profile" (kliknite na svoju sliku profila u gornjem desnom kutu)
3. Odaberite "API" iz menija
4. Kliknite na "Generate API Key" ako već nemate jedan
5. Kopirajte svoj API Ključ i API Tajnu

### 2. Dobavite Server ID-ove i App ID-ove {#2-get-your-server-and-app-ids}

1. U svom RunCloud dashboardu, idite na "Servers" (Serveri)
2. Odaberite server gdje je hostiran vaš WordPress multisite
3. Server ID je vidljiv u URL-u: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Idite na "Web Applications" i odaberite svoju WordPress aplikaciju
5. App ID je vidljiv u URL-u: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vaš datoteci `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'vaš_api_ključ');
define('WU_RUNCLOUD_API_SECRET', 'vaša_api_tajna');
define('WU_RUNCLOUD_SERVER_ID', 'vaš_server_id');
define('WU_RUNCLOUD_APP_ID', 'vaš_app_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U Ultimate Multisite adminu, idite na Settings
2. Idite do tab "Domain Mapping" (Mapeiranje domena)
3. Skrolajte prema dolje do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju RunCloud
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi {#how-it-works}

Kada se domen mape u Ultimate Multisite-u:

1. Integracija šalje zahtjev API-ju RunCloud-a kako bi dodala domen u vaše aplikacije
2. Ako je domen uspješno dodan, integracija će također ponovno razvjetovati SSL certifikate
3. Kada se ukloni mape domena, integracija će ukloniti domen iz RunCloud-a

Za instalacije poddomena, integracija će automatski obaviti kreiranje poddomena u RunCloud-u kada se na vašu mrežu dodaju novi siti.

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}
- Provjerite da li su vaši API kredencijali ispravni
- Provjerite da li su ID-ji servera i aplikacije ispravni
- Osigurajte da vaš RunCloud račun ima potrebne dozvole

### Problemi s SSL certifikatima {#ssl-certificate-issues}
- RunCloud može potrajati malo vremena za izdavanje SSL certifikata
- Provjerite da li vaši domeni pravilno pokazuju na IP adresu vašeg servera
- Provjerite postavke SSL-a u RunCloud-u za vaše aplikacije

### Domen ne dodan {#domain-not-added}
- Provjerite Ultimate Multisite logove na bilo kakve poruke o greškama
- Provjerite da li domen već nije dodan u RunCloud-u
- Osigurajte da vaš plan RunCloud podržava više domena
