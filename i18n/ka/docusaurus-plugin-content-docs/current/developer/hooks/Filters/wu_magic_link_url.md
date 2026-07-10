---
id: wu_magic_link_url
title: ფილტრი - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# ფილტრი: wu_magic_link_url {#filter-wumagiclinkurl}

გაფილტრავს გენერირებული magic link-ის URL-ს.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $magic_link | `string` | magic link-ის URL. |
| $user_id | `int` | მომხმარებლის ID. |
| $site_id | `int` | საიტის ID. |
| $redirect_to | `string` | გადამისამართების URL. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148)-ში, ხაზზე 148
