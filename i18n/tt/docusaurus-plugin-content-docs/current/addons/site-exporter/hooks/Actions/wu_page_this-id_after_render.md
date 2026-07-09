---
id: wu_page_this-id_after_render
title: 'Гамәл - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Билгеле бер бит күрсәтелгәннән соң эшли башлый.

Куллану: Динамик өлеш дөрес бит id белән алыштырылырга тиеш, мәсәлән add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Битнең id-сы. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page экземпляры. |

### Бирле {#since}

- 1.8.2
### Чыганак {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) файлында 394 нче юлда билгеләнгән
