---
title: Hukumat migratsiyasini tasdiqlash
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Монархиявий міграція перевірка

Ultimate Multisite: Multi-Tenancy 1.2.0 включає WP-CLI підтвердження команди для міграцій суверенних орендарів (sovereign tenant migrations). Використовуйте їх, коли міграція орендаря, візит SSO або ізольована установка не працюють так, як очікувалося.

## Команди для запуску {#commands-to-run}

Запустіть перевірку з інсталяції WordPress у мережі:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Використовуйте ID сайту для орендаря, який ви мігруєте. Перша команда перевіряє, що орендар більше не залежить від застарілих даних на стороні мережі. Друга команда підтверджує, що завдання sovereign push можуть оброблятися та зливатися (drain).

## Поширені помилки {#common-failures}

### Доступи до бази даних не збігаються з хостом {#database-grants-do-not-match-the-host}

Якщо перевірка повідомляє про помилки надання прав або користувача запису (writer-user), перевірте налаштований хост бази даних. `localhost`, `127.0.0.1` та ім'я сервісу контейнера — це різні хости MySQL для надання прав. Оновіть прив'язку хоста орендаря або надання прав до бази даних, а потім повторно запустіть перевірку.

### Установки Bedrock або локальні сокети не можуть підключитися {#bedrock-or-local-installs-cannot-connect}

Установки Bedrock та локальних сокетів можуть повідомляти про базу даних як `localhost`, тоді як час виконання підключається через нормалізовану адресу. Версія 1.2.0 нормалізує рядки хостів на одній машині, але користувацькі перевизначення хоста все ще можуть конфліктувати з наданням прав до бази даних.

### Асинхвейна черга push не зливається (drain) {#async-push-queue-does-not-drain}

Якщо `verify-sovereign-push` не завершується, перевірте Action Scheduler або налаштований асинхронний раннер (async runner). Очищайте невдалі завдання лише після підтвердження того, що вони безпечні для повторної спроби або відкидання.

### Кількість користувачів орендаря неправильна {#tenant-user-count-is-wrong}

Міграція повинна створити користувачів для суверенного орендаря. Якщо очікуваний кількість встановлених користувачів відсутня, повторіть крок налаштування користувачів перед повторною спробою SSO.

### Відмова у візиті SSO {#sso-visit-is-rejected}

Stateless kirish (autologin) uchun ta'minot (tenant) domen, origin pin, token maqsadi, nonce va muddati bir-biriga mos kelishi kerak. Tenant URL ning to'g'ri ekanligini tasdiqlang va SSO tashrifini yaratganidan darhol kirishga urinib ko'ring.

## Qachon qayta urinish kerak {#when-to-retry}

Har bir infratuzilma o'zgarishidan keyin tekshiruvni qayta urinib ko'ring. Barcha tekshiruvlar muvaffaqiyatli yakunlanguncha ishlab chiqarish (production) trafikka o'tmaslik, manba ma'lumotlarini o'chirmaslik yoki migratsiya autentifikatsiyalarini olib tashlamaslik kerak.
