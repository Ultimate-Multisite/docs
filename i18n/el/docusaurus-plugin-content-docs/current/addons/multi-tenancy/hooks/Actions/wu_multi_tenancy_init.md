---
id: wu_multi_tenancy_init
title: Ενέργεια - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init {#action-wumultitenancyinit}

Εκτελείται αφού το addon Πολυενοικτικότητας έχει ολοκληρωθεί η 초기化.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | Η εντολή (instance) του addon. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ είναι το τυπικό prefix για το WP Ultimo. |

### Από {#since}

- 1.0.0
### Πηγή {#source}

Ορίζεται στο [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) στην γραμμή 124
