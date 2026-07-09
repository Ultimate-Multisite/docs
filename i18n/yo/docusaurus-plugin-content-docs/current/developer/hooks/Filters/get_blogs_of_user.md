---
id: get_blogs_of_user
title: Àlẹmọ - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Àlẹmọ: get_blogs_of_user

Ṣe ẹda WP Filter atilẹba nibi, fún ìdánilójú.

Ó ń ṣàlẹmọ àtòkọ àwọn aaye tí olumulo jẹ́ apá rẹ̀.

## Àwọn Parameter

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $sites | `object[]` | Àkójọpọ̀ àwọn object aaye tí ó jẹ́ ti olumulo. |
| $user_id | `int` | ID olumulo. |
| $all | `bool` | Bóyá àkójọpọ̀ àwọn aaye tí a dá padà gbọ́dọ̀ ní gbogbo àwọn aaye, pẹ̀lú àwọn tí a samisi sí 'deleted', 'archived', tàbí 'spam'. Default false. |

### Láti

- 2.0.11
### Orísun

A ṣàlàyé rẹ̀ nínú [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ní laini 851
