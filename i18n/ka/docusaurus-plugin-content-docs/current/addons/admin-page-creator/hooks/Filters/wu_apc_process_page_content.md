---
id: wu_apc_process_page_content
title: ფილტრი - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# ფილტრი: wu_apc_process_page_content

დეველოპერებს აძლევს საბოლოო კონტენტის შეცვლის საშუალებას

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $content | `string` | კონტენტი ჩანაცვლებების შემდეგ. |
| $content_before_processing | `string` | კონტენტი ჩანაცვლებებამდე. |
| $to_replace | `array` | მასივი, რომელიც შეიცავს placeholder-ებს. |
| $placeholder_count | `int` | ნაპოვნი placeholder-ების რაოდენობა. |

### ვერსიიდან {#since}

- 1.4.0
### წყარო {#source}

განსაზღვრულია [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46)-ში, 46-ე ხაზზე


## აბრუნებს {#returns}
კონტენტი ცვლილების შემდეგ.
