---
id: wu_this-model_pre_save
title: 'Filtr - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Obyekt ma’lumotlari database’ga saqlanishidan oldin filtrlaydi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $data | `array` | Saqlanadigan obyekt ma’lumotlari, serializatsiya qilingan. |
| $data_unserialized | `array` | Saqlanadigan obyekt ma’lumotlari. |
| $this | `\Base_Model` | Obyekt instance’i. |

### Beri {#since}

- 2.0.0
### Manba {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) faylida 570-qatorda aniqlangan
