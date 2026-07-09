---
id: wu_page_before_render
title: ქმედება - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Action: wu_page_before_render {#action-wupagebeforerender}

საშუალება მიეცით plugin-ის დეველოპერებს, დაამატონ დამატებითი შიგთავსი, სანამ გვერდს გამოვიტანთ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $page_id | `string` | ამ გვერდის id. |
| $page | `object` | გვერდის ობიექტი. |

### ვერსიიდან {#since}

- 1.8.2
### წყარო {#source}

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388)-ში, ხაზზე 388
