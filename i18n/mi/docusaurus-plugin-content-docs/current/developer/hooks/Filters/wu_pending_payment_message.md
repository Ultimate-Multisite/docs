---
id: wu_pending_payment_message
title: Tātari - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Tātari: wu_pending_payment_message

Tukuna te kaiwhakamahi kia huri i te karere mō ngā utu e tārewa ana.

## Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $message | `string` | Te karere hei tā. |
| $customer | `\WP_Ultimo\Models\Customer` | Te kiritaki o nāianei. |
| $pending_payments | `array` | He rārangi me ngā utu e tārewa ana. |

### Mai i

- 2.0.19
### Pūtake

Kua tautuhia ki [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) i te rārangi 244
