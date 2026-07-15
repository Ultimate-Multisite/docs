---
id: wu_checkout_order_created
title: Hetsika - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Asa: wu_checkout_order_created

Mipoitra aorian'ny fanangonana tanteraka ny kaomandy amin'ny checkout.

Afaka mampiasa izany ny fanampiny mba hamoronana maha-mpikambana faharoa ho an'ny vokatra manana tsingerin'ny faktiora mahaleo tena.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ny zavatra harona/kaomandy. |
| $customer | `\WP_Ultimo\Models\Customer` | Ny mpanjifa. |
| $membership | `\WP_Ultimo\Models\Membership` | Ny maha-mpikambana fototra. |
| $payment | `\WP_Ultimo\Models\Payment` | Ny fandoavam-bola. |

### Nanomboka {#since}

- 2.5.0
### Loharano {#source}

Voafaritra ao amin'ny [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) amin'ny andalana 891
