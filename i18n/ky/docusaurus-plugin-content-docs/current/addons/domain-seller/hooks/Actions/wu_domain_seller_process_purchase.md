---
id: wu_domain_seller_process_purchase
title: Аракет - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Аракет: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Домен сатып алуу checkout аяктагандан кийин иштетилип жатканда ишке кирет.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Төлөм объекти. |
| $checkout_data | `array&lt;string,mixed&gt;` | Катталуу формасынан алынган толук checkout маалыматтары. |

### Баштап {#since}

- 2.0.0
### Булак {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ичинде 246-сапта аныкталган
