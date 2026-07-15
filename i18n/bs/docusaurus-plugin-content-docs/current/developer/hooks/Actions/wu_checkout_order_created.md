---
id: wu_checkout_order_created
title: Akcija - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Izvršava se nakon što je narudžba sa checkouta potpuno sastavljena.

Dodaci mogu ovo koristiti za kreiranje sekundarnih članstava za proizvode koji imaju nezavisne cikluse naplate.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objekat korpe/narudžbe. |
| $customer | `\WP_Ultimo\Models\Customer` | Klijent. |
| $membership | `\WP_Ultimo\Models\Membership` | Glavno članstvo. |
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje. |

### Since {#since}

- 2.5.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
