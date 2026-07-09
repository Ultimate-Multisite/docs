---
id: wu_gocardless_cleanup_pending_site
title: פֿילטער - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# פֿילטער: wu_gocardless_cleanup_pending_site

ווערט אויסגעפֿירט איידער מע מעקט אויס אַ פֿאַריתומטע וואַרטנדיקע וועבזײַט פֿאַר אַן אַנולירטער GoCardless מיטגלידשאַפֿט.

גיט צוריק false פֿון דעם פֿילטער כּדי צו פֿאַרמיידן אויסמעקן.

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $blog_id | `int` | WordPress בלאָג ID פֿון דער וואַרטנדיקער וועבזײַט. |
| $membership | `\WP_Ultimo\Models\Membership` | די אַנולירטע מיטגלידשאַפֿט. |
| $old_status | `string` | דער סטאַטוס פֿאַר דער אַנולירונג. |

### זינט

- 2.0.0
### מקור

דעפֿינירט אין [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) אויף שורה 1086
