---
id: wu_page_added
title: Дзея - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Дазваляе rabyggantam plugin'aў выконваць дадатковыя дзеянні, калі рэгіструюцца старонкі.

На адрозні ад `wu_page_load`, які выконваецца толькі калі глядзяць канкрэтную старонку, гэты hook выконваецца пры рэгістрацыі для кожнай адмін-старонкі, якая дадаецца з выкарыстаннем кода Ultimate Multisite.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID гэтай старонкі. |
| $page_hook | `string` | Назва hook-а гэтай старонкі. |

### З {#since}

- 2.0.0
### Выказчык {#source}

Вызначаны ў [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) на 228-й кропцы.
