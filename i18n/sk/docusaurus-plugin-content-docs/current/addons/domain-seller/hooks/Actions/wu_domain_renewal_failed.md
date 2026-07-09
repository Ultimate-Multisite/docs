---
id: wu_domain_renewal_failed
title: Akcia - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Spustí sa po zlyhaní pokusu o obnovenie domény.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Platba, ktorá spustila obnovenie. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadáta obnovenia (domain_name, years atď.). |
| $error_message | `string` | Ľudsky čitateľná chybová správa od registrátora. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) na riadku 630
