---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtert die Metadaten, bevor sie serialisiert und in der Datenbank gespeichert werden.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $meta | `array` | Die Metadaten, die gespeichert werden, unserialisiertserialisiert. |
| $data_unserialized | `array` | Die Objekt-Daten, die gespeichert werden. |
| $this | `\Base_Model` | Die Objektinstanz. |

### Seit

- 2.0.0

### Quelle

Definiert in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) in Zeile 534
