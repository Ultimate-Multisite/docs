---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

ഓതന്റിക്കേഷൻ കുക്കി കാലഹരണപ്പെടുന്ന സമയത്തിൻ്റെ ദൈർഘ്യം ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

## പാരാമീറ്ററുകൾ

| Name | Type | വിവരണം |
|------|------|-------------|
| $length | `int` | സെക്കൻഡുകളിലെ കാലാവധി. |
| $user_id | `int` | ഉപയോക്തൃ ഐഡി. |
| $remember | `bool` | ഉപയോക്താവിൻ്റെ ലോഗിൻ ഓർമ്മിക്കണോ എന്നത്. ഡിഫോൾട്ട് ആയി false. |

### മുതൽ

- 2.8.0
### സ്രോതസ്സ്

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) at line 52
