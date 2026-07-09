---
id: signup_get_available_languages
title: ფილტრი - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# ფილტრი: signup_get_available_languages

ფილტრავს ხელმისაწვდომი ენების სიას front-end საიტის რეგისტრაციებისთვის.

ამ hook-ისთვის ცარიელი მასივის გადაცემა გამორთავს პარამეტრის გამოტანას რეგისტრაციის ფორმაზე, ხოლო საიტის შექმნისას გამოყენებული იქნება ნაგულისხმევი ენა. ენები, რომლებიც უკვე დაყენებული არ არის, ამოიშლება.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $available_languages | `array` | ხელმისაწვდომი ენები. |

### ვერსიიდან

- 4.4.0
### წყარო

განსაზღვრულია [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117)-ში, ხაზზე 117
