---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_{$this->model}_post_save

Pokreće se nakon što se objekat snimi u bazu podataka.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $data | `array` | Podaci o objektu koji će biti snimljeni. |
| $this | `\Base_Model` | Instanca objekta. |
| $new | `bool` | `true` ako je objekat nov. |

### Od verzije

- 2.0.0
### Izvor

- Definirano u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) na liniji 624
- Definirano u [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) na liniji 1754
