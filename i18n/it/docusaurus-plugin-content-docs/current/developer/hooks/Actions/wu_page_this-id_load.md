---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Consente agli sviluppatori di plugin di aggiungere hook aggiuntivi alle nostre pagine.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | L'ID di questa pagina. |
| $page_hook | `string` | Il page hook di questa pagina. |
| $admin_page | `self` | TLa istanza della pagina. |

### Since {#since}

- 1.8.2
- 2.0.4: Aggiunto il terzo parametro: l'istanza della pagina.

### Source {#source}

Definito in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) alla riga 332
