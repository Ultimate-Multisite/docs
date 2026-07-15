---
id: mu_migrationexportuserdata
title: Сүзгі - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Экспортталатын/импортталатын пайдаланушы деректерінің әдепкі жиынын сүзгілейді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $custom_user_data | `array` | Пайдаланушының реттелетін деректер массиві. |
| $user | `\WP_User` | Пайдаланушы нысаны. |

### Бастап {#since}

- 0.1.0
### Дереккөз {#source}

- [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) ішінде 335-жолда анықталған
- [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) ішінде 147-жолда анықталған
## Қайтарады {#returns}
Массив деректері пайдаланушы.
