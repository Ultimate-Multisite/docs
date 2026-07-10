---
id: wu_minimum_password_length
title: ማጣሪያ - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

አነስተኛ የይለፍ ቃል ርዝመትን ለማጣራት።

`wu_enforce_password_rules` እውነት (true) ሲሆን ብቻ ነው የሚተገበረው።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $min_length | `int` | አነስተኛ የይለፍ ቃል ርዝመት። መነሻው 12 ነው (ከDefender Pro ጋር ይዛመዳል)። |
| $defender_active | `bool` | Defender Pro Strong Password ንቁ መሆኑን። |

### ከቀረበበት ጊዜ {#since}

- 2.4.0
### ምንጭ {#source}

በ[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ላይ በ543ኛው መስመር ተገልጿል
