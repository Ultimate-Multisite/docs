---
title: To'lovlar va fakturalarni boshqarish
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# To'lovlar va Fakturalarni Boshqarish {#managing-payments-and-invoices}

## To'lov Sozlamalari {#payment-settings}

To'lovlarni qabul qilishni boshlashdan oldin, siz to'lov bilan bog'liq sozlamalarni konfiguratsiya qilishingiz kerak bo'ladi. **Ultimate Multisite → Settings** ga o'ting va **Payment** (To'lov) yorlig'iga bosing.

![Payment settings tab](/img/admin/settings-payments-top.png)

Mana to'lov sozlamalari sahifasining to'liq ko'rinishi:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Umumiy To'lov Variantlari {#general-payment-options}

Umumiy sozlamalarda quyidagilarni konfiguratsiya qilishingiz mumkin:

- **Currency** (Valyuta) — Transaksiyalarda ishlatiladigan standart valyuta
- **Currency Position** (Valyuta joylashuvi) — Valyuta simvol qayerda ko'rsatilishini belgilash (miqdor oldida/keyin)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### To'lov Eshiklari (Payment Gateways) {#payment-gateways}

Ultimate Multisite bir nechta to'lov eshiklarini qo'llab-quvvatlaydi. Har birini To'lov sozlamalari yorlig'idan yoqishingiz va konfiguratsiya qilishingiz mumkin.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Quyidagilar mavjud:

- **Stripe** — Stripe orqali kredit karta to'lovlari
- **PayPal** — PayPal to'lovlari
- **Manual** (Manual) — Offline yoki maxsus to'lovlarni qayta ishlash uchun

Har bir eshikning o'z konfiguratsiya bo'limi mavjud bo'lib, unda API kalitlarini va boshqa sozlamalarni kiritasiz.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Rejimi (Sandbox Mode) {#sandbox-mode}

To'lov integratsiyangizni haqiqatda ishga tushirishdan oldin sinab ko'rish uchun **Sandbox Mode** ni yoqishingiz mumkin. Sandbox rejimi faol bo'lgan vaqtda hech qanday haqiqiy to'lovlar amalga oshirilmaydi.

## To'lovlarni Ko'rish {#viewing-payments}

Ultimate Multisite ostida **Payments** (To'lovlar) sahifasiga o'ting va tarmoq bo'yicha barcha operatsiyalarni ko'rishingiz mumkin.

![Payments list](/img/admin/payments-list.png)

Siz to'lovlarni holat bo'yicha (tugallangan, kutishda, muvaffaqiyatsiz, qaytarilgan) filtrlashingiz va aniq operatsiyalarni qidirishingiz mumkin.

Тўловга клирланиб унинг тўлиқ тартибини кўришингиз мумкин бўлади, бу ичида товарлар рўйхати, алоқадорлик (membership), мижоз маълумотлари ва тўлов эвазиям (payment gateway) маълумотлари ҳам шунда бўлади.

## Ҳисоботлар (Invoices) {#invoices}

Ultimate Multisite тўловлар учун автоматик ҳисоботларни тайёрлай олади. Ҳисобот шаклини ва рақам бериш форматини Тўлов sozlamalaridan ўзгартиришингиз мумкин.

Ҳисобот шаклини тақдим этиш таннарлари қуйидагиларни ўз ичига олади:

- ҳисоботларда кўрсатиладиган **Компания номи ва манзил**
- **Ҳисобот рақами** формати ва кетма-кетлиги
- ҳисобот башорасида кўрсатиладиган **Логотип**
- шартлар, эслатмалар ёки ҳуқуқий маълумотлар учун **ўз қиламан футер матни**

Ҳисобот шаклини ўзгартириш учун **Ultimate Multisite → Settings → Payment** бўлимига кириб, ҳисобот билан боғлиқ sozlamalar орасида қайтиб кўришингиз мумкин.
