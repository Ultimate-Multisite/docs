---
id: wu_return_url
title: Сүзгі - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Әзірлеушілерге checkout процестерінен кейін қолданылатын gateway қайтару URL-ын өзгертуге мүмкіндік береді.

## Параметрлер

| Атауы | Түрі | Сипаттама |
|------|------|-------------|
| $return_url | `string` | процестен кейін қайта бағытталатын URL. |
| $gateway | `self` | gateway данасы. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite төлем данасы. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ағымдағы Ultimate Multisite cart тапсырысы. |

### Бастап

- 2.0.20
### Дереккөз

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ішінде 683-жолда анықталған


## Қайтарады
