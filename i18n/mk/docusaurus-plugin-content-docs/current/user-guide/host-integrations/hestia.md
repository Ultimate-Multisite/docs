---
title: Интеграција на Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Интеграција со Hestia Control Panel {#hestia-control-panel-integration}

Овој водич објаснува како да го конфигурирате интеграцијата со Ultimate Multisite Hestia така што мапираните домени во вашата мрежа ќе се додадуваат (и ќе се отстрануваат) како Web Domain Aliases во Hestia.

- Референтна документација за Hestia CLI: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Официјална документација за REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Што прави {#what-it-does}
- Кога домен е мапиран во Ultimate Multisite, интеграцијата повикува Hestia API да изврши:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Кога ќе се отстрани мапирање на домен, таа извршува:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Опционално додавува/отстрануваат алиасот `www.` во зависност од вашата поставка „Auto-create www subdomain“ (Автоматско креирање поддомен www) во поставките за мапирање на домените.

## Предвариви услови {#prerequisites}
- Существувачки Hestia Web Domain кој веќе насочува кон вашата WordPress инсталација. Интеграцијата ќе приложува алиаси на оваа базов домен.
- Овозможен пристап до Hestia API. Можете да се автентифицирате користејќи ја и лозината или API хешото/токен.

За детали за овозможување на пристап до API и автентикација, видите документацијата на Hestia REST API:
https://hestiacp.com/docs/server-administration/rest-api.html

## Конфигурација (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Наведете ги следниве вредности:

`WU_HESTIA_API_URL` (задолжително)
  - Базиран крај на API конекцијата, обично е `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (задолжително)
  - Корисникот Hestia што се користи за команди преку API (често е `admin`).

`WU_HESTIA_API_PASSWORD` или `WU_HESTIA_API_HASH` (најмалку е еден)
  - Изберете една метода на автентикација: лозинка или API хеш/токен.

`WU_HESTIA_ACCOUNT` (задолжително)
  - Сметката (сопственикот) на Web Доминот во Hestia; ова е првиот аргумент за CLI.

`WU_HESTIA_WEB_DOMAIN` (задолжително)
  - Существиот Hestia Web Домен што служи вашиот WordPress (алиасите ќе се приложат тука).

`WU_HESTIA_RESTART` (опционално; поредметко е `yes`)
  - Дали да рестартираме/релаODIраме услугите по промена на алиасите.

Можете да дозволите wizards-от да ги вметне овие константи во `wp-config.php`, или да ги дефинирате рачно.

## Проверка на поставките {#verifying-setup}
- Во Wizard-от „Тестирање“, плагинот повикува `v-list-web-domains <WU_HESTIA_ACCOUNT> json` преку API. Успешно одговорот потврдува коннекцијата и автентикацијата.
- По мапирање на домен, проверете во Hestia: Web > базов домен > Алиаси. Ќе видите новата алиас додадена.

## Белешки и совети {#notes--tips}
- Осигурајте се дека `WU_HESTIA_WEB_DOMAIN` веќе постои и е сопствено на `WU_HESTIA_ACCOUNT`.
- Ако е потребно SSL, управувајте со сертификатите во Hestia. Ова интегрирање в момента ги обработува само алиасите.
- Плагинот може исто така да додаде/отстрани `www.<domain>` во зависност од вашата поставка за мапирање на домен „www subdomain“.

## Пример за API повик (cURL) {#example-api-call-curl}
Подолу е концептуално пример (прилагодете го според вашето окружење). Се викајте на официјалната документација за точни параметри.

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

За бришење, користите `cmd=v-delete-web-domain-alias` и истите аргументи.

## Решавање проблеми (Troubleshooting) {#troubleshooting}
- HTTP грешка од API: проверете дали `WU_HESTIA_API_URL` е достапен и да вклучува `/api`.
- Грешки со автентикација: потврдете дали се правилно зададени `WU_HESTIA_API_USER` и било `WU_HESTIA_API_PASSWORD` или `WU_HESTIA_API_HASH`.
- „Недостасување на аколу/база домен“ во логување: осигурајте се дека `WU_HESTIA_ACCOUNT` и `WU_HESTIA_WEB_DOMAIN` се поставени и валидни во Hestia.

## Референции {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Референци (Алиаси): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
