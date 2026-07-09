---
id: wu_domain_renewal_failed
title: Acción - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Acción: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Dispárase despois de que falle un intento de renovación dun dominio.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que desencadeou a renovación. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadatos da renovación (domain_name, years, etc.). |
| $error_message | `string` | Mensaxe de erro lexible por humanos procedente do rexistrador. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) na liña 630
