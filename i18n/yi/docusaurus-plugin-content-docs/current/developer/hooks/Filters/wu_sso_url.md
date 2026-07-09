---
id: wu_sso_url
title: פֿילטער - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# פֿילטער: wu_sso_url {#filter-wussourl}

פֿילטערט דזשענערירטע SSO URLs איידער זיי ווערן צוריקגעגעבן פֿאַר קונה־אַקציעס איבער דאָמיינען.

ניצט דעם פֿילטער ווען אַן אינטעגראַציע דאַרף צולייגן פֿאַרטרויטן קאָנטעקסט צו אַ sovereign-tenant SSO לינק אָדער פאַרבייטן דעם broker URL, בשעת מען האַלט אָפּ Ultimate Multisite'ס טאָקען־וואַלידאַציע.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $sso_url | `string` | דזשענערירטער SSO URL. |
| $user | `WP_User` | באַניצער וואָס וועט ווערן אָטענטיפֿיצירט דורך דעם SSO באַזוך. |
| $site_id | `int` | ציל־זײַטל ID פֿאַר דעם באַזוך. |
| $redirect_to | `string` | ציל־URL נאָך מצליחדיקער SSO וואַלידאַציע. |

### זינט {#since}

- 2.13.0

### מקור {#source}

דעפֿינירט אין `inc/sso/class-sso.php`.


## גיט צוריק {#returns}

געפֿילטערטער SSO URL.
