---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Jab koi domain kamyabi se renew ho jata hai, toh yeh action chalta hai.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Woh payment jiski wajah se renewal hua. |
| $renewal_data | `array&lt;string,mixed&gt;` | Renewal se mutalliq metadata (domain_name, years, customer_id, wagaira). |
| $result | `array&lt;string,mixed&gt;` | Registrar ki taraf se mila hua raw result array, jismein naya expiry_date bhi shamil hai. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) at line 594
