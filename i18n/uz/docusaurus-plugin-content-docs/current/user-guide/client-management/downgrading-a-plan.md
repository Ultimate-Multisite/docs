---
title: Rejanni tushirish
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plani (subscription) tushirish (v2)

_**MUHIM ESLATMA: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Plani yoki obunani tushirish bu sizning mijozlaringiz cheklangan byudjetga ega bo'lganlar yoki subsite'larini boshqarish uchun ko'p resurslarga ehtiyoj sezmayotganlar deb qaror qilib olishganlarida bajara oladigan keng tarqalgan harakatdir.

## Planni qanday tushirish kerak

Mijozlari o'z subsite administratsiya paneli (admin dashboard) orqali tizimiga kirib, akkaunt sahifasidagi **Change** (O'zgartirish) tugmasini bosish orqali har qanday vaqtda planni tushirishi mumkin.

![Sizning a'zolik kartangiz va O'zgartirish tugmasi bilan mijoz hisob sahifasi](/img/account-page/membership-change-button.png)

**Change** (O'zgartirish) tugmasini bosgandan so'ng, foydalanuvchi/mijoz o'z obunani qaysi planga o'tkazishni tanlashlari mumkin bo'lgan to'lov sahifasiga yo'naltiriladi.

![Mijoz tomonidagi planni tushirish variantlari sahifasi](/img/account-page/downgrade-picker.png)

Bu misolda biz planni **Premium** dan **Free** ga tushirmoqdamiz.

Davom etish uchun foydalanuvchi faqat **Complete Checkout** (To'lovni yakunlash) tugmasini bosishi kerak. Bu ularni obunani o'zgartirish haqidagi xabarnoma bilan hisob sahifasiga qaytaradi. O'zgarishlar mijozning **keyingi to'lov sikli**da kuchga kiradi.

![Obunaning o'zgarishi haqida banner ko'rsatilgan hisob sahifasi](/img/account-page/pending-change.png)

### Foydalanuvchi plani tushirsang nima bo'ladi

Planni tushirishdan foydalanuvchining subsite'idagi mavjud konfiguratsiyaga ta'sir qilmasligini eslatib qo'yish muhimdir.

Tizim shablonini o'zgartirmaydi, chunki tizim shablonini o'zgartirish subsite'ni butunlay o'chirib yuboradi va qayta sozlaydi. Bu keraksiz ma'lumot yo'qotilishidan saqlanish uchun qilinadi. Shunday qilib, postlar bundan mustasno bo'lib disk maydoni, temalar, pluginlar va boshqa narsalar buzilmasdan qoladi.

Bizning asosiy tashvishlaringiz har bir reja ostida belgilangan cheklovlar va quota haqida bo'lishini tushunamiz, ammo agar biz ushbu sozlamalardan birini o'chirib tashlasak yoki o'zgartirsak foydalanuvchining subsite-iga qanday zarar yetkazishi kerakligini ham hisobga olishimiz kerak.

Reja belgilangan limitni oshirgan postlar uchun sizda 3 ta turli variant mavjud: **Postlarni shunday qoldirish** *,* **Postlarni ko'chirib tashlash** *,* yoki **Postlarni loyihaga o'tkazish** *.* Buni Ultimate Multisite sozlamalaridan boshqarishingiz mumkin.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### To'lovlar qanday sodir bo'ladi

2.0 versiyasida endi to'lovlarda pratsiyoning (proration) jihatidan hech qanday sozlash talab qilinmaydi.

Buning sababi shundaki, tizim mavjud a'zolikning **to'lov siklini yakunlashini kutadi, keyin esa** yangi reja/a'zolik kuchga kiradi. Yangi a'zolik uchun yangi to'lov miqdori avtomatik ravishda qo'llaniladi va keyingi to'lov siklida hisoblanadi.
