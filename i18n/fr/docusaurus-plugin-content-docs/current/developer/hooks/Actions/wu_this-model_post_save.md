---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

S'exécute après qu'un objet ait été stocké dans la base de données.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $data | `array` | Les données de l'objet qui seront stockées. |
| $this | `\Base_Model` | L'instance de l'objet. |
| $new | `bool` | Vrai si l'objet est nouveau. |

### Depuis

- 2.0.0

### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
