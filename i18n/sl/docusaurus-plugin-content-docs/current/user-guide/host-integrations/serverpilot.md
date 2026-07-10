---
title: Integracija ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integracija z ServerPilotom {#serverpilot-integration}

## Povzetek {#overview}
ServerPilot je cloud storitev za hostiranje WordPressa in drugih PHP spletnih strani na serverjih DigitalOcean, Amazon, Google ali katerem koli drugem dostavalcem. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in ServerPilotom.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domena
- Upravljanje SSL sertifikatov z Let's Encryptom
- Avtomatizno obnovo SSL sertifikata

## Zahtevi {#requirements}
Slede konstante morate definirati v svojem datoteki `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'vaš_client_id');
define('WU_SERVER_PILOT_API_KEY', 'vaš_api_key');
define('WU_SERVER_PILOT_APP_ID', 'vaš_app_id');
```

## Navodila za nastavitve {#setup-instructions}

### 1. Dobite svoje ServerPilot API podatke {#1-get-your-serverpilot-api-credentials}
1. Prikažite se na svojem ServerPilot dashboardu
2. Pojdite na "Account" > "API" (Račun > API)
3. Ustvarite novo API ključa, če ga še ni
4. Kopirajte svoj Client ID in API Key

### 2. Dobite svoj App ID {#2-get-your-app-id}
1. Na svojem ServerPilot dashboardu pojdi na "Apps" (Aplikacije)
2. Izberite aplikacijo, kjer je hostiran vaš WordPress multisite
3. App ID je vidno v URL-ih: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Dodajte konstante v wp-config.php {#3-add-constants-to-wp-configphp}
Dodajte slede konstante v datoteko `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'vaš_client_id');
define('WU_SERVER_PILOT_API_KEY', 'vaš_api_key');
define('WU_SERVER_PILOT_APP_ID', 'vaš_app_id');
```

### 4. Omogočite integracijo {#4-enable-the-integration}
1. V svojem WordPress adminu pojdi na Ultimate Multisite > Settings (Nastavitve)
2. Navigirajte do tabe "Domain Mapping" (Mapiranje domen).
3. Prejdi dolje do "Host Integrations" (Integracije hostov).
4. Omogočite integracijo ServerPilot.
5. Kliknite na "Save Changes" (Shrani spremembe).

## Kako to deluje {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Ko je domen mapiran v Ultimate Multisite:

Integracija povzroči da se trenutna lista domen iz ServerPilot sistema preneseta.
Dodaje nov domen na listu (skupaj z vsem verzijo s www, če je to primerno).
Obnovi seznam podatkov pošlje ServerPilot sistemu preko API-ja.
ServerPilot sistem obnavlja seznam domen za vašo aplikacijo.

### Upravljanje SSL sertifikatov {#ssl-certificate-management}

Po sinhronizaciji domen:

1. Integracija samodejno vklopi AutoSSL za vašo aplikacijo.
2. ServerPilot sistem upravlja izdajanjem in instalacijo SSL sertifikatov z uporabo Let's Encrypt.
3. ServerPilot sistem obravnava tudi avtomobno obnovitev SSL sertifikatov.

## Preverjanje SSL sertifikata {#ssl-certificate-verification}

Integracija je konfigurirana tako, da poveča število poskusov za preverjanje SSL sertifikatov za ServerPilot, ker lahko ServerPilot potrebuje nekaj časa za izdajo in instalacijo SSL sertifikatov. Po podrazmerju poskuša do 5 krat, vendar se to lahko prilagodi z uporabo filterjev.

## Reševanje težav {#troubleshooting}

### Problemi z povezavo na API {#api-connection-issues}
- Preverite da so vaš Client ID in API Key pravilni.
- Preverite, da je vaš App ID pravilno nastavljen.
- Upe asegurarse, da ima vaš ServerPilot račun potrebna dovoljenja.

### Problemi z SSL sertifikati {#ssl-certificate-issues}
- ServerPilot zahteva, da domene imajo validne DNS podatke, ki kažejo na vaš server pred izdajo SSL sertifikatov.
- Če se SSL sertifikati ne izvajajo, preverite, da vaše domene pravilno kažejo na IP naslov vašega serverja.
- ServerPilot sistem lahko potrebuje nekaj časa za izdajo in instalacijo SSL sertifikatov (običajno 5-15 minut).

### Domen ni dodan {#domain-not-added}
- Preverite logove Ultimate Multisite za kakršne koli napake.
- Upe asegurarse, da domena ni že dodano na ServerPilot sistem.
- Upe asegurarse, da vaš ServerPilot plan podpira število domen, ki ga dodajate.

### Odstranitev domena {#domain-removal}
- Trenutno ne omogoča ServerPilot API odstranjevanje pojedznih domen.
- Ko se v Ultimate Multisite odstrani mape domena, integracija posodoblji seznam domen v ServerPilot tako, da izključi odstranjen domen.
