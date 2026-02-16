---
title: Налаштування PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Налаштування платіжного шлюзу PayPal (v2)

_**ВАЖЛИВА ПРИМІТКА: Ця стаття стосується Ultimate Multisite версії 2.x.**_

На сторінці налаштувань платежів ви можете активувати до чотирьох способів оплати: Stripe, Stripe Checkout, PayPal та ручний спосіб. У цій статті ми розглянемо, як інтегрувати **PayPal**.

Як і Stripe, PayPal широко використовується для онлайн-платежів, особливо на сайтах WordPress. Ця стаття допоможе вам налаштувати PayPal як доступний спосіб оплати у вашій мережі.

Зверніть увагу, що для отримання API-ключів, необхідних для цієї інтеграції, вам потрібен **бізнес-акаунт PayPal**.

## Увімкнення PayPal у вашій мережі

Щоб увімкнути PayPal як доступний спосіб оплати у вашій мережі, перейдіть до **Ultimate Multisite > Settings > Payments** і поставте позначку біля PayPal.

![Увімкнення PayPal в активних платіжних шлюзах](/img/config/settings-payment-gateways.png)

## Отримання API-ключів PayPal

Після того як PayPal увімкнено як платіжний шлюз, вам потрібно заповнити поля PayPal API **Username**, PayPal API **Password** та PayPal API **Signature**.

Ці дані можна отримати, увійшовши до свого акаунта PayPal — [Live](https://www.paypal.com/home) або [Sandbox](https://www.sandbox.paypal.com/home).

(Пам'ятайте, що ви можете використовувати **sandbox-режим** для тестування платежів і перевірки правильності налаштування шлюзу. Просто увімкніть відповідний перемикач.)

![Поля для API-ключів PayPal та перемикач sandbox-режиму](/img/config/settings-payment-gateways.png)

Щоб запросити API Signature або Certificate для вашого акаунта PayPal:

  1. Перейдіть до [Налаштувань акаунта](https://www.paypal.com/businessmanage/account/accountAccess).

  2. У розділі **API access** натисніть **Update**.  
![Налаштування акаунта PayPal з розділом API access](/img/config/settings-payment-gateways.png)

  3. У розділі **NVP/SOAP API integration (Classic)** натисніть **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Якщо ви вже створювали API Signature або Certificate, вас буде перенаправлено на сторінку з вашими обліковими даними.

     * _**Примітка:** Якщо з'явиться запит на підтвердження вашого акаунта PayPal, дотримуйтесь інструкцій на екрані._

  4. Виберіть _один_ із наступних варіантів і натисніть **Agree and Submit**.

     * **Request API Signature** – виберіть для автентифікації через API Signature.

     * **Request API Certificate** – виберіть для автентифікації через API Certificate.

  5. PayPal згенерує ваші API-ключі наступним чином:  
![Згенеровані API-ключі PayPal](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** включають API Username, API Password та Signature, які не мають терміну дії. Ці значення за замовчуванням приховані для додаткової безпеки. Натисніть **Show/Hide**, щоб показати або сховати їх. Коли закінчите, натисніть **Done**.

     * **API Certificate credentials** включають API Username, API Password та Certificate, який автоматично закінчується через три роки. Натисніть **Download Certificate**, щоб зберегти API Certificate на свій комп'ютер.

Ось і все — інтеграцію платежів через PayPal завершено!

Якщо у вас є питання щодо налаштувань PayPal, зверніться до [Центру допомоги](https://www.paypal.com/br/smarthelp/home) PayPal.
