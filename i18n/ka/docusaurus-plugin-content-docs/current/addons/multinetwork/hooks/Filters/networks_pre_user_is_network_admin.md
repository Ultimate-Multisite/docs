---
id: networks_pre_user_is_network_admin
title: ფილტრი - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# ფილტრი: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

ფილტრავს networks, რომელთა ადმინისტრატორიც არის მომხმარებელი, პროცესის შესამოკლებლად.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $ | `array\|bool\|null` | network ID-ების სია ან false. null-ის გარდა ნებისმიერი მნიშვნელობა პროცესს შეამოკლებს. |
| $ | `int` | მომხმარებლის ID, რომლისთვისაც networks უნდა დაბრუნდეს. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688)-ში, 688-ე ხაზზე
