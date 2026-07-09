---
id: get_blogs_of_user
title: ფილტრი - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# ფილტრი: get_blogs_of_user

აქ, ყოველი შემთხვევისთვის, იმეორებს ორიგინალ WP ფილტრს.

ფილტრავს იმ საიტების სიას, რომლებსაც მომხმარებელი ეკუთვნის.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $sites | `object[]` | მომხმარებლის კუთვნილი საიტის ობიექტების მასივი. |
| $user_id | `int` | მომხმარებლის ID. |
| $all | `bool` | უნდა შეიცავდეს თუ არა დაბრუნებული საიტების მასივი ყველა საიტს, მათ შორის მათაც, რომლებიც მონიშნულია როგორც 'deleted', 'archived' ან 'spam'. ნაგულისხმევია false. |

### ვერსიიდან

- 2.0.11
### წყარო

განსაზღვრულია [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851)-ში, ხაზზე 851
