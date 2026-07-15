---
id: wu_stripe_webhook_membership
title: ຕົວກັ່ນຕອງ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

ກັ່ນຕອງລະບຽນສະມາຊິກທີ່ກ່ຽວຂ້ອງກັບ webhook ນີ້.

Filter ນີ້ຖືກນຳເຂົ້າມາເນື່ອງຈາກຄວາມຂັດແຍ້ງທີ່ອາດເກີດຂຶ້ນເມື່ອລູກຄ້າ Stripe ຄົນດຽວກັນອາດຖືກໃຊ້ໃນເວັບໄຊຕ່າງໆ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | ວັດຖຸສະມາຊິກ. |
| $event | `\Stripe\Event` | ເຫດການທີ່ໄດ້ຮັບ. |

### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ທີ່ບັນທັດ 2035
