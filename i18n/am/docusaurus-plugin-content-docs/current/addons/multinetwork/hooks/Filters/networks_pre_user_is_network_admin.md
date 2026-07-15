---
id: networks_pre_user_is_network_admin
title: ማጣሪያ - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

ተጠቃሚው አስተዳዳሪ የሆነባቸውን ኔትወርኮች በማጣራት፣ ሂደቱን በቀጥታ እንዲያልፍ ያደርጋል።

## መለኪያዎች {#parameters}

| ስም | አይነት | መግለጫ |
|------|------|-------------|
| $ | `array\|bool\|null` | የኔትወርክ አይዲዎች ዝርዝር ወይም false። ከnull በስተቀር ሌላ ማንኛውም ነገር ሂደቱን በቀጥታ እንዲያልፍ ያደርጋል። |
| $ | `int` | ኔትወርኮቹ ሊመለከቱባቸው የሚገባቸውን ተጠቃሚ አይዲ (User ID)። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

በ[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) ፋይል ላይ በ688ኛው መስመር ተገልጿል።
