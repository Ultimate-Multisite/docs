---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

ലോഗിൻ ചെയ്ത യൂസർക്ക് വേണ്ട authentication cookie സജ്ജമാക്കുന്നതിന് തൊട്ടുമുമ്പ് ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | ലോഗിൻ ചെയ്ത cookie മൂല്യം. |
| $expire | `int` | ലോഗിൻ ഗ്രേസ് പിരീഡ് അവസാനിക്കുന്ന സമയം ഒരു UNIX timestamp ആയി. ഡിഫോൾട്ട് ആയി cookie-യുടെ കാലാവധി കഴിഞ്ഞതിന് 12 മണിക്കൂർ കഴിഞ്ഞ സമയം. |
| $expiration | `int` | ലോഗിൻ ചെയ്ത authentication cookie അവസാനിക്കുന്ന സമയം ഒരു UNIX timestamp ആയി. ഡിഫോൾട്ട് ആയി ഇന്ന് മുതൽ 14 ദിവസങ്ങൾക്ക് ശേഷം. |
| $user_id | `int` | യൂസർ ഐഡി. |
| $scheme | `string` | authentication scheme. ഡിഫോൾട്ട് 'logged_in'. |
| $token | `string` | ഈ cookie-ക്ക് ഉപയോഗിക്കാനുള്ള യൂസറുടെ session token. |

### Since

- 2.6.0
- 4.9.0: <code>$token</code> എന്ന parameter കൂട്ടിച്ചേർത്തു.
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) എന്ന ഫയലിലെ 141-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
