---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

പാസ്‌വേർഡ് നിയമങ്ങൾ നിർബന്ധമാക്കണോ എന്ന് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

ഇത് `true` ആക്കിയാൽ, കുറഞ്ഞ നീളവും അക്ഷര ആവശ്യകതകളും നിർബന്ധമാക്കും. "Super Strong" സജ്ജീകരണത്തിനായിട്ടോ അല്ലെങ്കിൽ Defender Pro-യുടെ Strong Password ഫീച്ചർ സജീവമാകുമ്പോഴോ ഇത് സ്വയമേവ പ്രവർത്തനക്ഷമമാകും.

## പാരാമീറ്ററുകൾ

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | അധിക നിയമങ്ങൾ നിർബന്ധമാക്കണോ എന്നത്. |
| $strength_setting | `string` | അഡ്മിൻ സജ്ജീകരണ മൂല്യം. |
| $defender_active | `bool` | Defender Pro Strong Password സജീവമാണോ എന്നത്. |

### Since

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) എന്ന ഫയലിലെ 531-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
