---
id: wu_cart_get_subtotal
title: Filtrační funkce - wu_cart_get_subtotal
sidebar_label: wu_cart_get_subtotal
_i18n_hash: b4c83b261d6009edfbb17c6f27f6ae60
---
# Filtrační hook: wu_cart_get_subtotal

Filtruje celkovou částku „počáteční částka“ (initial amount).

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $subtotal | `float` | Celková částka, která je dnes požadována. |
| $this | `\WP_Ultimo\Checkout\Cart` | Objekt košíku. |

### Zdroj {#source}

Definováno v [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L2112) na řádku 2112
