---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Bu webhook ilə əlaqəli olan üzvlik qeydini filtrləyir.

Bu filter, eyni Stripe müştərisinin fərqli saytlarda istifadə edilməsi zamanı yarana biləcək konfliktlər səbəbindən əlavə edilmişdir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Üzvlik obyekti. |
| $event | `\Stripe\Event` | Alınan hadisə (event). |

### Mənbə {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) faylının 2035-ci sətirində təyin edilmişdir.
