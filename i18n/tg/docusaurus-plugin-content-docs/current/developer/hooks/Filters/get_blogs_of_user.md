---
id: get_blogs_of_user
title: Филтр - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Филтр: get_blogs_of_user

Филтри аслии WP-ро дар ин ҷо, барои эҳтиёт, такрор мекунад.

Рӯйхати сомонаҳоеро, ки корбар ба онҳо тааллуқ дорад, филтр мекунад.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $sites | `object[]` | Массиви объектҳои сомона, ки ба корбар тааллуқ доранд. |
| $user_id | `int` | ID-и корбар. |
| $all | `bool` | Оё массиви сомонаҳои баргардонидашуда бояд ҳамаи сомонаҳоро дар бар гирад, аз ҷумла онҳое, ки ҳамчун 'deleted', 'archived' ё 'spam' қайд шудаанд. Пешфарз false. |

### Аз версияи {#since}

- 2.0.11
### Манбаъ {#source}

Дар [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) дар сатри 851 муайян шудааст.
