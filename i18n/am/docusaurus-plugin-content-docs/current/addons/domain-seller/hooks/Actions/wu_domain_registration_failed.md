---
id: wu_domain_registration_failed
title: ድርጊት - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

የዶሜን ምዝገባ ሙከራ ሲከሽፍ (ሲወድቅ) ይሠራል።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ምዝገባውን ያስነሳ ክፍያ። |
| $registration_data | `array&lt;string,mixed&gt;` | ስታተስ (status=failed) እና የስህተት መልዕክት (error_message) የያዘ የምዝገባ መረጃ። |
| $error_message | `string` | ከምዝገባ ባለስልጣን የመጣ በቀላሉ ሊነበበው የሚችል የስህተት መልዕክት። |

### ከምንበት {#since}

- 2.0.0
### ምንጭ {#source}

በ[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) በ1250ኛው መስመር ተገልጿል።
