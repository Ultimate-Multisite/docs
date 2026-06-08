---
title: مهارت تعیین مشخصات سایت
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# مهارت مشخصات سایت

**مهارت مشخصات سایت** یک رویکرد ساختاریافته برای ثبت اهداف، مخاطبان و هویت برند سایت شما است. این اطلاعات در حافظه **site_brief** شما ذخیره می‌شود، که عامل‌ها (agents) در طول جلسات مختلف به آن ارجاع می‌دهند تا کمک‌های منسجم و آگاه به بافت ارائه دهند.

## مشخصات سایت چیست؟

مشخصات سایت، فرآیند مستندسازی موارد زیر است:

- **هدف سایت**: سایت شما چه کاری انجام می‌دهد و چرا وجود دارد
- **مخاطب هدف**: چه کسانی از سایت شما بازدید می‌کنند و به چه چیزی نیاز دارند
- **هویت برند**: رنگ‌ها، لحن و سبک بصری شما
- **اهداف کسب‌وکار**: موفقیت برای سایت شما به چه شکلی به نظر می‌رسد
- **ساختار محتوا**: سایت شما چگونه سازماندهی شده است

این مشخصات، **site_brief** شما می‌شود؛ یک حافظه دائمی که عامل‌ها از آن برای درک بافت سایت شما استفاده می‌کنند.

## چرا از مشخصات سایت استفاده کنیم؟

### ثبات در طول جلسات مختلف

بدون site_brief، شما مجبور خواهید بود هر بار که جلسه جدیدی شروع می‌کنید، هدف سایت خود را دوباره توضیح دهید. با داشتن آن، عامل‌ها بلافاصله متوجه می‌شوند:

- اهداف و مخاطبان سایت شما
- رنگ‌ها و لحن برند شما
- ساختار محتوای شما
- اهداف تجاری شما

### توصیه‌های بهتر

عامل‌ها از site_brief شما برای:

- پیشنهاد ویژگی‌هایی که با هدف سایت شما همخوانی دارند
- توصیه ساختارهای محتوایی که با اهداف شما مطابقت دارند
- پیشنهاد طرح‌هایی که با برند شما سازگار هستند
- جلوگیری از پیشنهاد ویژگی‌های ناسازگار

### شروع کار سریع‌تر

عامل‌های جدید (یا عامل‌ها در جلسات جدید) می‌توانند با خواندن site_brief شما به سرعت مسلط شوند، به جای اینکه سؤالات توضیحی بپرسند.

## شروع مشخصات سایت

### در طول Onboarding Theme Builder

مهارت مشخصات سایت به طور خودکار در طول جریان **Onboarding Theme Builder** آغاز می‌شود. عامل Setup Assistant سؤالاتی می‌پرسد و site_brief شما را می‌سازد.

### شروع دستی

شما می‌توانید در هر زمانی مشخصات سایت را شروع کنید:

```
"Let's define my site specification"
```

یا

```
"Help me create a site brief"
```

## فرآیند مشخصات سایت

### گام ۱: هدف سایت

عامل سؤال می‌کند:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

شما می‌توانید یک دسته را انتخاب کنید یا هدف خود را توصیف نمایید.

### گام ۲: مخاطب هدف

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### گام ۳: هویت برند

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### گام ۴: اهداف کسب‌وکار

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### گام ۵: ساختار محتوا

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## حافظه site_brief شما

پس از تکمیل مشخصات سایت، اطلاعات شما به صورت **site_brief** در حافظه عامل شما ذخیره می‌شود. این یک رکورد ساختاریافته است که شامل موارد زیر است:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## مشاهده و به‌روزرسانی site_brief شما

### مشاهده site_brief شما

از عامل بپرسید:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

عامل مشخصات ذخیره‌شده شما را نمایش می‌دهد.

### به‌روزرسانی site_brief شما

اگر سایت شما تکامل یافت، می‌توانید آن را به‌روز کنید:

```
"Update my site brief: we're now targeting B2B customers"
```

یا

```
"Refresh my site specification"
```

این کار مهارت مشخصات سایت را با اطلاعات موجود شما به عنوان نقطه شروع، دوباره اجرا می‌کند.

## عامل‌ها چگونه از site_brief استفاده می‌کنند؟

### توصیه‌های طراحی

هنگامی که درخواست تغییرات طراحی می‌کنید، عامل‌ها به site_brief شما ارجاع می‌دهند:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### پیشنهاد ویژگی‌ها

عامل‌ها ویژگی‌هایی را پیشنهاد می‌کنند که با اهداف شما همخوانی دارند:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### ساختار محتوا

عامل‌ها سازماندهی محتوا را بر اساس ساختار شما پیشنهاد می‌دهند:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## بهترین شیوه‌ها

### مشخص باشید

به جای "مخاطب عمومی"، مخاطب واقعی خود را توصیف کنید:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### به طور منظم به‌روز کنید

همانطور که سایت شما تکامل می‌یابد، site_brief خود را به‌روز کنید:

- وقتی به مخاطب جدیدی تغییر مسیر می‌دهید
- وقتی خطوط تولید محصول جدیدی اضافه می‌کنید
- وقتی هویت برند شما تغییر می‌کند
- وقتی اهداف کسب‌وکار شما تغییر می‌کند

### از اصطلاحات ثابت استفاده کنید

در طول جلسات، از همان اصطلاحات استفاده کنید:

- ✓ همیشه بگویید "sustainable jewelry" (نه "eco-friendly jewelry" و "green products")
- ✓ همیشه به مخاطبان خود به یک شکل اشاره کنید

### بافت را در نظر بگیرید

اطلاعات پیش‌زمینه‌ای ارائه دهید که به عامل‌ها کمک کند تصمیمات شما را درک کنند:

- "ما به دنبال متخصصانی هستیم که کیفیت را مهم‌تر از قیمت می‌دانند"
- "مخاطبان ما از فناوری آگاه هستند و انتظار طراحی مدرن دارند"
- "ما یک استارتاپ با منابع محدود هستیم، بنابراین به راه‌حل‌های مقرون‌به‌صرفه نیاز داریم"

## ارتباط با Onboarding Theme Builder

مهارت مشخصات سایت در **Onboarding Theme Builder** ادغام شده است. وقتی Onboarding را کامل می‌کنید، site_brief شما به طور خودکار با اطلاعاتی که ارائه داده‌اید، ایجاد می‌شود.

اگر مایل باشید، می‌توانید مشخصات سایت را به صورت مستقل نیز اجرا کنید:

- برای اصلاح مشخصات پس از تنظیم اولیه
- برای به‌روزرسانی site_brief با تکامل یافتن سایت شما
- برای ایجاد یک مشخصات دقیق قبل از شروع Theme Builder

## عیب‌یابی

**site_brief من استفاده نمی‌شود**
- تأیید کنید که عامل به حافظه دسترسی دارد
- از عامل بخواهید که "recall my site brief" کند
- بررسی کنید که آیا حافظه در تنظیمات شما فعال است یا خیر

**می‌خواهم با یک site_brief جدید شروع کنم**
- از عامل بپرسید: "Clear my site brief and start fresh"
- سپس مشخصات سایت را دوباره اجرا کنید

**عامل توصیه‌هایی ارائه می‌دهد که با site_brief من مطابقت ندارد**
- از عامل بخواهید که "review my site brief" کند
- اگر site_brief شما قدیمی است، آن را به‌روز کنید
- اطلاعات بیشتری در درخواست‌های خود ارائه دهید

## گام‌های بعدی

پس از تعریف مشخصات سایت:

۱. **استفاده از Theme Builder**: یک قالب سفارشی بر اساس site_brief خود ایجاد کنید
۲. **بهبود طراحی**: از مهارت Design System Aesthetics برای کارهای طراحی دقیق استفاده کنید
۳. **برنامه‌ریزی محتوا**: از عامل‌ها درخواست توصیه‌های ساختار محتوا کنید
۴. **ساخت ویژگی‌ها**: ویژگی‌هایی را درخواست کنید که با اهداف کسب‌وکار شما همخوانی دارند
