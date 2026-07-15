---
id: wu_woocommerce_line_item_params
title: Фильтр - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Кардарды WooCommerce төлөмдү бүтүрүү барагына багыттоодон мурун, WooCommerce себетинде сап элементтерин түзүү үчүн колдонулган параметрлерди чыпкалайт.

## Параметрлер {#parameters}

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $line_item_params | `array` | Себеттин сап элементинин параметрлери. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite сап элементинин инстансы. |
| $wc_product | `\WC_Product` | WooCommerce өнүмү. |

### Баштап {#since}

- 2.0.0
### Булак {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ичинде 662-сапта аныкталган


## Кайтарат {#returns}
Өзгөртүлгөн сап элементинин параметрлери.
