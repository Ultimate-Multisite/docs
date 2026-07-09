---
id: wu_model_post_save
title: Toiminto - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Toiminto: wu_model_post_save

Käynnistyy sen jälkeen, kun objekti on tallennettu tietokantaan.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $model | `string` | Mallin slug-tunniste. |
| $data | `array` | Tallennettavat objektin tiedot sarjallistettuina. |
| $data_unserialized | `array` | Tallennettavat objektin tiedot. |
| $this | `\Base_Model` | Objektin instanssi. |

### Alkaen

- 2.0.0
### Lähde

- Määritelty tiedostossa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) rivillä 613
- Määritelty tiedostossa [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) rivillä 1743
