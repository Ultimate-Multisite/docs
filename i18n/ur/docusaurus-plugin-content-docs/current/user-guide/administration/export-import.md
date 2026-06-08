---
title: ایکسپورٹ اور امپورٹ
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 میں **Tools > Export & Import** کے تحت ایک single-site **Export & Import** ٹول شامل کیا گیا ہے۔ اس کا استعمال اس وقت کریں جب آپ ایک WordPress سائٹ کو ZIP فائل کے طور پر پیک کرنا، اس ZIP کو بحال (restore) کرنا، یا ایک سائٹ کو compatible Ultimate Multisite اور single-site WordPress انسٹالیشنز کے درمیان منتقل کرنا چاہتے ہوں۔

## Required permissions

آپ کو ایک ایسے ایڈمنسٹریٹر کے طور پر لاگ ان کرنا ہوگا جو اس سائٹ کے **Tools** مینیو تک رسائی حاصل کر سکے جسے export یا import کیا جا رہا ہے۔ اگر آپ ایک multisite network پر ہیں، تو network-level Ultimate Multisite ٹولز سے سب-سائٹس کو export یا import کرتے وقت network administrator account استعمال کریں۔

Export ZIP ڈاؤن لوڈز ایک authenticated download endpoint کے ذریعے فراہم کیے جاتے ہیں، لہذا ڈاؤن لوڈ مکمل ہونے تک ایڈمن سیشن کو فعال رکھیں اور جنریٹ شدہ ڈاؤن لوڈ URLs کو عوامی طور پر شیئر نہ کریں۔

## Exporting a site to a ZIP

1. جس سائٹ کو آپ کاپی کرنا چاہتے ہیں، اس کے WordPress ایڈمن میں جائیں اور **Tools > Export & Import** پر کلک کریں۔
2. export ایریا کھولیں اور وہ سائٹ منتخب کریں جسے آپ پیک کرنا چاہتے ہیں۔
3. اختیاری مواد (optional content) شامل کرنے کے لیے، جیسے کہ uploads، plugins، اور themes، اگر وہ آپشنز دستیاب ہوں تو انہیں منتخب کریں۔
4. export شروع کریں اور عمل کے مکمل ہونے کا انتظار کریں۔ بڑی سائٹس کو ZIP تیار ہونے سے پہلے بیک گراونڈ میں مکمل ہونے کی ضرورت پڑ سکتی ہے۔
5. exports لسٹ سے مکمل شدہ ZIP ڈاؤن لوڈ کریں۔

ZIP کو ایک محفوظ جگہ پر رکھیں۔ اس میں سائٹ کا مواد، سیٹنگز، میڈیا فائلز، اور منتخب کوڈ اثاثے (selected code assets) شامل ہو سکتے ہیں۔

## What the export includes

ایک export ZIP میں یہ شامل ہو سکتا ہے:

- منتخب سائٹ کا ڈیٹا بیس مواد اور کنفیگریشن۔
- اگر uploads شامل کیے گئے ہیں تو اپ لوڈ شدہ میڈیا فائلز۔
- اگر وہ آپشنز منتخب کیے گئے ہیں تو plugins اور themes۔
- Import metadata جو Export & Import ٹول کو ٹارگٹ انسٹالیشن پر سائٹ کو دوبارہ بنانے کے لیے استعمال ہوتا ہے۔

بالکل ZIP کا سائز اس بات پر منحصر ہوتا ہے کہ میڈیا کی مقدار، منتخب plugins اور themes، اور سائٹ کی ڈیٹا بیس ٹیبلز کا سائز کتنا ہے۔

## Importing a site from a ZIP

1. منزل (destination) کے WordPress سائٹ پر **Tools > Export & Import** پر جائیں۔
2. import ایریا کھولیں اور Export & Import ٹول سے بنائے گئے ZIP کو اپ لوڈ کریں۔
3. اگر سائٹ کو نیا ایڈریس استعمال کرنا چاہیے تو ایک replacement URL درج کریں، یا اصل URL برقرار رکھنے کے لیے یہ فیلڈ خالی چھوڑ دیں۔
4. یہ منتخب کریں کہ import مکمل ہونے کے بعد اپ لوڈ شدہ ZIP کو ڈیلیٹ کیا جائے یا نہیں۔
5. **Begin Import** پر کلک کریں۔
6. مکمل ہونے تک pending import کی نگرانی کریں۔ **Cancel Import** کا استعمال صرف اس وقت کریں جب آپ عمل کو مکمل ہونے سے پہلے روکنا چاہیں۔
7. عام ٹریفک یا کسٹمر رسائی کی اجازت دینے سے پہلے import شدہ سائٹ کا جائزہ لیں۔

ایک single-site WordPress انسٹالیشن پر، ZIP کو import کرنے سے موجودہ سائٹ کی جگہ import شدہ سائٹ آ جاتی ہے۔ شروع کرنے سے پہلے ٹارگٹ سائٹ کا مکمل بیک اپ بنا لیں، اور ایک ہی وقت میں ایک ہی سائٹ کے لیے متعدد imports شروع کرنے سے گریز کریں۔

## Limitations and compatibility notes

- بہت بڑی uploads directories یا media libraries بہت بڑے ZIP فائلز پیدا کر سکتی ہیں۔ بڑی سائٹس کو export یا import کرنے سے پہلے PHP upload limits، execution limits، disk space، memory، اور server timeout settings کی تصدیق کر لیں۔
- بہت بڑی میڈیا لائبریریوں کو کم ٹریفک والے مینٹیننس ونڈو کے دوران منتقل کرنے کی ضرورت پڑ سکتی ہے۔
- ٹارگٹ WordPress انسٹالیشن کو compatible WordPress، PHP، Ultimate Multisite، plugin، اور theme versions پر چلنا چاہیے۔
- ایک single-site import ٹارگٹ سائٹ کو تبدیل کر دیتا ہے۔ یہ کوئی merge tool نہیں ہے۔
- Multisite-to-single-site اور single-site-to-multisite مووز صرف اس وقت سپورٹ کیے جاتے ہیں جب ٹارگٹ ماحول export شدہ سائٹ کے plugins، themes، URLs، اور مطلوب Ultimate Multisite components کو چلا سکے۔
- ZIP کو نجی (private) رکھیں۔ اس میں export شدہ سائٹ کا ڈیٹا بیس مواد، اپ لوڈ شدہ فائلز، اور کنفیگریشن تفصیلات شامل ہو سکتی ہیں۔

پرانے network-level export workflows کے لیے، [Site Export](/user-guide/administration/site-export) دیکھیں۔
