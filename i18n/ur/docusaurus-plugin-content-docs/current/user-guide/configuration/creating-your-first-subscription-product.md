---
title: اپنی پہلی سبسکرپشن پروڈکٹ بنانا
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# اپنا پہلا Subscription Product بنانا (v2)

_**اہم نوٹ: یہ مضمون صرف Ultimate Multisite ورژن 2.x صارفین کے لیے ہے۔ اگر آپ ورژن 1.x استعمال کر رہے ہیں،**_ **_**یہ مضمون دیکھیں**_**۔

اپنا نیٹ ورک چلانا شروع کرنے اور اپنی خدمات ممکنہ صارفین کو فروخت کرنا شروع کرنے کے لیے، آپ کے پاس مختلف subscription اختیارات ہونے چاہییں۔ آپ یہ products کیسے بناتے ہیں؟ آپ کس قسم کے products پیش کر سکتے ہیں؟ اس مضمون میں، ہم products کے بارے میں وہ سب کچھ شامل کریں گے جو آپ کو جاننے کی ضرورت ہے۔

## Product Type {#product-type}

Ultimate Multisite کے ساتھ آپ اپنے clients کو products کی دو اقسام پیش کر سکتے ہیں: **plans** اور **add-ons** **(Order Bump)**۔ Add-ons کو دو اقسام میں تقسیم کیا جا سکتا ہے:**packages** اور **services**۔ ہم آگے ان کے فرق اور خصوصیات دیکھیں گے۔

  * **Plans** : Ultimate Multisite کا بنیادی product۔ آپ کے client کے پاس membership صرف اسی صورت میں ہو سکتی ہے جب وہ کسی plan سے منسلک ہو۔ ایک plan آپ کے clients کو ایک یا زیادہ sites فراہم کرتا ہے (یہ آپ کے plan کی configurations پر منحصر ہے) ان limitations کے ساتھ جو آپ اپنے product editing page پر مقرر کرتے ہیں۔

  * **Packages** : add-ons جو براہِ راست Ultimate Multisite plans کی functionalities پر اثر انداز ہوتے ہیں۔ یہ limitations کو تبدیل کرتے ہیں یا آپ کے client کے خریدے ہوئے اصل plan میں نئے resources، plugins یا themes شامل کرتے ہیں۔ مثال کے طور پر، ایک basic plan ہر ماہ 1,000 visits کی اجازت دے سکتا ہے اور آپ ایک package دستیاب کر سکتے ہیں جو اس تعداد کو 10,000 تک بڑھا دے۔

  * **Services:** add-ons جو Ultimate Multisite کی functionalities کو تبدیل نہیں کرتے۔ یہ وہ tasks ہیں جو آپ اپنے client کے لیے اس plan کے علاوہ انجام دیں گے جو انہوں نے خریدا ہے۔ مثال کے طور پر، آپ کا customer ایک plan خرید سکتا ہے جو ایک single site کی اجازت دیتا ہے اور ایک extra service کے لیے بھی ادائیگی کرتا ہے جو اس site کا design بنائے گی۔

## Products کا انتظام {#managing-products}

بہت سے لوگوں کے لیے Ultimate Multisite میں **Products** tab **(Ultimate Multisite > Products)** روایتی hosting ماحول میں plans کے برابر سمجھا جا سکتا ہے۔

Ultimate Multisite کے اندر Products tab کسی مخصوص product یا service پر لاگو construct اور limitations کی تعریف کرتا ہے۔ ایسے constructs product یا service کی description، price، taxes، اور permissions تک پھیلتے ہیں۔

یہ section Ultimate Multisite کے اس ضروری سنگِ بنیاد کے بارے میں آپ کی سمجھ میں رہنمائی کرے گا۔

![Products فہرست کا page](/img/config/products-list.png)

## Products شامل کرنا {#adding-products}

چاہے plan ہو، package ہو، یا service، نئے item کی تعریف کرنے کا entry point **Ultimate Multisite > Products > Add Product** کے ذریعے ہے۔

![Add Product button](/img/config/product-add-button.png)

interface میں دو غالب sections شامل ہیں۔ بائیں طرف کئی tabs ہیں جو product کی تعریف میں مدد دیتے ہیں اور دائیں طرف product کی base price، اس کی active state، اور product image کی تعریف کے لیے چند sections ہیں۔

![Product edit page کا جائزہ](/img/config/product-edit-full.png)

### Description {#description}

base product information کو product name اور description فراہم کر کے define کیا جا سکتا ہے۔ یہ identifiers جہاں بھی product information کی ضرورت ہو وہاں دکھائے جاتے ہیں، جیسے plan اور pricing selection، invoices، upgrades، وغیرہ۔

![Product description section](/img/config/product-description.png)

### Pricing Type {#pricing-type}

interface کے دائیں طرف، base pricing define کی جا سکتی ہے۔

![Pricing اور save section](/img/config/product-pricing-save.png)

Ultimate Multisite تین مختلف pricing types کو support کرتا ہے۔ **paid** option network administrator سے product کی price اور billing frequency کے متعلق information طلب کرتا ہے۔

### Pricing {#pricing}

price component base product price اور billing interval define کرتا ہے۔

![Pricing اور save section](/img/config/product-pricing-save.png)

اس طرح $29.99 کی example price، 1 month کی setting کے ساتھ، ہر month $29.99 bill کرے گی۔ اسی طرح، $89.97 کی price، 3 months کی setting کے ساتھ، ہر quarter وہ amount bill کرے گی۔

### Billing Cycles {#billing-cycles}

billing cycles section مذکورہ billing interval کی frequency مشخص کرتا ہے اور عموماً contracts یا fixed terms کے تناظر میں سمجھا جاتا ہے۔

![Pricing اور save section](/img/config/product-pricing-save.png)

مثال کے طور پر، $29.99 کی product price، 1 month کے interval اور 12 billing cycles کے ساتھ، product کے لیے اگلے 12 months تک ہر month $29.99 bill کرے گی۔ دوسرے الفاظ میں، ایسی setting 12 months کے لیے $29.99 per month کی fixed-price term قائم کرے گی اور پھر billing بند کر دے گی۔

### Trial Period {#trial-period}

offer trial toggle کو enable کرنے سے network administrator کو product کے لیے trial period define کرنے کی اجازت ملتی ہے۔

![Pricing اور save section](/img/config/product-pricing-save.png)

trial period کے دوران، customers product کو free استعمال کر سکتے ہیں اور trial period ختم ہونے تک ان سے bill نہیں لیا جائے گا۔

### Setup Fee {#setup-fee}

آپ اپنے plan پر setup fee بھی apply کر سکتے ہیں۔

![Pricing اور save section](/img/config/product-pricing-save.png)

اس کا مطلب ہے کہ آپ کا client پہلے charge پر (price plan کے علاوہ) ایک extra amount ادا کرے گا جو اس fee کے مطابق ہو گا جو آپ نے اس section میں define کی ہے۔

### Active {#active}

active toggle مؤثر طور پر define کرتا ہے کہ آیا product نئے sign-ups کے لیے customers کو available ہے یا نہیں۔

![Active toggle](/img/config/product-active.png)

اگر اس plan پر existing customers موجود ہیں تو toggle کو disabled state پر set کرنا مؤثر طور پر plan کو grandfather کر دیتا ہے، اسے future sign-ups سے ہٹا دیتا ہے۔ **plan پر existing customers سے billing جاری رہے گی** جب تک انہیں new plan میں منتقل نہ کیا جائے یا plan سے remove نہ کیا جائے۔

### Product Image {#product-image}

**Upload Image** button network administrator کو media library استعمال کرنے کی اجازت دیتا ہے تاکہ product image select یا upload کی جا سکے۔

![Product image section](/img/config/product-image.png)

### Delete {#delete}

**Delete Product** button product کو system سے delete کر دیتا ہے۔ یہ product publish ہونے کے بعد ظاہر ہوتا ہے۔

![Delete product section](/img/config/product-delete.png)

دیگر deletions کے برعکس، product کو کسی trash state میں نہیں رکھا جاتا۔ لہٰذا ایک بار delete ہونے کے بعد action ناقابلِ واپسی ہے۔

### Product Options {#product-options}

جب بنیادی سطح کی پروڈکٹ کی معلومات متعین ہو جائیں، تو پروڈکٹ کے اختیارات نیٹ ورک منتظم کو پروڈکٹ کی مخصوص خصوصیات مزید متعین کرنے میں مدد دیتے ہیں۔

#### عمومی {#general}

**عمومی** ٹیب پروڈکٹ کی وہ عمومی خصوصیات متعین کرتا ہے جو کسی بھی دوسری پروڈکٹ مخصوص ٹیب پر لاگو نہیں ہوتیں۔

![عمومی ٹیب](/img/config/product-general-tab.png)

خود واضح **پروڈکٹ slug** وہ slug متعین کرتا ہے جس کے ذریعے پروڈکٹ URLs اور Ultimate Multisite کے دیگر حصوں میں شناخت کی جاتی ہے۔

Ultimate Multisite کئی پروڈکٹ اقسام کی حمایت کرتا ہے، یعنی منصوبہ، پیکیج، اور خدمت۔ **پروڈکٹ اختیارات** کی ٹیبز متعین کردہ پروڈکٹ قسم کے مطابق متحرک طور پر ایڈجسٹ ہوتی ہیں۔

**کسٹمر کردار** وہ کردار متعین کرتا ہے جو سائٹ بننے پر کسٹمر کو تفویض کیا جاتا ہے۔ عموماً زیادہ تر نیٹ ورک منتظمین کے لیے یہ Ultimate Multisite ڈیفالٹ یا منتظم ہوگا۔ Ultimate Multisite کا ڈیفالٹ کردار **Ultimate Multisite > Settings > Login & Registration** میں سیٹ کیا جا سکتا ہے۔

![کسٹمر کردار کی ترتیبات](/img/config/product-customer-role-settings.png)

#### اپ گریڈز & ڈاؤن گریڈز {#up--downgrades}

یہ ٹیب کسٹمر کے لیے اس کی مخصوص سطح کے اندر دستیاب اپ گریڈ اور ڈاؤن گریڈ راستے متعین کرتا ہے۔

اس تصور کو سمجھنے کے لیے ایک مثال پر غور کریں جہاں ایک مخصوص Ultimate Multisite تنصیب اپنے کسٹمرز کو تعلیمی انتظامی حل فراہم کرتی ہے۔ اسے حاصل کرنے کے لیے تین منصوبے (بنیادی، پلس، اور پریمیم) متعین کیے جاتے ہیں اور ہر منصوبے کے لیے مخصوص پلگ اِنز فعال کیے جاتے ہیں (پلگ اِنز فعال کرنے کی ہدایات کے لیے اس حصے میں آگے دیکھیں)۔

اگر Ultimate Multisite تنصیب کاروباری ویب سائٹس یا eCommerce ویب سائٹس کو بھی خدمات فراہم کرتی ہے تو ان منصوبوں کے لیے مختلف پلگ اِنز نصب اور فعال کرنا ضروری ہو سکتا ہے۔

اس حد تک، eLearning کسٹمرز کو eCommerce منصوبوں میں منتقل ہونے کی اجازت دینا ناپسندیدہ اور مسئلہ خیز ہوگا کیونکہ یہ منصوبے، قیمتیں، اور حدود مناسب مطابقت نہیں رکھ سکتیں۔

لہٰذا کسٹمر کے راستے کو محدود کرنے اور واقعات کو روکنے کے لیے نیٹ ورک منتظم ایک منصوبہ گروپ متعین کر سکتا ہے اور اس گروپ کے اندر وہ منصوبے مخصوص کر سکتا ہے جن میں کسٹمر منتقل ہو سکتا ہے۔

![اپ گریڈز اور ڈاؤن گریڈز ٹیب](/img/config/product-upgrades.png)

منصوبہ گروپ متعین کرنے کے لیے **منصوبہ گروپ** فہرست میں مطابقت رکھنے والے منصوبے مخصوص کریں۔ **پروڈکٹ ترتیب** یہ طے کرتی ہے کہ منصوبے کم ترین سے بلند ترین تک کس طرح ترتیب دیے اور دکھائے جاتے ہیں۔

Ultimate Multisite میں **آرڈر بمپ** فیچر بھی شامل ہے جہاں مناسب اضافی پروڈکٹس اور خدمات منصوبوں میں شامل کی جا سکتی ہیں۔ یہ کسٹمر کو اضافی آئٹمز کے طور پر پیش کی جاتی ہیں جنہیں checkout پر یا اپ گریڈ کے دوران منصوبوں میں شامل کیا جا سکتا ہے۔

#### قیمت کی تبدیلیاں {#price-variations}

قیمت کی تبدیلیاں نیٹ ورک منتظم کو مدت کے لحاظ سے متبادل قیمت کی سطحیں مخصوص کرنے دیتی ہیں۔ یہ ترتیب اسی پروڈکٹ کے لیے ماہانہ، سہ ماہی، سالانہ، یا کوئی بھی دوسرا بلنگ دورانیہ پیش کرنا ممکن بناتی ہے۔ مثال کے طور پر، آپ ایک پروڈکٹ $29.99/ماہ پر ترتیب دے سکتے ہیں، جس کے ساتھ $249.99/سال پر رعایتی سالانہ اختیار ہو۔

![قیمت کی تبدیلیاں ٹیب](/img/config/product-price-variations-tab.png)

قیمت کی تبدیلیاں قائم کرنے کے لیے، **قیمت کی تبدیلیاں فعال کریں** ٹوگل کو فعال کریں اور **نئی قیمت کی تبدیلی شامل کریں** بٹن پر کلک کریں۔

![پروڈکٹ قیمت کی تبدیلیاں](/img/config/product-price-variations.png)

ایک تبدیلی درج کرنے کے لیے، تبدیلی کی مدت، دورانیہ، اور قیمت سیٹ کریں۔ اضافی تبدیلیاں دوبارہ بٹن پر کلک کر کے درج کی جا سکتی ہیں۔

مثال کے طور پر، اگر آپ کی بنیادی پروڈکٹ قیمت $29.99 فی ماہ ہے، تو آپ یہ شامل کر سکتے ہیں:

  * **3 ماہ** $79.99 پر (ماہانہ کے مقابلے میں چھوٹی رعایت)
  * **1 سال** $249.99 پر (سالانہ عہد کے لیے نمایاں رعایت)

:::tip فرنٹ اینڈ پر بلنگ دورانیہ ٹوگل دکھانا

صرف قیمت کی تبدیلیاں فرنٹ اینڈ checkout میں ٹوگل یا سوئچ شامل نہیں کرتیں۔ کسٹمرز کو بلنگ دورانیوں (مثلاً ماہانہ / سالانہ) کے درمیان سوئچ کرنے دینے کے لیے، آپ کو اپنے checkout فارم میں **دورانیہ انتخاب** فیلڈ شامل کرنا ہوگا۔ مرحلہ وار ہدایات کے لیے [Checkout فارمز: دورانیہ انتخاب ٹوگل شامل کرنا](checkout-forms#adding-a-period-selection-toggle) دیکھیں۔
:::

#### ٹیکسز {#taxes}

**ٹیکسز** ٹیب **Ultimate Multisite > Settings > Taxes** میں مخصوص کردہ ٹیکس ترتیبات، اور خاص طور پر متعین کردہ ٹیکس ریٹس، کے ساتھ مطابقت رکھتا ہے۔ ٹیکسز فعال کرنے اور قابل اطلاق ٹیکس ریٹس متعین کرنے کے لیے براہِ کرم **Ultimate Multisite: Settings** پر دستاویزات دیکھیں۔

![ٹیکسز ٹیب](/img/config/product-taxes.png)

پچھلی مثال میں، ہم نے کیلیفورنیا (ریاستہائے متحدہ امریکہ) کے کسٹمرز پر لاگو 7.25% کا مقامی ٹیکس ریٹ متعین کیا تھا۔

جب ٹیکس ریٹ **Ultimate Multisite > Settings > Manage Tax Rates** میں متعین ہو جائے تو یہ پروڈکٹ سطح پر منتخب کیا جا سکتا ہے۔

![ٹیکسز ٹیب](/img/config/product-taxes.png)

یہ ظاہر کرنے کے لیے کہ کوئی پروڈکٹ قابلِ ٹیکس آئٹم ہے، **قابلِ ٹیکس ہے** ٹوگل کو فعال کریں اور Tax Category ڈراپ ڈاؤن سے قابل اطلاق ٹیکس ریٹ منتخب کریں۔

#### سائٹ ٹیمپلیٹس {#site-templates}

اصل میں، سائٹ ٹیمپلیٹس مکمل WordPress ویب سائٹس ہوتی ہیں جنہیں کسٹمر کی سبسکرپشن کے آغاز پر اس کی سائٹ پر کلون کیا جاتا ہے۔

![سائٹ ٹیمپلیٹس ٹیب](/img/config/product-site-templates.png)

نیٹ ورک منتظم ٹیمپلیٹ سائٹ کو ایک باقاعدہ WordPress سائٹ کے طور پر بناتا اور ترتیب دیتا ہے، جس میں فعال اور ترتیب دیے گئے تھیمز، پلگ اِنز، اور مواد شامل ہوتے ہیں۔ ٹیمپلیٹ سائٹ لفظ بہ لفظ کسٹمر کے لیے کلون کی جاتی ہے۔

یہ ٹیب نیٹ ورک منتظم کو نئی سبسکرپشن پر سائٹ ٹیمپلیٹس کے رویے کو مخصوص کرنے دیتا ہے۔ اس منصوبے کے لیے سائٹ ٹیمپلیٹس استعمال کرنے کے لیے، **سائٹ ٹیمپلیٹس کی اجازت دیں** ٹوگل کو فعال حالت میں سیٹ کریں۔

جب **سائٹ ٹیمپلیٹس کی اجازت دیں** غیر فعال ہو، تو اس منصوبے کے کسٹمرز ٹیمپلیٹس منتخب نہیں کر سکتے، چاہے checkout فارم، قابلِ اشتراک لنک، یا URL پیرامیٹر بصورتِ دیگر ٹیمپلیٹس دستیاب بنا دے۔ Ultimate Multisite اب دستیاب داخلہ پوائنٹس پر ایک fallback chain کے ذریعے اس حد کو نافذ کرتا ہے: پہلے منصوبہ ترتیبات چیک کی جاتی ہیں، پھر checkout فارم ٹیمپلیٹ ترتیبات، پھر پہلے سے منتخب یا URL کے ذریعے فراہم کردہ ٹیمپلیٹس۔ یہ منصوبہ حدود کو مستقل رکھتا ہے اور ان پروڈکٹس کے لیے ٹیمپلیٹس ظاہر ہونے سے روکتا ہے جنہیں انہیں پیش نہیں کرنا چاہیے۔

**سائٹ ٹیمپلیٹ انتخاب موڈ** سبسکرپشن کے عمل کے دوران سائٹ ٹیمپلیٹس کے رویے کی وضاحت کرتا ہے۔

**D** **efault** ترتیب checkout فارم کے مراحل کی پیروی کرتی ہے۔ اگر نیٹ ورک منتظم نے checkout عمل میں ٹیمپلیٹ انتخاب کا مرحلہ متعین کیا ہے اور اس مرحلے کو ٹیمپلیٹس کے ساتھ متعین کیا گیا ہے تو یہ ترتیب checkout مرحلے میں قائم کردہ ہدایات کی پابندی کرے گی۔

**A** **ssign Site Template** متعین کرنا مخصوص ٹیمپلیٹ کے انتخاب کو لازمی بناتا ہے۔ نتیجتاً، checkout عمل میں موجود کوئی بھی ٹیمپلیٹ انتخابی مراحل ہٹا دیے جاتے ہیں۔

آخر میں، **C** **hoose Available Site Templates** checkout مرحلے میں متعین ٹیمپلیٹس کو اس ترتیب میں منتخب کردہ ٹیمپلیٹس سے بدل دیتا ہے۔ صارف کی انتخاب میں مدد کے لیے پہلے سے منتخب ٹیمپلیٹ بھی متعین کیا جا سکتا ہے۔

بالآخر اگر نیٹ ورک منتظم چاہتا ہے کہ ٹیمپلیٹ انتخاب checkout مراحل میں ہو تو ' _default_ ' کی ترتیب کافی ہوگی۔ متبادل طور پر، ٹیمپلیٹ انتخاب کو ہٹانے اور مقفل کرنے اور انتخاب کو plan ترتیبات کے سپرد کرنے کے لیے ' _assign new template_ ' یا ' _choose available site templates_ ' اختیارات مطلوب ہو سکتے ہیں۔

#### سائٹس {#sites}

**سائٹس** ٹیب Ultimate Multisite کی حدود والی فعالیت کا حصہ ہے۔

![سائٹس ٹیب](/img/config/product-sites.png)

یہ ترتیب ان سائٹس کی زیادہ سے زیادہ تعداد متعین کرتی ہے جو کوئی صارف اپنی membership کے تحت بنا سکتا ہے۔

حد فعال کرنے کے لیے، **سائٹس محدود کریں** ٹوگل کو فعال حالت میں سیٹ کریں اور **سائٹ الاؤنس** فیلڈ میں سائٹس کی زیادہ سے زیادہ تعداد متعین کریں۔

#### وزٹس {#visits}

**وزٹس** ٹیب Ultimate Multisite کے حدود نظام کا مزید حصہ ہے۔ یہ ترتیب کسی صارف کی سائٹ پر منفرد وزٹرز کے حساب کتاب اور بعد ازاں throttling کی اجازت دیتی ہے۔

![وزٹس ٹیب](/img/config/product-visits.png)

مارکیٹنگ کے نقطۂ نظر سے، نیٹ ورک منتظمین اس ترتیب کو صارفین کو حدود تک پہنچنے کے بعد اپنے plan کو اپ گریڈ کرنے کی ترغیب دینے کے ذریعے کے طور پر استعمال کر سکتے ہیں۔ یہ ترتیب نیٹ ورک منتظم کو سائٹس پر حد سے زیادہ ٹریفک کو روکنے اور قابو میں رکھنے میں بھی مدد دے سکتی ہے تاکہ نظامی وسائل محفوظ رہیں۔

اس خصوصیت کو استعمال کرنے کے لیے، **منفرد وزٹس محدود کریں** ٹوگل کو فعال حالت میں سیٹ کریں اور **منفرد وزٹس کوٹہ** فیلڈ میں منفرد وزٹرز کی زیادہ سے زیادہ تعداد متعین کریں۔

ایک بار یہ حد پہنچ جائے تو Ultimate Multisite صارف کی سائٹ فراہم کرنا بند کر دے گا، بجائے اس کے کہ حدود سے تجاوز کی نشاندہی کرنے والا پیغام دکھائے۔

#### صارفین {#users}

Ultimate Multisite کی 'صارفین' حدود نیٹ ورک منتظم کو صارفین کی اس تعداد پر حدود عائد کرنے دیتی ہیں جو بنائی جا سکتی ہے اور کرداروں کو تفویض کی جا سکتی ہے۔

![صارفین ٹیب](/img/config/product-users.png)

حدود کی خصوصیت فعال کرنے کے لیے، **صارف محدود کریں** ٹوگل کو دائیں طرف سلائیڈ کر کے فعال حالت میں سیٹ کریں۔

اس کے بعد، ہر اس کردار کے لیے جسے محدود کرنا ہو، اس کے ساتھ موجود ٹوگل کو فعال حالت میں سیٹ کریں اور مناسب فیلڈ میں زیادہ سے زیادہ بالائی حد متعین کریں۔

#### پوسٹ اقسام {#post-types}

**پوسٹ اقسام** ٹیب نیٹ ورک منتظم کو WordPress کے اندر پوسٹ اقسام کی وسیع صف پر باریک بینی سے حدود عائد کرنے دیتا ہے۔

![پوسٹ اقسام ٹیب](/img/config/product-post-types.png)

WordPress کی ساخت کی وجہ سے، پوسٹس اور پوسٹ اقسام اس کی بنیادی فعالیت کا ایک اہم جزو ہیں، اور اسی لیے Ultimate Multisite کا حدود نظام نیٹ ورک منتظم کو حدود قائم کرنے اور برقرار رکھنے میں مدد دینے کے لیے ڈیزائن کیا گیا ہے۔

اس حدود ذیلی نظام کو فعال کرنے کے لیے، **پوسٹ اقسام محدود کریں** ٹوگل کو دائیں طرف سلائیڈ کر کے فعال حالت میں سیٹ کریں۔

اس کے بعد، ہر اس پوسٹ قسم کے لیے جسے محدود کرنا ہو، اسے دائیں طرف سلائیڈ کر کے آن کریں اور مناسب فیلڈ میں زیادہ سے زیادہ بالائی حد متعین کریں۔

#### ڈسک اسپیس {#disk-space}

**ڈسک اسپیس** ٹیب نیٹ ورک منتظمین کو صارفین کے استعمال کردہ اسپیس کو محدود کرنے دیتا ہے۔

![ڈسک اسپیس ٹیب](/img/config/product-disk-space.png)

عام طور پر WordPress multisite میں بنیادی فائلیں تمام سائٹس کے درمیان مشترک ہوتی ہیں اور میڈیا فائلوں اور اپ لوڈز کے لیے انفرادی ڈائریکٹریز بنائی جاتی ہیں جن پر یہ ترتیبات اور حدود لاگو ہوتی ہیں۔

ڈسک استعمال کی حد فعال کرنے کے لیے، **فی سائٹ ڈسک سائز محدود کریں** ٹوگل کو دائیں طرف سلائیڈ کر کے فعال حالت میں سیٹ کریں۔

اس کے بعد، **ڈسک اسپیس الاؤنس** فیلڈ میں میگابائٹس میں زیادہ سے زیادہ بالائی حد متعین کریں۔

#### کسٹم ڈومین {#custom-domain}

اس اختیار کو ٹوگل کر کے آپ خاص طور پر اس plan پر کسٹم ڈومینز کی اجازت دے سکتے ہیں۔

![کسٹم ڈومینز ٹیب](/img/config/product-custom-domains.png)

#### تھیمز {#themes}

پروڈکٹ اختیارات کے اندر **تھیمز** ٹیب نیٹ ورک منتظم کو صارفین کے انتخاب کے لیے تھیمز دستیاب کرنے اور اختیاری طور پر تھیم کی حالت لازمی بنانے دیتا ہے۔

![تھیمز ٹیب](/img/config/product-themes.png)

_**نوٹ: صارفین کے لیے تھیمز دستیاب کرنے کے لیے انہیں نیٹ ورک منتظم کے ذریعے نیٹ ورک enabled ہونا چاہیے۔**_

![نیٹ ورک تھیمز صفحہ](/img/config/product-themes-network-enabled.png)

**visibility** اختیار وضاحت کرتا ہے کہ آیا یہ تھیم صارف کو اپنی سائٹ کے اندر **Appearance > Themes** ٹیب دیکھتے وقت نظر آتا ہے یا نہیں۔ اس اختیار کو **Hidden** پر سیٹ کرنے سے تھیم منظر سے ہٹ جاتا ہے اور یوں اسے منتخب اور فعال کرنے کی صلاحیت محدود ہو جاتی ہے۔

![تھیمز ٹیب](/img/config/product-themes.png)

**behavior** انتخاب نیٹ ورک منتظم کو صارف کی سائٹ بننے پر تھیم کی حالت متعین کرنے دیتا ہے۔

**A** **vailable** حالت میں تھیم صارف کے لیے خود فعال کرنے کے لیے دستیاب کیا جاتا ہے۔ اس کے برعکس، **Not Available** حالت صارف سے تھیم فعال کرنے کی صلاحیت ہٹا دیتی ہے۔ آخر میں، **Force Activate** اختیار تھیم کے انتخاب اور فعالیت کو لازمی بنا دیتا ہے، یوں سائٹ بننے پر اسے default کے طور پر سیٹ کر دیتا ہے۔

#### پلگ اِنز {#plugins}

Themes ٹیب کی طرح، Ultimate Multisite نیٹ ورک منتظم کو صارفین کے لیے پلگ اِنز کی visibility کے ساتھ ساتھ نئی سائٹ بننے پر ان کی حالت متعین کرنے دیتا ہے۔

![پلگ اِنز ٹیب](/img/config/product-plugins.png)

**visibility** ڈراپ ڈاؤن پلگ اِن کو صارف سے یا تو visible یا hidden رکھنے کی اجازت دیتا ہے جب اسے ان کی سائٹ پر Plugins مینو اختیار کے ذریعے دیکھا جائے۔

نیٹ ورک منتظم رویّے کے ڈراپ ڈاؤن میں موجود اختیارات استعمال کر کے plugins کے رویّے کو مزید تبدیل کر سکتا ہے۔

![Plugins ٹیب](/img/config/product-plugins.png)

**Default** انتخاب گاہک کے منتخب کردہ site template میں متعین plugin حالت کا احترام کرتا ہے۔ اس طرح جو plugins template کے اندر فعال کیے گئے ہیں، وہ template گاہک کی site پر کلون ہونے پر فعال ہی رہیں گے۔

**Force Activate** site creation پر plugin کو فعال حالت میں رکھتا ہے، اور اس کے برعکس **Force Inactivate** site creation پر plugin کو غیر فعال کر دیتا ہے۔ ان دونوں صورتوں میں، plugin کی حالت گاہک اپنے WordPress Plugins مینو کے ذریعے دستی طور پر تبدیل کر سکتا ہے۔

**Force Activate & Lock** ترتیب اسی طرح کام کرتی ہے لیکن plugin کی حالت کو گاہک کے ذریعے تبدیل ہونے سے روکتی ہے۔ اس طرح Force Activate and Lock کی ترتیب plugin کو اس کی فعال حالت میں مجبور کرے گی اور گاہک کو اسے غیر فعال کرنے سے روکے گی۔ اسی طرح، **Force Inactivate & Lock** ترتیب plugin کو اس کی غیر فعال حالت میں مجبور کرے گی اور صارف کو plugin فعال کرنے سے روکے گی۔

نیٹ ورک منتظم site templates کے ساتھ Force Activate & Lock اور Force Inactivate & Lock ترتیبات پر غور کرنا چاہ سکتا ہے، کیونکہ templates کے اندر plugins اور plugin کی حالتیں ان ترتیبات کے منتخب ہونے پر متاثر ہو سکتی ہیں۔

#### حدود ری سیٹ کریں {#reset-limitations}

**Reset Limitations** ٹیب product پر متعین تمام custom حدود کو ری سیٹ کرتا ہے۔ حدود کو ری سیٹ کرنے کے لیے **reset limitations** بٹن پر کلک کریں۔

![Reset Limitations ٹیب](/img/config/product-reset-limitations.png)

عمل کی تصدیق کے لیے **confirm reset** ٹوگل کو دائیں طرف اس کی فعال حالت میں سلائیڈ کریں اور **reset limitations** بٹن پر کلک کریں۔

![Reset Limitations ٹیب](/img/config/product-reset-limitations.png)

## Product میں ترمیم، نقل، یا حذف کریں {#edit-duplicate-or-delete-product}

موجودہ products میں ترمیم، نقل یا حذف کرنے کے لیے **Ultimate Multisite > Products** پر جائیں اور موجودہ product نام پر ہوور کریں۔

![Product ہوور actions](/img/config/product-hover-actions.png)
