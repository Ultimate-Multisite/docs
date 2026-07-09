---
id: wu_page_added
title: Aiki - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aiki: wu_page_added {#action-wupageadded}

Ba wa masu haɓaka plugin damar gudanar da ƙarin abubuwa lokacin da aka yi rajistar shafuka.

Ba kamar wu_page_load ba, wanda ke gudana ne kawai lokacin da ake kallon wani takamaiman shafi, wannan hook yana gudana a lokacin rajista ga kowane shafin admin da ake ƙarawa ta amfani da lambar WP Ultimo.

## Sigogi {#parameters}

| Suna | Nau’i | Bayani |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID na wannan shafi. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook ɗin da aka samar wa wannan shafi. |

### Tun daga {#since}

- 2.0.0
### Tushe {#source}

An bayyana a cikin [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) a layi na 203
