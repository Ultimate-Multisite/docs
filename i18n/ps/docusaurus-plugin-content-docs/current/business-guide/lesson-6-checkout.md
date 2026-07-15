---
title: 'لوست ۶: د نوم‌لیکنې تجربه'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# لوست ۶: د نوم‌لیکنې تجربه

د checkout بهیر هغه ځای دی چې لېوالتیا عاید ته بدلېږي. ګډوډ یا عمومي signup بهیر پېرودونکي له لاسه ورکوي. داسې ځانګړی بهیر چې د دوی په ژبه خبرې کوي او بې‌زحمته ښکاري، هغوی پېرودونکو ته اړوي.

## موږ چېرته پاتې شوي وو {#where-we-left-off}

FitSite کې templates او plans تنظیم شوي دي. اوس موږ د registration او checkout تجربه جوړوو چې د fitness studio مالکین پیسو ورکونکو پېرودونکو ته بدلوي.

## د Registration Flow پوهېدل {#understanding-the-registration-flow}

د Ultimate Multisite checkout forms په بشپړ ډول د دودولو وړ څو-ګامه forms دي. د FitSite لپاره، موږ داسې بهیر غواړو چې:

1. داسې احساس ورکړي لکه د fitness کاروبارونو لپاره جوړ شوی وي
2. یوازې هغه څه راټول کړي چې اړتیا ورته وي
3. پېرودونکی تر ټولو ژر یو فعال site ته ورسوي

د بشپړ تخنیکي ماخذ لپاره [The Registration Flow](/user-guide/configuration/the-registration-flow) وګورئ.

## د FitSite Checkout ډیزاینول {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** ته لاړ شئ او یو نوی form جوړ کړئ.

### ګام ۱: د Plan ټاکنه {#step-1-plan-selection}

لومړی شی چې د fitness studio مالک یې ویني باید plans وي، په هغو اصطلاحاتو کې وړاندې شوي چې دوی پرې پوهېږي.

- د **Pricing Table** field اضافه کړئ
- داسې یې تنظیم کړئ چې د FitSite درې واړه plans وښيي
- د plan تشریحات چې تاسو په لوست ۵ کې لیکلي دلته ښکاري -- ډاډ ترلاسه کړئ چې د fitness کاروبار اړتیاوو ته خبرې کوي، نه تخنیکي ځانګړتیاوو ته

:::tip د ځانګړې برخې ژبه مهمه ده
"1 GB storage" د gym مالک ته هېڅ معنا نه لري. "هر هغه څه چې تاسو د مسلکي studio website لپاره ورته اړتیا لرئ" هر څه معنا لري. د plan تشریحات د خپل پېرودونکي په ژبه ولیکئ.
:::

### ګام ۲: د Template ټاکنه {#step-2-template-selection}

د plan له ټاکلو وروسته، پېرودونکی خپل د پیل template ټاکي.

- د **Template Selection** field اضافه کړئ
- شته templates د هغه plan له مخې فلټر کېږي چې دوی ټاکلی وي (په لوست ۵ کې تنظیم شوی)
- هر template باید preview image ولري چې د fitness لپاره ځانګړی design وښيي

### ګام ۳: د Account جوړول {#step-3-account-creation}

دا کم وساتئ. یوازې دا راټول کړئ:

- Email address
- Password
- د studio/کاروبار نوم (دا د دوی د site نوم ګرځي)

داسې معلومات مه غواړئ چې په signup کې ورته اړتیا نه لرئ. هر اضافي field conversions کموي.

### ګام ۴: د Site تنظیم {#step-4-site-setup}

- **Site title**: په ګام ۳ کې له داخل شوي studio نوم څخه مخکې ډک کړئ
- **Site URL**: د studio له نوم څخه په اتومات ډول جوړ کړئ (لکه، `ironworks.fitsite.com`)

### ګام ۵: Payment {#step-5-payment}

- د **Payment** field اضافه کړئ
- خپل payment gateway تنظیم کړئ ([Stripe](/user-guide/payment-gateways/stripe) د subscription billing لپاره سپارښتنه کېږي)
- که تاسو په لوست ۵ کې order bumps جوړ کړي وي، د payment ګام مخکې د **Order Bump** field اضافه کړئ

### ګام ۶: تایید {#step-6-confirmation}

- د تایید پیغام د fitness لپاره ځانګړې ژبې سره دود کړئ
- بېلګه: "ستاسو د fitness studio website جوړېږي. تاسو به په څو ثانیو کې خپل نوي site ته ولېږدول شئ."

## د Period Selection Toggle اضافه کول {#adding-a-period-selection-toggle}

که تاسو په خپلو plans کې د بیې بدلونونه تنظیم کړي وي (میاشتنی vs. کلنی)، checkout form ته د **Period Selection** field اضافه کړئ څو پېرودونکي د billing periods ترمنځ toggle وکړي. د لارښوونو لپاره [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) وګورئ.

## د Payment تنظیمول {#configuring-payment}

که تاسو لا تر اوسه payment gateway نه وي تنظیم کړی:

1. **Ultimate Multisite > Settings > Payment Gateways** ته لاړ شئ
2. د [Stripe setup guide](/user-guide/payment-gateways/stripe) یا خپل غوره gateway تعقیب کړئ
3. د test payment سره بشپړ checkout flow وازموئ

د دې جزئیاتو لپاره چې payments څنګه ستاسو account ته ځي [Getting Paid](/user-guide/payment-gateways/getting-paid) وګورئ.

## د Flow ازمویل {#testing-the-flow}

مخکې له دې چې مخکې لاړ شئ، یو بشپړ test signup ترسره کړئ:

1. checkout form په incognito/private browser کړکۍ کې پرانیزئ
2. یو plan وټاکئ
3. یو template غوره کړئ
4. account جوړ کړئ
5. payment بشپړ کړئ (test mode وکاروئ)
6. تایید کړئ چې site د سم template سره جوړ شوی دی

وګورئ چې:

- [ ] د Plan تشریحات روښانه او د ځانګړې برخې لپاره مناسب دي
- [ ] د Template previews د fitness لپاره مناسب designs ښيي
- [ ] د site URL د studio له نوم څخه سم جوړېږي
- [ ] Payment په بریالیتوب پروسس کېږي
- [ ] پېرودونکی له ټاکل شوي template سره په یو فعال site کې رسېږي
- [ ] د تایید emails د fitness لپاره ځانګړې ژبه کاروي

## تر اوسه د FitSite Network {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## په دې لوست کې مو څه جوړ کړل {#what-we-built-this-lesson}

- **یو څو-ګامه checkout form** چې د fitness studio مالکینو لپاره برابر شوی
- **د ځانګړې برخې لپاره ځانګړې ژبه** د signup flow په اوږدو کې
- **لږ خنډ** -- یوازې اړین fields، فعال site ته چټکه لار
- **Payment integration** د test verification سره
- **یو ازمویل شوی له پیل تر پایه flow** له plan selection څخه تر فعال site پورې

---

**بل:** [لوست ۷: خپل یې کول](lesson-7-branding) -- موږ platform white-label کوو او FitSite د یو brand په توګه رامنځته کوو.
