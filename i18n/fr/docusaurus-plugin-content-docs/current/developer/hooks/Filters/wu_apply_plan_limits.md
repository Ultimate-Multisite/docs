---
id: wu_apply_plan_limits
title: Filtre - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

Permettre aux développeurs de plugins de contourner les limitations.

Vous pouvez utiliser ce filtre pour exécuter du code arbitraire avant que les limites ne soient initialisées. Si votre filtre renvoie une valeur vraie, le processus continuera ; s'il renvoie une valeur fausse, le code s'arrêtera et aucun des hooks ci-dessous ne sera exécuté.

### Since

- 1.7.0

### Source

- Défini dans [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) à la ligne 52
- Défini dans [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) à la ligne 98

## Returns
