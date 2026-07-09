---
id: wu_this-model_meta_pre_save
title: 'Filtër - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtron të dhënat meta përpara se të serializohen për t’u ruajtur në bazën e të dhënave.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $meta | `array` | Të dhënat meta që do të ruhen, të paserializuara/serializuara. |
| $data_unserialized | `array` | Të dhënat e objektit që do të ruhen. |
| $this | `\Base_Model` | Instanca e objektit. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) në rreshtin 534
