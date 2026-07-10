---
title: Sayt shablonlari
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Sayt Shablonlari (v2) {#site-templates-v2}

_**Eslatma: Bu maqola Ultimate Multisite 2.x versiyasiga oid. Agar siz 1.x versiyasidan foydalanayotgan bo'lsangiz,**_ **bu maqolaga qarang.**_

Ultimate Multisite bilan premium tarmoq yaratishimizning maqsadi — mijozlarimizga saytlarini yaratishda moslashuvchanlik va tanlash uchun turli variantlar berish orqali iloji bo'lgan har bir jarayonni avtomatlashtirishdir. Bu muvozanatni erishishning oson yo'llaridan biri — Ultimate Multisite Sayt Shabloni funksiyasidan foydalanishdir.

## Sayt Shabloni nima? {#what-is-a-site-template}

Nomidan ko'rinib turibdi, Sayt Shabloni bu tarmoq ichida yangi saytlar yaratishda asos sifatida ishlatiladigan shablon (boilerplate) saytdir.

Bu shuni anglatadiki, siz asosiy saytni yaratishingiz mumkin, turli pluginlarni faollashtirishingiz, faol mavzuni belgilashingiz va uni istagan qandaydir tarzda moslashtirishingiz mumkin. Keyin mijoz yangi akkaunt ochganda, ular ma'noli kontent bo'lmagan standart WordPress saytini emas, balki barcha moslashuvlar va kontent allaqachon mavjud bo'lgan asosiy saytingiz nusxasini oladilar.

Bu ajoyib tuyuladi, lekin yangi sayt shablonini qanday yarataman? Bu iloji mumkin bo'lgan eng oddiy narsaga teng.

## Yangi Sayt Shabloni yaratish va tahrirlash {#creating-and-editing-a-new-site-template}

Sayt Shabloni sizning tarmoqdagi oddiy saytlardir. Yangi shablon yaratish uchun siz shunchaki **Network Admin > Ultimate Multisite > Sites > Add Site** ga o'tishingiz mumkin.

**![Sites ro'yxati sahifasidagi site qo'shish tugmasi](/img/config/site-templates-list.png)**

Bu modal oynani ochadi va sizdan **Sayt nomi, Sayt domen/yo'li** va **Sayt turi** so'raladi. **Sayt turi** tushuvchi menyusidan **Site Template** ni tanlaganingizga ishonch hosil qiling.*

_![site turini tanlash uchun modal oynasi](/img/config/site-templates-list.png)_

Shablon nima o'z ichiga ekanligini tushuntirish uchun mijozlarga ko'rsatadigan tavsifni ham qo'shishingiz mumkin:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Formning past, sizda **Copy Site** (Sayt nusxasini nusxalash) o'gichini ko'rishingiz mumkin. Bu sizga mavjud sayt shablonidan yangi sayt shablonini yaratish imkonini beradi, bu esa boshidan yaratishdan ko'ra vaqtni tejashingiz uchun foydali bo'ladi.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Sayt Shabloni kontentini sozlash {#customizing-the-contents-of-a-site-template}

Sayt shabloningizni sozlash uchun, uning dashboard paneliga o'ting va kerakli o'zgarishlarni bering. Siz yangi postlar, sahifalar yaratishingiz, pluginlarni faollashtirishingiz va faol mavzuni (theme) o'zgartirishingiz mumkin. Hatto Customizerga o'tib, barcha turdagi sozlamalarni o'zgartirishingiz ham mumkin.

![Site template edit interface](/img/config/site-template-edit.png)

Barcha bu ma'lumotlar mijoz ushbu Sayt Shabloni asosida yangi sayt yaratganida nusxalanadi.

### Kengaytirilgan opsiyalar {#advanced-options}

Agar siz ba'zi sozlamalarda kodlash bilan tanish bo'lsangiz, yangi sayt yaratilgandan so'ng uning ma'lumotlarini avtomatik almashtirish uchun bizning Search and Replace API (Qidirish va Almashtirish API) dan foydalanishingiz mumkin. Bu, masalan, "Tavsif" sahifasidagi kompaniya nomlarini almashtirish yoki Kontakt sahifasidagi kontakt elektron pochta manzilini o'zgartirish kabi narsalar uchun foydalidir.

### Sayt shablonlaridan foydalanish {#using-site-templates}

Xo'p, siz turli dizaynlar, mavzular va sozlamalarga ega ko'plab Sayt Shablonlarini yaratdingiz. Endi ularni o'zingizning tarmog'ingizda qanday foydali qilish mumkin?

Asosiy jihatdan, endi siz ikki xil yondashuvdan foydalanishingiz mumkin (bir vaqtning o'zida emas):

  * Har bir Rejamingizga bitta Sayt Shablonini biriktirish.

**Yoki**

  * Mijozlarga ro'yxatdan o'tish paytida sayt shablonlarini o'zlari tanlash imkonini berish.

#### Rejim 1: Sayt Shabloni taqsimlash {#mode-1-assign-site-template}

Bu rejimda, mijozlar hisoblarini yaratishda shablon tanlay olmaydi, balki siz har bir Reja uchun qaysi shablon ishlatilishini belgilaysiz.

Buni qilish uchun **Ultimate Multisite > Products > Edit** ga o'tishingiz kerak bo'ladi.

![Edit product to assign site template](/img/config/product-site-templates.png)

Bu sizni **Product Edit** sahifasiga olib keladi. **Product Options** (Mahsulot Parametrlari) bo'limida **Site template** (Sayt shablonini) yorlig'ini toping va menyu qutisi orqali **Assign Site Template** (Sayt shablonini yuklash) opsiyasini tanlang. Bu sizga mavjud sayt shablonlari ro'yxatini ochadi va faqat mahsulotga bag'ishlangan bitta sayt shablonini tanlashingiz mumkin bo'ladi.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Rejim 2: Mavjud Sayt Shablonidan Tanlash {#mode-2-choose-available-site-template}

Bu rejimda siz mijozlarga ro'yxatdan o'tish jarayonida tanlov berasiz. Ular mahsulot sozlamalarida belgilagan turli sayt shablonlaridan tanlay olishadi. Siz tanlanayotgan mahsulot ostida ular tanlaydigan sayt shablonlarini cheklash imkoniyatiga ega bo'lasiz. Bu sizga har bir mahsulot uchun turli sayt shablonlari to'plamlarini saqlashingiz mumkin, bu esa yuqori narxlilarga ega mahsulotlar uchun turli funksiyalar va xususiyatlarni ajratib ko'rsatish uchun idealdir.

**Mahsulotni tahrirlash** sahifasida. **Mahsulot opsiyalari** bo'limida **Sayt shablonini (Site template)** yig'indisini toping va menyu maydonchasidan **Mavjud sayt shablonini tanlash (Choose Available Site Template)** variantini tanlang. Bu sizga mavjud sayt shablonlari ro'yxatini ochadi va qaysi sayt shablonini mavjud qilishni xohlasangiz, uni tanlashingiz mumkin bo'ladi. Buni uning xatti-harakatiga ko'ra amalga oshirishingiz mumkin: agar siz sayt shablonini ro'yxatda ko'rsatmoqchi bo'lsangiz **Mavjud (Available)** ni, agar sayt shablonini variant sifatida ko'rsatmaslik istasangiz **Mavjud emas (Not Available)** ni, va ro'yxatdagi sayt shablonlardan birining boshlang'ich tanlangan bo'lishini xohlasangiz esa **Oldindan tanlangan (Pre-selected)** ni tanlashingiz mumkin.

![Xatti-harakat variantlari bilan mavjud sayt shablonlarini tanlash](/img/config/product-site-templates.png)

### Boshlang'ich rejim: To'lov shakli bo'yicha sayt shablonini tanlash {#default-mode-site-template-selection-on-the-checkout-form}

Agar siz barcha sayt shablonlaringizni ro'yxatdan o'tish davrida mavjud qilishni xohlasangiz, yoki har bir mahsulot uchun qo'shilgan sayt shablonlarini belgilash yoki aniqlash kabi qo'shimcha ishlar qilishdan voz kechmoqchi bo'lsangiz. Unda siz **To'lov shakli (Checkout Form)** bo'yicha sayt shablonini tanlashni sozlang. Buni amalga oshirish uchun **Ultimate Multisite > Checkout Forms** ga o'ting va konfiguratsiya qilmoqchi bo'lgan shakl ostida **Tahrirlash (Edit)** tugmasini bosing.

Bu sizga **To'lov shaklini tahrirlash (Edit Checkout Form)** sahifasini ochadi. **Shablon tanlash (Template Selection)** maydonini toping va uning ostidagi **Tahrirlash (Edit)** tugmasini bosing.

Modal oynasi chiqadi. **Shablon saytlari (Template Sites)** maydonida ro'yxatdan o'tish davrida mavjud bo'lishini xohlagan barcha sayt shablonlarini tanlashingiz va ularni ro'yxatga olishingiz mumkin. Siz bu yerda belgilagan sayt shablonlari foydalanuvchi qaysi mahsulotni tanlasa ham mavjud bo'ladi.

![To'lov shakli tahrirchisi maydonidagi shablon tanlash](/img/config/checkout-form-template-step.png)

Frontendda mijozlar to'lov jarayonida shablon tanlovchi orqali saytning boshlang'ich dizaynini tanlash imkoniyatiga ega bo'ladi.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Sayt shablonlari variantlari {#site-template-options}

Ultimate Multisite sozlamalari ostida yoqish yoki o'chirish mumkin bo'lgan boshqa sayt shablonlari funksiyalari mavjud.

![Ultimate Multisite sozlamalaridagi sayt shablonlari variantlari](/img/config/settings-sites-templates-section.png)

#### Shablonni almashtirishga ruxsat berish (Allow Template Switching) {#allow-template-switching}

Bu opsiyani yoqish orqali mijozlaringiz akkaunt va sayt yaratilgandan so'ng ro'yxatdan o'tish jarayonida tanlagan shablonni almashtirishiga imkon beriladi. Bu mijoz nuqtasi uchun foydali, chunki ular keyinchalik asl tanlovlari o'zlar uchun eng yaxshi emasligini aniqlasalar, qayta tanlash imkonini beradi.

#### Foydalanuvchilarga o'z saytlarini shablon sifatida ishlatishga ruxsat berish (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Subsayt foydalanuvchilari o'z saytlarini qurish va dizayn qilish uchun vaqt sarflagani sababli, ular tarmoqning boshqa subsaytini yaratganda mavjud bo'lgan sayt shablonlaridan birini nusxalash va undan foydalanishni xohlaydilar. Bu opsiya ularga buni amalga oshirish imkonini beradi.

#### Shablon ko'chayotganda media fayllarini nusxalash (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Bu opsiyani tekshirganingizda, shablon saytiga yuklangan media fayllari yangi yaratilgan saytga nusxalanadi. Buni har bir reja uchun o'zgartirish mumkin.

#### **Qidiruv tizimlaridan Sayt shablonlarini indekslashni oldini olish (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Bu maqolada muhokama qilinganidek, sayt shablonlari standart (boilerplate) bo'lsa-da ular hali ham tarmoqning bir qismi hisoblanadi va bu esa ularni qidiruv tizimlarining topishi mumkinligini anglatadi. Bu opsiya sizga sayt shablonlarini yashirish imkonini beradi, toki qidiruv tizimlari ularni indekslashi mumkin bo'ladi.

## Avtomatik qidirish va almashtirish bilan sayt shablonlarini oldindan to'ldirish (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite ning eng kuchli xususiyatlaridan biri ro'yxatdan o'tish formiga istalotdagi matn, rang va tanlov maydonlarini qo'shish imkoniyatidir. Bu ma'lumotlarni yig'ib olganimizdan so'ng, biz uni tanlangan sayt shablonining ba'zi qismlaridagi kontentni oldindan to'ldirish uchun ishlatishimiz mumkin. Keyin yangi sayt e'lon qilindiqlarida Ultimate Multisite o'rnini bosib qo'ygan joylarni ro'yxatdan o'tish paytida kiritilgan haqiqiy ma'lumotlar bilan almashtiradi.

Masalan, agar siz ro'yxatdan o'tish paytida foydalanuvchining kompaniya nomini olishni va kompaniya nomini avtomatik ravishda bosh sahifaga qo'yishni istasangiz. Shablon saytingizning bosh sahifasiga quyidagi kabi joylashuvchilar (placeholders) qo'shishingiz kerak (joylashuvchilar ikki qavslar bilan o'ralgan bo'lishi kerak - {{placeholder_name}}).

![Curly braces with placeholder text on the homepage](/img/config/site-templates-list.png)

Keyin, bu ma'lumotlarni yig'ish uchun siz o'tish formangizga mos keladigan ro'yxatdan o'tish maydonini qo'shishingiz mumkin. Shabloni tanlash uchun ishlatiladigan xudumdorlik (checkout form) redaktori, shablonni tanlovchidan tashqari maxsus maydonlarni joylashtirish imkonini beradi:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Sizning mijozlar esa ro'yxatdan o'tish paytida bu maydonni to'ldira olishadi.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite esa keyin mijoz tomonidan berilgan ma'lumotlar bilan joylashuvchilarni avtomatik ravishda almashtiradi.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "joylashuvchilar to'la sayt" muammosini hal qilish {#solving-the-template-full-of-placeholders-problem}

Bular barchasi ajoyib, lekin biz noqulay muammo bilan duch kelamiz: endi mijozlarimiz ko'rishi mumkin bo'lgan sayt shablonlarımız — ular juda ko'p ma'lumot bermaydigan chiroysiz joylashuvchilar bilan to'la.

Buni hal qilish uchun biz shablonlardagi placeholderlar uchun fasl (fake) qiymatlarni belgilash imkoniyatini taklif qilamiz va bu qiymatlardan foydalanib, mijozlaringiz saytlarga tashrif buyurayotganda ularning ichidagi matnlarni qidirib almashtiramiz.

Siz shablon placeholderlar editoriga **Ultimate Multisite > Settings > Sites** bo'yicha o'tish orqali kirishingiz va keyin, menyu (sidebar) orqali **Edit Placeholders** linkiga bosishingiz mumkin.

![Sites settings sahifasidagi sayt shablonlari sozlamalari](/img/config/settings-sites-templates-section.png)

Bu sizni placeholderlar kontent editoriga olib boradi, unda siz placeholderlarni va ularning tegishli mazmunini qo'shishingiz mumkin.

![Shablon placeholderlar kontent editori kirish nuqtasi](/img/config/settings-sites-templates-section.png)
