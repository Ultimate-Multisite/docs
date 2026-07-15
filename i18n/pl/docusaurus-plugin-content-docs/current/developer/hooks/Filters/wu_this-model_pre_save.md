---
id: wu_this-model_pre_save
title: 'Filtry - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filtr: wu_\{$this->model\}_pre_save

Filtruje dane obiektu przed zapisaniem ich do bazy danych.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $data | `array` | Dane obiektu, które zostaną zapisane, zserializowane. |
| $data_unserialized | `array` | Dane obiektu, które zostaną zapisane. |
| $this | `\Base_Model` | Instancja obiektu. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) w wierszu 570
