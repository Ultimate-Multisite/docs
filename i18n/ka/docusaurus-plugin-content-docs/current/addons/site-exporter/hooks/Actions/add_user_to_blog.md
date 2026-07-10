---
id: add_user_to_blog
title: მოქმედება - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# მოქმედება: add_user_to_blog {#action-addusertoblog}

ეშვება მაშინვე, როდესაც მომხმარებელი ემატება საიტს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $user_id | `int` | მომხმარებლის ID. |
| $role | `string` | მომხმარებლის როლი. |
| $blog_id | `int` | ბლოგის ID. |

### ვერსიიდან {#since}

- MU: MU
### წყარო {#source}

განსაზღვრულია [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174)-ში, ხაზზე 174
