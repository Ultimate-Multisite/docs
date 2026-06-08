---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

നെറ്റ്‌വർക്ക് ആക്ടിവേഷൻ ചെക്ക് ഒഴിവാക്കാൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

Composer-നെ അടിസ്ഥാനമാക്കിയുള്ളതോ Bedrock പോലുള്ള മറ്റ് കസ്റ്റം സെറ്റപ്പുകളോ ഉപയോഗിക്കുമ്പോൾ ഇത് വളരെ ഉപകാരപ്രദമാണ്. അത്തരം സാഹചര്യങ്ങളിൽ, mu-plugins ആയി പ്ലഗിനുകൾ ഉപയോഗിക്കുന്നത് സാധാരണമാണ്.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ചെക്ക് ഒഴിവാക്കണോ വേണ്ടയോ എന്ന് തീരുമാനിക്കാൻ. ഇത് ഡിഫോൾട്ടായി `false` ആണ്. |

### Since

- 2.0.0
### Source

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) എന്ന ഫയലിലെ 272-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns
ചെക്ക് ഒഴിവാക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടെങ്കിൽ `true`, അല്ലാത്തപക്ഷം `false` എന്ന് ഇത് നൽകും.
