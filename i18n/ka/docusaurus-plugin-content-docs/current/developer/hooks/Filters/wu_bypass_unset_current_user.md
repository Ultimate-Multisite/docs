---
id: wu_bypass_unset_current_user
title: ფილტრი - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# ფილტრი: wu_bypass_unset_current_user

დეველოპერებს საშუალებას აძლევს, გვერდი აუარონ მიმდინარე მომხმარებლის unset კოდს.

ნებისმიერი მნიშვნელობის დაბრუნება, null-ის გარდა, გვერდს აუვლის შესული მიმდინარე მომხმარებლის unset-ს. ეს შეიძლება სასარგებლო იყოს ზოგიერთ სცენარში, მაგალითად, როცა საქმე გვაქვს ქვე-საიტებთან, რომლებიც გამოიყენება ადმინისტრაციულ პანელებად.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null გასაგრძელებლად, ნებისმიერი სხვა მნიშვნელობა კი მის გვერდის ასავლელად. |
| $current_user | `false\|\WP_User` | მიმდინარე მომხმარებლის ობიექტი. |

### ვერსიიდან {#since}

- 2.0.11
### წყარო {#source}

განსაზღვრულია [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221)-ში, 221-ე ხაზზე


## აბრუნებს {#returns}
