---
title: Интеграция панели наврасои Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Интеграция с панелью управления Hestia {#hestia-control-panel-integration}

Этот документ объясняет, как настроить интеграцию Ultimate Multisite Hestia так, чтобы домены, привязанные в вашей сети, автоматически добавлялись (и удалялись) как псевдонимы веб-доменов в Hestia.

- Справочник по CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Официальная документация REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Что это делает {#what-it-does}
- Когда домен привязывается в Ultimate Multisite, интеграция вызывает API Hestia для выполнения команды:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Когда привязка домена удаляется, выполняется команда:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- В зависимости от вашей настройки «Автоматическое создание поддомена www» в настройках сопоставления доменов, опционально добавляется/удаляется псевдоним `www.`.

## Предварительные условия {#prerequisites}
- Существующий веб-домен Hestia, который уже указывает на вашу установку WordPress. Интеграция будет прикреплять псевдонимы к этому базовому домену.
- Включенный доступ к API Hestia. Вы можете пройти аутентификацию с помощью пароля или хеша/токена API.

См. документацию REST API Hestia для включения доступа к API и деталей аутентификации:
https://hestiacp.com/docs/server-administration/rest-api.html

## Настройка (Мастер → Интеграции → Hestia) {#configuration-wizard--integrations--hestia}
Предоставьте следующие значения:

- `WU_HESTIA_API_URL` (зарурӣ)
  - Н终и (endpoint) асосии API, одатан `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (зарурӣ)
  - Ҳосиши Hestia, ки барои командаҳои API истифода мешавад (акср `admin`).
- `WU_HESTIA_API_PASSWORD` ё `WU_HESTIA_API_HASH` (ҳатто якҳо)
  - Як усули тасдиқи масоҳатро интихоб кунед: пароль ё API hash/token.
- `WU_HESTIA_ACCOUNT` (зарурӣ)
  - Ҳисоб (муллик) веб-домени дар Hestia; ин аввалин аргументи барои CLI аст.
- `WU_HESTIA_WEB_DOMAIN` (зарурӣ)
  - Домини веб-домини мавҷуда дар Hestia, ки WordPress-и шуморо хизмат мекунад (aliasҳо ин ҷо илова карда мешаванд).
- `WU_HESTIA_RESTART` (икораӣ; тасдиқи воқеаи "бале")
  - Аз рӯи он ки пас аз тағйири aliasҳо, хизматрасоишро қайта овардан/reload кардан лозим аст ё нест.

Шумо метавонед ин константаҳоро ба `wp-config.php` ворид кунед ё онҳоро худатон муайян намоед.

## Тасдиқи сохткардани система {#verifying-setup}
- Дар қадами «Тестир» (Testing) дар wizard, плагин аз API таври `<WU_HESTIA_ACCOUNT>` ба `v-list-web-domains <WU_HESTIA_ACCOUNT> json` даъват мекунад.Ҷавоби муваффақӣ пайвастшавӣ ва тасдиқи масоҳатро тасдиқ мекунад.
- Баъд аз пайваст кардани домен, дар Hestia: Web > домени асосӣ > Aliases (aliasҳо) текшиданро анҷом диҳед. Шумо бояд иловашудаи навро бинед.

## Нотаворуд ва маслиҳатҳо {#notes--tips}
- Ишфоя кунед, ки `WU_HESTIA_WEB_DOMAIN` аллакай мавҷуд аст ва аз ҷониби `WU_HESTIA_ACCOUNT` муллик мебошад.
- Агар SSL лозим бошад, сертификатҳоро дар Hestia идора кунед. Ин интегратсия ҳоло танҳо aliasҳоро идора мекунад.
- Плагин метавонад аз рӯи калиди «www subdomain» (поддомини www) дар Domain Mapping шумо, `www.<domain>`-ро илова ё бартараф намояд.

## Мисоли даъват API (cURL) {#example-api-call-curl}
Қутули мақсадӣ аст (ба муҳити худ тағйир диҳед). Барои параметрҳои аниқ аз домена расмӣ истифода кунед.

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

Барои удаление, используйте `cmd=v-delete-web-domain-alias` и те же аргументы.

## Мониторинг проблем (Troubleshooting) {#troubleshooting}
- Ошибка HTTP от API: проверьте, доступен ли адрес `WU_HESTIA_API_URL` и содержит ли он `/api`.
- Ошибки аутентификации: подтвердите, что переменные `WU_HESTIA_API_USER` и либо `WU_HESTIA_API_PASSWORD`, либо `WU_HESTIA_API_HASH` установлены правильно.
- Сообщения в логах о «отсутствии учетной записи/базового домена»: убедитесь, что переменные `WU_HESTIA_ACCOUNT` и `WU_HESTIA_WEB_DOMAIN` установлены и действительны в Hestia.

## Ссылки {#references}
- REST API Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Справочник Hestia CLI (Псевдонимы): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
