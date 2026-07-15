---
id: wu_sso_enabled
title: ഫിൽട്ടർ - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

ക്രോസ്-ഡൊമെയ്ൻ സിംഗിൾ-സൈൻ-ഓൺ (single-sign-on) പ്രവർത്തനം പ്രവർത്തനക്ഷമമാക്കാനും പ്രവർത്തനരഹിതമാക്കാനും ഇത് സഹായിക്കുന്നു.

സിംഗിൾ-സൈൻ-ഓൺ പൂർണ്ണമായും ഓഫ് ചെയ്യാനോ, അല്ലെങ്കിൽ ചില പ്രത്യേക സാഹചര്യങ്ങളിൽ മാത്രം ഇത് പ്രവർത്തനക്ഷമമാക്കാനോ ഈ മൂല്യം ഫിൽട്ടർ ചെയ്യുക.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO പ്രവർത്തനക്ഷമമാക്കണോ? ഓൺ ആണെങ്കിൽ `True`, ഓഫ് ആണെങ്കിൽ `false` ഉപയോഗിക്കുക. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) എന്ന ഫയലിലെ 110-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}
SSO പ്രവർത്തനക്ഷമമാണോ അല്ലയോ എന്ന്.
