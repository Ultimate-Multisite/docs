---
id: wu_sso_loaded
title: പ്രവർത്തനം - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

ആവശ്യമെങ്കിൽ പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് അധിക ഹുക്കുകൾ (hooks) ചേർക്കാൻ ഇത് അനുവദിക്കുന്നു.

SSO എന്നത് 'sunrise'-ൽ പ്രവർത്തിക്കുന്ന ഒന്നായതുകൊണ്ട്, ഇത് 'init' ഘട്ടത്തിലേക്ക് മാറ്റേണ്ടതുണ്ട്.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO ക്ലാസ്. |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) at line 285
