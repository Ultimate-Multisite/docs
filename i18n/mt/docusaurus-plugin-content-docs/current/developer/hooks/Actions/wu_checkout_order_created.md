---
id: wu_checkout_order_created
title: Azzjoni - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Azzjoni: wu_checkout_order_created

Jibda wara li l-ordni tal-checkout tkun ġiet immuntata kompletament.

L-addons jistgħu jużaw dan biex joħolqu memberships sekondarji għal prodotti b'ċikli ta' ħlas indipendenti.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | L-oġġett tal-cart/ordni. |
| $customer | `\WP_Ultimo\Models\Customer` | Il-klijent. |
| $membership | `\WP_Ultimo\Models\Membership` | Il-membership primarja. |
| $payment | `\WP_Ultimo\Models\Payment` | Il-ħlas. |

### Minn

- 2.5.0
### Sors

Definit f'[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) fil-linja 891
