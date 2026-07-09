---
id: wu_domain_renewal_failed
title: Аракет - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Аракет: wu_domain_renewal_failed

Доменди узартуу аракети ийгиликсиз болгондон кийин иштейт.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Узартууну иштеткен төлөм. |
| $renewal_data | `array&lt;string,mixed&gt;` | Узартуу метадеректери (domain_name, years ж.б.). |
| $error_message | `string` | Каттоочудан келген адам окуй ала турган ката билдирүүсү. |

### Бери

- 2.0.0
### Булак

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ичинде 630-сапта аныкталган
