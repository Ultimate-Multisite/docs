---
title: Sunrise فائل کی خرابی
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise فائل کی تنصیب میں خرابی

sunrise.php فائل ایک خاص فائل ہے جسے WordPress شروع ہوتے وقت تلاش کرتا ہے۔ WordPress کے لیے sunrise.php فائل کا پتہ لگانا ممکن ہو، اس کے لیے یہ فائل **wp-content فولڈر** کے اندر ہونی چاہیے۔

جب آپ Ultimate Multisite کو فعال کرتے ہیں اور سیٹ اپ وزرڈ سے گزرتے ہیں جیسا کہ اسکرین شاٹ میں دکھایا گیا ہے، تو Ultimate Multisite ہماری sunrise.php فائل کو wp-content فولڈر میں کاپی کرنے کی کوشش کرتا ہے۔

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

زیادہ تر صورتوں میں، ہم فائل کامیابی سے کاپی کر لیتے ہیں اور سب کچھ ٹھیک کام کرتا ہے۔ تاہم، اگر کوئی چیز درست طریقے سے ترتیب نہیں دی گئی (مثال کے طور پر، فولڈر کی اجازتیں)، تو آپ کو ایسی صورتحال کا سامنا ہو سکتا ہے جہاں Ultimate Multisite فائل کاپی کرنے سے قاصر ہو۔

اگر آپ Ultimo کی دی گئی خرابی کا پیغام پڑھیں، تو آپ دیکھیں گے کہ یہاں بالکل یہی ہوا ہے: **Sunrise copy failed**۔

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

اسے ٹھیک کرنے کے لیے، آپ wp-ultimo plugin فولڈر کے اندر موجود sunrise.php فائل کو کاپی کر کے اپنے wp-content فولڈر میں پیسٹ کر سکتے ہیں۔ یہ کرنے کے بعد، وزرڈ صفحہ دوبارہ لوڈ کریں اور تمام جانچ پاس ہو جانی چاہیے۔

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> بہر حال، یہ آپ کے فولڈر کی اجازتوں کی عمومی جانچ کا تقاضا کرتا ہے تاکہ مستقبل میں مسائل سے بچا جا سکے (نہ صرف Ultimate Multisite کے ساتھ بلکہ دیگر plugins اور themes کے ساتھ بھی)۔

**Health Check tool** جو WordPress کا حصہ ہے (آپ اسے اپنی مرکزی سائٹ کے **admin panel > Tools > Health Check** سے رسائی حاصل کر سکتے ہیں) آپ کو بتا سکتا ہے کہ کیا آپ کے فولڈر کی اجازتیں ایسی اقدار پر سیٹ ہیں جو WordPress کے ساتھ مسائل پیدا کر سکتی ہیں۔

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
