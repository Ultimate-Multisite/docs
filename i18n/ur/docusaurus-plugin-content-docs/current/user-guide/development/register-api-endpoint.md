---
title: API اینڈ پوائنٹ رجسٹر کریں
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite کا Register API endpoint

اس ٹیوٹوریل میں آپ سیکھیں گے کہ Ultimate Multisite کا /register API endpoint استعمال کرتے ہوئے اپنے نیٹ ورک میں نئے صارف کی مکمل رجسٹریشن کا عمل کیسے بنایا جائے، اور یہ کام Zapier کے ذریعے کیسے کیا جائے۔

یہ endpoint POST method استعمال کرتا ہے اور اس URL سے کال کیا جاتا ہے: _**https://yoursite.com/wp-json/wu/v2/register**_۔ اس کال میں آپ کے نیٹ ورک میں 4 عمل انجام پائیں گے:

  * ایک نیا WordPress صارف بنایا جائے گا یا user ID کے ذریعے موجودہ صارف کی شناخت کی جائے گی۔

  * Ultimate Multisite میں ایک نیا Customer بنایا جائے گا یا customer ID کے ذریعے موجودہ کی شناخت کی جائے گی۔

  * WordPress نیٹ ورک پر ایک نئی سائٹ بنائی جائے گی۔

  * آخر میں، Ultimate Multisite میں ایک نئی Membership بنائی جائے گی۔

اس عمل کے لیے آپ کو اپنی API credentials کی ضرورت ہوگی۔ انہیں حاصل کرنے کے لیے اپنے نیٹ ورک ایڈمن پینل میں جائیں، **Ultimate Multisite > Settings** > **API & Webhooks** پر جائیں، اور API Settings سیکشن تلاش کریں۔

![Ultimate Multisite میں API Settings سیکشن](/img/config/settings-api.png)  
**Enable API** کو منتخب کریں اور اپنی API credentials حاصل کریں۔

اب آئیے endpoint کو سمجھتے ہیں اور پھر Zapier میں ایک رجسٹریشن action بناتے ہیں۔

## Endpoint کے body parameters

آئیے دیکھتے ہیں کہ endpoint کو کم از کم کون سی معلومات بھیجنی ضروری ہیں۔ اس آرٹیکل کے آخر میں مکمل کال دی گئی ہے۔

### Customer

User اور Ultimate Multisite Customer بنانے کے عمل کے لیے یہ معلومات ضروری ہیں:

"customer_id" : integer

آپ اپنے نیٹ ورک میں بنائی گئی customer ID بھیج سکتے ہیں۔ اگر یہ نہیں بھیجی جاتی تو نیچے دی گئی معلومات نیا customer اور نیا WordPress صارف بنانے کے لیے استعمال ہوں گی۔ user ID بھی customer ID کی طرح بھیجی جا سکتی ہے۔

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

اس object میں صرف Membership Status کی معلومات درکار ہیں۔

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" میں سے ایک },

### **Products**

Products ایک array میں دیے جاتے ہیں جس میں آپ کے نیٹ ورک سے 1 یا زیادہ product ID ہوتی ہیں۔ یاد رہے، یہ endpoint پروڈکٹس نہیں بناتا۔ پروڈکٹ بنانے کے endpoint کو بہتر سمجھنے کے لیے Ultimate Multisite کی دستاویزات دیکھیں۔

**"products" : [1,2],**

### Payment

Membership کی طرح، ہمیں صرف status درکار ہے۔

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" میں سے ایک },**

### Site

اور body مکمل کرنے کے لیے ہمیں سائٹ کا URL اور Title چاہیے، دونوں Site object کے اندر۔

**"site" : { "site_url" : "string", "site_title" : "string" }**

register endpoint کا جواب نئی بنائی گئی membership کی معلومات کے ساتھ ایک array ہوگا۔

## Zapier میں action بنانا

اس نئے اور زیادہ مضبوط اکاؤنٹ بنانے کے endpoint کی آمد کے ساتھ آپ کو Zapier میں ایک نیا action بھی ملے گا۔

کیا آپ جانتے ہیں کہ Zapier کے نئے ورژن کی تمام سہولیات کیسے استعمال کریں؟ یہاں مزید جانیں۔ (link?)

### Action بنانا

Zapier کے ساتھ رجسٹریشن endpoint کا استعمال بہتر طریقے سے سمجھانے کے لیے، آئیے Google Forms کے ساتھ ایک integration بناتے ہیں۔ جب بھی یہ فارم بھرا جائے گا اور معلومات فارم کی answer sheet میں محفوظ ہوں گی، Ultimate Multisite نیٹ ورک میں ایک نئی membership بن جائے گی۔

Google Forms میں، نیٹ ورک میں نئی membership بنانے کے لیے کم از کم ضروری فیلڈز کے ساتھ ایک فارم بنائیں۔

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

اب Zapier میں، ایک نیا Zap بنائیں اور بنائے گئے Google فارم کو اس spreadsheet کے ذریعے جوڑیں جہاں ڈیٹا محفوظ ہوتا ہے۔

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

ہو گیا! Google Forms فارم Zapier سے جڑ گیا ہے اور نیٹ ورک کے ساتھ integrate ہونے کے لیے تیار ہے۔ اب آئیے اس Action کی طرف چلتے ہیں جو Google Forms کے ہر بار بھرے جانے پر Trigger سے نتیجہ نکلے گا۔

نیا Ultimate Multisite app تلاش کریں اور اسے منتخب کریں۔ اس قسم کے Zap کے لیے Register آپشن چنیں۔

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

اس پہلے قدم کے بعد، وہ اکاؤنٹ چنیں جو اس Zap سے جڑے گا۔<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

یہ پورے عمل کا سب سے اہم حصہ ہے۔ ہمیں Google Forms سے آنے والی فیلڈز کو register endpoint کی کم از کم ضروری فیلڈز سے ملانا ہے، جیسا کہ اس آرٹیکل کے پچھلے حصے میں دکھایا گیا ہے۔

اس مثال میں، ہمیں صرف username، email، password، نام اور ویب سائٹ کا URL کنفیگر کرنا ہے۔ باقی پہلے سے طے شدہ چھوڑ دیا گیا ہے تاکہ اس Google Forms سے بننے والی تمام memberships ایک ہی product اور status pattern کی پیروی کریں۔

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

معلومات سیٹ ہونے کے بعد، آخری ٹیسٹ کی طرف بڑھیں۔ آخری سکرین پر آپ وہ تمام فیلڈز دیکھ سکتے ہیں جو endpoint کو بھیجی جائیں گی، ان کی متعلقہ معلومات اور وہ فیلڈز جو خالی بھیجی جائیں گی۔<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

اپنے نئے Zap کا ٹیسٹ کریں اور یہ کامیابی سے مکمل ہونا چاہیے۔ اگر کوئی خرابی آئے تو تمام فیلڈز چیک کریں کہ وہ صحیح طریقے سے بھیجی جا رہی ہیں۔ چونکہ بہت سی معلومات ہیں، کچھ چیزیں نظر انداز ہو سکتی ہیں۔

### مکمل endpoint parameters

یہ رہی مکمل کال اور وہ تمام فیلڈز جو بھیجی جا سکتی ہیں۔

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" میں سے ایک "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" میں سے ایک }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
