---
id: wu_page_load
title: მოქმედება - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# მოქმედება: wu_page_load {#action-wupageload}

პლაგინის დეველოპერებს აძლევს საშუალებას, ჩვენს გვერდებს დამატებითი hooks დაუმატონ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ამ გვერდის ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ამ გვერდისთვის გენერირებული hook. |

### ვერსიიდან {#since}

- 1.8.2
### წყარო {#source}

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289)-ში 289-ე ხაზზე
