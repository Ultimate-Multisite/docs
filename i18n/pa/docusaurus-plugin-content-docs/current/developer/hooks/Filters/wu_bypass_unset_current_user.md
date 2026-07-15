---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Developers ਨੂੰ current user unset ਕਰਨ ਵਾਲੇ ਕੋਡ ਨੂੰ ਬਾਈਪਾਸ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

ਜੇਕਰ `null` ਤੋਂ ਇਲਾਵਾ ਕੋਈ ਵੀ ਵリュー (value) return ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਇਹ ਲੌਗਇਨ ਕੀਤੇ ਗਏ current user ਦੇ unset ਹੋਣ ਨੂੰ ਬਾਈਪਾਸ ਕਰ ਦੇਵੇਗੀ। ਇਹ ਕੁਝ ਸਥਿਤੀਆਂ ਵਿੱਚ ਕੰਮ ਆ ਸਕਦਾ ਹੈ, ਜਿਵੇਂ ਕਿ ਜਦੋਂ ਤੁਸੀਂ ਸਬ-ਸਾਈਟਾਂ (sub-sites) ਨਾਲ ਕੰਮ ਕਰ ਰਹੇ ਹੋ ਜਿਨ੍ਹਾਂ ਦੀ ਵਰਤੋਂ ਐਡਮਿਨ ਪੈਨਲ ਵਜੋਂ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | ਜੇਕਰ `null` ਹੈ ਤਾਂ ਅੱਗੇ ਵਧਣਾ ਹੈ, ਨਹੀਂ ਤਾਂ ਇਸਨੂੰ ਬਾਈਪਾਸ ਕਰਨਾ ਹੈ। |
| $current_user | `false\|\WP_User` | current user ਦਾ object। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ਵਿੱਚ ਲਾਈਨ 221 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।

## Returns {#returns}
