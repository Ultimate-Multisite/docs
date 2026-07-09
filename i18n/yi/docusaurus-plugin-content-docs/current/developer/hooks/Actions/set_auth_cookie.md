---
id: set_auth_cookie
title: אַקציע - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

ווערט אויסגעפֿירט גלייך איידער דער אָטענטיפֿיקאַציע־קיכל ווערט באַשטימט.

## פּאַראַמעטערס {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | אָטענטיפֿיקאַציע־קיכל־ווערט. |
| $expire | `int` | די צייט ווען די לאָגין־חסד־פּעריאָד לויפֿט אויס ווי אַ UNIX timestamp. סטאַנדאַרט איז 12 שעה נאָך דער אויסלויף־צייט פֿונעם קיכל. |
| $expiration | `int` | די צייט ווען דער אָטענטיפֿיקאַציע־קיכל לויפֿט אויס ווי אַ UNIX timestamp. סטאַנדאַרט איז 14 טעג פֿון איצט. |
| $user_id | `int` | באַניצער־ID. |
| $scheme | `string` | אָטענטיפֿיקאַציע־סכעמע. ווערטן אַרייַננעמען 'auth' אָדער 'secure_auth'. |
| $token | `string` | דעם באַניצערס סעסיע־token צו נוצן פֿאַר דעם קיכל. |

### זינט {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### מקור {#source}

דעפֿינירט אין [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) אויף שורה 124
