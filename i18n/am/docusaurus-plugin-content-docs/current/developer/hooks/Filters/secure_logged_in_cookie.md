---
id: secure_logged_in_cookie
title: ማጣሪያ - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

የተመዘገበው የኩኪ (logged in cookie) በHTTPS ብቻ መላክ አለመሆኑን ይቆጣጠራል።

## መለኪያዎች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | የተመዘገበው የኩኪ በHTTPS ብቻ መላክ አለመሆኑን ይቆጣጠራል። |
| $user_id | `int` | የተጠቃሚው መለያ ቁጥር (User ID)። |
| $secure | `bool` | የይለፍ ቃል ኩኪው (auth cookie) በHTTPS ብቻ መላክ አለመሆኑን ይቆጣጠራል። |

### Since {#since}

- 3.1.0
### Source {#source}

በ[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) ፋይል ላይ በ91ኛው መስመር ተገልጿል።
