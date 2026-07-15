---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

የዶሜን ግዢ ከተጠናቀቀ በኋላ ሂደት ላይ በሚሆንበት ጊዜ የሚሰራ ነው።

## መለኪያዎች {#parameters}

| ስም | አይነት | መግለጫ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | የክፍያ ዕቃ (payment object)። |
| $checkout_data | `array<string,mixed>` | ከየመመዝገቢያው ቅጽ የመጣ ሙሉ የቼክአውት መረጃ። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

በ[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) በ246ኛው መስመር ተገልጿል።
