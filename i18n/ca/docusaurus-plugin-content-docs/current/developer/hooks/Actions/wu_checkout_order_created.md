---
id: wu_checkout_order_created
title: Acció - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Aquesta acció: wu_checkout_order_created {#action-wucheckoutordercreated}

Es activa després que l'ordre de càrrega (checkout order) es hagi assemblat completament.

Les add-ons poden utilitzar aquesta acció per crear membresies secundàries per a productes amb cicles de facturació independents.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | L'objecte del carret/ordre. |
| $customer | `\WP_Ultimo\Models\Customer` | El client. |
| $membership | `\WP_Ultimo\Models\Membership` | La membresia principal. |
| $payment | `\WP_Ultimo\Models\Payment` | El pagament. |

### Des de {#since}

- 2.5.0
### Font {#source}

Definida en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) a la línia 891
