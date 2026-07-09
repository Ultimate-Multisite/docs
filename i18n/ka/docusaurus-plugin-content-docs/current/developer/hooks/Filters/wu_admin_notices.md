---
id: wu_admin_notices
title: ფილტრი - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# ფილტრი: wu_admin_notices {#filter-wuadminnotices}

დეველოპერებს აძლევს საშუალებას გაფილტრონ Ultimate Multisite-ის მიერ დამატებული ადმინისტრატორის შეტყობინებები.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $notices | `array` | შეტყობინებების სია კონკრეტული პანელისთვის. |
| $all_notices | `array` | დამატებული შეტყობინებების სია, პანელების მიხედვით დაყოფილი. |
| $panel | `string` | პანელი, რომლის შეტყობინებებიც უნდა მიიღოთ. |
| $filter | `string` | გაფილტრულია თუ არა დასახური შეტყობინებები. |
| $dismissed_messages | `array` | დახურული შეტყობინებების გასაღებების სია. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121)-ში, ხაზზე 121


## აბრუნებს {#returns}
