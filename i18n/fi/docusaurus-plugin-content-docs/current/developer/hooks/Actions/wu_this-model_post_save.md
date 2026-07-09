---
id: wu_this-model_post_save
title: 'Toiminto - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Käynnistyy sen jälkeen, kun objekti on tallennettu tietokantaan.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $data | `array` | Objektin tiedot, jotka tallennetaan. |
| $this | `\Base_Model` | Objektin instanssi. |
| $new | `bool` | Tosi, jos objekti on uusi. |

### Lähtien

- 2.0.0
### Lähde

- Määritelty tiedostossa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) rivillä 624
- Määritelty tiedostossa [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) rivillä 1754
