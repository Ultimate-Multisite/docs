---
id: wu_domain_seller_process_purchase
title: Үйлдэл - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Төлбөр тооцоо дууссаны дараа домэйн худалдан авалтыг боловсруулж байх үед ажиллана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Төлбөрийн объект. |
| $checkout_data | `array&lt;string,mixed&gt;` | Бүртгэлийн маягтаас ирсэн бүрэн төлбөр тооцооны өгөгдөл. |

### Хувилбараас {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) дотор 246-р мөрөнд тодорхойлсон
