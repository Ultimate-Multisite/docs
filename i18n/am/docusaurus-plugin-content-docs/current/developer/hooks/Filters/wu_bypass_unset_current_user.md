---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

ገንቢዎች (developers) የአሁን ተጠቃሚን (current user) የማጥፋት (unset) ኮድ እንዲዘልል ያስችላል።

ከnull ውጪ ሌላ ነገር መመለስ (returning) የአሁን በተመዘገበ ተጠቃሚ (current user) የማጥፋት ሂደቱን ይዘልላል። ይህ በተለያዩ ሁኔታዎች ጠቃሚ ሊሆን ይችላል፣ ለምሳሌ፣ እንደ የአስተዳዳሪ ፓነሎች (admin panels) ጥቅም ላይ በሚውሉ ንዑስ ድረ-ገጾች (sub-sites) ሲሰሩ።

## መለኪያዎች (Parameters) {#parameters}

| ስም (Name) | አይነት (Type) | መግለጫ (Description) |
|------|------|-------------|
| $null_or_bypass | `mixed` | ወደፊት ለመሄድ null፣ ሌላ ማንኛውም ነገር ደግሞ እንዲዘልል ያደርጋል። |
| $current_user | `false\|\WP_User` | የአሁን ተጠቃሚው ኦብጀክት (object)። |

### ከዚህ ጊዜ ጀምሮ (Since) {#since}

- 2.0.11
### ምንጭ (Source) {#source}

በ[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) በ221ኛው መስመር ተገልጿል

## የሚመልሰው (Returns) {#returns}
