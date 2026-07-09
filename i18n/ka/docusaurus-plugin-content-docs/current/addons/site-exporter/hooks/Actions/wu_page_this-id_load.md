---
id: wu_page_this-id_load
title: 'მოქმედება - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

აძლევს plugin-ის დეველოპერებს საშუალებას, დაამატონ დამატებითი hooks კონკრეტულ გვერდზე.

გამოყენება: დინამიკური ნაწილი უნდა ჩანაცვლდეს ვალიდური გვერდის id-ით, მაგ. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ამ გვერდის ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ამ გვერდისთვის გენერირებული hook. |

### ვერსიიდან

- 1.8.2
### წყარო

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301)-ში, ხაზზე 301
