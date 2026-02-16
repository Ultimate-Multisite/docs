---
title: Зареєструвати кінцеву точку API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# API-ендпоінт /register в Ultimate Multisite

У цьому посібнику ви дізнаєтесь, як використовувати API-ендпоінт /register в Ultimate Multisite для створення повного процесу реєстрації нового клієнта у вашій мережі, а також як це зробити за допомогою Zapier.

Ендпоінт використовує метод POST і викликається за URL-адресою _**https://yoursite.com/wp-json/wu/v2/register**_. Під час цього запиту у вашій мережі виконуються 4 процеси:

  * Створюється новий користувач WordPress або відбувається його ідентифікація за ID користувача.

  * Створюється новий клієнт в Ultimate Multisite або відбувається його ідентифікація за ID клієнта.

  * Створюється новий сайт у мережі WordPress.

  * Наприкінці створюється нова підписка в Ultimate Multisite.

Для цього процесу вам знадобляться API-облікові дані. Щоб їх отримати, перейдіть до панелі адміністратора мережі, відкрийте **Ultimate Multisite > Settings** > **API & Webhooks** і знайдіть розділ API Settings.

![Розділ API Settings в Ultimate Multisite](/img/config/settings-api.png)  
Увімкніть опцію **Enable API** та отримайте свої API-облікові дані.

Тепер розгляньмо ендпоінт, а потім створимо дію реєстрації в Zapier.

## Параметри тіла запиту

Розгляньмо мінімум інформації, яку потрібно надіслати до ендпоінта. Наприкінці цієї статті ви знайдете повний запит.

### Клієнт

Це інформація, необхідна для створення користувача та клієнта Ultimate Multisite:

"customer_id" : integer

Можна надіслати ID клієнта, створеного у вашій мережі. Якщо його не вказано, наведена нижче інформація буде використана для створення нового клієнта та нового користувача WordPress. ID користувача також можна надіслати так само, як і ID клієнта.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Підписка**

Єдина інформація, яка нам потрібна в цьому об'єкті — це статус підписки.

"membership" { "status" : "string", // одне з: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Продукти**

Продукти передаються як масив з одним або кількома ID продуктів із вашої мережі. Зверніть увагу: цей ендпоінт не створює продукти. Ознайомтесь із документацією Ultimate Multisite, щоб краще зрозуміти ендпоінт створення продуктів.

**"products" : [1,2],**

### Платіж

Як і для підписки, нам потрібен лише статус.

**"payment" { "status" : "string", // одне з: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Сайт

І на завершення тіла запиту нам потрібні URL та назва сайту — обидва всередині об'єкта Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

У відповідь ендпоінт register поверне масив з інформацією про новостворену підписку.

## Створення дії в Zapier

Завдяки цьому новому та більш функціональному ендпоінту створення облікових записів ви також отримуєте доступ до нової дії в Zapier.

Чи знаєте ви, як користуватися та отримати максимум від нової версії Zapier? Дізнайтесь більше тут. (link?)

### Створення дії

Щоб краще проілюструвати використання ендпоінта реєстрації з Zapier, створімо інтеграцію з Google Forms. Щоразу, коли ця форма заповнюється і дані зберігаються в таблиці відповідей, у мережі Ultimate Multisite створюватиметься нова підписка.

У Google Forms створіть форму з мінімальними полями, необхідними для створення нової підписки в мережі.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Тепер у Zapier створіть новий Zap і підключіть створену форму Google через таблицю, де зберігаються дані.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Готово! Форма Google Forms підключена до Zapier і готова до інтеграції з мережею. Тепер перейдімо до дії (Action), яка виконуватиметься у відповідь на тригер (Trigger), що спрацьовує щоразу при заповненні Google Forms.

Знайдіть новий застосунок Ultimate Multisite і виберіть його. Для цього типу Zap оберіть опцію Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Після цього першого кроку виберіть обліковий запис, який буде підключено до цього Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Це найважливіша частина всього процесу. Нам потрібно зіставити поля з Google Forms із мінімальними полями, необхідними для ендпоінта register, як показано в попередньому розділі цієї статті.

У цьому прикладі нам потрібно налаштувати лише ім'я користувача, email, пароль, назву та URL сайту. Решта залишається попередньо визначеною, щоб усі підписки, створені через цю форму Google Forms, відповідали однаковому шаблону продукту та статусу.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Після налаштування інформації переходьте до фінального тестування. На останньому екрані ви побачите всі поля, що будуть надіслані до ендпоінта, їхні відповідні значення та поля, які будуть надіслані порожніми.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Протестуйте ваш новий Zap — він має успішно завершитися. Якщо виникне помилка, перевірте всі поля та чи правильно вони надсилаються. Оскільки інформації багато, деякі речі можуть залишитися непоміченими.

### Повний перелік параметрів ендпоінта

Ось повний запит і всі можливі поля, які можна надіслати.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // одне з: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // одне з: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
