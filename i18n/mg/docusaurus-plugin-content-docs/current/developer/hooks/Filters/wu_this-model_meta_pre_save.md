---
id: wu_this-model_meta_pre_save
title: 'Sivana - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Manivana ny data meta alohan’ny hanovana azy ho serialized mba hotehirizina ao amin’ny tahiry angona.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $meta | `array` | Ny angona meta izay hotehirizina, tsy voa-serialize/voa-serialize. |
| $data_unserialized | `array` | Ny angon’ilay object izay hotehirizina. |
| $this | `\Base_Model` | Ny instance an’ilay object. |

### Hatramin’ny {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin’ny [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) amin’ny andalana 534
