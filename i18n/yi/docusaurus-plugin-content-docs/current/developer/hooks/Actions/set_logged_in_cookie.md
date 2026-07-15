---
id: set_logged_in_cookie
title: אַקציע - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# אַקציע: set_logged_in_cookie

ווערט אויסגעפֿירט גלייך איידער דער אײַנגע־לאָגטער אויטענטיפֿיקאַציע־cookie ווערט באַשטימט.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $logged_in_cookie | `string` | דער ווערט פֿונעם אײַנגע־לאָגטן cookie. |
| $expire | `int` | די צײַט ווען די חן־פּעריאָד פֿאַרן אַרײַנלאָגירן לויפֿט אויס ווי אַ UNIX timestamp. דער סטאַנדאַרט איז 12 שעה נאָך דער אויסלויף־צײַט פֿונעם cookie. |
| $expiration | `int` | די צײַט ווען דער אײַנגע־לאָגטער אויטענטיפֿיקאַציע־cookie לויפֿט אויס ווי אַ UNIX timestamp. דער סטאַנדאַרט איז 14 טעג פֿון איצט. |
| $user_id | `int` | באַניצער־ID. |
| $scheme | `string` | אויטענטיפֿיקאַציע־סכעמע. סטאַנדאַרט 'logged_in'. |
| $token | `string` | דעם באַניצערס סעסיע־token צו ניצן פֿאַר דעם cookie. |

### זינט {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### מקור {#source}

דעפֿינירט אין [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) אויף שורה 141
