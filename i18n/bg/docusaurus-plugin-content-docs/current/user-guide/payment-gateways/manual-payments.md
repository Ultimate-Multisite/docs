---
title: Настройване на ръчни плащания
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Настройване на ръчни плащания (v2)

_**ВАЖНА ЗАБЕЛЕЖКА: Тази статия се отнася до Ultimate Multisite версия 2.x.**_

Ръчните плащания са начин да предложите други методи за плащане, когато **Stripe** или **PayPal** не са налични за вашите потребители. Това може да бъде банков или кабелен превод или който и да е друг метод за плащане, който е достъпен за вашите потребители в местната им общност.

## Как да активирате ръчните плащания

Настройването на ръчно плащане е много лесно. Просто трябва да го активирате в секцията за платежни системи и да добавите подробни инструкции как потребителят трябва да извърши плащането.

Първо, отидете на **Ultimate Multisite > Settings > Payments**. Под **Payment Gateways** , активирайте **Manual**. Ще видите, че се появява поле **Payment Instructions**.

Добавете в това поле информация, от която вашият клиент ще се нуждае за плащането. Това могат да бъдат детайли за банковия ви сметка и вашия имейл, за да може клиентът да ви изпрати потвърждение за плащането, например.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ето интерфейсът за настройки на ръчната система:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

След като го настроите, просто кликнете върху **Save Settings** и готово. Когато потребителите се регистрират в мрежата ви, те ще видят съобщение, че ще получат вашите инструкции за завършване на покупката.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

И също така ще получат съобщение на вашата страница **Thank You** с вашите плащателни инструкции.

![Thank You page showing payment instructions after checkout](/img/frontend/manual-thank-you.png)

## Потвърждаване на ръчните плащания

За да потвърдите ръчно плащане, отидете в менюто **Payments** в лявата лента. Там можете да видите всички плащания в мрежата си и техните детайли, включително техния **status**. Ръчното плащане винаги ще има **Pending** статус, докато вие ръчно не промените.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Влезте в страницата на плащането, като кликнете върху **reference code**. На тази страница имате всички детайли за изчакваното плащане, като например reference ID, продукти, времеви печат и още.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

В дясната колона можете да промените статуса на плащането. Промяната му на **Completed** и активирането на опцията **Activate Membership** ще активира сайта на клиента ви и членството му ще бъде активно.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
