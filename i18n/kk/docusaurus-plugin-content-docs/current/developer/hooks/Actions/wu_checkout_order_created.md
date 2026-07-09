---
id: wu_checkout_order_created
title: Әрекет - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Checkout тапсырысы толық құрастырылғаннан кейін іске қосылады.

Addons мұны тәуелсіз шот ұсыну циклдері бар өнімдер үшін қосымша мүшеліктер жасауға пайдалана алады.

## Параметрлер

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Себет/тапсырыс нысаны. |
| $customer | `\WP_Ultimo\Models\Customer` | Клиент. |
| $membership | `\WP_Ultimo\Models\Membership` | Негізгі мүшелік. |
| $payment | `\WP_Ultimo\Models\Payment` | Төлем. |

### Бастап

- 2.5.0
### Дереккөз

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) файлында 891-жолда анықталған.
