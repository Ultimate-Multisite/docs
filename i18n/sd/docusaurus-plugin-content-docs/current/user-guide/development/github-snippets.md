---
title: گھیبھر جي ڪيڪڊز
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# اسي امولٹ میلسائٹ کے اسنیپٹس کو اپنے گیتھرب ہب پر کیسے استعمال کریں {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

گیتھرب ریپوزٹری میں کوڈ کے چھوٹے ٹکڑے (snippets) موجود ہیں جنہیں Ultimate Multisite کے صارفین اکثر مانگتے ہیں، جیسے سائن اپ پیجز پر گوگل اینالیٹکس سکرپٹ شامل کرنا یا ایڈمن ڈیش بورڈ سے کسی میٹا باکس کو چھپانا۔

یہ آرٹیکل آپ کو یہ دکھائے گا کہ ان کوڈز کا استعمال کیسے کرنا ہے یا زیادہ خاص طور پر انہیں کہاں رکھنا ہے۔

آپ اس لنک پر اسنیپٹس تلاش کر سکتے ہیں۔

https://github.com/next-press/wp-ultimo-snippets/

کوڈ شامل کرنے کے لیے آپ کے پاس 2 طریقے ہیں:

  1. اپنے تھیم کی functions.php فائل میں۔

  2. Must-Use Plugins (mu-plugins)

# اپنے تھیم کی functions.php فائل میں اسنیپٹ کیسے شامل کریں {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. اپنے WordPress Network admin dashboard میں لاگ ان کریں اور Themes > Theme Editor پر جائیں (نیچے دیے گئے اسکرین شاٹ کو دیکھیں۔)۔

  2. "Edit Themes" پیج پر، یقینی بنائیں کہ آپ نے اپنی فعال تھیم کو ڈراپ ڈاؤن فیلڈ پر منتخب کیا ہے جو سکرین کے اوپر دائیں طرف موجود ہے (#3 نیچے دیے گئے اسکرین شاٹ پر)۔

  3. "Theme Files" سیکشن کے تحت functions.php فائل پر کلک کریں تاکہ فائل لوڈ ہو جائے۔ نیچے تک اسکرول کریں اور گیتھرب ریپوزٹری سے جو Ultimate Multisite اسنیپٹ آپ کو ملا ہے اسے پیسٹ کر دیں۔

<!-- اسکرین شاٹ دستیاب نہیں: WordPress Theme Editor دکھا رہا ہے functions.php فائل کی ایڈیٹنگ -->

# Must-Use Plugins (mu-plugins) کیسے بنائیں {#how-to-create-must-use-plugins-mu-plugins}

WordPress میں ایک ایسی فیچر ہے جو آپ کو "Must-Use Plugins" یا مختصر نام "mu-plugins" کہا جاتا ہے، جسے کسٹم فنکشنلٹی لوڈ کرنے کے لیے استعمال کیا جا سکتا ہے۔

یہ خاص mu-plugins دوسرے تمام عام پلگ انز سے پہلے لوڈ ہوتے ہیں، اور انہیں غیر فعال (deactivate) نہیں کیا جا سکتا۔ ایک میلسائٹ نیٹ ورک میں، ان mu-plugins کا کوڈ آپ کی انسٹالیشن کے تمام سائٹس پر لوڈ ہوگا۔

1. اپنے WordPress انسٹالیشن کے فائل سسٹم تک رسائی حاصل کرنے کے لیے FTP یا SSH استعمال کریں۔

2۔ توهان جي WordPress installation جو wp-content directory اندر، "mu-plugins" نالو وکھريو (create) ڪريو.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3۔ پنهنجي ڪمپيوٽر تي Notepad يا ڪن هي ڪجهه به code editor استعمال ڪري هڪ نئين PHP فائل جو نالو "wu-snippet.php" رکجو.

4۔ Ultimate Multisite جو جيڪو GitHub repository کان توهان کي کوڈ مليو آهي، ان کي ان فائل اندر رکي save ڪريو. توهان هن snippet جي اوپر اهو کوڈ به شامل ڪري سگهو ٿا ته جيئن پنهنجي mu plugin کي label ڏئي سگهو.
