---
title: API اينڊ پيئسٽ پوائنٽ رجسٹر ڪريو
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint

اِس ٹیوٹوریل میں، آپ سیکھیں گے کہ اپنے نیٹ ورک کے لیے ایک نئے کسٹمر کا پورا آن بورڈنگ عمل کیسے شروع کرنا ہے اور اسے Zapier کے ذریعے کیسے کرنا ہے۔

یہ اینڈ پوائنٹ POST میتھڈ استعمال کرتا ہے اور اسے URL _**https://yoursite.com/wp-json/wu/v2/register**_ سے بلایا جاتا ہے۔ اس کال میں، آپ کے نیٹ ورک کے اندر 4 عمل انجام دیے جائیں گے:

  * ایک نیا WordPress یوزر یا صارف کی شناخت کے ذریعے بنایا جائے گا۔

  * Ultimate Multisite میں ایک نیا کسٹمر یا کسٹمر کی شناخت کے ذریعے بنایا جائے گا۔

  * WordPress نیٹ ورک پر ایک نئی سائٹ بنائی جائے گی۔

  * آخر میں، Ultimate Multisite میں ایک نیا ممبرشپ (Membership) بنائی جائے گی۔

اس عمل کے لیے، آپ کو اپنے API credentials کی ضرورت ہوگی۔ انہیں حاصل کرنے کے لیے، اپنے نیٹ ورک ایڈمن پینل پر جائیں، **Ultimate Multisite > Settings** میں جائیں > **API & Webhooks** دیکھیں، اور API Settings سیکشن تلاش کریں۔

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

یہ API سیٹنگز کے صفحے کا مکمل نظارہ ہے:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** منتخب کریں اور اپنے API credentials حاصل کریں۔

اب، آئیے اینڈ پوائنٹ کو دیکھتے ہیں اور پھر Zapier میں ایک رجسٹریشن ایکشن (registration action) بناتے ہیں۔

## Endpoint body parameters {#endpoint-body-parameters}

آئیے ان کم از کم معلومات کا جائزہ لیتے ہیں جو ہمیں اینڈ پوائنٹ پر بھیجنے کی ضرورت ہے۔ اس مضمون کے آخر میں، آپ کو مکمل کال مل جائے گی۔

### Customer {#customer}

یہ وہ معلومات ہیں جو یوزر اور Ultimate Multisite کسٹمر بنانے کے عمل کے لیے ضروری ہیں:

"customer_id" : integer

توهان جي ڪسٹمر ائڊي کي توهان جي نڪرن ۾ بھیجڻ ممکن آهي. جيڪڏهن اهو جمع نه ڪيو وڃي، ته هيٺ ڏنل معلومات نئين ڪسٹمر ۽ نئين WordPress صارف کي 만들ڻ لاءِ استعمال ڪيا ويندا آهن. صارف ائڊي کي به ڪسٹمر ائڊي جي نفس طرح بجيترائي سگهجي ٿو.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

اس انڪسٽ ۾ اسان کي صرف ممبره جي حالت (Membership Status) جي ضرورت آهي.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" مان ڪا به }

### **Products** {#products}

پروڊڪٽس کي توهان جي نڪرن کان 1 يا وڌيڪ پروڊڪٽ ائڊي جو هڪ array ڏني ويندي آهي. يقين رکجو، هي endpoint پروڊڪٽس نٿو کڻي (create) ٿئي. پروڊڪٽس کڻڻ بابت Ultimate Multisite جي documentation کي بهتر سمجهڻ لاءِ چكهو ڪريو.

**"products" : [1,2],**

### Payment {#payment}

جيس ممبره جي حالت جي طرح، اسان کي صرف حالت جي ضرورت آهي.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" مان ڪا به }**

### Site {#site}

۽ جسم کي بند ڪرڻ لاءِ اسان کي سائيٽ جو URL ۽ Titile (Title) جي ضرورت آهي، ٻئي Site object اندر.

**"site" : { "site_url" : "string", "site_title" : "string" }**

register endpoint جو جواب نئين ممبره جي معلومات سان هڪ array طور واپس اچي ٿو.

## Zapier ۾ عمل (action) کڻڻ {#creating-an-action-in-zapier}

هي نئين ۽ مضبوط اڪاؤنٽ کڻڻ وارن endpoint جي داخل ٿيڻ سان، توهان کي Zapier ۾ هڪ نون action به ملي ويندي آهي.

توهان ڄاڻو ٿا ته Zapier جو نئين نسخه جي ڪنهن به فائدن کي ڪيئن استعمال ڪرڻ ۽ پيش ڪرڻ آهي؟ وڌيڪ سکڻ لاءِ هتي لکو (link?)

### عمل کڻڻ {#creating-an-action}

Google Forms جو استعمال ڪرڻ لاءِ registration endpoint کي Zapier سان ڪيئن استعمال ڪجي ان کي بهتر ڏيکاري لاءِ، اسان Google Forms سان هڪ integration banaوندون. هر وقت هيءَ form پورو ٿئي ۽ معلومات form جي answer sheet ۾ محفوظ ٿي ويندي آهي، Ultimate Multisite network ۾ هڪ نئين membership جو creation ٿيندو.

Google Forms ۾، هڪ form banaو ته جنه ان network ۾ نئين membership جو creation ڪرڻ لاءِ ضروري minimum fields سان گڏ هجي.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

هڪ Zapier ۾، هڪ نون Zap banaو ۽ هيءَ created form کي Google ۾ connect کرو جتي data محفوظ ٿيندو آهي ان spreadsheet سان.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

پورو! Google Forms form جو Zapier سان connection ٿي ويو آهي ۽ network سان integrate ڪرڻ لاءِ تيار آهي. اها Action تي وڃون جيڪو Trigger کان نتيجي طور تي ٿيندو جنهن Google Forms هر وقت پورو ٿيندڙ جي ڪري trigger ڪندو آهي.

نئين Ultimate Multisite app کي locate کرو ۽ ان کي select کرو. هيءَ قسم جي Zap لاءِ Register option select کرو.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

هي سڀاڻي قدم کان پوءِ، account select کرو جنهن سان هن Zap connect ٿيندي آهي.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

هي پوري process جو سڀ کان حساس حصو آهي. اسان Google Forms مان اچڻ واري fields کي register endpoint لاءِ ضروري minimum fields سان match ڪرڻ گهرجي، جهڙوڪ هيءَ article جي اڳي وارن section ۾ ڏيکيل آهي.

هي مثال ۾، اسان کي صرف username، email، password، name ۽ website جو URL configure ڪرڻ جي ضرورت آهي. بغير ان جو باقی pre-determined رهندو ته جيئن هن Google Forms تي جن membership generation ٿينديون سڀني واري product ۽ status جو pattern هڪ ئي رهيو.

<!-- Screenshot unavailable: Google Forms aur Ultimate Multisite register endpoint ke beech Zapier field mapping -->

جماعت معلومات سیٹ کر کے، آخری ٹیسٹ پر جائیں۔ آخری سکرین پر آپ دیکھ سکیں گے کہ کون سی تمام فیلڈز اینڈ پوائنٹ کو بھیجی جائیں گی، ان کی متعلقہ معلومات اور وہ فیلڈز جو خالی بھی بھیجی جائیں گی۔<!-- Screenshot unavailable: register endpoint ko bheji jaane wali sabhi fields dikhate hue Zapier test screen -->

اپنے نئے Zap کا ٹیسٹ کریں اور یہ کامیابی سے مکمل ہونا چاہیے۔ اگر کوئی غلطی آتی ہے تو تمام فیلڈز چیک کریں اور دیکھیں کہ کیا وہ صحیح طریقے سے بھیجی جا رہی ہیں۔ معلومات بہت زیادہ ہوتی ہے، اس لیے کچھ چیزیں نظر نہیں آ سکتیں۔

### مکمل اینڈ پوائنٹ پیرامیٹرز {#complete-endpoint-parameters}

یہ مکمل کال اور ان فیلڈز کے تمام امکانات ہیں جو بھیجے جا سکتے ہیں۔

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" ان میں سے کوئی ایک، "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" ان میں سے کوئی ایک }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
