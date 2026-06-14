---
title: To To'lov Olish
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# To'lov Olishish (v2)

_**MUHIM MA'LUMOT: Bu maqola Ultimate Multisite 2.x versiyasiga tegishli.**_

Ultimate Multisite ichida a'zolik va to'lov tizimi mavjud. Bizning to'lov tizimimiz ishlay olishi uchun e-commerce'da eng ko'p ishlatiladigan to'lov eshig'larini integratsiya qilganmiz. Ultimate Multisite dagi standart to'lov eshig'lari _Stripe_, _PayPal_ va Qo'lda To'lovdir. Shuningdek, mos keluvchi add-onlarni o'rnatish orqali to'lovlarni qabul qilish uchun _WooCommerce_, _GoCardless_ va _Payfast_ dan ham foydalanishingiz mumkin.

## Asosiy Sozlamalar

Siz barcha bu to'lov eshig'laridan birini Ultimate Multisite to'lov sozlamalari ostida sozlash imkoniga ega bo'lasiz. Bunga **Ultimate Multisite menyusi > Settings > Payments** orqali borishingiz mumkin.

![Ultimate Multisite da To'lovlar sozlamalari sahifasi, To'lovlar paneli ko'rsatilgan](/img/config/payments-settings-page.png)

To'lov eshig'ingizni sozlashdan oldin, siz sozlab olishingiz mumkin bo'lgan asosiy to'lov sozlamalariga qarang:

**Force auto-rene (Avtomatik yangilashni majburlash)** **w:** Bu foydalanuvchi tanlagan hisob-kitob chastotasiga qarab, har bir hisob-kitob sikli oxirida to'lov avtomatik ravishda takrorlanishini ta'minlaydi.

<!-- Screenshot unavailable: To'lovlar sozlamalari sahifasidagi Avtomatik yangilashni majburlash (Force Auto-Renew) tugmasi sozlamasi -->

Ultimate Multisite v2.13.0 faol eshig'ning takrorlanuvchi a'zolikni avtomatik yangilash bilan saqlashdan oldin qayta ishlatiladigan yangilash kredensialiga ega ekanligini tekshiradi. Yangilash kredensiali bu, eshig'ning obunasi bo'lishi, hisob-kitob shartnomasi, saqlangan vault tokeni yoki ekvivalent takrorlanuvchi to'lov usuli bo'lishi mumkin. Agar eshig' foydalanadigan kredensial mavjud emasligini xabar qilsa, Ultimate Multisite a'zolikni saqlab qoladi, lekin avtomatik yangilashni o'chiradi va administrator yoki texnik yordamchi foydalanuvchidan yangilash sanasidan oldin to'lovni qayta tasdiqlash so'rash uchun yetishmayotgan kredensial holatini qayd etadi.

Bu, gateway faqat bir martalik to'lovlarni qabul qila oladigan holatlarda a'zo bo'lishning avtomatik yangilanishini ko'rsatmasligini ta'minlaydi. Gateway qo'shimchalari takroriy to'lovlarni saqlash uchun qayta ishlatiladigan autentifikatsiyani (credential) saqlashni tasdiqlashi kerak, ayniqsa gateway ham bir martalik qabul qilish va vault/subskripsiya to'lov rejimlarini qo'llab-quvvatlasa.

**To'lovsiz sinovlarni ruxsat etish** **metod:** Bu opsiyani yoqganingizda, mijozlar ro'yxatdan o'tish jarayonida hech qanday moliyaviy ma'lumot kiritmasliklari kerak bo'ladi. Bu faqat sinov muddati tugagandan so'ng talab qilinadi.

<!-- Screenshot unavailable: To'lovsiz sinovlarni ruxsat etish (Allow Trials Without Payment Method) o'giruvchi sozlamalari sahifasida -->

**To'lov tasdiqlangandan so'ng faktura yuborish:** Bu sizga to'lovdan keyin faktura yuborishni amalga oshirish yoki qilmaslik opsiyasini beradi. Eslatma: foydalanuvchilar o'z subsite dashboardlari orqali o'tkazgan to'lovlar tarixiga kirish imkoniyatiga ega bo'ladi. Bu opsiya Manual Gateway uchun qo'llanilmaydi.

<!-- Screenshot unavailable: To'lov tasdiqlangandan so'ng faktura yuborish (Send Invoice on Payment Confirmation) o'giruvchisi sozlamalari sahifasida -->

**Faktura raqamlash sxemasi:** Bu yerda siz to'lov referans kodini yoki ketma-ket raqamlar sxemasini tanlashingiz mumkin. Agar fakturalaringiz uchun to'lov referans kodidan foydalanishni tanlasangiz, hech narsa sozlashga hojat qilmaysiz. Agar ketma-ket raqamlar sxemasidan foydalanishni tanlasangiz, siz **keyingi faktura raqamini** (Bu raqam tizimda keyingi yaratiladigan faktura uchun faktura raqami sifatida ishlatiladi. Har bir yangi faktura yaratilganda u bittadan oshiriladi. Siz uni o'zgartirib, faktura ketma-ket raqamini aniq qiymatga qaytarish uchun saqlashingiz mumkin) va **faktura raqami oldi** (prefix) ni sozlash kerak bo'ladi.

<!-- Screenshot unavailable: Faktura raqamlash sxemasi o'giruvchisi, To'lov Referans Kodu va Ketma-ket Raqamlar opsiyalari bilan -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gateway'larni qayerdan topish mumkin:

To'lov eslatmalarini (payment gateways) bir xil sahifada sozlash mumkin (**Ultimate Multisite > Settings > Payments**). **faol to'lov eslatmalari** (active payment gateways) ning pastida siz quyidagilarni ko'rishingiz mumkin: _Stripe_, _Stripe_ Checkout, _PayPal_ va _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Har bir to'lov eslatmasi uchun maxsus maqola bor, u sizga uni sozlash bosqichlarini ko'rsatadi va ularni quyidagi linklarda topishingiz mumkin.

To'lov tafsilotlarini ko'rish va tahrirlash:

![Payment edit interface](/img/admin/payment-edit.png)

To'lov tahrirlash sahifasining to'liq ko'rinishi mana:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Shuningdek, to'lov eslatmalari sozlamalarining to'liq ko'rinishi ham mana:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe eslatmasini sozlash**

**PayPal eslatmasini sozlash**** **

**Manual to'lovlarni sozlash**

Endi, agar siz _WooCommerce_, _GoCardless_ yoki _Payfast_ ni to'lov eslatmanız sifatida ishlatmoqchi bo'lsangiz, ularning qo'shimcha modullaridan (add-ons) foydalanishingiz kerak bo'ladi.

### WooCommerce qo'shimchasini o'rnatish qanday?

Biz tushunamizki, ba'zi mamullarda _Stripe_ va _PayPal_ mavjud emasligi Ultimate Multisite foydalanuvchilarining bizning pluginimizdan samarali foydalanishini cheklaydigan yoki to'siq bo'ladigan holatlarga olib kelishi mumkin. Shuning uchun biz juda mashhur elektron tijorat (e-commerce) pluginidir _WooCommerce_ bilan integratsiya qilish uchun qo'shimcha modullarni yaratdik. Dunyodagi ishlab chiquvchilar unga turli to'lov eslatmalarini integratsiya qilish uchun qo'shimcha modullar yaratishdi. Biz bu imkoniyatdan foydalanib, Ultimate Multisite hisoboti bilan ishlatiladigan to'lov eslatmalari sonlingizni kengaytirdik.

**MUHIMMI MA'LUMOT:** Ultimate Multisite: WooCommerce integratsiyasi uchun WooCommerce ning asosiy saytingizda kamida faollashganligini talab qiladi.

Avvalo, iltimos qiling, qo'shimchalar (add-ons) sahifasiga o'ting. Buni **Ultimate Multisite > Settings** orqali topishingiz mumkin. Sizda **Add-ons** jadvali ko'rinishi kerak. **Check our Add-ons** (Qo'shimchalarimizni tekshiring) ustiga bosing.

<!-- Screenshot unavailable: Ultimate Multisite Settings panelidagi Add-ons jadvali va Check our Add-ons linki -->

**Check our Add-ons** ustiga bosgandan so'ng, siz qo'shimchalar sahifasiga yo'naltirilasiz. Bu yerda barcha Ultimate Multisite qo'shimchalari topishingiz mumkin. **Ultimate Multisite: WooCommerce Integration** (WooCommerce Integratsiyasi) qo'shimchasini tanlang.

![WooCommerce Integratsiyasini o'z ichiga olgan Ultimate Multisite qo'shimchalari ro'yxati](/img/addons/addons-page.png)

Qo'shimcha ma'lumotlar bilan oynacha ochiladi. Faqat **Install Now** (Endi o'rnating) ustiga bosing.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration qo'shimchasining Install Now tugmasi bilan dialog oynasi -->

O'rnatish tugagandan so'ng, siz pluginlar sahifasiga yo'naltirilasiz. Bu yerda faqat **Network Activate** (Tarmoqni faollashtiring) ustiga bosing va WooCommerce qo'shimchasi tarmoqingizda faollashtiriladi.

<!-- Screenshot unavailable: WooCommerce Integratsiyasi uchun Network Activate linki bilan pluginlar sahifasi -->

Uni faollashtirgandan so'ng, agar siz saytingizda hali ham WooCommerce pluginini o'rnatmagan va faollashtirmagan bo'lsangiz, sizga eslatma keladi.

<!-- Screenshot unavailable: Administratorga WooCommerce pluginini o'rnatish va faollashtirishni eslatuvchi admin xabari -->

WooCommerce Integratsiyasi haqida ko'proq ma'lumot olish uchun, **bu yerga bosing**.

### GoCardless qo'shimchasini o'rnatish qanday?

_GoCardless_ плагининини установлашнинг қадамлари _WooCommerce_ плагини учун ҳам жуда ўхшаш. Плагинилар (add-ons) саҳифасига киring va **Ultimate Multisite: GoCardless Gateway** плагинини танланг.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway плагинининг атрофидаги саҳна -->

Плагинининг ойнаси очилади. **Install Now** (Энди ўрнатиш) нига клиring.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway плагинининг тафсилот диалогови, Install Now тугмачаси билан -->

Учун ўрнатиш якунланса, сиз плагинилар (plugins) саҳифасига қайтасиз. Бу ерда фақат **Network Activate** (Тармоқни фаоллаштириш) нига клиring va _GoCardless_ плагини сизнинг тармоқингизда фаоллашиб қолади.

<!-- Screenshot unavailable: GoCardless Gateway плагини учун Network Activate хавфланиган плагинилар саҳифаси -->

_GoCardless_ gateway билан қандай бошқариш ҳақида билиш учун, **бу мақолани ўқинг**.

### Payfast плагинини олганини кўрсатиш:

Плагинилар (add-ons) саҳифасига киринг va **Ultimate Multisite: Payfast Gateway** плагинини танланг.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway плагинининг атрофидаги саҳна -->

Плагинининг ойнаси очилади. **Install Now** (Энди ўрнатиш) нига клиring.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway плагинининг тафсилот диалогови, Install Now тугмачаси билан -->

Учун ўрнатиш якунланса, сиз плагинилар (plugins) саҳифасига қайтасиз. Бу ерда фақат **Network Activate** (Тармоқни фаоллаштириш) нига клиring va _Payfast_ плагини сизнинг тармоқингизда фаоллашиб қолади.

<!-- Screenshot unavailable: Payfast Gateway плагини учун Network Activate хавфланиган плагинилар саҳифаси -->
