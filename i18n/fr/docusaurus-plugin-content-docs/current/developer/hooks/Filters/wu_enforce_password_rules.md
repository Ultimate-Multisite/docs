---
id: wu_enforce_password_rules
title: Filtre - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filter whether to enforce additional password rules.

When true, enforces minimum length and character requirements. Automatically enabled for "Super Strong" setting or when Defender Pro's Strong Password feature is active.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Si vrai, applique des règles supplémentaires. |
| $strength_setting | `string` | La valeur de réglage d'administration. |
| $defender_active | `bool` | Si le mot de passe fort de Defender Pro est actif. |

### Since

- 2.4.0

### Source

Défini dans [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) à la ligne 531
