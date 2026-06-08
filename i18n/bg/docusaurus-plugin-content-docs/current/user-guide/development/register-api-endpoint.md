---
title: Регистриране на API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API крайният адрес за регистрация на Ultimate Multisite

В този урок ще научите как да използвате API ендпойнт-а Ultimate Multisite /register, за да създадете цялостния процес на бординг (onboarding) за нов клиент в вашата мрежа и как да го направите с Zapier.

Ендпойнтът използва POST метод и се извиква чрез URL-то **https://yoursite.com/wp-json/wu/v2/register**. При този извикване ще бъдат изпълнени 4 процеса в рамките на вашата мрежа:

*   Ще бъде създаден нов потребител на WordPress или той ще бъде идентифициран чрез потребителския му ID.
*   Ще бъде създаден нов Клиент в Ultimate Multisite или той ще бъде идентифициран чрез клиентския му ID.
*   Ще бъде създаден нов сайт в мрежата на WordPress.
*   В крайна сметка, ще бъде създадена нова Членска карта (Membership) в Ultimate Multisite.

За този процес ще ви трябват вашите API данни за удостоверяване (credentials). За да ги получите, отидете в панела за управление на мрежата си, превъртете се в **Ultimate Multisite > Settings** > **API & Webhooks** и потърсете секцията API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ето пълно изглед на страницата за настройки на API:

![API settings full page](/img/config/settings-api-full.png)

Изберете **Enable API** и получете вашите API данни за удостоверяване.

Сега нека разгледаме ендпойнт-а и след това създадем действие в Zapier.

## Параметри на тялото на ендпойнт-а

Нека направим преглед на минималната информация, която трябва да изпратим към ендпойнт-а. В края на този материал ще намерите пълния извикване.

### Customer (Клиент)

Това е информацията, необходима за процеса на създаване на Потребителя и Клиента в Ultimate Multisite:

"customer_id" : integer

Естествено е възможно да изпратите клиентския ID, създаден в вашата мрежа. Ако не бъде предоставен, информацията по-долу ще бъде използвана за създаване на нов клиент и нов потребител на WordPress. Потребителският ID също може да бъде изпратен по същия начин като клиентския ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership (Членска карта)**

Единствената информация, която ни е нужна в този обект, е Статусът на членската карта.

"membership" { "status" : "string", // един от "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products (Продукти)**

Продуктите се подават като масив с 1 или повече Product ID от вашата мрежа. Внимание: този ендпойнт не създава продукти. Проверете документацията на Ultimate Multisite, за да разберете по-добре ендпойнт-а за създаване на продукти.

**"products" : [1,2],**

### Payment (Плащане)

Подобно на Membership, ни е нужен само статусът.

**"payment" { "status" : "string", // един от "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site (Сайт)

И за да затворим тялото, ни е необходим URL и Заглавие на сайта, и двете са вътре в обекта Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Връщането от ендпойнт-а за регистрация ще бъде масив с информация за новосъздадената членска карта.

## Създаване на действие в Zapier

С въвеждането на този нов и по-силен ендпойнт за създаване на профили, ви също ще бъде достъпно ново действие в Zapier.

Знаете ли как да използвате и да се насладите на всичко, което предлага новата версия на Zapier? Научете повече тук. (link?)

### Създаване на действие

За да илюстрираме по-добре как да използваме ендпойнт-а за регистрация с Zapier, нека създадем интеграция с Google Forms. Всеки път, когато този формуляр бъде попълнен и информацията бъде запазена в листа с отговори на формуляра, ще бъде създадена нова членска карта в мрежата на Ultimate Multisite.

В Google Forms създайте формуляр с минималните полета, необходими за създаване на нова членска карта в мрежата.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Сега в Zapier създайте нов Zap и свържете създадения формуляр в Google чрез електронната таблица, където се запазва данните.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Готово! Формулярът в Google Forms е свързан с Zapier и е готов за интеграция с мрежата. Сега нека преминем към Действието (Action), което ще бъде резултат от Тригера (Trigger), който Google Forms активира всеки път, когато бъде попълнен.

Намерете новия акаунт Ultimate Multisite и го изберете. За този тип Zap изберете опцията Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

След този първи стъпка, изберете акаунта, който ще бъде свързан с този Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Това е най-чувствителната част от целия процес. Трябва да съпоставим полетата, идващи от Google Forms, с минималните полета, необходими за ендпойнт-а за регистрация, както е показано в предишната секция на този материал.

В този пример, ни е нужно само да конфигурираме потребителското име, имейла, паролата, името и URL-адресата на уебсайта. Останалата информация е зададена предварително, така че всички членски карти, генерирани с този Google Forms, да следват един и същ модел на продукти и статус.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

С настроената информация, продължете към финалното тестване. На последния екран можете да видите всички полета, които ще бъдат изпратени към ендпойнт-а, техните съответни данни и полетата, които ще бъдат изпратени празни.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Тествайте вашия нов Zap и той трябва да приключи успешно. Ако възникне грешка, проверете всички полета и дали те се изпращат правилно. Тъй като има много информация, някои неща могат да останат незабелязани.

### Пълни параметри на ендпойнт-а

Ето пълният извикване и всички възможни полета, които могат да бъдат изпратени.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // един от "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // един от "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
