---
id: wu_page_this-id_load
title: 'Darbība - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Ļaujiet plugin izstrādātājiem pievienot papildu āķus mūsu lapām.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Šīs lapas ID. |
| $page_hook | `string` | Šīs lapas lapas āķis. |
| $admin_page | `self` | Lapas instance. |

### Kopš

- 1.8.2
- 2.0.4: Pievienots trešais parametrs: lapas instance.
### Avots

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) 332. rindā
