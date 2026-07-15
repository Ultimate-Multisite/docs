---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Permite dezvoltatorilor de plugin să adauge hook-uri suplimentare unei pagini specifice.

Utilizare: Partea dinamică trebuie înlocuită cu un ID de pagină valid, de exemplu. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ul acestei pagini. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook-ul generat pentru această pagină. |

### De la {#since}

- 1.8.2
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) la linia 301
