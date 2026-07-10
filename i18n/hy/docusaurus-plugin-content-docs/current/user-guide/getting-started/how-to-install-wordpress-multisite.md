---
title: Ինչպե՞ս տեղադրել WordPress Multisite-ը
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite ဘယ်လို တင်ရမလဲ။ {#how-do-i-install-wordpress-multisite}

WordPress Multisite ဆိုတာ သင့်မှာရှိတဲ့ single installation တစ်ခုတည်းပေါ်မှာ စာမျက်နှာတွေရဲ့ network တစ်ခုကို ထားရှိနိုင်စေပါတယ်။ ဒါက built-in feature တစ်ခုဖြစ်ပေမယ့် ပုံမှန်အားဖြင့် အလုပ်လုပ်နေတာ မဟုတ်ပါဘူး။

:::tip
Ultimate Multisite မှာ ဒီလုပ်ငန်းစဉ်တစ်ခုလုံးကို အလိုအလျောက် လုပ်ဆောင်ပေးတဲ့ **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** ပါဝင်ပါတယ်။ Ultimate Multisite ကို တင်ထားတယ်ဆိုရင် အောက်က လက်တွေ့ခြေလှမ်းတွေကို လိုက်လုပ်တာထက် wizard ကို သုံးဖို့ ကျွန်တော်တို့ အကြံပြုပါတယ်။
:::

Ultimate Multisite ဟာ network တစ်ခုအတွက်ပဲ plugin ဖြစ်တဲ့အတွက် ဒီ tutorial မှာ WordPress Multisite ကို ဘယ်လို manual နဲ့ install လုပ်ပြီး set up လုပ်ရမလဲဆိုတာ သင်ယူသွားမှာပါ။ ဒီစာသားဟာ WPBeginner က [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ကို အခြေခံထားတာ ဖြစ်ပါတယ်။

**သင့် multisite network တစ်ခုကို ဖန်တီးဖို့ မလုပ်ခင် သတိပြုရမယ့်အချက်များ:**

  * WordPress hosting ကောင်းကောင်း ရရှိဖို့ လိုအပ်ပါတယ်! network ပေါ်က website တွေဟာ server resource တွေကို မျှဝေသုံးကြပါတယ်။

  * traffic နည်းတဲ့ site နှစ်ခုလောက်ပဲ ရှိတယ်ဆိုရင် shared hosting က သင့်အတွက် အဆင်ပြေနိုင်ပါတယ်။

  * **Managed WordPress hosting providers** အများစုက Multisite ကို out-of-the-box (သူတို့မှာ WordPress ကို Multisite နဲ့ ပေါင်းစပ်ပြီး တည်ငြိမ်အောင် ပြင်ဆင်ပေးထားပါတယ်) ပေးလေ့ရှိပါတယ်။ WP Engine, Closte, Cloudways စတဲ့ provider တွေအတွက် ဒီလိုမျိုး ဖြစ်ပါတယ်။ သင့် hosting provider အတွက် အဲဒီလိုပဲလားဆိုတာ မသေချာရင် ဒီ tutorial ကို ဆက်သွားခင် သူတို့ရဲ့ support နဲ့ ဆက်သွယ်သင့်ပါတယ်။

  * WordPress ကို install လုပ်တာနဲ့ file တွေကို FTP နဲ့ ပြင်ဆင်တာကိုလည်း ရင်းနှီးနေဖို့ ကောင်းပါတယ်။

_**အရေးကြီးသည်**_ **:** ရှိပြီးသား WordPress website ပေါ်မှာ multisite network တစ်ခု တည်ဆောက်နေတယ်ဆိုရင် အောက်ပါအချက်တွေကို မမေ့ပါနဲ့:

  * သင့် WordPress site ရဲ့ ပြည့်စုံတဲ့ backup တစ်ခုကို ဖန်တီးထားပါ

  * သင့် plugins page ကိုသွားပြီး bulk actions ကနေ _Deactivate_ ကို ရွေးချယ်ကာ ပြီးရင် _Apply_ ကို နှိပ်ပြီး site ပေါ်က plugin အားလုံးကို 비활성화 (deactivate) လုပ်လိုက်ပါ။

<!-- Կրիպտիկ չկա: WordPress պլայնինգների էջ՝ մեծ թվով անջատելու գործողության պատկեր) -->

Մուլտիսայթը (Multisite) ապահովելու համար, նախ միացեք ձեր կայքին FTP կլիենտի կամ cPanel ֆայլերի կառավարիչի միջոցով և բացեք ձեր wp-config.php ֆայլը խմբագրելու համար։

_«Այս ամենը, դադարեցրեք խմբագրումը։ Ուրախ լինեք գրառությունների մասին»_ տողից առաջ, ավելացրեք հետևյալ կոդի հատվածը.

define('WP_ALLOW_MULTISITE', true);

Պահպանեք և վերբեռնեք ձեր wp-config.php ֆայլը սերվերին։

Ձեր կայքում մուլտիսայթի հնարավորությունը 켜ված լինելով, հենց հիմա ժամանակն է ձեր ցանցը սահմանելու համար։

Գնացեք **Tools » Network Setup** (Գործիքներ » Ցանցի սահմանում)

<!-- Կրիպտիկ չկա: WordPress Tools մենյու՝ Network Setup տարբերակը ցույց տալով) -->

Այս պահին դուք պետք է WordPress-ին ասեք, թե ինչպես եք կօգտագործում ցանցի կայքերի համար โดเมնի (domain) կառուցվածքը՝ ենթադիր տիրույթներ (subdomains) թե ենթադիր դիրքեր (subdirectories)։

Եթե ընտրեք ենթադիր տիրույթներ, ապա պետք է փոխեք ձեր DNS կարգավորումները โดเมնի քարտեզագրման համար և համոզվեք, որ սահմանեք _**wildcard subdomains**_ (վայլդկարդ ենթադիր տիրույթներ) ձեր մուլտիսայթ ցանցի համար։

Վերադառնալով Network Setup-ին, տվեք անուն ձեր ցանցին և համոզվեք, որ Network admin email-ում գտնվող էլփոստի հասցեն ճիշտ է։ Շարունակելու համար սեղմեք _Install_ (Տեղադրել)։

<!-- Կրիպտիկ չկա: WordPress Network Setup էջ՝ ցանցի անվանում և admin email դաշտերը ցույց տալով) -->

Ավելացրեք այս կոդը, որը տրամադրված է WordPress-ի կողմից, ձեր _**wp-config.php**_ ֆայլին.

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Եվ այս կոդը, որը նույնպես տրամադրված է WordPress-ի կողմից, ձեր _**.htaccess**_ ֆայլին.

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# ավելացնել վերջին սլashesը /wp-admin-ի համար {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Այս կոդը պատճենելու համար օգտագործեք FTP կլիենտ կամ ֆայլի մանրամասն վերահսկող (օրինակ՝ cPanel-ի դեպքում)։ Այն պետք է տեղադրվի երկու ֆայլում։

Վերջում, մուտք գործեք ձեր WordPress կայքը նորից՝ ձեր մուլտիսայթային ցանցին հասանելի դարձնելու համար։

**Կարևոր է ստուգել և համոզվել, որ կարողանում եք ստեղծել ենթակայք (subsite) ձեր WordPress Multisite ներդրման վրա Ultimate Multisite-ը տեղադրելուց առաջ:**

Ենթակայք ստեղծելու համար.

  1. Բացեք ձեր կայքի wp-admin-ը։
  2. Գնացեք My Sites > Sites (/wp-admin/network/sites.php)։
  3. Վերևում սեղմեք Add New (Ավելացնել նոր)։
  4. Լրացրեք բոլոր դաշտերը.

* Site Address — Չօգտագործեք «www»-ը։

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Կայքի վերնագիրը, կարելի է հետո փոխել։

* Admin Email — Սահմանեք որպես ենթակայքի սկզբնական ադմին օգտվող։

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Դաշտերը լրացնելուց հետո սեղմեք «Add site» (Ավելացնել կայք) կոճակը։ Երբ նոր ենթակայքը ստեղծվի, մուտք գործեք այն՝ համոզվելու համար, որ ենթակայքը աշխատում է։

## Հաճախ հանդիպող խնդիրներ. {#common-problems}

### 1. Ես կարող եմ ստեղծել նոր կայքեր, բայց դրանք հասանելի չեն։ {#1-i-can-create-new-sites-but-they-are-not-accessible}

Եթե դուք ընտրել ենք ենթադոսային անուններ (subdomains), ապա ձեր մուլտիսայթային ցանցի համար անհրաժեշտ է սահմանել վիլայդ բաժանարար ենթադոսային անուններ (wildcard subdomains)։

Դա անելու համար գնացեք ձեր կայքի հոස්տինգի հաշվի վերահսկողի պանելին (օրինակ՝ cPanel/Plesk/Direct Admin, կախված ձեր հոස්տինգի ընտրությունից)։

Գտեք «Domains» (Դոմեններ) կամ «Subdomains» (Ենթադոսային անուններ) տարբերակը։ Որոշ վերահսկողի պանելներում այն կարող է նշված լինել որպես «Domain administration» (Դոմենայի վարչություն)։

Subdomain alanı için bir yıldız (*) girin. Ardından, alt alan adınızın hangi alan adına ekleneceğini seçmenizi isteyen bir seçenekle karşılaşacaksınız.

Seçtiğiniz alan adı için belge kök dizini otomatik olarak tespit edilecektir. Wildcard alt alan adınızı eklemek için _Create_ veya _Save_ düğmesine tıklayın. Girişiniz " *.[mydomain.com](http://mydomain.com)" şeklinde görünmelidir.
