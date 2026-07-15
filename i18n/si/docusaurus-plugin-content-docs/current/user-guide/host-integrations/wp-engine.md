---
title: WP Engine ඒකාබද්ධ කිරීම
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine සමඟ ඒකාබද්ධ කිරීම (Integration)

## දළ විශ්ලේෂණය (Overview) {#overview}
WP Engine කියන්නේ WordPress වෙබ් අඩවි සඳහා ප්‍රශස්ත කාර්ය සාධනය, ආරක්ෂාව සහ පරිමාණය (scalability) ලබා දෙන ප්‍රමුඛ පෙළේ කළමනාකරණය කරන ලද WordPress hosting වේදිකාවකි. මේ ඒකාබද්ධ කිරීමෙන් Ultimate Multisite සහ WP Engine අතර ඩොමේන් ස්වයංක්‍රීයව සමමුහුර්ත කිරීමට (sync) හැකියාව ලැබේ.

## විශේෂාංග (Features) {#features}
- ස්වයංක්‍රීය ඩොමේන් සමමුහුර්ත කිරීම (Automatic domain syncing)
- බහුවිධ ස්ථාපන සඳහා උප-ඩොමේන් සහාය (Subdomain support for multisite installations)
- WP Engine හි දැනට පවතින පද්ධති සමඟ සුමට ඒකාබද්ධ වීම (Seamless integration with WP Engine's existing systems)

## අවශ්‍යතා (Requirements) {#requirements}
ඔබ WP Engine මත hosting කර ඇත්දැයි එය ස්වයංක්‍රීයව හඳුනාගෙන, එහි අන්තර්ගත WP Engine API භාවිතා කරයි. WP Engine plugin ක්‍රියාත්මක වී නිසි ලෙස වින්‍යාස කර ඇත්නම් වෙනත් කිසිදු සැකසුමක් අවශ්‍ය නොවේ.

කෙසේ වෙතත්, ඔබ ඒකාබද්ධ කිරීම (integration) අතින්ම වින්‍යාස කිරීමට අවශ්‍ය නම්, ඔබේ `wp-config.php` ගොනුවේ පහත නියතයන්ගෙන් එකක් නිර්වචනය කළ හැකිය:

```php
define('WPE_APIKEY', 'your_api_key'); // වඩාත් සුදුසු ක්‍රමය
// නැතිනම්
define('WPE_API', 'your_api_key'); // වෙනත් ක්‍රමයක්
```

## සැකසීමේ උපදෙස් (Setup Instructions) {#setup-instructions}

### 1. WP Engine Plugin සත්‍යාපනය කිරීම (Verify WP Engine Plugin) {#1-verify-wp-engine-plugin}
ඔබ WP Engine මත hosting කර ඇත්නම්, WP Engine plugin දැනටමත් ස්ථාපනය වී ක්‍රියාත්මක වී තිබිය යුතුය. පහත දේ තහවුරු කරන්න:

1. WP Engine plugin ක්‍රියාත්මක දැයි පරීක්ෂා කරන්න.
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ගොනුව තිබේදැයි පරීක්ෂා කරන්න.

### 2. ඒකාබද්ධ කිරීම සක්‍රීය කිරීම (Enable the Integration) {#2-enable-the-integration}
1. ඔබේ WordPress admin එකට ගොස් Ultimate Multisite > Settings වෙත යන්න.
2. "Domain Mapping" ටැබයට (tab) යන්න.
3. "Host Integrations" යටත ඇති කොටස පහළට අනුචලනය කරන්න.
4. WP Engine integration සක්‍රීය කරන්න.
5. "Save Changes" ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works) {#how-it-works}

### ඩොමේන් සමමුහුර්ත කිරීම (Domain Syncing) {#domain-syncing}
Ultimate Multisite හිදී ඩොමේනය මාරු කළ විට:

1. ඒකාබද්ධතාව WP Engine API භාවිතා කරමින් එම ඩොමේනය ඔබේ WP Engine ස්ථාපනයට එකතු කරයි.
2. ඩොමේන් වින්‍යාසය සහ SSL සහතික කිරීම (SSL certificate issuance) WP Engine විසින් සිදු කරයි.
3. ඩොමේන් මාරු කිරීම ඉවත් කරන විට, ඒකාබද්ධතාව එම ඩොමේනය WP Engine වෙතින් ඉවත් කරනු ඇත.

### උප-ඩොමේන් සහාය (Subdomain Support) {#subdomain-support}

සබ්ડોමේන් මල්ටිසයිට් ස්ථාපනය සඳහා:

1. අලුත් වෙබ් අඩවියක් නිර්මාණය කරන විට, මෙම ඒකාබද්ධ කිරීම (integration) සෑම සබ්ડોමේන් එකක්ම WP Engine වෙත එක් කරයි.
2. WP Engine විසින් සබ්ડોමේන් සැකසුම් කළමනාකරණය කරයි.
3. වෙබ් අඩවියක් මකා දැමූ විට, එම ඒකාබද්ධ කිරීමෙන් සබ්ડોමේන් එක WP Engine වෙතින් ඉවත් කරනු ඇත.

## වැදගත් සටහන් {#important-notes}

### වයිල්ඩ්කාඩ් ડોමේන් (Wildcard Domains) {#wildcard-domains}

සබ්ડોමේන් මල්ටිසයිට් ස්ථාපන සඳහා, එක් එක් සබ්ડોමේන් එක වෙන වෙනම එකතු කිරීමට අවශ්‍ය නොවන පරිදි සියලුම සබ්ඩෝමේන් ස්වයංක්‍රීයව ක්‍රියාත්මක වීමට ඉඩ දීම සඳහා වයිල්ඩ්කාඩ් ડોමේන් සැකසුමක් (wildcard domain configuration) ඉල්ලා WP Engine ආධාරකයෙන් සම්බන්ධ වීම නිර්දේශ කෙරේ.

### SSL සහතිකපත් (SSL Certificates) {#ssl-certificates}

මෙම ඒකාබද්ධ කිරීම හරහා එකතු කරන සියලුම ડોමේන් සඳහා SSL සහතිකපත් නිකුත් කිරීම සහ අලුත් කිරීම WP Engine විසින් ස්වයංක්‍රීයව කළමනාකරණය කරයි. වෙනත් කිසිදු සැකසුමක් අවශ්‍ය නොවේ.

## ගැටළු විසඳීම (Troubleshooting) {#troubleshooting}

### API සම්බන්ධතා ගැටළු {#api-connection-issues}
- WP Engine plugin ක්‍රියාත්මක වී නිවැරදිව සකසා ඇති බව තහවුරු කරන්න.
- ඔබ අතින් API key එක නිර්වචනය කර ඇත්නම්, එය නිවැරදි දැයි පරීක්ෂා කරන්න.
- API සම්බන්ධයෙන් ඔබට ගැටළු තිබේ නම් WP Engine ආධාරකයට සම්බන්ධ වන්න.

### ડોමේන් එකක් එකතු නොවීම {#domain-not-added}
- ඕනෑම දෝෂ පණිවිඩ (error messages) සඳහා Ultimate Multisite logs පරීක්ෂා කරන්න.
- එම ડોමේන් එක දැනටමත් WP Engine වෙත එකතු වී නොමැති බව තහවුරු කරන්න.
- ඔබ එකතු කිරීමට බලාපොරොත්තු වන ડોමේන් ගණන ඔබේ WP Engine plan මගින් සහාය දෙන බව තහවුරු කර ගන්න.

### සබ්ડોමේන් ගැටළු {#subdomain-issues}
- සබ්ඩෝමේන් ක්‍රියා නොකරන්නේ නම්, වයිල්ඩ්කාඩ් ડોමේන් සැකසුමක් ඉල්ලා WP Engine ආධාරකයට සම්බන්ධ වන්න.
- ප්‍රධාන ડોමේනය සහ සබ්ඩෝමේන් සඳහා ඔබේ DNS සැකසුම් නිවැරදිව සකසා ඇති බව තහවුරු කරන්න.
