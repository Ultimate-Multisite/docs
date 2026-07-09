---
id: wu_model_post_save
title: Akció - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Elküldődik, amikor egy objektumot az adatbázisba írnak.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $model | `string` | Az objektum slugja. |
| $data | `array` | Az objektum adatai, amelyeket elmentik, és szériálizálják. |
| $data_unserialized | `array` | Az objektum adatai, amelyeket elmentik. |
| $this | `\Base_Model` | Az objektum példányát. |

### Since {#since}

- 2.0.0
### Source {#source}

- Meghatározva a [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) fájlban, 613-án
- Meghatározva a [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) fájlban, 1743-án
