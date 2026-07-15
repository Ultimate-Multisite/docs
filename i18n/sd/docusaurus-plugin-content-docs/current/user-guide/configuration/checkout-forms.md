---
title: چیک آؤٽ فارمز
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# چیک آؤٹ فارمز (Checkout Forms)

چیک آؤٹ فارمز نئين گاہڪن کي تبديل ڪرڻ جي ڪوشش ۾ مختلف طريقن جو تجربو ڪرڻ لاءِ هڪ آسان ۽ لچڪدار طريقو آهي.

Ultimate Multisite 2.0 ۾ هڪ چیک آؤٹ فارم اڊيتر (Checkout Form editor) موجود آهي جيڪو توهان کي جترو به فارمز، مختلف فیلڊز، آهن، پيش ڪيل مصنوعات، يا ٻيا شين سان گهڻا فارمز کڻڻ جي اجازت ڏئي ٿو.

ان خصوصيت کي استعمال ڪرڻ لاءِ، سائيڊ-بار (left side-bar) تي چیک آؤٹ فارمز مينيٽي (Checkout Forms menu) تي وڃو.

![Checkout Forms list](/img/config/checkout-forms-list.png)

اها صفحو توهان جي تمام چیک آؤٹ فارمز ڏسڻ جو موقعو ڏئي ٿو.

ڪارڊ (list table) ۾ هڪ **Status** کالم آهي جنهن سان توهان تصديق ڪري سگهو ٿا ته هر فارم موجوده گاہڪن لاءِ حالي ڪهڙي صورت ۾ موجود آهي:

| Status | مطلب |
|---|---|
| **Active** | هي فارم هر جتي ان جو شورت ڪڊ (shortcode) يا ريجيسٽريشن پيچ (registration page) پبلش ڪيو وڃي، تائين استعمال ڪري سگهجي ٿو. |
| **Inactive** | هي فارم محفوظ آهي پر بند آهي. توهان ان کي ٻيهر فعال ڪرڻ کان اڳ گاہڪن کي چیک آؤٹ مکمل ڪرڻ جي اجازت نه هجي. |

خاص ڪري ڪڏهن ڪڏهن جب توهان پنهنجي لائیو فارمز سان گڏ ڈرافت يا سيزيوني چیک آؤٹ فارمز کي رکڻ چاهيو ته اسان ستاٽس کالم جو استعمال ڪريو.

اگر توهان هڪ نئين فارم کي ٺاهڻ چاهيو ٿا، ته صرف صفح جي اوپري طرف "Add Checkout Form" تي ڪلڪ ڪريو.

توهان ان ٽي خوراشن مان هڪ چونڊي سگهو ٿا جنهن سان توهان شروع ڪري سگهو ٿا: single step (هڪ قدم وارو)، multi-step (ڪثرت قدم وارو) يا blank (خالي). پوءِ، Editor تي وڃڻ لاءِ ڪلڪ ڪريو.

جڏهن توهان **single step** يا **multi-step** کي شروع پوائنٽ طور چونڊين ٿا، ته فارم ٽيمپليٽ ۾ بالي طور هڪ **Template Selection** فیلڊ شامل هوندو آهي. هي فیلڊ گاہڪن کي ريجيسٽريشن عمل دوران سائيٽ ٽيمپليٽ چونڊڻ جي اجازت ڏئي ٿو. توهان ان کي موجوده رکي سگهو ٿا، ختم ڪري سگهو ٿا، يا اڊيتر ۾ ڪنهن به ٻي فیلڊ جي طرح هيٺ منتقل ڪري سگهو ٿا.

![Checkout Form editor](/img/config/checkout-form-editor.png)

تغير طور، توهان واري موجودن فارمز کي ان جي نالي (جنهي استعمال صرف اندروني مرڪب لاءِ ٿيندو) ۽ اسلگ (جنهن جو استعمال شورتڪڊز کڻڻ لاءِ ٿيندو، مثال طور) ڏيو. تائين توهان کي فارم جو شورتڪڊ ڪاپي ڪرڻ يا فارم کي مڪمل ڪرڻ جا خيار به ملي ويندا آهن.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### چڪڙ (Checkout Form Editor) جو خلاصو {#checkout-form-editor-overview}

چڪڙ (checkout form editor) توهان جي رجيشن فارمز ٺاهڻ لاءِ هڪ جامع انٽرفيس فراهم ڪري ٿو. هيءَ اڳي واري ڪارڊر (editor) جو منظر آهي:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### چڪڙ فارم کي سنڀالڻ (Editing a Checkout Form) {#editing-a-checkout-form}

توه توهان مختلف مقصدن لاءِ چڪڙ فارمز ٺاه سگهو ٿا. هن مثال ۾ اسين رجيشن فارم تي ڪم ڪنداسون.

چڪڙ فارم ايڊيٽر تي وڃڻ کان پوءِ، پنهنجي فارم کي هڪ نالو ڏيو (جنهن جو استعمال صرف اندروني مرڪب لاءِ ٿيندو) ۽ اسلگ (جنهن جو استعمال شورتڪڊز کڻڻ لاءِ ٿيندو، مثال طور).

![Checkout Form editor](/img/config/checkout-form-editor.png)

فارمز ڪجهه قدمن ۽ فيلڊن (fields) مان ٺهيل هوندا آهن. توهان "Add New Checkout Step" تي ڪلڪ ڪري هڪ نون قدم شامل ڪري سگهو ٿا.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

موڊل ويندو جي پهرين ٽاب تي، پنهنجي فارم جو قدم ملي کي پورو ڪريو. ان کي هڪ ID، نالو ۽ بيان ڏيو. اهي تمام گهڻو اندروني استعمال ٿين ٿا.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

پنهنجي قدم جي نظر (visibility) مقرر ڪريو. توهان "Always show" (هميش ڏيکاريو)، "Only show for logged in users" (صرف لاگ ان ڪندڙن لاءِ ڏيکاريو) يا "Only show for guests" (صرف گيسٽس لاءِ ڏيکاريو) جي وچ ۾ چونڊ ڪري سگهو ٿا.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

آخر ۾، قدم جي انداز (style) کي ترتیب ڏيو. اهي اختيار ڪرڻ جا فيلڊ آهن.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

هڪ قدم جو نون فيلڊ شامل ڪرڻ جو وقت اچي ويو آهي. صرف "Add New Field" تي ڪلڪ ڪريو ۽ ان قسم (type) کي چونڊيو جيڪو توهان چاهيو.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

هر فیلڈز جي مختلف parameters هوندا آهن جن کي پورو ڪرڻو آهي. ان شروع وارن ورود لاءِ، اسين "Username" فیلڊ چوندا آهيون.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

توهان جترو گهڻيون steps ۽ فیلڊز شامل ڪري سگهو ٿا جن جي توهان کي ضرورت آهي. پنهنجي ڪلائين لاءِ پنهنجا products ڏيکاري سگهو ته اهي هڪ چوندا رهون، ان لاءِ Pricing Table فیلڊ استعمال ڪريو. جيڪڏهن تنهنجي گهڻيون کليين کي template چوندا ڏيڻ چاهيو ٿا، ته Template Selection فیلڊ شامل ڪريو. ۽ اها پيءُ آهي.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**نوٽ:** checkout form کڻڻ لاءِ username، email، password، site title، site URL، order summary، payment، ۽ submit button ضروري فیلڊ آهن._

جڏهن توهان پنهنجي checkout form تي ڪم ڪري رهيا آهيو، ته توهان هميشه Preview button استعمال ڪري سگهو ٿا ته توهان جا کليين فارم کي ڪيئن ڏسندا. توهان موجود صارف (existing user) جي طور تي يا گهرجي (visitor) جي طور تي بدلون ڪري سگهو ٿا.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

آخر ۾، Advanced Options ۾ توهان "Thank You" صفحو لاءِ message configure ڪري سگهو ٿا، conversions ٽرڪ ڪرڻ لاءِ snippets شامل ڪري سگهو ٿا، پنهنجي checkout form کي custom CSS شامل ڪري سگهو ٿا يا ان کي ڪجهه خاص ملڪن تائين محدود ڪري سگهو ٿا.

![Advanced Options](/img/config/checkout-form-advanced.png)

توهان هيٺ ڏنل option کي toggling ڪري پنهنجي checkout form کي manual طور تي enable يا disable ڪري سگهو ٿا، يا فارم کي حتميت طور تي delete ڪري سگهو ٿا.

![Active toggle](/img/config/checkout-form-active.png)

کوئی فارم ڈیلیٹ کرنے کے لیے، فارم ایکشنز میں ڈیلیٹ آپشن پر کلک کریں۔

![Checkout form delete option](/img/config/checkout-form-delete.png)

اپنے چیک آؤٹ فارم کو محفوظ کرنا نہ بھولیں!

![Save button](/img/config/checkout-form-save.png)

اپنے فارم کا شارٹ کوڈ حاصل کرنے کے لیے، 'Generate Shortcode' پر کلک کریں اور موڈل ونڈو میں دکھائے گئے نتیجے کو کاپی کر لیں۔

![Save button with shortcode](/img/config/checkout-form-save.png)

### پرائسنگ ٹیبل فیلڈ (The Pricing Table Field) {#the-pricing-table-field}

**Pricing Table** فیلڈ آپ کے پروڈکٹس کو چیک آؤٹ فارم پر دکھاتا ہے تاکہ کسٹمر کوئی پلان منتخب کر سکیں۔ جب آپ اس فیلڈ میں ترمیم کرتے ہیں، تو آپ کئی اختیارات ترتیب دے سکتے ہیں:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

یہ رہا کہ فرنٹ اینڈ رجسٹریشن فارم پر پرائسنگ ٹیبل کیسے نظر آتا ہے:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (پروڈکٹس)**: منتخب کریں کہ کون سے پروڈکٹس دکھانے ہیں اور وہ کس ترتیب میں آئیں گے۔
  * **Force Different Durations (مختلف مدت کو لازمی بنانا)**: جب یہ آن کیا جاتا ہے، تو تمام پروڈکٹس دکھائے جاتے ہیں چاہے ان کے پاس فی الحال منتخب کردہ بلنگ پیریڈ کے لیے میچ کرنے والی قیمت کی تبدیلی ہو یا نہ ہو۔ جب یہ بند ہوتا ہے (ڈیفالٹ)، تو وہ پروڈکٹس چھپ جاتے ہیں جن کا منتخب شدہ پیریڈ کے لیے کوئی تبدیلی نہیں ہوتی۔
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (پہلے سے منتخب ہونے پر چھپائیں)**: جب کسی پلان کو پہلے ہی URL کے ذریعے منتخب کر لیا گیا ہو (مثلاً `/register/premium`) تو یہ پرائسنگ ٹیبل چھپا دیتا ہے۔
  * **Pricing Table Template (پرائسنگ ٹیبل ٹیمپلیٹ)**: پرائسنگ ٹیبل کے لیے بصری ٹیمپلیٹ کا انتخاب کریں (جیسے Simple List، Legacy وغیرہ)۔

اگر آپ کسی پروڈکٹ کو پرائسنگ ٹیبل میں شامل کرتے ہیں اس سے پہلے فارم میں ان فیلڈز شامل نہیں کیے جو اس پروڈکٹ کے چیک آؤٹ کے عمل کو مکمل کرنے کے لیے ضروری ہیں، تو ایڈیٹر اب ایک وارننگ دکھاتا ہے۔ لائیو رجسٹریشن فارم کے لیے شائع کرنے یا تبدیلیاں محفوظ کرنے سے پہلے اس وارننگ کا استعمال کسی بھی گمشدہ لازمی فیلڈ کو شامل کرنے کے لیے کریں۔

### Period Selection Toggle شامل ڪرڻ {#adding-a-period-selection-toggle}

جيڪڏهن توهان پنهنجي پروڊڪٽس تي [Price Variations](creating-your-first-subscription-product#price-variations) کان ڪجهه ترتیب ڏني آهي (جنهن ۾ مثال طور تي موجوده ۽ سالي وارو قيمت)، ته توهان پنهنجي چيوٽنگ فارم ۾ هڪ **Period Selection** فیلڊ شامل ڪري سگهو ٿا. هي فیلڊ هڪ toggel ڏيکاري ٿو جنهن سان گراهڪون بليننگ جي دورن (billing periods) جو بڻجي وڃن، ۽ قيمت جي جدول ريل-ٽائم ۾ خود بخود اپڊيٽ ٿيندي آهي.

#### قدم 1: پنهنجي پروڊڪٽس تي Price Variations ترتیب ڏيو {#step-1-set-up-price-variations-on-your-products}

Period Selection فیلڊ شامل ڪرڻ کان اڳ، ياد رکجو ته توهان جون پروڊڪٽس پرائس ايڪٽو (price variations) ترتیب ڪيون آهن. **Ultimate Multisite > Products** تي وڃو، هڪ پروڊڪٽ کي bewerkenو ڪريو، ۽ **Price Variations** ٽاب تي ويندري هيٺ ڏنل alternatيل بليننگ دور شامل ڪري سگهو ٿا (جنهن ۾ مثال طور تي گليظ قيمت پر سالي وارو).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### قدم 2: Period Selection فیلڊ کي پنهنجي Checkout Form ۾ شامل ڪريو {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms** تي وڃو ۽ پنهنجي چيوٽنگ فارم کي بيدا ڪريو.

2. ان قدم تائين سکرول ڪريو جتي توهان جو **Pricing Table** فیلڊ آهي ۽ **Add new Field** تي ڪلڪ ڪريو.

3. فیلڊ جا قسم چونڊڻ واري ڊائلاگ ۾، **Period Select** تي ڪلڪ ڪريو.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. دور (period) جي خيارن کي ترتیب ڏيو. هر خيار کي ان ڳيان گهرجي:
   * **Duration**: تعداد (مثال طور `1`)
   * **Duration unit**: دور جو قسم (Days، Weeks، Months، يا Years)
   * **Label**: اهو متن جيڪو گراهڪون ڏسندا رهندا (مثال طور "Monthly"، "Annual")

5. وڌيڪ دور جا خيار شامل ڪرڻ لاءِ **+ Add Option** تي ڪلڪ ڪريو. انهن خيارن کي ان پرائس ايڪٽو سان ملڻ گهرجي جيڪي توهان پنهنجي پروڊڪٽس تي ترتیب ڪيا آهن.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. هڪ **Period Selector Template** چونڊيو (Clean جو default آهي، جيڪو سادو سٽيل سلبيڪل رينڊر ڪري ٿو جنهن ۾ ڪسسٹم CSS لاءِ تيار هوندو).

७. **Save Field** वर کلک کریں۔

#### سٹیپ ۳: فیلڈ کو پرائسنگ ٹیبل کے اوپر رکھیں {#step-3-position-the-field-above-the-pricing-table}

بہترین صارف تجربے کے لیے، یقینی بنائیں کہ پیریڈ سلیکشن (Period Selection) فیلڈ آپ کی چیک آؤٹ سٹیپ میں پرائسنگ ٹیبل فیلڈ سے **پہلے** ظاہر ہو۔ آپ چیک آؤٹ فارم ایڈیٹر میں فیلڈز کو دوبارہ ترتیب دینے کے لیے انہیں کھینچ سکتے ہیں۔ اس طرح، کسٹمر پہلے بلنگ پیریڈ کا انتخاب کریں گے اور پھر اسی پیریڈ کے لیے قیمتیں دیکھیں گے۔

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### فرنٹ اینڈ پر یہ کیسے کام کرتا ہے {#how-it-works-on-the-frontend}

ایک بار ترتیب دینے کے بعد، آپ کی رجسٹریشن پیج پر آنے والے کسٹمرز کو پرائسنگ ٹیبل کے اوپر پیریڈ سلیکٹر نظر آئے گا۔ جب وہ کسی مختلف بلنگ پیریڈ پر کلک کرتے ہیں:

  * پرائسنگ ٹیبل فوری طور پر منتخب کردہ پیریڈ کے لیے قیمتیں دکھانے کے لیے اپ ڈیٹ ہو جاتی ہے (پیسے ری لوڈ کی ضرورت نہیں پڑتی)۔
  * اگر پرائسنگ ٹیبل فیلڈ پر **Force Different Durations** بند ہے، تو منتخب کردہ پیریڈ کے لیے کوئی قیمت کا فرق نہ ہونے والے پروڈکٹس چھپے رہیں گے۔
  * اگر **Force Different Durations** آن ہے، تو تمام پروڈکٹس نظر آئیں گے چاہے ان کی منتخب کردہ پیریڈ کے لیے کوئی واریئیشن نہ ہو (وہ اپنی ڈیفالٹ قیمت دکھائیں گے)۔

#### URL کے ذریعے بلنگ پیریڈ کا پہلے سے انتخاب کرنا {#pre-selecting-a-billing-period-via-url}

آپ URL کے ذریعے ایک پروڈکٹ اور بلنگ پیریڈ کو بھی پہلے سے منتخب کر سکتے ہیں۔ Ultimate Multisite ان URL پیٹرنوں کی حمایت کرتا ہے:

  * `/register/premium` — صرف "Premium" پروڈکٹ کو پہلے سے منتخب کرتا ہے۔
  * `/register/premium/12` — پروڈکٹ اور 12 ماہ کی مدت کو پہلے سے منتخب کرتا ہے۔
  * `/register/premium/1/year` — 1 سال کی مدت کے ساتھ پروڈکٹ کو پہلے سے منتخب کرتا ہے۔

### ٹیمپلیٹ سلیکشن فیلڈ (The Template Selection Field) {#the-template-selection-field}

**Template Selection** فیلڈ کسٹمرز کو چیک آؤٹ کے دوران سائٹ کا ٹیمپلیٹ منتخب کرنے دیتا ہے۔ یہ اب Ultimate Multisite v2.6.1 میں شامل ہے، چاہے وہ **single step** اور **multi-step** چیک آؤٹ فارم ٹیمپلیٹس ہوں جو آپ نے شامل کیے ہوں۔

#### فیلڈ کو دستی طور پر شامل کرنا {#adding-the-field-manually}

جيڪڏهن توهان ونيسيون (forms) سان ڪم ڪري رهيا آهيو جيڪي v2.6.1 کان اڳ ٺهنديا آهن، يا هڪ خالي ٽيمپليٽ کان شروع ٿيا هئا:

1. **Ultimate Multisite > Checkout Forms** تي وڃو ۽ پنهنجي چڪ آڻ (checkout) فرم کي سدير ڪريو.
2. ان مرحلي ۾ جتي سائٽ جي تفصيل جمع ڪئي ويندي آهي، **Add new Field** تي ڇڪيو.
3. فیلڊ جا قسم (field type dialog) مان **Template Selection** چونڊيو.
4. فیلڊ کي هيٺ ڏنل طرح منظم ڪريو:
   - **Label** — اهو عنوان جيڪو ڪاروباري عوام کي ٽيمپليٽ گريڊ کان اوپر ڏسيل ويندو آهي (مثال طور، "هڪ سائٽ ٽيمپليٽ چونڊيو").
   - **Required** — اهو بتائين ته هلندڙن کي اڳتي وڌڻ کان اڳ ڪا ٽيمپليٽ چونڊڻ گهرجي.

#### هيٺ ڏنل طرح ڪيئن ڪم ڪري ٿو (How it works) {#how-it-works}

جڏهن ڪا ڪاروباري چڪ آڻ دوران ڪا ٽيمپليٽ چونڊي ٿي، ته Ultimate Multisite ان جو استعمال ڪري ٿو جڏهن هو پنهنجي نئين سائٽ کي ترتیب ڏئي رهيو آهي. جيڪي ٽيمپليٽ ڏسيل هوندا اهي توهان جي **Site Templates** لسٹ (**Ultimate Multisite > Site Templates**) مان اچن ٿا. صرف انهن ٽيمپليٽ جيڪي ڪاروباري عوام لاءِ موجود (available) نشانيده آهن، هوءَ ئي هيٺ ڏنل ويندا آهن.

### Checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 چڪ آڻ جي فرم ۾ **Site URL** فیلڊ تي ترتیب ڏني ٿا جهڙين ڊومين کي نٽ ورڪ بنيادي ڊومين (network base domains) طور سمجهي ٿو. جڏهن توهان چاهيو ته ڪاروباري عوام هڪ يا تاهه شريڪت وارن ريجيسٽري ڊومين، جهڙوڪ `example.com` ۽ `sites.example.com` تي سائٽون ٺاهيون، تڏهن فیلڊ جي available-domain ترتيبي کي استعمال ڪريو.

شريڪت وارن چڪ آڻ جي بنيادي ڊومين کي هر سائٽ لاءِ ڪيئن مخصوص ڊومين (per-site custom domain mappings) طور نه سمجهيو ويندو آهي. جڏهن ڪا ڪاروباري ان بنيادن مان هڪ تي هڪ ذريعي سائٽ ٺاهندي، تڏهن Ultimate Multisite ڪو ماپڊ-ڊومين رڪڊ (mapped-domain record) نه ٺاهي ٿو جيڪو هيٺ ڏنل ڪري سگهي ته شريڪت وارو هاستنگ (shared host) صرف ان هڪ سائٽ لاءِ هجي. شريڪت وارو هاستنگ ان هميشه موجود رهندو جنهن ٻين سائٽون وئي اهڙي ئي چڪ آڻ جي بنياد استعمال ڪن ٿيون.

ڪاروباري عوام لاءِ مخصوص هاستنگن (per-customer mapped hosts) لاءِ ڪسٹم ڊومين کي محفوظ رکجو، جهڙوڪ `customer-example.com`. شريڪت وارن ريجيسٽري هاستنگن لاءِ چڪ آڻ جي بنيادي ڊومين کي محفوظ رکجو جنهن واري سائٽون ڪيتريون هم استعمال ڪري سگهن ٿيون.

#### فیلڊ کي ختم ڪرڻ (Removing the field) {#removing-the-field}

جيڪڏهن توهان سائيٽ ٽيمپليٽس (site templates) نه ڏين ٿا، ته توهان کي فرم ۾ ٽيمپليٽ سيلڪشن (Template Selection) فیلڊ ختم ڪري ڇڏي بدلو. ان صورت ۾ ڪاروباريون ان ٽيمپليٽ جو حاصل ڪن ٿيون جيڪو **Ultimate Multisite > Settings > Site Templates** ۾ مقرر ڪيل موجوده ڊالٽ (default) ٽيمپليٽ آهي.
