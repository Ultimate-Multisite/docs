---
id: wu_minimum_password_length
title: ფილტრი - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

გაფილტრეთ პაროლის მინიმალური სიგრძე.

მოქმედებს მხოლოდ მაშინ, როცა wu_enforce_password_rules არის true.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | პაროლის მინიმალური სიგრძე. ნაგულისხმევია 12 (შეესაბამება Defender Pro-ს). |
| $defender_active | `bool` | არის თუ არა Defender Pro Strong Password აქტიური. |

### Since

- 2.4.0
### წყარო

განსაზღვრულია [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543)-ში, ხაზზე 543
