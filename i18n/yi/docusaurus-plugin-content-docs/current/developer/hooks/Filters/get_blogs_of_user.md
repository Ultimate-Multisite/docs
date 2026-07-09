---
id: get_blogs_of_user
title: פֿילטער - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# פילטער: get_blogs_of_user

רעפּליצירט דאָ דעם אָריגינעלן WP פילטער, פֿאַר זיכערקייט.

פילטערט די רשימה פֿון וועבזײַטן צו וועלכע אַ באַניצער געהערט.

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $sites | `object[]` | אַ מענגע פֿון וועבזײַט־אָביעקטן וואָס געהערן צום באַניצער. |
| $user_id | `int` | באַניצער ID. |
| $all | `bool` | צי די צוריקגעגעבענע וועבזײַטן־מענגע זאָל אַנטהאַלטן אַלע וועבזײַטן, אַרײַנגערעכנט די וואָס זענען באַצייכנט ווי 'deleted', 'archived', אָדער 'spam'. סטאַנדאַרט false. |

### זינט

- 2.0.11
### מקור

דעפֿינירט אין [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) אויף שורה 851
