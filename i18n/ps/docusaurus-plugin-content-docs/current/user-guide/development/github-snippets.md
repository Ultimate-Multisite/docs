---
title: ګیت‌هاب اسنیپټس
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# دایرکتوري کې Ultimate Multisite snippets څنګه استعمال गर्ने {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHub repository ته کوڈ کے ٹکڑے موجود ہیں جنہیں Ultimate Multisite کے صارفین اکثر مانگتے ہیں جو چھوٹے فنکشنلٹی شامل کرنا چاہتے ہیں جیسے سائن اپ پیجز پر گوگل اینالیٹکس اسکرپٹ شامل کرنا یا ایڈمن ڈیش بورڈ سے کوئی میٹا باکس چھپانا۔

یہ آرٹیکل آپ کو یہ دکھائے گا کہ ان کوڈز کا استعمال کیسے کرنا ہے یا زیادہ خاص طور پر انہیں کہاں رکھنا ہے۔

آپ نیچے دیے گئے لنک پر ٹکڑے تلاش کر سکتے ہیں۔

https://github.com/next-press/wp-ultimo-snippets/

کوڈ شامل کرنے کے لیے آپ کے پاس 2 طریقے ہیں:

  1. اپنے تھیم کی functions.php فائل میں۔

  2. Must-Use Plugins (mu-plugins)

# اپنے تھیم کی functions.php فائل پر اسنیپٹ کیسے شامل کریں {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. اپنے WordPress Network admin dashboard میں لاگ ان کریں اور Themes > Theme Editor پر جائیں (نیچے اسکرین شاٹ دیکھیں۔)

  2. "Edit Themes" پیج پر، یقینی بنائیں کہ آپ نے اپنی فعال تھیم کو اوپر دائیں کونے میں موجود ڈراپ ڈاؤن فیلڈ پر منتخب کیا ہوا ہے (#3 نیچے والے اسکرین شاٹ پر)۔

  3. "Theme Files" سیکشن کے تحت functions.php فائل پر کلک کریں تاکہ فائل لوڈ ہو جائے۔ نیچے سکرول کریں اور GitHub repository سے جو Ultimate Multisite snippet آپ کو ملا ہے اسے پیسٹ کر دیں۔

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) کیسے بنائیں {#how-to-create-must-use-plugins-mu-plugins}

WordPress میں ایک ایسی خصوصیت ہے جو آپ کو "Must-Use Plugins" یا مختصر نام "mu-plugins" کہا جاتا ہے، جسے کسٹم فنکشنلٹی لوڈ کرنے کی اجازت دیتی ہے۔

یہ خاص mu-plugins دوسرے تمام عام پلگ انز سے پہلے لوڈ ہوتے ہیں، اور انہیں غیر فعال نہیں کیا جا سکتا۔ ایک 멀ٹ سائٹ نیٹ ورک میں، ان mu-plugins کا کوڈ آپ کی انسٹالیشن کے تمام سائٹس پر لوڈ ہوگا۔

1. اپنے WordPress انسٹالیشن کے فائل سسٹم تک رسائی حاصل کرنے کے لیے FTP یا SSH استعمال کریں۔

۲۔ خپل WordPress نصب गरिएको `wp-content` د فولډ کې، یو نوی فولډ جوړ کړئ چې نوم یې: `mu-plugins` وي.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

۳۔ په خپل کمپیوټر کې Notepad یا کوم بل کوډ ایډیټر (code editor) کارولو سره یو نوی PHP فایل جوړ کړئ چې نوم یې `wu-snippet.php` وي.

۴۔ هغه Ultimate Multisite کد snippet چې تاسو یې GitHub repository څخه ترلاسه کړی، په دې فایل کې ځای پر ځای کړئ او یې سېوځولئ. تاسو کولی شئ دا کد snippet پورته اضافه کړئ ترڅو خپل mu plugin راوی (label) کړئ.
