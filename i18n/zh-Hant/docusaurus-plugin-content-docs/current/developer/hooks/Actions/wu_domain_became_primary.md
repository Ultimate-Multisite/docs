---
id: wu_domain_became_primary
title: 動作 - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

當一個網域成為網站的主要網域時會觸發此動作。

當網域的 `primary_domain` 旗標設定為 `true` 時，無論是建立新的主要網域，還是更新現有的網域使其成為主要網域，都會觸發此動作。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 成為主要網域的網域。 |
| $blog_id | `int` | 受影響網站的部落格 ID。 |
| $was_new | `bool` | 是否為新建立的網域。 |

### Since

- 2.0.0
### Source

定義於 [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) 第 560 行
