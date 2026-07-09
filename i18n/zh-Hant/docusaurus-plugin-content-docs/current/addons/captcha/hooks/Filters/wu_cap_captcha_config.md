---
id: wu_cap_captcha_config
title: 過濾器 - wu_cap_captcha_config
sidebar_label: wu_cap_captcha_config
_i18n_hash: 4b2098b3e8b83cdcca2c6b5098059305
---
# 過濾器：wu_cap_captcha_config {#filter-wucapcaptchaconfig}

過濾 Cap Captcha 的設定。

讓開發人員可以客製化 Cap Captcha 的各種設定。

## 參數 {#parameters}

| 名稱 | 類型 | 說明 |
|------|------|-------------|
| $config | `array` | Cap 的設定陣列。 |
| $level | `string` | 安全等級（fast、medium、max）。 |

### 適用版本 {#since}

- 1.2.0
### 來源 {#source}

定義於 [`inc/class-cap-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-captcha/blob/main/inc/class-cap-provider.php#L153) 第 153 行
