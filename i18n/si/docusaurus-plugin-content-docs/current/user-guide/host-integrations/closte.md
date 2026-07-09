---
title: Closte ඒකාබද්ධ කිරීම
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration {#closte-integration}

## දළ විශ්ලේෂණය (Overview) {#overview}
Closte කියන්නේ Google Cloud infrastructure මත ගොඩනැගුණු කළමනාකරණය කරන ලද WordPress hosting වේදිකාවකි. මේ සම්බන්ධතාවය හරහා Ultimate Multisite සහ Closte අතර ස්වයංක්‍රීය වෙබ් අඩවි සමමුහුර්ත කිරීම (domain syncing) සහ SSL සහතිකපත් කළමනාකරණය පහසු කරගත හැකියි.

## විශේෂාංග (Features) {#features}
- ස්වයංක්‍රීය වෙබ් අඩවි සමමුහුර්ත කිරීම (Automatic domain syncing)
- SSL සහතිකපත් කළමනාකරණය (SSL certificate management)
- Wildcard domain සඳහා සහාය (Wildcard domain support)
- Closte මත ක්‍රියාත්මක වුවහොත් කිසිදු සැකසුමක් අවශ්‍ය නොවේ.

## අවශ්‍යතා (Requirements) {#requirements}
ඔබ Closte භාවිතා කරන්නේ නම්, ඔබේ `wp-config.php` ගොනුවේ පහත constant එක නිර්වචනය කළ යුතුය:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Closte මත hosting කර ඇත්නම් මෙම constant එක සාමාන්‍යයෙන් දැනටමත් නිර්වචනය කර තිබිය යුතුය.

## සැකසුම් උපදෙස් (Setup Instructions) {#setup-instructions}

### 1. ඔබේ Closte API Key තහවුරු කරන්න (Verify Your Closte API Key) {#1-verify-your-closte-api-key}
ඔබ Closte මත hosting කරන්නේ නම්, `CLOSTE_CLIENT_API_KEY` constant එක දැනටමත් ඔබේ `wp-config.php` ගොනුවේ නිර්වචනය කර තිබිය යුතුය. මෙය පරීක්ෂා කිරීමට ඔබට ඔබේ `wp-config.php` ගොනුව පරීක්ෂා කළ හැකියි.

### 2. සම්බන්ධතාවය සක්‍රීය කරන්න (Enable the Integration) {#2-enable-the-integration}
1. ඔබේ WordPress admin එකට ගොස් Ultimate Multisite > Settings වෙත යන්න.
2. "Domain Mapping" ටැබයට (tab) යන්න.
3. පහළට "Host Integrations" වෙත ස්ක්‍රෝල් කරන්න.
4. Closte integration එක සක්‍රීය කරන්න.
5. "Save Changes" ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works) {#how-it-works}
Ultimate Multisite හිදී වෙබ් අඩවියක් map කර ඇති විට:

1. සම්බන්ධතාවය, ඔබේ යෙදුම සඳහා එම වෙබ් අඩවිය Closte API වෙත ඉල්ලීමක් (request) යවයි.
2. SSL සහතිකපත් සැපයීම (provisioning) Closte විසින් ස්වයංක්‍රීයව සිදු කරයි.
3. වෙබ් අඩවි mapping එක ඉවත් කරන විට, සම්බන්ධතාවය එම වෙබ් අඩවිය Closte වෙතින් ඉවත් කරනු ඇත.

Ultimate Multisite හි DNS check interval සැකසුම සමඟද මෙම සම්බන්ධතාවය ක්‍රියාත්මක වේ. එය DNS ප්‍රචාරණය (propagation) සහ SSL සහතිකපත් නිකුත් කිරීම කොපමණ වාරයක් පරීක්ෂා කළ යුතුද යන්න ඔබට සකස් කර ගැනීමට ඉඩ සලසයි.

## වෙබ් අඩවි වාර්තා නිර්මාණය (Domain Record Creation) {#domain-record-creation}

මෙම ඒකාබද්ධ කිරීම මගින් වෙබ් අඩවියක් නිර්මාණය කරන විට හෝ පිටපත් කරන විට, ડોමේන් වාර්තාව ස්වයංක්‍රීයව නිර්මාණය වන බව සහතික කරයි. Closte ඒකාබද්ධ කිරීම සඳහා මෙය විශේෂයෙන් වැදගත් වන්නේ, මොකද එම වාර්තා නිර්මාණය කිරීමෙන් Closte API එකට ක්ෂේත්‍රය (domain) සහ SSL සහතිකයක් නිර්මාණය කිරීමට ක්‍රියාත්මක වීමට හේතු වේ.

## ගැටළු නිරාකරණය (Troubleshooting) {#troubleshooting}

### API සම්බන්ධතා ගැටළු {#api-connection-issues}
- ඔබේ Closte API key නිවැරදි දැයි තහවුරු කරන්න.
- ඔබගේ Closte ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි බලන්න.

### SSL සහතික ගැටළු {#ssl-certificate-issues}
- Closte විසින් SSL සහතික නිකුත් කිරීමට යම් කාලයක් ගත විය හැකිය (සාමාන්‍යයෙන් මිනිත්තු 5-10).
- ඔබේ ડોමේන් නිවැරදිව ඔබගේ Closte සේවාදායකයේ IP ලිපිනයට යොමු වී තිබේදැයි තහවුරු කරන්න.
- ඔබේ ක්ෂේත්‍රය සඳහා DNS වාර්තා නිවැරදිව වින්‍යාස කර ඇති බව තහවුරු කිරීමට DNS වාර්තා පරීක්ෂා කරන්න.

### ડોමේන් එකක් එකතු නොවීම {#domain-not-added}
- Ultimate Multisite ලොග් (logs) වල දෝෂ පණිවිඩ තිබේදැයි පරීක්ෂා කරන්න.
- ක්ෂේත්‍රය දැනටමත් Closte හි එකතු කර ඇත්දැයි තහවුරු කරන්න.
- ඔබේ ක්ෂේත්‍රයේ DNS වාර්තා නිවැරදිව වින්‍යාස කර ඇති බව සහතික කරන්න.

### DNS පරීක්ෂණ කාල පරාසය (DNS Check Interval) {#dns-check-interval}
- SSL සහතික නිකුත් කිරීමට වැඩි කාලයක් ගත වන්නේ නම්, Domain Mapping සැකසුම් වල DNS පරීක්ෂණ කාල පරාසය වෙනස් කළ හැකිය.
- පෙරනිමියෙන් ඇති කාල පරාසය තත්පර 300 (විනාඩි 5) වේ, නමුත් පරීක්ෂාවන් වේගවත් කිරීම සඳහා එය තත්පර 10 දක්වා අඩු කළ හැකිය.
