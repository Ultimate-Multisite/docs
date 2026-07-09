---
title: Eksport va import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksport va Import {#export--import}

Ultimate Multisite 2.9.0 da **Tools > Export & Import** (Asboblar > Eksport va Import) bo'zim ostida bitta sayt uchun **Export & Import** vositasi qo'shildi. Siz bittaki WordPress saytini ZIP fayli sifatida paketlash, uni tiklash yoki mos keladigan Ultimate Multisite va single-site WordPress o'rnatmalar orasida saytni ko'chirish kerak bo'lganda undan foydalanishingiz mumkin.

## Talab qilinadigan ruxsatnomalar {#required-permissions}

Siz eksport qilayotgan yoki import qilayotgan WordPress saytida **Tools** menyusiga kirish imkoniyatiga ega bo'lgan administrator sifatida tizimga kiring. Multisite tarmoqda, agar siz tarmoq darajasidagi Ultimate Multisite vositalaridan sub-saytlarni eksport qilsangiz yoki import qilsangiz, tarmoq administrator hisobidan foydalaning.

Eksport ZIP yuklamalari autentifikatsiya qilingan yuklanish nuqtasi orqali taqdim etiladi, shuning uchun yuklanish tugaguncha administrator sessiyasini faol ushlab turing va yaratilgan yuklanish URL'larini ommaviy ulashdan saqlaning.

## Saytni ZIP faylga eksport qilish {#exporting-a-site-to-a-zip}

1. Nuskiralayotgan saytingiz WordPress admin panelida **Tools > Export & Import** (Asboblar > Eksport va import) ga kiring.
2. Eksport maydonini oching va paketlashni xohlagan saytni tanlang.
3. Agar mavjud bo'lsa, yuklamalar, pluginlar va temal kabi ixtiyoriy kontentlarni tanlang.
4. Eksportni boshlang va jarayon tugashini kutib turing. Katta saytlarning ZIP fayli tayyor bo'lishidan oldin orqa planda yakunlanishi kerak bo'lishi mumkin.
5. Tugallangan ZIP faylni eksportlar ro'yxatidan yuklab oling.

ZIP faylini xavfsiz joyda saqlab qo'ying. U sayt kontentini, sozlamalarni, media fayllarini va tanlangan kod resurslarini o'z ichiga olishi mumkin.

## Eksport nimalarni o'z ichiga oladi {#what-the-export-includes}

Eksport ZIP fayli quyidagilarni o'z ichiga olishi mumkin:

* Tanlangan saytning ma'lumotlar bazasi kontenti va konfiguratsiyasi.
* Yuklash (upload) qo'shilgan bo'lsa, yuklangan media fayllari.
* Ushbu opsiyalar tanlanganida pluginlar va temalar.
* Saytni maqsadli o'rnatishda qayta qurish uchun Export & Import vositasi tomonidan ishlatiladigan metadata (ma'lumotlar) importi.

Ani ZIP hajmi media miqdori, tanlangan pluginlar va temalar, shuningdek, saytning ma'lumotlar bazasi jadvallari o'lchamiga bog'liq bo'ladi.

## Saytni ZIP orqali import qilish {#importing-a-site-from-a-zip}

1. Maqsadli WordPress saytida **Tools > Export & Import** (Asboblar > Eksport va Import) ga o'ting.
2. Import maydonini oching va Export & Import vositasi tomonidan yaratilgan ZIP faylini yuklang.
3. Agar sayt yangi manzildan foydalanishi kerak bo'lsa, almashtirish URL-ni kiritishni tanlang, yoki asl URL ni saqlab qolish uchun maydonni bo'sh qoldiring.
4. Import tugagandan so'ng yuklangan ZIP faylni o'chirishni tanlash imkoniyatiga ega bo'ling.
5. **Begin Import** (Importni boshlash) tugmasini bosing.
6. Import yakunlanguncha kutib turing. Jarayonni yakunlashdan oldin to'xtatish kerak bo'lsa faqat **Cancel Import** (Importni bekor qilish) dan foydalaning.
7. Normal trafik yoki mijozlarning kirishi uchun import qilingan saytni ko'rib chiqing.

Yagona saytli WordPress o'rnatmasida ZIP faylini import qilish hozirgi saytning o'rniga yangi saytni qo'yadi. Boshlashdan oldin maqsadli saytning to'liq nusxasini (backup) olib qo'ying va bir vaqtning o'zida bir xil sayt uchun ko'p importlarni boshlamaslikka harakat qiling.

## Cheklovlar va mos kelishmovchilik haqida eslatmalar {#limitations-and-compatibility-notes}

* Juda katta yuklamalar (uploads) dizinlari yoki media kutubxonalari juda katta ZIP fayllarni yaratishi mumkin. Katta saytlarni eksport qilish yoki import qilishdan oldin PHP yuklash cheklovlarini, ijro etish cheklovlarini, disk maydonini, xotirani va server vaqti (timeout) sozlamalarini tekshirib ko'ring.
* Juda katta media kutubxonalari kam trafikli texnik xizmatlar paytida o'tkazilishi kerak bo'lishi mumkin.
* Maqsad WordPress o'rnatmasi mos keladigan WordPress, PHP, Ultimate Multisite, plugin va tema versiyalarini ishlatishi kerak.
* Bitta sayt import qilinadigan joyga mavjud sayt o'rnini almashtiradi. Bu birlashtirish vositasi emas.
* Multisite-dan bitta saytga yoki bitta saytdan multisitega o'tkazish operatsiyalari faqat maqsadli muhit eksport qilingan saytdagi pluginlar, temalar, URL va talab qilinadigan Ultimate Multisite komponentlarini ishga tushira oladigan holatda qo'llab-quvvatlanadi.

ZIP faylini maxfiy saqlang. U eksport qilingan saytdan ma'lumotlar bazasi kontentini, yuklangan fayllarni va konfiguratsiya detallarini o'z ichiga olishi mumkin.

Eski tarmoq darajasidagi eksport ish oqimlari uchun [Site Export](/user-guide/administration/site-export) manziliga qarang.
