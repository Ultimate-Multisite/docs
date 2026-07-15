---
id: wu_minimum_password_strength
title: ማጣሪያ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

የሚፈለገውን ዝቅተኛ የይለፍ ቃል ጥንካሬ (zxcvbn ውጤት) ለማጣራት ይጠቅማል።

የጥንካሬ ደረጃዎች፡ - 0, 1: በጣም ደካማ - 2: ደካማ - 3: መካከለኛ - 4: ጠንካራ (default)

## መለኪያዎች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | የሚያስፈልገው ዝቅተኛ የጥንካሬ ደረጃ። |
| $strength_setting | `string` | የአስተዳሚው (admin) ቅንብር ዋጋ (medium, strong, super_strong)። |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
