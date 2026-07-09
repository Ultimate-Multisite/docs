---
id: get_blogs_of_user
title: Sivana - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Sivana: get_blogs_of_user {#filter-getblogsofuser}

Mamerina eto ny WP Filter tany am-boalohany, ho fiarovana fanampiny.

Manivana ny lisitry ny site ananan'ny mpampiasa iray.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $sites | `object[]` | Array misy object site an'ny mpampiasa. |
| $user_id | `int` | ID-n'ny mpampiasa. |
| $all | `bool` | Raha tokony ahitana ny site rehetra ny array site averina, anisan'izany ireo voamarika hoe 'deleted', 'archived', na 'spam'. Default false. |

### Nanomboka tamin'ny {#since}

- 2.0.11
### Loharano {#source}

Voafaritra ao amin'ny [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) amin'ny andalana 851
