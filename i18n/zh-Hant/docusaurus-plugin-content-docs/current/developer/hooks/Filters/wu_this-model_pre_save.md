---
id: wu_this-model_pre_save
title: '過濾器 - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

在物件資料儲存到資料庫之前進行過濾。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | 即將被儲存的物件資料，此資料會被序列化。 |
| $data_unserialized | `array` | 即將被儲存的物件資料。 |
| $this | `\Base_Model` | 物件實例。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) 第 570 行
