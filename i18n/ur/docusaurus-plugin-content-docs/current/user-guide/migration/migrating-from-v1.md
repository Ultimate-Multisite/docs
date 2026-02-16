---
title: V1 سے منتقلی
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 سے منتقلی

## Ultimate Multisite اپنی اصل 1.x ریلیز سیریز سے 2.x ریلیز سیریز میں منتقل ہو گیا ہے۔

Ultimate Multisite ورژن 2.0 اور اس سے آگے پورے کوڈ کی نئی تحریر ہے، یعنی پرانے ورژن اور نئے ورژن میں بہت کم چیزیں مشترک ہیں۔ اسی وجہ سے، جب آپ 1.x سے 2.x میں اپگریڈ کریں گے، تو آپ کا ڈیٹا ایسے فارمیٹ میں منتقل کرنا ہوگا جسے نئے ورژن سمجھ سکیں۔

خوشی کی بات یہ ہے کہ Ultimate Multisite 2.0+ میں **ایک migrator شامل ہے** جو کہ core کا حصہ ہے اور پرانے ورژن کے ڈیٹا کو پہچان کر نئے فارمیٹ میں تبدیل کر سکتا ہے۔ یہ منتقلی ورژن 2.0+ کے **Setup Wizard** کے دوران ہوتی ہے۔

اس سبق میں ہم دیکھیں گے کہ migrator کیسے کام کرتا ہے، ناکامی کی صورت میں کیا کرنا چاہیے، اور اس عمل کے دوران پیش آنے والے مسائل کو کیسے حل کیا جائے۔

_**اہم: ورژن 1.x سے ورژن 2.0 میں اپگریڈ کرنے سے پہلے اپنی سائٹ کے database کا بیک اپ ضرور بنا لیں**_

## پہلے قدم

پہلا قدم یہ ہے کہ plugin کی .zip فائل ڈاؤن لوڈ کریں اور اپنے network admin dashboard پر ورژن 2.0 انسٹال کریں۔

[ورژن 2.0 انسٹال اور ایکٹیویٹ](../getting-started/installing-ultimate-multisite.md) کرنے کے بعد، سسٹم خود بخود پہچان لے گا کہ آپ کی Multisite پرانے ورژن پر چل رہی ہے اور آپ کو plugin پیج کے اوپر یہ پیغام نظر آئے گا۔

_**نوٹ:** اگر آپ کی Multisite پر Ultimate Multisite 1.x پہلے سے انسٹال ہے، تو آپ کو plugin کو ابھی ڈاؤن لوڈ کیے گئے ورژن سے بدلنے کا آپشن ملے گا۔ براہ کرم **Replace current with uploaded** پر کلک کریں۔_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

اگلا صفحہ آپ کو بتائے گا کہ ورژن 1.x کے ساتھ کون سے پرانے add-ons انسٹال ہیں۔ اس میں ہدایات ہوں گی کہ آپ کا موجودہ ورژن 2.0 کے ساتھ compatible ہے یا منتقلی کے بعد آپ کو add-on کا نیا ورژن انسٹال کرنا ہوگا۔

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

جب آپ آگے بڑھنے کے لیے تیار ہوں، تو **Visit the Installer to finish the upgrade** والے بٹن پر کلک کریں۔

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

اس کے بعد آپ installation wizard کے صفحے پر پہنچ جائیں گے جہاں خوش آمدید کے پیغامات ہوں گے۔ اگلے صفحے پر جانے کے لیے بس **Get Started** پر کلک کریں۔

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** پر کلک کرنے کے بعد، آپ Pre-install Checks کے صفحے پر پہنچ جائیں گے۔ یہاں آپ کی System Information اور WordPress installation دکھائی جائے گی اور بتایا جائے گا کہ یہ **Ultimate Multisite کی ضروریات** پوری کرتی ہے یا نہیں۔

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

اگلا قدم اپنی Ultimate Multisite license key درج کرنا اور plugin کو ایکٹیویٹ کرنا ہے۔ اس سے یقینی ہوگا کہ تمام features بشمول add-ons آپ کی سائٹ پر دستیاب ہوں گے۔

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

اپنی key درج کرنے کے بعد، **Agree & Activate** پر کلک کریں۔

لائسنس ایکٹیویشن کے بعد، آپ اگلے صفحے پر **Install** پر کلک کر کے اصل installation شروع کر سکتے ہیں۔ یہ خود بخود ورژن 2.0 کے کام کرنے کے لیے ضروری فائلیں اور database بنا دے گا۔

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## اب، منتقلی کا مرحلہ

migrator میں ایک حفاظتی خصوصیت شامل ہے جو آپ کی پوری multisite کو چیک کرتی ہے تاکہ یقینی ہو کہ آپ کا تمام Ultimate Multisite ڈیٹا بغیر کسی مسئلے کے منتقل ہو سکتا ہے۔ یہ عمل شروع کرنے کے لیے **Run Check** بٹن پر کلک کریں۔

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

چیک کرنے کے بعد، دو امکانات ہیں: نتیجہ یا تو **غلطی کے ساتھ** ہوگا یا **غلطی کے بغیر**۔

### غلطی کے ساتھ

اگر آپ کو کوئی غلطی کا پیغام ملے، تو آپ کو ہماری سپورٹ ٹیم سے رابطہ کرنا ہوگا تاکہ وہ اس غلطی کو ٹھیک کرنے میں آپ کی مدد کر سکیں۔ ٹکٹ بناتے وقت **غلطی کا log ضرور فراہم کریں**۔ آپ log ڈاؤن لوڈ کر سکتے ہیں یا contact our support team کے لنک پر کلک کر سکتے ہیں۔ یہ آپ کے صفحے کی دائیں جانب help widget کھولے گا جس کی fields پہلے سے بھری ہوں گی اور description میں غلطی کے logs شامل ہوں گے۔

_**چونکہ سسٹم نے کوئی غلطی پائی ہے، آپ ورژن 2.0 میں منتقلی آگے نہیں بڑھا سکتے۔ آپ ورژن 1.x پر واپس جا سکتے ہیں تاکہ غلطی ٹھیک ہونے تک آپ کا network چلتا رہے۔**_

### غلطی کے بغیر

اگر سسٹم کو کوئی غلطی نہیں ملتی، تو آپ کو کامیابی کا پیغام نظر آئے گا اور نیچے **Migrate** بٹن ہوگا جو آپ کو منتقلی آگے بڑھانے دے گا۔ اس صفحے پر آپ کو آگے بڑھنے سے پہلے اپنے database کا بیک اپ بنانے کی یاد دہانی کرائی جائے گی، جس کی ہم پرزور سفارش کرتے ہیں۔ اگر آپ نے بیک اپ بنا لیا ہے تو **Migrate** پر کلک کریں۔

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

اور بس اتنا ہی کرنا ہے!

آپ یا تو Wizard setup جاری رکھ سکتے ہیں تاکہ اپنے network پر logo اور دوسری چیزیں اپڈیٹ کریں، یا Ultimate Multisite ورژن 2.0 کے مینیو اور اس کے نئے انٹرفیس کو دیکھنا شروع کریں۔ آگے بڑھیں اور لطف اٹھائیں۔
