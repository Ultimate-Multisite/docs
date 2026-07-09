---
id: wu_this-model_meta_pre_save
title: 'Filtras - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtruoja meta duomenis prieš juos serializuojant saugoti duomenų bazėje.

## Parametrai

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Meta duomenys, kurie bus saugomi, neserializuotiserializuoti. |
| $data_unserialized | `array` | Objekto duomenys, kurie bus saugomi. |
| $this | `\Base_Model` | Objekto egzempliorius. |

### Nuo

- 2.0.0
### Šaltinis

Apibrėžta [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) 534 eilutėje
