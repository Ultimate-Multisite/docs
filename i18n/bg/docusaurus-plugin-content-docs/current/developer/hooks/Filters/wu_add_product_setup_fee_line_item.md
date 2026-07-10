---
id: wu_add_product_setup_fee_line_item
title: Филтър - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item {#filter-wuaddproductsetupfeelineitem}

Позволява на разработчиците да правят промени в елемента от линията за такса за настройка.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $setup_fee_line_item | `array` | Параметри на елемента от линията за такса за настройка. |
| $product | `\WP_Ultimo\Models\Product` | Продуктът, свързан с таксата за настройка. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Обектът на количката. |

### От {#since}

- 2.1
### Източник {#source}

Дефиниран в [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) на линия 1790


## Връщане {#returns}
