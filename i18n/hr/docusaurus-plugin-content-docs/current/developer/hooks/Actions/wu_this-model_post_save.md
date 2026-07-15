---
id: wu_this-model_post_save
title: 'Radnja - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Pokreće se nakon što je objekt pohranjen u bazu podataka.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $data | `array` | Podaci objekta koji će biti pohranjeni. |
| $this | `\Base_Model` | Instanca objekta. |
| $new | `bool` | True ako je objekt nov. |

### Od {#since}

- 2.0.0
### Izvor {#source}

- Definirano u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) u retku 624
- Definirano u [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) u retku 1754
