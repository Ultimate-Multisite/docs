---
id: wu_domain_renewal_completed
title: Aiki - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aiki: wu_domain_renewal_completed

Yana faruwa bayan an sabunta wani domain cikin nasara.

## Sigogi

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Biyan kuɗin da ya jawo sabuntawa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata na sabuntawa (domain_name, years, customer_id, da sauransu). |
| $result | `array&lt;string,mixed&gt;` | Raw result array da mai rajistar ya dawo da shi, ciki har da sabon expiry_date. |

### Tun

- 2.0.0
### Tushe

An ayyana shi a cikin [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) a layi na 594
