---
id: wu_stripe_webhook_membership
title: Шүүлтүүр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Шүүлтүүр: wu_stripe_webhook_membership

Энэ webhook-той холбоотой гишүүнчлэлийн бичлэгийг шүүнэ.

Ижил Stripe хэрэглэгч өөр өөр сайтуудад ашиглагдах үед үүсэж болзошгүй зөрчлүүдийн улмаас энэ шүүлтүүрийг нэвтрүүлсэн.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Гишүүнчлэлийн объект. |
| $event | `\Stripe\Event` | Хүлээн авсан үйл явдал. |

### Эх сурвалж

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035)-д 2035-р мөрөнд тодорхойлсон.
