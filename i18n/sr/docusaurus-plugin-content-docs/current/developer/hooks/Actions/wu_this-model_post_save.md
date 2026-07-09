---
id: wu_this-model_post_save
title: 'Акција - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

Покреће се након што се објекат сачува у базу података.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $data | `array` | Подаци објекта који ће бити сачувани. |
| $this | `\Base_Model` | Инстанца објекта. |
| $new | `bool` | Тачно ако је објекат нов. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

- Дефинисано у [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) у реду 624
- Дефинисано у [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) у реду 1754
