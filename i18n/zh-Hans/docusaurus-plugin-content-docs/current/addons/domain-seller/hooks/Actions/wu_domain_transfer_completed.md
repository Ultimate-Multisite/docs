---
id: wu_domain_transfer_completed
title: 动作 - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

在域名转移完成后触发。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 域名对象。 |
| $transfer_data | `array` | 转移完成数据。 |

### 自 {#since}

- 2.1.0
### 来源 {#source}

定义于 [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) 的第 690 行
