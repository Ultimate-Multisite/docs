---
id: wu_page_added
title: მოქმედება - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# მოქმედება: wu_page_added

აძლევს plugin-ის დეველოპერებს საშუალებას, გაუშვან დამატებითი მოქმედებები, როდესაც გვერდები რეგისტრირდება.

`wu_page_load`-ისგან განსხვავებით, რომელიც მხოლოდ მაშინ ეშვება, როდესაც კონკრეტული გვერდი იხილება, ეს hook რეგისტრაციისას ეშვება ყოველი ადმინისტრატორის გვერდისთვის, რომელიც WP Ultimo კოდის გამოყენებით ემატება.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ამ გვერდის ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ამ გვერდისთვის გენერირებული hook. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203)-ში, ხაზზე 203
