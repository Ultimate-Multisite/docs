---
title: چیک آؤٽ فارمز
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# چیک آؤٹ فارمز (Checkout Forms) {#checkout-forms}

چیک آؤٹ فارمز نئين گاہڪن کي تبديل ڪرڻ جي ڪوشش ۾ مختلف طريقن جو تجربو ڪرڻ لاءِ هڪ آسان ۽ لچڪدار طريقو آهي.

Ultimate Multisite 2.0 ۾ هڪ چیک آؤٹ فارم اڊيتر (Checkout Form editor) موجود آهي جيڪو توهان کي جترو به فارمز، مختلف فیلڊز، آهن ملڻ و سهولتا، وغيره، banaڻ جي اجازت ڏئي ٿو.

ان ڪارڪردگي جو رسائي ڪرڻ لاءِ، سيده-بار (left side-bar) تي چیک آؤٹ فارمز مينيٽي (Checkout Forms menu) تي وڃو.

![Checkout Forms list](/img/config/checkout-forms-list.png)

اها صفحو توهان کي توهان جا تمام چیک آؤٹ فارمز ڏسڻ جو موقعي ڏئي ٿو.

ڪارڊ جدول ۾ هڪ **Status** کالم آهي جنهن سان توهان تصديق ڪري سگهو ٿا ته هر فارم موجوده گاہڪن لاءِ موجوده وقت ۾ موجود آهي يا نه:

| Status | مطلب |
|---|---|
| **Active** | هي فارم ڪٿي به استعمال ٿي سگهي ٿو جتي ان جو shortcode يا registration page پبلش هجي. |
| **Inactive** | هي فارم محفوظ تو آهي پر بطل (disabled) آهي. توهان ان کي ٻيهر فعال ڪرڻ تائين گاہڪن لاءِ چیک آؤٹ مکمل نه ڪري سگهون ٿا. |

خاص ڪري، جڏهن توهان پنهنجي لائیو فارمز سان گڏ ڈرافٽ يا سيزيوني چیک آؤٹ فارمز رکڻ چاهيو ته اسان کي ان status کالم جو استعمال ڪرڻ گهرجي، خاص طور تي ڪارڊ جي رجيشن فلو (registration flow) کي هوڙڻ کان اڳ.

 جيڪڏهن توهان هڪ نئين فارم کي banaڻ چاهيو ٿا، ته سيده صفحو جي اوپري طرف "Add Checkout Form" تي ڇڪڻ سان ڪامياب ٿيندو.

توهان ان ٽي خيارن مان هڪ کي پنهنجي شروعات طور چونڊي سگهو ٿا: single step (هڪ قدم وارو)، multi-step (ٻه قدم وارو)، يا blank (خالي). پوءِ، Editor جو رستو وڃڻ لاءِ ڪلڪ ڪريو.

جڏهن توهان **single step** يا **multi-step** کي پنهنجي شروعات طور چونڊين ٿا، ته فارم ٽيمپليٽ ۾ بالواسطه هڪ **Template Selection** فیلڊ شامل هوندو آهي. هي فیلڊ توهان جي گاہڪن کي رجيشن عمل دوران سائيٽ ٽيمپليٽ چونڊڻ جو موقعو ڏئي ٿو. توهان ان کي موجوده رکي سگهو ٿا، مڪمل ڪري سگهو ٿا، يا اڊيتر ۾ ڪنهن به ٻي فیلڊ جي طرح هوڙي وڃي سگهو ٿا.

![Checkout Form editor](/img/config/checkout-form-editor.png)

ٻي طريق سان، توهان ونيان موجود فرمز کي ڊيٽ (edit) يا ڪاپي (duplicate) ڪري سگهو ٿا جيڪي توهان وٽ پرياني طور تي آهن، ان جي نالو (name) تي کلڪ ڪري ٻڌايو. تائين توهان کي فورم جو shortcode ڪاپي ڪرڻ يا فورم کي مڪمل ڪرڻ جا خيار به ملندا.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor جي آڊر (Overview) {#checkout-form-editor-overview}

Checkout form editor توهان جي ريجيسٽري فارمز ٺاهڻ لاءِ هڪ جامع انٽرفيس فراهم ڪري ٿو. هيءَ اڳي واري آڊر آهي:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Form کي ڊيٽ ڪرڻ (Editing a Checkout Form) {#editing-a-checkout-form}

توهان مختلف مقصدن لاءِ checkout forms ٺاه سگهو ٿا. هن مثال ۾، اسين هڪ ريجيسٽري فارم تي ڪم ڪنداسون آهيون.

Checkout form editor تي وڃڻ کان پوءِ، پنهنجي فورم کي هڪ نالو ڏيو (جنهن جو استعمال صرف اندروني مرڪزي referens لاءِ ٿيندو) ۽ هڪ slug (jinhon جو استعمال shortcakes ٺاهڻ لاءِ ٿيندو).

![Checkout Form editor](/img/config/checkout-form-editor.png)

فورمز قدمن (steps) ۽ فیلڊز (fields) مان ٺهيل هوندا آهن. توهان "Add New Checkout Step" تي کلڪ ڪري هڪ نون قدم شامل ڪري سگهو ٿا.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

موڊل ويندو جي پهرين ٽاب تي، پنهنجي فورم جو قدم مليان کي پورو ڪريو. ان کي هڪ ID، نالو ۽ بيان (description) ڏيو. اهي تمام گهڻو اندروني استعمال ٿين ٿا.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

پنهنجي قدم جي نظر (visibility) مقرر ڪريو. توهان "Always show"، "Only show for logged in users" يا "Only show for guests" ان ۾ مڪمل ڪري سگهو ٿا.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

آخر ۾، قدم جي انداز (style) کي ترتیب ڏيو. اهي اختيار ڪرڻ جا فیلڊز آهن.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

هڪ قدم جو نون فیلڊ شامل ڪرڻ جو وقت اچي ويو آهي. بس "Add New Field" تي کلڪ ڪريو ۽ جيڪا قسم جي سيكشن (section) توهان چاهيو، ان کي چونڊيو.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

هر فیلڈ جي مختلف parameters هوندا آهن جن کي پورو ڪرڻو آهي. ان شروع ۾، اسين "Username" فیلڊ چوندا آهيون.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

توهان جترو به steps ۽ fields شامل ڪري سگهو ٿا جن جي توهان کي ضرورت آهي. پنهنجي customers لاءِ پنهنجا products ڏيکاري سگهڻ لاءِ، Pricing Table فیلڊ استعمال ڪريو. جيڪڏهن تنهنجي clients کي template چوندا ڏيڻ چاهيو، ته Template Selection فیلڊ شامل ڪريو. ۽ ان طرح وڌيڪ.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**نوٽ:** checkout form کڻڻ لاءِ username، email، password، site title، site URL، order summary، payment، ۽ submit button ضروري فیلڊ آهن._

جڏهن توهان پنهنجي checkout form تي ڪم ڪري رهيا هلي، توهان هميشه Preview button استعمال ڪري سگهو ٿا ته توهان جا clients form کي ڪيئن ڏسندا. توهان existing user جي طور تي يا visitor جي طور تي ڏسڻ ۾ تبديل ٿي سگهو ٿا.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

آخر ۾، Advanced Options ۾ توهان "Thank You" page لاءِ message configure ڪري سگهو ٿا، conversions track ڪرڻ لاءِ snippets شامل ڪري سگهو ٿا، پنهنجي checkout form لاءِ custom CSS شامل ڪري سگهو ٿا يا ان کي ڪجهه خاص countries تائين محدود ڪري سگهو ٿا.

![Advanced Options](/img/config/checkout-form-advanced.png)

توهان هيٺ ڏنل option کي toggling ڪري پنهنجي checkout form کي manual طور تي enable يا disable ڪري سگهو ٿا، يا ان کي permanent طور تي delete ڪري سگهو ٿا.

![Active toggle](/img/config/checkout-form-active.png)

فارم کي مڪمل ڪرڻ لاءِ، فارم ايڪشنز ۾ 'delete' جو آپشن ڇا ڪيو:

![Checkout form delete option](/img/config/checkout-form-delete.png)

پنهنجي چڪ آڻي واري فارم کي محفوظ ڪرڻڀڃي نه ٿيو!

![Save button](/img/config/checkout-form-save.png)

پنهنجي فارم جو shortcode حاصل ڪرڻ لاءِ، 'Generate Shortcode' تي ڪلڪ ڪريو ۽ modal window تي ڏنل نتيجي کي ڪاپي ڪريو.

![Save button with shortcode](/img/config/checkout-form-save.png)

### پرائسنگ ٽيبل فیلڊ (The Pricing Table Field) {#the-pricing-table-field}

**Pricing Table** فیلڊ توهان جي پروڊڪٽس کي چڪ آڻي واري فارم تي ڏيکاري ٿو ته جيئن ڪاروباراء هڪ پلان چونڊي سگهن. جڏهن توهان ان فیلڊ ۾ تبديلي ڪندا آهيو، ته توهان ڪجهه خيارين کي ترتیب ڏئي سگهو ٿا:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

هي آهي ته پرائسنگ ٽيبل فرونت اينڊ ريجيسٽريشن فارم تي ڪيئن نظر اچي ٿو:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: چنو ته ڪهڙا پروڊڪٽس ڏيکاري سگهو ۽ انهن جو ترقي ڪيئن ٿيندو.
  * **Force Different Durations**: جڏهن هي فعال هجي، ته هميشه سڀني پروڊڪٽس کي ڏيکاري سگهجي ٿو، جنهن جي باوجود ته ان وقت چونڊيل بلنگ پيري لاءِ ان جو مطابق قيمت تبديلي موجود نه هجي. جڏهن هي بند هجي (default)، ته ان وقت لاءِ ڪا تبديلي نه هجڻ وارن پروڊڪٽس کي ڇُپي ڏنو ويندو.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: جڏهن URL جي ذريعي پلان پہلے ئي چونڊيو وڃي (مثال: `/register/premium`) ته پرائسنگ ٽيبل کي ڇُپي ڏنو ويندو.
  * **Pricing Table Template**: پرائسنگ ٽيبل لاءِ بصري قالب چنو (Simple List, Legacy، etc.).

جيڪڏهن توهان فارم ۾ ان پروڊڪٽ جو چڪ آڻي واري عمل مکمل ڪرڻ لاءِ ضروري فیلڊ شامل ڪرڻ کان اڳ پرائسنگ ٽيبل ۾ ڪا پروڊڪٽ شامل ڪريو، ته редаڪٽر (editor) هاڻي خبرداري ڏئي ٿو. لائیو ريجيسٽريشن فارم لاءِ پنهنجي مڪمل نه ٿيل ضروري فیلڊ شامل ڪرڻ لاءِ ان خبرداري جو استعمال ڪريو هيٺ ڇا ڪيو وڃي ته توهان تبديلي کي پبلش يا محفوظ ڪرڻ کان اڳ.

### Period Selection Toggle شامل ڪرڻ {#adding-a-period-selection-toggle}

جيڪڏهن توهان پنهنجي پروڊڪٽس تي [Price Variations](creating-your-first-subscription-product#price-variations) جو ڪيئن هيٺ ڏنل آهي (جنهن ۾ مثال طور ماهرين ۽ سالي وارو قيمت مقرر ڪئي وڃي)، ته توهان پنهنجي چيوڪ آؤٽ فارم ۾ هڪ **Period Selection** فیلڊ شامل ڪري سگهو ٿا. هن فیلڊ هڪ toggles ڏيکاري ٿي جنهن سان گراهڪون بليننگ جي دورن (billing periods) جو بڻجي وڃن، ۽ قيمت جي جدول ريل-ٽائم ۾ خود بخود اپڊيٽ ٿيندي آهي.

#### قدم 1: پنهنجي پروڊڪٽس تي Price Variations مقرر ڪريو {#step-1-set-up-price-variations-on-your-products}

Period Selection فیلڊ شامل ڪرڻ کان اڳ، اسان کي يقيني بڻائڻ گهرجي ته توهان جي پروڊڪٽس ۾ price variations مقرر ڪيون آهن. **Ultimate Multisite > Products** تي وڃو، هڪ پروڊڪٽ جو ايڊٽ ڪريو، ۽ **Price Variations** ٽاب تي وڃو ته جيئن توهان alternatve بليننگ دور (جنهن ۾ مثال طور سالي وارو گهرجي ٿو) شامل ڪري سگهو.

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### قدم 2: Period Selection فیلڊ کي پنهنجي Checkout Form ۾ شامل ڪريو {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms** تي وڃو ۽ پنهنجي چيوڪ فارم جو ايڊٽ ڪريو.

2. ان قدم تائين سکرول ڪريو جتي توهان جي **Pricing Table** فیلڊ آهي ۽ **Add new Field** ٺڳڻ (click) ڪريو.

3. فیلڊ جا قسم چونڊڻ واري خلوي ۾، **Period Select** تي ڪلڪ ڪريو.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. دور جون ترتي بيان ڪريو (Configure the period options). هر هڪ خيار کي ان جي ضرورت آهي:
   * **Duration**: تعداد (مثال طور `1`)
   * **Duration unit**: دور جو قسم (Days، Weeks، Months، يا Years)
   * **Label**: اهو متن جيڪو گراهڪون ڏسندا رهندا (مثال طور "Monthly"، "Annual")

5. وڌيڪ دور چونڊڻ لاءِ **+ Add Option** تي ڪلڪ ڪريو. انهن خياري کي توهان جي پروڊڪٽس تي مقرر ڪيل price variations سان مطابقت رکڻ گهرجي.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. هڪ **Period Selector Template** چونڊيو (Clean جو default آهي، جيڪو سادو انداز وارو selector ڏئي ٿو جنهن لاءِ custom CSS تيار هوندو).

7. **Save Field** تيک ڪريو (Click Save Field).

#### قدم 3: فیلڈ کي پرائسنگ تيبل کان اوچتو رکجو (Position the Field Above the Pricing Table) {#step-3-position-the-field-above-the-pricing-table}

سب تعارف ڪندڙن لاءِ بهتر تجربو لاءِ، يقينا ڪريو ته Period Selection فیلڊ توهان جي چڪ آؤٽ اسٽيپ ۾ Pricing Table فیلڊ کان **پہلے** ظاهر ٿئي. توهان چڪ آؤٽ فارم ايڊيٽر ۾ فیلڊ کي هلائي سگهو ٿا ته جيئن ان جو ترتيب بدلجي. هي به طريقو آهي ته ڪسٹمر پنهنجي بلنگ پيري (billing period) چونڊن کان پوءِ ان پيري لاءِ قيمت ڏسڻ شروع ڪندا.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### فرونت اينڊ تي هي ڪيئن کام ڪري ٿو (How It Works on the Frontend) {#how-it-works-on-the-frontend}

جڏهن توهان ان کي کانفيغير ڪري ڇڏيو ٿا، تيه ڪسٹمر جيڪي توهان جي ريجيسٽري پيچ ۾ اچن ٿا، انهن کي پرائسنگ تيبل کان اوپر پيري سلبيڪل ڏسڻ گهرجي. جڏهن اهي ڪنهن ٻئي بلنگ پيري تي ڪلڪ ڪندا آهن:

  * پرائسنگ تيبل فوري طور تي ان چونڊيل پيري لاءِ قيمت ڏيکاري ٿي (پيچ ريلوڊ ڪرڻ جي ضرورت نه آهي).
  * جيڪڏهن Pricing Table فیلڊ تي **Force Different Durations** بند آهي، ته اهڙا پراڊڪٽ جن جو چونڊيل پيري لاءِ ڪنهن قيمت ۾ تبديلي نه آهي، اهي چھپجي ويندا آهن.
  * جيڪڏهن **Force Different Durations** فعال آهي، ته سڀني پراڊڪٽ ڏسڻ ۾ رهندا آهن جيتوڻي انهن جي چونڊيل پيري لاءِ ڪا تبديلي نه هجي (اهي پنهنجي डिफلت قيمت ڏيندا).

#### URL جي ذريعي بلنگ پيري جو پيچ سلبيڪل ڪرڻ (Pre-selecting a Billing Period via URL) {#pre-selecting-a-billing-period-via-url}

توهان URL جي ذريعي هڪ پراڊڪٽ ۽ بلنگ پيري کي پيچ ڪري سگهو ٿا. Ultimate Multisite ان URL patterns کي سپورٽ ڪري ٿو:

  * `/register/premium` — صرف "Premium" پراڊڪٽ کي پيچ ڪري ٿو
  * `/register/premium/12` — پراڊڪٽ ۽ 12-ماهي دور کي پيچ ڪري ٿو
  * `/register/premium/1/year` — 1-سال جي دور سان پراڊڪٽ کي پيچ ڪري ٿو

### ٽيمپليٽ سلبيڪل فیلڊ (The Template Selection Field) {#the-template-selection-field}

**Template Selection** فیلڊ ڪسٹمرن کي چڪ آؤٽ دوران سائيٽ ٽيمپليٽ چونڊڻ جو موقعو ڏئي ٿو. هي هاڻي Ultimate Multisite v2.6.1 ۾ شامل آهي **single step** ۽ **multi-step** چڪ آؤٽ فارم ٽيمپليٽن ۾.

#### فیلڊ کي ماني طور تي شامل ڪرڻ (Adding the field manually) {#adding-the-field-manually}

اگر آپ کسی ایسے فارم کے ساتھ کام کر رہے ہیں جو v2.6.1 سے پہلے بنایا گیا تھا، یا بالکل خالی ٹیمپلیٹ سے شروع ہوا تھا:

۱۔ **Ultimate Multisite > Checkout Forms** پر جائیں اور اپنے چیک آؤٹ فارم کو ایڈٹ کریں۔
۲۔ اس سٹیپ میں جہاں سائٹ کی تفصیلات جمع کی جاتی ہیں، وہاں **Add new Field** پر کلک کریں۔
۳۔ فیلڈ ٹائپ ڈائیلاگ سے **Template Selection** منتخب کریں۔
۴۔ فیلڈ کو کنفیگر کریں:
   - **Label** — وہ عنوان جو کسٹمرز ٹیمپلیٹ گرڈ کے اوپر دیکھتے ہیں (مثلاً "ایک سائٹ ٹیمپلیٹ چنیں")۔
   - **Required** — یہ بتائیں کہ کیا کسٹمرز آگے بڑھنے سے پہلے کوئی ٹیمپلیٹ منتخب کرنا لازمی ہیں۔

#### یہ کیسے کام کرتا ہے {#how-it-works}

جب کوئی کسٹمر چیک آؤٹ کے دوران کوئی ٹیمپلیٹ منتخب کرتا ہے، تو Ultimate Multisite اسے ان کی نئی سائٹ بنانے کے وقت استعمال کرتا ہے۔ یہاں دکھائے گئے ٹیمپلیٹس آپ کی **Site Templates** لسٹ (**Ultimate Multisite > Site Templates**) سے آتے ہیں۔ صرف وہ ٹیمپلیٹس جو کسٹمرز کے لیے دستیاب (available) کے طور پر نشان زد ہوں، یہ یہاں ظاہر ہوتے ہیں۔

### چیک آؤٹ فارم بیس ڈومینز {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 چیک آؤٹ فارم میں **Site URL** فیلڈ پر ترتیب دی گئی ڈومینز کو نیٹ ورک بیس ڈومینز (network base domains) کے طور پر لیتا ہے۔ جب آپ چاہتے ہیں کہ کسٹمر ایک یا ایک سے زیادہ مشترکہ رجسٹریشن ڈومینز، جیسے `example.com` اور `sites.example.com` کے تحت سائٹس بنائیں تو فیلڈ کی دستیاب-ڈومین سیٹنگز کا استعمال کریں۔

مشترکہ چیک آؤٹ فارم بیس ڈومینز کو ہر سائٹ کے لیے مخصوص ڈومین مپنگ (per-site custom domain mappings) کے طور پر نہیں سمجھا جاتا۔ جب کوئی کسٹمر ان میں سے کسی بیس پر ایک سب ڈائریکٹری سائٹ بناتا ہے، تو Ultimate Multisite ایسا مپ شدہ ڈومین ریکارڈ نہیں بناتا جو مشترکہ ہوسٹ کو صرف اسی ایک سائٹ تک محدود کر دے۔ مشترکہ ہوسٹ ان بہن بھائی سائٹس کے لیے دستیاب رہتا ہے جو اسی چیک آؤٹ فارم بیس کا استعمال کرتے ہیں۔

کسٹمر کے مخصوص ہوسٹس، جیسے `customer-example.com` کے لیے کسٹم ڈومینز کو محفوظ رکھیں۔ مشترکہ رجسٹریشن ہوسٹس کے لیے چیک آؤٹ فارم بیس ڈومینز کو برقرار رکھیں جنہیں بہت سی سائٹس استعمال کر سکتی ہیں۔

#### فیلڈ ہٹانا {#removing-the-field}

جيڪڏهن توهان سائيٽ ٽيمپليٽس (site templates) نه ڏين ٿا، ته توهان کي فرم ۾ ٽيمپليٽ سيلڪشن (Template Selection) فیلڊ ختم ڪري ڇڏي ڏيو. ان صورت ۾ ڪارئيري کي جيڪو هميشه **Ultimate Multisite > Settings > Site Templates** ۾ ڪنهن هميشه ڊي فولٽ ٽيمپليٽ تي ڪيفي ٿو، اهو ملندو رهندو.
