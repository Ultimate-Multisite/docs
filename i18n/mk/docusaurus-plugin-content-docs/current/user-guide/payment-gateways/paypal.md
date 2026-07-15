---
title: Поставување на PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Поставување на PayPal штетови (v2)

_**ВАЖНА НАПОМЕНА: Ова приложување се однесува на Ultimate Multisite верзија 2.x.**_

Можете да активирате до четири методи за плаќање на нашата страница за поставки на плаќања: Stripe, Stripe Checkout, PayPal и Ручно. Во ова приложување ќе ви покажеме како да се интегрирате со **PayPal**.

Како и кај Stripe, PayPal е широко користен за онлајн плаќања, особено на WordPress веб-сајтови. Ова приложување ќе ви ги насочи како да го користите PayPal како метод за плаќање достапен во вашата мрежа.

Забележете дека треба да имате **PayPal Business акаунт** за да добиете ја API кредитноста што е потребна за ова интегрирање.

## Активирање на PayPal на вашата мрежа {#enabling-paypal-on-your-network}

За да активирате PayPal како достапен метод за плаќање на вашата мрежа, отидете на **Ultimate Multisite > Settings > Payments** табот и означете со галочка до PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Користење на водичот за поставка (setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 додава водич за поставка на PayPal во поставките на штетови за плаќање. По што активирате PayPal, користите го водичот на **Ultimate Multisite > Settings > Payments** за да изберете како сакате да ги поврзете штетовите и да потврдите кои кредитни информации сè уште се потребни пред да ги зачувате.

Водичот поддржува две патеки за поставка:

* **Ручно внесење податоци за пријаву (Manual credential entry)**: Користи овој пат кога веќе имате PayPal API податоци за пријава, кога не е достапен OAuth поставка за вашата сметка, или кога преферирате да копирате податоци од самиот PayPal. Внесете API корисникот (API Username), API лозинка (API Password) и API потпис (API Signature) во полесите на PayPal, а потоа зачувајте поставките за плаќање.
* **Врата за врска со OAuth (OAuth connection gate)**: Користи овој пат само кога опцијата OAuth е достапна и активирана за вашата инсталација. Магијата покажува како функционира потокот на OAuth зад ознака за функција (feature flag), па мрежите без таа ознака продолжуваат да користат полесите за ручно внесување податоци за пријаву.

Ако не видите опцијата OAuth во магијата, завршете процесот на ручно внесување податоци за пријава поделеден. Вратата работи со иста PayPal Business API податоци како претходните изданија на Ultimate Multisite 2.x.

## Придобивка на PayPal API податоци за пријава (Getting the PayPal API credentials) {#getting-the-paypal-api-credentials}

Кога PayPal е активиран како врата за плаќање, ќе треба да го пополнивте полесите за **API корисник** (Username), **API лозинка** (Password) и **API потпис** (Signature) на PayPal.

Можете да ги добиете со влоговање во вашата [Жива](https://www.paypal.com/home) или [Sandbox](https://www.sandbox.paypal.com/home) сметка на PayPal.

(Секојдневно се сеќачете дека можете да користите **мод за песо (sandbox mode)** за тестирање плаќања и да видите дали вратата е правилно поставена. Само префрлете на соодветната секција.)

![Полеси за PayPal API податоци за пријава и префрлување на модот за песо](/img/config/settings-payment-gateways.png)

За барање на API Потпис (API Signature) или сертификатни податоци за вашата сметка на PayPal:

  1. Одете во вашите [Поставки на сметката](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Во секцијата **Добавка на пристап (API access)**, кликнете на **Ажурирај (Update)**.
![Поставки на сметката на PayPal со секција за API пристап](/img/config/settings-payment-gateways.png)

3. Подредете **NVP/SOAP API интеграција (Classic)**, кликнете на **Manage API credentials** (Управување со API податоци).
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ако веќе генерирале API Signature или Certificate, ќе бидете пренасочени на страница каде можете да ги најдете вашите податоци за пријавување.

     * _**Забелешка:** Ако ви е потребно да го потврдите вашиот PayPal акаунт, следете упатствата што се прикажани на екрано._

  4. Изберете **една** од следните опции, а потоа кликнете на **Agree and Submit** (Согласувај и испрати).

     * **Request API Signature** – Изберете за автентикација со API Signature.

     * **Request API Certificate** – Изберете за автентикација со API Certificate.

  5. PayPal генерира вашите API податоци како следно:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature податоците** вклучуваат API корисничко име, API лозинка и Signature (Потпис), кои не се исцрнуваат. Овие вредности по дефолт се скривени за дополнителна сигурност. Кликнете на **Show/Hide** (Покажи/Скриј) за да ги активирате и деактивирате, а кога ќе завршите, кликнете на **Done** (Го готово).

     * **API Certificate податоците** вклучуваат API корисничко име, API лозинка и Certificate (Сертификат), кои се автоматски исцрнуваат по три години. Кликнете на **Download Certificate** (Преземи сертификат) за да го зачувате API Certificate на вашиот десктоп.

Тоа е тоа, вашата PayPal интеграција за плаќање е завршена!

Ако имате некои прашања во врска со поставките на PayPal, можете да се обратите на [Help Center](https://www.paypal.com/br/smarthelp/home) на PayPal.
