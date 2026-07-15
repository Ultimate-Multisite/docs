---
title: Зареєструвати Account через Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Подія: реєстрація Account через Zapier

У статті [Інтеграція Ultimate Multisite із Zapier](zapier.md) ми обговорили, як використовувати Zapier для виконання різних дій в Ultimate Multisite на основі тригерів і подій. У цій статті ми покажемо, як можна інтегрувати сторонні застосунки. Ми використаємо Google Sheets як джерело даних і надішлемо інформацію до Ultimate Multisite, щоб зареєструвати Account.

Перед підключенням Zapier перейдіть до **Ultimate Multisite > Settings > API & Webhooks** і підтвердьте, що API увімкнено. Скопіюйте API Key та API Secret із цього екрана, коли Zapier запитає облікові дані Ultimate Multisite Account.

![Налаштування API та Webhooks з API Key, API Secret і параметрами Enable API](/img/admin/settings-api-webhooks.png)

Спочатку потрібно створити **Google Sheet** у вашому Google Drive. Переконайтеся, що ви правильно визначили кожен стовпець, щоб згодом легко зіставити дані.

Після створення Google sheet ви можете увійти до свого облікового запису Zapier і почати створювати zap.

Під полем пошуку для **"App event"** виберіть **"Google Sheets"**


Потім для поля "**Event** " виберіть "**New spreadsheet row** " і натисніть "**Continue** "

На наступному кроці вас попросять вибрати **Google Account**, де збережено **Google Sheet**. Тож просто переконайтеся, що вказано правильний google account.


У розділі **"Set up trigger** " потрібно вибрати та вказати google spreadsheet і worksheet, які ви використовуватимете і звідки надходитимуть дані. Просто заповніть ці поля й натисніть "**Continue** "

Далі потрібно "**test your trigger** ", щоб переконатися, що ваш google sheet правильно підключено.

Якщо тест успішний, ви побачите результат із деякими значеннями з ваших spreadsheets. Натисніть "**Continue** ", щоб продовжити.

Наступний крок — налаштувати другу дію, яка створить або зареєструє Account в Ultimate Multisite. У полі пошуку виберіть "**Ultimate Multisite(2.0.2)** "


У полі "**Event** " виберіть "**Register an Account in Ultimate Multisite** ", а потім натисніть кнопку "**Continue** ".

У розділі "**Set up an action** " ви побачите різні поля, доступні для даних клієнта, memberships, products тощо. Ви можете зіставити значення з вашого google sheet і призначити їх відповідному полю, де вони мають бути заповнені, як показано на знімку екрана нижче.


Після зіставлення значень ви можете протестувати дію.
