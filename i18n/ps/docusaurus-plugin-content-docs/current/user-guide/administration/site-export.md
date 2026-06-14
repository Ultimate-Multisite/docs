---
title: د سایت اخیست
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# سایت اکسبٹ کرنا (Site Export)

**سائٹ ایکسپورٹ** ایڈمن پیج نیٹ ورک ایڈمنز آپ کو ایک سائٹ، یا پورے نیٹ ورک کو، نقل و حرکت (migration)، بیک اپ، یا کسی دوسرے کام کے لیے ڈاؤن لوڈ کرنے کے قابل آرکائیو میں پیک کرنے کی سہولت دیتا ہے۔

## ایک سائٹ کا ایکسپورٹ کرنا

**Ultimate Multisite > Site Export** پر جائیں اور **Generate new Site Export** منتخب کریں۔ وہ سبسائٹ منتخب کریں جسے آپ ایکسپورٹ کرنا چاہتے ہیں، پھر یہ منتخب کریں کہ آرکائیو میں اپ لوڈز (uploads)، پلگ انز (plugins)، اور تھیمز (themes) شامل ہونے چاہئیں۔

جب ایکسپورٹ مکمل ہو جائے تو **Existing Exports** لسٹ سے ZIP ڈاؤن لوڈ کریں۔ اب ایکسپورٹ شدہ ZIPs میں ایک خود چلنے والا `index.php` اور ایک `readme.txt` شامل ہوتے ہیں، تاکہ آرکائیو کو کسی نئے ہوسٹ پر اپ لوڈ کیا جا سکے اور پہلے کوئی الگ امپورٹر پلگ ان انسٹال کیے بغیر شروع کیا جا سکے۔

## پورے نیٹ ورک کا ایکسپورٹ کرنا

جب آپ کو اپنے پورے نیٹ ورک کے تمام سبسائٹس کو ایک ہی آرکائیو میں شامل کرنے کی ضرورت ہو تو Site Export پیج پر **Network Export** استعمال کریں۔ یہ ہوسٹ مائیگریشنز، ڈیزاسٹر ریکوری ڈرلز، یا اسٹیجنگ ریبوائل کے لیے بہت مفید ہے جہاں ہر سبسائٹ کو ایک ساتھ جانا پڑتا ہے۔

چونکہ نیٹ ورک ایکسپورٹ ایک سنگل سائٹ ایکسپورٹ سے کہیں زیادہ بڑا ہو سکتا ہے، اسے کم ٹریفک والے وقت میں چلائیں اور یقینی بنائیں کہ ہدف اسٹوریج پر اپ لوڈز، پلگ انز، تھیمز، اور جنریٹ شدہ ZIP فائلوں کے لیے کافی خالی جگہ موجود ہے۔

### نیٹ ورک امپورٹ بنڈلز (Network Import Bundles)

Ultimate Multisite 2.12.0 سے شروع کرتے ہوئے، Site Exporter **network import bundles** بنا سکتا ہے — یہ خاص آرکائیو ہیں جو پورے نیٹ ورک پر سائٹ کی آسان بحالی کے لیے ڈیزائن کیے گئے ہیں۔ ایک نیٹ ورک امپورٹ بنڈل میں متعدد سائٹس کو نئے نیٹ ورک انسٹالیشن پر بحال کرنے کے لیے تمام ضروری فائلیں اور میٹا ڈیٹا شامل ہوتا ہے۔

#### ایک نیٹ ورک امپورٹ بنڈل بنانا

۱. **Ultimate Multisite > Site Export** ته ورته.
۲. **Generate new Network Export** دکمه یې په کلکه فشار ورکړئ.
۳. export type د انتخاب کې **Network Import Bundle** غوره کړئ.
۴. پرې وئ چې আপونه فایلونه (uploads)، plugins، او themes هم شامل کړئ یا نه.
۵. **Generate** د دခု کار کولو لپاره دکمه فشار ورکړئ.
۶. ZIP bundle یې له **Existing Exports** لیست څخه ډاونلوډ کړئ.

#### د Network Import Bundle له بیا جوړولو لپاره

د network import bundle له لارې سایتونه بیا جوړول:

۱. Ultimate Multisite په خپل هدف host باندې نصب کړئ.
۲. multisite setup wizard پوره کړئ.
۳. په نوي network کې **Ultimate Multisite > Site Export** ته ورته شئ.
۴. **Import Network Bundle** دکمه فشار ورکړئ.
۵. network import bundle ZIP فایل یې آپل کړئ.
۶. د پرې کولو لپاره داسې پیښو (on-screen) لارښوونې پوره کړئ.
۷. import process ټول سایتونه، دوی د محتوا، او تنظیمات بیا جوړوي.

Network import bundles په منځ کې ساتي:
- Site content (posts, pages, custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (if included in the bundle)
- Media uploads (if included in the bundle)
- Custom database tables and data

## د self-booting export ZIP نصبولو لپاره

په یو تازه host باندې self-booting ZIP بیا جوړول:

۱. Export شوی ZIP محنتونه په هدف web root کې آپل کړئ.
۲. 업لود شوی `index.php` ته browser کې खोله وکړئ.
۳. له bundle شوي export package څخه داسې پیښو (on-screen) installer لارښوونې پوره کړئ.
۴. مخکې چې مو temporary files منو، export-specific notes لپاره bundled `readme.txt` وګورئ.

د addon-specific نصبولو او import جزئیاتو لپاره، [Site Exporter addon documentation](/addons/site-exporter) وګورئ.

په Ultimate Multisite 2.9.0 کې اضافه شوی single-site tool د Export & Import ته وګورئ](/user-guide/administration/export-import).
