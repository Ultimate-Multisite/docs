---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# フィルタ: wu_{$this->model}_meta_pre_save {#filter-wuthis-modelmetapresave}

データメタをデータベースに保存される前にシリアライズされる前にフィルタします。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | 保存されるメタデータ、unserializedserialized。 |
| $data_unserialized | `array` | 保存されるオブジェクトデータ。 |
| $this | `\Base_Model` | オブジェクトインスタンス。 |

### バージョン {#since}

- 2.0.0

### ソース {#source}

定義済み [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) 534 行目
