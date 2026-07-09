---
id: wu_page_added
title: Acció - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Permet als desenvolupadors de plugins executar accions addicionals quan es registren pàgines.

A diferència de `wu_page_load`, que només s'executa quan es visualitza una pàgina específica, aquest hook s'executa durant el registre de qualsevol pàgina d'administració que s'afegeixi utilitzant codi WP Ultimo.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID d'aquesta pàgina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'hook generat per a aquesta pàgina. |

### Desvinguts {#since}

- 2.0.0
### Font {#source}

Definit en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) a la línia 203
