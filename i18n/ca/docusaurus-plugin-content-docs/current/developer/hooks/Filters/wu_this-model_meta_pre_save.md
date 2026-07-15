---
id: wu_this-model_meta_pre_save
title: 'Filtre - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filtre: wu_\{$this->model\}_meta_pre_save

Filtra les metadades de dades abans que es serialitzin per ser emmagatzemades a la base de dades.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $meta | `array` | Les metadades que s'emmagatzemarà, desserialitzades. |
| $data_unserialized | `array` | Les dades de l'objecte que s'emmagatzemarà. |
| $this | `\Base_Model` | L'instància de l'objecte. |

### Des {#since}

- 2.0.0
### Font {#source}

Definit en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) a la línia 534
