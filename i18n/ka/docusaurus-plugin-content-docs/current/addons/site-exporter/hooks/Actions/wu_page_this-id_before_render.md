---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

გამოიძახება კონკრეტული გვერდის რენდერინგამდე.

გამოყენება: დინამიკური ნაწილი უნდა ჩანაცვლდეს ვალიდური გვერდის id-ით, მაგალითად add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | გვერდის id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-ის instance. |

### ვერსიიდან {#since}

- 1.8.2
### წყარო {#source}

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ფაილში, 368-ე ხაზზე
