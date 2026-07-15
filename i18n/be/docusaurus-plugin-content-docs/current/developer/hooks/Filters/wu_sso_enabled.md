---
id: wu_sso_enabled
title: Фільтр - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Уключае/выключае магчымасць адным ўваходным адзначэннем (single-sign-on) паміж рознымі доменамі.

Выкарыстоўвайце гэты фільтр, каб цалкам выключыць single-sign-on, або каб уключыць яго толькі ў апошні час.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Ці павінен быць уключаны SSO? `True` — уключна, `false` — выключна. |

### Since {#since}

- 2.0.11
### Source {#source}

Вызначаны ў [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) на 110-й кропцы


## Returns {#returns}
Паказвае, ці ўключаны SSO, і калі nie.
