---
title: Налаштування PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Налаштування PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**ВАЖЛИВА ПРИМІТКА: ця стаття стосується Ultimate Multisite версії 2.x.**_

Ви можете активувати до чотирьох способів оплати на нашій сторінці налаштувань оплат: Stripe, Stripe Checkout, PayPal і Manual. У цій статті ми розглянемо, як інтегруватися з **PayPal**.

Так само як Stripe, PayPal широко використовується для онлайн-платежів, особливо на вебсайтах WordPress. Ця стаття допоможе вам використовувати PayPal як спосіб оплати, доступний у вашій мережі.

Зауважте, що вам потрібно мати **PayPal Business account**, щоб отримати облікові дані API, необхідні для цієї інтеграції.

## Увімкнення PayPal у вашій мережі {#enabling-paypal-on-your-network}

Щоб увімкнути PayPal як доступний спосіб оплати у вашій мережі, перейдіть на вкладку **Ultimate Multisite > Settings > Payments** і поставте прапорець поруч із PayPal.

![Увімкнення PayPal в активних платіжних шлюзах](/img/config/settings-payment-gateways.png)

## Використання майстра налаштування з підказками {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 додає майстер налаштування PayPal з підказками до налаштувань платіжного шлюзу. Після увімкнення PayPal скористайтеся майстром у **Ultimate Multisite > Settings > Payments**, щоб вибрати, як ви хочете підключити шлюз, і підтвердити, які облікові дані ще потрібні перед збереженням.

Майстер підтримує два шляхи налаштування:

* **Ручне введення облікових даних**: використовуйте цей шлях, коли у вас уже є облікові дані PayPal API, коли налаштування OAuth недоступне для вашого облікового запису або коли ви віддаєте перевагу самостійно копіювати облікові дані з PayPal. Введіть API Username, API Password і API Signature у поля PayPal, а потім збережіть налаштування оплат.
* **Шлюз підключення OAuth**: використовуйте цей шлях лише тоді, коли опція OAuth доступна й увімкнена для вашого встановлення. Майстер показує потік OAuth за feature flag, тому мережі без цього прапорця продовжують використовувати поля ручного введення облікових даних.

Якщо ви не бачите опцію OAuth у майстрі, виконайте наведений нижче потік ручного введення облікових даних. Шлюз працює з тими самими обліковими даними PayPal Business API, що й попередні випуски Ultimate Multisite 2.x.

## Отримання облікових даних PayPal API {#getting-the-paypal-api-credentials}

Після увімкнення PayPal як платіжного шлюзу вам потрібно буде заповнити поля для PayPal API **Username**, PayPal API **Password** і PayPal API **Signature**.

Ви можете отримати їх, увійшовши у свій обліковий запис PayPal [Live](https://www.paypal.com/home) або [Sandbox](https://www.sandbox.paypal.com/home).

(Пам’ятайте, що ви можете використовувати **sandbox mode**, щоб тестувати платежі та перевірити, чи шлюз налаштовано правильно. Просто увімкніть відповідний розділ.)

![Поля облікових даних PayPal API і перемикач sandbox mode](/img/config/settings-payment-gateways.png)

Щоб запросити облікові дані API Signature або Certificate для вашого облікового запису PayPal:

  1. Перейдіть до [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. У розділі **API access** натисніть **Update**.
![PayPal Account Settings із розділом API access](/img/config/settings-payment-gateways.png)

  3. У розділі **NVP/SOAP API integration (Classic)** натисніть **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Якщо ви вже згенерували API Signature або Certificate, вас буде перенаправлено на сторінку, де ви зможете знайти свої облікові дані.

     * _**Примітка:** якщо вам буде запропоновано підтвердити свій обліковий запис PayPal, дотримуйтесь інструкцій на екрані._

  4. Виберіть _один_ із наведених нижче варіантів, а потім натисніть **Agree and Submit**.

     * **Request API Signature** – виберіть для автентифікації API Signature.

     * **Request API Certificate** – виберіть для автентифікації API Certificate.

  5. PayPal генерує ваші облікові дані API таким чином:
![Згенеровані PayPal облікові дані API](/img/config/settings-payment-gateways.png)

     * **Облікові дані API Signature** включають API Username, API Password і Signature, термін дії яких не спливає. Ці значення за замовчуванням приховані для додаткової безпеки. Натисніть **Show/Hide**, щоб вмикати й вимикати їх відображення. Коли завершите, натисніть **Done**.

     * **Облікові дані API Certificate** включають API Username, API Password і Certificate, термін дії яких автоматично спливає через три роки. Натисніть **Download Certificate**, щоб зберегти API Certificate на робочий стіл.

Ось і все, вашу інтеграцію оплат PayPal завершено!

Якщо у вас є запитання щодо налаштувань PayPal, ви можете звернутися до [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
