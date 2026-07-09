---
id: wu_page_this-id_before_render
title: 'Գործողություն - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_\{$this->id\}_before_render

Թույլ է տալիս plugin-ի մշակողներին ավելացնել լրացուցիչ բովանդակություն՝ նախքան էջը տպելը։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string` | Այս էջի id-ն։ |
| $page | `object` | Էջի օբյեկտը։ |

### Սկսած

- 1.8.2
### Աղբյուր

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398)-ում՝ 398-րդ տողում։
