---
title: 'سبق 3: پنهنجي نيٽ ورڪ کي سيٽ اپ ڪرڻ'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# سبق 3: پنهنجو نيٽ ورڪ سيٽ ڪرڻ {#lesson-3-setting-up-your-network}

هاڻي ٺاهڻ جو وقت آهي. هن سبق ۾ توهان Ultimate Multisite انسٽال ڪندا ۽ FitSite نيٽ ورڪ جو بنياد ترتيب ڏيندا. هتي هر فيصلو فٽنيس niche کي ذهن ۾ رکي ڪيو ويو آهي.

## جتي اسان ڇڏي آيا هئاسين {#where-we-left-off}

اسان فٽنيس اسٽوڊيوز کي پنهنجي niche طور چونڊيو ۽ موقعي جي تصديق ڪئي. هاڻي اسان ان خيال کي هڪ ڪم ڪندڙ پليٽ فارم ۾ بدلائينداسين.

## پنهنجي هوسٽنگ چونڊڻ {#choosing-your-hosting}

niche پليٽ فارم لاءِ توهان جي هوسٽنگ جي چونڊ هڪ اڪيلي ويب سائيٽ کان وڌيڪ اهم آهي. توهان هڪ سائيٽ هوسٽ نه ڪري رهيا آهيو -- توهان هڪ اهڙو نيٽ ورڪ هوسٽ ڪري رهيا آهيو جيڪو ڏهن يا سوين سائيٽن تائين وڌندو.

### ڇا ڳولڻو آهي {#what-to-look-for}

- **WordPress Multisite سپورٽ**: سڀ هوسٽ multisite کي سٺي طرح نٿا سنڀالين
- **Wildcard SSL**: subdomain تي ٻڌل نيٽ ورڪن لاءِ لازمي
- **وڌڻ لائق وسيلا**: توهان کي migration کانسواءِ وڌڻ جي گنجائش گهرجي
- **Ultimate Multisite integration**: خودڪار domain mapping ۽ SSL نمايان آپريشنل ڪوشش بچائي ٿو

### سفارش ڪيل طريقو {#recommended-approach}

[مطابقت رکندڙ Providers](/user-guide/host-integrations/closte) فهرست مان هڪ هوسٽ چونڊيو. اهي Ultimate Multisite سان test ڪيا ويا آهن ۽ domain mapping ۽ SSL automation لاءِ توهان کي گهربل integrations فراهم ڪن ٿا.

FitSite لاءِ، اسان subdomain configuration استعمال ڪنداسين. هن جو مطلب آهي ته customer sites شروعاتي طور `studioname.fitsite.com` طور ظاهر ٿينديون، ان کان اڳ جو اهي اختياري طور پنهنجو domain map ڪن.

## WordPress Multisite انسٽال ڪرڻ {#installing-wordpress-multisite}

جيڪڏهن توهان وٽ اڳ ۾ WordPress Multisite installation ناهي:

1. پنهنجي hosting provider تي WordPress انسٽال ڪريو
2. [WordPress Multisite ڪيئن انسٽال ڪجي](/user-guide/getting-started/how-to-install-wordpress-multisite) guide جي پيروي ڪريو
3. جڏهن پڇيو وڃي ته **subdomain** configuration چونڊيو

:::tip ذيلي ڊومين ڇو؟
ذيلي ڊومين هر customer site کي path (`fitsite.com/studio`) بدران پنهنجو الڳ پتو (`studio.fitsite.com`) ڏين ٿا. اهو توهان جي customers لاءِ وڌيڪ professional آهي ۽ permalink conflicts کان بچائي ٿو. تفصيلي comparison لاءِ [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ڏسو.
:::

## Ultimate Multisite انسٽال ڪرڻ {#installing-ultimate-multisite}

[Ultimate Multisite انسٽال ڪرڻ](/user-guide/getting-started/installing-ultimate-multisite) guide جي پيروي ڪريو ته جيئن:

1. plugin کي network-wide upload ۽ activate ڪريو
2. [سيٽ اپ وزرڊ](/user-guide/getting-started/multisite-setup-wizard) هلائو

setup wizard دوران، FitSite niche کي ذهن ۾ رکو:

- **ڪرنسي**: اها currency سيٽ ڪريو جيڪا توهان جا fitness studio customers استعمال ڪن ٿا
- **ڪمپني نالو**: "FitSite" (يا توهان جو چونڊيل brand name)
- **ڪمپني logo**: پنهنجو brand logo upload ڪريو -- اهو invoices ۽ emails تي ظاهر ٿيندو

## فٽنيس Niche لاءِ ترتيب ڏيڻ {#configuring-for-the-fitness-niche}

Ultimate Multisite انسٽال ٿيڻ کان پوءِ، اهي niche-specific configuration چونڊون ڪريو:

### عام Settings {#general-settings}

**Ultimate Multisite > Settings** ڏانهن وڃو ۽ configure ڪريو:

- **سائيٽ نالو**: FitSite
- **Default role**: Administrator -- fitness studio owners کي پنهنجي site content تي مڪمل control گهرجي
- **Registration**: user registration enable ڪريو ته جيئن studio owners پاڻ sign up ڪري سگهن

### Email Configuration {#email-configuration}

توهان جي system emails کي توهان جي niche جي ٻولي ڳالهائڻ گهرجي. **Ultimate Multisite > Settings > Emails** ڏانهن وڃو ۽ customize ڪريو:

- generic "your new site" language کي fitness-specific messaging سان بدلائو
- Example welcome subject: "توهان جي fitness studio website تيار آهي"
- Example welcome body: انهن جي studio، classes، ۽ انهن جي fitness site سان شروع ڪرڻ جو حوالو ڏيو

اسان Lesson 8 (Customer Onboarding) ۾ انهن کي وڌيڪ refine ڪنداسين، پر هاڻي tone set ڪرڻ سان يقيني ٿيندو ته ابتدائي test signups به niche-specific محسوس ٿين.

### Domain Configuration {#domain-configuration}

جيڪڏهن compatible hosting provider استعمال ڪري رهيا آهيو، domain mapping هاڻي configure ڪريو:

1. **Ultimate Multisite > Settings > Domain Mapping** ڏانهن وڃو
2. پنهنجي مخصوص host لاءِ integration guide جي پيروي ڪريو
3. test ڪريو ته new subsites کي SSL automatically ملي ٿو

اهو يقيني بڻائي ٿو ته جڏهن اسان ايندڙ lesson ۾ templates ۽ test sites ٺاهڻ شروع ڪنداسين، سڀ ڪجهه end to end ڪم ڪندو.

## FitSite Network هن وقت تائين {#the-fitsite-network-so-far}

هن lesson جي آخر ۾، هتي اهو آهي جيڪو توهان وٽ آهي:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## هن Lesson ۾ اسان ڇا ٺاهيو {#what-we-built-this-lesson}

- **هڪ ڪم ڪندڙ WordPress Multisite** installation subdomain mode ۾
- **Ultimate Multisite installed** ۽ FitSite branding سان configured
- **Hosting ۽ SSL** وڌندڙ network لاءِ set up
- **Domain mapping** توهان جي hosting provider لاءِ configured
- **Niche-specific email tone** پهرين ڏينهن کان قائم ڪيو ويو

---

**اڳيون:** [Lesson 4: Niche Templates ٺاهڻ](lesson-4-templates) -- اسان site templates ٺاهينداسين جيڪي fitness studio owners واقعي استعمال ڪرڻ چاهيندا.
