---
id: mu_migrationexportuserdata
title: வடிகட்டி - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

ஏற்றுமதி செய்யப்படவுள்ள அல்லது உள்வரி செய்யப்படவுள்ள இயல்பான பயனர் தரவுத் தொகுப்பை (default set of user data) இது வடிகட்டுகிறது.

## அளவுருக்கள் (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | தனிப்பயன் பயனர் தரவு அணி (The custom user data array). |
| $user | `\WP_User` | பயனர் பொருள் (The user object). |

### இதிலிருந்து (Since)

- 0.1.0
### ஆதாரம் (Source)

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## திரும்ப அளிப்பது (Returns)
பயனர் தரவு அணி (Array data user).
