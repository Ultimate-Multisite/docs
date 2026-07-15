---
id: wu_this-model_post_save
title: 'Ação - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Disparado depois de um objeto ser armazenado na base de dados.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $data | `array` | Os dados do objeto que serão armazenados. |
| $this | `\Base_Model` | A instância do objeto. |
| $new | `bool` | Verdadeiro se o objeto for novo. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

- Definido em [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) na linha 624
- Definido em [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) na linha 1754
