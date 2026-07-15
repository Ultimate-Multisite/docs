---
title: Integracija ServerPilot-a
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integracija sa ServerPilotom

## Pregled {#overview}
ServerPilot je cloud usluga za hostovanje WordPress i drugih PHP veb-sajtova na serverima DigitalOcean, Amazonu, Google ili bilo kojem drugom dobavljaču. Ova integracija omogućava automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite i ServerPilot-a.

## Karakteristike {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL sertifikatom pomoću Let's Encrypt-a
- Automatsko obnavljanje SSL sertifikata

## Zahtevi {#requirements}
Slede konstante morate definisati u vašem fajlu `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'vaš_client_id');
define('WU_SERVER_PILOT_API_KEY', 'vaš_api_key');
define('WU_SERVER_PILOT_APP_ID', 'vaš_app_id');
```

## Uputstva za podešavanje {#setup-instructions}

### 1. Dobijte ServerPilot API kredencijale {#1-get-your-serverpilot-api-credentials}

1. Prijavite se na svoj ServerPilot dashboard
2. Idite na "Account" > "API" (Račun > API)
3. Kreirajte novi API ključ ako ga još nemate
4. Kopirajte svoj Client ID i API Key

### 2. Dobijte App ID {#2-get-your-app-id}

1. U svom ServerPilot dashboard-u, idite na "Apps" (Aplikacije)
2. Izaberite aplikaciju u kojoj je hostovan vaš WordPress multisite
3. App ID je vidljiv u URL-u: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sledeće konstante u svoj fajl `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'vaš_client_id');
define('WU_SERVER_PILOT_API_KEY', 'vaš_api_key');
define('WU_SERVER_PILOT_APP_ID', 'vaš_app_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U svom WordPress admin panelu, idite na Ultimate Multisite > Settings (Ultimate Multisite > Podešavanja)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do sekcije "Host Integrations" (Integracije hostova)
4. Omogućite ServerPilot integraciju
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite:

1. Интеграција преузима тренутни список домена са ServerPilot-а
2. Додава нови домен у список (заједно са верзијом са www ако је применимо)
3. Пошаље ажурирани список на ServerPilot через API
4. ServerPilot ажурира список домена за вашу апликацију

### Управљање SSL сертификатима {#ssl-certificate-management}

Након што су домени синхронизовани:

1. Интеграција аутоматски уključuje AutoSSL за вашу апликацију
2. ServerPilot брише и инсталира SSL сертификат користећи Let's Encrypt
3. ServerPilot такође управља аутоматском обновима SSL сертификата

## Провера валидности SSL сертификата {#ssl-certificate-verification}

Интеграција је подељена да повећа број провера валидности SSL сертификата за ServerPilot, јер може време да траје издавање и инсталација SSL сертификата од стране ServerPilot-а. По стандарду покушаће до 5 пута, али то се може прилагодити коришћењем филтера.

## Решавање проблема (Troubleshooting) {#troubleshooting}

### Проблеми са повезањем API-ја {#api-connection-issues}
- Проверите да ли су ваш Client ID и API Key исправни
- Проверите да ли је ваш App ID исправан
- Уверите се да ваш ServerPilot акаунт има потребне дозволе

### Проблеми са SSL сертификатима {#ssl-certificate-issues}
- ServerPilot захтева да домени имају валидне DNS записи који указују на ваш сервер пре него што издаје SSL сертификате
- Ако не се издају SSL сертификати, проверите да вашите домени исправно указују на IP адресу вашег сервера
- Може време да траје за током издавања и инсталације SSL сертификата од стране ServerPilot-а (obiчно 5-15 минута)

### Домен није додатан {#domain-not-added}
- Проверите логи Ultimate Multisite на предмет било каквих порука о грешци
- Проверите да домен још није додатан у ServerPilot
- Уверите се да ваш ServerPilot план подржава број домена које додајете

### Uklanjanje domena {#domain-removal}
- Trenutno, ServerPilot API ne nudi način za uklanjanje pojedinačnih domena.
- Kada se mape domena obrišu u Ultimate Multisite-u, integracija će ažurirati list domena u ServerPilot kako bi isključila uklonjeni domen.
