---
id: wu_bypass_unset_current_user
title: Filtre - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtre: wu_bypass_unset_current_user

Permet aux développeurs de contourner le code de désactivation de l'utilisateur actuel.

Le fait de retourner n'importe quoi d'autre que **Null** contournera la désactivation de l'utilisateur connecté. Cela peut être utile dans certains scénarios, par exemple lorsqu'on travaille avec des sous-sites utilisés comme panneaux d'administration.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null pour continuer, tout autre pour le contourner. |
| $current_user | `false\|\WP_User` | L'objet utilisateur actuel. |

### Depuis

- 2.0.11

### Source

Défini dans [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) à la ligne 221


## Retourne
