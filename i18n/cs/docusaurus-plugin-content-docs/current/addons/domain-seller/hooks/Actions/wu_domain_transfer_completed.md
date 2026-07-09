---
id: wu_domain_transfer_completed
title: Akce - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Spustí se po dokončení transferu domény.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Objekt domény. |
| $transfer_data | `array` | Údaje o dokončení transferu. |

### Od verze {#since}

- 2.1.0
### Zdroj {#source}

Definováno v [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) na řádku 690
