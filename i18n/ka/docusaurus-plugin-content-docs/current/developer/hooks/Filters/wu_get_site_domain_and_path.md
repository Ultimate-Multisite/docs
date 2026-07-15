---
id: wu_get_site_domain_and_path
title: ფილტრი - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# ფილტრი: wu_get_site_domain_and_path

დეველოპერებს საშუალებას აძლევს, შეცვალონ დომენის/გზის წყვილები.

ეს შეიძლება სასარგებლო იყოს მრავალი რამისთვის, მაგალითად, რაიმე ტიპის staging გადაწყვეტის, განსხვავებული სერვერების და ა.შ. განსახორციელებლად.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $d | `object` | მიმდინარე ობიექტი, რომელიც შეიცავს დომენისა და გზის გასაღებებს. |
| $path_or_subdomain | `string` | ფუნქციაში გადაცემული თავდაპირველი გზა/ქვედომენი. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235)-ში, ხაზზე 235


## აბრუნებს {#returns}
ობიექტს, რომელიც შეიცავს დომენისა და გზის გასაღებებს.
