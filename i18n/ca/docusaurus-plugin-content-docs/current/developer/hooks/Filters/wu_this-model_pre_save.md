---
id: wu_this-model_pre_save
title: 'Filtre - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Filtra els dades de l'objecte abans que s'emmagatzemin a la base de dades.

## Paràmetres {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Els dades de l'objecte que s'emmagatzemarà, serialitzats. |
| $data_unserialized | `array` | Els dades de l'objecte que s'emmagatzemarà. |
| $this | `\Base_Model` | L'instància de l'objecte. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) a la línia 570
