---
id: wu_model_post_save
title: Akcija - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Akcija: wu_model_post_save

Pokreće se nakon što se objekt snimi u bazu podataka.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $model | `string` | Slug modela. |
| $data | `array` | Podaci objekta koji će biti snimljeni, serijalizovani. |
| $data_unserialized | `array` | Podaci objekta koji će biti snimljeni. |
| $this | `\Base_Model` | Instanca objekta. |

### Od

- 2.0.0
### Izvor

- Definisano u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) na liniji 613
- Definisano u [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) na liniji 1743
