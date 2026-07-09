---
title: Zapier کے ذریعے Account رجسٹر کریں
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Zapier کے ذریعے Account رجسٹر کریں {#event-register-an-account-via-zapier}

مضمون [Ultimate Multisite کو Zapier کے ساتھ مربوط کرنا](zapier.md) میں، ہم نے گفتگو کی کہ triggers اور events کی بنیاد پر Ultimate Multisite کے اندر مختلف actions انجام دینے کے لیے Zapier کیسے استعمال کیا جائے۔ اس مضمون میں، ہم دکھائیں گے کہ آپ 3rd party applications کو کیسے مربوط کر سکتے ہیں۔ ہم Google Sheets کو data کے ذریعہ کے طور پر استعمال کریں گے اور معلومات Ultimate Multisite کو بھیجیں گے تاکہ Account رجسٹر کیا جا سکے۔

Zapier کو منسلک کرنے سے پہلے، **Ultimate Multisite > Settings > API & Webhooks** پر جائیں اور تصدیق کریں کہ API enabled ہے۔ جب Zapier Ultimate Multisite account credentials مانگے تو اس screen سے API Key اور API Secret copy کریں۔

![API اور Webhooks settings جن میں API Key، API Secret، اور Enable API options شامل ہیں](/img/admin/settings-api-webhooks.png)

سب سے پہلے، آپ کو اپنی Google Drive کے تحت ایک **Google Sheet** بنانی ہوگی۔ یقینی بنائیں کہ آپ ہر column کو مناسب طور پر define کریں تاکہ بعد میں data آسانی سے map کیا جا سکے۔

Google sheet بنانے کے بعد، آپ اپنے Zapier account میں log in کر سکتے ہیں اور zap بنانا شروع کر سکتے ہیں۔

**"App event"** کے search field کے تحت **"Google Sheets"** منتخب کریں


پھر "**Event** " field کے لیے "**New spreadsheet row** " منتخب کریں اور "**Continue** " دبائیں

اگلا step آپ سے ایک **Google Account** منتخب کرنے کو کہے گا جہاں **Google Sheet** saved ہے۔ لہٰذا بس یقینی بنائیں کہ درست google account specified ہے۔


**"Set up trigger** " کے تحت، آپ کو وہ google spreadsheet اور worksheet منتخب اور specify کرنی ہوگی جسے آپ استعمال کریں گے جہاں سے data آئے گا۔ بس آگے بڑھیں اور انہیں fill کریں اور "**Continue** " دبائیں

اگلا مرحلہ "**test your trigger** " ہے تاکہ یقینی بنایا جا سکے کہ آپ کی google sheet properly connected ہے۔

اگر آپ کا test successful ہے، تو آپ کو اپنے spreadsheets سے کچھ values دکھاتا ہوا result نظر آنا چاہیے۔ آگے بڑھنے کے لیے "**Continue** " پر click کریں۔

اگلا step دوسری action set up کرنا ہے جو Ultimate Multisite میں Account بنائے گی یا register کرے گی۔ search field میں "**Ultimate Multisite(2.0.2)** " منتخب کریں


"**Event** " field کے تحت، "**Register an Account in Ultimate Multisite** " منتخب کریں پھر "**Continue** " button پر click کریں۔

"**Set up an action** " کے تحت، آپ کو customer data، memberships، products وغیرہ کے لیے مختلف fields available نظر آئیں گی۔ آپ اپنی google sheet کے تحت values کو map کر سکتے ہیں اور انہیں مناسب field میں assign کر سکتے ہیں جہاں انہیں populate ہونا چاہیے، جیسا کہ نیچے screenshot میں دکھایا گیا ہے۔


values کو map کرنے کے بعد، آپ action کو test کر سکتے ہیں۔
