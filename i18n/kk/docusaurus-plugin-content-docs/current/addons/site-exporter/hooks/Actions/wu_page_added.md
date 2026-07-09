---
id: wu_page_added
title: Әрекет - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Plugin әзірлеушілеріне беттер тіркелген кезде қосымша әрекеттерді орындауға мүмкіндік береді.

Тек белгілі бір бет қаралып жатқанда ғана орындалатын wu_page_load-тан айырмашылығы, бұл hook WP Ultimo кодын пайдаланып қосылатын әрбір admin беті үшін тіркеу кезінде орындалады.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Осы беттің ID-і. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Осы бет үшін жасалған hook. |

### Нұсқадан бастап

- 2.0.0
### Дереккөзі

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ішінде 203-жолда анықталған
