---
id: wu_domain_registration_completed
title: Akcja - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Akcja: wu_domain_registration_completed

Wyzwala się po pomyślnym zarejestrowaniu domeny.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Płatność, która wywołała rejestrację. |
| $registration_data | `array<string,mixed>` | Metadane rejestracji (nazwa domeny, id dostawcy, lata, data wygaśnięcia itp.). |
| $result | `array<string,mixed>` | Surowy tablica wyników zwrócona przez rejestratora. |

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) w linii 1204
