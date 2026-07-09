---
id: wu_domain_renewal_failed
title: Aðgerð - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Aðgerð: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Keyrist eftir að tilraun til endurnýjunar léns mistekst.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Greiðslan sem ræsti endurnýjunina. |
| $renewal_data | `array&lt;string,mixed&gt;` | Lýsigögn endurnýjunar (domain_name, years o.s.frv.). |
| $error_message | `string` | Mannlæsileg villuskilaboð frá skráningaraðilanum. |

### Frá og með {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) í línu 630
