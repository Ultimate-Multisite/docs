---
id: wu_checkout_order_created
title: Hereket - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Hereket: wu_checkout_order_created

Checkout sargydy doly ýygnalandan soň işledilýär.

Addonlar muny garaşsyz hasaplaşyk döwürleri bolan önümler üçin ikinji derejeli agzalyklary döretmekde ulanyp biler.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Sebet/sargyt obýekti. |
| $customer | `\WP_Ultimo\Models\Customer` | Müşderi. |
| $membership | `\WP_Ultimo\Models\Membership` | Esasy agzalyk. |
| $payment | `\WP_Ultimo\Models\Payment` | Töleg. |

### Şondan bäri {#since}

- 2.5.0
### Çeşme {#source}

891-nji setirde [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) içinde kesgitlenen
