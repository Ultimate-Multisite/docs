---
id: wu_domain_renewal_completed
title: Hereket - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Domen üstünlikli täzelenenden soň işledilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Täzelenmäni başladan töleg. |
| $renewal_data | `array&lt;string,mixed&gt;` | Täzelenme metamaglumaty (domain_name, years, customer_id we ş.m.). |
| $result | `array&lt;string,mixed&gt;` | Täze expiry_date-i öz içine alýan, registrar tarapyndan gaýtarylan çig netije massiwi. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) faýlynda 594-nji setirde kesgitlenen.
