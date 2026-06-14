---
title: Hostinger (hPanel) ඒකාබද්ධ කිරීම
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) සමඟ සම්බන්ධ කිරීම

## දළ විශ්ලේෂණය

Hostinger කියන්නේ hPanel කියලා නමක් තියෙන, අලුත්ම පාලන පැනලයක් සහිත ජනප්‍රිය වෙබ් හොස්ටිං සේවා සපයන්නෙක්. Ultimate Multisite Hostinger integration එක මගින් Ultimate Multisite සහ Hostinger හි hPanel අතර ඩොමේන් ස්වයංක්‍රීයව සමමුහුර්ත කිරීමට (sync) ඉඩ දෙනවා. මේකෙන් ඔයාට WordPress admin එකේ සිටම ඩොමේන් මැප් කිරීම් සහ උප-โดเมන් (subdomains) ස්වයංක්‍රීයව කළමනාකරණය කරන්න පුළුවන්.

## විශේෂාංග

- hPanel තුළ අතින් ඇඩ්ඔන්ඩ් ඩොමේන් නිර්මාණය වීම
- hPanel තුළ උප-โดเมන් නිර්මාණය වීම (උප-โดเมන් බහු-සite ස්ථාපනය සඳහා)
- මැප් කිරීම් මකා දැමූ විට ඩොමේන් ඉවත් වීම
- hPanel හි ඩොමේන් කළමනාකරණ API සමඟ සුමට සම්බන්ධතාවයක්

## අවශ්‍යතා

Hostinger integration එක භාවිතා කිරීමට ඔබට පහත දේ අවශ්‍යයි:

1. hPanel ප්‍රවේශය සහිත Hostinger ගිණුමක්
2. Hostinger වෙතින් ලැබෙන API token එකක්
3. ඔබේ `wp-config.php` ගොනුවේ පහත constant (ස්ථාවර අගයන්) නිර්වචනය කර තිබිය යුතුය:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

විකල්පයක් ලෙස, ඔබට පහත දේ ද නිර්වචනය කළ හැකිය:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // පෙරනිම API අවසාන ලක්ෂ්‍යය (Default API endpoint)
```

## සැකසීමේ උපදෙස්

### 1. ඔබේ Hostinger API Token එක ජනනය කරන්න

1. ඔබේ Hostinger ගිණුමට ලොග් වී hPanel වෙත පිවිසෙන්න.
2. **Account Settings** → **API Tokens** වෙත යන්න.
3. **Create New Token** ක්ලික් කරන්න.
4. ඔබේ token එකට විස්තරාත්මක නමක් දෙන්න (උදාහරණයක් ලෙස, "Ultimate Multisite").
5. අවශ්‍ය අවසරයන් තෝරන්න:
   - Domain management
   - Subdomain management
6. ජනනය වූ token එක පිටපත් කර ආරක්ෂිතව ගබඩා කරන්න.

### 2. ඔබේ ගිණුම් ID සොයා ගන්න

1. hPanel තුළ, **Account Settings** → **Account Information** වෙත යන්න.
2. ඔබේ Account ID මෙම පිටුවේ පෙන්වනු ඇත.
3. ඊළඟ පියවර සඳහා මෙම ID පිටපත් කර සුරකින්න.

### 3. wp-config.php හි Constant එකතු කරන්න

පහත constant (ස්ථාවර අගයන්) ඔබේ `wp-config.php` ගොනුවේ එක් කරන්න:

```php
define('WU_HOSTINGER_API_TOKEN', 'ඔබේ_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'ඔබේ_hostinger_account_id');
```

ඔබේ Hostinger ගිණුම වෙනත් API endpoint එකක් භාවිතා කරන්නේ නම්, ඔබට එය tùy chỉnh කළ හැකිය:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ඒකාබද්ධ කිරීම සක්‍රීය කිරීම (Enable the Integration)

1. ඔබේ WordPress admin එකේ, **Ultimate Multisite > Settings** වෙත යන්න.
2. **Domain Mapping** ටැබයට යන්න.
3. පහළට **Host Integrations** වෙත ස්ක්‍රෝල් කරන්න.
4. **Hostinger (hPanel)** integration එක සක්‍රීය කරන්න.
5. **Save Changes** ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works)

### Addon Domains (අමතර ડોමේන්)

Ultimate Multisite හි ඔබ යම් ડોමේනයක් map කරන විට:

1. ඒකාබද්ධ කිරීම Hostinger API වෙත ඉල්ලීමක් යවයි, එමගින් එම ડોමේනය add-on domain එකක් ලෙස එක් කරයි.
2. එම ડોමේනය ඔබේ root directory එකට pointing කිරීමට වින්‍යාස කරනු ලැබේ.
3. ඔබ Domain Mapping එකක් ඉවත් කරන විට, ඒකාබද්ධ කිරීම hPanel එකෙන් add-on domain එක ස්වයංක්‍රීයව ඉවත් කරයි.

### Subdomains (උප ડોමේන්)

subdomain multisite ස්ථාපනයන් සඳහා, නව වෙබ් අඩවියක් නිර්මාණය කරන විට:

1. ඒකාබද්ධ කිරීම සම්පූර්ණ ડોමේ සිට subdomain කොටස ගනු ලබයි.
2. එය subdomain එක Hostinger API වෙත එක් කිරීමට ඉල්ලීමක් යවයි.
3. එම subdomain එක ඔබේ root directory එකට pointing කිරීමට වින්‍යාස කරනු ලැබේ.

## වැදගත් සටහන් (Important Notes)

- ඒකාබද්ධ කිරීම ඔබේ ගිණුම සමඟ සන්නිවේදනය කිරීමට Hostinger හි REST API භාවිතා කරයි.
- ඔබගේ API token එකට ડોමේන් සහ subdomain කළමනාකරණය සඳහා අවශ්‍ය අවසරයන් තිබිය යුතුය.
- ඒකාබද්ධ කිරීම DNS වින්‍යාස (configuration) හැසිරවන්නේ නැත; ડોමේන් දැනටමත් ඔබේ Hostinger ගිණුමට pointing කර තිබිය යුතුය.
- API ඉල්ලීම් HTTPS හරහා ආරක්ෂිතව සිදු කෙරේ.
- ඔබගේ API token එක ආරක්ෂිතව තබා ගන්න, එය කිසිවිටෙකත් ප්‍රසිද්ධියේ බෙදා නොගන්න.

## ගැටළු නිරාකරණය (Troubleshooting)

### API Connection Issues

API ටෝකනය නිවැරදිද සහ එය තවමත් කරලා නැද්ද කියලා පරීක්ෂා කරන්න
ඔබේ Account ID නිවැරදිද කියලා බලන්න
โดเมන් කළමනාකරණය සඳහා ඔබේ API token එකට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න
ඔබේ Hostinger ගිණුම ක්‍රියාකාරීව සහ හොඳ තත්ත්වයක පවතින්නේ දැයි තහවුරු කරන්න

### ඩොමේනය එකතු කර නොමැත (Domain Not Added)

- Ultimate Multisite logs වල දෝෂ පණිවිඩ තිබේදැයි බලන්න
- ඔබේ Hostinger ගිණුමට එම ඩොමේනය දැනටමත් එකතු වී ඇත්දැයි තහවුරු කරන්න
- අමතර ඩොමේන් (addon domains) සඳහා ඔබේ Hostinger ගිණුමට සීමාවකට එළඹී තිබේදැයි බලන්න
- ඩොමේනය නිවැරදිව ඔබේ Hostinger nameservers වෙත යොමු කර ඇත්දැයි තහවුරු කරන්න

### SSL සහතික ප්‍රශ්න (SSL Certificate Issues)

- මෙම ඒකාබද්ධ කිරීම මගින් SSL සහතික නිකුත් කිරීම සිදු නොවේ
- Hostinger සාමාන්‍යයෙන් AutoSSL හරහා නොමිලේ SSL සහතික ලබා දෙයි
- **SSL/TLS** යටතේ hPanel එකේදී ඔබට SSL සහතික කළමනාකරණය කළ හැකිය
- වෙනත් විකල්පයක් ලෙස, Hostinger හි AutoSSL විශේෂාංගය සමඟ Let's Encrypt භාවිතා කරන්න

## සහාය (Support)

Hostinger ඒකාබද්ධ කිරීම සම්බන්ධයෙන් අමතර උදව් සඳහා කරුණාකර පහත දේ බලන්න:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
