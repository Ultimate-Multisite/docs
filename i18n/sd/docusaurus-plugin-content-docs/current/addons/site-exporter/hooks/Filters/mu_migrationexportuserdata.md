---
id: mu_migrationexportuserdata
title: فلٽر - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# فلٽر: mu_migration/export/user/data

ايڪسپورٽ/امپورٽ ڪرڻ لاءِ استعمال ڪندڙ جي ڊيٽا جي ڊفالٽ سيٽ کي فلٽر ڪري ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $custom_user_data | `array` | ڪسٽم استعمال ڪندڙ ڊيٽا array. |
| $user | `\WP_User` | استعمال ڪندڙ object. |

### کان وٺي {#since}

- 0.1.0
### ذريعو {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) ۾ لائن 335 تي بيان ٿيل
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) ۾ لائن 147 تي بيان ٿيل
## واپسي {#returns}
استعمال ڪندڙ جي array ڊيٽا.
