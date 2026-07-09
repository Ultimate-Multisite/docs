---
id: wu_woocommerce_line_item_params
title: Filtro - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filtrar: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtrar os parâmetros usados para criar os itens de linha no Carrinho do WooCommerce, antes de redirecionar o cliente para o checkout do WooCommerce.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-----------|
| $line_item_params | `array` | Os parâmetros do item de linha do carrinho. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | A instância do item de linha do Ultimate Multisite. |
| $wc_product | `\WC_Product` | O produto do WooCommerce. |

### Desde {#since}

- 2.0.0

### Fonte {#source}

Definido em [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) na linha 662

## Retorna {#returns}
Os parâmetros do item de linha modificados.
