---
id: wu_page_this-id_load
title: 'Acțiune - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Permite dezvoltatorilor de plugin să adauge hook-uri suplimentare paginilor noastre.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $id | `string` | ID-ul acestei pagini. |
| $page_hook | `string` | Hook-ul paginii acestei pagini. |
| $admin_page | `self` | Instanța paginii. |

### De la {#since}

- 1.8.2
- 2.0.4: Adăugat al treilea parametru: instanța paginii.
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) la linia 332
