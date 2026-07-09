---
id: wu_this-model_meta_pre_save
title: 'Szűrő - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Szűrő: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Szűrőzi az adat meta-ját, mielőtt az adatbázisba mentésre kerül szériálizálásra.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $meta | `array` | A meta adatok, amelyeket tárolni, és szériálizálásra alkalmas. |
| $data_unserialized | `array` | Az objektum adatai, amelyeket tárolni. |
| $this | `\Base_Model` | Az objektum példányát. |

### Since {#since}

- 2.0.0
### Source {#source}

Definálva a [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) fájlban, 534-sorban.
