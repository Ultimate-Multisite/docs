---
title: ترتیبات کا حوالہ
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Settings حوالہ

یہ صفحہ اُن settings کو ٹریک کرتا ہے جو روزمرہ انتظامیہ اور Ultimate Multisite میں حالیہ رویے کی تبدیلیوں کو متاثر کرتی ہیں۔

## دیگر اختیارات

**دیگر اختیارات** کا علاقہ **Ultimate Multisite > Settings > Login & Registration** کے تحت ظاہر ہوتا ہے۔

| Setting | تفصیل |
|---|---|
| **Enable Jumper** | admin علاقے میں Jumper فوری نیویگیشن ٹول دکھاتا ہے۔ اسے Ultimate Multisite اسکرینز، نیٹ ورک آبجیکٹس، اور معاون admin مقامات پر براہِ راست جانے کے لیے استعمال کریں۔ اگر آپ یہ شارٹ کٹ دکھائی دینا نہیں چاہتے تو اسے غیر فعال کریں۔ |

## خرابی کی رپورٹنگ اور ٹیلی میٹری

پچھلی خرابی رپورٹنگ opt-in setting کو settings صفحے سے ہٹا دیا گیا ہے۔ گمنام ٹیلی میٹری غیر فعال ہے اور اسے فعال کرنے کے لیے کوئی UI toggle موجود نہیں ہے۔

اگر آپ settings صفحے کے لیے اندرونی runbooks یا screenshots برقرار رکھتے ہیں، تو پرانے خرابی رپورٹنگ opt-in field کے حوالہ جات ہٹا دیں تاکہ منتظمین ایسی setting تلاش نہ کریں جو اب موجود نہیں ہے۔

## Import/Export settings

**Import/Export** settings tab بیان کرتا ہے کہ یہ کن settings کو کنٹرول کرتا ہے اور site اور نیٹ ورک archives کے لیے براہِ راست **Ultimate Multisite > Site Export** سے لنک کرتا ہے۔ import/export configuration کے لیے settings tab استعمال کریں، single-site export/import workflow کے لیے **Tools > Export & Import** استعمال کریں، اور جب آپ کو مکمل Network Export archive کی ضرورت ہو تو Site Export ٹول استعمال کریں۔

## Domain Seller HostAfrica بیلنس وارننگ

جب Domain Seller addon کو HostAfrica سے جوڑا جاتا ہے، تو نیٹ ورک منتظمین اب ایک dismissible بیلنس کم ہونے کی وارننگ دیکھتے ہیں جب reseller account balance قابلِ اعتماد domain registration یا renewal processing کے لیے بہت کم ہو۔

اس نوٹس کو ایک عملی وارننگ سمجھیں: مزید paid domain registrations قبول کرنے سے پہلے HostAfrica reseller balance کو top up کریں، پھر Domain Seller settings یا domain-monitoring screen پر واپس جائیں تاکہ تصدیق ہو سکے کہ registrations اور renewals معمول کے مطابق جاری رہ سکتی ہیں۔

## AI فراہم کنندہ connector settings

AI provider connector settings اب صرف معاون OAuth account pools ظاہر کرتی ہیں:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | OAuth بٹن کے ساتھ ایک یا زیادہ Anthropic Max accounts جوڑیں۔ جب sandboxed browser redirect خودکار طور پر مکمل نہیں کر سکتا تو manual OAuth fallback استعمال کریں۔ |
| **OpenAI ChatGPT/Codex** | اسی OAuth pool workflow کے ذریعے ChatGPT accounts جوڑیں۔ account جوڑنے کے بعد Connector-supported operations ChatGPT Codex tool calls استعمال کر سکتی ہیں۔ |
| **Google AI Pro** | OAuth کے ذریعے Google AI Pro accounts جوڑیں، پھر اگر account list فوراً update نہ ہو تو connector refresh کریں۔ |

Cursor Pro اب معاون provider نہیں رہا۔ پرانے اندرونی screenshots، runbooks، یا onboarding steps ہٹا دیں جو Cursor Pro setup fields یا connector paths کا ذکر کرتے ہیں۔

provider accounts شامل یا حذف کرتے وقت، refresh یا delete کیے جانے والے account کے لیے درست email address درج کریں اور connector-backed operations کو test کرنے سے پہلے provider settings محفوظ کریں۔
