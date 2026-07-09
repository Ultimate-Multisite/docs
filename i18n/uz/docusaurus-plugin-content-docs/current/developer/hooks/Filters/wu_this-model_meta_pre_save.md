---
id: wu_this-model_meta_pre_save
title: 'Filtr - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Ma'lumotlar bazasiga saqlash uchun serializatsiya qilinishidan oldin data metani filtrlaydi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $meta | `array` | Saqlanadigan, serializatsiya qilinmagan/serializatsiya qilingan meta ma'lumotlar. |
| $data_unserialized | `array` | Saqlanadigan obyekt ma'lumotlari. |
| $this | `\Base_Model` | Obyekt instansi. |

### Versiyadan boshlab {#since}

- 2.0.0
### Manba {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) faylida 534-qatorda aniqlangan
