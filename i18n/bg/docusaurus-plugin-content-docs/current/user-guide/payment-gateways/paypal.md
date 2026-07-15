---
title: Настройване на PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Настройване на PayPal Gateway (v2)

_**ВАЖНО ЗАБЕЛЕЖКА: Тази статия се отнася до Ultimate Multisite версия 2.x.**_

Можете да активирате до четири метода за плащане в страницата за настройки на плащанията: Stripe, Stripe Checkout, PayPal и ръчно. В тази статия ще научим как да интегрирате с **PayPal**.

Подобно на Stripe, PayPal се използва широко за онлайн плащания, особено на WordPress уебсайтове. Тази статия ще ви насочи как да използвате PayPal като метод за плащане, който е достъпен в вашата мрежа.

Забележете, че трябва да имате **PayPal Business account**, за да получите API данните, необходими за тази интеграция.

## Активиране на PayPal в вашата мрежа {#enabling-paypal-on-your-network}

За да активирате PayPal като достъпен метод за плащане в вашата мрежа, отидете на **Ultimate Multisite > Settings > Payments** и отбелете полето до PayPal.

![Активиране на PayPal в активните платежни шлюзове](/img/config/settings-payment-gateways.png)

## Използване на помощния асистент за настройка {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 добавя помощния асистент за настройка на PayPal към настройките на платежния шлюз. След като активирате PayPal, използвайте асистента в **Ultimate Multisite > Settings > Payments**, за да изберете как искате да свържете шлюза и да потвърдите кои данни все още са необходими, преди да запазите.

Асистентът поддържа два пътя за настройка:

* **Ръчно въвеждане на данни**: Използвайте този път, когато вече имате PayPal API данни, когато OAuth настройката не е налична за вашия акаунт или когато предпочитате сами да копирате данните от PayPal. Въведете API Username, API Password и API Signature в полетата за PayPal, след което запазете настройките за плащания.
* **Портал за OAuth връзка**: Използвайте този път само когато опцията OAuth е налична и активирана за вашата инсталация. Асистентът показва OAuth потока зад feature flag, така че мрежите без този флаг продължават да използват полетата за ръчно въвеждане на данни.

Ако не видите опцията OAuth в асистента, завършете процеса на ръчно въвеждане на данни по-долу. Шлюзът работи с едни и същи PayPal Business API данни като предишните версии на Ultimate Multisite 2.x.

## Получаване на PayPal API данни {#getting-the-paypal-api-credentials}

След като PayPal бъде активиран като платежен шлюз, ще трябва да попълните полетата за PayPal API **Username**, PayPal API **Password** и PayPal API **Signature**.

Можете да получите тези данни, като влезете в своя PayPal [Live](https://www.paypal.com/home) или [Sandbox](https://www.sandbox.paypal.com/home) акаунт.

(Запомнете, че можете да използвате **sandbox mode**, за да тествате плащанията и да видите дали шлюзът е настроен правилно. Просто включете съответната секция.)

![Полета за PayPal API данни и превключвател на sandbox режим](/img/config/settings-payment-gateways.png)

За да поискате API Signature или Certificate данни за вашия PayPal акаунт:

  1. Отидете на [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. В секцията **API access**, кликнете върху **Update**.
![Настройки на акаунта в PayPal с секция за API достъп](/img/config/settings-payment-gateways.png)

  3. Под **NVP/SOAP API integration (Classic)** , кликнете върху **Manage API credentials**.
![PayPal NVP/SOAP API интеграция Управление на API данни](/img/config/settings-payment-gateways.png)

     * Ако вече сте генерирали API Signature или Certificate, ще бъдете пренасочени към страница, където можете да намерите данните си.

     * _**Забележка:** Ако се молите да потвърдите своя PayPal акаунт, следвайте инструкциите на екрана._

  4. Изберете _една_ от следните опции, след което кликнете върху **Agree and Submit**.

     * **Request API Signature** – Изберете за API Signature автентикация.

     * **Request API Certificate** – Изберете за API Certificate автентикация.

  5. PayPal генерира вашите API данни по следния начин:
![Генерирани API данни на PayPal](/img/config/settings-payment-gateways.png)

     * **API Signature данни** включват API Username, API Password и Signature, които не изграждат. Тези стойности по подразбиране са скрити за допълнителна сигурност. Натиснете **Show/Hide**, за да ги включите и изключите. Когато приключите, натиснете **Done**.

     * **API Certificate данни** включват API Username, API Password и Certificate, които изграждат автоматично след три години. Натиснете **Download Certificate**, за да запазите API Certificate на десктопа си.

Това е всичко, вашата интеграция на PayPal плащания е завършена!

Ако имате въпроси относно настройките на PayPal, можете да се обърнете към [Help Center](https://www.paypal.com/br/smarthelp/home) на PayPal.
