---
title: Интеграция панели управления Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Интеграция панели управления Hestia

Это руководство объясняет, как настроить интеграцию Ultimate Multisite с Hestia, чтобы сопоставленные домены в вашей сети автоматически добавлялись (и удалялись) в качестве псевдонимов веб‑доменов в Hestia.

- Справка по CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Официальная документация REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Что это делает

- Когда домен сопоставлен в Ultimate Multisite, интеграция вызывает API Hestia для выполнения:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Когда сопоставление домена удалено, выполняется:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- При желании добавляет/удаляет псевдоним `www.` в зависимости от вашего параметра «Автоматически создавать поддомен www» в настройках сопоставления доменов.

## Предварительные требования

- Существующий веб‑домен Hestia, который уже указывает на вашу установку WordPress. Интеграция будет прикреплять псевдонимы к этому базовому домену.
- Включен доступ к API Hestia. Вы можете аутентифицироваться, используя пароль или хэш/токен API.

Смотрите документацию REST API Hestia для включения доступа к API и деталей аутентификации:
https://hestiacp.com/docs/server-administration/rest-api.html

## Конфигурация (Мастер → Интеграции → Hestia)

Укажите следующие значения:

- `WU_HESTIA_API_URL` (обязательно)
  - Базовый конечный пункт API, обычно `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (обязательно)
  - Пользователь Hestia, используемый для команд API (часто `admin`).
- `WU_HESTIA_API_PASSWORD` или `WU_HESTIA_API_HASH` (не менее одного)
  - Выберите один метод аутентификации: пароль или хэш/токен API.
- `WU_HESTIA_ACCOUNT` (обязательно)
  - Учётная запись (владелец) веб‑домена в Hestia; это первый аргумент CLI.
- `WU_HESTIA_WEB_DOMAIN` (обязательно)
  - Существующий веб‑домен Hestia, обслуживающий ваш WordPress (псевдонимы будут прикреплены сюда).
- `WU_HESTIA_RESTART` (необязательно; по умолчанию `yes`)
  - Нужно ли перезапускать/перезагружать службы после изменений псевдонимов.

Вы можете позволить мастеру внедрить эти константы в `wp-config.php` или определить их вручную.

## Проверка настройки

- В шаге «Тестирование» мастера плагин вызывает `v-list-web-domains <WU_HESTIA_ACCOUNT> json` через API. Успешный ответ подтверждает подключение и аутентификацию.
- После сопоставления домена проверьте в Hestia: Web > базовый домен > Aliases. Вы должны увидеть добавленный новый псевдоним.

## Заметки и советы

- Убедитесь, что `WU_HESTIA_WEB_DOMAIN` уже существует и принадлежит `WU_HESTIA_ACCOUNT`.
- Если требуется SSL, управляйте сертификатами в Hestia. Эта интеграция в настоящее время обрабатывает только псевдонимы.
- Плагин также может добавлять/удалять `www.<domain>` в зависимости от вашего параметра «www поддомен» в настройках сопоставления доменов.

## Пример вызова API (cURL)

Ниже приведен концептуальный пример (адаптируйте под вашу среду). Обратитесь к официальной документации для точных параметров.

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

Для удаления используйте `cmd=v-delete-web-domain-alias` и те же аргументы.

## Устранение неполадок

- Ошибка HTTP от API: проверьте, что `WU_HESTIA_API_URL` доступен и включает `/api`.
- Ошибки аутентификации: подтвердите `WU_HESTIA_API_USER` и либо `WU_HESTIA_API_PASSWORD`, либо `WU_HESTIA_API_HASH`.
- «Отсутствует учётная запись/базовый домен» в журналах: убедитесь, что `WU_HESTIA_ACCOUNT` и `WU_HESTIA_WEB_DOMAIN` заданы и действительны в Hestia.

## Ссылки

- REST API Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Справка по CLI Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
