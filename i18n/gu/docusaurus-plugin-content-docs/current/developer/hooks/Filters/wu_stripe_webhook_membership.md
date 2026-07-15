---
id: wu_stripe_webhook_membership
title: ફિલ્ટર - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

આ વેબહૂક સાથે જોડાયેલ સભ્યપદ (membership) રેકોર્ડને ફિલ્ટર કરે છે.

આ ફિલ્ટર એટલા માટે ઉમેરવામાં આવ્યું છે કે જ્યારે એક જ Stripe ગ્રાહકનો ઉપયોગ વિવિધ સાઇટ્સ પર થઈ શકે છે, ત્યારે જે સંઘર્ષ (conflicts) ઊભો થઈ શકે છે તેને ટાળી શકાય.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | સભ્યપદ ઓબ્જેક્ટ. |
| $event | `\Stripe\Event` | પ્રાપ્ત થયેલ ઇવેન્ટ. |

### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) માં લાઇન 2035 પર વ્યાખ્યાયિત છે.
