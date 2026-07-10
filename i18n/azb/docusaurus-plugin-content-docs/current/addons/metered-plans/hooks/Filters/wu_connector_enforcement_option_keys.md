---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Ana siteden zorunlu kılınan AI provider option key listesini filtreler.

Özel veya üçüncü taraf AI provider plugin'leri için option key'ler ekler, böylece bu ayarlar alt sitelerde de ana siteden miras alınır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Zorunlu kılınacak option key isimleri (zaten dinamik olarak keşfedilen connector key'leri ve EXTRA_PROVIDER_OPTIONS'ı içerir). |

### Versiyon {#since}

- 1.2.0
### Kaynak {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) dosyasında 206. satırda tanımlanmıştır.
