---
id: wu_page_this-id_after_render
title: 'Әрекет - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Белгілі бір бет көрсетілгеннен кейін іске қосылады.

Қолданылуы: Динамикалық бөлікті жарамды бет id-імен ауыстыру қажет, мысалы add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Беттің id-і. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page данасы. |

### Нұсқадан бастап {#since}

- 1.8.2
### Дереккөзі {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ішінде 394-жолда анықталған
