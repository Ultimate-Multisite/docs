---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filtre: wu_\{$this->model\}_meta_pre_save

Filtre les métadonnées avant qu'elles ne soient sérialisées pour être stockées dans la base de données.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $meta | `array` | Les métadonnées qui seront stockées, désérialisées/sérialisées. |
| $data_unserialized | `array` | Les données de l'objet qui seront stockées. |
| $this | `\Base_Model` | L'instance de l'objet. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) à la ligne 534
