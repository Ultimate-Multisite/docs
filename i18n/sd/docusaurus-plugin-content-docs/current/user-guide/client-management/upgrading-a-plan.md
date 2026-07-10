---
title: پلان اپ گریڊ ڪرڻ
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# پلان اپ گریڈ کرنا (v2) {#upgrading-a-plan-v2}

_**اہم نوٹ: یہ آرٹیکل Ultimate Multisite کے ورژن 2.x کا حوالہ دیتا ہے۔**_

آپ کے کسٹمرز کسی بھی وقت اپنے پلان کو اپ گریڈ کر سکتے ہیں۔ وہ یا تو کسی دوسرے پلان پر اپ گریڈ کر سکتے ہیں یا آپ کے نیٹ ورک پر دستیاب کسی بھی اضافی سروس یا پیکج خرید سکتے ہیں۔

اس ٹیوٹوریل میں ہم یہ دیکھیں گے کہ وہ اپنا پلان کیسے اپ گریڈ کر سکتے ہیں اور اپ گریڈ کے عمل کے بعد کیا ہوتا ہے۔

اپنا پلان اپ گریڈ کرنے کے لیے، آپ کے کسٹمرز کو اپنے ڈیش بورڈ تک رسائی حاصل کرنی چاہیے اور **Account** پیج پر جانا چاہیے۔

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Account پیج پر، انہیں اپنی موجودہ رکنیت (membership) اور اس سے منسلک پلان دکھایا جائے گا۔ کسی دوسرے پلان پر اپ گریڈ کرنے کے لیے، انہیں **Your Membership** سیکشن کے اوپر دائیں کونے میں **Change** پر کلک کرنا ہوگا۔

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

انہیں ایک چیک آؤٹ فارم پر ری ڈائریکٹ کیا جائے گا جہاں تمام دستیاب پلانز دکھائے جائیں گے۔

وہ یہ بھی دیکھ سکیں گے کہ ان کے موجودہ پلان کے لیے کون سی **services and packages available** ہیں، اگر وہ صرف کوئی مخصوص سروس یا پیکج (جیسے ہمارے یہاں مثال میں غیر محدود وزٹس یا ڈسک اسپیس) خریدنا چاہتے ہیں اور پلان اپ گریڈ نہیں کرنا چاہتے۔

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

جب وہ وہ پروڈکٹ منتخب کر لیں جسے وہ خریدنا چاہتے ہیں، تو انہیں یہ بھی نظر آئے گا کہ فی الحال انہیں کتنے پیسے دینے ہوں گے - موجودہ کسی بھی کریڈٹ کو نکال کر - اور اگلے بلنگ ڈیٹ پر ان سے کتنے پیسے چارج کیے جائیں گے۔

عام طور پر، اگر پروڈکٹ کوئی دوسرا پلان ہو اور ادائیگی رکنیت کے چارج کے درمیان کی جائے، تو انہیں پہلے پلان پر ادا شدہ رقم کا کریڈٹ مل جائے گا۔

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

جيڪڏهن ڪو صارف پلان يا پيڪيج چونڊيو جيڪو موجوده سبسڪريپشن ۾ ڪا گهٽتغير نه ٿيندي، ته انهن کي اهو ڳالهه ڏسيل ويندي ته اهو كيشاني (message) وضاحت ڪري ٿو.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

چيكآؤپ مکمل ٿيڻ کان پوءِ، نئين پروڊڪٽس توهان جي ڪلائين جا اڪاؤنٽ ۾ شامل ڪيا ويندا آهن ۽ نئين پروڊڪٽس جا سڀ حدود يا خصوصيتون انهن ۾ فوري طور تي شامل ڪيا ويندا آهن: وزٽس، ڊسڪ اسپيس، پوسٽس، وغيره...

##

##

## اپ گریڊ ۽ ڈاؤن گريڊ پٿر (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

توهان جي هر پروڊڪٽ لاءِ توهان کي هڪ **Up & Downgrades** ٽاب ملندو. ان ٽاب جو پهرين چونڊ هجڻ وارو ڪم **Plan Group** نالو وارو فیلڊ آهي.

**Plan groups** اهو يقيني ڪري ٿو ته توهان Ultimate Multisite کي ٻڌائي سگهو ته ڪجهه پلان هڪ ئي "ڪانڊ" (family) ۾ آهن، ۽ ان ڪري انهن کي اپ گریڊ/ڊائنگريڊ پٿر جا خيار بڻائڻ لاءِ استعمال ڪيو ويندو.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

مثال طور، توهان جي پاسي **Free plan**، هڪ **Basic Plan** ۽ هڪ **Premium Plan** موجود آهن. توهان چاهيو ته **Free Plan** تي سبسڪرايبٽ ڪند صارف صرف **Premium Plan** تي اپ گریڊ ڪري سگهن ۽ توهان نه چاهيو ته انهن کي "Basic Plan" کي اپ گریڊ جو خيار ڏسڻ گهرجي. توهان کي بس Free ۽ Premium پلان لاءِ هڪ ئي Plan Group جو نالو مقرر ڪرڻو آهي جهڙو ڪيڪچين ۾ ڏيڪليو آهي.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

यो कुराले Ultimate Multisite लाई यो बताउनु पर्छ कि नेटवर्कमा **High End** नामको प्लानहरूको एक "पारिवारिक" समूह छ। जब तपाईं अपग्रेड वा डाउनग्रेड गर्ने बारे जानकारी दिन्छ, त्यसमा केवल सोही परिवारका प्लानहरू मात्र प्रयोगकर्तालाई विकल्पको रूपमा देखाउने।
