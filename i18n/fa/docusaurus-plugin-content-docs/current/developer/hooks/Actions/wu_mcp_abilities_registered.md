---
id: wu_mcp_abilities_registered
title: Action - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# Action: wu_mcp_abilities_registered

پس از اینکه توانایی‌های MCP برای یک موجودیت (entity) ثبت شدند، این اکشن فراخوانی می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $ability_prefix | `string` | پیشوند توانایی (ability prefix). |
| $model_name | `string` | نام مدل (model name). |
| $this | `object` | نمونه (instance) مدیر (manager). |

### از نسخه {#since}

- 2.5.0
### منبع {#source}

در [`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) در خط ۱۷۱ تعریف شده است.
