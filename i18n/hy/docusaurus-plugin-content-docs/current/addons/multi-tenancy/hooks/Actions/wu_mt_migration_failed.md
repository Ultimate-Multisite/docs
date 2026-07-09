---
id: wu_mt_migration_failed
title: Գործողություն - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Գործողություն՝ wu_mt_migration_failed {#action-wumtmigrationfailed}

Գործարկվում է, երբ միգրացիան ձախողվում է։

## Պարամետրեր {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $job | `\Migration_Job` | Ձախողված միգրացիայի աշխատանքը։ |
| $message | `string` | Սխալի հաղորդագրություն։ |

### Սկսած {#since}

- 1.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720)-ում՝ 720-րդ տողում
