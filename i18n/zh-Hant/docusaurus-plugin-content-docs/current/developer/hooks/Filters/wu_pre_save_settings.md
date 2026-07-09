---
id: wu_pre_save_settings
title: 過濾器 - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# 過濾器：wu_pre_save_settings {#filter-wupresavesettings}

讓開發人員可以在 Ultimate Multisite 儲存設定之前進行過濾。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $settings | `array` | 即將要儲存的設定資料。 |
| $settings_to_save | `array` | 要新增的設定資料。 |
| $saved_settings | `array` | 目前已儲存的設定資料。 |

### 適用版本 {#since}

- 2.0.18
### 來源 {#source}

定義於 [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) 第 296 行
