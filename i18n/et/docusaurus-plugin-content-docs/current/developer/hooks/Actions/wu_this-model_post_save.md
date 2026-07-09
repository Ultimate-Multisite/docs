---
id: wu_this-model_post_save
title: 'Tegevus - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

Käivitatakse pärast objekti salvestamist andmebaasi.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $data | `array` | The object data that will be stored. |
| $this | `\Base_Model` | The object instance. |
| $new | `bool` | True if the object is new. |

### Alates versioonist {#since}

- 2.0.0
### Allikas {#source}

- Määratletud failis [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) real 624
- Määratletud failis [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) real 1754
