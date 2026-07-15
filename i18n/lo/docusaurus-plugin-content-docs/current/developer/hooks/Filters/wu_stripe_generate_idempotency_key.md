---
id: wu_stripe_generate_idempotency_key
title: ຕົວກອງ - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# ຕົວກັ່ນຕອງ: wu_stripe_generate_idempotency_key

ກັ່ນຕອງຄ່າ idempotency_key ທີ່ສົ່ງໄປກັບຕົວເລືອກການເກັບເງິນຂອງ Stripe.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $idempotency_key | `string` | ຄ່າຂອງ idempotency key. |
| $args | `array` | ອາກິວເມັນທີ່ໃຊ້ເພື່ອຊ່ວຍສ້າງ key. |
| $context | `string` | ບໍລິບົດທີ່ idempotency key ຖືກສ້າງຂຶ້ນພາຍໃຕ້. |

### ຕັ້ງແຕ່ {#since}

- 3.5.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ທີ່ແຖວ 54
