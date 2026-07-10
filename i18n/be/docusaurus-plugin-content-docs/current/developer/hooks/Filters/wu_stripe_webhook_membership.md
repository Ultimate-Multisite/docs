---
id: wu_stripe_webhook_membership
title: Фільтр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Фільтруе закорд пра ўступленне, звязаны з гэтым webhook.

Гэты фільтр быў прадстаўлены з-за канфліктаў, якія могуць ўзнікнуць, калі адным і тым Stripe-klіентам будзе выкарыстоўвацца на розных сайтах.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Абыяект ўступленне. |
| $event | `\Stripe\Event` | Падбыт, які атрыманы. |

### Выказчык {#source}

Вызначаны ў [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) на 2035-й паўніне.
