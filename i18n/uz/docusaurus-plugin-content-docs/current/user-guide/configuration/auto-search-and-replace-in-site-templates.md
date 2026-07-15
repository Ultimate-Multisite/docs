---
title: Sayt shablonlarida avtomatik qidirish va almashtirish
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Sayt Shablonlarida Avtomatik Qidirish va Almashtirish (v2)

_**Bu tutorial WP UItimo versiyasi 2.x talab qiladi.**_

Ultimate Multisite ning eng kuchli xususiyatlaridan biri ro'yxatdan o'tish formiga istalgan matn, ranglar va tanlov maydonlarini qo'shish imkoniyatidir. Bu ma'lumotlarni yig'ib olgandan so'ng, biz uni tanlangan sayt shablonining ba'zi qismlaridagi kontentni oldindan to'ldirish uchun ishlatishimiz mumkin. Keyin yangi sayt e'lon qilinsa, Ultimate Multisite o'rnini bosuvchi joylarni ro'yxatdan o'tish paytida kiritilgan haqiqiy ma'lumotlar bilan almashtiradi.

Masalan, siz shablonlaringizda placeholder (o'rinbosar) ishlatishingiz mumkin. Placeholder'lar ikki qavslar ichida - {{placeholder_name}} shaklida qo'yilishi kerak.

Keyin, ushbu ma'lumotlarni yig'ib olish uchun mos keladigan ro'yxatdan o'tish maydonini oddiygina qo'shishingiz mumkin.

Sizning mijozlar esa ro'yxatdan o'tish paytida bu maydonni to'ldira oladi.

Ultimate Multisite esa placeholder'larni mijoz tomonidan berilgan ma'lumotlar bilan avtomatik ravishda almashtiradi.

## **"placeholder'lar bilan to'la shablon" muammosini hal qilish** {#solving-the-template-full-of-placeholders-problem}

Bular barchasi ajoyib, lekin biz noqulay muammo bilan duch kelamiz: endi mijozlarimiz ko'rib turadigan sayt shablonlarimiz — ular juda ko'p ma'lumot bermaydigan noqulay placeholder'lar bilan to'la.

Buni hal qilish uchun biz placeholder'lar uchun yolg'on qiymatlarni belgilash imkoniyatini taklif qilamiz va mijozlar saytni ko'rib turgan vaqtda shablon saytlardagi ular ichidagi matnlarni qidirib almashtirish uchun shu qiymatlardan foydalanamiz.

Shablon placeholder'larini tahrirlash editoriga bormaslik uchun **Ultimate Multisite > Settings > Sites** ga o'ting, Sayt Shabloni Parametrlari (Site Template Options) hududiga aylaning va keyin **Edit Placeholders** linkiga bosing.

![Sites sozlamalar sahifasidagi Sayt Shabloni Parametrlar hududi](/img/config/settings-sites-templates-section.png)

Bu sizni placeholder'larni va ularning tegishli kontentlarini qo'shishingiz mumkin bo'lgan placeholder'lar tahrirlash editoriga olib boradi.

![Shablon o'rinli maydonlar muharriri kirish nuqtasi](/img/config/settings-sites-templates-section.png)
