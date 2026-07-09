---
id: wu_page_added
title: მოქმედება - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# მოქმედება: wu_page_added

საშუალებას აძლევს plugin-ის დეველოპერებს, დამატებითი მოქმედებები გაუშვან, როდესაც გვერდები რეგისტრირდება.

განსხვავებით wu_page_load-ისგან, რომელიც მხოლოდ მაშინ ეშვება, როდესაც კონკრეტული გვერდი იხილება, ეს hook ეშვება რეგისტრაციისას ყოველი ადმინისტრატორის გვერდისთვის, რომელიც ემატება Ultimate Multisite კოდის გამოყენებით.

## პარამეტრები

| Name | Type | აღწერა |
|------|------|-------------|
| $page_id | `string` | ამ გვერდის ID. |
| $page_hook | `string` | ამ გვერდის hook-ის სახელი. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228)-ში, 228-ე ხაზზე
