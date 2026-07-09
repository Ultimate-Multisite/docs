---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Memfilter daftar kunci opsi penyedia AI yang diterapkan dari situs utama.

Tambahkan kunci opsi untuk plugin penyedia AI kustom atau pihak ketiga sehingga pengaturan mereka juga diwarisi dari situs utama pada subsite.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Nama kunci opsi yang akan diterapkan (sudah mencakup kunci konektor yang ditemukan secara dinamis dan EXTRA_PROVIDER_OPTIONS). |

### Since {#since}

- 1.2.0
### Source {#source}

Didefinisikan di [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) pada baris 206
