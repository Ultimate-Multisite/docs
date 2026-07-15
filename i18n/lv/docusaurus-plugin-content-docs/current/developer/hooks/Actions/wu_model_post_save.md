---
id: wu_model_post_save
title: Darbība - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Darbība: wu_model_post_save

Tiek palaista pēc tam, kad objekts ir saglabāts datubāzē.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Modeļa īsnosaukums. |
| $data | `array` | Objekta dati, kas tiks saglabāti, serializēti. |
| $data_unserialized | `array` | Objekta dati, kas tiks saglabāti. |
| $this | `\Base_Model` | Objekta instance. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

- Definēts [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) 613. rindā
- Definēts [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) 1743. rindā
