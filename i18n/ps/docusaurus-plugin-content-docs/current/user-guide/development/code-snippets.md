---
title: کودې قطعات
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets بۆ v2

په اساس، **WordPress** لپاره د کد سنيپټونه هغه ځانګړت کارونه کولو لپاره کارول کیږي چې نور شاید باید یو کوچنی ځانګړي plugin وي. دا ډول کد سنيپټونه په WordPress اصلي یا Theme فایلونو (لکه معمولاً د ستونتون functions.php) کې ځای پر ځای کیږي او دوی یې MU plugin هم کارول کیری شي.

په دې مقاله کې موږ به سهره کړو چې trich code snippets راښکړو چې تاسو کولی شئ د **Ultimate Multisite v2** سره کارولی شئ:

  * [د اکاونه (Account) منوټې ځای بدلون](#changing-the-position-of-the-account-menu-item)

  * [څنګه وګورئ چې کاربری په یو ځانګړي پلان کې دی او/او فعال سبسکرپشن لري](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [په مېپ شوي د domainونو کې Font-Icons له لارې CORS مسائلی حلول](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## اکاونه (Account) منوټې ځای بدلون {#changing-the-position-of-the-account-menu-item}

د ستونتون Dashboard باندې د اکاونه (Account) منوټې ځای بدلولको लागि، فقط دا کد سنيپټ په خپل اصلي سایت کې فعال Theme د functions.php ته اضافه کړئ. تاسو کولی شئ دا سنيپټ یو له مخکې mu-plugin یا custom plugin څخه بهر هم放入 کړئ.

add_filter('wu_my_account_menu_position', function() { return 10; // دا मान بدلون ورکړئ ترڅو منوټه په غوښتل ځای کې و座ر شي.

اشتراک فعال یا نه چیک کرنے کے لیے، آپ اس فنکشن کا استعمال کر سکتے ہیں:

`wu_is_active_subscriber($user_id)`

نیچے ایک مثال دی گئی ہے جو یہ چیک کرتی ہے کہ کیا موجودہ صارف کسی خاص پلان (_Plan ID 50_) کے تحت ہے اور کیا صارف کی سبسکرپشن فعال ہے۔

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // صارف پلان کا رکن ہے اور اس کی سبسکرپشن فعال ہے، یہ کام کریں } else { // صارف پلان کا رکن نہیں ہے -- یا -- اس کی سبسکرپشن فعال نہیں ہے، کچھ اور کریں } // end if;`

نوٹ کریں کہ `wu_has_plan` کو کام کرنے کے لیے ایک "Plan ID" کی ضرورت ہوتی ہے۔

کسی پلان کا آئی ڈی حاصل کرنے کے لیے، آپ **Ultimate Multisite > Products** پر جا سکتے ہیں۔ ہر پروڈکٹ کا آئی ڈی ٹیبل کے دائیں طرف دکھایا جائے گا۔

نوٹ کریں کہ صارفین صرف کسی **پلان (Plan)** کی سبسکرائب کر سکتے ہیں، نہ کہ پیکج یا سروس، کیونکہ وہ صرف ایک **پلان** کے لیے اضافی چیزیں ہوتی ہیں۔

![Products list showing plan IDs](/img/admin/products-list.png)

## میپ شدہ ڈومینز میں فونٹ آئیکنز کے ساتھ CORS مسائل کو ٹھیک کرنا {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## میپ شدہ ڈومینز میں فونٹ آئیکنز کے ساتھ CORS مسائل کو ٹھیک کرنا {#fixing-cors-issues-with-font-icons-in-mapped-domains}

جب آپ کسی ڈومین کو سب-سائٹ پر مپ کرتے ہیں تو آپ کو یہ پتہ چل سکتا ہے کہ سائٹ کو کسٹم فونٹس لوڈ کرنے میں دشواری ہو رہی ہے۔ یہ آپ کے سرور کی سیٹنگز پر ایک کراس-اوور بلاک (cross-origin block) کی وجہ سے ہوتا ہے۔

چونکہ فونٹ فائلیں تقریباً ہمیشہ براہ راست CSS سے لوڈ ہوتی ہیں، ہمارا ڈومین میپنگ پلگ ان URL کو تبدیل نہیں کر پاتا تاکہ وہ اصل ڈومین کے بجائے مپ شدہ ڈومین کا استعمال کرے، اس لیے مسئلے کو ٹھیک کرنے کے لیے آپ کو اپنے سرور کنفیگریشن فائلوں میں ترمیم کرنے کی ضرورت ہوگی۔

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

په خپل .htaccess فایل کې، دا اضافه کړئ:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

په خپل سرور تنظیم کولو فایل کې (مکان له سرور څخه سرور بدل کیږي)، دا اضافه کړئ:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
