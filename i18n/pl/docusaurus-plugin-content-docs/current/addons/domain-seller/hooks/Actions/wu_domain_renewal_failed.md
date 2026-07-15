---
id: wu_domain_renewal_failed
title: Akcja - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Akcja: wu_domain_renewal_failed

Wyzwala się po nieudanej próbie odnowienia domeny.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Płatność, która wywołała próbę odnowienia. |
| $renewal_data | `array<string,mixed>` | Metadane odnowienia (nazwa domeny, lata itp.). |
| $error_message | `string` | Łatwo czytelny komunikat o błędzie od rejestratora. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) w linii 630
