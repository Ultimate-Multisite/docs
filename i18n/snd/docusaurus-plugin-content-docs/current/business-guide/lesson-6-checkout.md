---
title: 'سبق 6: سائن اپ جو تجربو'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# سبق 6: سائن اپ جو تجربو

checkout flow اهو هنڌ آهي جتي دلچسپي آمدني بڻجي ٿي. منجهائيندڙ يا عام signup عمل گراهڪ وڃائي ٿو. اهڙو niche-specific flow جيڪو انهن جي ٻولي ڳالهائي ۽ بي تڪليف محسوس ٿئي، انهن کي تبديل ڪري ٿو.

## جتي اسان ڇڏيو هو {#where-we-left-off}

FitSite ۾ templates ۽ plans ترتيب ڏنل آهن. هاڻي اسان registration ۽ checkout تجربو ٺاهيون ٿا جيڪو فٽنيس اسٽوڊيو مالڪن کي ادا ڪندڙ گراهڪن ۾ بدلائي ٿو.

## Registration Flow کي سمجهڻ {#understanding-the-registration-flow}

Ultimate Multisite جا checkout forms مڪمل طور تي حسب ضرورت multi-step forms آهن. FitSite لاءِ، اسان اهڙو flow چاهيون ٿا جيڪو:

1. محسوس ٿئي ته اهو فٽنيس ڪاروبارن لاءِ ٺاهيو ويو آهي
2. صرف اها معلومات گڏ ڪري جيڪا گهربل آهي
3. گراهڪ کي جيترو جلد ممڪن هجي ڪم ڪندڙ سائيٽ تائين پهچائي

مڪمل فني حوالو لاءِ [Registration Flow](/user-guide/configuration/the-registration-flow) ڏسو.

## FitSite Checkout جي ڊيزائن {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** ڏانهن وڃو ۽ نئون form ٺاهيو.

### قدم 1: Plan Selection {#step-1-plan-selection}

فٽنيس اسٽوڊيو مالڪ جيڪو پهريون ڏسي، اهو plans هجڻ گهرجن، انهن اصطلاحن ۾ پيش ڪيل جيڪي هو سمجهن ٿا.

- **Pricing Table** field شامل ڪريو
- ان کي اهڙي طرح ترتيب ڏيو جو سڀ ٽي FitSite plans ڏيکاري
- Lesson 5 ۾ جيڪي plan descriptions توهان لکيا، اهي هتي ظاهر ٿيندا -- پڪ ڪريو ته اهي فٽنيس ڪاروباري ضرورتن سان ڳالهائين، فني خاصيتن سان نه

:::tip Niche ٻولي اهم آهي
"1 GB storage" جم مالڪ لاءِ ڪجهه به معنيٰ نٿو رکي. "هڪ پروفيشنل اسٽوڊيو ويب سائيٽ لاءِ توهان کي گهربل سڀ ڪجهه" سڀ ڪجهه معنيٰ رکي ٿو. plan descriptions پنهنجي گراهڪ جي ٻولي ۾ لکو.
:::

### قدم 2: Template Selection {#step-2-template-selection}

plan چونڊڻ کان پوءِ، گراهڪ پنهنجو شروعاتي template چونڊيندو آهي.

- **Template Selection** field شامل ڪريو
- موجود templates انهن جي چونڊيل plan جي بنياد تي فلٽر ٿين ٿا (Lesson 5 ۾ ترتيب ڏنل)
- هر template وٽ preview image هجڻ گهرجي جيڪا fitness-specific ڊيزائن ڏيکاري

### قدم 3: Account Creation {#step-3-account-creation}

هن کي گهٽ ۾ گهٽ رکو. صرف هي گڏ ڪريو:

- Email address
- Password
- اسٽوڊيو/ڪاروبار جو نالو (هي سندن سائيٽ جو نالو بڻجي ٿو)

signup وقت اهڙي معلومات نه پڇو جيڪا توهان کي گهربل ناهي. هر اضافي field conversions گھٽائي ٿو.

### قدم 4: Site Setup {#step-4-site-setup}

- **Site title**: قدم 3 ۾ داخل ڪيل اسٽوڊيو نالي مان اڳواٽ ڀريو
- **Site URL**: اسٽوڊيو نالي مان پاڻمرادو ٺاهيو (مثال طور، `ironworks.fitsite.com`)

### قدم 5: Payment {#step-5-payment}

- **Payment** field شامل ڪريو
- پنهنجو payment gateway ترتيب ڏيو ([Stripe](/user-guide/payment-gateways/stripe) subscription billing لاءِ سفارش ڪيل آهي)
- جيڪڏهن توهان Lesson 5 ۾ order bumps ٺاهيا هئا، payment قدم کان اڳ **Order Bump** field شامل ڪريو

### قدم 6: Confirmation {#step-6-confirmation}

- confirmation message کي fitness-specific ٻولي سان حسب ضرورت بڻايو
- مثال: "توهان جي فٽنيس اسٽوڊيو ويب سائيٽ ٺهي رهي آهي. ڪجهه سيڪنڊن ۾ توهان کي پنهنجي نئين سائيٽ ڏانهن موڪليو ويندو."

## Period Selection Toggle شامل ڪرڻ {#adding-a-period-selection-toggle}

جيڪڏهن توهان پنهنجي plans ۾ قيمت جون variations سيٽ ڪيون آهن (ماهوار بمقابله سالياني)، checkout form ۾ **Period Selection** field شامل ڪريو ته جيئن گراهڪ billing periods جي وچ ۾ toggle ڪري سگهن. هدايتن لاءِ [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ڏسو.

## Payment ترتيب ڏيڻ {#configuring-payment}

جيڪڏهن توهان اڃا payment gateway سيٽ نه ڪيو آهي:

1. **Ultimate Multisite > Settings > Payment Gateways** ڏانهن وڃو
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) يا پنهنجي پسنديده gateway جي پيروي ڪريو
3. test payment سان مڪمل checkout flow آزمائي ڏسو

تفصيل لاءِ [Getting Paid](/user-guide/payment-gateways/getting-paid) ڏسو ته payments توهان جي account تائين ڪيئن پهچن ٿا.

## Flow جي جاچ {#testing-the-flow}

اڳتي وڌڻ کان اڳ، مڪمل test signup ڪريو:

1. checkout form کي incognito/private browser window ۾ کوليو
2. plan چونڊيو
3. template چونڊيو
4. account ٺاهيو
5. payment مڪمل ڪريو (test mode استعمال ڪريو)
6. پڪ ڪريو ته سائيٽ صحيح template سان ٺهي آهي

چيڪ ڪريو ته:

- [ ] Plan descriptions صاف ۽ niche-specific آهن
- [ ] Template previews فٽنيس لاءِ مناسب ڊيزائن ڏيکارين ٿا
- [ ] سائيٽ URL اسٽوڊيو نالي مان صحيح ٺهي ٿو
- [ ] Payment ڪاميابي سان process ٿئي ٿو
- [ ] گراهڪ چونڊيل template سان ڪم ڪندڙ سائيٽ تي پهچي ٿو
- [ ] Confirmation emails fitness-specific ٻولي استعمال ڪن ٿيون

## هينئر تائين FitSite Network {#the-fitsite-network-so-far}

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

## هن سبق ۾ اسان ڇا ٺاهيو {#what-we-built-this-lesson}

- **multi-step checkout form** جيڪو فٽنيس اسٽوڊيو مالڪن لاءِ ترتيب ڏنل آهي
- signup flow ۾ هر هنڌ **niche-specific language**
- **گهٽ ۾ گهٽ رڪاوٽ** -- صرف ضروري fields، ڪم ڪندڙ سائيٽ تائين تيز رستو
- test verification سان **Payment integration**
- plan selection کان ڪم ڪندڙ سائيٽ تائين **آزمايل end-to-end flow**

---

**اڳيون:** [سبق 7: ان کي پنهنجو بڻائڻ](lesson-7-branding) -- اسان platform کي white-label ڪريون ٿا ۽ FitSite کي brand طور قائم ڪريون ٿا.
