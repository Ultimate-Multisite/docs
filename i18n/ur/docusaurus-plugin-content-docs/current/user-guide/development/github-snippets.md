---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub ریپوزٹری پر Ultimate Multisite کے کوڈ سنپٹس کیسے استعمال کریں

GitHub ریپوزٹری میں کوڈ سنپٹس دستیاب ہیں جو Ultimate Multisite صارفین اکثر مانگتے ہیں۔ یہ صارفین چھوٹی چھوٹی خصوصیات شامل کرنا چاہتے ہیں، جیسے سائن اپ صفحات پر Google Analytics سکرپٹ لگانا یا ایڈمن dashboard سے کوئی meta box چھپانا۔

یہ مضمون آپ کو دکھائے گا کہ یہ کوڈز کیسے استعمال کریں اور خاص طور پر انہیں کہاں رکھنا ہے۔

آپ یہ سنپٹس نیچے دیے گئے لنک پر حاصل کر سکتے ہیں۔

https://github.com/next-press/wp-ultimo-snippets/

کوڈ شامل کرنے کے 2 طریقے ہیں

  1. اپنی theme کی functions.php فائل میں۔

  2. Must-Use Plugins (mu-plugins)

# اپنی theme کی functions.php فائل میں سنپٹ کیسے شامل کریں

  1. اپنے WordPress Network ایڈمن dashboard میں لاگ ان کریں اور Themes > Theme Editor پر جائیں (نیچے اسکرین شاٹ دیکھیں)۔

  2. "Edit Themes" صفحے پر، یقینی بنائیں کہ آپ کی فعال theme اسکرین کے اوپری دائیں جانب موجود ڈراپ ڈاؤن فیلڈ میں منتخب ہے (نیچے اسکرین شاٹ میں #3 دیکھیں)۔

  3. "Theme Files" سیکشن کے نیچے functions.php فائل پر کلک کریں تاکہ فائل لوڈ ہو جائے۔ نیچے سکرول کریں اور GitHub ریپوزٹری سے حاصل کردہ Ultimate Multisite سنپٹ وہاں پیسٹ کریں۔

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) کیسے بنائیں

WordPress میں ایک خصوصیت ہے جو آپ کو اپنی مرضی کی فعالیت لوڈ کرنے دیتی ہے جسے "Must-Use Plugins" یا مختصراً "mu-plugins" کہتے ہیں۔

یہ خاص mu-plugins تمام دیگر عام plugins سے پہلے لوڈ ہوتے ہیں، اور انہیں غیر فعال نہیں کیا جا سکتا۔ multisite نیٹ ورک میں، ان mu-plugins کا کوڈ آپ کی انسٹالیشن کی تمام سائٹس پر لوڈ ہوگا۔

1\. اپنی WordPress انسٹال کی فائل سسٹم تک رسائی کے لیے FTP یا SSH استعمال کریں۔

2\. اپنی WordPress انسٹال کی wp-content ڈائریکٹری کے اندر، ایک نئی ڈائریکٹری بنائیں جس کا نام ہو: mu-plugins۔

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. اپنے کمپیوٹر پر Notepad یا کسی بھی کوڈ ایڈیٹر کا استعمال کرتے ہوئے wu-snippet.php نام کی ایک نئی PHP فائل بنائیں۔

4\. GitHub ریپوزٹری سے حاصل کردہ Ultimate Multisite کوڈ سنپٹ اس فائل میں رکھیں اور محفوظ کریں۔ آپ اپنے mu plugin کو لیبل کرنے کے لیے کوڈ سنپٹ کے اوپر یہ کوڈ بھی شامل کر سکتے ہیں۔
