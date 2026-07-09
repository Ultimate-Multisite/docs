---
id: wu_page_this-id_before_render
title: 'Darbība - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_\{$this->id\}_before_render

Ļaujiet plugin izstrādātājiem pievienot papildu saturu, pirms mēs izdrukājam lapu.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $page_id | `string` | Šīs lapas id. |
| $page | `object` | Lapas objekts. |

### Kopš

- 1.8.2
### Avots

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) 398. rindā
