---
id: wu_connector_enforcement_option_keys
title: Filtre - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

Ana siteden miras alınan yapay zeka sağlayıcısı seçenek anahtarlarının listesini filtreler.

Bu filtre, özel veya üçüncü taraf yapay zeka sağlayıcısı eklentilerine ait seçenek anahtarlarını eklemenizi sağlar; böylece bu eklentilerin ayarları da alt sitelerde ana siteden miras alınır.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $keys | `string[]` | Zorunlu kılınacak seçenek anahtarı adları (zaten dinamik olarak keşfedilen bağlantı anahtarlarını ve EXTRA_PROVIDER_OPTIONS'ı içerir). |

### Versiyon {#since}

- 1.2.0
### Kaynak {#source}

[inc/managers/class-connector-enforcement.php](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206)'de 206. satırda tanımlanmıştır.
