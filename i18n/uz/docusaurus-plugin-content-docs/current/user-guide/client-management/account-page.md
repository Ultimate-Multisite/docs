---
title: Mijoz hisob sahifasi
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Mijozingiz Hisob Sahifasi (v2) {#your-clients-account-page-v2}

_**MUHIM MA'LUMOT: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Mijozlar sizning tarmoqqa saytga obuna bo'lganda, ular o'zlar uchun to'lovlar, a'zoliklar, domenlar, reja cheklovlari kabi muhim ma'lumotlarni o'z ichiga olgan veb-sayt va uning dashboardiga kirish imkoniyatiga ega bo'lishadi...

Bu tutorialda biz sizni mijoz hisob sahifasi orqali yo'l ko'rsatamiz va ularning bu sahifada nima ko'rishi va qila olishini ko'rasiz.

## Hisob Sahifasi {#the-account-page}

Hisob sahifasiga mijozning dashboardida **Account** (Hisob) tugmasidan bosib kirish mumkin.

![Mijoz dashboardidagi hisob menyusi](/img/account-page/account-menu.png)

Sovereign tenant tarmoqlarida, Ultimate Multisite v2.13.0 bu mijozlarni boshqarish tajribasini asosiy saytda saqlab qoladi. Agar mijoz sovereign tenantdan hisobni ochsa va undan to'lov, hisob-kitob, faktura, saytni boshqarish, shablonni almashtirish yoki domen xaritasi kabi harakatlarni amalga oshirsa, bu harakatlar tarmoqning to'lov va a'zolik yozuvlarini vakolatli saqlashi uchun asosiy saytdagi mijoz paneli tomon qaytadi.

Mijoz sovereign tenantdan kelganida, asosiy saytdagi mijoz paneli tenant saytiga qaytish havolasini o'z ichiga olishi mumkin. Bu qaytish havolasi faqat Ultimate Multisite mijozning boshqa saytlari orasidagi qaytish maqsadini tasdiqlashi mumkin bo'lganda ko'rsatiladi, bu esa tenant ish jarayonini saqlab qolgan holda noto'g'ri yo'naltirishlarni oldini oladi.

![Mijoz hisob sahifasi umumiy ko'rinishi](/img/account-page/overview.png)

Mijoz buni bosgandan so'ng, ular o'z a'zoliklari, to'lov manzili, fakturalar, domenlar va sayt cheklovlari haqida umumiy ko'rinishni ko'rishadi, shuningdek (tarmoqningizda ruxsat etilgan bo'lsa) ****Sayt Shabloni**ni ham o'zgartira olishadi.

U shuningdek, a'zolikni boshqa reja yoki siz taklif qiladigan boshqa paket yoki xizmat bilan almashtirishi mumkin. Har bir bo'limni alohida ko'rib chiqamiz.

### A'zo Sizning A'zolik Ko'rinishi: {#your-membership-overview}

Sizning mijozlaringning veb-sayt nomi ostida joylashgan birinchi blokda ular hozirgi reja va undan sotib olingan xizmatlar/paketlar haqidagi umumiy ma'lumot ko'rsatiladi. Bu blok shuningdek, a'zolik raqamini, uning uchun to'langan dastlabki miqdorni, reja va har qanday xizmat/paketning narxini va bu a'zolik uchun necha marta hisob-yuritilganligini ko'rsatadi. Ular shuningdek, a'zolik **Faol** , **Yakunlangan** yoki **Bekor qilingan** ekanligini ham ko'rishi mumkin.

![A'zolik ko'rinishi reja, miqdor va hisob-yuritish tafsilotlarini ko'rsatuvchi rasmi](/img/account-page/membership-card.png)

Bu blokning ostida mijozlar **Bu Sayt Haqida** va **Sayt Cheklovlari** bloklarini ko'rishlari mumkin. Bu bloklar ularning rejasiga tegishli barcha cheklovlarni — disk maydoni, postlar, sahifalar, tashriflar va h.k. — ko'rsatadi. Bu cheklovlar **Ultimate Multisite > Products** da har bir reja sahifasida sozlanishi mumkin.

![A'zolik haqida va sayt cheklovlari bloklarini ko'rsatuvchi rasmlar](/img/account-page/site-limits.png)

**Sizning A'zoligingiz** ning o'ng tomonida mijozlar **O'zgartirish** tugmasini bosishlari mumkin. Bu ularga mavjud bo'lgan barcha rejalarni va paketlarni/xizmatlarni ko'rsatadi. Agar ular boshqa rejani tanlasalar, a'zolikning cheklovlari hozirgi a'zolik cheklovlari o'rniga amal qiladi — undan qaysi reja (past yoki yuqori) bo'lishidan ahamiyat yo'q.

Endi, agar mijozlar bu hozirgi a'zolik uchun paketlarni yoki xizmatlarni sotib olishni tanlasalar — masalan, ko'proq disk maydoni yoki tashriflar — hozirgi a'zolik o'zgarmaydi, faqat yangi paketlar unga qo'shiladi.

Eslatma: bu a'zolik o'zgartirish sahifasiga kupon kodlari qo'shilmaydi. Agar mijoz birinchi a'zolik xaridi vaqtida kupon kodidan foydalangan bo'lsa, ushbu kod yangi a'zolikka ham tegishli bo'ladi.

### Hisob-yuritish Manzilini Yangilash: {#updating-the-billing-address}

Hisobiyda hisob sahifasida mijozlar o'zlar uchun faktura manzilini ham yangilashlari mumkin. Ular shunchaki _Billing Address_ (Faktura manzili) yonidagi **Update** (Yangilash) tugmasiga bosishlari kerak.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Mijozingiz uchun yangi oynaga chiqadi. Ular shunchaki yangi manzilni to'ldirib, _Save Changes_ (O'zgartirishlarni saqlash) tugmasiga bosishlari kerak.

![Update billing address form](/img/account-page/billing-address-form.png)

### Sayt shablonini o'zgartirish: {#changing-the-site-template}

Mijozlaringiz sayt shablonlarini o'zgartirishlari mumkin bo'lishini ta'minlash uchun siz **Ultimate Multisite > Settings (Sozlamalar) > Sites** ga o'tib, **Allow Template Switching** (Shablonlarni almashtirishga ruxsat berish) opsiyasini yoqishingiz kerak.

Shuningdek, **Ultimate Multisite > Products (Mahsulotlar)** bo'limida sizning rejalaringizni tanlang va **Site Templates (Sayt shablonlari)** yorlig'iga o'ting. **Allow Site Templates** (Sayt shablonlariga ruxsat berish) opsiyasining yoqilganligiga va **Site Template Selection Mode** (Sayt shablonini tanlash rejimi) da **Choose Available Site Templates** (Mavjud sayt shablonlarini tanlash) opsiyasi tanlanganligiga ishonch hosil qiling.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Siz veb-saytingizdagi barcha mavjud sayt shablonlarini ko'rishingiz mumkin bo'ladi. Qaysilini mavjud qilishni va qaysilarning ushbu reja ostidagi mijozlar uchun mavjud bo'lmasligini tanlash mumkin. Eslang, bu opsiyalar ham to'lov shakliga ta'sir qiladi, shuning uchun **Not Available** (Mavjud emas) deb tanlangan har qanday shablon ushbu reja uchun ro'yxatdan o'tish sahifasida paydo bo'lmaydi.

Endi mijozlar o'z hisob sahifasidagi **Change Site Template** (Sayt shablonini o'zgartirish) tugmasiga bosishi mumkin.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 yangi dizayn qilingan shablon almashtirish paneli (panel)ni ko'rsatadi. Bu panel mijozlarga o'zgartirishdan oldin qaysi shablon faol ekanligini ko'rishlari uchun **current-template card** (hozirgi shablon kartasi) bilan boshlanadi.

Mijozlar o'z tanlaganlarini ko'rib yurgan vaqtgacha mavjud sayt shablonlari doimiy ret gridi ko'rinib turadi. Bu ularga hozirgi tanlovdan nazar solmasdan, rejalari uchun ruxsat etilgan shablonlarni qanday taqqoslashga yordam beradi.

![Reja uchun mavjud sayt shablonlari ro'yxati](/img/config/site-templates-list.png)

O'zgartirmoqchi bo'lganini tanlagandan so'ng, o'zgarishni tasdiqlash so'raladi.

![Sayt shablonini o'zgartirish tasdiqlash dialogi](/img/account-page/template-switch-confirm.png)

Tasdiqlashni yoqib, **Switch Process** (O'zgartirish jarayonini amalga oshirish) tugmasini bosganingizdan so'ng, yangi sayt shablonidan foydalaniladi mijozning veb-saytiga.

Mijozlar ham bu panel orqali hozirgi tayinlangan shablonga qaytarish kerak bo'lganda **Reset current template** (Hozirgi shablonni qayta tiklash) funksiyasidan foydalanishlari mumkin. Boshqa shablonga o'tish kabi, shablonni qayta tiklash sayt kontentini yozib qo'yishi mumkin, shuning uchun mijozlar faqat qayta tiklash harakatini tushunishlari kerak.

### Maxsus domenlarni qo'shish: {#adding-custom-domains}

Mijozlaringiz ham bu reja uchun akkaunt sahifasida maxsus domen qo'shish imkoniyatiga ega bo'ladi. Mijozlaringizga maxsus domenlardan foydalanishga ruxsat berish uchun **Ultimate Multisite > Settings > Domain Mapping** (Domen xaritasi) ga o'ting.

**Enable Domain Mapping** (Domen xaritasi faolligini yoqish) opsiyasini yoqing. Bu mijozlaringizga tarmoq darajasida maxsus domenlardan foydalanish imkonini beradi.

Shuningdek, domen xaritasi mahsulot asosida faollikda ekanligini tekshirib ko'ring – chunki siz bir mahsulotni mijozlaringizning maxsus domenlardan foydalanishiga ruxsat bermaslik uchun cheklashingiz mumkin.

**Ultimate Multisite > Products** (Mahsulotlar) ga o'ting. Tanlagan rejaningizni tanlang va **Custom Domains** (Maxsus domenlar) yorlig'iga kiring. **Allow Custom Domains** (Maxsus domenlarga ruxsat berish) opsiyasini yoqing.

![Maxsus domenlar tabsi va Allow Custom Domains tugmasi](/img/config/product-custom-domains.png)

Bu, bu aniq reja (plan)ga abonashtirilgan barcha mijozlarning o'ziga xos domenlardan foydalanishini ta'minlaydi. Endi, Hisob sahifasida mijozlar **Domain qo'shish** tugmasini bosib o'ziga xos domen qo'shishi mumkin.

![Hisob sahifasidagi Domain qo'shish tugmasi](/img/account-page/add-domain-button.png)

Ochilan birinchi oynacha mijozlarga ushbu aniq domen tizimda ishlashi uchun DNS yozuvlarini qanday yangilash kerakligini ko'rsatadigan xabarni ko'rsatadi.

![Aniqa domen qo'shilganda ko'rsatiladigan DNS ko'rsatmalar](/img/account-page/add-domain-dns.png)

Bu xabarni (**Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** orqali) siz tahrirlashingiz mumkin.

![Domain Mapping da yangi domen ko'rsatish sozlamasi](/img/config/settings-domain-mapping.png)

Mana domen mapping sozlamalar sahifasining to'liq ko'rinishi:

![Domen mapping sozlamalari to'liq sahifa](/img/config/settings-domain-mapping-full.png)

**Keyingi qadamni** bosgandan so'ng, mijozlar o'ziga xos domen nomini qo'shishi va bu aniq domen asosiy bo'lishini tanlashlari mumkin. Eslatma: mijozlar veb-saytlari uchun bir nechta o'ziga xos domenlardan foydalanishlari mumkin, shuning uchun ular qaysi biri asosiy bo'lishini tanlashlari mumkin.

![Asosiy domen opsiyasi bilan aniq domen nomi kiritish](/img/account-page/add-domain-primary.png)

**Domain qo'shishni** bosgandan so'ng, domen mijozning hisobiga qo'shiladi. Endi ular faqat o'z domain registratorida ushbu aniq domen DNS yozuvlarini o'zgartirishlari kerak.

### Parolni o'zgartirish: {#changing-password}

Hisob paneli ichida mijozlar **Parolni o'zgartirish** tugmasini bosib parollarini ham o'zgartirishi mumkin.

![Hisob sahifasidagi Parolni o'zgartirish tugmasi](/img/account-page/change-password-button.png)

Bu yeni pencerede mijozlaringizning hozirgi parolini va foydalanishni xohlagan yangi parolni kiritishi kerak bo'ladigan yangi oynaga ko'rsatiladi.

![Hozirgi va yangi parol maydonchalari bilan parol o'zgartirish shakli](/img/account-page/change-password-form.png)

### Xavfli hudud: {#danger-zone}

Bizda **Xavfli hudud** qismida ko'rsatilgan ikkita variant ham mavjud: **Saytni o'chirish** va **Hisobni o'chirish**. Bu ikkalasi ham Xavfli hududda joylashgan, chunki bu ikki harakat orqadan qaytarilmaydi. Agar mijozlaringiz veb-saytlarini yoki hisoblarini o'chirib tashlasalar, ularni tiklay olmaydilar.

![Saytni va Hisobni o'chirish variantlari bilan Xavfli hudud](/img/account-page/danger-zone.png)

Agar mijozlaringiz ushbu ikkita variantdan biriga bosish bersalar, ular veb-sayt yoki hisobni olib tashlash opsiyasini yoqish kerak bo'lgan oynaga ko'rsatiladi va bu harakat orqadan qaytarilmaydi degan ogohlantirish beriladi.

![Saytni o'chirish tasdiqlash dialogi](/img/account-page/delete-site-confirm.png)

![Hisobni o'chirish tasdiqlash dialogi](/img/account-page/delete-account-confirm.png)

Agar ular veb-saytlarini o'chirib tashlasalar, ularning hisobi va a'zoliklari o'zgarmashtirilgan bo'ladi. Ular faqat veb-saytdagi barcha kontentni yo'qotadilar. Agar ular hisoblarini o'chirib tashlasalar, barcha veb-saytlar, a'zoliklar va bu hisobga oid ma'lumotlar yo'qoladi.
