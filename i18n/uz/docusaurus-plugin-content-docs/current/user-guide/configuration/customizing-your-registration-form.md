---
title: Ro'yxatdan o'tish shaklingizni moslashtirish
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Ro'yxat (Registration) Formingizni Qanday Sozlash

Ultimate Multisite platformida WordPress asosida qurilgan boshqa barcha SaaS tizimlaridan farqli o'laroq, tarmoqning sizning sahifangizni noyob ko'rinishga keltirish uchun bizning **Checkout Forms** funksiyamiz bilan ro'yxatdan olinish va kirish sahifalaringizni sozlash imkonini beradi.

Ular yangi mijozlarni jalb qilishda turli yondashuvlar bilan tajriba qilish uchun qulay va moslashuvchan usul bo'lsa-da, ular asosan shaxsiy ro'yxatdan olinish formalarini yaratish uchun ishlatiladi. Ushbu maqolada siz buni qanday amalga oshirish mumkinligini ko'rsatishga harakat qilaman.

## Kirish va ro'yxatdan olinish sahifalari:

Ultimate Multisite o'rnatilgandan so'ng, u asosiy saytingizda avtomatik ravishda maxsus kirish va ro'yxatdan olinish sahifalarini yaratadi. Bu standart sahifalarni har qanday vaqti bilan **Ultimate Multisite > Settings > Login & Registration** sahifasidan orqaga borib o'zgartirishingiz mumkin.

![Login and Registration settings page](/img/config/settings-general.png)

Kirish va ro'yxatdan olinish sozlamalarining to'liq ko'rinishi:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** sahifasidagi siz sozlash imkonli har bir variantni ko'rib chiqamiz:

  * **Registrationni faollashtirish (Enable registration):** Bu variant tarmoqning ro'yxatdan olinishini yoqish yoki o'chirish imkonini beradi. Agar u o'chirilgan bo'lsa, mijozlar sizning mahsulotlaringizga ro'yxatdan olinishi va obuna bo'lishi mumkin bo'lmaydi.

  * **Email tasdiqlashni faollashtirish (Enable email verification):** Agar bu variant yoqilgan bo'lsa, bepul reja yoki sinov muddati bilan to'langan reja uchun obuna bo'lgan mijozlar tasdiqlash elektron xabarini oladilar va ularning saytlarini yaratish uchun tasdiqlash havolasiga bosishi kerak bo'ladi.

* **Standart ro'yxatdan o'tish sahifasi (Default registration page):** Bu ro'yxatdan o'tish uchun standart sahifa hisoblanadi. Ushbu sahifani veb-saytingizda nashr etishingiz va unda ro'yxatdan o'tish shakli (shuningdek, "checkout form" deb ham ataladi) bo'lishi kerak – bu yerda mijozlaringiz sizning mahsulotlaringizga obuna bo'ladi. Siz iltimos qilishingiz mumkin, ko'p sonli ro'yxatdan o'tish sahifalari va checkout formlari yaratishingiz mumkin, lekin unutmangki, checkout formining shortcode-ini ro'yxatdan o'tish sahifasiga qo'yishingiz kerak, aks holda u paydo bo'lmaydi.

* **Maxsus kirish sahifasidan foydalanish (Use custom login page):** Bu variant sizga standart `wp-login.php` sahifasi dan boshqa maxsus kirish sahifasidan foydalanish imkonini beradi. Agar bu opsiya yoqilgan bo'lsa, yuqoridagi **Standart kirish sahifasi (Default login page)** opsiyasida qaysi sahifa kirish uchun ishlatilishini tanlashingiz mumkin.

* **Asl kirish URL-ini yashirish (Obfuscate the original login url (wp-login.php))**: Agar siz asl kirish URL'ini yashirmoqchi bo'lsangiz, bu opsiyani yoqishingiz mumkin. Bu brute-force hujumlarini oldini olish uchun foydalidir. Ushbu opsiya faollashtirilgan bo'lsa, Ultimate Multisite foydalanuvchi asl `wp-login.php` linkiga kirishga urinayotganda 404 xatoni ko'rsatadi.

* **Sinxron sayt nashr etishni majburlash (Force synchronous site publication)**: Mijoz tarmoqda mahsulotga obuna bo'lgandan so'ng, yangi kutib turuvchi sayt haqiqiy tarmoq saytiga o'zgartirilishi kerak. Nashr jarayoni Job Queue orqali asinxron ravishda amalga oshiriladi. Bu opsiyani yoqish orqali nashrni ro'yxatdan o'tish bilan bir xil so'rov (request) ichida sodir bo'lishini majburlashingiz mumkin.

Endi kirish va ro'yxatdan o'tish jarayoni bilan hali ham tegishli bo'lgan boshqa opsiyalarga qaraylik. Ular shu sahifadagi **Boshqa opsiyalar (Other options)** bo'limida joylashgan:

* **Standart rol (Default role):** Bu ro'yxatdan o'tish jarayonidan so'ng mijozlaringiz veb-saytda ega bo'lishlari kerak bo'lgan rol.

* **Jumper'ni Faollashtirish:** Bu sozlama admin hududida Jumper qisqartmasini faollashtiradi. Jumper administratorlarga barcha menyular orqali har bir menyuni ko'rib chiqishdan oldin Ultimate Multisite ekranlariga, tarmoq obyektlari va boshqa qo'llab-quvvatlanadigan manzilga tez o'tish imkonini beradi. Agar siz bu tezkor navigatsiya vositasini admin interfeysidan yashirishni afzal ko'rsangiz, uni o'chiring.

* **Asosiy saytdagi foydalanuvchilarni ham qo'shish:** Bu variantni faollashtirganingizda, ro'yxatdan o'tish jarayonidan so'ng foydalanuvchini tarmoqning asosiy saytiga ham qo'shiladi. Agar siz bu variantni yoqsangiz, quyida ushbu foydalanuvchilar uchun **default rol** (standart rol) sozlamasini belgilash imkoniyati ham paydo bo'ladi.

* **Ko'p hisoblarni faollashtirish:** Foydalanuvchilarga tarmoqning turli saytlari bo'yicha bir xil elektron pochta manzili bilan hisoblarni yaratishga ruxsat bering. Agar bu variant o'chirilgan bo'lsa, mijozlaringiz tarmoqdagi boshqa veb-saytlarida bir xil elektron pochta manziliga hisob ochish imkonini qo'llab-quvvatlamaydi.

Va bu siz moslashtirishingiz mumkin bo'lgan kirish va ro'yxatdan o'tish bilan bog'liq barcha variantlardir! Ularni tahrirlashni tugatganingizdan so'ng sozlamalaringizni saqlab qo'ilmang.

## Ko'p ro'yxatdan o'tish shakllaridan foydalanish:

Ultimate Multisite 2.0da siz istashingizdek turli maydonlar, taklif etiladigan mahsulotlar va boshqa narsalar bilan ko'p shakl yaratishingiz mumkin bo'lgan to'lov shaklini tahrirlash imkoniyati mavjud.

Kirish va ro'yxatdan o'tish sahifalari qisqartmalar (shortcodes) bilan ichki qilingan: kirish sahifasida **[wu_login_form]** va ro'yxatdan o'tish sahifasi uchun **[wu_checkout]**. Ro'yxatdan o'tish sahifasini esa to'lov shakllarini qurib yoki yaratib ko'rsangiz, uni yanada moslashtirishingiz mumkin.

Bu funksiyaga kirish uchun chap menyu panelidagi **Checkout Forms** menyusiga kiring.

![Sidebardagi Checkout Forms menyusi](/img/config/checkout-forms-list.png)

Bu sahifada sizda mavjud bo'lgan barcha to'lov shakllarini ko'rishingiz mumkin.

Agar yangisini yaratmoqchi bo'lsangiz, sahifaning yuqori qismidagi **Add Checkout Form** (To'lov shaklini qo'shish) tugmasiga bosing.

Bularingiz uchun ushbu uchta variantdan birini boshlang'ich nuqtai nazar sifatida tanlashingiz mumkin: yagona bosqich, ko'p bosqich yoki bo'sh. Keyin, **Editorga o'tish** tugmasini bosing.

![Single step, multi-step, or blank checkout form options](/img/config/checkout-forms-list.png)

Yoki mavjud shakllarni ularning nomidan pastdagi variantlarga bosib turganda tahrirlashingiz yoki ko'chirish (duplicate) imkoniyatiga ega bo'lasiz. U yerda shuningdek, shaklning shortcode'ini nusxalash yoki shaklni o'chirish uchun ham funksiyalar topishingiz mumkin.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Agar siz yagona bosqichni yoki ko'p bosqichni tanlasangiz, checkout shakli ishlay olishi uchun asosiy bosqichlar bilan allaqachon to'ldirilgan bo'ladi. Keyin, istasangiz, unga qo'shimcha bosqichlar qo'shishingiz mumkin.

### Checkout Shaklini Tahrirlash:

Oldin aytib o'tganimizdek, turli maqsadlar uchun checkout shakllarini yaratishingiz mumkin. Bu misolda biz ro'yxatdan o'tish shakli bilan ishlaymiz.

Checkout shakli editoriga o'tib, shaklga nom bering (bu faqat ichki murojaat uchun ishlatiladi) va slug bering (masalan, shortcode'lar yaratish uchun ishlatiladi).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Shakllar bosqichlar va maydonlardan iborat bo'ladi. Yangi bosqichni qo'shish uchun **Add New Checkout Step** tugmasiga bosing.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal oynaning birinchi yorlig'ida shaklingizning bosqichini to'ldiring. Uning ID, nomi va tavsifini bering. Bu elementlar ko'pincha ichki foydalanish uchun ishlatiladi.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Keyin, bosqichning ko'rinishini belgilang. Siz **Doimo ko'rsatish** (Always show), **Faqat tizimga kirgan foydalanuvchilar uchun ko'rsatish** (Only show for logged in users) yoki **Faqat mehmonlar uchun ko'rsatish** (Only show for guests) orasidan tanlash imkoniyatiga ega bo'lasiz.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Энди шаг стилини тақдим этинг. Булар таннарли майдондарга кирадиган может бўлган нарсалар.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Энди биринчи шаклига майдонларни қўшиш вақти келди. Фақат **Add New Field** (Янги Майдон Қўшиш) ничакларини танланг ва қандай бўлим турини танланг.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Ҳар бир майдон тўлдирилиши керак бўлган турли параметрларга эга. Бу биринчи кириш учун биз **Username** (Фарзиламан) майдонини танлаймиз.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Сиз керак бўлган ҳар қандай шакл ва майдонларни қўша оласиз. Мижозлар учун маҳсулотларини танлашга бериш учун **Pricing Table** (Баҳоловчи Жадвал) майдонидан фойдаланинг. Агар мижозларингиз шаблон танлашга рухсат бермоқчи бўлсангиз, **Template Selection** (Шаблон Станлаширувчи) майдонни қўшинг ва шу каби.

_**Эслатма:** Агар сиз checkout formни ясагандан кейин маҳсулот ясасангиз, уни Pricing Table бўлимида қўшишингиз керак бўлади. Агар сиз уни қўшмасангиз, мижозлар учун ройхатдан ўтиш саҳифасида маҳсулот кўринмайди._

_**Эслатма 2:** checkout formни ясаш учун username (foydalanuvчи исми), email (электрон почта), password (сир парақ), site title (сайт номи), site URL (сайт манзили), order summary (тартиб хулоса), payment (маориш) ва submit button (юрик тугма) мажбурий майдонлар ҳисобланади._

checkout formни ишлаётганингизда, мижозлар формни қандай кўришини кўриш учун **Preview** (Мушора кўриш) тугмасидан фойдаланиш мумкин. Шунингдек, мавжуд фойдаланувчи сифати ёки зиёрат сифатида кўриш ўртасида ўзгариш қилишингиз мумкин.

![Checkout form preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Visitor or existing user checkout form preview](/img/config/checkout-form-preview-modal.png)

Nihoy, **Advanced Options** (Kengashgan Parametrlar) bo'yicha siz **Thank You** sahifasi uchun xabarni sozlash, konversiyalarni kuzatish uchun qismlarni qo'shish, checkout formiga o'zingizning CSS-ingizni qo'shish yoki uni ma'lum mamlakatlarga cheklash imkoniyatiga ega bo'lasiz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Shuningdek, o'ng ustun (right column)dagi ushbu opsiyani yoqib yoki o'chirish orqali checkout formingizni qo'lda faollashtirishingiz yoki uni doimiy ravishda o'chirib tashlashingiz mumkin.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Checkout formingizni saqlashni unutmang!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Formingizning shortcode'ini olish uchun **Generate Shortcode** (Shortcode yaratish) tugmasiga bosing va modal oynasida ko'rsatilgan natijani nusxalang.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Eslatma:** Bu checkout formini ro'yxatingizga qo'shish uchun bu shortcode'ni ro'yxatdan o'tish sahifangizda qo'shishingiz kerak._

## URL parametrlari orqali mahsulotlar va shablonlarni oldindan tanlash:

Mahsulotingiz uchun moslashtirilgan narx jadvalini yaratmoqchi bo'lsangiz va mijozning narx jadvali yoki shablon sahifasidan tanlaydigan mahsulotni yoki shablonni checkout formida oldindan tanlab qo'ymoqchi bo'lsangiz, bunga URL parametrlari dan foydalanishingiz mumkin.

### **Reja (plans) uchun:**

**Ultimate Multisite > Products > Select a plan** (Ultimate Multisite > Mahsulotlar > Reja tanlash) sahifasiga o'ting. Siz sahifaning yuqori qismida **Click to copy Shareable Link** (Boshqariladigan linkni nusxalash uchun bosing) tugmasini ko'rishingiz kerak. Bu siz ushbu aniq rejaning checkout formida oldindan tanlanishi mumkin bo'lgan linkdir.

![Product page with shareable link button](/img/config/products-list.png)

Eslatma: Bu bahsi geçen shareable link faqat **Plans (Rejalar)** uchun amal qiladi. Shareable linklarni paketlar yoki xizmatlar uchun ishlatib bo'lmaydi.

### Shablolar uchun:

Agar siz o'zingizning to'lov shaklingizda sayt shablonlarini oldindan tanlashni istasangiz, ro'yxatdan o'tish sahifasi URL-ingizdagi parametrdan foydalanishingiz mumkin: **?template_id=X**. "X" ni **sayt shablon ID raqami** bilan almashtirishingiz kerak. Bu raqamni olish uchun **Ultimate Multisite > Sites** bo'limiga kiring.

Ishlatmoqchi bo'lgan sayt shablonining ostida joylashgan **Manage (Boshqarish)** tugmasiga bosing. Siz SITE ID raqamini ko'rasiz. Faqat shu aniq sayt shabloni uchun bu raqamni to'lov shaklingizda oldindan tanlanishi uchun ishlating. Bizning holatimizda, URL parametri **?template_id=2** bo'ladi.

![Site shablonlari ro'yxati site shablon ID ni ko'rsatadi](/img/config/site-templates-list.png)

Aytish uchun, bizning tarmoq saytimiz [**www.mynetwork.com**](http://www.mynetwork.com) bo'lsin va to'lov shaklimiz /register sahifasida joylashgan bo'lsin. Bu sayt shablonini oldindan tanlangan butun URL quyidagicha ko'rinadi: [**www.mynetwork.com/register/?template_id=2**](http://www.mynetwork.com/register/?template)**_id=2**.

Va agar istasangiz, ham mahsulotlarni va shablonlarni to'lov shaklingizda oldindan tanlashingiz mumkin. Siz buni qilish uchun faqat planning shareable linkini nusxalab, uning oxiriga shablon parametrasini qo'yishingiz kerak. U quyidagicha ko'rinadi: [**www.mynetwork.com/register/premium-plan/?template_id=2**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
