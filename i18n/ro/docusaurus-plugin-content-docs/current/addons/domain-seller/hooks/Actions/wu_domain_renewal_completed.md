---
id: wu_domain_renewal_completed
title: Acțiune - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Acțiune: wu_domain_renewal_completed

Se declanșează după ce un domeniu a fost reînnoit cu succes.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plățile care au declanșat reînnoirea. |
| $renewal_data | `array<string,mixed>` | Metadatele reînnoirii (numele domeniului, anii, id-ul clientului etc.). |
| $result | `array<string,mixed>` | Matricea de rezultate brute returnată de registrar, incluzând `new expiry_date`. |

### De la

- 2.0.0
### Sursă

Definit în [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) la linia 594
