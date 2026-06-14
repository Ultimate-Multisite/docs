---
title: របៀបដំឡើង WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# តើខ្ញុំដំឡើង WordPress Multisite ដោយរបៀបណា?

WordPress Multisite អនុញ្ញាតឱ្យអ្នកមានបណ្តាញគេហទំព័រនៅលើការដំឡើងតែមួយ។ វាគឺជាមុខងារដែលមានស្រាប់ ប៉ុន្តែវាមិនដំណើរការដោយស្វ័យប្រវត្តិទេ។

:::tip
Ultimate Multisite រួមបញ្ចូលទាំង **[Built-in Multisite Setup Wizard](./multisite-setup-wizard)** ដែលធ្វើឱ្យដំណើរការទាំងមូលនេះក្លាយជាស្វ័យប្រវត្តិ។ ប្រសិនបើអ្នកបានដំឡើង Ultimate Multisite ហើយ យើងសូមណែនាំឱ្យប្រើ wizard ជំនួសឱ្យការធ្វើតាមជំហានដោយដៃខាងក្រោម។
:::

ដោយសារ Ultimate Multisite ជា plugin ដែលសម្រាប់បណ្តាញតែប៉ុណ្ណោះ នៅក្នុងមេរៀននេះ អ្នកនឹងរៀនពីរបៀបដំឡើង និងកំណត់រចនាសម្ព័ន្ធ WordPress Multisite ដោយខ្លួនឯង។ អត្ថបទនេះផ្អែកលើ [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ពី WPBeginner។

**ចំណុចដែលត្រូវយកចិត្តទុកដាក់មុនពេលបង្កើតបណ្តាញ multisite របស់អ្នក៖**

  * ទទួលបាន hosting WordPress ដែលល្អ! គេហទំព័រនៅលើបណ្តាញចែករំលែកធនធានម៉ាស៊ីនមេដូចគ្នា។

  * ប្រសិនបើអ្នកមានគេហទំព័រត្រឹមតែមួយចំនួនដែលមានការចូលប្រើទាប Shared hosting អាចនឹងដំណើរការសម្រាប់អ្នកបាន។

  * អ្នកផ្តល់សេវា **Managed WordPress hosting providers** ភាគច្រើនផ្តល់ Multisite ដោយភ្ជាប់មកជាមួយ (ពួកគេដំឡើង WordPress ជាមួយនឹង Multisite ដែលបានបើក និងកំណត់រចនាសម្ព័ន្ធរួចហើយ)។ នេះគឺជាករណីរបស់ WP Engine, Closte, Cloudways ជាដើម។ ប្រសិនបើអ្នកមិនច្បាស់ថាវាជាករណីសម្រាប់អ្នកផ្តល់ hosting របស់អ្នកទេ សូមទាក់ទងផ្នែកជំនួយរបស់ពួកគេមុននឹងបន្តមេរៀននេះ។

  * ក៏ល្អដែរក្នុងការស្គាល់ពីរបៀបដំឡើង WordPress និងកែសម្រួលឯកសារដោយប្រើ FTP ផងដែរ។

_**សំខាន់ណាស់**_ **:** ប្រសិនបើអ្នកកំពុងកំណត់រចនាសម្ព័ន្ធបណ្តាញ multisite នៅលើគេហទំព័រ WordPress ដែលមានរួចហើយ សូមកុំភ្លេចធ្វើដូចខាងក្រោម៖

  * បង្កើត backup រួមនៃគេហទំព័រ WordPress របស់អ្នកឱ្យពេញលេញ។

  * បិទ (Deactivate) plugin ទាំងអស់នៅលើគេហទំព័ររបស់អ្នក ដោយចូលទៅកាន់ trang plugins របស់អ្នក ហើយជ្រើសរើស _Deactivate_ ពី bulk actions រួចចុចលើ _Apply_។

ដើម្បីបើក Multisite អ្នកត្រូវភ្ជាប់ទៅកាន់គេហទំព័ររបស់អ្នកជាមុនសិន ដោយប្រើ FTP client ឬ cPanel file manager ហើយបើកឯកសារ `wp-config.php` របស់អ្នកសម្រាប់ការកែសម្រួល។

មុនបន្ទាត់ _*នោះគ្រប់យ៉ាងហើយ សូមបញ្ឈប់ការកែសម្រួល! សុភមង្គលក្នុងការប្លុក។*_ សូមបន្ថែមនូវកូដខាងក្រោមនេះ៖

```php
define('WP_ALLOW_MULTISITE', true);
```

រក្សាទុក និងបង្ហោះឯកសារ `wp-config.php` របស់អ្នកត្រឡប់ទៅកាន់ server វិញ។

នៅពេលដែលមុខងារ multisite ត្រូវបានបើកនៅលើគេហទំព័ររបស់អ្នកហើយ ឥឡូវនេះដល់ពេលរៀបចំបណ្តាញរបស់អ្នកហើយ។

ចូលទៅកាន់ **Tools » Network Setup** (ឧបករណ៍ » ការរៀបចំបណ្តាញ)

ឥឡូវនេះ អ្នកត្រូវប្រាប់ WordPress អំពីប្រភេទនៃរចនាសម្ព័ន្ធដែនដែលអ្នកនឹងប្រើសម្រាប់គេហទំព័រនៅក្នុងបណ្តាញរបស់អ្នក៖ subdomains ឬ subdirectories។

ប្រសិនបើអ្នកជ្រើសរើស subdomains អ្នកត្រូវផ្លាស់ប្តូរការកំណត់ DNS របស់អ្នកសម្រាប់ការបំប្លែងដែន (domain mapping) និងត្រូវប្រាកដថាបានตั้งค่า _**wildcard subdomains**_ សម្រាប់បណ្តាញ multisite របស់អ្នក។

ត្រឡប់ទៅ Network Setup វិញ បញ្ចូលចំណងជើងសម្រាប់បណ្តាញរបស់អ្នក ហើយត្រូវប្រាកដថាអាសយដ្ឋានអ៊ីមែលនៅក្នុង email 管理 (Network admin email) គឺត្រឹមត្រូវ។ ចុច _Install_ ដើម្បីបន្ត។

បន្ថែមកូដនេះ ដែលផ្តល់ដោយ WordPress ទៅក្នុងឯកសារ _**wp-config.php**_ របស់អ្នក៖

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

ហើយកូដនេះ ដែលផ្តល់ដោយ WordPress ក៏ទៅក្នុងឯកសារ _**.htaccess**_ របស់អ្នកផងដែរ៖

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# បន្ថែម trailing slash ទៅកាន់ /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ប្រើ FTP client ឬ file manager (ដូចជា cPanel, ဥပမာ) ကို သုံးပြီး ဒီ code နှစ်ခုထဲမှာ ကူးထည့်ပါ။

နောက်ဆုံးအနေနဲ့ WordPress site ထဲကို ပြန်ဝင်ပြီး သင့် multisite network ကို ဝင်ကြည့်ဖို့ လိုပါတယ်။

**Ultimate Multisite ကို install မလုပ်ခင် သင့်ရဲ့ WordPress Multisite မှာ subsite တစ်ခု ဖန်တီးနိုင်ကြောင်း စမ်းသပ်ပြီး အတည်ပြုဖို့ အရေးကြီးပါတယ်။**

Subsite တစ်ခု ဖန်တီးဖို့အတွက်-

  ၁။ သင့် website ရဲ့ wp-admin ကို ဖွင့်ပါ။

  ၂။ My Sites > Sites (/wp-admin/network/sites.php) ကို သွားပါ။

  ၃။ အပေါ်ဆုံးက Add New ကို နှိပ်ပါ။

  ၄။ အချက်အလက်အားလုံးကို ဖြည့်ပါ-

  * Site Address — "www" ကို ဘယ်တော့မှ မသုံးရပါနဲ့။

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — website ရဲ့ ခေါင်းစဉ်ဖြစ်ပြီး နောက်မှ ပြောင်းလို့ရပါတယ်။

  * Admin Email — subsite အတွက် ပထမဆုံး admin user အနေနဲ့ သတ်မှတ်ပါ။

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

အချက်အလက်တွေ ဖြည့်ပြီးရင် "Add site" ခလုတ်ကို နှိပ်လိုက်ပါ။ subsite အသစ်တစ်ခု ဖန်တီးပြီးသွားရင် အဲဒါက အလုပ်လုပ်ရဲ့လား စစ်ဆေးဖို့ သွားဝင်ကြည့်ပေးပါ။

## အဖြစ်များတဲ့ ပြဿနာများ-

### ၁။ ကျွန်တော်က website အသစ်တွေ ဖန်တီးနိုင်ပေမယ့် ဝင်လို့မရဘူး။

သင် subdomain တွေကို ရွေးချယ်ထားတယ်ဆိုရင် သင့် multisite network အတွက် wildcard subdomains တွေကိုလည်း စီစဉ်ပေးဖို့ လိုပါတယ်။

ဒါကို လုပ်ဖို့အတွက် သင့် Website ရဲ့ hosting account control panel dashboard ကို သွားပါ။ (ဥပမာ cPanel/Plesk/Direct Admin ဆိုတာ သင့် hosting provider ပေါ် မူတည်ပါတယ်)။

"Domains" ဒါမှမဟုတ် "Subdomains" ဆိုတဲ့ ရွေးချယ်စရာတစ်ခုကို ရှာပါ။ Control panel အချို့မှာတော့ "Domain administration" လို့လည်း ခေါ်နိုင်ပါတယ်။

في حقل النطاق الفرعي (subdomain field)، أدخل علامة النجمة (*). بعد ذلك، سيطلب منك اختيار اسم النطاق الذي تريد إضافة النطاق الفرعي تحت هذا النطاق.

سيتم اكتشاف جذر المستند (document root) للنطاق المحدد تلقائيًا. انقر على زر _Create_ أو _Save_ لإضافة النطاق الفرعي البدل (wildcard subdomain) الخاص بك. سيبدو الإدخال هكذا: “*.[mydomain.com](http://mydomain.com)”
