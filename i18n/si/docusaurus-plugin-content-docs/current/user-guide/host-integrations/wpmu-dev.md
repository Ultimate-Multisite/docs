---
title: WPMU DEV ඒකාබද්ධ කිරීම
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV සමඟ ඒකාබද්ධ කිරීම (Integration)

## දළ විශ්ලේෂණය (Overview)
WPMU DEV කියන්නේ WordPress වෙබ් අඩවි සඳහා හොස්ටිං, plugins සහ සේවාවන් ලබා දෙන පුළුල් වේදිකාවක්. මේකෙන් Ultimate Multisite එක සහ WPMU DEV hosting අතර automatically domain syncing සහ SSL certificate management සිදු කරන්න පුළුවන්.

## විශේෂාංග (Features)
- ස්වයංක්‍රීය domain syncing කිරීම
- SSL certificate කළමනාකරණය
- දීර්ඝ කරන ලද SSL certificate verification උත්සාහයන්

## අවශ්‍යතා (Requirements)
ඔබ WPMU DEV එකේ host කරන්නේ නම්, මේ integration එක automatically හඳුනාගෙන built-in API එක භාවිතා කරනවා. ඔබ WPMU DEV එකේ host කරන්නේ නම් අමතර සැකසුම් (configuration) අවශ්‍ය වන්නේ නැහැ.

WPMU DEV එකේ host කරන විට `WPMUDEV_HOSTING_SITE_ID` constant එක තිබේදැයි integration එක පරීක්ෂා කරනවා.

## සැකසීමේ උපදෙස් (Setup Instructions)

### 1. WPMU DEV Hosting තහවුරු කිරීම (Verify WPMU DEV Hosting)
ඔබ WPMU DEV එකේ host කරන්නේ නම්, අවශ්‍ය constant එක දැනටමත් නිර්වචනය කර තිබිය යුතුයි. පහත දේවල් පරීක්ෂා කරන්න:

1. ඔබේ environment එකේ `WPMUDEV_HOSTING_SITE_ID` constant එක නිර්වචනය කර තිබේදැයි බලන්න
2. API ප්‍රවේශය සහිත ක්‍රියාකාරී WPMU DEV සාමාජිකත්වයක් (membership) ඔබ සතුදැයි බලන්න

### 2. Integration එක සක්‍රීය කිරීම (Enable the Integration)
1. ඔබේ WordPress admin එකට ගොස් Ultimate Multisite > Settings වෙත යන්න
2. "Domain Mapping" tab එකට යන්න
3. පහළට "Host Integrations" වෙත ස්ක්‍රෝල් කරන්න
4. WPMU DEV integration එක සක්‍රීය (Enable) කරන්න
5. "Save Changes" ක්ලික් කරන්න

## එය ක්‍රියා කරන ආකාරය (How It Works)

### Domain Syncing
Ultimate Multisite එකේ domain එක map කර ඇති විට:

1. Integration එක WPMU DEV API භාවිතා කරලා ඔබේ hosting ගිණුමට domain එක එකතු කරනවා
2. ඒ වගේම, domain එකේ www version එකත් automatically එකතු කරනවා
3. domain configuration සහ SSL certificate නිකුත් කිරීම WPMU DEV විසින් සිදු කරයි

### SSL Certificate Management

මෙම සම්බන්ධතාවය, SSL සහතිකපත් නිකුත් කිරීමට සහ ස්ථාපනය කිරීමට කාලය ගත විය හැකි බැවින්, WPMU DEV සත්කාරකත්වය සඳහා SSL සහතික කිරීමේ උත්සාහයන් ගණන වැඩි කිරීමට වින්‍යාස කර ඇත. පෙරනිමියෙන්, එය සම්මත 5 උත්සාහයන් වෙනුවට SSL සහතික කිරීම සඳහා උපරිම වතාවක් 10 දක්වා උත්සාහ කරයි.

## වැදගත් සටහන්

### ප්‍රදේශ ඉවත් කිරීම (Domain Removal)

වර්තමානයේදී, WPMU DEV API මගින් ප්‍රදේශ ඉවත් කිරීමට ක්‍රමයක් ලබා දී නොමැත. Ultimate Multisite හි ප්‍රදේශ අනුmapping එකක් ඉවත් කළ විට, එම ප්‍රදේශය ඔබේ WPMU DEV සත්කාරකත්ව ගිණුමේ පවතිනු ඇත. අවශ්‍ය නම් ඔබට එය WPMU DEV සත්කාරකත්ව දෘෂ්ටි දර්ශනයෙන් (dashboard) අතින්ම ඉවත් කිරීමට සිදුවනු ඇත.

### API認証 (API Authentication)

මෙම සම්බන්ධතාවය, ඔබේ WordPress දත්ත සමුදායේ `wpmudev_apikey` විකල්පය ලෙස ගබඩා කර ඇති WPMU DEV API key භාවිතා කරයි. ඔබේ වෙබ් අඩවිය WPMU DEV සමඟ සම්බන්ධ කරන විට මෙය ස්වයංක්‍රීයව සකසනු ලැබේ.

## ගැටළු නිරාකරණය (Troubleshooting)

### API සම්බන්ධතා ගැටළු
- ඔබේ වෙබ් අඩවිය WPMU DEV සමඟ නිසි ලෙස සම්බන්ධ කර ඇත්දැයි තහවුරු කරන්න.
- `wpmudev_apikey` විකල්පය ඔබේ WordPress දත්ත සමුදායේ සකසා තිබේදැයි පරීක්ෂා කරන්න.
- ඔබේ WPMU DEV සාමාජිකත්වය ක්‍රියාත්මක (active) කර ඇත්දැයි තහවුරු කරන්න.

### SSL සහතිකපත් ගැටළු
- WPMU DEV විසින් SSL සහතිකපත් නිකුත් කිරීමට කාලය ගත විය හැකිය (සාමාන්‍යයෙන් මිනිත්තු 5-15).
- SSL සහතික සඳහා උපරිම වතාවක් 10 දක්වා පරීක්ෂා කිරීමට සම්බන්ධතාවය වින්‍යාස කර ඇත.
- උත්සාහයන් කිහිපයකට පසුත් SSL සහතික නිකුත් නොවුණහොත්, WPMU DEV ආධාරක අංශයට (support) සම්බන්ධ වන්න.

### ප්‍රදේශ එකතු නොවීම
- ඕනෑම දෝෂ පණිවිඩ සඳහා Ultimate Multisite ලොග් (logs) පරීක්ෂා කරන්න.
- එම ප්‍රදේශය දැනටමත් WPMU DEV වෙත එකතු වී ඇත්දැයි තහවුරු කරන්න.
- ඔබ එක් කරන ප්‍රදේශ ගණන ඔබේ WPMU DEV සත්කාරකත්ව සැලැස්මට සහාය වේ දැයි තහවුරු කර ගන්න.
