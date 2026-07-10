---
id: wu_this-model_post_save
title: 'Handling - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

Udløses, efter et objekt er gemt i databasen.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $data | `array` | De objektdata, der vil blive gemt. |
| $this | `\Base_Model` | Objektinstansen. |
| $new | `bool` | Sand, hvis objektet er nyt. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

- Defineret i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) på linje 624
- Defineret i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) på linje 1754
