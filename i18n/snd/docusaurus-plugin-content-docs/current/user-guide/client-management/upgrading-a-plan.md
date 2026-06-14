---
title: پلان اپ گریڊ ڪرڻ
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# پلان اپ گریڈ کرنا (v2)

_**اہم نوٹ: یہ آرٹیکل Ultimate Multisite کے ورژن 2.x کا حوالہ دیتا ہے۔**_

آپ کے کسٹمرز کسی بھی وقت اپنے پلان کو اپ گریڈ کر سکتے ہیں۔ وہ یا تو کسی دوسرے پلان پر اپ گریڈ کر سکتے ہیں یا آپ کے نیٹ ورک پر دستیاب کسی بھی اضافی سروس یا پیکج خرید سکتے ہیں۔

اس ٹیوٹوریل میں ہم یہ دیکھیں گے کہ وہ اپنا پلان کیسے اپ گریڈ کر سکتے ہیں اور اپ گریڈ کے عمل کے بعد کیا ہوتا ہے۔

اپنا پلان اپ گریڈ کرنے کے لیے، آپ کے کسٹمرز کو اپنے ڈیش بورڈ تک رسائی حاصل کرنی چاہیے اور **Account** پیج پر جانا چاہیے۔

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Account پیج پر، انہیں اپنی موجودہ رکنیت (membership) اور اس سے منسلک پلان دکھایا جائے گا۔ کسی دوسرے پلان پر اپ گریڈ کرنے کے لیے، انہیں **Your Membership** سیکشن کے اوپر دائیں کونے میں **Change** پر کلک کرنا ہوگا۔

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

انہیں ایک چیک آؤٹ فارم پر ری ڈائریکٹ کیا جائے گا جہاں تمام دستیاب پلانز دکھائے جائیں گے۔

وہ یہ بھی دیکھ سکیں گے کہ ان کے موجودہ پلان کے لیے **دستیاب سروسز اور پیکجز** کیا ہیں، اگر وہ صرف کوئی مخصوص سروس یا پیکج (جیسے ہمارے یہاں مثال میں لامحدود وزٹ یا ڈسک اسپیس) خریدنا چاہتے ہیں اور پلان اپ گریڈ نہیں کرنا چاہتے۔

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

جب وہ وہ پروڈکٹ منتخب کر لیں جسے وہ خریدنا چاہتے ہیں، تو انہیں یہ بھی نظر آئے گا کہ فی الحال انہیں کتنے پیسے دینے ہوں گے - کسی بھی موجودہ کریڈٹ کو چھوڑ کر - اور اگلے بلنگ ڈیٹ پر ان سے کتنے پیسے چارج کیے جائیں گے۔

عام طور پر، اگر پروڈکٹ کوئی دوسرا پلان ہو اور ادائیگی رکنیت کے چارج کے درمیان کی جائے تو وہ پہلے پلان پر ادا شدہ رقم کا کریڈٹ حاصل کریں گے۔

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

جيڪڏهن ڪو صارف ڪا پلان يا پيڪيج چونڊيو جيڪو موجوده سبسڪريپشن ۾ ڪجهه به نه بدلائي، ته ان کي اهو ڳالهه ڏسيل ويندي آهي ته اهو ڪهڙي وضاحت ڪري ٿو.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

چيكآؤ پورو ٿيڻ کان پوءِ، نئين پروڊڪٽ(س) توهان جي گهرجدارن جا ڪئونٽ ۾ شامل ڪيا ويندا آهن ۽ نئين پروڊڪٽ(س) جا سڀ حدود يا خاصتا فوراً ان ۾ شامل ڪيا ويندا آهن: وزٽ، اسڪا اسپيس، پوسٽس، تنهنجي مثال.

##

##

## আপ그ريڊ ۽ ڈاؤنگريد پٿر (Upgrade and Downgrade Paths)

توهان جي هر پروڊڪٽ تي توهان کي هڪ **Up & Downgrades** ٽاب ملندو. ان ٽاب جو پهرين چونڊ هجڻ وارو هڪ فیلڊ آهي جنهن جو نالو **Plan Group** آهي.

**Plan groups** اهو يقيني ڪندو ته Ultimate Multisite کي خبر ٿي وڃي ته ڪجهه پلان هڪ ئي "خانداني" سمجهيا آهن، ۽ ان ڪري انهن کي اپ그ريڊ/ڊائنگريد پٿر جا خيار بڻائڻ لاءِ استعمال ڪيو ويندو.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

مثال طور، توهان جي پاسي **Free plan**، هڪ **Basic Plan** ۽ هڪ **Premium Plan** موجود آهن. توهان چاهيو ته **Free Plan** تي سبسڪرايبٽ ڪند صارف صرف **Premium Plan** تي اپ그ريڊ ڪري سگهن ۽ توهان نه چاهيو ته انهن کي "Basic Plan" کي اپ그ريڊ جو خيار ڏسڻ گهرجي. توهان کي بس ان جي لاءِ هڪ ئي پلان گروپ جو نالو مقرر ڪرڻو آهي جيڪو Free ۽ Premium پلان لاءِ Screenshot ۾ ڏيڪيل طرح موجود آهي.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

هي اس شيوئن کي هنيت توهان جي Ultimate Multisite کي ٻڌائڻ آهي ته گهٽ يا وڏي منصوبن جو هڪ "فاميلي" (family) موجوده آهي جنهن **High End** نامدار آهي. جڏهن আপون اپ گریڊ يا ڊگريڊ ڪرڻ جو يقين ڏيارڻ لاءِ ڪجهه پلان پيش ڪري ٿو، ته صرف اها پلان جيڪا اها ئي فاميلي کان هجي، هوءَ صارف لاءِ هڪ خيار طور پر ظاهر ڪندي.
