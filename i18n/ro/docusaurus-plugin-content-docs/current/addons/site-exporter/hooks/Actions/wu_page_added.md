---
id: wu_page_added
title: Acțiune - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Permite dezvoltatorilor de plugin să ruleze acțiuni suplimentare atunci când paginile sunt înregistrate.

Diferit de `wu_page_load`, care rulează doar când o pagină specifică este vizibilă, acest hook rulează la înregistrare pentru fiecare pagină de administrare adăugată folosind codul WP Ultimo.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ul acestei pagini. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook-ul generat pentru această pagină. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) la linia 203
