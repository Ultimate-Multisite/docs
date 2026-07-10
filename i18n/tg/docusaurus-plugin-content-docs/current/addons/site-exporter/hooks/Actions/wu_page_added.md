---
id: wu_page_added
title: Амал - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Амал: wu_page_added {#action-wupageadded}

Ба таҳиягарони plugin иҷозат медиҳад, ки ҳангоми сабти саҳифаҳо корҳои иловагӣ иҷро кунанд.

Баръакси wu_page_load, ки танҳо вақте иҷро мешавад, ки саҳифаи мушаххас дида мешавад, ин hook ҳангоми сабт барои ҳар як саҳифаи admin, ки бо истифода аз коди WP Ultimo илова мешавад, иҷро мегардад.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-и ин саҳифа. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook-и барои ин саҳифа тавлидшуда. |

### Аз замон {#since}

- 2.0.0
### Манбаъ {#source}

Дар [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) дар сатри 203 муайян шудааст.
