---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Bu filtre, verilerin veritabanına kaydedilmeden önce meta verilerini düzenler.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Veritabanına kaydedilecek, serileştirilmemiş meta veriler. |
| $data_unserialized | `array` | Kaydedilecek nesne verisi. |
| $this | `\Base_Model` | Nesne örneği. |

### Versiyonu {#since}

- 2.0.0
### Kaynak {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) dosyasında 534. satırda tanımlanmıştır.
