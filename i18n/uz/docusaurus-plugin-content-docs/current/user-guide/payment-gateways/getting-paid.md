---
title: To‘lov olish
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# To‘lovlarni qabul qilish (v2)

_**MUHIM ESLATMA: Ushbu maqola Ultimate Multisite 2.x versiyasiga taalluqli.**_

Ultimate Multisite ichki a’zolik va hisob-kitob tizimiga ega. Hisob-kitob tizimimiz ishlashi uchun biz e-tijoratda ishlatiladigan eng keng tarqalgan to‘lov shlyuzlarini integratsiya qilganmiz. Ultimate Multisite’dagi standart to‘lov shlyuzlari _Stripe_ , _PayPal_ va qo‘lda to‘lovdir. Shuningdek, tegishli add-on’larini o‘rnatish orqali to‘lovlarni qabul qilish uchun _WooCommerce_ , _GoCardless_ va _Payfast_ dan ham foydalanishingiz mumkin.

## Asosiy sozlamalar {#basic-settings}

Ushbu to‘lov shlyuzlarining istalgan birini Ultimate Multisite to‘lov sozlamalari ostida sozlashingiz mumkin. Uni **Ultimate Multisite menyusi > Settings > Payments** orqali topishingiz mumkin.

![Ultimate Multisite’dagi Payments panelini ko‘rsatuvchi to‘lov sozlamalari sahifasi](/img/config/payments-settings-page.png)

To‘lov shlyuzingizni sozlashdan oldin, sozlashingiz mumkin bo‘lgan asosiy to‘lov sozlamalarini ko‘rib chiqing:

**Avtomatik yangila** **shni majburlash:** Bu foydalanuvchi tanlagan hisob-kitob davriyligiga qarab har bir hisob-kitob sikli oxirida to‘lov avtomatik ravishda takrorlanishini ta’minlaydi.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 avtomatik yangilash yoqilgan takroriy a’zolikni saqlashdan oldin faol shlyuzda qayta foydalaniladigan yangilash credential’i bor-yo‘qligini tekshiradi. Yangilash credential’i shlyuz obunasi, hisob-kitob kelishuvi, saqlangan vault token yoki shunga teng qayta foydalaniladigan to‘lov usuli bo‘lishi mumkin. Agar shlyuz foydalanishga yaroqli credential mavjud emasligini bildirsa, Ultimate Multisite a’zolikni saqlaydi, lekin avtomatik yangilashni o‘chiradi va yetishmayotgan credential holatini qayd etadi, shunda administrator yoki support jarayoni mijozdan yangilash sanasidan oldin to‘lovni qayta avtorizatsiya qilishni so‘rashi mumkin.

Bu shlyuz faqat bir martalik to‘lovlarni undira olganida a’zolik avtomatik yangilanayotgandek ko‘rinishining oldini oladi. Shlyuz add-on’lari takroriy checkout’lar qayta foydalaniladigan credential’ni saqlashini tasdiqlashi kerak, ayniqsa shlyuz bir martalik undirish va vault/subscription to‘lov rejimlarining ikkalasini ham qo‘llab-quvvatlaganda.

**To‘lov usulisiz sinov muddatlariga ruxsat berish:** Ushbu parametr yoqilgan bo‘lsa, mijozingiz ro‘yxatdan o‘tish jarayonida hech qanday moliyaviy ma’lumot qo‘shishi shart bo‘lmaydi. Bu faqat sinov muddati tugagandan keyin talab qilinadi.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**To‘lov tasdiqlanganda invoys yuborish:** Bu sizga to‘lovdan keyin invoys yuborish yoki yubormaslik imkoniyatini beradi. E’tibor bering, foydalanuvchilar o‘z subsite dashboard’i ostida to‘lov tarixiga kirish huquqiga ega bo‘ladi. Bu parametr Manual Gateway’ga tatbiq etilmaydi.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoys raqamlash sxemasi:** Bu yerda siz to‘lov ma’lumotnoma kodi yoki ketma-ket raqam sxemasidan birini tanlashingiz mumkin. Agar invoyslaringiz uchun to‘lov ma’lumotnoma kodidan foydalanishni tanlasangiz, hech narsani sozlashingiz shart emas. Agar ketma-ket raqam sxemasidan foydalanishni tanlasangiz, **keyingi invoys raqami** (Bu raqam tizimda yaratiladigan keyingi invoys uchun invoys raqami sifatida ishlatiladi. Har safar yangi invoys yaratilganda u bittaga oshiriladi. Invoys ketma-ket raqamini muayyan qiymatga qayta o‘rnatish uchun uni o‘zgartirib saqlashingiz mumkin) va **invoys raqami prefiksi**ni sozlashingiz kerak bo‘ladi.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Shlyuzlarni qayerdan topish mumkin: {#where-to-find-the-gateways}

To‘lov shlyuzlarini o‘sha sahifaning o‘zida sozlashingiz mumkin ( **Ultimate Multisite > Settings > Payments**). **Faol to‘lov shlyuzlari** ostida siz quyidagilarni ko‘rishingiz mumkin: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ va _Manual_.

![Stripe, Stripe Checkout, PayPal va Manual ro‘yxatini ko‘rsatuvchi Faol to‘lov shlyuzlari bo‘limi](/img/config/payments-active-gateways.png)

Har bir to‘lov shlyuzi uchun uni sozlash bosqichlari bo‘yicha sizni yo‘naltiradigan alohida maqolamiz bor; ularni quyidagi havolalardan topishingiz mumkin.

To‘lov tafsilotlarini ko‘rishingiz va tahrirlashingiz mumkin:

![To‘lovni tahrirlash interfeysi](/img/admin/payment-edit.png)

Mana to‘lovni tahrirlash sahifasining to‘liq ko‘rinishi:

![To‘lovni tahrirlashning to‘liq interfeysi](/img/admin/payment-edit-full.png)

Shuningdek, to‘lov shlyuzlari sozlamalarining to‘liq ko‘rinishi ham shu yerda:

![To‘lov shlyuzlari sozlamalarining to‘liq sahifasi](/img/config/settings-payments-gateways-full.png)

**Stripe shlyuzini sozlash**

**PayPal shlyuzini sozlash**** **

**Qo‘lda to‘lovlarni sozlash**

Endi, agar siz to‘lov shlyuzi sifatida _WooCommerce_ , _GoCardless_ yoki _Payfast_ dan foydalanmoqchi bo‘lsangiz, ularning add-on’larini **o‘rnatishingiz va sozlashingiz** kerak bo‘ladi.

### WooCommerce add-on’ini qanday o‘rnatish mumkin: {#how-to-install-the-woocommerce-add-on}

Biz _Stripe_ va _PayPal_ ayrim mamlakatlarda mavjud emasligini, bu esa Ultimate Multisite foydalanuvchilarining plugin’imizdan samarali foydalanishini cheklashi yoki qiyinlashtirishini tushunamiz. Shuning uchun biz juda mashhur e-tijorat plugin’i bo‘lgan _WooCommerce,_ ni integratsiya qilish uchun add-on yaratdik. Dunyo bo‘ylab dasturchilar unga turli to‘lov shlyuzlarini integratsiya qilish uchun add-on’lar yaratgan. Biz bundan foydalanib, Ultimate Multisite hisob-kitob tizimi bilan ishlatishingiz mumkin bo‘lgan to‘lov shlyuzlarini kengaytirdik.

_**MUHIM:** Ultimate Multisite: WooCommerce Integration WooCommerce kamida asosiy site’ingizda faollashtirilgan bo‘lishini talab qiladi._

Avval add-on’lar sahifasiga o‘ting. Uni **Ultimate Multisite > Settings** orqali topishingiz mumkin. Siz **Add-ons** jadvalini ko‘rishingiz kerak. **Check our Add-ons** ustiga bosing.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** ustiga bosgandan so‘ng, add-on’lar sahifasiga yo‘naltirilasiz. Bu yerda barcha Ultimate Multisite add-on’larini topishingiz mumkin. **Ultimate Multisite: WooCommerce Integration** add-on’i ustiga bosing.

![WooCommerce Integration’ni ham o‘z ichiga olgan Ultimate Multisite add-on’lari ro‘yxati ko‘rsatilgan add-on’lar sahifasi](/img/addons/addons-page.png)

Qo‘shimcha tafsilotlari bilan oyna ochiladi. Shunchaki **Hozir o‘rnatish** tugmasini bosing.

<!-- Skrinshot mavjud emas: Hozir o‘rnatish tugmasi bilan Ultimate Multisite WooCommerce Integration qo‘shimchasi tafsilotlari oynasi -->

O‘rnatish tugagach, siz pluginlar sahifasiga yo‘naltirilasiz. Bu yerda shunchaki **Tarmoqda faollashtirish** tugmasini bosing va WooCommerce qo‘shimchasi tarmog‘ingizda faollashtiriladi.

<!-- Skrinshot mavjud emas: WooCommerce Integration qo‘shimchasi uchun Tarmoqda faollashtirish havolasi bo‘lgan pluginlar sahifasi -->

Uni faollashtirgandan so‘ng, agar veb-saytingizda WooCommerce plugin hali o‘rnatilmagan va faollashtirilmagan bo‘lsa, siz eslatma olasiz.

<!-- Skrinshot mavjud emas: Administratorga WooCommerce pluginni o‘rnatish va faollashtirishni eslatuvchi admin bildirishnomasi -->

WooCommerce Integration qo‘shimchasi haqida ko‘proq o‘qish uchun **shu yerni bosing**.

### GoCardless qo‘shimchasini qanday o‘rnatish mumkin: {#how-to-install-the-gocardless-add-on}

_GoCardless_ qo‘shimchasini o‘rnatish bosqichlari _WooCommerce_ qo‘shimchasi bilan deyarli bir xil. Iltimos, qo‘shimchalar sahifasiga o‘ting va **Ultimate Multisite: GoCardless Gateway** qo‘shimchasini tanlang.

<!-- Skrinshot mavjud emas: Ultimate Multisite GoCardless Gateway qo‘shimchasi ajratib ko‘rsatilgan qo‘shimchalar sahifasi -->

Qo‘shimcha oynasi ochiladi. **Hozir o‘rnatish** tugmasini bosing.

<!-- Skrinshot mavjud emas: Hozir o‘rnatish tugmasi bilan Ultimate Multisite GoCardless Gateway qo‘shimchasi tafsilotlari oynasi -->

O‘rnatish tugagach, siz pluginlar sahifasiga yo‘naltirilasiz. Bu yerda shunchaki **Tarmoqda faollashtirish** tugmasini bosing va _GoCardless_ qo‘shimchasi tarmog‘ingizda faollashtiriladi.

<!-- Skrinshot mavjud emas: GoCardless Gateway qo‘shimchasi uchun Tarmoqda faollashtirish havolasi bo‘lgan pluginlar sahifasi -->

_GoCardless_ gateway bilan qanday boshlashni o‘rganish uchun **ushbu maqolani o‘qing**.

### Payfast qo‘shimchasini qanday o‘rnatish mumkin: {#how-to-install-the-payfast-add-on}

Qo‘shimchalar sahifasiga o‘ting va **Ultimate Multisite: Payfast Gateway** qo‘shimchasini tanlang.

<!-- Skrinshot mavjud emas: Ultimate Multisite Payfast Gateway qo‘shimchasi ajratib ko‘rsatilgan qo‘shimchalar sahifasi -->

Qo‘shimcha oynasi ochiladi. **Hozir o‘rnatish.** tugmasini bosing.

<!-- Skrinshot mavjud emas: Hozir o‘rnatish tugmasi bilan Ultimate Multisite Payfast Gateway qo‘shimchasi tafsilotlari oynasi -->

O‘rnatish tugagach, siz pluginlar sahifasiga yo‘naltirilasiz. Bu yerda shunchaki **Tarmoqda faollashtirish** tugmasini bosing va _Payfast_ qo‘shimchasi tarmog‘ingizda faollashtiriladi.

<!-- Skrinshot mavjud emas: Payfast Gateway qo‘shimchasi uchun Tarmoqda faollashtirish havolasi bo‘lgan pluginlar sahifasi -->
