---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

ലോഗിൻ ചെയ്ത കുക്കി HTTPS വഴി മാത്രമേ അയക്കാനുള്ളൂ എന്ന് ഇത് നിയന്ത്രിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ലോഗിൻ ചെയ്ത കുക്കി HTTPS വഴി മാത്രമേ അയക്കാനുള്ളൂ എന്ന് ഇത് തീരുമാനിക്കുന്നു. |
| $user_id | `int` | യൂസർ ഐഡി. |
| $secure | `bool` | ഓതന്റിക്കേഷൻ കുക്കി HTTPS വഴി മാത്രമേ അയക്കാനുള്ളൂ എന്ന് ഇത് തീരുമാനിക്കുന്നു. |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) at line 91
