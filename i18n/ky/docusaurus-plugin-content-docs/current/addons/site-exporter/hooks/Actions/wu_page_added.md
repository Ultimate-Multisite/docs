---
id: wu_page_added
title: Аракет - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Аракет: wu_page_added {#action-wupageadded}

Беттер катталганда плагин иштеп чыгуучуларына кошумча нерселерди иштетүүгө мүмкүндүк берет.

Белгилүү бир бет көрүлүп жатканда гана иштеген wu_page_load'тан айырмаланып, бул hook WP Ultimo коду аркылуу кошулуп жаткан ар бир админ бет үчүн каттоо учурунда иштейт.

## Параметрлер {#parameters}

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бул беттин ID'си. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бул бет үчүн түзүлгөн hook. |

### Качандан бери {#since}

- 2.0.0
### Булак {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ичинде 203-сапта аныкталган.
