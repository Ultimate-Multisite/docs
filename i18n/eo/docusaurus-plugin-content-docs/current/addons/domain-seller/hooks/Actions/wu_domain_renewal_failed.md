---
id: wu_domain_renewal_failed
title: Ago - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Ago: wu_domain_renewal_failed

Ekfunkcias post kiam provo renovigi domajnon malsukcesas.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | La pago kiu ekigis renovigon. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadatumoj pri renovigo (domain_name, years, ktp.). |
| $error_message | `string` | Homlegebla erarmesaĝo de la domajna registristo. |

### Ekde

- 2.0.0
### Fonto

Difinita en [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ĉe linio 630
