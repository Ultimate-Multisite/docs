---
title: 'سبق 5: اپنے منصوبے ڈیزائن کرنا'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# سبق 5: اپنے منصوبے ڈیزائن کرنا

آپ کے پلان ٹائرز صرف قیمتوں کی سطحیں نہیں ہیں — یہ اس بات کی عکاسی کرتے ہیں کہ آپ کے مخصوص زمرے کے گاہک (niche customers) اصل میں کیسے کام کرتے ہیں۔ اس سبق میں، آپ ایسے پروڈکٹ ٹائرز ڈیزائن کریں گے جو مختلف مراحل پر موجود فٹنس کاروباروں کی حقیقی ضروریات سے مطابقت رکھتے ہوں۔

## ہم کہاں تھے {#where-we-left-off}

FitSite کے لیے تین ٹیمپلیٹس تیار ہیں (Studio Essential, Gym Pro, Fitness Chain)۔ اب ہم وہ پلان بناتے ہیں جو یہ طے کرتے ہیں کہ گاہکوں کو کیا رسائی ملے گی اور انہیں کتنا ادا کرنا پڑے گا۔

## گاہک کے زمروں کے لحاظ سے سوچنا {#thinking-in-customer-segments}

زیادہ تر لوگ جو غلطی کرتے ہیں وہ یہ ہے کہ وہ تکنیکی خصوصیات (storage, bandwidth, pages کی تعداد) کی بنیاد پر پلان ڈیزائن کرتے ہیں۔ آپ کے مخصوص زمرے کے گاہک ان الفاظ میں نہیں سوچتے۔ ایک جم کے مالک اس بارے میں سوچتے ہیں کہ انہیں اپنا کاروبار چلانے کے لیے کیا چاہیے۔

فٹنس اسٹوڈیوز کے لیے، تین قدرتی زمرے موجود ہیں:

| زمرہ (Segment) | وہ کون ہیں | انہیں کیا چاہیے |
|---------|-------------|----------------|
| **تنہا ٹرینر / چھوٹے اسٹوڈیوز** | 1-3 عملہ، ایک جگہ، شروع کر رہے ہیں | ایک پیشہ ور ویب سائٹ، کلاس کی معلومات، رابطہ فارم |
| **مستحکم جم** | 5-20 عملہ، ایک جگہ، ترقی کر رہے ہیں | اوپر کی تمام چیزیں، کے لیے بکنگ، بلاگ، گیلری، کسٹم ڈومین |
| **فٹنس چینز** | متعدد مقامات، قائم برانڈ | اوپر کی تمام چیزیں، کے لیے ملٹی-سائٹ، مقامات کے پیجز، عملہ کی ڈائریکٹری |

آپ کے پلان ان زمروں سے مطابقت رکھنے چاہئیں، نہ کہ محض عارضی خصوصیات کے مجموعوں سے۔

## FitSite کے پلان بنانا {#creating-the-fitsite-plans}

ہر پلان کے لیے **Ultimate Multisite > Products > Add Product** پر جائیں۔

### پلان 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**ہدف**: تنہا ٹرینر اور چھوٹے اسٹوڈیوز

**Description tab**:
- نام: FitSite Starter
- تفصیل: "ہر اس چیز کے لیے جو ایک پرسنل ٹرینر یا چھوٹے اسٹوڈیو کو آن لائن پیشہ ور نظر آنے کے لیے درکار ہے۔"

**General tab**:
- پروڈکٹ کی قسم: Plan
- گاہک کا کردار: Administrator

**Site Templates tab**:
- سائٹ ٹیمپلیٹس کی اجازت دیں: Enabled
- دستیاب ٹیمپلیٹس: صرف Studio Essential

**Limitations**:
- سائٹس: 1
- ڈسک سپیس: 1 GB
- کسٹم ڈومین: Disabled (استعمال کرے گا `studioname.fitsite.com`)

**Plugins tab**:
- رابطہ فارم پلگ ان: Force Activate
- SEO پلگ ان: Force Activate
- بکنگ پلگ ان: Not Available (اپ گریڈ کی ترغیب)

**Themes tab**:
- آپ کا منتخب تھیم: Force Activate
- تمام دیگر تھیمز: Hidden

### پلان 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**ہدف**: مستحکم ایک جگہ والے جم

**Description tab**:
- نام: FitSite Growth
- تفصیل: "مستحکم جم کے لیے جو اپنی آن لائن موجودگی کو بڑھانا اور نئے ممبرز کو راغب کرنا چاہتے ہیں۔"

**Site Templates tab**:
- دستیاب ٹیمپلیٹس: Studio Essential اور Gym Pro

**Limitations**:
- سائٹس: 1
- ڈسک سپیس: 5 GB
- کسٹم ڈومین: Enabled

**Plugins tab**:
- Starter میں موجود ہر چیز، مزید:
- بکنگ پلگ ان: Force Activate
- گیلری پلگ ان: Force Activate
- بلاگ فنکشنلٹی: Available

**Up & Downgrades tab**:
- پلان گروپ: FitSite Plans
- پروڈکٹ کا ترتیب: 2

### پلان 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**ہدف**: متعدد مقامات والے فٹنس چینز

**Description tab**:
- نام: FitSite Pro
- تفصیل: "متعدد مقامات والے فٹنس برانڈز کے لیے مکمل پلیٹ فارم۔"

**Site Templates tab**:
- دستیاب ٹیمپلیٹس: تینوں ٹیمپلیٹس

**Limitations**:
- سائٹس: 5 (ہر مقام کے لیے ایک)
- ڈسک سپیس: 20 GB
- کسٹم ڈومین: Enabled

**Plugins tab**:
- Growth میں موجود ہر چیز، مزید:
- تمام پریمیم پلگ انز: Force Activate

**Up & Downgrades tab**:
- پلان گروپ: FitSite Plans
- پروڈکٹ کا ترتیب: 3

## پلان گروپ سیٹ کرنا {#setting-up-the-plan-group}

پلان گروپ اس بات کو یقینی بناتا ہے کہ گاہک صرف FitSite پلان فیملی کے اندر اپ گریڈ یا ڈاؤن گریڈ کر سکیں۔ ہر پلان کے **Up & Downgrades** ٹیب پر:

1. تمام تینوں پلانز کے لیے **Plan Group** کو "FitSite Plans" پر سیٹ کریں۔
2. **Product Order** کو 1 (Starter)، 2 (Growth)، 3 (Pro) پر سیٹ کریں۔

یہ ایک واضح اپ گریڈ کا راستہ بناتا ہے: Starter → Growth → Pro۔

## آرڈر بمپس شامل کرنا {#adding-order-bumps}

آرڈر بمپس (Order bumps) چیک آؤٹ کے دوران پیش کیے جانے والے اضافی پروڈکٹس ہیں۔ FitSite کے لیے، ان پر غور کریں:

- **Extra Storage Pack** ($19/month) -- اضافی 5 GB ڈسک سپیس
- **Priority Support** ($29/month) -- تیز ردعمل کا وقت
- **Additional Site** ($39/month) -- ان گاہکوں کے لیے جنہیں اپنے پلان کی اجازت سے زیادہ سائٹس کی ضرورت ہے

ان کو Ultimate Multisite میں **Package** قسم کے پروڈکٹس کے طور پر بنائیں اور انہیں متعلقہ پلانز سے جوڑ دیں۔

## یہ ڈھانچہ کیوں کام کرتا ہے {#why-this-structure-works}

- **Starter** داخلے کی رکاوٹیں ختم کرتا ہے -- کم قیمت، سادہ آفر، ٹرینرز کو جلدی آن لائن کر دیتا ہے
- **Growth** وہ خصوصیات شامل کرتا ہے جو جم واقعی مانگتے ہیں -- بکنگ، گیلری، کسٹم ڈومینز
- **Pro** اس اعلیٰ قدر والے زمرے کو سروس دیتا ہے جسے ملٹی-لوکیشن سپورٹ کی ضرورت ہوتی ہے
- **آرڈر بمپس** گاہکوں کو بنیادی پلانز کو پیچیدہ کیے بغیر اپنی مرضی کے مطابق بنانے دیتے ہیں
- **واضح اپ گریڈ راستہ** کا مطلب ہے کہ گاہک آپ کے ساتھ بڑھتے ہیں نہ کہ چھوڑ کر چلے جاتے ہیں

## اب تک کا FitSite نیٹ ورک {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## اس سبق میں ہم نے کیا بنایا {#what-we-built-this-lesson}

- حقیقی فٹنس کاروبار کے زمروں سے منسلک **تین پلان ٹائرز**
- Ultimate Multisite کے پلگ ان اور ٹیمپلیٹ کنٹرول کا استعمال کرتے ہوئے **خصوصیات کو محدود کرنا (Feature gating)**
- ایک واضح اپ گریڈ راستے کے ساتھ **ایک پلان گروپ**
- اضافی آمدنی کے لیے **آرڈر بمپ پروڈکٹس**
- گاہک کے معیار کی بنیاد پر، نہ کہ تکنیکی تفصیلات کی بنیاد پر **ایک قیمت کا ڈھانچہ**

---

**اگلا:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- ہم ایک چیک آؤٹ فلو بنائیں گے جو فٹنس اسٹوڈیو کے مالکان کو ادائیگی کرنے والے گاہکوں میں تبدیل کر دے گا۔
