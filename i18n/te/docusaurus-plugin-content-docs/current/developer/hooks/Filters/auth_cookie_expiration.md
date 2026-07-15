---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

ప్రామాణిక ధృవపత్ర (authentication cookie) గడువు ముగిసే సమయాన్ని ఇది నియంత్రిస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | గడువు ముగిసే వ్యవధిని సెకన్లలో ఇవ్వండి. |
| $user_id | `int` | యూజర్ ID. |
| $remember | `bool` | యూజర్ లాగిన్‌ను గుర్తుంచుకోవాలా వద్దా. డిఫాల్ట్‌గా false. |

### Since {#since}

- 2.8.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) లోని 52వ లైన్‌లో నిర్వచించబడింది.
