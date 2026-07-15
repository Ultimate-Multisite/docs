---
id: wu_stripe_generate_idempotency_key
title: ફિલ્ટર - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# ફિલ્ટર: wu_stripe_generate_idempotency_key

આ ફિલ્ટર Stripe ચાર્જ વિકલ્પો સાથે મોકલાતા `idempotency_key` મૂલ્યને ફિલ્ટર કરે છે.

## પેરામીટર્સ (Parameters) {#parameters}

| નામ (Name) | પ્રકાર (Type) | વર્ણન (Description) |
|------|------|-------------|
| $idempotency_key | `string` | `idempotency_key` નું મૂલ્ય. |
| $args | `array` | કી જનરેટ કરવામાં મદદ કરવા માટે વપરાતા આર્ગ્યુમેન્ટ્સ. |
| $context | `string` | જે સંદર્ભમાં `idempotency_key` જનરેટ કરવામાં આવે છે. |

### ક્યારથી (Since) {#since}

- 3.5.0
### સ્ત્રોત (Source) {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) માં લાઇન 54 પર વ્યાખ્યાયિત.
