---
title: Integracija GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integracija sa GridPane-om {#gridpane-integration}

## Pregled {#overview}
GridPane je specijalizovani kontrolni panel za hosting WordPress koji je napravljen za ozbiljne profesione u WordPressu. Ova integracija omogućava automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite i GridPane-a.

## Karakteristike {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL sertifikatima
- Automatska konfiguracija konstante SUNRISE

## Zahtevi {#requirements}
Slede konstante moraju biti definisane u vašem fajlu `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_ključ');
define('WU_GRIDPANE_SERVER_ID', 'vaš_server_id');
define('WU_GRIDPANE_APP_ID', 'vaš_site_id');
```

## Uputstva za podešavanje {#setup-instructions}

### 1. Dobijte svoje GridPane API kredencijale {#1-get-your-gridpane-api-credentials}

1. Prijavite se na svoj GridPane dashboard
2. Idite na "Settings" (Podešavanja) > "API"
3. Generišite API ključ ako ga još nemate
4. Kopirajte svoj API ključ

### 2. Dobijte svoje Server i Site ID-ove {#2-get-your-server-and-site-ids}

1. U svom GridPane dashboardu, idite na "Servers" (Serveri)
2. Izaberite server gde je hostovan vaš WordPress multisite
3. Zapišite Server ID (vidljiv u URL-u ili na stranici detalja servera)
4. Idite na "Sites" (Sajtovi) i izaberite svoj WordPress sajt
5. Zapišite Site ID (vidljiv u URL-u ili na stranici detalja sajta)

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sledeće konstante u vaš fajl `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_ključ');
define('WU_GRIDPANE_SERVER_ID', 'vaš_server_id');
define('WU_GRIDPANE_APP_ID', 'vaš_site_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U svom WordPress adminu, idite na Ultimate Multisite > Settings (Podešavanja)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do "Host Integrations" (Integracije hostova)
4. Omogućite GridPane integraciju
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

Kada se domen mapira u Ultimate Multisite:

1. Интеграција шаље zahtev API-ju GridPane да дода вам домен на ваш сайт
2. GridPane аутоматски управља dodeljenjem SSL сертификата
3. Када се мапирање домена удали, интеграција ће домен уклонити из GridPane

Интеграција такође аутоматски управља константом SUNRISE у вашим wp-config.php файлу, који је неопходан за исправно функционисање мапирања домена.

## Управљање константом SUNRISE {#sunrise-constant-management}

Једна уникатна карактеристика интеграције GridPane је то што она аутоматски враћа (ревертира) константу SUNRISE у wp-config.php да би спречила сукоб са самим системом мапирања домена GridPane. Ово осигурава да оба система могу rade zajedno без проблема.

## Решавање проблема (Troubleshooting) {#troubleshooting}

### Проблеми са повезањем API-ја {#api-connection-issues}
- Проверите да ли је ваш API ključ тачан
- Проверите да ли су ваші серверски и сайтски ID-о исправни
- Уверите се да ваш GridPane акаунт има потребна овлашћења

### Проблеми са SSL сертификатима {#ssl-certificate-issues}
- GridPane може потрожити неко време за издавање SSL сертификата
- Проверите да ли су вашите домени исправно насочени на IP адресу вашег сервера
- Проверите поставке SSL-а у GridPane за ваш сайт

### Домен није додатан {#domain-not-added}
- Проверите логе Ultimate Multisite за било какве поруке о грешци
- Проверите да домен још није додатан у GridPane
- Уверите се да су DNS записи вашег домена исправно конфигурисани
