---
id: wu_model_post_save
title: Aktion - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Auslöst, nachdem ein Objekt in die Datenbank gespeichert wurde.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $model | `string` | Der Modell-Slug. |
| $data | `array` | Die Objekt-Daten, die gespeichert werden, serialisiert. |
| $data_unserialized | `array` | Die Objekt-Daten, die gespeichert werden. |
| $this | `\Base_Model` | Die Objekt-Instanz. |

### Seit {#since}

- 2.0.0

### Quelle {#source}

- Definiert in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) bei Zeile 613
- Definiert in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) bei Zeile 1743
