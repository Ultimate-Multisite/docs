---
id: wu_domain_transfer_completed
title: Acción - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

Se dispara después de que se completa una transferencia de dominio.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | El objeto del dominio. |
| $transfer_data | `array` | Datos de finalización de la transferencia. |

### Desde {#since}

- 2.1.0
### Fuente {#source}

Definido en [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) en la línea 690
