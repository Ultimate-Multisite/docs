---
title: ڪوڊ سنيپٽس
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 لاءِ کوڈ سنيپٹس

بنیادی طور تے، **WordPress** لکو کوڈ سنيپٹس وہ کام کرن واسطے استعمال کی جاتی ہیں جن کے لیے شاید کوئی الگ چھوٹی پگئنٹ (plugin) درکار ہو سکے۔ یہ کوڈ سنيپٹس WordPress کے کور یا تھیم فائل میں سے کسی ایک میں رکھے جاتے ہیں (عام طور پر آپ کے تھیم کی functions.php فائل میں)، یا انہیں MU پگئنٹ کے طور پر استعمال کیا جا سکتا ہے۔

اس مضمون میں ہم تین کوڈ سنيپٹس دکھائیں گے جو **Ultimate Multisite v2** کے ساتھ استعمال ہو سکتے ہیں:

  * [**Account مینو آئٹم کی جگہ تبدیل کرنا**](#changing-the-position-of-the-account-menu-item)

  * [**یہ چیک کرنے کا طریقہ کہ صارف کسی دی گئی پلان پر ہے اور/یا اس کی کوئی فعال سبسکرپشن ہے**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**매پڈ ڈومینز میں Font-Icons کے ساتھ CORS مسائل کو ٹھیک کرنا**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account مینو آئٹم کی جگہ تبدیل کرنا {#changing-the-position-of-the-account-menu-item}

اپنے کلائنٹ کے ڈیش بورڈ پر Account مینو آئٹم کی جگہ بدلنے کے لیے، بس درج ذیل کوڈ سنيپٹ کو اپنے مین سائٹ کے فعال تھیم کی functions.php میں شامل کر دیں۔ آپ اس سنيپٹ کو اپنی کسی mu-plugin یا کسٹم پگئنٹ کے اندر بھی رکھ سکتے ہیں۔

add_filter('wu_my_account_menu_position', function() { return 10; // اس ویلیو کو تبدیل کریں تاکہ مینو مطلوبہ جگہ پر آئے۔

सब्सक्रिप्शन فعال ہے یا نہیں چیک کرنے کے لیے، آپ اس فنکشن کا استعمال کر سکتے ہیں:

`wu_is_active_subscriber($user_id)`

نیچے ایک مثال دی گئی ہے جو یہ چیک کرتی ہے کہ کیا موجودہ صارف کسی خاص پلان (_Plan ID 50_) کے تحت ہے اور کیا صارف کی سبسکرپشن فعال ہے۔

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // یوزر پلان کا رکن ہے اور اس کی سبسکرپشن فعال ہے، کچھ کریں } else { // یوزر پلان کا رکن نہیں ہے -- یا -- اس کی سبسکرپشن فعال نہیں ہے، کچھ اور کریں } // end if;`

نوٹ یہ ہے کہ `**wu_has_plan**` کو کام کرنے کے لیے ایک "Plan ID" درکار ہوتی ہے۔

کسی پلان کا آئی ڈی حاصل کرنے کے لیے، آپ **Ultimate Multisite > Products** پر جا سکتے ہیں۔ ہر پروڈکٹ کا آئی ڈی ٹیبل کے دائیں طرف دکھایا جائے گا۔

نوٹ یہ ہے کہ صارفین صرف کسی **Plan** کی سبسکرائب کر سکتے ہیں، نہ کہ کسی Package یا Service کی، کیونکہ وہ صرف ایک **Plan** کے لیے اضافی چیزیں (add-ons) ہوتی ہیں۔

![Products list showing plan IDs](/img/admin/products-list.png)

## میپ شدہ ڈومینز میں Font-Icons کے ساتھ CORS مسائل کو ٹھیک کرنا {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## میپ شدہ ڈومینز میں Font-Icons کے ساتھ CORS مسائل کو ٹھیک کرنا {#fixing-cors-issues-with-font-icons-in-mapped-domains}

کسی ڈومین کو سب-سائٹ پر میپ کرنے کے بعد آپ کو یہ پتہ چل سکتا ہے کہ سائٹ کو کسٹم فونٹس لوڈ کرنے میں دشواری ہو رہی ہے۔ یہ آپ کے سرور کی سیٹنگز پر ایک کراس-اوورنگ بلاک (cross-origin block) کی وجہ سے ہوتا ہے۔

چونکہ فونٹ فائلیں تقریباً ہمیشہ براہ راست CSS سے لوڈ ہوتی ہیں، ہمارا ڈومین میپنگ پلگ ان URLs کو تبدیل کرنے کے قابل نہیں ہے تاکہ وہ اصل ڈومین کے بجائے میپ شدہ ڈومین استعمال کریں، اس لیے مسئلے کو ٹھیک کرنے کے لیے آپ کو اپنے سرور کنفیگریشن فائلوں میں ترمیم (amend) کرنے کی ضرورت ہوگی۔

Apache

توهان جي .htaccess فائل ۾، هي شي شامل ڪريو:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

توهان جي سرور جي ڪيپشن فائل (جنهن جو مقام هر سرور تي مختلف ٿيندو آهي)، هي شي شامل ڪريو:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
