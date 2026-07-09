---
title: WordPress Multisite ස්ථාපනය කරන්නේ කෙසේද
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# වර්ඩ්ප්‍රෙස්ට් මල්ටිසයිට් ස්ථාපනය කරන්නේ කෙසේද? {#how-do-i-install-wordpress-multisite}

WordPress Multisite කියන්නේ එකම ස්ථාපනයක් මත වෙබ් අඩවි ජාලයක් (network) නිර්මාණය කර ගැනීමට ඔබට ඉඩ දෙන විශේෂාංගයක්. මේක ඇතුළත් විශේෂාංගයක් වුණත්, එය පෙරනිමියෙන් ක්‍රියාත්මක වන්නේ නැහැ.

:::tip
Ultimate Multisite එකේ **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** කියන මෙවලමක් තියෙනවා. ඒක මේ මුළු ක්‍රියාවලියම ස්වයංක්‍රීය කරනවා. ඔබ Ultimate Multisite ස්ථාපනය කර ඇත්නම්, පහත අතින් මඟ පෙන්වන දේවල් වෙනුවට එම wizard එක භාවිතා කිරීම අපි නිර්දේශ කරනවා.
:::

Ultimate Multisite කියන්නේ ජාල සඳහා පමණක් සකස් කළ හැකි plugin එකක් නිසා, මේ නිබන්ධනයේදී WordPress Multisite අතින්ම (manually) ස්ථාපනය කර සැකසෙන ආකාරය ඔබට ඉගෙන ගන්නවා. මේ ලිපිය WPBeginner වෙතින් [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) මත පදනම් වී තිබෙනවා.

**ඔබේ මල්ටිසයිට් ජාලය නිර්මාණය කිරීමට පෙර අවධානය යොමු කළ යුතු කරුණු:**

  * හොඳ WordPress hosting එකක් ගන්න! ජාලයේ ඇති වෙබ් අඩවි සියල්ලම එකම සේවාදායක සම්පත් (server resources) බෙදා ගනී.

  * ඔබට අඩු ප්‍රමාණයක් සහිත වෙබ් අඩවි කිහිපයක් තිබේ නම්, shared hosting එක සාමාන්‍යයෙන් ඔබට වැඩ කරයි.

  * බොහෝ **Managed WordPress hosting providers** මගින් Multisite පෙර සැකසූ ආකාරයෙන් (out-of-the-box) ලබා දෙයි (ඔවුන් ඔබ වෙනුවෙන් WordPress සහ Multisite දැනටමත් සක්‍රීය කර වින්‍යාස කර ස්ථාපනය කරයි). WP Engine, Closte, Cloudways වැනි ඒවා මේ අවස්ථාවට අයත් වේ. ඔබේ hosting provider සඳහා මෙය අදාළ දැයි ඔබට සැකයක් ඇත්නම්, මෙම නිබන්ධනය ඉදිරියට යාමට පෙර ඔවුන්ගේ සහාය ලබා ගන්න.

  * FTP භාවිතයෙන් WordPress ස්ථාපනය කර ගොනු සංස්කරණය කිරීම පිළිබඳව දැන සිටීම ද හොඳයි.

_**වැදගත්**_ **:** පවතින WordPress වෙබ් අඩවියක මල්ටිසයිට් ජාලයක් සැකසීමේදී පහත දේ අමතක නොකරන්න:

  * ඔබේ WordPress වෙබ් අඩවියේ සම්පූර්ණ backup එකක් සාදන්න.

  * ඔබේ plugins පිටුවට ගොස් bulk actions වලින් _Deactivate_ තෝරා, පසුව _Apply_ ක්ලික් කිරීමෙන් ඔබේ වෙබ් අඩවියवरील සියලුම plugins අක්‍රිය කරන්න (deactivate).

মাল্টিসাইট চালু করার জন্য, প্রথমে FTP ক্লায়েন্ট বা cPanel ফাইল ম্যানেজার ব্যবহার করে আপনার সাইটের সাথে সংযোগ করুন এবং এডিট করার জন্য আপনার `wp-config.php` ফাইলটি খুলুন।

`_*That’s all, stop editing! Happy blogging.*_` লাইনের আগে নিচের কোড স্নিপেটটি যোগ করুন:

```php
define('WP_ALLOW_MULTISITE', true);
```

তারপর আপনার `wp-config.php` ফাইলটি সেভ করে সার্ভারে আপলোড করুন।

আপনার সাইটে মাল্টিসাইট ফিচার চালু করার পর, এখন আপনার নেটওয়ার্ক সেটআপ করার সময়।

**Tools » Network Setup** এ যান।

এখন আপনাকে ওয়ার্ডপ্রেসে আপনার নেটওয়ার্কের সাইটগুলোর জন্য আপনি কী ধরনের ডোমেইন কাঠামো ব্যবহার করবেন তা জানাতে হবে: সাবডোমেইন নাকি সাব-ডিরেক্টরি।

আপনি যদি সাবডোমেইন বেছে নেন, তবে ডোমেইন ম্যাপিংয়ের জন্য আপনার DNS সেটিংস পরিবর্তন করতে হবে এবং আপনার মাল্টিসাইট নেটওয়ার্কের জন্য _**ওয়াইল্ডকার্ড সাবডোমেইন**_ সেটআপ করা নিশ্চিত করতে হবে।

Network Setup-এ ফিরে এসে আপনার নেটওয়ার্কের জন্য একটি টাইটেল দিন এবং Network admin email-এর ইমেল ঠিকানাটি সঠিক আছে কিনা তা নিশ্চিত করুন। চালিয়ে যাওয়ার জন্য _Install_ ক্লিক করুন।

আপনার `wp-config.php`-তে ওয়ার্ডপ্রেস দ্বারা সরবরাহ করা এই কোডটি যোগ করুন:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

এবং আপনার `**.htaccess**` ফাইলে ওয়ার্ডপ্রেস দ্বারা সরবরাহ করা এই কোডটিও যোগ করুন:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# wp-admin এর জন্য শেষে একটি স্ল্যাশ যোগ করুন
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

මෙම කේතය පිටපත් කිරීමට සහ ඇලවීමට FTP client එකක් හෝ ගොනු කළමනාකරුවක් (උදාහරණයක් ලෙස cPanel වැනි දෙයක් භාවිතා කරන්නේ නම්) භාවිතා කරන්න.

අවසානයේදී, ඔබේ බහු වෙබ් අඩවි ජාලයට ප්‍රවේශ වීමට ඔබගේ WordPress වෙබ් අඩවියට නැවත ලොග් වන්න.

**Ultimate Multisite ස්ථාපනය කිරීමට පෙර ඔබේ WordPress Multisite ස්ථාපනය තුළ උප-සයිට් එකක් නිර්මාණය කර එය ක්‍රියාත්මක කළ හැකි බව පරීක්ෂා කිරීම ඉතා වැදගත් වේ.**

උප-සයිට් එකක් නිර්මාණය කරන්නේ කෙසේද:

  1. ඔබගේ වෙබ් අඩවි වල wp-admin විවෘත කරන්න

  2. My Sites > Sites (/wp-admin/network/sites.php) වෙත යන්න

  3. ඉහළින් Add New ක්ලික් කරන්න

  4. සියලුම ක්ෂේත්‍ර පුරවන්න:

  * Site Address — "www" භාවිතා නොකරන්න

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — වෙබ් අඩවියේ නම, පසුව වෙනස් කළ හැකිය

  * Admin Email — උප-සයිට් සඳහා ආරම්භක පරිපාලක පරිශීලකයා ලෙස සැකසිය යුතුය

![WordPress Multisite හි නව අඩවියක් එක් කිරීමේ පෝරමය](/img/admin/sites-list.png)

ක්ෂේත්‍ර පුරවා අවසන් වූ පසු, "Add site" බොත්තම ක්ලික් කරන්න. නව උප-සයිට් එක නිර්මාණය වූ පසු, එය ක්‍රියාත්මක දැයි තහවුරු කර ගැනීම සඳහා එයට ප්‍රවේශ වන්න.

## පොදු ගැටළු: {#add-a-trailing-slash-to-wp-admin}

### 1. මට නව අඩවි නිර්මාණය කළ හැකි නමුත් ඒවා ප්‍රවේශ විය නොහැක. {#common-problems}

ඔබ උප-โดเมන් (subdomains) තෝරා ගන්නේ නම්, ඔබේ බහු වෙබ් අඩවි ජාලය සඳහා වයිල්ඩ් කාඩ් (wildcard) උප-โดเมන් සැකසිය යුතුය.

එය කිරීමට, ඔබගේ වෙබ් අඩවියේ හොස්ටිං ගිණුමේ පාලන පැනලය වෙත යන්න (උදාහරණයක් ලෙස cPanel/Plesk/Direct Admin ඔබේ හොස්ටිං සපයන්නා අනුව).

"Domains" හෝ "Subdomains" සඳහා විකල්පයක් සොයා ගන්න. සමහර පාලන පැනලවල එය "Domain administration" ලෙස නම් කර තිබිය හැකිය.

සබඩොමේන් (subdomain) ක්ෂේත්‍රයේ, ඔබ ඇස්ටරීස්ක් (*). ලෙස ඇතුළත් කරන්න. ඉන්පසු, එම සබඩොමේනය එක් කිරීමට අවශ්‍ය වන්නේ කුමන ડોමේනය යටදැයි තෝරා ගැනීමට එය ඔබට අසනු ඇත.

තෝරාගත් ડોමේනය සඳහා මූලික ලේඛන මූලය (document root) ස්වයංක්‍රීයව හඳුනා ගනී. ඔබේ වයිල්ඩ් කාඩ් සබඩොමේනය එක් කිරීමට _Create_ හෝ _Save_ බොත්තම මත ක්ලික් කරන්න. ඇතුළත් කිරීම " *.[mydomain.com](http://mydomain.com)" ලෙස පෙනිය යුතුය.
