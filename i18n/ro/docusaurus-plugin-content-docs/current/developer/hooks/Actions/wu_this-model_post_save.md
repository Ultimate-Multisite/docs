---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

Se declanșează după ce un obiect este salvat în baza de date.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Datele obiectului care urmează a fi stocate. |
| $this | `\Base_Model` | Instanța obiectului. |
| $new | `bool` | `true` dacă obiectul este nou. |

### Since {#since}

- 2.0.0
### Source {#source}

- Definit în [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) la linia 624
- Definit în [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) la linia 1754
