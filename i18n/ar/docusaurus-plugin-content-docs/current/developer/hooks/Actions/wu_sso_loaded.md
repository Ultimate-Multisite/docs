---
id: wu_sso_loaded
title: الإجراء - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# الإجراء: wu_sso_loaded

Allow plugin developers to add additional hooks, if needed.

This needs to be delayed until the init as SSO is something that runs on sunrise.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | The SSO class. |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) at line 285
