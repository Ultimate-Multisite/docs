---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# フィルタ: wu_\{$this->model\}_pre_save

オブジェクトデータをデータベースに保存される前にフィルタリングします。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $data | `array` | 保存されるオブジェクトデータ（シリアライズ済み）です。 |
| $data_unserialized | `array` | 保存されるオブジェクトデータです。 |
| $this | `\Base_Model` | オブジェクトインスタンスです。 |

### バージョン

- 2.0.0

### ソース

定義は [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) の 570 行目にあります。
