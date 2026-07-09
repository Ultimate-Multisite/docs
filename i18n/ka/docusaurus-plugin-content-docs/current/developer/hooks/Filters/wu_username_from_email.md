---
id: wu_username_from_email
title: ფილტრი - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# ფილტრი: wu_username_from_email

გაფილტრეთ ახალი მომხმარებლის მომხმარებლის სახელი.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | მომხმარებლის მომხმარებლის სახელი. |
| $email | `string` | ახალი მომხმარებლის ელფოსტის მისამართი. |
| $new_user_args | `array` | ახალი მომხმარებლის არგუმენტების მასივი, შესაძლოა მოიცავდეს სახელსა და გვარს. |
| $suffix | `string` | დაამატეთ სტრიქონი მომხმარებლის სახელს, რათა ის უნიკალური გახდეს. |

### დანერგილია ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516)-ში, 516-ე ხაზზე
