---
title: cPanel ඒකාබද්ධ කිරීම
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel සමඟ සම්බන්ධ කිරීම (Integration)

## දළ විශ්ලේෂණය (Overview)
cPanel කියන්නේ බොහෝ Shared සහ Dedicated hosting providers විසින් භාවිතා කරන ජනප්‍රියම web hosting control panel එකක්. Ultimate Multisite සහ cPanel අතර ස්වයංක්‍රීය ડોමේන් සමමුහුර්තකරණය (automatic domain syncing) සඳහා මේක ඉඩ දෙනවා. ඒකෙන් ඔයාට ඔබේ cPanel ගිණුමට අමතර ડોමේන් ඇලියා (aliases) සහ උප-โดಮೇන් (subdomains) ස්වයංක්‍රීයව එකතු කරගන්න පුළුවන්.

## විශේෂාංග (Features)
- cPanel තුළ ස්වයංක්‍රීය add-on domain නිර්මාණය කිරීම
- cPanel තුළ ස්වයංක්‍රීය subdomain නිර්මාණය කිරීම (subdomain multisite installations සඳහා)
- මූලික සම්බන්ධතා (mappings) මකා දැමීමේදී ડોමේන් ඉවත් වීම

## අවශ්‍යතා (Requirements)
ඔබේ `wp-config.php` ගොනුවේ පහත constant (ස්ථාවර අගයන්) නිර්වචනය කළ යුතුයි:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

විකල්පයක් ලෙස, ඔබට පහත දේ ද නිර්වචනය කළ හැකියි:

```php
define('WU_CPANEL_PORT', 2083); // පෙරනිමිය 2083 වේ
define('WU_CPANEL_ROOT_DIR', '/public_html'); // පෙරනිමිය /public_html වේ
```

## සැකසුම් උපදෙස් (Setup Instructions)

### 1. ඔබේ cPanel තොරතුරු ලබා ගැනීම (Get Your cPanel Credentials)

1. ඔබේ hosting provider වෙතින් ඔබේ cPanel username සහ password ලබා ගන්න.
2. ඔබේ cPanel host එක හඳුනා ගන්න (සාමාන්‍යයෙන් එය `cpanel.yourdomain.com` හෝ `yourdomain.com:2083` වේ).

### 2. wp-config.php හි Constant එකතු කිරීම (Add Constants to wp-config.php)
පහත constant ගොනුවට එකතු කරන්න:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

විකල්පයක් ලෙස, ඔබට port එක සහ root directory එක වෙනස් කළ හැකියි:

```php
define('WU_CPANEL_PORT', 2083); // ඔබේ cPanel වෙනත් port එකක් භාවිතා කරන්නේ නම් මෙය වෙනස් කරන්න
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ඔබේ document root වෙනස් වන්නේ නම් මෙය වෙනස් කරන්න
```

### 3. සම්බන්ධතාවය සක්‍රිය කිරීම (Enable the Integration)

1. ඔබේ WordPress admin එකේ, Ultimate Multisite > Settings වෙත යන්න
2. "Domain Mapping" ටැබයට (tab) යන්න
3. පහළට "Host Integrations" වෙත ස්ක්‍රෝල් කරන්න
4. cPanel integration එක සක්‍රිය කරන්න
5. "Save Changes" ක්ලික් කරන්න

## එය ක්‍රියා කරන ආකාරය

### Addon Domains (අමතර වෙබ් අඩවි)

Ultimate Multisite හිදී යම් ડોමේනයක් map කර ඇති විට:

1. Integration එක cPanel API වෙත ඉල්ලීමක් යවයි, එමගින් එම ડોමේනය addon domain එකක් ලෙස එක් කරයි
2. එම ડોමේනය ඔබේ root directory එකට (මුල් ෆෝල්ඩරයට) pointing කිරීමට වින්‍යාස කර ඇත
3. Domain mapping එකක් ඉවත් කරන විට, integration එක cPanel වෙතින් එම addon domain එක ඉවත් කරනු ඇත

### Subdomains (උප-ដែន)

Subdomain multisite ස්ථාපනයන් සඳහා, නව වෙබ් අඩවියක් නිර්මාණය කරන විට:

1. Integration එක සම්පූර්ණ ડોමේ සිට subdomain කොටස පිටපත් කරයි
2. එය cPanel API වෙත ඉල්ලීමක් යවයි, එමගින් subdomain එක එක් කරයි
3. එම subdomain එක ඔබේ root directory එකට pointing කිරීමට වින්‍යාස කර ඇත

## වැදගත් සටහන්

- Integration එක ඔබගේ cPanel ගිණුම සමඟ සන්නිවේදනය කිරීමට cPanel API2 භාවිතා කරයි
- addon domains සහ subdomains එක් කිරීමට ඔබට අවශ්‍ය අවසරයන් (permissions) ඔබගේ cPanel ගිණුමට තිබිය යුතුය
- සමහර hosting providers විසින් ඔබට නිර්මාණය කළ හැකි addon domains හෝ subdomains ගණන සීමා කළ හැකිය
- Integration එක DNS configuration හැසිරවන්නේ නැත; ඔබ තවමත් ඔබේ ડોමේන් ඔබේ සේවාදායකයේ (server) IP ලිපිනයට pointing කිරීමට අවශ්‍ය වේ

## ගැටළු විසඳීම (Troubleshooting)

### API Connection Issues (API සම්බන්ධතා ගැටළු)
- ඔබගේ cPanel username සහ password නිවැරදි දැයි තහවුරු කරන්න
- ඔබගේ cPanel host නිවැරදිද සහ ප්‍රවේශ විය හැකිදැයි පරීක්ෂා කරන්න
- ඔබගේ cPanel ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න
- host සඳහා සම්පූර්ණ URL භාවිතා කිරීමට උත්සාහ කරන්න (උදාහරණයක් ලෙස: `https://cpanel.yourdomain.com`)

### Domain Not Added (Domain එක එක් කර නොමැත)
- Ultimate Multisite logs වල ඇති දෝෂ පණිවිඩ (error messages) පරීක්ෂා කරන්න
- එම ડોමේනය දැනටමත් cPanel හි එක් කර ඇත්දැයි තහවුරු කරන්න
- addon domains හෝ subdomains සඳහා ඔබගේ cPanel ගිණුමට සීමාවකට (limit) ළඟා වී නොමැති බවට වග බලා ගන්න

### SSL සහතික ප්‍රශ්න

- මෙම ඒකාබද්ධ කිරීම (integration) SSL සහතික නිකුත් කිරීම (issuance) හැසිරවන්නේ නැත.
- ඔබේ වෙබ් අඩවි සඳහා SSL සහතික ලබා ගැනීමට ඔබට cPanel හි ඇති SSL/TLS මෙවලම් හෝ AutoSSL විශේෂාංග භාවිතා කිරීමට සිදුවේ.
- වෙනත් විකල්පයක් ලෙස, cPanel හි AutoSSL සමඟ Let's Encrypt වැනි සේවාවක් භාවිතා කළ හැකිය.
