---
id: wu_enforce_password_rules
title: ማጣሪያ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

ተጨማሪ የይለፍ ቃል ህጎችን የሚያስከብር መጣሪያ ነው።

እውነት ከሆነ (true)፣ አነስተኛ ርዝመት እና የፊደል መስፈርቶችን ያስከብራል። ይህ ባህሪ ለ "Super Strong" ቅንብርም ሆነ የDefender Pro Strong Password ባህሪ ሲንቀሳቀስ በራስ-ሰር ይንቀሳቀሳል።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $enforce_rules | `bool` | ተጨማሪ ህጎችን የሚያስከብር መሆኑን። |
| $strength_setting | `string` | የአስተዳሚው (admin) ቅንብር ዋጋ። |
| $defender_active | `bool` | Defender Pro Strong Password ን የሚያስከብር መሆኑን። |

### Since {#since}

- 2.4.0
### Source {#source}

በ[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) በ531ኛው መስመር ተገልጿል።
