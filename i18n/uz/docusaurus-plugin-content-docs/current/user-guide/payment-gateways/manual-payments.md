---
title: Manuel to'lovlarni sozlash
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manuel To'lovlarni Sozlash (v2)

_**MUHIM Eslatma: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Manuel to'lovlar siz foydalanuvchilaringiz uchun **Stripe** yoki **PayPal** mavjud bo'lmaganda boshqa to'lov usullarini taklif qilishning bir yo'lidir. Bu mahalliy ravishda foydalanuvchilaringizga mavjud bo'lgan tarmoq yoki bank o'tkazmasi yoki boshqa har qanday to'lov usuli bo'lishi mumkin.

## Manuel To'lovlarni Faollashtirish

Manuel to'lovni sozlash juda oson. Siz faqat to'lov eshig'lari (payment gateways) ostida uni yoqishingiz va foydalanuvchi pulni qanday yuborishi haqida batafsil ko'rsatmalar berishingiz kerak.

Avvalo, **Ultimate Multisite > Settings > Payments** ga o'ting. **Payment Gateways** ostida **Manual** ni yoqing (toggle on). Siz uchun **Payment Instructions** (To'lov Ko'rsatmaları) qutisi paydo bo'lishini ko'rasiz.

Bu qutiga mijozlaringiz to'lovni amalga oshirish uchun kerak bo'ladigan ma'lumotlarni qo'shing. Bu sizning bank hisob ma'lumotlaringiz va elektron pochta manzilingiz bo'lishi mumkin, shunda mijoz sizga pul o'tkazish tasdiqini yuborishi mumkin.

![Payment Instructions matn maydonli manual to'lov eshig'i yoqilishi](/img/config/manual-gateway-expanded.png)

Mana manual eshig'i sozlamalari interfeysi:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Sozladikten so'ng, faqat **Save Settings** (Sozlamalarni Saqlash) tugmasini bosing va vazifani bajardingiz. Foydalanuvchilar sizning tarmoqqa ro'yxatdan o'tganda, ular xaridni yakunlash uchun sizdan ko'rsatmalar olib borishingizni ayton beradigan xabarni ko'rishadi.

![To'lov ko'rsatmalarini olish haqida foydalanuvchiga yuboriladigan ro'yxatdan o'tish tasdiq xabari](/img/frontend/registration-manual-notice.png)

Va ular sizning **Thank You** (Rahmat) sahifangizda ham to'lov ko'rsatmalarini olib boradigan xabar bilan duch kelishadi.

<!-- Screenshot unavailable: To'lovdan keyin ko'rsatmalarini ko'rsatuvchi Rahmat sahifasi -->

## Manuel To'lovlarni Tasdiqlash

Ручная тўловни тасдиқлаш учун чап паст қисмдаги **Payments** менюсига ўтинг. У ерда сизнинг тармоқдаги барча тўловлар ва уларнинг **status** (ҳал қилувчи ҳолати) маълумотларини кўрасиз. Ручная тўлов олиб бориши, уни мана шундай ўзгартиргандан тонг ҳам **Pending** (Кутилаётган) статусида бўлади, ҳар доим сиз уни ўзингиз ўзгартиргунча.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** (ишловчи код) ни босиб тўлов саҳифасини киритинг. Бу саҳда кутилаётган тўлов ҳақидаги барча маълумотлар, масалан, reference ID, маҳсулотлар, вақт белгилари ва бошқа нарсаларни топишингиз мумкин.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ўнг томонда тўловнинг статусини ўзгартирishingiz мумкин. Уни **Completed** (Тўлов берилди) қилиб ва **Activate Membership** (Уни фаоллаштириш) опциясини ўчириб чиқса, мижоз сайт алоҳида бўлади ва уларнинг аъзолиги фаол бўлади.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
