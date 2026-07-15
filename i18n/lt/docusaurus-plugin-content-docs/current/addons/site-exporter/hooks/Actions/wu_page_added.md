---
id: wu_page_added
title: Veiksmas - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Veiksmas: wu_page_added

Leidžia plugin kūrėjams paleisti papildomus veiksmus, kai puslapiai registruojami.

Skirtingai nei wu_page_load, kuris vykdomas tik tada, kai peržiūrimas konkretus puslapis, šis hook vykdomas registruojant kiekvieną administratoriaus puslapį, pridedamą naudojant WP Ultimo kodą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šio puslapio ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šiam puslapiui sugeneruotas hook. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) 203 eilutėje
