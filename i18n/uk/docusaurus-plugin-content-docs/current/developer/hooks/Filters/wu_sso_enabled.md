---
id: wu_sso_enabled
title: Фільтр - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Увімкнути/вимкнути можливість одноразового входу (single-sign-on) між доменами.

Використовуйте цей фільтр, щоб повністю вимкнути одноразовий вхід або увімкнути його лише за певних умов.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Чи має бути увімкнено SSO? `true` — увімкнено, `false` — вимкнено. |

### Since {#since}

- 2.0.11
### Source {#source}

Визначено в [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) на рядку 110


## Returns {#returns}
Статус увімкнення або вимкнення SSO.
