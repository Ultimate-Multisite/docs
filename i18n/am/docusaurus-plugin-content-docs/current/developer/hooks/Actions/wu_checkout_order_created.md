---
id: wu_checkout_order_created
title: ድርጊት - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

የቼክአውት ትዕዛዝ ሙሉ በሙሉ ከተጠናቀቀ በኋላ ይሰራል።

አድኦንሶች (Addons) ይህንን በመጠቀም በራሱ የክፍያ周期 (billing cycles) ባላቸው ምርቶች ላይ ሁለተኛ ደረጃ አባልነቶችን (secondary memberships) መፍጠር ይችላሉ።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | የካርት/ትዕዛዝ ኦብጀክት። |
| $customer | `\WP_Ultimo\Models\Customer` | ደንበኛው። |
| $membership | `\WP_Ultimo\Models\Membership` | ዋናው አባልነት። |
| $payment | `\WP_Ultimo\Models\Payment` | ክፍያው። |

### Since

- 2.5.0
### Source

በ[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) በ891ኛው መስመር ተገልጿል።
