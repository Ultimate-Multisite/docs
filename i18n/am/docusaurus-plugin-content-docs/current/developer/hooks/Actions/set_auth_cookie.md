---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

የማረጋገጫ ኩኪ ከመቅረጹ በፊት ወዲያውኑ ይሠራል።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | የማረጋገጫ ኩኪ እሴት። |
| $expire | `int` | የመግባት ጊዜው የሚያበቃበት ጊዜ (login grace period) እንደ ዩኒክ ታይምስ탬ፕ። መነሻው የኩኪው ጊዜ የሚያበቃበት ጊዜ ካለፈ በኋላ ባሉት 12 ሰዓታት ነው። |
| $expiration | `int` | የማረጋገጫ ኩኪው እንደ ዩኒክ ታይምስ탬ፕ የሚያበቃበት ጊዜ። መነሻው ከዛሬ 14 ቀናት በኋላ ነው። |
| $user_id | `int` | የተጠቃሚ መለያ (User ID)። |
| $scheme | `string` | የማረጋገጫ ስхема። እሴቶቹ 'auth' ወይም 'secure_auth' ሊሆኑ ይችላሉ። |
| $token | `string` | ለዚህ ኩኪ ሊውል የሚችል የተጠቃሚ የሴሽን ቶከን። |

### Since {#since}

- 2.5.0
- 4.9.0: <code>$token</code> መለኪያው ተጨመረ።
### Source {#source}

በ[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) በ124ኛው መስመር ተገልጿል።
