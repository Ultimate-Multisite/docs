---
title: Fannin Zane na Tsarin Design
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# مهارت‌های زیبایی سیستم طراحی (Design System Aesthetics Skill)

**مهارت زیبایی سیستم طراحی** یک روش هدایت‌شده برای بهتر کردن هویت بصری سایت شماست. این مهارت به شما کمک می‌کند در مورد تایپوگرافی، رنگ، فاصله و توکن‌های حرکت که سیستم طراحی شما را تعریف می‌کنند، تصمیمات سازگار بگیرید.

## زیبایی سیستم طراحی چیست؟

زیبایی سیستم طراحی یک مهارت ساختاریافته است که موارد زیر را پوشش می‌دهد:

- **تایپوگرافی (Typography)**: خانواده فونت‌ها، اندازه‌ها، وزن‌ها و ارتفاع خطوط
- **رنگ (Color)**: پالت‌های اصلی، ثانویه، تأکیدی و خنثی
- **فاصله (Spacing)**: مقیاس‌های پدینگ (Padding)، مارجین (Margin) و شکاف (Gap)
- **حاشیه (Borders)**: توکن‌های شعاع (Radius) و عرض
- **سایه‌ها (Shadows)**: توکن‌های ارتفاع (Elevation) و عمق (Depth)
- **حرکت (Motion)**: انیمیشن‌ها و انتقال‌ها (Transitions)

این تصمیمات در فایل `theme.json` قالب شما ثبت می‌شوند و یک سیستم بصری منسجم ایجاد می‌کنند.

## چرا از زیبایی سیستم طراحی استفاده کنیم؟

### سازگاری (Consistency)

یک سیستم طراحی تضمین می‌کند که:

- همه متن از همان مقیاس تایپوگرافی استفاده کنند
- رنگ‌ها در کل سایت به صورت یکنواخت استفاده شوند
- فاصله‌ها الگوی قابل پیش‌بینی داشته باشند
- انیمیشن‌ها با هم هماهنگ به نظر برسند

### کارایی (Efficiency)

به جای اینکه تصمیمات طراحی را صفحه به صفحه بگیرید، شما:

- توکن‌ها را فقط یک بار تعریف می‌کنید
- از همه جا از آن‌ها استفاده می‌کنید
- با تغییر یک مقدار، به‌صورت سراسری به‌روزرسانی می‌کنید

### انعطاف‌پذیری (Flexibility)

شما می‌توانید:

- کل سیستم طراحی خود را به سرعت تنظیم کنید
- با زیبایی‌های مختلف آزمایش کنید
- در عین تکامل، سازگاری برند را حفظ کنید

## فعال کردن مهارت زیبایی سیستم طراحی

### فعال‌سازی دستی (Manual Activation)

می‌توانید این مهارت را هر زمان شروع کنید:

```
"کمک کن تا سیستم طراحی من رو بهتر کنم"
```

یا

```
"بیایید زیبایی سایت من رو بهبود ببخشیم"
```

یا

```
"من رو در تصمیمات سیستم طراحی راهنمایی کن"
```

### پیشنهادات خودکار (Automatic Suggestions)

ابزارها ممکن است زمانی که شما:

- درخواست تغییر طراحی می‌کنید
- یک بازطراحی "مدرن" یا "حرفه‌ای" می‌خواهید
- می‌خواهید سازگاری بصری را بهبود ببخشید
- در حال آماده شدن برای راه‌اندازی سایت خود هستید، پیشنهاد استفاده از این مهارت را بدهند.

## فرآیند زیبایی‌شناسی سیستم طراحی

### مرحله ۱: تایپوگرافی (Typography)

مأمور از شما در مورد انتخاب فونت‌هایتان می‌پرسد:

```
سبک تایپوگرافی مورد علاقه شما چیست؟
- سریف (سنتی، شیک)
- سنس‌سریف (مدرن، تمیز)
- مونو اسپیس (تکنیکی، متمرکز بر کد)

برای فونت عنوان خود:
- آیا می‌خواهید یک فونت عنوان متفاوت داشته باشید، یا از همان متن بدنه استفاده کنید؟
- ترجیح شما: پررنگ، شیک، بازیگوش، مینیمال؟

برای فونت بدنه:
- خوانایی مهم است. آیا ترجیح می‌دهید:
  - متن بزرگتر و با فضای بیشتر
  - متن فشرده و کارآمد
  - اندازه استاندارد
```

سپس مأمور موارد زیر را تعریف می‌کند:

- **فونت عنوان (Heading font)**: فونت اصلی برای عناوین و تیترها
- **فونت بدنه (Body font)**: فونتی که برای پاراگراف‌ها و متن اصلی استفاده می‌شود
- **فونت مونو اسپیس (Monospace font)**: فونتی که برای کدها و محتوای فنی استفاده می‌شود
- **مقیاس اندازه (Size scale)**: اندازه‌های از پیش تعریف شده (کوچک، پایه، بزرگ، XL و غیره)
- **مقیاس وزن (Weight scale)**: ضخامت فونت‌ها (عادی، متوسط، پررنگ و غیره)
- **ارتفاع خط (Line height)**: فاصله بین خطوط برای خوانایی بهتر

### مرحله ۲: پالت رنگی (Color Palette)

```
بیایید پالت رنگی شما را تعریف کنیم.

رنگ اصلی (رنگ برند شما):
- فعلی: [نمایش رنگ موجود]
- تغییر به: [انتخابگر رنگ یا کد هگز]

رنگ ثانویه (رنگ پشتیبان):
- فعلی: [نمایش رنگ موجود]
- تغییر به: [انتخابگر رنگ یا کد هگز]

رنگ تأکیدی (برای برجسته‌سازی و دکمه‌های فراخوان به عمل - CTAs):
- فعلی: [نمایش رنگ موجود]
- تغییر به: [انتخابگر رنگ یا کد هگز]

پالت خنثی (خاکستری‌ها برای متن، حاشیه و پس‌زمینه):
- روشن: [رنگ]
- متوسط: [رنگ]
- تیره: [رنگ]
```

مأمور یک پالت کامل شامل موارد زیر را ایجاد می‌کند:

- رنگ‌های اصلی، ثانویه و تأکیدی
- خاکستری‌های خنثی (روشن، متوسط، تیره)
- رنگ‌های معنایی (موفقیت، هشدار، خطا)
- حالت‌های هاور (Hover) و فعال (Active states)

### مرحله ۳: فاصله گذاری (Spacing)

Yaya kake shiga kake so?

Wannan tsarin tsayi (spacing scale) da kake so:
- Compact (tsayin ƙarami, tsare-tsaren inganci)
- Normal (tsayin da ya dace)
- Spacious (tsayin da yawa, wajen sauri)

Wannan yana shafi:
- Padding a cikin buttons da cards
- Margins tsakanin sections
- Gaba tsakanin lambobin grid

Wannan agent tana samar da tokens na tsayi (spacing tokens):

- Unit na asali (yawanci 4px ko 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Adadi na musamman ga padding, margin, gap

### Mataki na 4: Borders da Shadows

```
Girma da bayani a sassa:

Wurin tsayin girgiza (Border radius) da kake so:
- Sharp (ba wani ƙarama ba)
- Subtle (girgiza mai ƙarami)
- Rounded (girgiza na tsawon)
- Very rounded (girgiza mai girma)

Tsayin girgiza (Shadow depth):
- Flat (ba wani tsayi ba)
- Subtle (tsayen haske mai ƙarami)
- Pronounced (tsayen girki mai ƙarfi)
```

Wannan agent tana samar da:

- Border radius tokens (ga buttons, cards, inputs)
- Shadow tokens ga matakan girma (elevation levels)
- Border width tokens

### Mataki na 5: Motion da Animation

```
Yaya kake so wajen shafin yana jin yadda yake a lokacin tattaunawa?

Wurin animation da kake so:
- Minimal (ba wani animation ba)
- Subtle (tsayen tsayi mai sauƙi)
- Playful (animation mai bayyana)

Animation na musamman:
- Tattaunawar shafi: fade, slide, ko ba?
- Hover a kan button: scale, canjin launi, ko duka biyu?
- Yanayin jinkirin wajen ajiye (Loading states): spinner, skeleton, ko progress bar?
```

Wannan agent tana samar da:

- Durumi na tsayen yanayi (Transition durations) (sauri, na daya, mai tsawo)
- Functions na sauƙin canzawa (Easing functions) (ease-in, ease-out, ease-in-out)
- Keyframes na animation ga ayyukan da ake yin amfani da su

## Aiki da Aesthetics na Design System

### Amfani na Asali (Automatic Application)

Bayan ka kammala wannan ƙwarewa (skill), agent zai:

1. Ya sake gyara `theme.json` na theme ɗinka da dukkan tokens
2. Ya yi amfani da design system a kan theme ɗin da kake amfani da shi
3. Ya sake samar da styles na block don ya yi daidai da sabon tsarin
4. Ya sake ƙarfafa (activate) theme ɗin da aka gyara

### Amfani na Manufar (Manual Application)

Zaka iya gyara `theme.json` kai tsaye:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Duba Tsarin Kayanin Ku-tsarin Kake

### Tambaya ga Agent

```
"Ka nuna ni tsarin kake"
```

ko

```
"Menene tsarin kake na yanzu?"
```

Agent zai nuna maka font-wayarwarka, lafiyayenka, tsarin tsarewa (spacing), da sauran tokens.

### Gano theme.json

Bincika `/wp-content/themes/[theme-name]/theme.json` a cikin text editor don gani bayanan asali na tokens.

## Gyara Tsarin Kake

### Gyayoyon Sauƙi

Ka tambaye Agent kan canje-canje da kake so:

```
"Ka sa lafiyen gaba ya ƙarawa"
```

ko

```
"Ƙara tsarin tsarewa 20%"
```

ko

```
"Canza font na sako zuwa wani serif"
```

### Gyaran Tsari Duka

Kana sake gudanar da ƙwarewar Design System Aesthetics:

```
"Bari mu gyara dukkan tsarin kake"
```

Wannan zai ba ka shawarwari duka, tare da fara yadda yake a halin yanzu.

### Gyaran Wani Bahama

Gyara bangare na musamman:

```
"Ka gyara lafiyen gaba kawai, ka bar sauran abubuwa"
```

## Amfani da Tsarin Kake Da Kyau

### Daidaito (Consistency)

- Yi amfani da idanun sama a duk inda kake amfani da shi.
- Kada ka ƙirƙiri lafiyen ko tsayoyin wanda ba su da wuri.
- Ka amfani da tokens maimakon rubuta ƙima kai tsaye (hardcoding values).

### Sunan Abubuwa (Naming)

Yi amfani da sunaye masu bayani:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Ingancin Gudanarwa (Scalability)

نظام خود را برای مقیاس‌پذیری طراحی کنید:

- از واحدهای نسبی (rem, em) به جای پیکسل استفاده کنید
- مقیاس‌ها (xs، sm، md، lg، xl) ایجاد کنید به جای مقادیر تصادفی
- برای افزودنی‌های آینده برنامه‌ریزی کنید

### مستندسازی سیستم طراحی خود:

- چرا رنگ‌های خاص را انتخاب کردید
- از هر توکن چه زمانی استفاده کنید
- استثناها و موارد حاشیه‌ای

## الگوهای رایج سیستم طراحی

### مدرن مینیمال (Modern Minimalist)

- تایپوگرافی بدون سریف (Inter، Helvetica)
- پالت رنگی محدود (۲ تا ۳ رنگ)
- فضای زیاد بین عناصر
- سایه‌های ملایم
- انیمیشن‌های روان و سریع

### گرم و دوستانه (Warm and Friendly)

- ترکیبی از فونت‌های سریف و بدون سریف
- پالت رنگی گرم (نارنجی‌ها، خاکستری گرم)
- گوشه‌های گرد
- سایه‌های نرم
- انیمیشن‌های بازیگوشانه

### حرفه‌ای شرکتی (Professional Corporate)

- فونت بدون سریف تمیز (Roboto، Open Sans)
- پالت رنگی خنثی با یک رنگ تاکیدی
- فضای منظم بین عناصر
- حداقل سایه‌ها
- انتقال‌های ظریف

### خلاق و جسورانه (Creative and Bold)

- تایپوگرافی متمایز
- پالت رنگی جسورانه
- فضاهای متنوع
- سایه‌های قوی
- انیمیشن‌های قابل توجه

## عیب‌یابی

**تغییرات سیستم طراحی من نمایش داده نمی‌شود**
- کش مرورگر را پاک کنید
- اگر از یک مولد استاتیک استفاده می‌کنید، سایت خود را دوباره بسازید
- بررسی کنید که فایل theme.json یک JSON معتبر باشد
- تأیید کنید که قالب فعال است

**رنگ‌ها در صفحات مختلف متفاوت به نظر می‌رسند**
- به دنبال CSS تداخل‌کننده در پلاگین‌ها بگردید
- تأیید کنید که همه صفحات از یک قالب استفاده می‌کنند
- هر افزونه کش را پاک کنید

**می‌خواهم به سیستم طراحی قبلی برگردم**
- از عامل بخواهید: "تاریخچه سیستم طراحی من را نشان بده" (Show me my design system history)
- فایل theme.json را به مقادیر قبلی دستی ویرایش کنید
- با انتخاب‌های متفاوت، مهارت را دوباره اجرا کنید

## مراحل بعدی

پس از تعریف سیستم طراحی خود:

۱. **درباره سایت خود مرور کنید**: تا طرح جدید را ببینید، به سایت خود برید.
۲. **بیشتر اصلاح کنید**: با همان مهارت دوباره تنظیمات را تغییر دهید.
۳. **قالب‌ها بسازید**: از توکن‌های طراحی خود برای ساخت قالب‌های بلوک سفارشی استفاده کنید.
۴. **مستندسازی کنید**: سیستم طراحی خود را با اعضای تیم به اشتراک بگذارید.
