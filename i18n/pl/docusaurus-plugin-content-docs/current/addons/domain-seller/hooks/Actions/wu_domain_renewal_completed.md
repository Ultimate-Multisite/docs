---
id: wu_domain_renewal_completed
title: Akcja - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Akcja: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Wyzwala się po pomyślnym odnowieniu domeny.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Płatność, która wywołała odnowienie. |
| $renewal_data | `array<string,mixed>` | Metadane odnowienia (nazwa domeny, lata, customer_id itp.). |
| $result | `array<string,mixed>` | Surowy tablica wyników zwrócona przez rejestratora, zawierająca nową `expiry_date`. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) w linii 594
