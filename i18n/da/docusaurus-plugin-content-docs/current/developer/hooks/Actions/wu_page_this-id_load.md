---
id: wu_page_this-id_load
title: 'Handling - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Gør det muligt for udviklere af udvidelser at føje yderligere hooks til vores sider.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $id | `string` | ID'et for denne side. |
| $page_hook | `string` | Side-hooket for denne side. |
| $admin_page | `self` | Sideinstansen. |

### Siden

- 1.8.2
- 2.0.4: Tilføjede tredje parameter: sideinstansen.
### Kilde

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) på linje 332
