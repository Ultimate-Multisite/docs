---
id: wu_stripe_existing_plan_id
title: Filtre - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtre: wu_stripe_existing_plan_id

Kontrol edilecek planın ID'sini filtreler. Eğer bu ID mevcutsa, yeni abonelik bu planı kullanacaktır.

## Parametreler

| Adı | Tip | Açıklama |
|------|------|-------------|
| $plan_id | `string` | Kontrol edilecek Stripe planının ID'si. |
| $membership_level | `object` | Üyelik seviyesi nesnesi. |

### Kaynak

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) dosyasında 2653. satırda tanımlanmıştır.
