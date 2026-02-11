---
id: wu_this-model_post_save
title: 'アクション - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

オブジェクトがデータベースに保存された後に発火します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | 保存されるオブジェクトデータ。 |
| $this | `\Base_Model` | オブジェクトインスタンス。 |
| $new | `bool` | オブジェクトが新規の場合は true。 |

### Since

- 2.0.0

### Source

- 定義済み [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- 定義済み [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
