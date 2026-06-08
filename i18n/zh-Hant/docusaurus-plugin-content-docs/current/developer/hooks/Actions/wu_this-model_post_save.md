---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

當一個物件儲存到資料庫後會觸發此動作。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | 即將儲存的物件資料。 |
| $this | `\Base_Model` | 物件實例。 |
| $new | `bool` | 如果物件是新增的，則為 True。 |

### Since

- 2.0.0
### Source

- 定義於 [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) 第 624 行
- 定義於 [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) 第 1754 行
