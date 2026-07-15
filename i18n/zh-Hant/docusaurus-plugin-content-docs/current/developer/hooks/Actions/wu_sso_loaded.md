---
id: wu_sso_loaded
title: 動作 - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

允許外掛開發者在需要時新增額外的鉤子。

由於 SSO 是一個在 sunrise 階段執行的功能，因此這個動作需要延遲到 init 階段。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO 類別的實例。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) 的第 285 行
