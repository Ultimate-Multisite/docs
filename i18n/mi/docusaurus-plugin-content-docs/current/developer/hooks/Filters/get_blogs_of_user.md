---
id: get_blogs_of_user
title: Tātari - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Ka tārua i te WP Filter taketake i konei, hei painga anō.

Ka tātari i te rārangi o ngā pae nō tētahi kaiwhakamahi.

## Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $sites | `object[]` | He huānga o ngā ahanoa pae nō te kaiwhakamahi. |
| $user_id | `int` | ID kaiwhakamahi. |
| $all | `bool` | Mēnā me whai te huānga pae kua whakahokia i ngā pae katoa, tae atu ki ērā kua tohua hei 'deleted', 'archived', 'spam' rānei. Taunoa false. |

### Mai i

- 2.0.11
### Pūtake

Kua tautuhia ki [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) i te rārangi 851.
