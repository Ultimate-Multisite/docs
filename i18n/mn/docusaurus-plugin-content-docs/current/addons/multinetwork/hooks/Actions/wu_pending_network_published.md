---
id: wu_pending_network_published
title: Үйлдэл - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Үйлдэл: wu_pending_network_published {#action-wupendingnetworkpublished}

Хүлээгдэж буй network нийтлэгдсэний дараа ажиллана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Үүсгэсэн network. |
| $membership | `\WP_Ultimo\Models\Membership` | Гишүүнчлэл. |
| $pending_network | `array` | Анхны хүлээгдэж буй network өгөгдөл. |

### Эх сурвалж {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815)-д 1815-р мөрөнд тодорхойлсон
