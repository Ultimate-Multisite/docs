---
id: wu_minimum_password_length
title: Filtre - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtre: wu_minimum_password_length

Filtrer la longueur minimale du mot de passe.

Appliqué uniquement lorsque wu_enforce_password_rules est vrai.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $min_length | `int` | Longueur minimale du mot de passe. Valeur par défaut 12 (correspond à Defender Pro). |
| $defender_active | `bool` | Si le mot de passe fort Defender Pro est actif. |

### Depuis

- 2.4.0

### Source

Défini dans [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) à la ligne 543
