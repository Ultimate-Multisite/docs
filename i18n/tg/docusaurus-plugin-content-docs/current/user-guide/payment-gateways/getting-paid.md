---
title: Масолати масолатҳо
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Пардозирование (v2)

_**МУҲИМ ДАРХУЛАТ: Ин мақола ба Ultimate Multisite версияи 2.x меруудид.**_

Ultimate Multisite системаи даромад ва ҳисоббарии худро дорад. Барои кор кардани системаи ҳисоббарии мо, мо гардиши маъмулترین шウェイҳои пардохтӣ дар савдогории электронӣ (e-commerce) ҷамъ овардем. Шウェイҳои пардохти дифолтӣ дар Ultimate Multisite инҳо мебошанд: _Stripe_, _PayPal_ ва Пардохти Рушмӣ. Шумо инчунин метавонед аз ҳангоми инсталл кардани аддонҳои мувофиқ, аз _WooCommerce_, _GoCardless_ ва _Payfast_ барои гирифтани пардохтҳо истифода баред.

## Ҳадҷатҳои Асосӣ (Basic Settings)

Шумо метавонед ҳар яке аз ин шウェイҳои пардохтӣ дар танзимотҳои пардохти Ultimate Multisite тартиб додаед. Шумо метавонед онро бо рафтани ба **Ultimate Multisite menu > Settings > Payments** пайдо кунед.

![Саҳифаи танзимоти пардохт дар Ultimate Multisite, ки панели Пардохтҳо-ро нишон медиҳад](/img/config/payments-settings-page.png)

Пеш аз он ки шウェイи пардохти худро тартиб диҳед, лутфан ба танзимотҳои асосии пардохтӣ назар доред, ки метавонед тартиб додаед:

**Force auto-rene (Маҷбур кардани таҷдиди муқаррарӣ):** Ин таъмин мекунад, ки пардохт дар охири ҳар як даври ҳисоббарии мувофиқи таври ҳисоббарии инсон, ки ишора кардед, автоматик такрор хоҳад кард.

<!-- Screenshot unavailable: Тағйирёбии танзимоти Force Auto-Renew дар саҳифаи танзимот пардохт -->

Ultimate Multisite v2.13.0 тафтиш мекунад, ки шウェイи фаъол дохили он дастгирии такрори мувофиқ (reusable renewal credential) -ро пеш аз савдогонии ҳисоббарии муқаррарӣ бо фаъолияти автоматик такрор кор кардааст. Таҷдиди мувофиқ метавонад як лойиҳаи дастгирии шウェイ, созишномаи ҳисоббарии пардохт ё токени хавф-наки (vault token) ки сақла шудааст ва ба таври дигар расонида шавад. Агар шウェイ инкор кунад, ки дастгирии мувофиқи мавҷуд нест, Ultimate Multisite ҳисоббарии идоракунӣ мекунад, аммо фаъолияти автоматик такрори онро ба таври коркард бартараф мекунад ва ҳолати "мавҷуди дастгирии номбудда" -ро қайд мекунад, то администратор ё ҷараёни дастгирӣ аз муштариён хоҳиш намоянд, ки пардохтҳоро пеш аз рӯзи такрор тасдиқ кунанд.

**Изолтиш аз таҷрибаҳо биду пардохт кардан (Allow trials without payment method)** **усул:** Бо иҷоза кардани ин опсия, муштариён ба ҳандо аз ҷониби худашон маълумотҳои молиявӣ дар раванди қайд кор намекунанд. Ин фақат вақте талаб мешавад, ки давраи таҷриба (trial period) ба итмом расонад.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Фактурик дар тасдиқи пардохт фиристодан (Send invoice on payment confirmation)**: Ин ба шумо имконият медиҳад, ки пас аз пардохт фактураро бисозонед ё на бисозонед. Диққат намоед, ки корбарон метавонанд ба таърихи пардохти худ дар дашбори подфойши худ (subsite dashboard) дастрасӣ пайдо кунанд. Ин опсия ба Gateway-и Рушди Аз-затра (Manual Gateway) наметавонад татбиқ карда шавад.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Намудаи рақами фактура (Invoice numbering scheme)**: Дар ин ҷо, шумо метавонед либос коди ишора барои пардохт ё намудаи рақами пайвастӣ (sequential number scheme)-ро интихоб кунед. Агар шумо барои фактураҳои худ аз коди ишора барои пардохт истифода баред, лозим нест он чизҳоро таҳия кунед. Агар шумо намудаи рақами пайвастӣ-ро истифода баред, шумо бояд **рақами фактураи навбатӣ** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) ва **перифрази рақами фактура**-ро таҳия кунед.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Кӣ ҷойҳои gateway-ҳоро пайдо кунед:

Шумо метавонед payment gateways-ро дар як саҳифа сохтан ( **Ultimate Multisite > Settings > Payments**). Дар паҳлӯи **active payment gateways** , шумо метавонед инҳоро бинед: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ва _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Мо барои ҳар як gateway як мақола махсус дорем ки ба шумо дар қадамҳои сохтани он кӯмак мекунад ва инҳоро дар пайвасткунандаҳои поён мебинед.

Шумо метавонед маълумоти пардохтро бинед ва тағйир диҳед:

![Payment edit interface](/img/admin/payment-edit.png)

Ин назари пурра аз саҳифаи тағйири пардохт аст:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ин инчунин назари пурраи сохтори gateway-ҳоро нишон медиҳад:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Сохтани gateway-и Stripe**

**Сохтани gateway-и PayPal**** **

**Сохтани пардохтҳои мустақил (manual payments)**

Ҳоло, агар шумо хоҳед , ки _WooCommerce_ , _GoCardless_ ё _Payfast_ -ро ҳамчун gateway-и пардохти худ истифода баред , шумо бояд **онҳоро инстаб ва сохтан (configure) кардани онҳоро** бинед.

### Чӣ тавр add-on-и WooCommerce-ро инстаб кунем:

Мо мефаҳмоем, ки _Stripe_ ва _PayPal_ дар баъзе кишварҳо мавҷуда нестанд, ки истифодаи плагини Ultimate Multisite-ро аз ҷониби корбарони он маҳдуд ё мушкил мекунад. Аз ин рӯ , мо як add-on сохтаем, ки _WooCommerce_-ро ҳамгирӣ мекунад, ки он як плагини эътимоди коркарди электронӣ аст. Муаллифони дар тамоми ҷаҳон барои ҳамгирии gateway-ҳои гуногуни пардохт ба он сохтори add-on сохтаанд. Мо аз ин имконият истифода кардем , ки gateway-ҳои пардохти мумкин бо системаи ҳисоби Ultimate Multisite-ро васеъ кунем.

**МУҲИМ:** Интеграцияи Ultimate Multisite бо WooCommerce талаб мекунад, ки WooCommerce ба ҳайси як сайт асосии шумо фаъол карда шуда бошад.

Пеш аз ҳама, лутфан ба саҳифаи add-ons равед. Шумо метавонед онро бо раведбастӣ ба **Ultimate Multisite > Settings** пайдо кунед. Шумо бояд ҷадвали **Add-ons**-ро бинед. Ба **Check our Add-ons** клик кунед.

<!-- Screenshot unavailable: Ҷадвали add-ons дар паҳншаи сатҳи Ultimate Multisite бо пайвастагии Check our Add-ons -->

Баъди клики ба **Check our Add-ons**, шумо ба саҳифаи add-ons равед меравед. Ин ҷо шумо ҳамаи add-ons-ҳои Ultimate Multisite-ро пайдо мекунед. Ба add-on-и **Ultimate Multisite: WooCommerce Integration** клик кунед.

![Саҳифаи add-ons, ки ҳамаи add-ons-ҳои Ultimate Multisite аз ҷумла WooCommerce Integration-ро нишон медиҳад](/img/addons/addons-page.png)

Як пӯшони бо маълумоти add-on паён меояд. Фақат ба **Install Now** клик кунед.

<!-- Screenshot unavailable: Диалогои маълумоти add-on Ultimate Multisite WooCommerce Integration бо тугмаи Install Now -->

Баъди анҷоми инсолоҳӣ, шумо ба саҳифаи плагиноҳо равед меравед. Ин ҷо фақат ба **Network Activate** клик кунед ва add-on-и WooCommerce дар шабакаи шумо фаъол карда мешавад.

<!-- Screenshot unavailable: Саҳифаи плагиноҳо бо пайвастагии Network Activate барои add-on-и WooCommerce Integration -->

Баъди фаъол кардани он, агар шумо хоҳед, ки плагини WooCommerce дар вебсайти худ инсолоҳ ва фаъол накардед, шумо як эзоҳ мегиред.

<!-- Screenshot unavailable: Эзоҳи админӣ, ки администраторро хотир кунад, ки плагини WooCommerce-ро инсолоҳ ва фаъол намояд -->

Барои он чӣ гуна маълумот овардан дар бораи add-on-и WooCommerce Integration, **инҷо клик кунед**.

### Чӣ тавр add-on-и GoCardless-ро инсолоҳ кунем:

Қадамдар, килтни (add-on) орнату — _WooCommerce_ килтни орнатудан шамада бирдей. Килтлар парақшасына ўтинг ва **Ultimate Multisite: GoCardless Gateway** килтни танланг.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway килтлари парақчаси, аниқланган -->

Килт ойнайди. **Install Now** (Энди ўрнатиш) ни босинг.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway килтлари тавсиласи, Install Now тугмачаси билан -->

Орнатма тугагандан сўнг сизлар плагиналлар парақчасига қайтасиз. Бу ерда фақат **Network Activate** (Тармоқни фаоллаштириш) ни боссинг ва _GoCardless_ килтлари сизнинг тармоқингизда фаоллашади.

<!-- Screenshot unavailable: Плагиналлар парақчаси, GoCardless Gateway килтлари учун Network Activate хавфли алоқа -->

_GoCardless_ gateway билан қандай бошлашни билмоқчи бўлсангиз, **бу мақолани ўқишга** даъват қиламиз.

### Payfast килтларини олишнинг усули:

килтлар парақчасига ўтинг ва **Ultimate Multisite: Payfast Gateway** килтни танланг.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway килтлари парақчаси, аниқланган -->

Килт ойнайди. **Install Now** (Энди ўрнатиш) ни босинг.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway килтлари тавсиласи, Install Now тугмачаси билан -->

Орнатма тугагандан сўнг сизлар плагиналлар парақчасига қайтасиз. Бу ерда фақат **Network Activate** (Тармоқни фаоллаштириш) ни боссинг ва _Payfast_ килтлари сизнинг тармоқингизда фаоллашади.

<!-- Screenshot unavailable: Плагиналлар парақчаси, Payfast Gateway килтлари учун Network Activate хавфли алоқа -->
