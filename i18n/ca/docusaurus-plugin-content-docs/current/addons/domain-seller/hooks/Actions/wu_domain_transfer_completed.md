---
id: wu_domain_transfer_completed
title: Acció - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Acció: wu_domain_transfer_completed

S'executa quan una transferència de domini s'ha completat.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | L'objecte del domini. |
| $transfer_data | `array` | Dades de completació de la transferència. |

### Des de {#since}

- 2.1.0
### Font {#source}

Definit en [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) a la línia 690
