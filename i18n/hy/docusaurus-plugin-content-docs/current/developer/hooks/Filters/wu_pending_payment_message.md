---
id: wu_pending_payment_message
title: Ֆիլտր - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Թույլ է տալիս օգտվողին փոխել սպասող վճարումների մասին հաղորդագրությունը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $message | `string` | Տպելու հաղորդագրությունը։ |
| $customer | `\WP_Ultimo\Models\Customer` | Ընթացիկ հաճախորդը։ |
| $pending_payments | `array` | Սպասող վճարումներով ցանկ։ |

### Սկսած {#since}

- 2.0.19
### Աղբյուր {#source}

Սահմանված է [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244)-ում՝ 244-րդ տողում
