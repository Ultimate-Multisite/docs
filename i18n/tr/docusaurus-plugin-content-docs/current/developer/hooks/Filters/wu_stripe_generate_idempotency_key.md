---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Stripe ödeme seçenekleriyle gönderilen `idempotency_key` değerini filtreler.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | İdempotency anahtarının değeri. |
| $args | `array` | Anahtarı oluşturmaya yardımcı olmak için kullanılan argümanlar. |
| $context | `string` | İdempotency anahtarının oluşturulduğu bağlam. |

### Başlangıç

- 3.5.0
### Kaynak

54. satırda [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) içinde tanımlanmıştır.
