---
title: Zapier کے ذریعے اکاؤنٹ رجسٹر کریں
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ایونٹ: Zapier کے ذریعے اکاؤنٹ رجسٹر کریں

[Ultimate Multisite کو Zapier کے ساتھ انٹیگریٹ کرنا](zapier.md) آرٹیکل میں، ہم نے بات کی تھی کہ Zapier کو کیسے استعمال کریں تاکہ ٹرگرز اور ایونٹس کی بنیاد پر Ultimate Multisite میں مختلف عمل کیے جا سکیں۔ اس آرٹیکل میں، ہم دکھائیں گے کہ آپ تھرڈ پارٹی ایپلیکیشنز کو کیسے انٹیگریٹ کر سکتے ہیں۔ ہم Google Sheets کو ڈیٹا کے ذریعے کے طور پر استعمال کریں گے اور معلومات کو Ultimate Multisite میں بھیج کر اکاؤنٹ رجسٹر کریں گے۔

سب سے پہلے، آپ کو اپنے Google Drive میں ایک **Google Sheet** بنانی ہوگی۔ یقینی بنائیں کہ آپ ہر کالم کو صحیح طریقے سے بیان کریں تاکہ بعد میں ڈیٹا میپ کرنا آسان ہو۔

![کسٹمر ڈیٹا کے کالمز والی Google Sheet](/img/admin/webhooks-list.png)Google Sheet بنانے کے بعد، آپ اپنے Zapier اکاؤنٹ میں لاگ ان کر کے zap بنانا شروع کر سکتے ہیں۔

![Zap بنانے کے لیے Zapier ڈیش بورڈ](/img/admin/webhooks-list.png)**"App event"** کے سرچ فیلڈ میں **"Google Sheets"** منتخب کریں

![App event کے طور پر Google Sheets منتخب کرنا](/img/admin/webhooks-list.png)

پھر "**Event**" فیلڈ میں "**New spreadsheet row**" منتخب کریں اور "**Continue**" پر کلک کریں

![Zapier میں New spreadsheet row ایونٹ منتخب کرنا](/img/admin/webhooks-list.png)اگلے مرحلے میں آپ سے وہ **Google Account** منتخب کرنے کو کہا جائے گا جہاں **Google Sheet** محفوظ ہے۔ تو بس یقینی بنائیں کہ صحیح Google اکاؤنٹ منتخب ہے۔

![Google Sheet کے لیے Google Account منتخب کرنا](/img/admin/webhooks-list.png)

**"Set up trigger"** کے تحت، آپ کو وہ Google spreadsheet اور worksheet منتخب اور مخصوص کرنی ہوگی جہاں سے ڈیٹا آئے گا۔ ان کو بھریں اور "**Continue**" پر کلک کریں

![Spreadsheet اور worksheet کے انتخاب کے ساتھ ٹرگر سیٹ اپ کریں](/img/admin/webhooks-list.png)اگلا مرحلہ ہے "**test your trigger**" تاکہ یقینی بنایا جا سکے کہ آپ کی Google Sheet صحیح طریقے سے کنیکٹ ہے۔

![Zapier میں اپنا ٹرگر ٹیسٹ کریں](/img/admin/webhooks-list.png)اگر آپ کا ٹیسٹ کامیاب ہے، تو آپ کو نتیجہ نظر آئے گا جس میں آپ کی spreadsheet کی کچھ ویلیوز دکھائی دیں گی۔ آگے بڑھنے کے لیے "**Continue**" پر کلک کریں۔

![کامیاب ٹرگر ٹیسٹ جس میں spreadsheet کی ویلیوز دکھائی گئی ہیں](/img/admin/webhooks-list.png)اگلا مرحلہ دوسری ایکشن سیٹ اپ کرنا ہے جو Ultimate Multisite میں اکاؤنٹ بنائے گی یا رجسٹر کرے گی۔ سرچ فیلڈ میں "**Ultimate Multisite(2.0.2)**" منتخب کریں

![ایکشن ایپ کے طور پر Ultimate Multisite منتخب کرنا](/img/admin/webhooks-list.png)

"**Event**" فیلڈ میں، "**Register an Account in Ultimate Multisite**" منتخب کریں پھر "**Continue**" بٹن پر کلک کریں۔

![Ultimate Multisite میں اکاؤنٹ رجسٹر کریں ایکشن ایونٹ](/img/admin/webhooks-list.png)"**Set up an action**" کے تحت، آپ کو کسٹمر ڈیٹا، ممبرشپس، پروڈکٹس وغیرہ کے لیے مختلف فیلڈز نظر آئیں گی۔ آپ اپنی Google Sheet کی ویلیوز کو میپ کر کے انہیں مناسب فیلڈ میں ڈال سکتے ہیں جیسا کہ نیچے اسکرین شاٹ میں دکھایا گیا ہے۔

![Google Sheet کی ویلیوز کو Ultimate Multisite کی فیلڈز سے میپ کرنا](/img/admin/webhooks-list.png)

ویلیوز میپ کرنے کے بعد، آپ ایکشن کو ٹیسٹ کر سکتے ہیں۔

![اکاؤنٹ رجسٹر کرنے والی Zapier ایکشن کو ٹیسٹ کرنا](/img/admin/webhooks-list.png)
