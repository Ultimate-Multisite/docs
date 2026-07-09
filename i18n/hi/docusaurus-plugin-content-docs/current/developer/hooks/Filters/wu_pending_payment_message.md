---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

उपयोगकर्ता को लंबित भुगतानों (pending payments) के बारे में संदेश बदलने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | वह संदेश जिसे प्रिंट किया जाएगा। |
| $customer | `\WP_Ultimo\Models\Customer` | वर्तमान ग्राहक। |
| $pending_payments | `array` | लंबित भुगतानों की सूची। |

### कब से {#since}

- 2.0.19
### स्रोत {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) में लाइन 244 पर परिभाषित किया गया है।
