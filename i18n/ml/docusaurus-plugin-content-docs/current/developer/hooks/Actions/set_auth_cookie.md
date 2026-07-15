---
id: set_auth_cookie
title: പ്രവർത്തനം - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

ഓതന്റിക്കേഷൻ കുക്കി സജ്ജമാക്കുന്നതിന് തൊട്ടുമുമ്പ് ഇത് പ്രവർത്തിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | ഓതന്റിക്കേഷൻ കുക്കി മൂല്യം. |
| $expire | `int` | ലോഗിൻ ഗ്രേസ് പിരീഡ് അവസാനിക്കുന്ന സമയം, ഇത് ഒരു UNIX ടൈംസ്റ്റാമ്പായി നൽകണം. ഡിഫോൾട്ട് ആയി കുക്കി എക്സ്പയർ ചെയ്യുന്ന സമയത്തിന് 12 മണിക്കൂർ മുൻപാണ് ഇത്. |
| $expiration | `int` | ഓതന്റിക്കേഷൻ കുക്കി എക്സ്പയർ ചെയ്യുന്ന സമയം, ഇത് ഒരു UNIX ടൈംസ്റ്റാമ്പായി നൽകണം. ഡിഫോൾട്ട് ആയി ഇന്ന് മുതൽ 14 ദിവസമാണ് ഇത്. |
| $user_id | `int` | യൂസർ ഐഡി. |
| $scheme | `string` | ഓതന്റിക്കേഷൻ സ്കീം. ഇതിന് 'auth' അല്ലെങ്കിൽ 'secure_auth' പോലുള്ള മൂല്യങ്ങൾ ഉൾപ്പെടുന്നു. |
| $token | `string` | ഈ കുക്കിക്ക് ഉപയോഗിക്കാനുള്ള യൂസറുടെ സെഷൻ ടോക്കൺ. |

### Since {#since}

- 2.5.0
- 4.9.0: <code>$token</code> എന്ന പാരാമീറ്റർ ചേർത്തു.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) എന്ന ഫയലിലെ 124-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
