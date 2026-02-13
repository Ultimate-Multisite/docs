---
title: Регистрация конечной точки API
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# Конечная точка API регистрации Ultimate Multisite

В этом руководстве вы узнаете, как использовать конечную точку API /register Ultimate Multisite для создания полного процесса внедрения нового клиента в вашей сети и как это сделать с помощью Zapier.

Конечная точка использует метод POST и вызывается по URL _**https://yoursite.com/wp-json/wu/v2/register**_. В этом вызове в вашей сети будут выполнены 4 процесса:

* Создаётся новый пользователь WordPress или его идентификация через ID пользователя.
* Создаётся новый клиент в Ultimate Multisite или его идентификация через ID клиента.
* Создаётся новый сайт в сети WordPress.
* В итоге создаётся новое членство в Ultimate Multisite.

Для этого процесса вам понадобятся ваши учетные данные API. Чтобы получить их, перейдите в панель администратора сети, откройте **Ultimate Multisite > Settings** > **API & Webhooks**, и найдите раздел Настройки API.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)
Выберите **Enable API** и получите свои учетные данные API.

Теперь давайте изучим конечную точку и затем создадим действие регистрации в Zapier.

## Параметры тела запроса

Давайте рассмотрим минимальную информацию, которую необходимо отправить в конечную точку. В конце этой статьи вы найдёте полный запрос.

### Клиент

Это информация, необходимая для процесса создания пользователя и клиента Ultimate Multisite:

```json
"customer_id" : integer

It is possible to send the customer ID created in your network. If not submitted, the information below will be used to create a new customer and a new WordPress user. The user ID can also be sent in the same manner as the customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },
```

Можно отправить ID клиента, созданного в вашей сети. Если он не будет передан, нижеуказанная информация будет использована для создания нового клиента и нового пользователя WordPress. ID пользователя также можно отправить так же, как ID клиента.

### **Членство**

Единственная информация, которую нам нужно в этом объекте, — статус членства.

```json
"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },
```

### **Продукты**

Продукты передаются в виде массива с одним или более ID продукта из вашей сети. Обратите внимание, что эта конечная точка не создаёт продукты. Ознакомьтесь с документацией Ultimate Multisite, чтобы лучше понять конечную точку создания продукта.

**"products" : [1,2],**

### Платёж

Как и в случае с членством, нам нужен только статус.

```json
"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },
```

### Сайт

И чтобы завершить тело запроса, нам нужны URL и название сайта, оба находятся в объекте Site.

```json
"site" : { "site_url" : "string", "site_title" : "string" }
```

Ответ конечной точки регистрации будет массивом с информацией о вновь созданном членстве.

## Создание действия в Zapier

С введением этой новой и более надёжной конечной точки создания аккаунта вы также получите доступ к новому действию в Zapier.

Знаете ли вы, как использовать и наслаждаться всем, что предлагает новая версия Zapier? Узнайте больше здесь. (ссылка?)

### Создание действия

Чтобы лучше проиллюстрировать, как использовать конечную точку регистрации с Zapier, давайте создадим интеграцию с Google Forms. Каждый раз, когда эта форма заполняется и информация сохраняется в листе ответов, в сети Ultimate Multisite будет создано новое членство.

В Google Forms создайте форму с минимальными полями, необходимыми для создания нового членства в сети.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Теперь в Zapier создайте новый Zap и подключите созданную форму Google через таблицу, где сохраняются данные.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Готово! Форма Google Forms подключена к Zapier и готова к интеграции с сетью. Теперь перейдём к действию, которое будет результатом триггера, который Google Forms запускает каждый раз, когда он заполняется.

Найдите новое приложение Ultimate Multisite и выберите его. Для такого типа Zap выберите опцию Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

After this first step, choose the account that will be connected with this Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Это самая чувствительная часть всего процесса. Мы должны сопоставить поля, пришедшие из Google Forms, с минимальными полями, необходимыми для конечной точки регистрации, как показано в предыдущем разделе этой статьи.

В этом примере нам нужно настроить только имя пользователя, email, пароль, имя и URL сайта. Остальное оставлено предопределённым, чтобы все членства, созданные через эту форму Google Forms, следовали одной и той же схеме продукта и статуса.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

With the information set up, proceed to the final test. On the last screen you can see all the fields that will be sent to the endpoint, their respective information and the fields that will be sent empty.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Проверьте ваш новый Zap, и он должен завершиться успешно. Если возникнет ошибка, проверьте все поля и убедитесь, что они отправляются правильно. Поскольку информации много, некоторые вещи могут остаться незамеченными.

### Полные параметры конечной точки

Ниже приведён полный запрос и все возможности полей, которые можно отправить.

```json
"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
```
