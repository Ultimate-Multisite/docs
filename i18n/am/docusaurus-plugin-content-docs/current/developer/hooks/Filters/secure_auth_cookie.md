---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

የይለፍ ቃል ኩኪው (auth cookie) በHTTPS ብቻ መላክ አለመሆኑን ይቆጣጠራል።

## መለኪያዎች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | የኩኪው በHTTPS ብቻ መላክ አለመሆኑን ይቆጣጠራል። |
| $user_id | `int` | የተጠቃሚው መለያ ቁጥር (User ID)። |

### Since {#since}

- 3.1.0
### Source {#source}

በ[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ፋይል ውስጥ በ80ኛው መስመር ተገልጿል።
