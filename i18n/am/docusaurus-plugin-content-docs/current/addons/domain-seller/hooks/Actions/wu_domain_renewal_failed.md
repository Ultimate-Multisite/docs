---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

የዶሜን እድሳት ሙከራ ከተሳካ በኋላ የሚተገበር ድርጊት (Action)።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | እድስሳቱን ያስጀመረው ክፍያ። |
| $renewal_data | `array&lt;string,mixed&gt;` | የእድሳት መረጃ (የዶሜን ስም፣ ዓመታት ወዘተ)። |
| $error_message | `string` | ከሪጅስትራው የመጣ በሰው ሊነበበ የሚችል የስህተት መልዕክት። |

### Since

- 2.0.0
### Source

በ[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ፋይል ውስጥ በ630ኛው መስመር ተገልጿል።
