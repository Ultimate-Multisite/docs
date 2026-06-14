---
title: Pa tsom nrhiav cách thib WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Ինչպե՞ս ենք տեղադրում WordPress Multisite-ը։

WordPress Multisite-ը թույլ է տալիս մեկ տեղադրման մեջ միացված կայքերի ցանց ստեղծել։ Սա ներկառուցված հնարավորություն է, բայց դեֆոլտով չի աշխատում։

:::tip
Ultimate Multisite-ը ներառում է **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**՝ ամբողջ գործընթացը ավտոմատացնելու համար։ Եթե Ultimate Multisite-ն տեղադրված է, մենք խորհուրդ ենք տալիս օգտագործել այս wizard-ը, քան հետևել ներքևում տրված ձեռնարկային քայլերին։
:::

Քանի որ Ultimate Multisite-ը միայն ցանցի համար նախատեսված plugin է, այս դասընթացում դուք կսովորեք՝ WordPress Multisite-ը ձեռքով տեղադրել և սահմանել։ Այս տեքստը հիմնված է [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) վրա, WPBeginner-ից։

**Ձեր multisite ցանց ստեղծելուց առաջ ուշադրություն դարձրու այս բաներին.**

  * Ստացեք լավ WordPress hosting! Ցանցի կայքերը օգտագործում են նույն սերվերի ռեսուրսները։

  * Եթե ունեք միայն քանի կայք և ցածր ծանրաբեռնվածություն, shared hosting-ը հավանաբար բավարար լինի ձեզ համար։

  * Շատ **Managed WordPress hosting providers** առաջարկում են Multisite-ը պատրաստի վիճակում (նրանք WordPress-ը տեղադրում են Multisite-ով արդեն ակտիվացված և կոնֆիգուրացված)։ Սա WP Engine, Closte, Cloudways և այլն համար է։ Եթե չեք համոզված, թե արդյոք դա ձեր հոստինգի ընկերության համար այդպես է, խորհրդակցեք նրանց աջակցության հետ՝ շարունակելու այս տեսանելի քայլերը։

  * WordPress-ը տեղադրելու և ֆայլերով խմբագրելու համար FTP-ով (File Transfer Protocol) ծանոթ լինել նույնպես լավ է։

_**ԿԱՐԵՎՈՐ**_ **:** Եթե դուք ստեղծում եք multisite ցանց գոյություն ունեցող WordPress կայքում, մի մոռացեք.

  * Ձեր WordPress կայքի ամբողջական backup-ը ստեղծել։

  * Անջատել ձեր կայքի բոլոր plugin-ները՝ գնալով ձեր plugins էջը և bulk actions-ից ընտրելով _Deactivate_ (Անջատել) և հետո սեղմելով _Apply_ (Կիրառել)։

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite-a (WordPress Multisite) བསྒྲུབ་པའི་ཆེད་དུ་, ཁྱེད་ཀྱི་ site එකདང་འབྲེལ་ཐབས་གཙོ་བོར་ FTP client կամ cPanel file manager བེད་སྤྱོད་བྱས་ནས་ edit လုပ်ဖို့ wp-config.php file ကို བསྐྱལ་དགོས་པ་དང་།

_That’s all, stop editing! Happy blogging._ (འདི་ལྟར་རེད། edit མང་པོ་བྱས་པ་ཡག་རེད།) ལས་ကြောင်း འདིའི་སྔོན་མ་ནས་, code snippet འདི་བཀྲལ་དགོས་པ་དང་།

define('WP_ALLOW_MULTISITE', true);

Save (བསྐྱལ་) དང་ upload (བསྐྱལ་) བྱས་ནས་ wp-config.php file 盘ར་ server ལ་བསྐྱལ་དགོས།

ཁྱེད་ཀྱི་ site එක上面 multisite feature འདི་བསྒྲུབ་པ་གྲུབ་པ་ལས་, ད་ལྟ་ network setup (network བཟོ་) བྱེད་རྒྱུ་ཡིན།

**Tools » Network Setup** (Tools » Network Setup) ལ་ចូលགནང་།

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ད་དུས་, WordPress ལ་ཁྱེད་ཀྱི་ network འདི་ནང་ site ཚོ་ག་རེ་བཟང་པོ་ domain structure སྤྱོད་རྒྱུ་ཡིན་པ་ (subdomains ཡིན་ན་ཡང་ན་ subdirectories) ག་རེ་བཞིན་གསལ་བཤད་བྱེད་དགོས་པ་དགོས།

ཁྱེད་ཀྱིས་ subdomain ཚོ་བསྐྱར་བཏོན་ན། domain mapping འདི་ལས་ DNS settings ཚོ་བསྒྱུར་དགོས་པ་དང་, multisite network ལ་_**wildcard subdomains**_ (subdomain མང་པོ་ཞིག་) setup བྱེད་རྒྱུ་ཡིན་པ་དྲན་དགོས།

Network Setup ལ་ཕྱིད་ནས་, ཁྱེད་ཀྱི་ network ལ་title (མཚན་) བྲིས་དང་, Network admin email address འདི་ຖືກຕ້ອງཡོད་པ་དྲན་དགོས། Install (བསྒྲུབ་) ལ་클릭བྱས་ནས་បន្តလုပ်རོགས།

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress གིས་ཁྱེད་ཀྱི་ _**wp-config.php**_ file ལ་འདི་བཀྲལ་ཡོད་པའི་ code འདི་བཀྲལ་དགོས།

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

ហើយ WordPress གིས་ _**.htaccess**_ file ལ་བཀྲལ་ཡོད་པའི་ code འདི་བཀྲལ་དགོས།

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use FTP client loss or file manager (if you are using something like cPanel, for example) to copy and paste the code in these two files.

Finally, re-login to your WordPress site to access your multisite network.

**Quan daws xav tsis txhob uji thiab txiav txim si ti koj yuav tsum tsim subsite rau installation WordPress Multisite hauv peb tsis txhob install Ultimate Multisite.**

U tsim subsite:

  1. Luv lub websites wp-admin
  2. Navigates mus My Sites > Sites (/wp-admin/network/sites.php)
  3. Click Add New ntawm lub ib rau hauv
4. Fill out all fields:

* Site Address — Tsis txhob qauv "www"

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Lub twb ntawm lub site, yuav muaj lub sijhawm tsis txhob thov

* Admin Email — Set li tus user admin tsim rau subsite hnub tshiab

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Thaum sau lub fields tam, click lub "Add site" button. Thaum tsim subsite tshiab los, mus thov thiab ua kom koj paub ti subsite zoo.

## Common Problems:

### 1\. Kuv tsim sites tsim tsis tau paub.

Yog koj txiav txim si subdomain, koj yuav tsum setup wildcard subdomains rau lub network Multisite hauv peb.

U ua leej twg, mus thov rau control panel ntawm lub hosting account hauv lub Website (om tam cPanel/Plesk/Direct Admin tsis txhob hloov tseg tseg tseg tseg).

Find lub option rau “Domains” loss cov “Subdomains”. Rau saib tseem ceeb, qhov no yuav muaj ib yam.

Tha talangin subdomain field, hais asterisk (*). Tom qab, nws yuav hais koj thov xav siv domain name uas koj xav teeb loj (subdomain) hauv ntawd.

Document root rau domain name uas koj xav siv yuav tshawb sau txawv (automatically detected). Thawm ntawm _Create_ lossis _Save_ button los ntawm lub teeb loj (wildcard subdomain) koj. Lub teeb loj yuav muaj tus ntsuam zoo li “*.[mydomain.com](http://mydomain.com)”
