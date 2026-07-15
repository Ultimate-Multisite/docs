---
id: wu_this-model_post_delete
title: '動作 - wu_{$this->model}_post_delete'
sidebar_label: 'wu_{$this->model}_post_delete'
_i18n_hash: 723d566c67fd82808273b2eb42c96d73
---
# Action: wu_\{$this->model\}_post_delete

當一個物件儲存到資料庫之後會觸發此動作。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $result | `bool` | 如果物件成功刪除，則為 True。 |
| $this | `\Base_Model` | 物件實例。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

- 定義於 [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L663) 第 663 行
- 定義於 [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1503) 第 1503 行
