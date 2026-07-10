---
id: wu_this-model_post_save
title: 'Acció - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Aquesta acció: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

Es activada després que un object es guarda a la base de dades.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $data | `array` | Els dades de l'objecte que s'guarden. |
| $this | `\Base_Model` | L'instància de l'objecte. |
| $new | `bool` | Verd si l'objecte és nou. |

### Des de {#since}

- 2.0.0
### Font {#source}

- Definida en [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) a la línia 624
- Definida en [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) a la línia 1754
