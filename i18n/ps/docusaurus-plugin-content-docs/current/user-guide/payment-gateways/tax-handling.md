---
title: م thuế مدیریت
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# مالیاتِ سنبھالنه (Tax Handling)

Ultimate Multisite ۾ اسان جي کور پيجنٽ ۾ هڪ ٽيڪس ڪولڪشن ماڊيول بڻايو آهي، تنهن ڪري جيڪڏهن توهان کي پنهنجي پلانز، پيڪيجز ۽ خدمتن تي سيلز ٽيڪس ڪوله چاهيو ته توهان آساني سان اهو ڪري سگهو ٿا جنهن لاءِ ڪا add-ons نصب ڪرڻ جي ضرورت نه آهي.

يورپ ۾ موجود ڪمپنيون لاءِ، اسان هڪ **add-on** پيش ڪريون ٿا جيڪو VAT تعمیل کي بهتر سپورٽ ڪرڻ لاءِ اوزار ۽ خصوصيتون شامل ڪري ٿو.

Ultimate Multisite توهان جي طرف کان گورنمينٽ تائين ٽيڪس فائل نه ڪندو يا جمع نه ڪندو؛ اسان صرف توهان کي عمل ۾ اچڻ وقت مناسب ٽيڪس کوله مدد ڪندون آهيون. **توهان کي اڃا به پنهنجي طرف کان ٽيڪس جمع ڪرڻو پوندو.**

## ٽيڪس ڪولڪشن کي فعال ڪرڻ (Enabling Tax Collection)

ٽيڪس ڪولڪشن بالڊيو طور تي فعال نه آهي. ان کي فعال ڪرڻ لاءِ، توهان کي **Ultimate Multisite > Settings > Taxes** وڃڻو پوندو ۽ Enable Taxes جو هي setting آن ڪرڻ جي ضرورت آهي.

![Tax settings toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

هتي ٽيڪس جي setings جو پورو ڏوه ڏسي سگهجي ٿو:

![Tax settings full page](/img/config/settings-taxes-full.png)

توهان انحدي طور تي مصنوعات لاءِ ٽيڪس جي setings به ڏسي سگهو ٿا:

![Tax settings for products](/img/config/settings-taxes.png)

### ٽيڪس شامل نه ڪرڻ بليڪه مقابل ٽيڪس شامل ڪرڻ (Tax excluded vs. Tax included)

بالڊيو طور تي، توهان جي تمام مصنوعات جا قيمت ٽيڪس کان خارج آهن، جس کا مطلب آهي ته ٽيڪس مصنوعي جي قيمت ۾ **شامل نه** آهن. جيڪڏهن اسان اهو پنهنجي ڪا خريد جو ٽيڪس ادا ڪرڻ گهرجي ٿو ته اسان هي ٽيڪس سبٽيول تي **اوپر** شامل ڪريون ٿا.

اگر توهان چاهيو ته توهان جي مصنوعي جي قيمت ۾ ٽيڪس شامل رهون، ته توهان **Inclusive Tax** جو setting آن ڪري سگهو ٿا.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

پنهنجي ڪيل ڪيل تبديلين کي **save** ڪرڻ کي بھولي نه پيو.

###

## ٽيڪس جي شرحون (Creating Tax Rates)

جڏهن کان توهان Tax Collection آن ڪري ڇڏيو آهي، تڏهن توهان اسان جي tax rates editor جو استعمال ڪري مخصوص جڳه لاءِ ٽيڪس جي شرحون bana sakoonge.

تا تاسو کولی شئ د تنظیماتو (settings) په سایدبار کې د **Manage Tax Rates** د ګډ按钮 باندې کلیک کولو وسیله ترلاسه کړئ.

![Tax Rates panel link in the settings page](/img/config/settings-taxes-manage-rates.png)

د د کرښو نرخونو ویډيور صفحې ته، تاسو کولی شئ د **Add new Row** د بټ باندې کلیک गरेर نوي Tax Rates اضافه کړئ.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

تاسو باید هر ډول کرښه نرخ (tax rate) یو **title** ورکړئ (که په فانو کې کارول شي). بیا تاسو کولی شئ **country** (زه اړینه ده)، **state**، او **city** (دو یې اختیاري دي) غوره کړئ چې دا کرښه نرخ چیرته لاړې. وروسته، **tax rate in percents** اضافه کړئ.

### Tax Categories

تاسو کولی شئ هم متعدد Tax Categories جوړ کړئ، ترڅو د مختلف ډول مصنوعي لپاره مختلف کرښه نرخونه اضافه کړئ.

د **Add new Tax Category** باندې کلیک وکړئ، بیا د خپل category نوم لیکئ او **Create** فشار ورکړئ.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

تر هغه چې تاسو د categories په ګډه کولو کې ګرځئ، **Switch** باندې کلیک وکړئ او هغه category غوره کړئ چې تاسو غواړئ نوي کرښې نرخونه یې اضافه کړئ.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

تاسو کولی شئ د یو خاص محصول لپاره Tax Category تنظیم کړئ بیا په **Product edit page** ته لاړ شئ او بیا **Taxes** (کرښې نرخونه) 탭 ته لاړ شئ.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

په عین ذات کې، تاسو کولی شئ د **Is Taxable?** toggles ب کار وکړئ ترڅو Ultimate Multisite ته خبر ورکړئ چې دا ځانګړی محصول پر کرښو نرخونه نه باید جمع کړي.

## European VAT Support

همانطور که قبلاً ذکر شده، موږ د مشتریان لپاره یو اضافي (add-on) لرئ چې له اروپا کرپسی نرخونو (VAT regulations) له امله ځانګړتیاوې لري.

د زموږ VAT инструمنټونه دوه مهم کارونه هم کمکی کوي:

* د اروپایی VAT نرخونو په آساني کارول؛
* د VAT نمبر جمع کول او اعتبار سنجي کول - او د VAT څخه免 شوي ادارو لپاره بیا چارجینګ (reverse charging) (لکه شرکتونه چې لاغری VAT نمبر لري).

د دې اضافي نصب کولو لپاره، ته ورته **Ultimate Multisite > Settings** ته لاړ شه او بیا په **Check our Add-ons** سایدبار لینک باندې کلیک درانه.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

تاسو به د زموږ اضافي (add-ons) صفحه ته ریدا شي. তাত، تاسو کولی شئ **Ultimate Multisite VAT add-on** وڅیړئ او یې نصب کړئ.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

بیا، ته **Network Admin > Plugins** ته لاړ شه او دا اضافي په ټول شبکه کې فعال کړئ.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

که تاسو به **Tax Settings tab** ته بیرته لاړ شئ، تاسو به نوی خپاري选项ونه وګورئ. **Enable VAT Support** د انتخاب فعال کړئ ترڅو نوي VAT инструمنټونه فعال شي. خپل تنظیمات **save** کول غواړئ!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### د VAT کرپسی نرخونو کاوهنه (Pulling on VAT Tax Rates)

د زموږ همغږي (integration) یو له инструمنټونه چې اضافه کوي، هغه د اروپایی ملګرو دولتونو لپاره کرپسی نرخونه کارول सक्ने وړتیا ده. دا کار په اروپایی VAT دعموتلو وروسته د کرپسی نرخونو ویډیو ویرایشونکي صفحه ته لاړل کولو وسیله دی.

صفحې په منځ کې، تاسو به VAT (مجموعی کروم) اخیستنې د خټکۍ (pulling options) انتخابونه وګورئ. کله چې تاسو یو نرخ ډول غوره کړئ او **Update EU VAT Rates** د ګډ按钮 (button) باندې کلیک وکړئ، نو دا جدول له خودي سره खुल्ني او په هر EU دولتي حالت لپاره کروم اخیستنې نرخونه پرې پوره کوي. بیا، تاسو یوازې باید یې سېوئ (save) کړئ.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

تاسو کولی شئ د اخیستنې وروسته یې هم ویلو (edit) کی શકો. دا کار کوئ، یوازې هغه جدول ردیف چې تاسو یې بدلول غواړئ بدل کړئ او نوی ارزښتونه سېوئ کولو لپاره کلیک وکړئ.

### VAT Validation (VAT کروم اخیستنې تایید)

کله چې VAT دعمو (support) فعال وي، Ultimate Multisite د چک اوټ (checkout) formu په پای کې یو اضافه فیلد اضافهوي، چې د بیا کولو پته (billing address) فیلد څخه ښکاره کیږي. دا فیلد یوازې د EU کې موندل شوي کليونټونه ښودلی وي.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite بیا VAT Number تاییدوي او که دا به یو لاحق (valid) وي، نو د بده مرجعه میکانیزم (reverse charge mechanism) लागू کیږي او هغه 주문 (order) د کروم اخیستنې نرخ 0% ته تنظیم کیږي.
