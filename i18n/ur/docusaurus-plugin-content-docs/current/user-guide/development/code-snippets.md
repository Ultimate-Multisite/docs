---
title: کوڈ سنیپٹس
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 کے لیے کوڈ کے ٹکڑے

بنیادی طور پر، **WordPress** کے لیے کوڈ کے ٹکڑے ان مخصوص کاموں کو انجام دینے کے لیے استعمال ہوتے ہیں جن کے لیے بصورت دیگر کوئی الگ چھوٹا plugin درکار ہو سکتا ہے۔ اس قسم کے کوڈ کے ٹکڑے WordPress کی بنیادی یا theme فائلوں میں سے کسی ایک میں رکھے جاتے ہیں (عام طور پر آپ کی theme کی functions.php فائل میں) یا انہیں MU plugin کے طور پر استعمال کیا جا سکتا ہے۔

اس مضمون میں ہم آپ کو تین کوڈ کے ٹکڑے دکھائیں گے جو **Ultimate Multisite v2** کے ساتھ استعمال کیے جا سکتے ہیں:

  * [**Account مینو آئٹم کی پوزیشن تبدیل کرنا**](#changing-the-position-of-the-account-menu-item)

  * [**یہ کیسے چیک کریں کہ صارف کسی مخصوص پلان میں ہے اور/یا اس کی subscription فعال ہے**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**میپ شدہ ڈومینز میں Font-Icons کے CORS مسائل کو حل کرنا**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account مینو آئٹم کی پوزیشن تبدیل کرنا

اپنے کلائنٹ کے Dashboard پر Account مینو آئٹم کی پوزیشن تبدیل کرنے کے لیے، بس درج ذیل کوڈ کا ٹکڑا اپنی مین سائٹ کی فعال theme کی functions.php میں شامل کریں۔ آپ اس ٹکڑے کو اپنے کسی mu-plugin یا custom plugin میں بھی رکھ سکتے ہیں۔

add_filter('wu_my_account_menu_position', function() { return 10; // مینو کو مطلوبہ پوزیشن پر رکھنے کے لیے اس قدر کو تبدیل کریں۔

## یہ کیسے چیک کریں کہ صارف کسی مخصوص پلان میں ہے اور/یا اس کی subscription فعال ہے

ایک network admin کی حیثیت سے، آپ کو ایسے custom فنکشنز بنانے کی ضرورت پڑ سکتی ہے جو بنیادی کام انجام دیں یا کوئی سروس/فیچر سبسکرائبرز یا اینڈ یوزرز کے منتخب گروپ کو ان کی subscription کی حیثیت اور جس پلان میں وہ شامل ہیں اس کی بنیاد پر دستیاب کرائیں۔

Ultimate Multisite کے یہ مقامی فنکشنز آپ کی اس میں مدد کریں گے۔

یہ چیک کرنے کے لیے کہ صارف کسی مخصوص پلان کا رکن ہے، آپ یہ فنکشن استعمال کر سکتے ہیں:

wu_has_plan($user_id, $plan_id)

یہ چیک کرنے کے لیے کہ subscription فعال ہے، آپ یہ فنکشن استعمال کر سکتے ہیں:

wu_is_active_subscriber($user_id)

نیچے ایک مثال کا ٹکڑا دیا گیا ہے جو چیک کرتا ہے کہ موجودہ صارف کسی مخصوص پلان (_پلان ID 50_) میں ہے اور کیا صارف کی subscription فعال ہے۔

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // صارف پلان کا رکن ہے اور اس کی SUBSCRIPTION فعال ہے، کام کریں} else { // صارف پلان کا رکن نہیں ہے -- یا -- اس کی SUBSCRIPTION فعال نہیں ہے، کوئی اور کام کریں} // end if;

نوٹ کریں کہ _**wu_has_plan**_ کو کام کرنے کے لیے "Plan ID" درکار ہے۔

کسی پلان کی ID حاصل کرنے کے لیے، آپ **Ultimate Multisite > Products** پر جا سکتے ہیں۔ ہر پروڈکٹ کی ID ٹیبل کے دائیں جانب دکھائی جائے گی۔

نوٹ کریں کہ صارفین صرف **Plan** میں سبسکرائب ہو سکتے ہیں، Package یا Service میں نہیں، کیونکہ یہ صرف **Plan** کے لیے add-ons ہیں۔

![پلان IDs دکھاتی پروڈکٹس کی فہرست](/img/admin/products-list.png)

## میپ شدہ ڈومینز میں Font-Icons کے CORS مسائل کو حل کرنا
## میپ شدہ ڈومینز میں Font-Icons کے CORS مسائل کو حل کرنا

کسی ڈومین کو sub-site سے میپ کرنے کے بعد آپ کو معلوم ہو سکتا ہے کہ سائٹ کو custom fonts لوڈ کرنے میں مشکل ہو رہی ہے۔ یہ آپ کے سرور کی سیٹنگز میں cross-origin بلاک کی وجہ سے ہوتا ہے۔

چونکہ font فائلیں تقریباً ہمیشہ براہ راست CSS سے لوڈ ہوتی ہیں، ہمارا domain mapping plugin اصل ڈومین کی بجائے میپ شدہ ڈومین استعمال کرنے کے لیے URLs کو دوبارہ نہیں لکھ سکتا، لہذا مسئلہ حل کرنے کے لیے، آپ کو اپنے سرور کی configuration فائلوں میں ترمیم کرنی ہوگی۔

نیچے Apache اور NGINX کے لیے مسئلہ حل کرنے والے کوڈ کے ٹکڑے دیے گئے ہیں۔ ان تبدیلیوں کے لیے سرور configuration فائلوں (.htaccess فائلز اور NGINX config فائلز) کا پیشہ ورانہ علم درکار ہے۔ اگر آپ خود یہ تبدیلیاں کرنے میں آرام محسوس نہیں کرتے، تو مدد مانگتے وقت یہ صفحہ اپنے ہوسٹنگ فراہم کنندہ کے سپورٹ ایجنٹس کو بھیج دیں۔

### Apache

اپنی .htaccess فائل میں، یہ شامل کریں:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

اپنی سرور config فائل میں (جس کا مقام سرور سے سرور مختلف ہوتا ہے)، یہ شامل کریں:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
