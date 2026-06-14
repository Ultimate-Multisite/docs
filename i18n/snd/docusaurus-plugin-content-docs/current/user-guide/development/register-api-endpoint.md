---
title: API اينڊپوائنٽ رجسٹر ڪريو
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint

اِس ٹیوٹوریل میں، آپ سیکھیں گے کہ اپنے نیٹ ورک کے لیے ایک نئے کسٹمر کا پورا آن بورڈنگ عمل بنانے کے لیے Ultimate Multisite /register API endpoint کو کیسے استعمال کرنا ہے اور اسے Zapier کے ساتھ کیسے کرنا ہے۔

یہ endpoint POST میتھڈ استعمال کرتی ہے اور اسے URL _**https://yoursite.com/wp-json/wu/v2/register**_ سے بلایا جاتا ہے۔ اس کال میں، آپ کے نیٹ ورک کے اندر 4 عمل انجام دیے جائیں گے:

  * ایک نیا WordPress صارف یا یوزر آئی ڈی کے ذریعے اس کی شناخت کر کے بنایا جائے گا۔

  * Ultimate Multisite میں ایک نیا کسٹمر یا کسٹمر آئی ڈی کے ذریعے اس کی شناخت کر کے بنایا جائے گا۔

  * WordPress نیٹ ورک پر ایک نئی سائٹ بنائی جائے گی۔

  * آخر میں، Ultimate Multisite میں ایک نیا ممبرشپ (Membership) بنایا جائے گا۔

اس عمل کے لیے، آپ کو اپنی API credentials کی ضرورت ہوگی۔ انہیں حاصل کرنے کے لیے، اپنے نیٹ ورک ایڈمن پینل پر جائیں، **Ultimate Multisite > Settings** پر جائیں > **API & Webhooks** دیکھیں، اور API Settings سیکشن تلاش کریں۔

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

یہ API سیٹنگز کے صفحے کا مکمل نظارہ ہے:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** منتخب کریں اور اپنی API credentials حاصل کریں۔

اب، آئیے endpoint کو دیکھتے ہیں اور پھر Zapier میں ایک رجسٹریشن ایکشن (action) بناتے ہیں۔

## Endpoint body parameters

آئیے ان کم از کم معلومات کا جائزہ لیتے ہیں جو ہمیں endpoint کو بھیجنے کے لیے درکار ہیں۔ اس آرٹیکل کے آخر میں، آپ کو مکمل کال مل جائے گی۔

### Customer

یہ وہ معلومات ہیں جو یوزر اور Ultimate Multisite کسٹمر بنانے کے عمل کے لیے ضروری ہیں:

"customer_id" : integer

توهان جي ڪسٹمر ائڊي کي توهان جي نڪرن ۾ بھیجڻ ممکن آهي. جيڪڏهن اهو جمع نه ڪيو وڃي، ته هي معلومات هڪ نئين ڪسٹمر ۽ نئين WordPress صارف کي 만들ڻ لاءِ استعمال ڪيون وينديون آهن. صارف ائڊي کي به ڪسٹمر ائڊي جي نفس طرح بجيترائي سگهجي ٿو.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

اس انڪسٽ ۾ اسان کي صرف ممبره جي حالت (Membership Status) جي ضرورت آهي.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" مان ڪا به حالت هجي سگهي ٿي },

### **Products**

پروڊڪٽس کي توهان جي نڪرن کان 1 يا وڌيڪ پروڊڪٽ ائڊي جو هڪ اري (array) ڏني ويندي آهي. يقين رکجو، هي اينڊ پوائنٽ پروڊڪٽس نٿو پيدا ڪري. پروڊڪٽس کڻڻ جي بهتر سمجهڻ لاءِ Ultimate Multisite جي دعنوما کي چكهو ته پروڊڪٽ پيدا ڪرڻ جو اينڊ پوائنٽ ڪيئن آهي.

**"products" : [1,2],**

### Payment

ممبره جي طرح، اسان کي صرف حالت (status) جي ضرورت آهي.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" مان ڪا به حالت هجي سگهي ٿي },**

### Site

۽ جسم کي بند ڪرڻ لاءِ اسان کي سائيٽ جو URL ۽ ٽائٽل، ٻئي Site object اندر.

**"site" : { "site_url" : "string", "site_title" : "string" }**

ريڊجيستر اينڊ پوائنٽ جو جواب نئين بڻايون ممبره جي معلومات سان هڪ اري (array) طور واپس اچي ٿو.

## Zapier ۾ عمل (action) پيدا ڪرڻ

هي نئين ۽ مضبوط اڪاؤنٽ پيدا ڪرڻ جو اينڊ پوائنٽ شروع ٿيڻ سان، توهان کي Zapier ۾ هڪ نئين عمل (action) تک رسائي ملندي.

توهان ڄاڻو ٿا ته Zapier جي نئين نسخه جي تمام صلاحيتن کي ڪيئن استعمال ڪري سگهو ٿا؟ وڌيڪ سکڻ لاءِ هتي لکو. (لنڪ؟)

### عمل پيدا ڪرڻ

Google Forms جو استعمال ڪرڻ لاءِ registration endpoint کي Zapier سان ڪيئن استعمال ڪجي ان کي بهتر ڏيکڻ لاءِ، آءُن اسان Google Forms سان هڪ integration ٺاهيون ٿا. هر وقت هي form پورو ٿئي ۽ معلومات form جي answer sheet ۾ محفوظ ٿيندي آهي، Ultimate Multisite network ۾ هڪ نئين membership جو creation ٿيندو.

Google Forms ۾، هڪ form banaو ته جنه ان network ۾ نئين membership کي create ڪرڻ لاءِ ضروري minimum fields سان گڏ هجي.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ان کان پوءِ Zapier ۾، هڪ نون Zap banaو ۽ اسان واري spreadsheet ۾ connect ٿيل Google جو form select ڪريو جتي data محفوظ آهي.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

پورو! Google Forms جو form Zapier سان connect ٿي چڪو آهي ۽ network سان integrate ڪرڻ لاءِ تيار آهي. اها Action تي وڃون ٿا جيڪو Trigger کان ناتجربت طور پر هر وقت پورو ٿيندڙ Google Forms جي ڪري ٿيندو.

نئين Ultimate Multisite app کي locate ڪريو ۽ ان کي select ڪريو. هي قسم جي Zap لاءِ Register option select ڪريو.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

هي پهرين قدم کان پوءِ، account select ڪريو جنه is Zap سان connect ٿيندو.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

هي سڄي عمل جو سڀ کان حساس حصو آهي. اسان Google Forms مان آيل fields کي register endpoint لاءِ ضروري minimum fields سان match ڪرڻ جي ضرورت آهي، جهڙوڪ هي article جي پچھلي section ۾ ڏيکيل آهي.

هي مثال ۾، اسان کي صرف username، email، password، name ۽ website جو URL configure ڪرڻ جي ضرورت آهي. بغير ان کان باقی سڀ شي pre-determined رهيون ٿيون ته جيئن هن Google Forms تي جن membership generation hon سادي product ۽ status pattern جو پورو ڪن.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

جي معلومات ترتیب ڏيڻ کان پوءِ، آخری تجربو تي وڃو. آخر سڪرين تي توهان کي سڀاڻيون جيڪي اينڊپوائنٽ (endpoint) تي بھیجڻ وارون آهن، انهن جي متعلق معلومات ۽ اهڙيون سهوليتون ڏسيل وينديون آهن جيڪي خالي بجيتر ڇڏڻ وارون آهن.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

پنهنجو نئوا Zap تجربو ڪريو، اهو ڪامياب ٿي وڃي. جيڪڏهن ڪا غلطي ٿئي ته سڀني سهوليتن کي چڪر ڪريو ۽ ڏسو ته اهي صحيح طور تي ڇڏيا جا ويا آهن يا نه. جهڙوڪ معلومات گهڻي آهي، ڪجهه ڳالهيون نظر نه آڻ سگهن ٿيون.

### كامل اينڊپوائنٽ پارامائٽرس (Complete endpoint parameters)

هي كامل ڪال ۽ سهوليتن جي سڀني possibilities جو ڏيڪ آهي جيڪي بھیجي سگهن ٿيون:

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
