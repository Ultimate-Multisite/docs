---
title: To'lov shakllari
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms — bu yangi mijozlarni jalb qilish uchun turli yondashuvlar bilan tajriba o'tkazishda oson va moslashuvchan usuldir.

Ultimate Multisite 2.0 Checkout Form editor mavjud bo‘lib, siz istashingizdek turli maydonlar, taklif etiladigan mahsulotlar va boshqalar bilan ko‘p form yaratishingiz mumkin.

Bu funksiyaga kirish uchun chap menyuda joylashgan Checkout Forms menyusiga o'ting.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Bu sahifada sizda mavjud bo‘lgan barcha checkout formlaringizni ko‘rishingiz mumkin.

Ro‘yxat jadvalida har bir form mijozlar uchun hozir foydalanishga tayyorligini tasdiqlashingiz mumkin bo‘lgan **Status** ustuni bor:

| Status | Ma’nosi |
|---|---|
| **Active** (Faol) | Formning qisqa kodi yoki ro‘yxatdan o‘tish sahifasi nirdlangan har joyda ishlatilishi mumkin. |
| **Inactive** (Faollik yo‘q) | Form saqlangan, lekin faolligi o‘chirilgan. Uni qayta faollashtirguningizcha mijozlar uni orqali to‘lovni yakunlay olmaydi. |

Yangi form yaratmoqchi bo‘lsangiz, oddiygina sahifaning yuqorisidagi "Add Checkout Form" (Checkout Form qo'shish) tugmasini bosing.

Boshlanish nuqtasi sifatida ushbu uchta variantdan birini tanlashingiz mumkin: single step (bir bosqichli), multi-step (ko‘p bosqichli) yoki blank (bo‘sh). Keyin Editorga o'tish uchun bosing.

Agar siz boshlanish nuqtasi sifatida **single step** yoki **multi-step** ni tanlasangiz, form shablonida avtomatik ravishda **Template Selection** (Shablonni tanlash) maydoni bo‘ladi. Bu maydon mijozlarga ro‘yxatdan o‘tish jarayonida sayt shablonini tanlash imkonini beradi. Siz uni joyida qoldirishingiz, olib tashlashingiz yoki editordagi boshqa bir maydon kabi joylashtirishingiz mumkin.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Альтернативно, сизга бор бўлган формаларни уларнинг номидан олиб турувчи опцияларга бориб, уларни тасдиқлаш ва дублирлашингиз мумкин. У ерда шунингдек, форманинг шорткодни кўчириш ёки формани ўчириш учун опциялар ҳам бўлади.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor Обзорi {#checkout-form-editor-overview}

Checkout form editor сизнинг роғликларингни қуриш учун комил интерфейтни таъминлайди. Бу редактор тасовити ҳақида қисқача маълумот беради:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Формани Тўбетиш {#editing-a-checkout-form}

Сиз турли мақсадлар учун checkout формаларини яратишингиз мумкин. Бу мисолда биз роғликлар формати билан ишлаймиз.

Checkout form editorга ўтгандан сўнг, формангизга ном беринг (бу уни фақат ички ишоралар учун фойдаланилади) ва slug (масалан, шорткодларни яратиш учун фойдаланилади).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Формалар қадамлар ва майдонлардан иборат. "Add New Checkout Step" (Янги Checkout Қадами Қўшиш) ни босиб, янги қадам қўша olasиз.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Модал ойнагининг биринчи табиқасида формангизнинг қадамини тўлдиринг. Унга ID, ном ва тавсиф беринг. Бу элементлар кўп ҳолларда ички фойдаланиш учун фойдаланилади.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Кейин, қадамнинг кўринишини белгиланг. Сиз "Always show" (Ҳар доим кўрсати), "Only show for logged in users" (Фақат киришган фойдаланувчилар учун кўрсати) ёки "Only show for guests" (Фақат меҳмонлар учун кўрсати) ни танлашингиз мумкин.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Ниҳоят, қадамнинг услубини тадбирланг. Булар танловчи майдонлардир.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Энди биринчи қадамамга майдонларни қўшиш ва қандай бўлишни танлаш учун "Add New Field" (Янги Майдон Қўшиш) ни босинг.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Har bir maydoncha (field) to'ldirish uchun turli parametrlar mavjud bo'ladi. Bu birinchi kirish uchun biz "Username" maydonchasini tanlaymiz.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Iltimos, sizga kerak bo'lgan soncha va maydonchalarni qo'shishingiz mumkin. Mijozlaringiz uchun mahsulotlaringizni tanlashlari uchun "Pricing Table" maydonchasidan foydalaning. Agar mijozlaringiz shablonni tanlashini xohlasangiz, "Template Selection" maydonchasini qo'shing. Va shunga o'xshash boshqalar ham mavjud.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Eslatma:** checkout formini yaratish uchun username, email, password, site title, site URL, order summary, payment va submit tugmasi majburiy maydonlardir._

Checkout formingiz ustida ishlaganda, mijozlaringiz formani qanday ko'rishini ko'rish uchun har doim Preview tugmasidan foydalanishingiz mumkin. Shuningdek, mavjud foydalanuvchi sifatida yoki tashrif buyuruvchi sifatida o'tishni ham tanlashingiz mumkin.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Nihoyat, Advanced Options (Kengaytirilgan opsiyalar) bo'limida "Rahmat" sahifasi uchun xabarni sozlash, konversiyalarni kuzatish uchun qismlarni qo'shish, checkout formiga maxsus CSS qo'shish yoki uni ma'lum mamlakatlarga cheklash kabi narsalarni konfiguratsiya qilish imkoniyatiga ega bo'lasiz.

![Advanced Options](/img/config/checkout-form-advanced.png)

Shuningdek, o'ng ustun (column)dagi ushbu opsiyani yoqib yoki o'chirish orqali checkout formingizni qo'lda faollashtirishingiz yoki uni doimiy ravishda o'chirish imkoniyatiga ega bo'lasiz.

![Active toggle](/img/config/checkout-form-active.png)

Форманини (form) ниманидан қилиш учун форма ҳаракатларидаги ўчириш (delete) опциясига клитинг:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ҳар доим, сизнинг чекаут формангизни сақлашни унутманг!

![Save button](/img/config/checkout-form-save.png)

Формангизнинг шорткодни олиш учун "Generate Shortcode" (Шорткодни таҳрирлаш)га клитинг ва модал винда кўрсатилган натижани кўчириб олинг.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Баҳолаш жадвали (Pricing Table Field) {#the-pricing-table-field}

**Баҳолаш жадвали (Pricing Table)** майдон чекаут формангизда сизнинг маҳсулотларингизни кўрсатади, бу эса мижозлар учун режа танлаш имконини беради. Бу майдонни ўзгартирганингизда бир нечта опцияни тадбиркорлик қилишингиз мумкин:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Баҳолаш жадвали фронтенд рўйхатдандириш форманида қандай кўриниши қуйидагича:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (Маҳсулотлар)**: Қайси маҳсулотларни кўрсаташни ва уларнинг қайси тартибда пайдо бўлишини танланг.
  * **Force Different Durations (Тартибли муддатларни мажбурий қилиш)**: Бу фаоллаштирилганда, барча маҳсулотлар ҳозирги танланган ҳисоблаш даври учун мос нарх ўзгартирилиши бўлмаса ҳам кўрсатилади. Агар ўчирилса (дефолт), танланган давр учун ўзгартириш бўлмаган маҳсулотлар яшитилади.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (Алгари танланганда яшириш)**: Режа URL орқали аллақачон танланган бўлса (масалан, `/register/premium`), баҳолаш жадвали яширилади.
  * **Pricing Table Template (Баҳолаш жадвали шакли)**: Баҳолаш жадвали учун визуал шаклни танланг (Oddiy Ройхат, Legacy ва ҳ.к.).

Агар сиз форманга маҳсулотнинг чекаут оқимини бутунлай якунлаш учун зарур бўлган майдонларни ўз ичига олмайдиган ҳолда Баҳолаш жадвалига маҳсулот қўшсанг, редактор эслатма (warning) кўрсатади. Яшавўли рўйхат формани учун оғнатишдан ёки сақлашдан олдин бу эслатмани ишлатиб номланган зарур майдонни қўшишингиз мумкин.

### Muddatni Mudda Tanlash Uchun Tugmani Qo'shish {#adding-a-period-selection-toggle}

Agar siz mahsulotlaringizda [Narx Variatsiyalarini](creating-your-first-subscription-product#price-variations) sozlagan bo'lsangiz (masalan, oylik va yillik narxlari), siz xarid qilish shaklingizga **Muddatni Tanlash** maydonini qo'shishingiz mumkin. Bu maydon mijozlarga hisoblanish muddatlari orasida o'tish imkonini beradigan tugmani ko'rsatadi va narx jadvali real vaqtda dinamik ravishda yangilanadi.

#### 1-Qadam: Mahsulotlaringizda Narx Variatsiyalarini Sozlash {#step-1-set-up-price-variations-on-your-products}

Muddatni Tanlash maydonini qo'shishdan oldin, mahsulotingizda narx variatsiyalari sozlangandan vaqashganligiga ishonch hosil qiling. **Ultimate Multisite > Products** ga o'ting, bir mahsulotni tahrirlang va **Price Variations** yorlig'i (tab) bo'limiga o'tib, boshqa hisoblanish muddatlarini qo'shing (masalan, chegirmali narxda Yillik).

![Product-price variations tab on a product](/img/config/product-price-variations-tab.png)

#### 2-Qadam: Muddatni Tanlash Maydonini Xarid Qilish Shaklingizga Qo'shish {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms** ga o'ting va xarid qilish shaklingizni tahrirlang.

2. **Pricing Table** maydoni mavjud bo'lgan bosqichka (step) pastga aylaning va **Add new Field** tugmasini bosing.

3. Maydon turi tanlash dialogida, **Period Select** ni bosing.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Muddat variantlarini sozlang. Har bir variant quyidagilarni talab qiladi:
   * **Duration (Muddat)**: Raqam (masalan, `1`)
   * **Duration unit (Muddat birligi)**: Muddat turi (Kunlar, Haftalar, Oylar yoki Yillar)
   * **Label (Yorliq)**: Mijozlarning ko'rishini ta'minlaydigan matn (masalan, "Oylik", "Yillik")

5. Ko'proq muddat tanlovlarini qo'shish uchun **+ Add Option** tugmasini bosing. Bu variantlar mahsulotlaringizda sozlagan narx variatsiyalari bilan mos kelishi kerak.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. **Period Selector Template** ni tanlang (Clean standart, u oddiy uslubli tanlovni render qiladi va maxsus CSS uchun tayyor bo'ladi).

7. **Save Field** (Maydonniy) tugmasini bosing.

#### 3-qadam: Maydonchani Narxlash Jadvalidan Yuqoriga Joylash {#step-3-position-the-field-above-the-pricing-table}

Eng yaxshi foydalanuvchi tajribasi uchun, siz Period Selection maydonchasi har doim narx jadvalidan **oldin** ko'rinishini ta'minlang. Siz maydonchalarni checkout form editorida qayta tartiblash uchun tortib olishingiz mumkin. Bu yechim orqali mijozlar avvalo hisoblanadigan davrni tanlaydi va keyin o'sha davr uchun narxlarni ko'rishadi.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Frontendda Qanday Ishlaydi {#how-it-works-on-the-frontend}

Sozlamalanganidan so'ng, ro'yxatdan o'tish sahifasiga keladigan mijozlar narx jadvalidan yuqorida davrni tanlovchi (period selector) maydonchasini ko'rishadi. U boshqa hisoblanadigan davrni bosganida:

  * Narx jadvali darhol tanlangan davr uchun narxlarni ko'rsatish uchun yangilanadi (sahifani qayta yuklash shart emas).
  * Agar Narx Jadvali maydonchasi ustidagi **Force Different Durations** (Turli Muddatlarni Majburiy O'zgartirish) o'chirilgan bo'lsa, tanlangan davr uchun narx o'zgarishi bo'lmagan mahsulotlar yashiriladi.
  * Agar **Force Different Durations** yoqilgan bo'lsa, tanlangan davr uchun o'zgartirish bo'lmasa ham barcha mahsulotlar ko'rinib turadi (ularning standart narxi ko'rsatiladi).

#### URL orqali Hisoblanadigan Davrni Oldindan Tanlash {#pre-selecting-a-billing-period-via-url}

Siz shuningdek, URL orqali mahsulot va hisoblanadigan davrni oldindan tanlashingiz mumkin. Ultimate Multisite quyidagi URL shablonlarini qo'llab-quvvatlaydi:

  * `/register/premium` — Faqat "Premium" mahsulotini oldindan tanlaydi
  * `/register/premium/12` — Mahsulot va 12 oylik muddatni oldindan tanlaydi
  * `/register/premium/1/year` — 1 yillik muddatli mahsulotni oldindan tanlaydi

### Shabloni Tanlash Maydonchasi (The Template Selection Field) {#the-template-selection-field}

**Template Selection** maydonchasi mijozlarga checkout paytida sayt shablonini tanlash imkonini beradi. Bu endi Ultimate Multisite v2.6.1 da qo'shilgan **single step** va **multi-step** checkout form shablonlarida avtomatik ravishda mavjud bo'ladi.

#### Maydonchani qo'lda qo'shish {#adding-the-field-manually}

Agar siz v2.6.1 dan oldin yaratilgan form bilan ishlayotgan bo'lsangiz yoki bo'sh shablonlardan boshlagan bo'lsangiz:

1. **Ultimate Multisite > Checkout Forms** ga o'ting va checkout formingizni tahrirlang.
2. Sayt ma'lumotlari yig'iladigan bosqichda, **Add new Field** (Yangi maydon qo'shish) tugmasini bosing.
3. Maydon turi dialogidan **Template Selection** (Shablon tanlash) ni tanlang.
4. Maydonni sozlang:
   - **Label** — Mijozlarning shablonlar griddasi ustida ko'raydigan sarlavhasi (masalan, "Sayt shablonini tanlang").
   - **Required** (Majburiy) — Mijozlar keyingi qadamga o'tishdan oldin shablonni tanlashlari kerakmi.

#### Qanday ishlaydi {#how-it-works}

Mijoz checkout paytida shablonni tanlaganda, Ultimate Multisite uni yangi saytini sozlashda ishlatadi. Ko'rsatilgan shablonlar sizning **Site Templates** ro'yxatingizdan (**Ultimate Multisite > Site Templates**) olinadi. Faqat mijozlarga mavjud deb belgilangan shablonlar shu yerda paydo bo'ladi.

### Checkout-form asosiy domenlari (base domains) {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 checkout formidagi **Site URL** maydonida sozlanglangan domenlarni tarmoq asosiy domenlari (network base domains) sifatida ko'rib chiqadi. Agar siz mijozlarning bir yoki bir nechta umumiy ro'yxat domenlari, masalan `example.com` va `sites.example.com` ostida saytlar yaratishini xohlasangiz, maydonning mavjud domen sozlamalaridan foydalaning.

Umumiy checkout-form asosiy domenlari bu saytlarga tegishli bo'lgan maxsus domen moslamalari (per-site custom domain mappings) sifatida ko'rilmaydi. Mijoz ushbu asoslardan birida subdirektoriy sayt yaratganida, Ultimate Multisite o'sha umumiy hostning faqat bitta saytga tegishli bo'lishini ta'minlovchi moslangan domen yozuvini yaratmaydi. Umumiy host shu turdagi asoslarni ishlatadigan aka-saytlarga mavjud bo'lib qoladi.

`customer-example.com` kabi har bir mijoz uchun maxsus hostlar uchun maxsus domenlarni saqlab qo'ying. Ko'p saytlar foydalanishi mumkin bo'lgan umumiy ro'yxat hostlari uchun checkout-form asosiy domenlarini saqlab qo'ying.

#### Maydonni olib tashlash {#removing-the-field}

Agar siz sayt shablonlarini taklif qilmasangiz, rasmlar (form) ichidagi "Template Selection" maydonini olib tashlang. Kundaldagi foydalanuvchilar bu holda **Ultimate Multisite > Settings > Site Templates** ostida sozlanadigan har qanday standart shablonni olishadi.
