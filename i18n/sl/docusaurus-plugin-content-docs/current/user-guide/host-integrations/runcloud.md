---
title: Integracija RunClouda
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integracija z RunCloudom

## Pregled {#overview}
RunCloud je bulutna platforma za upravljanje serverji ki vam omogoča enostavno namestitev in upravljanje spletnih aplikacij na vaših lastnih bulutnih serverjih. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in RunCloudom.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domena
- Upravljanje SSL sertifikatov
- Odstranitev domena ob so se spremembe povezav (mappings) odstranijo

## Zahtevi {#requirements}
Slede konstante morate definirati v svojem datoteki `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'vaša_api_ključa');
define('WU_RUNCLOUD_API_SECRET', 'vaš_api_tajni');
define('WU_RUNCLOUD_SERVER_ID', 'vaš_server_id');
define('WU_RUNCLOUD_APP_ID', 'vaš_app_id');
```

## Navodila za nastavitve {#setup-instructions}

### 1. Dobite svoje RunCloud API podatke {#1-get-your-runcloud-api-credentials}
1. Prikažite se na svojem RunCloud dashboardu.
2. Pojdite na "User Profile" (kliknite na svoj profilni sliko v zgornji desni kot)
3. Izberite "API" iz menija
4. Kliknite na "Generate API Key", če ga še ni, ali pač.
5. Kopirajte svoj API Key in API Secret.

### 2. Dobite svoje ID serverja in aplikacije {#2-get-your-server-and-app-ids}
1. Na svojem RunCloud dashboardu pojdi na "Servers".
2. Izberite server, kjer je hostiran vaš WordPress multisite.
3. Server ID je vidno v URL-ju: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pojdite na "Web Applications" in izberite svojo WordPress aplikacijo.
5. App ID je vidno v URL-ju: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Dodajte konstante v wp-config.php {#3-add-constants-to-wp-configphp}
Dodajte slede konstante v svojo datoteko `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'vaša_api_ključa');
define('WU_RUNCLOUD_API_SECRET', 'vaš_api_tajni');
define('WU_RUNCLOUD_SERVER_ID', 'vaš_server_id');
define('WU_RUNCLOUD_APP_ID', 'vaš_app_id');
```

### 4. Omogočite integracijo {#4-enable-the-integration}

1. V administraciji WordPressa, grejte na Ultimate Multisite > Settings (Nastavitve)
2. Navigirajte na tab "Domain Mapping" (Mapiranje domen).
3. Prelijevajte dolje do "Host Integrations" (Integracije hostov).
4. Omogočite integracijo RunCloud.
5. Kliknite na "Save Changes" (Shrani spremembe).

## Kako to deluje {#how-it-works}

Ko je domen mapiran v Ultimate Multisite:

1. Integracija pošlje zahtevo API-ju RunCloudu, da dodate domen v svojo aplikacijo.
2. Če se domen uspešno doda, integracija bo tudi ponovno razpostavila SSL certifikate.
3. Ko odstranite mapiranje domena, integracija bo domen odstranila iz RunClouda.

Za instalacije poddomene, integracija bo sam upravljala z uporabo poddomen v RunCloudu ob dodajan novih strani na vašo mrežo.

## Reševanje težav (Troubleshooting) {#troubleshooting}

### Problemi s povezavo API-ja {#api-connection-issues}
- Preverite da so vaša API podatki pravilni.
- Preverite da sta vaše server in app ID pravilna.
- Upe asegurarse, da ima vaš RunCloud račun potrebna dovoljenja.

### Problemi z SSL certifikati {#ssl-certificate-issues}
- RunCloud lahko potrebuje nekaj časa za izdajo SSL certifikatov.
- Preverite da so vaši domeni pravilno usmerjeni na IP naslov vaše serverja.
- Preverite nastavitve SSL v RunCloudu za vašo aplikacijo.

### Domen ni dodan {#domain-not-added}
- Preverite logove Ultimate Multisite na kakršne koli napake.
- Upe asegurarse, da domen ni že dodan v RunCloud.
- Upe asegurarse, da vaš RunCloud paket podpira več domen.
