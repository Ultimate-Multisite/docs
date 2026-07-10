---
id: wu_page_this-id_before_render
title: 'Գործողություն - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Գործարկվում է կոնկրետ էջի արտապատկերումից առաջ։

Օգտագործում․ դինամիկ մասը պետք է փոխարինվի վավեր էջի id-ով, օրինակ՝ add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Էջի id-ը։ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-ի նմուշը։ |

### Սկսած {#since}

- 1.8.2
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368)-ում՝ 368-րդ տողում
