---
id: wu_bypass_unset_current_user
title: Filtër - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtër: wu_bypass_unset_current_user

Lejoni zhvilluesit të anashkalojnë kodin për çaktivizimin e përdoruesit aktual.

Kthimi i çdo gjëje tjetër përveç null do të anashkalojë çaktivizimin e përdoruesit aktual të identifikuar. Kjo mund të jetë e dobishme në disa skenarë, për shembull, kur punohet me nën-faqe që përdoren si panele administrimi.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null për të vazhduar, çdo gjë tjetër për ta anashkaluar. |
| $current_user | `false\|\WP_User` | Objekti i përdoruesit aktual. |

### Që nga

- 2.0.11
### Burimi

Përcaktuar në [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) në rreshtin 221


## Kthen
