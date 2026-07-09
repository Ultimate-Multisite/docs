---
title: WooCommerce integratsiyasi o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce integratsiyasi o‘zgarishlar jurnali

Versiya 2.2.0 - 2026-07-01 da chiqarildi
* Yangi: Ultimate Multisite soliq summalari endi checkout paytida alohida WooCommerce to‘lov qatorlari sifatida ko‘rinadi, bu to‘lovdan oldin soliq jami summalarini aniqroq qiladi.
* Yangi: WooCommerce Subscriptions qayta urinish oynasi davomida muvaffaqiyatsiz yangilanish bo‘yicha to‘xtatib turishni xohlaydigan saytlar uchun ixtiyoriy "Muvaffaqiyatsiz yangilanishlarda Memberships darhol to‘xtatib turilsin" sozlamasi va `wu_woo_suspend_on_payment_failure` filter qo‘shildi.
* Tuzatish: Muvaffaqiyatsiz yoki tiklangan yangilanishlardan keyin Ultimate Multisite memberships bilan sinxronlashdan chiqib qolishi mumkin bo‘lgan WooCommerce Subscription statuslari muvofiqlashtirildi.
* Tuzatish: Yo‘q bo‘lganda WooCommerce do‘kon valyutasi Ultimate Multisite valyuta ro‘yxatiga qo‘shildi.
* Tuzatish: Obunachilar WooCommerce checkout sahifasiga yo‘naltirilganda mijozning hisob-kitob tafsilotlari saqlab qolindi.
* Yaxshilandi: Jetpack Autoloader 5 bilan moslik qo‘shildi.
* Yaxshilandi: Chiqarilish paketi yaratish jarayoni tozalandi, shunda GitHub va marketplace zip fayllari ichma-ich staging kataloglari va ishlab chiqish fayllaridan qochadi.

Versiya 2.0.6 - 2026-01-16 da chiqarildi
* Yaxshilanish: Asosiy obunalarni addonga kiritish. Endi Woocommerce Subscriptinos extension talab qilinmaydi.

Versiya 2.0.5 - 2026-01-09 da chiqarildi
* Yaxshilanish: Tarjimalarni glotpress API dan yuklash.
* Tuzatish: Ba’zi page builderlarda fatal error.
* tuzatish: Mijoz asosiy sayt a’zosi bo‘lganda cheksiz yo‘naltirish.

Versiya 2.0.4 - 2025-11-14 da chiqarildi
* Qo‘shildi: Yana ko‘plab tillar uchun tarjimalar.
* O‘zgartirildi: Ultimate Multisite: Woocommerce Integration deb qayta nomlandi.
* Qo‘shildi: Woocommerce 10.2.1 bilan moslik.
* Qo‘shildi: Woocommerce Subscriptions 7.7.0 bilan moslik.
* Tuzatish: PHP 8.4 bilan moslik
* Tuzatish: WC Account sahifasi mavjud bo‘lmaganda yo‘naltirish xatosi.

Versiya 2.0.3 - 2025-08-13 da chiqarildi
* O‘zgartirildi: Yangi marketplace bilan avtomatik yangilanishlar yoqildi.

Versiya 2.0.2 - 2025-07-05 da chiqarildi
* O‘zgartirildi: Multisite Ultimate: Woocommerce Integration deb qayta nomlandi.
* Qo‘shildi: Woocommerce 9.8.1 bilan moslik.
* Qo‘shildi: Woocommerce Subscriptions 7.3.0 bilan moslik.
* Tuzatish: Mijoz tomonidan obunani bekor qilish.
* Tuzatish: checkout blokidan foydalanganda fatal error.
* Yaxshilanish: Endi Woocommerce yuqori unumdorlikdagi maxsus buyurtma jadvallari bilan mos.
* Tuzatish: WooCommerce checkoutda bekor qilish baribir membershipni yangilab yuborishi mumkin edi.

Versiya 2.0.1 - 2023-08-09

* Qo‘shildi: Woocommerce 7.9.0 bilan moslik.
* Qo‘shildi: Woocommerce Subscriptions 5.3.0 bilan moslik.
* Qo‘shildi: membership yangilanishlarini qo‘llab-quvvatlash.
* Qo‘shildi: Woocommerce’da triallar va setup to‘lovlari haqida bildirishnomalar.
* Qo‘shildi: Ultimate Multisite Woocommerce mahsulotlarini meta qiymat orqali aniqlash.
* Qo‘shildi: Barcha Ultimate Multisite bilan bog‘liq Woocommerce mahsulotlarini belgilash uchun bir martalik tuzatish kiritildi.
* Qo‘shildi: Ultimate Multisite yaratgan mahsulotlar Woocommerce ro‘yxatidan olib tashlandi.
* Yaxshilanish: Savatga qo‘llash uchun takrorlanmaydigan Woocommerce chegirmasi yaratildi.
* Yaxshilanish: Takrorlanuvchi chegirma Woocommerce mahsulotiga qaytarildi.
* Yaxshilanish: Woocommerce mahsulotiga takrorlanuvchi chegirma yorlig‘i qo‘shildi.
* Yaxshilanish: checkoutda mahsulot turi ta’minlandi.
* Tuzatish: Pasaytirish jarayonida membership statusi saqlab qolindi.
* Tuzatish: Bekor qilish jarayonida xatolarning oldini olish uchun obuna mavjudligi tekshirildi.
* Tuzatish: Woocommerce subscriptions’da foydalanish uchun obunaning boshlanish sanasi qo‘shildi.
* Ichki: Yangi PHP 8.1 build jarayoni amalga oshirildi.

Versiya 2.0.0 - To‘liq qayta yozish.

* Qo‘shildi: Shlyuzni o‘zgartirganda yoki membershipni bekor qilganda woo obunasini olib tashlash uchun bekor qilish usulini qayta ishlash;
* Qo‘shildi: membershipsni pasaytirish va oshirish uchun handler;
* Yaxshilanish: Account yangilanishiga ruxsat berish uchun sub-saytlardagi mijoz yangilash formasida woocommerce bog‘liqliklarini yuklash;
* Yaxshilanish: Agar mavjud bo‘lmasa, Woocommerce savatini to‘g‘ri yuklash;
* Yaxshilanish: checkoutni qayta ishlaganda asosiy sayt jadvallarida ekanimizni ta’minlash;
* Yaxshilanish: Ultimo yangilanish buyurtmasini oxirgi to‘lovdan emas, Woocommerce subscription buyurtma qiymati asosida qilish;
* Tuzatish: WU Membership tugmasi havolasi;
* Tuzatish: Woocommerce subscriptions yangilanishi to‘langan bo‘lsa, Ultimo buyurtmasini to‘langan deb belgilash;
* Build: MPB’ni builder sifatida qo‘shish;

Versiya 2.0.0-beta-5 - 2022-01-21 da chiqarildi

* Ichki: Hooklar va filterlar generatori qo‘shildi;
* Ichki: Dasturchi qulayligi uchun Ultimate Multisite stublari qo‘shildi;
* Tuzatildi: Zarur bo‘lmaganda bir nechta mahsulot yaratilishining oldi olindi;

Versiya 2.0.0-beta.4 - 2021-09-23

* Tuzatish: WooCommerce faqat asosiy saytda emas, balki tarmoq bo‘yicha faol bo‘lishini talab qilish;
* Yaxshilanish: add-on’dan mu-plugin sifatida foydalanishga ruxsat beruvchi filter qo‘shildi;

Versiya 2.0.0-beta.3 - 2021-05-28

* Tuzatish: Dashboardga kirish nazorati juda keskin edi;
* Yaxshilanish: Ultimate Multisite yuqori menyusiga WooCommerce yordam havolalari qo‘shildi;

Versiya 2.0.0-beta.2 - 2021-05-04

* Yaxshilanish: WCS yangilanish buyurtmasi yaratilganda Ultimo’da kutilayotgan to‘lovlarni yaratadi;
* Yaxshilanish: billing maydonlarini Ultimate Multisite mijoz ma’lumotlari bilan oldindan to‘ldiradi;
* Yaxshilanish: shlyuzlar uchun billing maydonlarini qayta qo‘shadi;

Versiya 2.0.0-beta.1 - 2021-05-04

* Dastlabki beta chiqarilishi

-- Eski versiyalar --

Versiya 1.2.6 - 26/03/2020

* Tuzatildi: WooCommerce Subscriptions’ning yangiroq versiyalari bilan kichik nomoslik;

Versiya 1.2.5 - 26/08/2019

* Tuzatildi: Oldingi chiqarilishdagi xato;

Versiya 1.2.4 - 22/08/2019

* Yaxshilandi: Integratsiyadan so‘ng darhol WooCommerce checkout ekraniga yo‘naltirish varianti qo‘shildi;

Versiya 1.2.3 - 26/05/2019

* Tuzatildi: WooCommerce uchun to‘lov emaili ba’zi chekka holatlarda yo‘qolib qolgan;

Versiya 1.2.2 - 27/02/2019

* Qo‘shildi: WooCommerce Subscription integratsiyasida setup to‘lovlarini qo‘llab-quvvatlash;

Versiya 1.2.1 - 17/11/2018

* Tuzatildi: Ultimate Multisite 1.9.0 versiyasi bilan moslik muammolari;

Versiya 1.2.0 - 10/09/2018

* Yaxshilandi: add-onlar uchun yangi yangilanishlar URL’i;
* Qo‘shildi: WooCommerce Subscription uchun beta qo‘llab-quvvatlash;

Versiya 1.1.2 - 11/02/2018

* Tuzatildi: WooCommerce endpointlaridagi o‘zgarishlarga javob berish uchun To‘lash havolasi dinamik tarzda yaratilishi;
* Yaxshilandi: `payment_completed` chaqirilganda buyurtmalarimiz uchun completed statusini majburan qo‘llaymiz, shunda yangilanish hooklarimiz kerakli vaqtda ishga tushishini ta’minlaymiz;

Versiya 1.1.1 - 24/01/2018

* Tuzatildi: Endi WooCommerce faqat asosiy saytda faollashtirilganligini ham tekshiradi;
* Tuzatildi: Buyurtma yaratishda soliqlarni kiritishga ruxsat berish uchun over-loadinglar qo‘shildi;

Versiya 1.1.0 - 04/11/2017

* Tuzatildi: Endi integratsiya tugmasi yorlig‘i sozlamalarni aks ettirish uchun haqiqatda o‘zgaradi. Ultimate Multisite 1.5.0 talab qilinadi;
* Tuzatildi: WooCommerce Integration endi WooCommerce tarmoq bo‘yicha faol bo‘lmasa va faqat asosiy saytda faollashtirilgan bo‘lsa ham ishlaydi;

1.0.0 - Dastlabki chiqarilish
