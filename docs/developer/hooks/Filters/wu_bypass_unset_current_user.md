---
id: wu_bypass_unset_current_user
title: "Filter - wu_bypass_unset_current_user"
sidebar_label: "wu_bypass_unset_current_user"
---

# Filter: wu_bypass_unset_current_user

Allow developers to bypass the unset current user code.

Returning anything other than null will bypass the unset of the current user logged in. This can be useful in some scenarios, for example, when dealing with sub-sites that are being used as admin panels.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null to move on, anything else to bypass it. |
| $current_user | `false\|\WP_User` | The current user object. |

### Since

- 2.0.11
### Source

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns

