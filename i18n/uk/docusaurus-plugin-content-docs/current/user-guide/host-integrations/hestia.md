---
title: Інтеграція з панеллю керування Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Інтеграція з панеллю керування Hestia

Цей посібник пояснює, як налаштувати інтеграцію Ultimate Multisite з Hestia, щоб прив'язані домени у вашій мережі автоматично додавалися (і видалялися) як Web Domain Aliases у Hestia.

- Довідник Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Офіційна документація REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Що робить ця інтеграція
- Коли домен прив'язується в Ultimate Multisite, інтеграція викликає Hestia API для виконання:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Коли прив'язку домену видаляють, виконується:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- За бажанням додає/видаляє аліас `www.` залежно від налаштування "Auto-create www subdomain" у параметрах Domain Mapping.

## Передумови
- Наявний Hestia Web Domain, який уже вказує на вашу інсталяцію WordPress. Інтеграція прикріплюватиме аліаси до цього базового домену.
- Увімкнений доступ до Hestia API. Для автентифікації можна використовувати пароль або API hash/token.

Детальніше про увімкнення доступу до API та автентифікацію читайте в документації Hestia REST API:
https://hestiacp.com/docs/server-administration/rest-api.html

## Налаштування (Wizard → Integrations → Hestia)
Вкажіть такі значення:

- `WU_HESTIA_API_URL` (обов'язково)
  - Базова адреса API, зазвичай `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (обов'язково)
  - Користувач Hestia для API-команд (часто `admin`).
- `WU_HESTIA_API_PASSWORD` або `WU_HESTIA_API_HASH` (хоча б одне)
  - Оберіть один метод автентифікації: пароль або API hash/token.
- `WU_HESTIA_ACCOUNT` (обов'язково)
  - Обліковий запис (власник) Web Domain у Hestia; це перший аргумент для CLI.
- `WU_HESTIA_WEB_DOMAIN` (обов'язково)
  - Наявний Hestia Web Domain, який обслуговує ваш WordPress (аліаси прикріплюватимуться до нього).
- `WU_HESTIA_RESTART` (необов'язково; за замовчуванням `yes`)
  - Чи перезапускати/перезавантажувати служби після зміни аліасів.

Ви можете дозволити майстру додати ці константи у `wp-config.php` або визначити їх вручну.

## Перевірка налаштувань
- На кроці "Testing" у майстрі плагін викликає `v-list-web-domains <WU_HESTIA_ACCOUNT> json` через API. Успішна відповідь підтверджує з'єднання та автентифікацію.
- Після прив'язки домену перевірте в Hestia: Web > базовий домен > Aliases. Ви маєте побачити новий доданий аліас.

## Примітки та поради
- Переконайтеся, що `WU_HESTIA_WEB_DOMAIN` вже існує і належить `WU_HESTIA_ACCOUNT`.
- Якщо потрібен SSL, керуйте сертифікатами в Hestia. Ця інтеграція наразі працює лише з аліасами.
- Плагін також може додавати/видаляти `www.<domain>` залежно від налаштування "www subdomain" у Domain Mapping.

## Приклад API-запиту (cURL)
Нижче наведено концептуальний приклад (адаптуйте до вашого середовища). Точні параметри дивіться в офіційній документації.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (або &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (аліас для додавання)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Для видалення використовуйте `cmd=v-delete-web-domain-alias` з тими самими аргументами.

## Усунення несправностей
- HTTP-помилка від API: перевірте, чи `WU_HESTIA_API_URL` доступний і містить `/api`.
- Помилки автентифікації: переконайтеся, що `WU_HESTIA_API_USER` та `WU_HESTIA_API_PASSWORD` або `WU_HESTIA_API_HASH` вказані правильно.
- "Missing account/base domain" у логах: переконайтеся, що `WU_HESTIA_ACCOUNT` та `WU_HESTIA_WEB_DOMAIN` задані й дійсні в Hestia.

## Посилання
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Довідник Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
