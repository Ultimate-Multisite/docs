---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# フィルタ: wu_{$this->model}_meta_pre_save

データメタをデータベースに保存される前にシリアライズされる前にフィルタします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | 保存されるメタデータ、unserializedserialized。 |
| $data_unserialized | `array` | 保存されるオブジェクトデータ。 |
| $this | `\Base_Model` | オブジェクトインスタンス。 |

### バージョン

- 2.0.0

### ソース

定義済み [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) 534 行目
