---
id: wu_limits_is_fluent_form_above_limit
title: Filtre - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Vérifie si un type de formulaire donné est autorisé sur ce plan. Permet aux développeurs de plugins de filtrer la valeur de retour.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Si le type de formulaire dépasse la limite ou non |
| $form_type | `string` | Le type de formulaire en cours de vérification |
| $form_count | `int` | Nombre actuel de formulaires |
| $quota | `int` | Le quota autorisé |

### Since

- 1.0.0

### Source

- Défini dans [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) à la ligne 56
- Défini dans [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) à la ligne 89
