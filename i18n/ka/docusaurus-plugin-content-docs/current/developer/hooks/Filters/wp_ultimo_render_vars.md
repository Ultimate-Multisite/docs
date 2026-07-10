---
id: wp_ultimo_render_vars
title: ფილტრი - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# ფილტრი: wp_ultimo_render_vars {#filter-wpultimorendervars}

საშუალებას აძლევს plugin-ის დეველოპერებს, გლობალურად დაამატონ დამატებითი ცვლადი რენდერის კონტექსტში.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $args | `array` | მასივი, რომელიც შეიცავს render გამოძახებით გადაცემულ ცვლადებს. |
| $view | `string` | დასარენდერებელი ხედის სახელი. |
| $default_view | `string` | fallback_view-ის სახელი |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31)-ში, 31-ე ხაზზე


## აბრუნებს {#returns}
