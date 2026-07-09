---
id: wu_page_added
title: Гамәл - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Гамәл: wu_page_added

Плагин эшләүчеләргә битләр теркәлгәндә өстәмә нәрсәләр башкарырга мөмкинлек бирә.

Бары тик конкрет бит каралганда гына эшли торган wu_page_load-тан аермалы буларак, бу hook WP Ultimo коды ярдәмендә өстәлә торган һәр админ-битне теркәгәндә эшли.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бу битнең ID-сы. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бу бит өчен ясалган hook. |

### Кайсы версиядән

- 2.0.0
### Чыганак

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) эчендә 203 нче юлда билгеләнгән.
