---
title: Elektron xatlar va ommaviy xabarlarni yuborish
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Email va Broadcasts yuborish (v2)

_**MUHIM ESLATMA: Bu maqola Ultimate Multisite 2.x versiyasiga tegishli.**_

Ultimate Multisite sizga maqsadli foydalanuvchiga yoki foydalanuvchilar guruhiga email yuborish, shuningdek e’lonlarni tarqatish uchun ularning admin dashboardida bildirishnomalar yuborish orqali mijozlaringiz bilan muloqot qilish imkonini beradigan funksiya bilan keladi

## Broadcasts orqali mijozlaringiz dashboardiga admin bildirishnomalarini qo‘shing

Ultimate Multisite broadcast funksiyasidan foydalanib, foydalanuvchingiz subsite admin dashboardiga **admin bildirishnomalari** qo‘shishingiz mumkin.

Agar tizimga texnik xizmat ko‘rsatish yoki mavjud foydalanuvchilaringizga yangi mahsulotlar yoki xizmatlarni taklif qilish kabi e’lon berishingiz kerak bo‘lsa, bu juda foydali. Admin bildirishnomasi foydalanuvchingiz dashboardida quyidagicha ko‘rinadi.

<!-- Skrinshot mavjud emas: Mijozning subsite dashboardida ko‘rsatilgan admin bildirishnomasi broadcasti -->

Admin bildirishnomasini boshlash uchun network admin dashboardingizga o‘ting va **Ultimate Multisite** menyusi ostida **Broadcasts** variantini topasiz.

![Ultimate Multisite adminidagi Broadcasts ro‘yxat sahifasi](/img/admin/broadcasts-list.png)

Mavjud broadcastlarni ham tahrirlashingiz mumkin:

![Broadcast tahrirlash interfeysi](/img/admin/broadcast-edit.png)

Ushbu sahifadan yuqoridagi **Add Broadcast** tugmasini bosing.

Bu Add broadcast modal oynasini ochadi, unda yubormoqchi bo‘lgan broadcast turini tanlashingiz mumkin.

Davom eting va **Message**ni tanlang, so‘ng **Next Step** tugmasini bosing.

![Message varianti tanlangan Add broadcast modal oynasi](/img/admin/broadcast-add-message.png)

Keyingi oyna sizdan **Target customer** yoki **Target product**ni so‘raydi. E’tibor bering, bir nechta foydalanuvchi yoki bir nechta mahsulotni tanlashingiz mumkin.

Foydalanuvchi accounti yoki mahsulotni qidirish uchun field ichida kalit so‘zni yozishni boshlashingiz kerak.

**Message type** fieldi ostida bildirishnoma rangini tanlashingiz mumkin. Bu xabaringizning shoshilinchligini ta’kidlaydi.

Keyin **Next Step**ni bosishingiz mumkin.

![Message broadcast uchun target customers, target product va message type fieldlari](/img/admin/broadcast-message-targets.png)

Keyingi oyna — foydalanuvchilarga broadcast qilmoqchi bo‘lgan mavzu va kontent/xabarni kiritib, xabaringizni tuzishni boshlashingiz mumkin bo‘lgan joy.

![Tuzish bosqichidagi broadcast xabari mavzusi va kontent tahrirlagichi](/img/admin/broadcast-edit.png)

Xabaringizni yaratgandan so‘ng, **Send** tugmasini bosishingiz mumkin.

Shu bilan tugadi. Admin bildirishnomasi darhol foydalanuvchingiz dashboardida ko‘rinishi kerak.

## Mijozlaringizga emaillar yuboring

Ultimate Multisite broadcast funksiyasidan foydalanib, foydalanuvchilaringizga email yuborishingiz mumkin. Emailni faqat aniq foydalanuvchilarga yuborish yoki ular obuna bo‘lgan mahsulot yoki plan asosida aniq foydalanuvchi guruhini target qilish imkoniyatingiz bor.

Email broadcastni boshlash uchun network admin dashboardingizga o‘ting va Ultimate Multisite menyusi ostida Broadcast variantini topasiz.

![Email broadcast uchun boshlang‘ich nuqta sifatida ishlatiladigan Broadcasts ro‘yxat sahifasi](/img/admin/broadcasts-list.png)

Ushbu sahifadan yuqoridagi **Add broadcast** tugmasini bosing.

Bu Add broadcast modal oynasini ochadi, unda yubormoqchi bo‘lgan broadcast turini tanlashingiz mumkin. Davom eting va **Email**ni tanlang, so‘ng **Next Step** tugmasini bosing.

![Email varianti tanlangan Add broadcast modal oynasi](/img/admin/broadcast-add-email.png)

Keyingi oyna sizdan **Target customer** yoki **Target produc** tni so‘raydi. E’tibor bering, bir nechta foydalanuvchi yoki bir nechta mahsulotni tanlashingiz mumkin.

Foydalanuvchi accounti yoki mahsulotni qidirish uchun field ichida kalit so‘zni yozishni boshlashingiz kerak.

Target auditoriyangiz tanlangach, **Next Step**ni bosishingiz mumkin.

![Email broadcast uchun target customers va target product tanlovi](/img/admin/broadcast-email-targets.png)

Keyingi oyna — foydalanuvchilarga yubormoqchi bo‘lgan mavzu va kontent/xabarni kiritib, emailingizni tuzishni boshlashingiz mumkin bo‘lgan joy.

<!-- Skrinshot mavjud emas: Tuzish bosqichidagi email broadcast mavzusi va kontent tahrirlagichi -->

Xabaringizni yaratgandan so‘ng, **Send** tugmasini bosishingiz mumkin.

Broadcast funksiyasidan foydalanib yakuniy foydalanuvchilaringizga email yuborish shunchalik oson.

## Tizim emaillari

Ultimate Multisite’dagi tizim emaillari — ro‘yxatdan o‘tish, to‘lov, domen mapping va hokazo kabi muayyan amallardan keyin tizim tomonidan yuboriladigan **avtomatik bildirishnomalar**. Bu emaillar Ultimate Multisite sozlamalaridan tahrirlanishi yoki o‘zgartirilishi mumkin. Shuningdek, u boshqa Ultimate Multisite o‘rnatilishidan mavjud sozlamalarni reset va import qilish imkonini beradigan funksiya bilan ham keladi.

### Reset va import qilish

Yangi Ultimate Multisite versiyalari, shuningdek add-onlar, vaqti-vaqti bilan yangi emaillarni ro‘yxatdan o‘tkazishi mumkin va o‘tkazadi.

Mojarolar va boshqa muammolarning oldini olish uchun, agar ular muayyan funksiyaning to‘g‘ri ishlashi uchun juda muhim bo‘lmasa, **biz yangi email shablonlarini o‘rnatishingizga System Emails sifatida avtomatik qo‘shmaymiz** .

Biroq super adminlar va agentlar bu yangi ro‘yxatdan o‘tkazilgan emaillarni importer vositasi orqali import qilishlari mumkin. Bu jarayon yangi email shablonining kontenti va konfiguratsiyasi bilan yangi tizim emailini yaratadi, super adminga istagan o‘zgartirishlarini kiritish yoki ularni o‘z holicha qoldirish imkonini beradi.

#### Tizim emaillarini qanday import qilish mumkin

Ultimate Multisite Settings sahifangizga o‘ting va **Emails** tabiga boring.

![System Emails bo‘limini ko‘rsatuvchi Ultimate Multisite sozlamalaridagi Emails tabi](/img/config/settings-emails-tab.png)

So‘ng sidebar’da **Customize System Emails** tugmasini bosing.

<!-- Skrinshot mavjud emas: System Emails sidebar panelidagi Customize System Emails tugmasi -->

System Emails sahifasida yuqorida **Reset & Import** amal tugmasini ko‘rasiz. Bu tugmani bosish import va reset modal oynasini ochishi kerak.

![System Emails admin sahifasidagi Reset yoki Import amal tugmasi](/img/admin/system-emails-reset-import.png)

So‘ng qaysi tizim emaillari import qilinishi mumkinligini ko‘rish uchun Import Emails variantlarini almashtirishingiz mumkin.

<!-- Skrinshot mavjud emas: Import Emails parametrlari kengaytirilgan Reset va Import modali -->

#### Tizim emaillarini qayta tiklash

Ba’zan ma’lum bir email shabloniga kiritgan o‘zgarishlaringiz endi sizga mos kelmayotganini tushunasiz va uni **standart holatiga** qaytarmoqchi bo‘lasiz.

Bunday hollarda sizda ikki variant bor: tizim emailini shunchaki o‘chirib, uni qayta import qilishingiz mumkin (yuqoridagi ko‘rsatmalardan foydalanib) — bu yuborish metrikalari va boshqa narsalarni o‘chirib yuboradi, shu sababli bu usul kamroq tavsiya etiladi.

Yoki o‘sha email shablonini qayta tiklash uchun **Reset & Import vositasi**dan foydalanishingiz mumkin.

Email shablonini qayta tiklash uchun Reset & Import vositasiga yetib borguningizcha yuqoridagi qadamlarni bajarishingiz, so‘ng **Reset** parametrini yoqib, standart mazmuniga qaytarmoqchi bo‘lgan emaillarni tanlashingiz mumkin.

<!-- Skrinshot mavjud emas: Reset Emails parametrlari kengaytirilgan Reset va Import modali -->
