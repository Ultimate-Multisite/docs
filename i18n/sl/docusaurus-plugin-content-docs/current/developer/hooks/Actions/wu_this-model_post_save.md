---
id: wu_this-model_post_save
title: 'Dejanje - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Sproži se po tem, ko je predmet shranjen v podatkovno bazo.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $data | `array` | Podatki predmeta, ki bodo shranjeni. |
| $this | `\Base_Model` | Instanca predmeta. |
| $new | `bool` | True, če je predmet nov. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

- Določeno v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) v vrstici 624
- Določeno v [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) v vrstici 1754
