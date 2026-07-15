---
id: wu_stripe_webhook_membership
title: Զտիչ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Ֆիլտր՝ wu_stripe_webhook_membership

Ֆիլտրում է այս webhook-ի հետ կապված անդամակցության գրառումը։

Այս ֆիլտրը ներդրվել է այն հակասությունների պատճառով, որոնք կարող են առաջանալ, երբ նույն Stripe հաճախորդը կարող է օգտագործվել տարբեր կայքերում։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Անդամակցության օբյեկտը։ |
| $event | `\Stripe\Event` | Ստացված իրադարձությունը։ |

### Աղբյուր {#source}

Սահմանված է [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035)-ում՝ 2035-րդ տողում
