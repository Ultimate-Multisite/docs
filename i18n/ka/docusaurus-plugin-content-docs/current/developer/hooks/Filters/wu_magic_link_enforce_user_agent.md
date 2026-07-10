---
id: wu_magic_link_enforce_user_agent
title: ფილტრი - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

ფილტრავს, უნდა განხორციელდეს თუ არა მომხმარებლის აგენტის ვერიფიკაცია.

დააყენეთ false-ზე, რათა tokens იმუშაოს სხვადასხვა ბრაუზერსა და მოწყობილობაზე. ეს ამცირებს უსაფრთხოებას, მაგრამ ზრდის გამოყენების სიმარტივეს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $enforce | `bool` | უნდა განხორციელდეს თუ არა მომხმარებლის აგენტის დამთხვევის შემოწმება. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410)-ში, ხაზზე 410
