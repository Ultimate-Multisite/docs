---
title: زپيار انٽيغريشن
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite کي Zapier سان جوڙڻ (Integrating Ultimate Multisite with Zapier) {#integrating-ultimate-multisite-with-zapier}

اڪيلي هڪ مضمون ۾، اسان [Webhooks](webhooks.md) بابت گپ ڪيو هو ۽ انهن کي ٽيئر پارٽي ايمپليكيشن سان جوڙڻ لاءِ ڪيئن استعمال ڪري سگهجي ٿو.

Webhooks استعمال ڪرڻ ڪيتري ٿورو گهڻو پيچيده آهي ڇاڪاڻ ته ان ۾ ڪوڊنگ ۽ payloads کي پکڙڻ جي عاليه علم جي ضرورت هوندي آهي. **Zapier** توهان لاءِ ان کان بچڻ جو هڪ طريقو آهي.

Zapier جي 5000+ اپليڪيشنن سان گهٽ ڪرڻ جو رابطو آهي جيڪا مختلف اپليكيشنن بابت رابطو کي آسان بڻائي ٿي.

توهان **Triggers** bana سگهو ٿا جيڪي تڏهن شروع ٿيندا جڏهن توهان جي نڪر تي ڪجهه واقع ٿئي (مثال طور، هڪ اڪاؤنٽ ٺهي وڃي ۽ `account_create` ان ايڪائٽ کي شروع ڪري). يا توهان **Actions** جنريٽ ڪري سگهو ٿا جيڪي تنهن نڪر تي ٻاهرين واقعن تي رد عمل ڏيندا (مثال طور، توهان جي Ultimate Multisite نڪر ۾ هڪ نون اڪاؤنٽ ممبر شپس ٺاهڻ).

هي ممکن آهي ڇاڪاڻ ته **Ultimate Multisite Zapier's triggers** ۽ actions [REST API](https://developer.ultimatemultisite.com/api/docs/) جي مدد سان چالو ٿين ٿا.

## شروع ڪيئن ڪريون (How to start) {#how-to-start}

پهرين، Zapier جو اپليڪيشن لسٹ ۾ Ultimate Multisite کي ڳوليائيندوهو. يا ٻئي طور، توهان [هي لنک](https://zapier.com/apps/wp-ultimo/integrations) تي کليڪ ڪري سگهو ٿا.

پنهنجي dashboard تي وڃو ۽ هيٺ ڏنل سائیڊبَار ۾ **+** **Create Zap** بٽڻ تي ڪلڪ ڪريو ته جيئن هڪ نون Zap set up ڪري سگهو.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

توهان Zap creation page تي ريڊيڪٽ ٿيندو.

Search box ۾ "wp ultimo" لکيو. **Beta** ورجن جو خيار چونڊڻ لاءِ کليڪ ڪريو.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

پنهنجي اپليڪيشن چونڊڻ کان پوء، موجودن ايڪائٽ کي چونڊيو: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

هڪ نئين چيز لاءِ اسان کي Zapier کي **توهان جي نڪر** تک رسائي ڏيڻ گهرجي. **Sign in** ۾ کليڪ ڪرڻ سان هڪ نون ويندو کليل ظاهر ٿيندو جنهن کي **API credentials** جي ضرورت هجي.

![API credentials खातिर Zapier साइन इन प्रम्प्ट](/img/admin/webhooks-list.png)

پنهنجي نیٹ ورک ایڈمن پینل تي جاؤ ۽ **Ultimate Multisite > Settings** > **API & Webhooks** تي وڃو ۽ API Settings جو حصو ڏسو.

**Enable API** جو آپشن چونڊ ڪريو ڇاڪاڻ ته ان ڪنيڪشن کي کام ڪرڻ لاءِ اهو ضروري آهي.

![API and Webhooks settings مع API Settings ۽ Enable API опشن سان](/img/admin/settings-api-webhooks.png)

API Key ۽ API Secret فیلڊن تي **Copy to Clipboard** ايڪنٽ استعمال ڪريو ۽ ان قيمتن کي integration screen تي پیسٽ ڪريو.

URL فیلڊ ۾، پنهنجي نیٹ ورک جو پورو URL رکجو، جنهن ۾ پروٽوڪول (HTTP يا HTTPS) شامل هجي.

![Zapier integration screen مع API Key، Secret، ۽ URL فیلڊن سان](/img/admin/webhooks-list.png)

نالي **Yes, Continue** بٽون تي ڪلڪ ڪريو ته هيٺين قدم تي وڃڻ لاءِ. جيڪڏهن سڀ شي صحيح ٿي ويندي، تنهنجي نئين ڪنيڪشن ٿيل حساب سان گهڻي خوشي ٿيندي! نئين trigger کي ٺاهڻ لاءِ **Continue** تي ڪلڪ ڪريو.

## نئين Trigger کي ڪيئن ٺاهيو {#how-to-create-a-new-trigger}

جڏهن ته توهان جو account connect ٿي ويو آهي، تڏهن توهان موجود موجود events ڏس سگهو ٿا. هي tutorial لاءِ اسان **payment_received** event چونڊين ٿا.

![Zapier trigger ۾ payment_received event چونڊڻ](/img/admin/webhooks-list.png)

جڏهن ته event چونڊجي وڃي ۽ توهان **continue** تي ڪلڪ ڪريو، ته هڪ **test step** ظاهر ٿيندو.

![Zapier test step جو trigger لاءِ](/img/admin/webhooks-list.png)

هي مرحلو آهي جتي Zapier تصديق ڪندو ته توهان جو Zap ان event لاءِ **خاص payload کي کڻي سگهي ٿو**. هيٺ ڏنل طرح جي ٻين events لاءِ، هي ئي ساخت (structure) سان معلومات ڦرائي ويندي.

![Zapier trigger test successfully with payload](/img/admin/webhooks-list.png)

في اسبورتھ، ہمارا ٹیسٹ **کامیابی سے مکمل ہو گیا** اور پے لوڈ کے مثال معلومات واپس کر دی ہیں۔ یہ مثال معلومات ہمیں ایکشنز بنانے میں رہنمائی کرنے کے لیے مفید ہوں گی۔ آپ کا ٹرگر اب بنا دیا گیا ہے اور اسے دیگر ایپلی کیشنز سے جوڑنے کے لیے تیار ہے۔

## ایکشنز کیسے بنائیں {#how-to-create-actions}

ایکشنز دوسرے ٹرگرز کی معلومات کا استعمال کرتے ہوئے آپ کے نیٹ ورک میں نئی اندراجات بنانے کے لیے استعمال ہوتے ہیں۔

**ایک ایکشن سٹیپ بناتے وقت**، آپ Ultimate Multisite **Beta** اور **Create Items on Ultimate Multisite** کا آپشن منتخب کریں گے۔

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

اگلے قدم میں، آپ یا تو اپنی تصدیق (authentication) بنائیں گے، جیسا کہ ہم نے **How to start** میں کیا تھا، یا ایک بنائی ہوئی تصدیق کا انتخاب کریں گے۔ اس ٹیوٹوریل میں ہم پہلے سے بنائی گئی وہی تصدیق منتخب کریں گے۔

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ایکشن سیٹ اپ کرنا {#setting-up-the-action}

یہ **ایکشن کا اہم قدم** ہے اور یہاں چیزیں تھوڑی مختلف ہیں۔ پہلی معلومات جو آپ منتخب کریں گے وہ **Item** ہوگی۔ Item آپ کے نیٹ ورک کا **معلومات ماڈل** ہوتا ہے جیسے **Customers, Payments, Sites, Emails** وغیرہ۔

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

جب آپ کوئی آئٹم منتخب کریں گے، تو فارم منتخب کردہ آئٹم کے لیے ضروری اور اختیاری فیلڈز کو ترتیب دے کر دکھائے گا۔

مثال کے طور پر، جب آپ **Customer** آئٹم منتخب کرتے ہیں، تو فارم میں وہ سب کچھ شامل ہو جائے گا جو نیٹ ورک میں ایک نیا Customer بنانے کے لیے ضروری ہے۔

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

تمام **required** نشان زد شدہ فیلڈز بھرنے اور continue پر کلک کرنے کے بعد، آخری سکرین آپ کو بھری ہوئی فیلڈز اور ان فیلڈز کو خالی چھوڑے گئے فیلڈز دکھائے گی۔

![Zapier عمل جي تجربو ڏيکاري واريڪاري ۾ پورو ۽ ان کي پورو ڪرڻ کان پوءِ توهان جو عمل ترتیب وارو ٿيو آهي. اهو به اهم آهي ته توهان جي نٽويڪ تي هيٺ ڏيکاري ته هلڻ جو عمل (action) توهان جي عمل جي تجربو سان بنا ڪيل شي آهي يا نه.
