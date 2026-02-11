---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Laat ontwikkelaars de code voor het verwijderen van de huidige gebruiker omzeilen.

Het teruggeven van iets anders dan null zal het verwijderen van de ingelogde huidige gebruiker omzeilen. Dit kan in sommige scenario's nuttig zijn, bijvoorbeeld bij het werken met sub-sites die als beheerderspanelen worden gebruikt.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null om verder te gaan, anders omzeilen. |
| $current_user | `false\|\WP_User` | Het huidige gebruikersobject. |

### Since

- 2.0.11
### Source

Gedefinieerd in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) op regel 221

## Returns
