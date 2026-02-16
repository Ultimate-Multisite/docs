---
title: Зареєструвати обліковий запис через Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Подія: Реєстрація облікового запису через Zapier

У статті [Інтеграція Ultimate Multisite з Zapier](zapier.md) ми розглянули, як використовувати Zapier для виконання різних дій в Ultimate Multisite на основі тригерів і подій. У цій статті ми покажемо, як інтегрувати сторонні застосунки. Ми використаємо Google Sheets як джерело даних і надішлемо інформацію до Ultimate Multisite для реєстрації облікового запису.

Спочатку потрібно створити **Google Sheet** у вашому Google Drive. Переконайтеся, що ви правильно визначили кожну колонку, щоб потім легко зіставити дані.

![Google Sheet з колонками для даних клієнта](/img/admin/webhooks-list.png)Після створення Google Sheet увійдіть до свого облікового запису Zapier і почніть створювати zap.

![Панель керування Zapier для створення zap](/img/admin/webhooks-list.png)У полі пошуку **"App event"** виберіть **"Google Sheets"**

![Вибір Google Sheets як події застосунку](/img/admin/webhooks-list.png)

Потім у полі "**Event**" виберіть "**New spreadsheet row**" і натисніть "**Continue**"

![Вибір події New spreadsheet row у Zapier](/img/admin/webhooks-list.png)На наступному кроці потрібно вибрати **Google Account**, де збережено **Google Sheet**. Переконайтеся, що вказано правильний обліковий запис Google.

![Вибір Google Account для Google Sheet](/img/admin/webhooks-list.png)

У розділі "**Set up trigger**" потрібно вибрати та вказати таблицю Google і аркуш, звідки надходитимуть дані. Заповніть ці поля та натисніть "**Continue**"

![Налаштування тригера з вибором таблиці та аркуша](/img/admin/webhooks-list.png)Далі потрібно "**test your trigger**", щоб переконатися, що ваш Google Sheet правильно підключено.

![Крок тестування тригера в Zapier](/img/admin/webhooks-list.png)Якщо тест успішний, ви побачите результат із деякими значеннями з вашої таблиці. Натисніть "**Continue**", щоб продовжити.

![Успішний тест тригера, що показує значення з таблиці](/img/admin/webhooks-list.png)Наступний крок — налаштувати другу дію, яка створить або зареєструє обліковий запис в Ultimate Multisite. У полі пошуку виберіть "**Ultimate Multisite(2.0.2)**"

![Вибір Ultimate Multisite як застосунку для дії](/img/admin/webhooks-list.png)

У полі "**Event**" виберіть "**Register an Account in Ultimate Multisite**", а потім натисніть кнопку "**Continue**".

![Подія дії Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)У розділі "**Set up an action**" ви побачите різні поля для даних клієнта, членств, продуктів тощо. Ви можете зіставити значення з вашого Google Sheet і призначити їх відповідним полям, як показано на скріншоті нижче.

![Зіставлення значень Google Sheet з полями Ultimate Multisite](/img/admin/webhooks-list.png)

Після зіставлення значень ви можете протестувати дію.

![Тестування дії реєстрації облікового запису в Zapier](/img/admin/webhooks-list.png)
