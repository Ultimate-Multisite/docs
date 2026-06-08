---
title: Печелене пари
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Получаване на пари (v2)

_**ВАЖНО ЗАБЕЛЕЖКА: Тази статия се отнася до Ultimate Multisite версия 2.x.**_

Ultimate Multisite има вградена система за членство и начисляване. За да работи нашата система за начисляване, интегрирахме най-често използваните платежни шлюзове в електронната търговия. По подразбиране платежните шлюзове в Ultimate Multisite са _Stripe_, _PayPal_ и ръчно плащане. Можете също така да използвате _WooCommerce_, _GoCardless_ и _Payfast_, като инсталирате съответните им add-on модули.

## Основни настройки

Можете да конфигурирате всеки от тези платежни шлюзове в настройките за плащания на Ultimate Multisite. Можете да го намерите, като отидете на **Меню Ultimate Multisite > Настройки > Плащания**.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Преди да настроите платежния си шлюз, моля, погледнете основните настройки за плащания, които можете да конфигурирате:

**Force auto-renew (Принудително автоматично преновяване):** Това гарантира, че плащането автоматично ще се повтаря в края на всеки цикъл на начисляване, в зависимост от честотата на начисляване, избрана от потребителя.

![Force Auto-Renew toggle setting on the Payments settings page](/img/config/payments-force-auto-renew.png)

**Allow trials without payment method (Позволяване на проби без метод за плащане):** С тази опция, вашият клиент няма да се нуждае от добавяне на финансова информация по време на процеса на регистрация. Това ще бъде необходимо само след изтичане на периода на проба.

![Allow Trials Without Payment Method toggle on the Payments settings page](/img/config/payments-allow-trials.png)

**Send invoice on payment confirmation (Изпращане на фактура при потвърждение на плащане):** Това ви дава възможност да решите дали да изпращате фактура след плащането. Забележете, че потребителите ще имат достъп до историята на плащания си в dashboard на своя подсайт. Тази опция не се отнася за ръчния шлюз (Manual Gateway).

![Send Invoice on Payment Confirmation toggle on the Payments settings page](/img/config/payments-send-invoice.png)

**Invoice numbering scheme (Схема за номерация на фактури):** Тук можете да изберете или код за референтен номер на плащане, или последователна схема на номерация. Ако решите да използвате код за референтен номер на плащане за фактурите си, не е нужно да конфигурирате нищо. Ако изберете последователна схема на номерация, ще трябва да конфигурирате **следващия номер на фактура** (Този номер ще бъде използван като номер на фактура за следващата генерирана система. Той се увеличава с единица всеки път, когато се създава нова фактура. Можете да го промените и да го запазите, за да рестартирате последователния номер на фактура до определена стойност) и **префикса на номера на фактура.**

![Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options](/img/config/payments-invoice-scheme.png)

![Next invoice number and invoice number prefix fields shown when Sequential Number is selected](/img/config/payments-invoice-sequential.png)

## Къде да намерите шлюзовете:

Можете да настроите платежните шлюзове на една и съща страница (**Ultimate Multisite > Настройки > Плащания**). Веднага под **активните платежни шлюзове** (active payment gateways) ще видите: _Stripe_, _Stripe_ _Checkout_, _PayPal_ и _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Имаме специална статия за всеки платежен шлюз, която ще ви насочи стъпките за настройка, които можете да намерите в линковете по-долу.

Можете да преглеждате и редактирате данните за плащания:

![Payment edit interface](/img/admin/payment-edit.png)

Ето пълно изглеждане на страницата за редактиране на плащания:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ето също пълно изглеждане на настройките на платежните шлюзове:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Настройване на Stripe шлюза**

**Настройване на PayPal шлюза**

**Настройване на ръчни плащания**

Сега, ако искате да използвате _WooCommerce_, _GoCardless_ или _Payfast_ като свой платежен шлюз, ще трябва да **инсталирате и конфигурирате техните add-on модули**.

### Как да инсталирате WooCommerce add-on:

Разбираме, че _Stripe_ и _PayPal_ не са налични в някои държави, което ограничава или затруднява потребителите на Ultimate Multisite ефективното използване на нашия плагин. Затова създадохме add-on, който интегрира _WooCommerce_, който е много популярен плагин за електронна търговия. Разработчици по света създадоха add-on модули, за да интегрират различни платежни шлюзове към него. Използвахме това, за да разширим платежните шлюзове, които можете да използвате със системата за начисляване на Ultimate Multisite.

_**ВАЖНО:** Ultimate Multisite: WooCommerce Integration изисква WooCommerce да е активиран поне на основния ви сайт._

Първо, моля, отидете на страницата с add-on модули. Можете да я намерите, като отидете на **Ultimate Multisite > Настройки**. Трябва да видите таблицата **Add-ons**. Кликнете върху **Check our Add-ons**.

![Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link](/img/config/settings-addons-table.png)

След като кликнете върху **Check our Add-ons**, ще бъдете пренасочени към страницата с add-on модули. Тук можете да намерите всички add-on модули на Ultimate Multisite. Кликнете върху add-on модула **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Ще се появи прозорец с подробности за add-on модула. Просто кликнете върху **Install Now**.

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

След като инсталацията приключи, ще бъдете пренасочени към страницата с плагини. Тук просто кликнете върху **Network Activate** и add-on модулът WooCommerce ще бъде активиран в мрежата ви.

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

След активирането, ако все още не сте инсталирали и активирали плагина WooCommerce на вашия уебсайт, ще получите напомняне.

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

За повече информация за add-on модула WooCommerce Integration, **кликнете тук**.

### Как да инсталирате GoCardless add-on:

Стъпките за инсталиране на add-on модула _GoCardless_ са почти същите като за add-on модула _WooCommerce_. Моля, отидете на страницата с add-on модули и изберете add-on модула **Ultimate Multisite: GoCardless Gateway**.

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

Ще се появи прозорец с add-on модула. Кликнете върху **Install Now**.

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

След като инсталацията приключи, ще бъдете пренасочени към страницата с плагини. Тук просто кликнете върху **Network Activate** и add-on модулът _GoCardless_ ще бъде активиран в мрежата ви.

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

За да научите как да започнете с платежния шлюз _GoCardless_, **прочетете тази статия**.

### Как да инсталирате Payfast add-on:

Отидете на страницата с add-on модули и изберете add-on модула **Ultimate Multisite: Payfast Gateway**.

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

Ще се появи прозорец с add-on модула. Кликнете върху **Install Now.**

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

След като инсталацията приключи, ще бъдете пренасочени към страницата с плагини. Тук просто кликнете върху **Network Activate** и add-on модулът _Payfast_ ще бъде активиран в мрежата ви.

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
