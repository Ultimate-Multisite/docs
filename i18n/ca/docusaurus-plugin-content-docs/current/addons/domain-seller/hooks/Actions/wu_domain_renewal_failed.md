---
id: wu_domain_renewal_failed
title: Acció - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Es dispara quan un intent de renovació del domini falla.

## Paràmetres {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pagament que va desencallar la renovació. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadades de renovació (domain_name, years, etc.). |
| $error_message | `string` | Missatge d'error legible per l'humà del registrador. |

### Des {#since}

- 2.0.0
### Font {#source}

Definit a [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) a la línia 630
