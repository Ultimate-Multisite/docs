---
id: wu_page_get_title_links
title: Filtru - wu_page_get_title_links
sidebar_label: wu_page_get_title_links
_i18n_hash: c0ede349078aea8e4fe06e53a12b1c38
---
# Filtru: wu_page_get_title_links {#filter-wupagegettitlelinks}

Acest filtru permite dezvoltatorilor de plugin-uri, și nouă, să adăugăm link-uri de acțiune pe paginile de editare.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $action_links | `array\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Link-urile de acțiune. |
| $base_admin_page | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Această instanță. |

### De la {#since}

- 1.8.2
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L646) la linia 646


## Returnează {#returns}
Arată array-ul cu link-urile de acțiune.
