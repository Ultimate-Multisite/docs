---
id: wu_domain_has_correct_dns
title: ფილტრი - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# ფილტრი: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

აძლევს პლაგინების დეველოპერებს საშუალებას დაამატონ ახალი შემოწმებები შედეგების განსასაზღვრად.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $result | `bool` | მიმდინარე შედეგი. |
| $domain | `self` | მიმდინარე დომენის ეგზემპლარი. |
| $domains_and_ips | `array` | DNS ძიებისას ნაპოვნი დომენებისა და IP-ების სია. |

### ვერსიიდან {#since}

- 2.0.4
### წყარო {#source}

განსაზღვრულია [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455)-ში, 455-ე ხაზზე


## აბრუნებს {#returns}
DNS სწორად არის დაყენებული თუ არა.
