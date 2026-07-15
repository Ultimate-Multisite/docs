---
id: wu_this-model_meta_pre_save
title: 'Filtre - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filtre: wu_\{$this->model\}_meta_pre_save

Verinin, veritabanına kaydedilmeden önce serileştirilmeden önce meta verisini filtreler.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $meta | `array` | Depolanacak meta verisi, serileştirilmemiş hali. |
| $data_unserialized | `array` | Depolanacak nesne verisi. |
| $this | `\Base_Model` | Nesne örneği. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) dosyasının 534. satırında tanımlanmıştır.
