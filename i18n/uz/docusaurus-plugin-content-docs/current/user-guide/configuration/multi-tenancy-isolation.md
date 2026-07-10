---
title: Ko'p ijarali ajratish
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Ko'prikli (Multi-Tenancy) Ajralanishi {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 so'zlash uchun mustaqil loyihalar (per-subsite) ma'lumotlar bazasi va fayl tizimi ajralishini qo'llab-quvvatlaydi, bu hukmron loyihalarning (sovereign tenants) o'zaro ma'lumotlarini alohida saqlash imkonini beradi. Bu tarmoq darajasidagi taqsimot, hisob-kitob va boshqaruvni saqlab qolgan holda mijozlar ma'lumotlarini ajratib turishga yordam beradi.

## Ajralish strategiyasi (Isolation strategy) {#isolation-strategy}

Ma'lumotlarni yanada mustahkam ajratish talab qiladigan, maxsus fayl tizimi saqlash joyi yoki alohida host chegarasi kerak bo'lgan mijozlar uchun hukmron ajralishdan foydalaning.

Har bir hukmron loyihada quyidagilar bo'lishi kerak:

- Host tomonidan tasdiqlangan maxsus loyiha ma'lumotlar bazasi yoki ma'lumotlar bazasi prefix strategiyasi.
- Maxsus loyiha fayl tizimi ildizi (dedicated tenant filesystem root).
- Loyihani uning ma'lumotlar bazasi, ildiz yo'li, host nomi va ajralish modeli bilan bog'lovchi ro'yxatdagi kirish (tenant registry entry).
- Loyiha faol bo'lishdan oldin migratsiya tekshiruv natijasi.

## Ma'lumotlar bazasi hostiga bog'lash (Database host binding) {#database-host-binding}

Versiya 1.2.0 hukmron o'rnatmalar uchun standart "bir mashinada" host bog'lanish xatti-harakatini o'zgartiradi. `localhost` kabi bir mashinadagi qiymatlar normalizatsiya qilinadi, shunda Bedrock, FrankenPHP va konteynerlangan WordPress o'rnatmalari MySQL haqiqatda ko'rayotgan host stringiga nisbatan ruxsatlarni berishi va tekshirishi mumkin.

Hukmron loyihani sozlayotganda:

1. Ma'lumotlar bazasi hostini loyiha ishga tushadigan qiymat bilan belgilang.
2. Host mahalliy ulanishlarni kutsa, mahalliy soket o'rnatmalar uchun `localhost` dan foydalaning.
3. Faqatgina ma'lumotlar bazasi server ushbu hostga imtiyozlar berganida `127.0.0.1` yoki xizmat nomi (service hostname) dan foydalaning.
4. Host bog'lanishini o'zgartirgandan so'ng migratsiya tekshiruvini bajaring.

Agar tekshiruv natijalari ruxsat berishda muammolarni ko'rsatsa, loyiha ma'lumotlar bazasi foydalanuvchilarining ruxsatlarini sozlagan host bog'lanishi bilan solishtiring. `user@localhost` uchun berilgan foydalanuvchi `user@127.0.0.1` yoki `user@%` dan farq qiladi.

## Fayl tizimi ildizi (Filesystem root) {#filesystem-root}

Ижаги (tenant root) qayta yuklash va joylashtirishlar davomida barqaror bo'lishi kerak. Vaqtincha montaj yo'llaridan foydalanishdan saqlaning. Bedrock uslubidagi o'rnatmalar uchun, ijaiga asoslangan ildizning (tenant root) faqat loyiha ildiziga emas, balki ijaiga mos keladigan WordPress veb ildiziga ishora qilishi kerakligini tasdiqlang.

## Ta'minot tartibi (Provisioning order) {#provisioning-order}

Yangi suveren ijalari uchun quyidagi tartibni bajaring:

1. Ija kataloglar ro'yxatiga kirishni yaratish.
2. Ija ma'lumotlar bazasi va ma'lumotlar bazasi foydalanuvchisini yaratish.
3. Ija sxemasini boshlash (Bootstrap).
4. Ija foydalanuvchilarini taqdim etish.
5. Ija fayl tizimi yo'llarini sozlash.
6. Migratsiya tekshiruvini ishga tushirish.
7. Tekshiruv muvaffaqiyatli yakunlangandan so'ng yo'naltirishni yoki DNS-ni o'zgartirish.

Bu tartib ma'lumotlar bazasi yozuvchisi, foydalanuvchilari va fayl tizimi tayyor bo'lishidan oldin qisman ajratilgan ijalarga trafik kelishini oldini oladi.

## Suveren mijozlarni boshqarish jarayonlari (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 suveren rejim faollashtirilganida mijozlarni boshqarish harakatlarini asosiy saytda saqlab qoladi. Ija hali ajratilgan WordPress o'rnatmasi sifatida ishlay olishi mumkin, ammo tarmoq hisoboti, a'zo bo'lish yoki umumiy hisob ma'lumotlariga bog'liq mijozga yo'naltirilgan harakatlar ijalning ish vaqtida yakunlanishga urinish o'rniga mijozni asosiy saytga qaytarishi kerak.

Asosiy sayt jarayoni quyidagilarga tegishli:

- Cheklov (Checkout) va reja o'zgarishlari.
- Hisob umumiy ko'rinishi va mijoz profili harakatlari.
- Hisob-faktura manzillarini yangilash va to'lovni boshqarish ekranlari.
- Faktura va to'lov tarixi ko'rinishlari.
- Saytni qo'shish yoki saytni o'chirish kabi saytni boshqarish harakatlari.
- Shablondan foydalanish (Template switching).
- Domen xaritasi va asosiy domen o'zgarishlari.

Mijoz sojalik (sovereign tenant)dan bironlardan birini boshlaganda, Ultimate Multisite tegishli asosiy sayt URL'sini quradi va xavfsiz bo'lganida manba tegini qaytarish maqsadida saqlab qoladi. Bu mijozlarga tarmoq yozuvlari bilan boshqarilgan harakatni yakunlash imkonini beradi, so'ngra esa sovrin ma'lumotlar bazasida hisob-xatmlar yoki a'zo holatini takrorlamasdan teg kontekstiga qaytish imkonini beradi.

Operatyorlar uchun amaliy qoida quyidagicha: sovrin tarmoqlari uchun asosiy saytdagi hisob-xatmlar, akkauntlar, to'lov (checkout), faktura, shablon va domen boshqaruvi sahifalar mavjud bo'lishini ta'minlang. Teg dashboardlari bu sahifalarga bog'lanishi mumkin, ammo harakatning manbai asosiy sayt bo'lib qoladi.
