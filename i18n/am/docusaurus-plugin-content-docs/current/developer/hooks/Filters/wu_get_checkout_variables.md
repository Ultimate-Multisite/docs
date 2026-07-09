---
id: wu_get_checkout_variables
title: ማጣሪያ - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

የፕልጊን ገንቢዎች የቼክአውት ገጽ ቅድመ-ቅንብሮችን እንዲያስተካክሉ (filter) ያስችላል።

ጥንቃቄ ያድርጉ፤ ቁልፎች (keys) ከጠፉ የቼክአውት ስራው በገጹ ላይ ሙሉ በሙሉ ሊበላሽ ይችላል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | በቋንቋ የተስተካከሉ (Localized) ተለዋዋጮች። |
| $checkout | `\Checkout` | የቼክአውት ክፍል (class)። |

### Since {#since}

- 2.0.0
### Source {#source}

በ[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) በ1970ኛው መስመር ተገልጿል።

## Returns {#returns}
የተሻሻለው የተለዋዋጮች (variables) አሬይ።
