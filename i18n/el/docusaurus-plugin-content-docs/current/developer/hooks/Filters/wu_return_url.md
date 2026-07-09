---
id: wu_return_url
title: Φίλτρο - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Φίλτρο: wu_return_url {#filter-wureturnurl}

Επιτρέπει στους προγραμματιστές να αλλάξουν το URL επιστροφής που χρησιμοποιείται από την πύλη (gateway) μετά την ολοκλήρωση της διαδικασίας checkout.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $return_url | `string` | το URL προς το οποίο θα ανακατευθυνθεί μετά τη διαδικασία. |
| $gateway | `self` | η εντολή (instance) της πύλης. |
| $payment | `\WP_Ultimo\Models\Payment` | η εντολή πληρωμής του Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | η τρέχουσα παραγγελία του καλαθιού Ultimate Multisite. |

### Από {#since}

- 2.0.20
### Πηγή {#source}

Ορίζεται στο [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) στην γραμμή 683


## Επιστρέφει {#returns}
