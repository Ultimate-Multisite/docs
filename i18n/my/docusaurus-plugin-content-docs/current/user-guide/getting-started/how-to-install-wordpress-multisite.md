---
title: WordPress Multisite ကို ဘယ်လိုတပ်ဆင်မလဲ
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite ကို ဘယ်လို ထည့်သွင်းရမလဲ?

WordPress Multisite ဆိုတာ တစ်ခုတည်းသော installation ပေါ်မှာ ဝက်ဘ်ဆိုက်များ network တစ်ခု ထားရှိနိုင်စေပါတယ်။ ဒါက built-in feature တစ်ခုဖြစ်ပေမယ့် default အားဖြင့် active မဖြစ်သေးပါဘူး။

:::tip
Ultimate Multisite မှာ **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** ပါဝင်ပြီး ဒီလုပ်ငန်းစဉ်တစ်ခုလုံးကို အလိုအလျောက် လုပ်ဆောင်ပေးပါတယ်။ Ultimate Multisite ထည့်သွင်းထားပြီးသားဆိုရင် အောက်ပါ လက်ဖြင့်လုပ်ဆောင်ရမယ့် အဆင့်များအစား wizard ကို အသုံးပြုဖို့ အကြံပြုပါတယ်။
:::

Ultimate Multisite က network-only plugin ဖြစ်တဲ့အတွက် ဒီ tutorial မှာ WordPress Multisite ကို လက်ဖြင့် ထည့်သွင်းပြီး setup လုပ်နည်းကို လေ့လာရမှာဖြစ်ပါတယ်။ ဒီစာသားက WPBeginner ရဲ့ [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ကို အခြေခံထားပါတယ်။

**သင့် multisite network မဖန်တီးခင် သတိပြုရမယ့်အချက်များ:**

  * ကောင်းမွန်တဲ့ WordPress hosting ရယူပါ! Network ထဲက ဝက်ဘ်ဆိုက်တွေက server resources တွေကို မျှဝေသုံးစွဲကြပါတယ်။

  * traffic နည်းတဲ့ ဆိုက်အနည်းငယ်ပဲ ရှိမယ်ဆိုရင် shared hosting နဲ့ လုံလောက်နိုင်ပါတယ်။

  * **Managed WordPress hosting provider** အများစုက Multisite ကို out-of-the-box ပေးပါတယ် (Multisite activate လုပ်ပြီး configure လုပ်ထားတဲ့ WordPress ကို သင့်အတွက် ထည့်သွင်းပေးပါတယ်)။ WP Engine, Closte, Cloudways စတာတွေမှာ ဒီလိုပါပဲ။ သင့် host provider မှာ ဒီလိုဖြစ်မဖြစ် မသေချာရင် ဒီ tutorial ကို မဆက်ခင် သူတို့ support ကို ဆက်သွယ်မေးမြန်းပါ။

  * WordPress ထည့်သွင်းခြင်းနှင့် FTP အသုံးပြု၍ ဖိုင်များ ပြင်ဆင်ခြင်းကို အကျွမ်းတဝင်ရှိထားတာလည်း ကောင်းပါတယ်။

_**အရေးကြီး**_ **:** ရှိပြီးသား WordPress ဝက်ဘ်ဆိုက်ပေါ်မှာ multisite network setup လုပ်မယ်ဆိုရင် ဒါတွေကို မမေ့ပါနဲ့:

  * သင့် WordPress ဆိုက်ကို အပြည့်အစုံ backup လုပ်ပါ

  * သင့်ဆိုက်ရဲ့ plugin အားလုံးကို deactivate လုပ်ပါ - plugins page ကိုသွားပြီး bulk actions ထဲက _Deactivate_ ကိုရွေးပြီး _Apply_ ကိုနှိပ်ပါ

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite ကို enable လုပ်ဖို့ FTP client သို့မဟုတ် cPanel file manager သုံးပြီး သင့်ဆိုက်ကို ချိတ်ဆက်ပါ၊ ပြီးရင် wp-config.php ဖိုင်ကို ပြင်ဆင်ဖို့ ဖွင့်ပါ။

_*That's all, stop editing! Happy blogging.*_ လိုင်းရဲ့ အရှေ့မှာ အောက်ပါ code snippet ကို ထည့်ပါ:

define('WP_ALLOW_MULTISITE', true);

wp-config.php ဖိုင်ကို save လုပ်ပြီး server ပေါ်သို့ ပြန်တင်ပါ။

သင့်ဆိုက်မှာ multisite feature enable လုပ်ပြီးပြီဆိုရင် ခုဆိုရင် network ကို setup လုပ်ဖို့ အချိန်ရောက်ပါပြီ။

**Tools » Network Setup** သို့ သွားပါ

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ခုဆိုရင် သင့် network ထဲက ဆိုက်တွေအတွက် ဘယ်လို domain structure သုံးမလဲ WordPress ကို ပြောပြရပါမယ်: subdomains သို့မဟုတ် subdirectories။

Subdomains ရွေးရင် domain mapping အတွက် DNS settings ပြောင်းရပြီး သင့် multisite network အတွက် _**wildcard subdomains**_ setup လုပ်ရပါမယ်။

Network Setup ပြန်လာပြီး သင့် network အတွက် title တစ်ခုပေးပါ၊ Network admin email ထဲက email address မှန်ကန်ကြောင်း သေချာပါစေ။ ဆက်လက်ဆောင်ရွက်ဖို့ _Install_ ကိုနှိပ်ပါ။

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress က ပေးတဲ့ ဒီ code ကို သင့် _**wp-config.php**_ ထဲ ထည့်ပါ:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

WordPress က ပေးတဲ့ ဒီ code ကိုလည်း သင့် _**.htaccess**_ ဖိုင်ထဲ ထည့်ပါ:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin ရဲ့နောက်မှာ trailing slash ထည့်ပေးတယ်

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client သို့မဟုတ် file manager (cPanel လိုမျိုး သုံးနေရင်) သုံးပြီး ဒီဖိုင်နှစ်ခုထဲ code ကို copy and paste လုပ်ပါ။

နောက်ဆုံးအနေနဲ့ သင့် multisite network ကို access လုပ်ဖို့ WordPress ဆိုက်ထဲ ပြန်ဝင်ပါ။

**Ultimate Multisite မထည့်သွင်းခင် သင့် WordPress Multisite installation ပေါ်မှာ subsite တစ်ခု ဖန်တီးနိုင်ကြောင်း စမ်းသပ်ပြီး သေချာအောင်လုပ်ဖို့ အရေးကြီးပါတယ်။**

Subsite ဖန်တီးဖို့:

  1. သင့်ဝက်ဘ်ဆိုက်ရဲ့ wp-admin ကိုဖွင့်ပါ

  2. My Sites > Sites (/wp-admin/network/sites.php) သို့သွားပါ

  3. အပေါ်မှာ Add New ကိုနှိပ်ပါ

  4. field အားလုံး ဖြည့်ပါ:

  * Site Address — "www" ကို ဘယ်တော့မှ မသုံးပါနဲ့

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — ဆိုက်ရဲ့ ခေါင်းစဉ်၊ နောက်မှ ပြောင်းလဲနိုင်ပါတယ်

  * Admin Email — subsite အတွက် ပထမဆုံး admin user အဖြစ် သတ်မှတ်ပါ

![WordPress Multisite မှာ ဆိုက်အသစ်ထည့်သွင်းတဲ့ form](/img/admin/sites-list.png)

Field များ ဖြည့်ပြီးရင် "Add site" ခလုတ်ကို နှိပ်ပါ။ Subsite အသစ် ဖန်တီးပြီးသွားရင် subsite အလုပ်လုပ်ကြောင်း သေချာစေဖို့ ဝင်ကြည့်ပါ။

## ဖြစ်တတ်တဲ့ ပြဿနာများ:

### 1\. ဆိုက်အသစ်တွေ ဖန်တီးလို့ရပေမယ့် access လုပ်လို့မရဘူး။

Subdomains ရွေးခဲ့ရင် သင့် multisite network အတွက် wildcard subdomains လည်း setup လုပ်ပေးရပါမယ်။

ဒါကိုလုပ်ဖို့ သင့်ဝက်ဘ်ဆိုက် hosting account ရဲ့ control panel dashboard (ဥပမာ - သင့် hosting provider ပေါ်မူတည်ပြီး cPanel/Plesk/Direct Admin) ကိုသွားပါ။

"Domains" သို့မဟုတ် "Subdomains" option ကို ရှာပါ။ Control panel အချို့မှာ "Domain administration" လို့ ခေါ်ပါတယ်။

Subdomain field မှာ asterisk (*) ထည့်ပါ။ ပြီးရင် subdomain ထည့်ချင်တဲ့ domain name ကို ရွေးခိုင်းပါလိမ့်မယ်။

ရွေးထားတဲ့ domain name အတွက် document root ကို အလိုအလျောက် detect လုပ်ပါလိမ့်မယ်။ သင့် wildcard subdomain ထည့်ဖို့ _Create_ သို့မဟုတ် _Save_ ခလုတ်ကို နှိပ်ပါ။ Entry က "*.[mydomain.com](http://mydomain.com)" လို့ ပေါ်ရပါမယ်
