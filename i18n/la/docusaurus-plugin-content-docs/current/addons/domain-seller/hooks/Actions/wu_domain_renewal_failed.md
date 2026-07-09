---
id: wu_domain_renewal_failed
title: Actio - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Actio: wu_domain_renewal_failed

Fit postquam conatus renovationis dominii deficit.

## Parametra

| Nomen | Genus | Descriptio |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Solutio quae renovationem excitavit. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata renovationis (domain_name, anni, etc.). |
| $error_message | `string` | Nuntius erroris homini intellegibilis a registratore. |

### Ab

- 2.0.0
### Fons

Definitum in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ad lineam 630
