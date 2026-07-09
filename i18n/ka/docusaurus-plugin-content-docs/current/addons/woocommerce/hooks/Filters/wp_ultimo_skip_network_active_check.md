---
id: wp_ultimo_skip_network_active_check
title: ფილტრი - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# ფილტრი: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

დეველოპერებს აძლევს საშუალებას, მოკლე გზით გამოტოვონ ქსელური აქტივაციის შემოწმება.

ეს სასარგებლოა composer-ზე დაფუძნებული და სხვა მორგებული კონფიგურაციების გამოყენებისას, მაგალითად Bedrock-ის შემთხვევაში, სადაც plugin-ების mu-plugins-ად გამოყენება ნორმაა.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $skip_network_activation_check | `bool` | უნდა გამოვტოვოთ თუ არა შემოწმება; ნაგულისხმევად არის false. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272)-ში, 272-ე ხაზზე


## აბრუნებს {#returns}
true, თუ გსურთ შემოწმების გამოტოვება; წინააღმდეგ შემთხვევაში false.
