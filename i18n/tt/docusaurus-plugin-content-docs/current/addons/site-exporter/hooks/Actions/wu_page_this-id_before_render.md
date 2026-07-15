---
id: wu_page_this-id_before_render
title: 'Гамәл - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Билгеле бер битне күрсәтү алдыннан эшли.

Куллану: Динамик өлеш гамәлдәге бит id белән алыштырылырга тиеш, мәсәлән, add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Битнең id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page нөсхәсе. |

### Версиядән башлап {#since}

- 1.8.2
### Чыганак {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) эчендә 368 нче юлда билгеләнгән
