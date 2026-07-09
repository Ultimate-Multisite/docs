---
id: move_site
title: მოქმედება - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# მოქმედება: move_site

გაეშვება მას შემდეგ, რაც საიტი ახალ ქსელში გადაინაცვლებს.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $site_id | `int` | იმ საიტის ID, რომელიც გადატანილია. |
| $old_network_id | `int` | საიტის საწყისი ქსელის ID. |
| $new_network_id | `int` | იმ ქსელის ID, რომელშიც საიტი გადატანილია. |

### ვერსიიდან

- 1.3.0
### წყარო

განსაზღვრულია [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587)-ში, ხაზზე 1587
