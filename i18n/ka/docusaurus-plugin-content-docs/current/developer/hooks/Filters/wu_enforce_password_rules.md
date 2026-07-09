---
id: wu_enforce_password_rules
title: ფილტრი - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# ფილტრი: wu_enforce_password_rules

ფილტრავს, უნდა აღსრულდეს თუ არა პაროლის დამატებითი წესები.

როდესაც true არის, აღასრულებს მინიმალური სიგრძისა და სიმბოლოების მოთხოვნებს. ავტომატურად ჩართულია "Super Strong" პარამეტრისთვის ან როდესაც Defender Pro-ის Strong Password ფუნქცია აქტიურია.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $enforce_rules | `bool` | უნდა აღსრულდეს თუ არა დამატებითი წესები. |
| $strength_setting | `string` | admin პარამეტრის მნიშვნელობა. |
| $defender_active | `bool` | აქტიურია თუ არა Defender Pro Strong Password. |

### ვერსიიდან

- 2.4.0
### წყარო

განსაზღვრულია [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531)-ში, ხაზზე 531
