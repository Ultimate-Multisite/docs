---
id: set_logged_in_cookie
title: ድርጊት - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

የተመዘገበ የማረጋገጫ ኩኪ (cookie) ከመቅረጹ በፊት ወዲያውኑ ይሰራል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | የተመዘገበው ኩኪ እሴት። |
| $expire | `int` | የግባው ጊዜ (login grace period) የሚማረክበት ጊዜ እንደ ዩኒክስ ታይምስ탬ፕ። መነሻው የኩኪው የማብቃቂያ ጊዜ ከ12 ሰዓት በኋላ ነው። |
| $expiration | `int` | የተመዘገበ የማረጋገጫ ኩኪ የሚያብቃበት ጊዜ እንደ ዩኒክስ ታይምስ탬ፕ። መነሻው ከዛሬ 14 ቀናት በኋላ ነው። |
| $user_id | `int` | የተጠቃሚ መለያ (User ID)። |
| $scheme | `string` | የማረጋገጫ ስхема (Authentication scheme)። መነሻው 'logged_in' ነው። |
| $token | `string` | ለዚህ ኩኪ የሚያገለግለው የተጠቃሚ የሴሽን ቶከን (session token)። |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> መለኪያው ተጨመረ።
### Source {#source}

በ[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ላይ በ141ኛው መስመር ተገልጿል።
