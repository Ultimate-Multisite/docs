---
title: فۆرمەکانی دابەزراوێنان
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Forms ba Checkout (Formulary ba Checkout)

Forms ba Checkout r amwaya siroze û fleksibel ye ku tu bi ferspasiyonên cuda wêne bixwazin de ku hewce ye ji bo guhertina nû bêjmara neyê.

Ultimate Multisite 2.0 eke editor Formba Checkout (Checkout Form editor) dike ku ya hûn dikarin formên cuda bikaran bixwazin, bi ferspasiyon, prodiktên ku pêşve xistin, û hwd.

Ji bo mergiman alîkarî li vêû featurê, ji menaya Checkout Forms (Forms ba Checkout) dike, li langanê çend.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Li vê peyabê, hûn dikarin hemû formên checkout ku hene bi destê bibînin.

Tabela ye ji bo lêvên (Status) tê, ji ber ku hûn dikarin paşnaxbêjin ku her form li vê demê ji bo mullan neyên hewceye:

| Status | Manaye wê |
|---|---|
| **Active** | Forme bi kar wer dibe ku shortcode yê wisa an jî peyabeya register (registration page) ye bişoribe. |
| **Inactive** | Forme hatine sakirin lê nekarate. Mullan nekarin checkout bi wê bi destê bînin tu ji ber vê yekê hûn dibin ji nû ve dike. |

Ji bo parastina mergiman, ji bo guhertina peyabeya register (registration flow) ku jêrîn e, li ser koloma status ji ber hewceye, bi taybetî dema ku hûn formên checkoutan draft an jî sezonî bi formên xwe yên jiyana xwe bi destê dzin bin.

Heke hûn dixwazin yek nû bikinin, tenê ji bo "Add Checkout Form" li ser peyabê dikarin bikirin.

Hûn dikarin yek ji van sê seçin wek başxistina xwe: single step (pêşveyekî), multi-step (fleksibil), an jî blank (bê form). Pêş ê, bi klikirîn biajin "Go to the Editor" (Bi rêwî Editorê ketin).

Dema ku hûn yek ji van sê wek başxistina xwe yê destpêkê bîyînin, template-a formê niha dikeveyekî ya **Template Selection** (Seçîna Template) bi default. Ev featur li dê mullan dikare template-a site bi prosesa register bipêjin. Hûn dikarin wê wek bin, hatine hatin dzin, an jî wek binên berî wek din ji wek dinan formên editorê de.

![Checkout Form editor](/img/config/checkout-form-editor.png)

شможно، دەتوانی فۆرمەکانت کە لە ئێستات هەن بگۆڕیت یان دووبارە بکەیت بە ڕێگەی پشکی ئەو کارەکانەوە کە لە خوارەوە لەسەر ناونیشانەکەی هەڵدەگریت. لێرەدا دەتوانیت هەڵبژاردن بۆ کپیکردن شورتکۆدی فۆرمەکە یان دیاریکردنی فۆرمەکە بکەیت.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### گۆڕینی ویرتۆر فۆرم (Checkout Form Editor Overview) {#checkout-form-editor-overview}

ویرتۆر فۆرمەکە ڕێگەیێکی پڕکەرەوە پێشکەش دەکات بۆ دروستکردنی فۆرمە تۆمارکردنەکانت. لێرەدا پوختەیەکی کورت لەسەر ڕێکخستنی ویرتۆرەکە دەبینیت:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### گۆڕینی فۆرمێکی Checkout {#editing-a-checkout-form}

دەتوانیت بۆ بارودۆخی جیاواز فۆرمەکانی checkout دروست بکەیت. لەم نموونەدا، ئێمە کار دەکەین لەسەر فۆرمێکی تۆمارکردن (registration form).

پاش ئەوەی بگاتە ویرتۆر فۆرم، پێشنیار دەدات بە فۆرمەکەت ناونیشانێک بدات (کە تەنها بۆ ئاماژەی ناوخۆیییە) و یەک ڕێگای کورت (slug) بدات (کە بۆ دروستکردنی شورتکۆدەکان بەکاردێت، بۆ نموونە).

![Checkout Form editor](/img/config/checkout-form-editor.png)

فۆرمەکان لە چەند هەنگاو و فیلدێک پێکهاتوون. دەتوانیت هەنگاوی نوێ بگەڕێیتەوە بە ڕەتکردنەوەی Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

لە تابلۆی یەکەم (first tab)ی پەنجەرەی modalەکەدا، ناوەڕۆکی هەنگاو فۆرمەکەت پڕ بکە. پێدات ID، ناونیشان و وەسفی ئەو بەشە بدات. ئەم بابەتانە زۆرتر بۆ کارکردن لە ناو سیستەمەکەدا دەکرێن.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

پاشان، بینینی هەنگاوەکە دیاری بکە. دەتوانیت لە نێوان "هەمیشە نیشان بدات" (Always show)، "فقط بۆ بەکارهێنەرانی تۆمارکراو نیشان بدات" (Only show for logged in users) یان "فقط بۆ گەشتیاران نیشان بدات" (Only show for guests) هەڵبژێریت.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

لە کۆتاییدا، جۆری هەنگاوەکە دیاری بکە. ئەمە فیلدەکانی زیاتر پشکنینی (optional)ن.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

ئێستا کاتێکە دەتوانیت فیلدێک بۆ هەنگاوی یەکەم زیاد بکەیت. تەنها بۆ Add New Field کلیک بکە و جۆری ئەو بەشەی کە دەتەوێت هەڵبژێریت.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Chakk bi serke, leka her fel aparamerên جیاوازن هەن بۆ پڕکردنەوە. بۆ ئەم دەستە پێکردنییە، ئێمە فیلدی "Username" (ناوی بەکارهێنەر) هەڵدەبێنین.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

دەتوانیت هەر چەند هەنگاو و فیلدێک زیاد بکەیت کە پێویستت دەبێت. بۆ نیشاندنی بەرهەمەکانت بۆ کڕیارەکان بۆ ئەوەی یەکێکیان هەڵبژێرن، فیلدی Pricing Table (خاڵەکانیราق) بەکاربهێنە. ئەگەر دەتەوێت کلاینتەکانت شێوازێک هەڵبژێرن، فیلدی Template Selection (هەڵبژاردنی شێواز) زیاد بکە. و هتد.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**تێبینی:** username، email، password، site title، site URL، order summary، payment، و submit button (دۆکیومێنتکردن) فیلدەکانی پێویستن بۆ دروستکردنی فۆرمێکی checkout._

لە کاتی کارکردندا لەسەر فۆرمی checkout خۆت، دەتوانیت هەموو کات بە دڵنیاییی Preview button (پێشینەوەی فۆرمەکە) بەکاربهێنیت بۆ ئەوەی ببینیت کە کڕیارەکان فۆرمەکە چۆن دەبینن. دەتوانیت لە نێوان بینینی وەک بەکارهێنەرە هێزدار یان سەردەریتی (visitor) بگۆڕیت.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

لە کۆتاییدا، لە Advanced Options (کاردانە پێشکەوتوو) دەتوانیت پەیامێک بۆ لاپەڕەی "Thank You" (خۆشحاڵی بوویت) دیاری بکەیت، Snippets (تێکستەکان) بۆ بەدوکەنی گۆڕانکارییەکان زیاد بکەیت، CSS تایبەت بۆ فۆرمی checkout زیاتر بکەیت یان لە نێوان ئەو وڵاتانەی کە دەتەوێت ڕابگرین، سنووردار بکەیت.

![Advanced Options](/img/config/checkout-form-advanced.png)

دەتوانیت هەروەها فۆرمی checkout خۆت بە دەست یان بە ئۆفۆن (toggle) لە کۆڵۆنی ڕاستدا چالاک بکەیت یان بە شێوەیەکی داهاتوو بەهێز بکەیت، یان فۆرمەکە بە تەواوی دیار بکەیت.

![Active toggle](/img/config/checkout-form-active.png)

برای حذف یک فرم، گزینه حذف را در اقدامات فرم (form actions) کلیک کنید:

![Checkout form delete option](/img/config/checkout-form-delete.png)

فراموش نکنید که فرم پرداخت خود را ذخیره کنید!

![Save button](/img/config/checkout-form-save.png)

برای دریافت شورت‌کد فرم خود، روی "Generate Shortcode" کلیک کرده و نتیجه‌ای که در پنجره مودال (modal window) نمایش داده می‌شود را کپی کنید.

![Save button with shortcode](/img/config/checkout-form-save.png)

### فیلد جدول قیمت‌گذاری (The Pricing Table Field) {#the-pricing-table-field}

فیلد **Pricing Table** محصولات شما را در فرم پرداخت نمایش می‌دهد تا مشتریان بتوانند یک طرح (plan) را انتخاب کنند. وقتی این فیلد را ویرایش می‌کنید، می‌توانید چندین گزینه را تنظیم کنید:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

نحوه نمایش جدول قیمت‌گذاری در فرم ثبت نام فرانت‌اند به شرح زیر است:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (محصولات)**: انتخاب کنید که کدام محصولات را نمایش دهید و ترتیب ظاهر شدن آن‌ها چگونه باشد.
  * **Force Different Durations (اجبار به دوره‌های متفاوت)**: وقتی این گزینه فعال است، همه محصولات صرف نظر از اینکه آیا برای دوره صورت‌حساب فعلی یک تغییر قیمت متناظر دارند یا خیر، نمایش داده می‌شوند. وقتی غیرفعال باشد (پیش‌فرض)، محصولاتی که برای دوره انتخاب شده تغییری در قیمت ندارند پنهان می‌شوند.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (پنهان کردن هنگام انتخاب از پیش)**: جدول قیمت‌گذاری زمانی که یک طرح از طریق آدرس URL انتخاب شده باشد (مثلاً `/register/premium`) پنهان می‌شود.
  * **Pricing Table Template (قالب جدول قیمت‌گذاری)**: قالب بصری مورد نظر برای جدول قیمت‌گذاری را انتخاب کنید (مانند Simple List، Legacy و غیره).

اگر قبل از اینکه فرم شامل فیلدهای لازم برای تکمیل جریان پرداخت آن محصول باشد، یک محصول به جدول قیمت‌گذاری اضافه کنید، ویرایشگر اکنون یک هشدار نمایش می‌دهد. از این هشدار استفاده کنید تا قبل از انتشار یا ذخیره تغییرات برای یک فرم ثبت نام زنده، فیلد مورد نیاز را اضافه کنید.

### زیادکردنی دکمه‌ی انتخاب دوره زمانی {#adding-a-period-selection-toggle}

ئەگەر ئێستا [Price Variations](creating-your-first-subscription-product#price-variations) بۆ بەرهەمەکانت ڕێکخستو بێت (بۆ نموونە، نرخەکانی مانگانە و ساڵان)، دەتوانیت یەک فیلدی **Period Selection** (انتخابکردنی ماوەی کارکردن) بۆ فۆرمەکەدا زیاد بکەیت. ئەم فیلدەیەک دکمه‌یێک نیشان دەدات کە ڕێگە بە کڕیارەکان دەدات لە نێوان ئەو ماوەی کارکردنە جیاوازەکان بگۆڕن، و خشتەی نرخەکە بە شێوەیەکی گۆڕان لە کاتی ڕاستەوخۆ به‌ژێر دەبێت.

#### هەنگاوی یەکەم: ڕێکخستنی Price Variations لەسەر بەرهەمەکانت {#step-1-set-up-price-variations-on-your-products}

پێش ئەوەی فیلدی Period Selection زیاد بکەیت، دڵنیا بەوەی کە بەرهەمەکانت نرخەکانی جیاواز (price variations) ڕێکخستو نەکراون. بگواشبە **Ultimate Multisite > Products**، یەک بەرهەم دەستکاری بکە، و بچۆ بۆ تابلۆی **Price Variations** بۆ زیادکردنی ماوەی کارکردنی جیاواز (بۆ نموونە: ساڵان بە نرخێکی کەمتر).

![تابلۆی Price Variations لەسەر بەرهەمێک](/img/config/product-price-variations-tab.png)

#### هەنگاوی دووەم: زیادکردنی فیلدی Period Selection بۆ فۆرمەکەدا {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. بگواشبە **Ultimate Multisite > Checkout Forms** و فۆرمەکەت دەستکاری بکە.

2. خشتەی خشتەکە لایەوە سکرول بکە تا ئەو هەنگاوەی کە فیلدی **Pricing Table** (خشتەی نرخ) لەخۆدەگرێت، و **Add new Field** (زیادکردنی فیلد نوێ) دەستکاری بکە.

3. لە دایوان هەڵبژاردنی جۆری فیلددا، **Period Select** (انتخاب ماوەی کارکردن) دەستکاری بکە.

![دایوان Add New Field کە Period Select دەردەخات](/img/config/checkout-form-add-field-dialog.png)

4. ڕێکخستنی ئەو ماوەیانە بکە. هەر یەکێک لەو هەڵبژاردنە پێویستی ئەم شتانەیە:
   * **Duration** (ماوەی کارکردن): ژمارەکە (بۆ نموونە `1`)
   * **Duration unit** (وحدەتی ماوە): جۆری ماوە (ڕۆژ، هەفتە، مانگ یان ساڵ)
   * **Label** (ناونیشان): دەقێک کە کڕیارەکان دەبینن (بۆ نموونە: "مانگانە"، "ساڵان")

5. بۆ زیادکردنی هەڵبژاردنەکانی ماوە زیاتر، **+ Add Option** (زیادکردنی هەڵبژاردن) دابپرسی. ئەم هەڵبژاردنانە دەبێت لەگەڵ Price Variations کە تۆ ڕێکخستو نەکراون لەسەر بەرهەمەکانت یەک بێت.

![ڕێکخستنی فیلدی Period Selection](/img/config/period-selection-field-settings.png)

6. **Period Selector Template** (نموونەی هەڵبژاردنی ماوەی کارکردن) هەڵبژێرە (Clean بە شێوەیەکی پیش‌دۆزراوتە، کە دەتوانێت یەکگرتوویی سادەی ڕێکخستو پێشکەش بکات بۆ CSS تایبەت).

٧. دابەری **Save Field**.

#### هەنگاو ٣: فیلدەکە لەسەر خشتەیราقەکان دانانەوە {#step-3-position-the-field-above-the-pricing-table}

بۆ باشترین ئەزموونی بەکارهێنەر، دڵنیابConvertTo کە فیلدی Period Selection پێش Pricing Table فیلدەکە لە هەنگاوی تۆڕی پاشخستن (checkout step) دەربکەوێت. دەتوانیت فیلدەکان بکێشیت بۆ گۆڕینی ڕیزبەندییان لەم ویرایتی فۆرم編輯گردا (checkout form editor). بەم شێوەیە، کڕیارەکان پێش ئەوەی ماوەی بارکردن (billing period) هەڵبژێرن، تێبینی نرخەکانی ئەو ماوەیە دەبینن.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### چۆنیەتی کارکردندا لە پێشەوە (Frontend) {#how-it-works-on-the-frontend}

کاتێک ڕێکخستووە، کڕیارانی کە سەردانی لاپەڕەی تۆمارکردن دەکەن، دەبینن Selectorی ماوەیە لەسەر خشتەیราقەکان. کاتێک ئەوان فیلدی بارکردنی جیاوازی (billing period) دیاریکراون:

  * خشتەیราقەکان بە شێوەیەکی فەرمیی دەگۆڕێن بۆ نیشاندانی نرخەکانی ئەو ماوەیە کە هەڵبژێردراوە (پێویستی بە دابەزاندنی لاپەڕەکە نییە).
  * ئەگەر **Force Different Durations** لە فیلدی Pricing Table بオフ (disabled) بێت، ئەو بەرهەمانەی نرخێکی جیاوازی بۆ ماوەی هەڵبژێردراو نییە، پاشکەوتراون.
  * ئەگەر **Force Different Durations** چالاک بێت (enabled)، هەموو بەرهەمەکان دەبینرێن تەنانەت ئەگەر نرخێکی جیاوازی بۆ ماوەی هەڵبژێردراو نییە (نرخی سەرەکیان دەنیشێن).

#### پێش هەڵبژاردنی ماوەی بارکردن لە ڕێگەی URL {#pre-selecting-a-billing-period-via-url}

دەتوانیت بە شێوەیەکی پێشوەخت بەرهەم و ماوەی بارکردن لە ڕێگەی URL دیاریکراو هەڵبژێرین. Ultimate Multisite پشتگیری دەکات ئەم پترۆنە URL-انە:

  * `/register/premium` — تەنها بەرهەمی "Premium" پێشوەخت دەکات
  * `/register/premium/12` — بەرهەم و ماوەی ١٢ مانگی پێشوەخت دەکات
  * `/register/premium/1/year` — بەرهەم لەگەڵ ماوەی ١ ساڵ پێشوەخت دەکات

### فیلدی هەڵبژاردنی قالب (The Template Selection Field) {#the-template-selection-field}

فیلدی **Template Selection** دەدات کڕیارەکان لە کاتی پاشخستن، قالبێکی سایت هەڵبژێرن. ئەم فیلدە ئێستا بە شێوەیەکی پیش‌تەوا پێشکراو (default) لە فۆرمەکانی پاشخستنی یەک هەنگاو (single step) و چەند هەنگاو (multi-step) کە لە Ultimate Multisite v2.6.1 دا زیادکراون، گونجاوە.

#### بە شێوەیەکی دەستکرد زیادکردنی فیلدەکە {#adding-the-field-manually}

ئەگەر لەگەڵ فۆرمێک کار دەکەیت کە پێش v2.6.1 دروستکراوە، یان لە شێوازی پۆلێمبێکی پارێزراو (blank template) دەستپێکردووە:

١. بگواشبە **Ultimate Multisite > Checkout Forms** و فۆرمەکە دەستکاری بکە.
٢. لە هەنگاوێکدا کە وردەکاری سایتەکە کۆدەکرێتەوە، CLICK بکە بە **Add new Field**.
٣. لە دایالوگێکی جۆری فیلددا، **Template Selection** (راوەکی پۆلێمب) هەڵبژێرە.
٤. فیلەکان ڕێک بخەرەوە:
   - **Label** — سەرۆکەکەی کە کڕیارەکان لەسەر تۆڕەکە دەبینن لەسەر گۆڕێکی پۆلێمب (وەک "راوەکی پۆلێمب هەڵبژێرە").
   - **Required** — ئایا کڕیارەکان پێویستە پۆلێمبێک هەڵبژێرن پێش بەردەوامبوون؟

#### چۆنیەتی کارکردن {#how-it-works}

کاتێک کڕیاری پۆلێمبێک لە کاتی کۆتایی دابینکردندا (checkout) هەڵدەبژێرێت، Ultimate Multisite ئەو پۆلێمبەی دەستکاری دەکات بۆ دروستکردنی سایتێکی نوێی ئەوان. پۆلێمبەکانی نیشانکراوەکان لە لیستەکەتدا **Site Templates** (**Ultimate Multisite > Site Templates**) دەربارەی پێشکەوتوون. تەنها ئەو پۆلێمب یانە کە بۆ کڕیاران بە ئامادەیە (available) هاتوون لێرە دەبینن.

### ناوەکانی سەرەکی فۆرمەکە بۆ کۆتایی دابینکردن (Checkout-form base domains) {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 ناوەکانی دامەزراوەکانی تۆڕی کە لە فیلدەکانی **Site URL** ی فۆرمی کۆتایی دابینکراون وەک ناوەکانی سەرەکی تۆڕی دەبینێت. کاتێک دەتەوێت کڕیاران سایتێک بە ناوی تۆمارێکی هاوبەش دروست بکەن، وەک `example.com` و `sites.example.com`، لە ڕێگەی تنظیمەکانی فیلدەکە بۆ ناوەکانی دامەزراوەکانی هاوبەش بەکاربهێنە.

ناوەکانی سەرەکی فۆرمەکە کە هاوبەش دەبن، وەک مگەلەیەکی زیرەکی (subdirectory) سایتێک دروست بکەن لەسەر یەکێکیان، Ultimate Multisite تۆماری ناو دامەزراوەکانی نەخۆش (mapped-domain record) دروست ناکات کە ئەو هاستەی هاوبەشە تەنها بۆ ئەو سایتێک بێت. هاستەی هاوباش بەردەوام دەبێت بۆ سایتە خواوێنەرەکانی دیکە کە لە هەمان بنەمای فۆرمی کۆتایی دابینکراوە بەکارھێنن.

ناوەکانی تایبەت (custom domains) بۆ هاستکردنی پۆلێمبێک بۆ کڕیار، وەک `customer-example.com`، پارێزراو بکە. ناوەکانی سەرەکی فۆرمەکە بۆ هاستکردنی تۆمارە هاوباش کە چەندین سایت دەتوانن بەکاربهێنن، پارێزراو بکە.

#### هەڵگرتنی فیلدەکە (Removing the field) {#removing-the-field}

ئەگەر تۆ قالبەکانی سایت پێشکەش ناکەیت، فیلد "Template Selection" لە فۆرمەکەت دەربکە. بەم شێوەیە، کڕیارەکان ئەو قالبەی کە بەپێی دیاریکراوی **Ultimate Multisite > Settings > Site Templates** هەڵبژێردرێت، وەردەگرن.
