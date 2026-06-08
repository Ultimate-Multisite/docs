---
title: Интеграция с Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Интеграция с Hestia Control Panel

Този ръкодел обяснява как да конфигурирате интеграцията Ultimate Multisite Hestia, така че мапираните домейни в вашата мрежа автоматично да се добавят (и премахват) като Web Domain Aliases в Hestia.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Какво прави
- Когато домейнът бъде мапиран в Ultimate Multisite, интеграцията извиква Hestia API, за да изпълни:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Когато мапирането на домейн бъде премахнато, той изпълнява:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- По избор добавя/премахва псевдонима `www.`, в зависимост от настройката „Auto-create www subdomain“ в настройките на Domain Mapping.

## Предварителни изисквания
- Съществуващ Hestia Web Domain, който вече сочи към вашата WordPress инсталация. Интеграцията ще добавя псевдоними към този основен домейн.
- Включен достъп до Hestia API. Можете да се автентикирате, използвайки парола или API hash/token.

Вижте документацията на Hestia REST API за включване на API достъпа и детайли за автентикация:
https://hestiacp.com/docs/server-administration/rest-api.html

## Конфигурация (Wizard → Integrations → Hestia)
Подайте следните стойности:

- `WU_HESTIA_API_URL` (задължително)
  - Базовият API endpoint, обикновено `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (задължително)
  - Потребител на Hestia, използван за API команди (често `admin`).
- `WU_HESTIA_API_PASSWORD` или `WU_HESTIA_API_HASH` (поне едно)
  - Изберете метод за автентикация: парола или API hash/token.
- `WU_HESTIA_ACCOUNT` (задължително)
  - Акаунтът (собственик) на Web Domain в Hestia; това е първият аргумент за CLI.
- `WU_HESTIA_WEB_DOMAIN` (задължително)
  - Съществуващият Hestia Web Domain, който предоставя WordPress (псевдонимите ще бъдат добавени тук).
- `WU_HESTIA_RESTART` (по избор; по подразбиране `yes`)
  - Дали е необходимо презареждане/рестартиране на услугите след промяна на псевдонимите.

Можете да позволите на асистента да инжектира тези константи в `wp-config.php` или да ги дефинирате ръчно.

## Проверка на настройката
- В стъпката „Testing“ на асистента, плагинът извиква `v-list-web-domains <WU_HESTIA_ACCOUNT> json` чрез API. Успешното съобщение потвърждава свързаността и автентикацията.
- След мапиране на домейн, проверете в Hestia: Web > основният домейн > Aliases. Трябва да видите добавен новия псевдоним.

## Бележки и съвети
- Уверете се, че `WU_HESTIA_WEB_DOMAIN` вече съществува и е собственост на `WU_HESTIA_ACCOUNT`.
- Ако е необходим SSL, управлявайте сертификатите в Hestia. Тази интеграция в момента обработва само псевдоними.
- Плагинът може също да добавя/премахва `www.<domain>`, в зависимост от настройката „www subdomain“ в Domain Mapping.

## Примерна API заявка (cURL)
Подолу е концептуален пример (пренастройте за вашата среда). За точните параметри се консултирайте с официалната документация.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

За изтриване, използвайте `cmd=v-delete-web-domain-alias` и същите аргументи.

## Отстраняване на неизправности
- HTTP грешка от API: проверете дали `WU_HESTIA_API_URL` е достъпен и включва `/api`.
- Грешки при автентикация: потвърдете `WU_HESTIA_API_USER` и или `WU_HESTIA_API_PASSWORD`, или `WU_HESTIA_API_HASH`.
- „Липсващ акаунт/основен домейн“ в лог файловете: уверете се, че `WU_HESTIA_ACCOUNT` и `WU_HESTIA_WEB_DOMAIN` са зададени и валидни в Hestia.

## Референции
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
