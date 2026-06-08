---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Dette utløses etter at et objekt er lagret i databasen.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $data | `array` | Objektdataene som skal lagres. |
| $this | `\Base_Model` | Objektinstansen. |
| $new | `bool` | Sant hvis objektet er nytt. |

### Siden

- 2.0.0
### Kilde

- Definert i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) på linje 624
- Definert i [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) på linje 1754
