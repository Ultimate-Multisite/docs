---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

用於過濾在將網域設為主要網域後，系統會進行的重新導向 URL。

它允許開發人員客製化使用者在成功將網域設為主要網域後，被重新導向到哪個頁面。預設情況下，系統會將使用者重新導向到主站的當前 URL，或重新導向到正在修改的站點的管理員網址。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | 預設的重新導向 URL。這可以是當前 URL（如果這是主站），或是當前站點的管理員網址。 |
| $current_site | `int` | 正在將網域設為主要網域的站點 ID。 |
| $domain | `\Domain` | 被設為主要網域的網域物件。 |
| $old_primary_domains | `array` | 之前所有主要網域的 ID 陣列。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) 的第 639 行。


## Returns {#returns}
過濾後的重新導向 URL。
