---
id: wu_model_post_save
title: 動作 - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

在物件儲存到資料庫之後觸發。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $model | `string` | 模型別名。 |
| $data | `array` | 即將儲存的物件資料，已序列化。 |
| $data_unserialized | `array` | 即將儲存的物件資料。 |
| $this | `\Base_Model` | 物件實例。 |

### 自 v {#since}

- 2.0.0
### 來源 {#source}

- 定義於 [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) 第 613 行
- 定義於 [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) 第 1743 行
