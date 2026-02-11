---
id: wu_minimum_password_strength
title: Filtre - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtre: wu_minimum_password_strength

Filtrez la force minimale du mot de passe requise (score zxcvbn).

Niveaux de force :
- 0, 1 : Très faible
- 2 : Faible
- 3 : Moyen
- 4 : Fort (par défaut)

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Le niveau de force minimum requis. |
| $strength_setting | `string` | La valeur de réglage d'administration (medium, strong, super_strong). |

### Depuis

- 2.4.0

### Source

Défini dans [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) à la ligne 516
