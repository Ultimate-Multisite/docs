---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

ተጠቃሚው ስለሚጠብቁ ክፍያዎች (pending payments) የሚታየውን መልዕክት እንዲቀይር ያስችላል።

## መለኪያዎች (Parameters) {#parameters}

| Name | Type | መግለጫ (Description) |
|------|------|-------------|
| $message | `string` | ሊታተም የሚገባው መልዕክት። |
| $customer | `\WP_Ultimo\Models\Customer` | የአሁኑ ደንበኛ። |
| $pending_payments | `array` | የጠብቅ ክፍያዎች ዝርዝር። |

### ከ (Since) {#since}

- 2.0.19
### ምንጭ (Source) {#source}

በ[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) በ244ኛው መስመር ተገልጿል።
