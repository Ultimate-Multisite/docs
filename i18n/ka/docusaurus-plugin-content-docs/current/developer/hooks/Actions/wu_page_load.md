---
id: wu_page_load
title: მოქმედება - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# ქმედება: wu_page_load

საშუალებას აძლევს plugin-ის დეველოპერებს, ჩვენს გვერდებს დამატებითი hooks დაამატონ.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $id | `string` | ამ გვერდის ID. |
| $page_hook | `string` | ამ გვერდის page hook. |
| $admin_page | `self` | გვერდის ეგზემპლარი. |

### ვერსიიდან

- 1.8.2
- 2.0.4: დაემატა მესამე პარამეტრი: გვერდის ეგზემპლარი.
### წყარო

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318)-ში, ხაზზე 318
