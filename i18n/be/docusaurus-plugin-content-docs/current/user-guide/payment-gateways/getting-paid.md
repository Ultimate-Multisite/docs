---
title: Палучаць грошы
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Атримання плацёжяў (v2)

_**ВАЖНАЕ ПРАМІТЫ:** Гэты артыкул адносіцца да версіі Ultimate Multisite 2.x._

Ultimate Multisite мае ўбудаваную сістэму канчаткі і раслічкі. Для працы нашай сістэматы раслічкі мы інтэгравалі найбольш распаўсюджаныя плацёжныя шлюзы, выкарыстоўваныя ў e-commerce. Пачатковыя плацёжныя шлюзы ў Ultimate Multisite — гэта _Stripe_, _PayPal_ і Ручны плацёж. Вы таксама можаце выкарыстоўваць _WooCommerce_, _GoCardless_ і _Payfast_ для атрымання плацёжаў, усталяваўшы адпаведныя аддоны.

## Баassmentныя напрамленні

Вы можаце накіраваць любы ад гэтых плацёжных шлюзаў у напрамленнях плацёжаў Ultimate Multisite. Вы можаце знайсці гэта, зайшоўшы ў **меню Ultimate Multisite > Напрамленні > Плацёжы.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Перш чым накіраваць свой плацёжны шлюз, калі ласка, прагледзьце баassmentныя напрамленні плацёжаў, якія вы можаце накіраваць:

**Force auto-renew:** Гэта гарантуе, што плацёж будзе аўтаматычна пановленнем у канцы кожнага раслічковага цыклу, залежна ад частаты раслічкі, выбранай карыўнікам.

![Force Auto-Renew toggle setting on the Payments settings page](/img/config/payments-force-auto-renew.png)

**Allow trials without payment method:** З уключэннем гэтай опцыі вашыму кліенту не будзе правядаць дадаванне любой фінансавай інфармацыі падчас рэгістрацыі. Гэта будзе неабходна толькі пасля спынення тэрміну прабы.

![Allow Trials Without Payment Method toggle on the Payments settings page](/img/config/payments-allow-trials.png)

**Send invoice on payment confirmation:** Гэта дае вам магчымасць вызначаць, адпраўляць ці не адпраўляць рахунак-фактуру пасля плацёжу. Зверніце ўвагу, што карыннікі будуць мець доступ да гісторыі сваіх плацёжаў у адпавіданні дашбордзе сваёй субсайта. Гэтая опцыя не працавае для Ручнага шлюзу.

![Send Invoice on Payment Confirmation toggle on the Payments settings page](/img/config/payments-send-invoice.png)

**Invoice numbering scheme:** Тут вы можаце выбраць або код адпраўлення плацёжа, або паслядоўны нумарынгавы стыль. Калі вы выбіраеце выкарыстоўваць код адпраўлення плацёжа для сваіх рахункаў-фактур, вам не трэба нічога накіраваць. Калі вы выбіраеце выкарыстоўваць паслядоўны нумарынгавы стыль, вам трэба накіраваць **наступны нумар рахунку-фактуры** (Гэты нумар будзе выкарыстованы як нумар рахунку-фактуры для наступнага згенераванага ў сістэме рахунку-фактуры. Ён павышаецца на адзін кожны раз, калі ствараецца новы рахунак-фактура. Вы можаце яго змяніць і захаваць, каб снуёрыць паслядоўны нумар рахунку-фактуры да пэўных значэння), а таксама **прафікс нумара рахунку-фактуры.**

![Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options](/img/config/payments-invoice-scheme.png)

![Next invoice number and invoice number prefix fields shown when Sequential Number is selected](/img/config/payments-invoice-sequential.png)

## Где найти шлюзы:

Вы можаце накіраваць плацёжныя шлюзы на адной і той жа старонцы (**Ultimate Multisite > Напрамленні > Плацёжы**). Адразу пад **актыўнымі плацёжнымі шлюзамі** вы зможаце ўбачыць: _Stripe_, _Stripe_ _Checkout_, _PayPal_ і _Ручны_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

У нас ёсць выкверковывальны артыкул для кожнага плацёжнага шлюзу, які праведуе вас праз крокі яго накіравання, якія вы можаце знайсці па спасылках побач.

Вы можаце прагледзець і рэдагаваць дэталі плацёжа:

![Payment edit interface](/img/admin/payment-edit.png)

Вось поўны прагляд старонкі рэдагавання плацёжа:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Вось таксама поўны прагляд напрамленняў плацёжных шлюзаў:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Накіраванне шлюзу Stripe**

**Накіраванне шлюзу PayPal**

**Накіраванне ручных плацёжаў**

Цяпер, калі вы хочаце выкарыстоўваць _WooCommerce_, _GoCardless_ або _Payfast_ як свой плацёжны шлюз, вам трэба **усталяваць і накіраваць іх аддоны**.

### Як усталяваць аддон WooCommerce:

Мы разумеем, што _Stripe_ і _PayPal_ недаступныя ў некаторых краінах, што абмяжоўвае або паважае карыстальнікаў Ultimate Multisite ад эфектыўнага выкарыстання нашага плагіна. Таму мы стварылі аддон для інтэграцыі _WooCommerce_, які з'яўляецца вельмі папулярным e-commerce плагінам. Разработнікі ў цёлым свеце стварылі аддоны для інтэграцыі розных плацёжных шлюзаў у яго. Мы выкарыстоўвалі гэта, каб пашырыць плацёжныя шлюзы, якія вы можаце выкарыстоўваць з сістэматы раслічкі Ultimate Multisite.

_**ВАЖНА:** Ultimate Multisite: WooCommerce Integration патрабуе, каб WooCommerce быў актываваны адным цягам на вашым галоўным сайце._

Перш за ўсё, калі ласка, заййдзіце на старонку аддонаў. Вы можаце знайсці яе, зайшоўшы ў **Ultimate Multisite > Напрамленні**. Вы павінны ўбачыць табліцу **Аддоны**. Націсніце на **Check our Add-ons**.

![Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link](/img/config/settings-addons-table.png)

Пасля націску на **Check our Add-ons** , вас перанакіруе на старонку аддонаў. Тут вы можаце знайсці ўсе аддоны Ultimate Multisite. Націсніце на аддон **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Адкрыецца акно з дэталямі аддону. Проста націсніце **Install Now**.

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

Пасля ўсталявання вас перанакіруе на старонку плагінаў. Тут проста націсніце **Network Activate**, і аддон WooCommerce будзе актываваны на вашым сетцы.

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

Пасля актывацыі, калі ў вас яшчэ няма ўсталяванага і актываванага плагіна WooCommerce на вашым сайце, вы атрымаеце нагамер.

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

Каб дізнацца больш пра аддон WooCommerce Integration, **націсніце сюды**.

### Як усталяваць аддон GoCardless:

Крокі для ўсталявання аддону _GoCardless_ амаль такія ж, як для аддону _WooCommerce_. Калі ласка, заййдзіце на старонку аддонаў і выберыце аддон **Ultimate Multisite: GoCardless Gateway**.

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

Адкрыецца акно аддону. Націсніце **Install Now**.

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

Пасля ўсталявання вас перанакіруе на старонку плагінаў. Тут проста націсніце **Network Activate**, і аддон _GoCardless_ будзе актываваны на вашым сетцы.

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

Каб дізнацца, як пачаць з шлюзам _GoCardless_, **прачціце гэты артыкул**.

### Як усталяваць аддон Payfast:

Зайдзіце на старонку аддонаў і выберыце аддон **Ultimate Multisite: Payfast Gateway**.

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

Адкрыецца акно аддону. Націсніце **Install Now.**

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

Пасля ўсталявання вас перанакіруе на старонку плагінаў. Тут проста націсніце **Network Activate**, і аддон _Payfast_ будзе актываваны на вашым сетцы.

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
