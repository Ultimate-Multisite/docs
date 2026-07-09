---
id: wu_this-model_meta_pre_save
title: '過濾器 - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

在資料元數據（meta data）被序列化並儲存到資料庫之前，會過濾這些資料。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $meta | `array` | 即將被儲存的元數據，此處為反序列化後的資料。 |
| $data_unserialized | `array` | 即將被儲存的物件資料。 |
| $this | `\Base_Model` | 物件實例。 |

### 適用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) 第 534 行
