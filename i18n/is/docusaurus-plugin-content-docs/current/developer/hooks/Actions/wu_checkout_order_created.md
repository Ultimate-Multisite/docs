---
id: wu_checkout_order_created
title: Aðgerð - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Aðgerð: wu_checkout_order_created

Keyrist eftir að checkout-pöntunin hefur verið sett að fullu saman.

Viðbætur geta notað þetta til að búa til aukaaðild fyrir vörur með sjálfstæðum innheimtulotum.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Karfa-/pöntunarhluturinn. |
| $customer | `\WP_Ultimo\Models\Customer` | Viðskiptavinurinn. |
| $membership | `\WP_Ultimo\Models\Membership` | Aðalaðildin. |
| $payment | `\WP_Ultimo\Models\Payment` | Greiðslan. |

### Frá útgáfu {#since}

- 2.5.0
### Uppruni {#source}

Skilgreint í [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) í línu 891
