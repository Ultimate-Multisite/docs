---
id: wu_page_this-id_load
title: 'Գործողություն - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Թույլ է տալիս plugin մշակողներին ավելացնել լրացուցիչ hooks կոնկրետ էջին։

Օգտագործում․ դինամիկ մասը պետք է փոխարինվի վավեր էջի ID-ով, օրինակ՝ add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Այս էջի ID-ն։ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Այս էջի համար ստեղծված hook-ը։ |

### Սկսած {#since}

- 1.8.2
### Աղբյուր {#source}

Սահմանված է [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301)-ում՝ 301-րդ տողում
