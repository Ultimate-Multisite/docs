---
id: wu_make_primary_domain_redirect_url
title: ფილტრი - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# ფილტრი: wu_make_primary_domain_redirect_url

ფილტრავს გადამისამართების URL-ს დომენის primary-ად გადაქცევის შემდეგ.

დეველოპერებს საშუალებას აძლევს, მოარგონ, სად გადამისამართდებიან მომხმარებლები დომენის primary-ად წარმატებით დაყენების შემდეგ. ნაგულისხმევად, გადამისამართება ხდება მთავარი საიტის მიმდინარე URL-ზე, ან იმ საიტის admin URL-ზე, რომელიც იცვლება.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $redirect_url | `string` | ნაგულისხმევი გადამისამართების URL. ან მიმდინარე URL (თუ მთავარი საიტია), ან მიმდინარე საიტის admin URL. |
| $current_site | `int` | იმ საიტის ID, რომლის დომენიც primary-ად ყენდება. |
| $domain | `\Domain` | დომენის ობიექტი, რომელიც primary-ად დაყენდა. |
| $old_primary_domains | `array` | იმ დომენების ID-ების მასივი, რომლებიც ადრე primary იყო. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639)-ში, 639-ე ხაზზე


## აბრუნებს
გაფილტრულ გადამისამართების URL-ს.
