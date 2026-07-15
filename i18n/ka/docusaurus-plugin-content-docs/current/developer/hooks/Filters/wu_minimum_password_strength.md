---
id: wu_minimum_password_strength
title: ფილტრი - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# ფილტრი: wu_minimum_password_strength

გაფილტრეთ მოთხოვნილი პაროლის მინიმალური სიძლიერე (zxcvbn ქულა).

სიძლიერის დონეები: - 0, 1: ძალიან სუსტი - 2: სუსტი - 3: საშუალო - 4: ძლიერი (ნაგულისხმევი)

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | მოთხოვნილი მინიმალური სიძლიერის დონე. |
| $strength_setting | `string` | ადმინისტრატორის პარამეტრის მნიშვნელობა (საშუალო, ძლიერი, ზეძლიერი). |

### დაწყებული ვერსიიდან {#since}

- 2.4.0
### წყარო {#source}

განსაზღვრულია [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516)-ში, ხაზზე 516
