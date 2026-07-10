---
id: wu_domain_renewal_completed
title: Аракет - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Домен ийгиликтүү узартылгандан кийин иштейт.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Узартууну иштеткен төлөм. |
| $renewal_data | `array&lt;string,mixed&gt;` | Узартуу метамаалыматтары (domain_name, years, customer_id ж.б.). |
| $result | `array&lt;string,mixed&gt;` | Каттоочу кайтарган, жаңы expiry_date камтылган чийки натыйжа массиви. |

### Версиядан бери {#since}

- 2.0.0
### Булак {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ичинде 594-сапта аныкталган.
