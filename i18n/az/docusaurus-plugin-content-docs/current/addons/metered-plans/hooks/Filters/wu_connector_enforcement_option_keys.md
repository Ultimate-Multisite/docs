---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Ana saytdan tətbiq edilməsi məcburi olan AI provayder seçimlərinin (option keys) siyahısını filtrləyir.

Xüsusi və ya üçüncü tərəf AI provayder pluginləri üçün seçimlər əlavə etməyə imkan verir, beləliklə, onların parametrləri alt saytlarda da ana saytdan miras qalır.

## Parametrlər {#parameters}

| Name | Type | Təsvir |
|------|------|-------------|
| $keys | `string[]` | Tətbiq ediləcək option key adları (zaten dinamik olaraq tapılan connector key-ləri və EXTRA_PROVIDER_OPTIONS-u əhatə edir). |

### Versiya {#since}

- 1.2.0
### Mənbə {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) faylında 206-cı sətirində təyin edilmişdir
