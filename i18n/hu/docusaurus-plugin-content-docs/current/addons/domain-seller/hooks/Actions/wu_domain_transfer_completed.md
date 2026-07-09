---
id: wu_domain_transfer_completed
title: Akció - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Akció: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Elküldő akció, amely akkor fut, amikor egy tartomány átvitele befejeződött.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | A tartomány objektuma. |
| $transfer_data | `array` | Az átvitel befejezési adatai. |

### Desde {#since}

- 2.1.0
### Forrás {#source}

Definálva [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) fájlban a 690-edik sorban
