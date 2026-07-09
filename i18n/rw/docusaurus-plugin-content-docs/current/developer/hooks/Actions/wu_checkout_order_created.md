---
id: wu_checkout_order_created
title: Igikorwa - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Igikorwa: wu_checkout_order_created

Gikora nyuma y’uko checkout order imaze guteranywa burundu.

Ibyongezwaho bishobora kubikoresha mu gukora memberships z’inyongera ku bicuruzwa bifite inzinguzingu zo kwishyura zigenga.

## Ibipimo

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ikintu cya cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Umukiriya. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership y’ibanze. |
| $payment | `\WP_Ultimo\Models\Payment` | Ubwishyu. |

### Kuva

- 2.5.0
### Inkomoko

Byasobanuwe muri [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ku murongo wa 891
