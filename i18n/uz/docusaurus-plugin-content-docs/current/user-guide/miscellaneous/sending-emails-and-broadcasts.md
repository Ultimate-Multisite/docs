---
title: E-mail va tarqatishlar yuborish
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# E-mail va Tarqatishlar Yuborish (v2)

_**MUHIM ESLATMA: Ushbu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Ultimate Multisite'da siz mijozlaringiz bilan muloqot qilish imkonini beradigan funksiya mavjud bo‘lib, bu orqali ma’lum bir foydalanuvchiga yoki foydalanuvchilar guruhiga elektron xat yuborishingiz mumkin. Shuningdek, ularning admin paneli (dashboard) orqali e'lonlarni tarqatish uchun ham xabarlar yuborishingiz mumkin.

## Tarqatishlar bilan mijozlaringizning paneline admin xabarlari qo‘shish

Ultimate Multisite tarqatish funksiyasidan foydalanib, siz har qanday **admin xabarini** foydalanuvchining subsite admin paneliga qo‘shishingiz mumkin.

Bu juda foydali bo‘ladi, agar siz tizimni texnik xizmat ko‘rsatish kabi e'lonlar qilish yoki mavjud foydalanuvchilaringizga yangi mahsulotlar yoki xizmatlarni taklif qilish kerak bo‘lsa. Admin xabari foydalanuvchining panelida qanday ko‘rinishda bo‘lishini shu orqali ko‘rishingiz mumkin.

<!-- Screenshot unavailable: Mijoz subsite paneli ustidagi admin xabari tarqatilishi -->

Admin xabarini boshlash uchun tarmoq administrator panelingizga kiring va **Ultimate Multisite** menyusi ostida **Broadcasts** (Tarqatishlar) opsiyasini topasiz.

![Ultimate Multisite adminida Tarqatishlar ro‘yxati sahifasi](/img/admin/broadcasts-list.png)

Mavjud tarqatishlarni ham tahrirlashingiz mumkin:

![Tarqatishni tahrirlash interfeysi](/img/admin/broadcast-edit.png)

Bu sahifadan yuqoridagi **Add Broadcast** (Tarqatish qo‘shish) tugmasini bosing.

Bu sizga qaysi turdagi tarqatishni yuborishni tanlashingiz mumkin bo‘lgan Add broadcast modal oynasini ochadi.

Keyin **Message** (Xabar) ni tanlang va keyingi bosqich (Next Step) tugmasini bosing.

![Xabar opsiyasi tanlangan holda tarqatish qo‘shish modal oynasi](/img/admin/broadcast-add-message.png)

Keyingi oynada sizdan **Target customer** (Maqsadli mijoz) yoki **Target product** (Maqsadli mahsulot) ni so‘raydi. Unutmangki, bir nechta foydalanuvchini yoki bir nechta mahsulotni tanlashingiz mumkin.

Foydalanuvchi akkaataa isticmaalayinaa ykn mahsuloota baafachuu barbaadde, feeskaatiif (field) guddisin kanneen koodii (keyword) gargaaruu danda'a.

**Message type** feeskaatii diqqee, xabartoonniin (notice) koo ragaa (color) gochuuf danda'a. Kan hawwata wisaa keessatti xabarta saksiyadaa (urgency) gargaaruu danda'a.

Soo danna **Next Step** (Natiijii Talla) kanneen.

![Message broadcast targets, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Kan dambeeya window keessatti, saksiyadaa (subject) ykn xabarta/xabar (content/message) gochuuf, isticmaaloota (users) gaafachuu barbaaddu kanneen gargaaruu danda'a.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Xabarta kee gochuuf, **Send** (Yubisu) dugguun kanneen.

Kanaaf. Admin xabartoonniin (notice) saksiyadaa (dashboard) yeroo dhabarruu ragaa ta'uu qabda.

## Mijil-i (emails) gochuuf

Ultimate Multisite broadcast xizitaa, isticmaalootiin (users) mijil gochuuf danda'a. Mijilni faqat ma'lumot (specific users) gaafachuu ykn mahsulood (product) ykn dastur (plan) gaafachuu danda'a kanneen qofka hoosigaa qabda.

Mijil broadcast boshash, shabloningizning admin dashboard-iga o'ting va Ultimate Multisite menyusi ostida Broadcast opsiyasini topasiz.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Bu sahifadan yuqoridagi **Add broadcast** (Broadcast qo'shish) tugmasini bosing.

Bu sizga qaysi turdagi broadcast yuborishni tanlash imkon beradigan Add broadcast modal oynasini ochadi. Qaysi turdagi broadcast yuborishni tanlash uchun **Email** ni tanlang va keyin **Next Step** tugmasini bosing.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Keyingi window sizdan yaqin (Target customer) yoki mahsulotga (Target product) murojaat qilishni so'raydi. Eslatma, bir nechta foydalanuvchini yoki bir nechta mahsulotni tanlashingiz mumkin.

Foydalanuvchi akkaunt yoki mahsulotni qidirish uchun so‘zlashgan kalitni maydon ichiga yozishdan boshlashingiz kerak.

Maqsadli auditoriyangiz tanlanganidan so‘ng, **Next Step** tugmasini bosishingiz mumkin.

![Email tarqatish uchun maqsadli mijozlar va mahsulotlarni tanlash](/img/admin/broadcast-email-targets.png)

Keyingi oynada siz mavzuni va foydalanuvchilarga yubormoqchi bo‘lgan matnni kiritib, elektron xatni tuzishni boshlashingiz mumkin.

<!-- Screenshot unavailable: Tuzilish bosqichida email tarqatish mavzusi va kontent redaktori -->

Xabaringizni yaratganingizdan so‘ng, **Send** tugmasini bosishingiz mumkin.

Va bu broadcast funksiyasidan foydalanib yakuniy foydalanuvchilarga elektron xat yuborish qanchalik oson ekanligini ko'rsatadi.

## Sistem elektron xatlari (System emails)

Ultimate Multisite dagi sistem elektron xatlari — ro‘yxatdan o‘tish, to‘lov, domen xaritasi kabi ma’lum bir harakatlardan so‘ng tizim tomonidan yuboriladigan **avtomatik bildirishnomalardir**. Bu elektron xatlarni Ultimate Multisite sozlamalaridan tahrirlash yoki o‘zgartirish mumkin. U shuningdek, boshqa Ultimate Multisite o‘rnatmasidan mavjud sozlamalarni qayta tiklash va import qilish imkonini beradigan funksiyaga ega.

### Qayta tiklash va import qilish (Resetting & Importing)

Yangi Ultimate Multisite versiyalari ham, qo‘shimcha modullar ham vaqtinchalik yangi elektron xatlarni ro‘yxatdan o‘tishi mumkin.

Konfliktlar va boshqa muammolardan himoya qilish uchun **biz yangi elektron xat shablonlarini avtomatik ravishda Sistem elektron xatlari sifatida sizning o‘rnatmangizga qo‘shmaymiz**, agar ular berilgan funksiyaning to‘g‘ri ishlashi uchun juda muhim bo‘lmasa.

Biroq, super adminlar va agentlar bu yangi ro‘yxatdan o‘tgan elektron xatlarni importor vositasi orqali import qilishlari mumkin. Bu jarayon yangi shablonning kontenti va konfiguratsiyasi bilan yangi sistem elektron xatini yaratadi, bu esa super adminlarga istal har qanday o‘zgartirish kiritish yoki ularni shunday qoldirish imkonini beradi.

#### Sistem elektron xatlarni import qilish



Ultimate Multisite sozlamalaringizdagi Settings sahifasiga kiring va **Emails** (E-mail xatlari) yorlig'iga o'ting.

![Ultimate Multisite sozlamalaridagi Emails yorligi ko'rsatuvchi tasvir](/img/config/settings-emails-tab.png)

Keyin, menyu panelida **Customize System Emails** (Tizim E-mailini Sozlash) tugmasiga bosing.

<!-- Screenshot unavailable: System Emails menyu paneli bo'yicha Customize System Emails tugmasi tasviri -->

System Emails sahifasida yuqorida **Reset & Import** (Qayta Sozlash va Import qilish) harakat tugmasini ko'rasiz. Buni bosganingizda import va qayta sozlash modal oynasi ochiladi.

![System Emails admin sahifasidagi Reset yoki Import harakati tugmasi tasviri](/img/admin/system-emails-reset-import.png)

Keyin, Import Email opsiyalarini o'zgartirib ko'rishingiz mumkin va qaysi tizim e-mail xatlari import qilish uchun mavjudligini ko'rishingiz mumkin.

<!-- Screenshot unavailable: Import Email opsiyalari kengaytirilgan Reset va Import modal tasviri -->

#### System Emailsni Qayta Sozlash

Boshqa vaqtlarda, ma'lum bir e-mail shabloniga kiritgan o'zgarishlar siz uchun ishlamay qolganini va uni **default holatiga** qaytarmoqchi bo'lishingiz mumkinligini tushirlashtirishingiz mumkin.

Bundan kelib chiqadigan hollarda, sizda ikkita variant bor: siz tizim e-mail xatlasiz va uni qayta import qilishingiz mumkin (yuqoridagi ko'rsatmalardan foydalanib) — bu esa yuborish metrikalarini va boshqa narsalarni o'chiradi, shuning uchun bu usul eng kam afzal hisoblanadi.

Yoki siz ushbu e-mail shablonini qayta sozlash uchun **Reset & Import tool** (Qayta Sozlash va Import vositasi) dan foydalanishingiz mumkin.

E-mail shablonini qayta sozlash uchun yuqoridagi qadamlarni bajarib, Reset & Import vositasiga yetib borishingiz mumkin, keyin **Reset** (Qayta Sozlash) opsiyasini yoqing va default kontentga qaytarmoqchi bo'lgan e-mail xatlari tanlang.

<!-- Screenshot unavailable: Reset va Import modal tasviri bilan Reset Emails opsiyalari kengaytirilgan -->
