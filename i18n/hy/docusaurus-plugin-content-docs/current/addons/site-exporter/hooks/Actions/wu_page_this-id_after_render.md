---
id: wu_page_this-id_after_render
title: 'Գործողություն - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Գործարկվում է որոշակի էջի արտապատկերումից հետո։

Օգտագործում՝ դինամիկ մասը պետք է փոխարինվի վավեր էջի id-ով, օրինակ՝ add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Էջի id-ն։ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-ի նմուշը։ |

### Since {#since}

- 1.8.2
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) 394-րդ տողում
