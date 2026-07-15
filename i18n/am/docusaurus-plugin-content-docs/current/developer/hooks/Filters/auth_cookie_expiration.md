---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

የማረጋገጫ (authentication) ኩኪ የቆይታ ጊዜን ይቆጣጠራል።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | የቆይታ ጊዜው በሰከንዶች ብዛት። |
| $user_id | `int` | የተጠቃሚ መለያ (User ID)። |
| $remember | `bool` | የተጠቃሚውን መግባት (login) መያዝ መሆኑን። መነሻው (Default) እውነት አይደለም (false)። |

### ከ {#since}

- 2.8.0
### ምንጭ {#source}

በ[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) በ52ኛው መስመር ተገልጿል።
