---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

ਇਹ ਫਿਲਟਰ ਇਸ ਵੇਬਹুক ਨਾਲ ਜੁੜੇ ਮੈਂਬਰਸ਼ਿਪ ਰਿਕਾਰਡ ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

ਇਹ ਫਿਲਟਰ ਇਸ ਲਈ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਸੀ ਕਿਉਂਕਿ ਜਦੋਂ ਇੱਕੋ Stripe ਕਸਟਮਰ ਨੂੰ ਵੱਖ-ਵੱਖ ਸਾਈਟਾਂ 'ਤੇ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ, ਤਾਂ ਟਕਰਾਅ (conflicts) ਪੈਦਾ ਹੋ ਸਕਦੇ ਹਨ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | ਮੈਂਬਰਸ਼ਿਪ ਆਬਜੈਕਟ। |
| $event | `\Stripe\Event` | ਪ੍ਰਾਪਤ ਹੋਇਆ ਇਵੈਂਟ। |

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
