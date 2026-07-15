---
id: wu_checkout_order_created
title: Omume - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Omume: wu_checkout_order_created

Na-arụ ọrụ mgbe a hazichara order checkout kpamkpam.

Mgbakwunye nwere ike iji nke a mepụta membership nke abụọ maka ngwaahịa nwere okirikiri billing nọọrọ onwe ha.

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Ihe cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Onye ahịa. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership bụ isi. |
| $payment | `\WP_Ultimo\Models\Payment` | Ụgwọ ahụ. |

### Kemgbe {#since}

- 2.5.0
### Isi mmalite {#source}

A kọwara ya na [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) na ahịrị 891
