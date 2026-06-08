---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

നിലവിലെ ഉപയോക്താവിനെ നീക്കം ചെയ്യുന്ന (unset) കോഡ് ബൈപാസ് ചെയ്യാൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

null-നേക്കാൾ മറ്റെന്തെങ്കിലും തിരികെ നൽകുകയാണെങ്കിൽ, ലോഗിൻ ചെയ്തിട്ടുള്ള നിലവിലെ ഉപയോക്താവിനെ നീക്കം ചെയ്യുന്നത് ഇത് ബൈപാസ് ചെയ്യും. അഡ്മിൻ പാനലുകൾ ആയി ഉപയോഗിക്കുന്ന സബ്-സൈറ്റുകൾ കൈകാര്യം ചെയ്യുമ്പോൾ പോലുള്ള ചില സാഹചര്യങ്ങളിൽ ഇത് ഉപകാരപ്രദമാകും.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | മുന്നോട്ട് പോകാൻ null, ബൈപാസ് ചെയ്യാൻ മറ്റെന്തും. |
| $current_user | `false\|\WP_User` | നിലവിലെ ഉപയോക്തൃ ഒബ്ജക്റ്റ്. |

### Since

- 2.0.11
### Source

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns
