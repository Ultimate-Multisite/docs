---
id: wu_domain_renewal_completed
title: Амал - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Амал: wu_domain_renewal_completed

Пас аз он иҷро мешавад, ки домен бомуваффақият тамдид шудааст.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Пардохте, ки тамдидро оғоз кард. |
| $renewal_data | `array&lt;string,mixed&gt;` | Метамаълумоти тамдид (domain_name, years, customer_id ва ғайра). |
| $result | `array&lt;string,mixed&gt;` | Массиви хоми натиҷа, ки аз ҷониби бақайдгиранда баргардонида шудааст, аз ҷумла expiry_date-и нав. |

### Аз версияи {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) дар сатри 594 муайян шудааст.
