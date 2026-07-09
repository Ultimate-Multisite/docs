---
title: Admin Page Creator o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin sahifa yaratuvchisi o‘zgarishlar jurnali {#admin-page-creator-changelog}

### Versiya 1.9.0 - 2026-01-18 da chiqarilgan {#version-190---released-on-2026-01-18}

* Tuzatildi: faollashtirishda yuzaga keladigan fatal xatolar.
* Qayta tuzildi: kontent manbasi sinflari to‘g‘ri parent konstruktor boshlang‘ich sozlanishi bilan Singleton trait’dan foydalanadigan qilindi
* Tuzatildi: kontent turi tanlagichining ko‘rsatilishiga to‘sqinlik qilayotgan Vue.js shablon kompilyatsiyasi xatolari
* Tuzatildi: yetishmayotgan Vue ma’lumot xususiyatlari (template_id, external_link_url_embedable, external_link_url_checking)
* Tuzatildi: sahifa yuklanganda TinyMCE tahrirchisi to‘g‘ri ishga tushmasligi
* Tuzatildi: Divi qo‘llab-quvvatlash fayli Composer orqali avtomatik yuklanmasligi
* Tuzatildi: Divi qo‘llab-quvvatlash sinfidagi buzilgan PHP sintaksisi
* Yaxshilandi: JavaScript aktivlarini tashkil qilish va minifikatsiya
* Yaxshilandi: so‘nggi WordPress va sahifa quruvchi versiyalari bilan moslik

= Versiya: 1.8.8 - 2025-09-28 da chiqarilgan

* Prefiks ultimate-multisite ga o‘zgartirildi; matn domeni yangilandi; versiya oshirildi.

### Versiya 1.8.7 - 04/10/2023 {#version-187---04102023}

* Tuzatildi: yangi admin sahifa qo‘shishga urinishdagi fatal xato;
* Tuzatildi: Oxygen stillar jadvallari prefiksi bilan ziddiyat;

### Versiya 1.8.6 - 09/08/2023 {#version-186---09082023}

* Qo‘shildi: asosiy saytdan yoki joriy quyi saytdan ma’lumotlarni ko‘rsatish opsiyasi qo‘shildi.
* Qo‘shildi: WordPress Block Editor (Gutenberg) uchun qo‘llab-quvvatlash qo‘shildi.
* Tuzatildi: Brizy sahifa aktivlari yuklanmasligi muammosi tuzatildi.

### Versiya 1.8.5 - 09/12/2020 {#version-185---09122020}

* Tuzatildi: menyuni yashirish uchun Screen Options bilan bog‘liq muammo bartaraf bo‘lmasligi;

### Versiya 1.8.4 - 11/11/2020 {#version-184---11112020}

* Tuzatildi: Multisite Ultimate v2 uchun qo‘llab-quvvatlash;

### Versiya 1.8.3 - 01/10/2020 {#version-183---01102020}

* Tuzatildi: oldingi tuzilmadagi Beaver Builder bilan nomosliklar;
* Tuzatildi: WP 5.5 bilan margin nomuvofiqliklari;

### Versiya 1.8.2 - 21/09/2020 {#version-182---21092020}

* Tuzatildi: WP 5.5 bilan kichik nomosliklar;

### Versiya 1.8.1 - 05/08/2020 {#version-181---05082020}

* Tuzatildi: Brizy 2.0 bilan nomoslik;
* Tuzatildi: menyu ro‘yxatini qurishda kichik unumdorlik muammolari;

### Versiya 1.8.0 - 27/04/2020 {#version-180---27042020}

* Tuzatildi: margin rejimi tanlanmaganda bildirishnomalarning yuqori panel ostida yashirinib qolishi;
* Qo‘shildi: maxsus sahifalar endi bir vaqtning o‘zida bir nechta WordPress admin yuqori darajadagi va quyi sahifalarini almashtira oladi;
* Qo‘shildi: adminlar endi WP Admin Pages PRO yordamida admin sahifalarni yashira oladi;

### Versiya 1.7.9 - 01/04/2020 {#version-179---01042020}

* Tuzatildi: Brizy 1.10.118 va undan yuqori versiyalarda admin sahifalarda SVG qo‘llab-quvvatlashini buzishi;

### Versiya 1.7.8 - 26/03/2020 {#version-178---26032020}

* Tuzatildi: fransuz tilidan foydalanilganda Editor sahifasini buzadigan escaping xatosi;

### Versiya 1.7.7 - 04/03/2020 {#version-177---04032020}

* Tuzatildi: Brizy Builder bilan kichik nomoslik;
* Yaxshilandi: Freemius SDK 2.3.2 ga yangilandi;

### Versiya 1.7.6 - 10/02/2020 {#version-176---10022020}

* Tuzatildi: pastki o‘ng burchakdagi Admin Page tahrirlash tugmasi Dashboard Widgets’da ishlamasligi;
* Tuzatildi: Astra bilan kichik nomoslik;
* Tuzatildi: Brizy’ning yangi versiyasi moslikni buzishi;

### Versiya 1.7.5 - 14/12/2019 {#version-175---14122019}

* Tuzatildi: Replace Page opsiyasida menyu elementlarini to‘ldirish uchun yangi chekka holat ishlovchisi qo‘shildi;
* Tuzatildi: Elementor shriftlari ishlamasligi;
* Yaxshilandi: Account sahifasidan maxfiy ma’lumotlarni yashirishni qo‘llab-quvvatlash uchun Freemius SDK yangilandi;

### Versiya 1.7.4 - 29/11/2019 {#version-174---29112019}

* Tuzatildi: WooCommerce Memberships bilan nomoslik;
* Tuzatildi: Oxygen Builder tab komponenti ishlamasligi;
* Tuzatildi: Beaver Themer ishlamasligi;

### Versiya 1.7.3 - 12/07/2019 {#version-173---12072019}

* Tuzatildi: parent sahifasi boshqa admin sahifa turiga aylantirilganda sahifalarning yo‘qolib qolishi;
* Yaxshilandi: Admin Page turlari orasida yaxshiroq ro‘yxat jadvali ajratkichlari;
* Yaxshilandi: plugin’ning butun kod bazasi bo‘yicha xavfsizlik tekshiruvi;
* Yaxshilandi: berilgan menyu/kontent manbasi turi uchun xususiyat mavjud bo‘lmaganda Separator tab ogohlantirishidagi izoh;

### Versiya 1.7.2 - 01/07/2019 {#version-172---01072019}

* Tuzatildi: Freemius SDK versiyasi 2.3.0 ga yangilandi;
* Tuzatildi: Flywheel bilan nomoslik muammosi;

### Versiya 1.7.1 - 27/06/2019 {#version-171---27062019}

* Tuzatildi: Welcome Widget endi barcha rollar uchun ko‘rsatiladi;
* Tuzatildi: Admin Pages menyusini yashirish/ko‘rsatish uchun Screen Option qo‘shilmaydi, agar menyu https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ manzilida hujjatlashtirilgan filter orqali yashirilayotgan bo‘lsa
* Yaxshilandi: Admin Pages menyularini yashirish endi builder UI’dagi Beaver Builder saqlangan shablonlar ro‘yxatidan yaratilgan shablonlarni ham yashiradi;
* Qo‘shildi: admin sahifalarni ommaviy faollashtirish va faolsizlantirish opsiyalari;
* Qo‘shildi: sahifalarni asosiy saytda ham ko‘rsatish opsiyasi;
* Qo‘shildi: Replace rejimida yuqori va quyi darajadagi menyu yorliqlarini qayta nomlash opsiyasi;

### Versiya 1.7.0 - 04/06/2019 {#version-170---04062019}

* Tuzatish: Oxygen shablonlari ko‘rinmasligi bilan bog‘liq muammolar;
* Qo‘shildi: Widget yaratishni qo‘llab-quvvatlash!

### Versiya 1.6.1 - 22/05/2019 {#version-161---22052019}

* Tuzatildi: imlo xatolari;
* Tuzatildi: quyi menyu sahifalari bir xil tartib qiymatiga ega oldingi quyi menyu elementlarini almashtirib yuborishi;
* Tuzatildi: nusxalash endi nusxalangan sahifaning slug’ini qayta o‘rnatadi;
* Yaxshilandi: pt_BR va es_ES po fayllari yangilandi;
* Yaxshilandi: ro‘yxat jadvali endi maxsus sahifalar nomini parent sahifalar sifatida ham ko‘rsatadi;

### Versiya 1.6.0 - 21/05/2019 {#version-160---21052019}

* Qo‘shildi: External Links endi iframe orqali yuklashni ham qo‘llab-quvvatlaydi;

### Versiya 1.5.5 - 17/05/2019 {#version-155---17052019}

* Tuzatildi: sahifa o‘chirilgan yoki nusxalanganida ogohlantirish xabarining chiqarilishi;
* Tuzatildi: ruxsat sozlamalari adminlarga qo‘llanmasligi;

### Versiya 1.5.4 - 08/05/2019 {#version-154---08052019}

* Tuzatildi: Sliced Invoices bilan nomosliklar;
* Tuzatildi: Oxygen bilan kichik muammo;
* Tuzatildi: yangi admin sahifa sarlavhasi maydonidagi placeholder key-up paytida yo‘qolmasligi;

### Versiya 1.5.3 - 03/05/2019 {#version-153---03052019}

* Tuzatildi: Advanced Custom Field option sahifalari bilan nomoslik;
* Qo‘shildi: muayyan foydalanuvchilarni maxsus admin sahifalar nishoni sifatida qo‘shish opsiyasi;

### Versiya 1.5.2 - 30/04/2019 {#version-152---30042019}

* Tuzatildi: Brizy’ning yangi versiyalari bilan nomosliklar;
* Qo‘shildi: ispancha tarjima qo‘shildi - John Rozzo iltifoti bilan. Rahmat, John!
* Qo‘shildi: Oxygen Builder uchun beta qo‘llab-quvvatlash;

### Versiya 1.5.1 - 15/04/2019 {#version-151---15042019}

* Tuzatildi: Normal va HTML tahrirchilardagi placeholder’lar bilan bog‘liq muammo;
* Tuzatildi: Admin Pages Tools -> Export’da ko‘rinmasligi;
* Tuzatildi: skriptlar va stillarni faqat o‘z sahifalarimizda yuklash;
* Qo‘shildi: Super Admins endi Admin Pages’ni nusxalay oladi;

### Versiya 1.5.0 - 29/03/2019 {#version-150---29032019}

* Tuzatildi: Sentry tomonidan aniqlangan kichik xatolar;
* Tuzatildi: Edit Admin sahifasi ekranida Delete tugmasi ishlamayotgani;
* Yaxshilandi: Standard BB litsenziyasi ham qo‘llab-quvvatlanishini aniq ko‘rsatish uchun BeaverBuilder tugmasi o‘zgartirildi;
* Qo‘shildi: Adminlar submenyular tartibini ham belgilashi mumkin;
* Qo‘shildi: Sahifani almashtirish rejimi endi mavjud barcha menyu elementlarini qo‘llab-quvvatlaydi;

### Versiya 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Qo‘shildi: https://wpadminpagespro.com saytida stand-alone plugin sifatida ishga tushirildi
* Qo‘shildi: Sahifa yaratish jarayoni tugagandan keyin Admin Pages menyu elementini menyudan olib tashlash opsiyasi;
* Qo‘shildi: Admin sahifalaridan admin bildirishnomalarini olib tashlash opsiyasi;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Qo‘shildi: Inline Editor;
* Qo‘shildi: Kelajakda yangi Page Builderlar/Content Sourcelarni qo‘shishni osonlashtirish uchun kontent manbasi parent klassi birlashtirildi;
* Qo‘shildi: Tashqi URLlar qo‘llab-quvvatlanishi;

### Versiya 1.3.0 - 15/01/2019 {#version-130---15012019}

* Tuzatildi: Admin Pages multisite muhitlarida asosiy saytda ko‘rinmaydi;
* Yaxshilandi: Subsaytlarning eksport ekranidan Multisite Ultimate maxsus post turlari olib tashlandi;
* Qo‘shildi: Sahifalar yaratish ekranlarida tarmoq adminlari uchun tezkor amallar bilan top-bar;
* Qo‘shildi: KATTA! Elementor qo‘llab-quvvatlanishi!
* Qo‘shildi: KATTA! Brizy qo‘llab-quvvatlanishi!

### Versiya 1.2.1 - 17/11/2018 {#version-121---17112018}

* Tuzatildi: Plugin Multisite Ultimate 1.9.0 bilan mos qilindi;

### Versiya 1.2.0 - 10/09/2018 {#version-120---10092018}

* Qo‘shildi: wp-config.php faylida WU_APC_ALLOW_PHP_PROCESSING true qilib belgilangan bo‘lsa, PHP qo‘llab-quvvatlanishi qo‘shildi. Bu PHP'ning eval funksiyasidan foydalanmaydi, ammo baribir xavfsizlik teshiklariga olib kelishi mumkin. Bundan ehtiyotkorlik bilan foydalaning;
* Yaxshilandi: Add-on plugin yangilagichi;
* Yaxshilandi: Yangilanishlar serveri uchun yangi URL;

### Versiya 1.1.2 - 16/08/2018 {#version-112---16082018}

* Tuzatildi: WP Engine bilan kichik muammo;

### Versiya 1.1.1 - 16/08/2018 {#version-111---16082018}

* Tuzatildi: Almashtirish sahifalariga ruxsatlar to‘g‘ri qo‘llanmayotgani;

### Versiya 1.1.0 - 15/08/2018 {#version-110---15082018}

* Qo‘shildi: Beaver Builder shablonlari endi qo‘llab-quvvatlanadi! Sevimli sahifa quruvchingizdan foydalanib maxsus admin sahifalarini yaratishingiz mumkin;
* Qo‘shildi: Endi WordPress standart admin sahifalarining kontentini ham almashtirish mumkin;
* Qo‘shildi: Endi yaratilgan kontentni standart WordPress admin sahifalarining yuqori yoki pastki qismiga ham qo‘shish mumkin;

### 0.0.1 {#001}
- Dastlabki reliz
