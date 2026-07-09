---
id: get_site_url_for_previewer
title: ფილტრი - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

მიეცით plugin-ის დეველოპერებს previewer-ში გამოყენებული URL-ის გაფილტვრის შესაძლებლობა

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | ნაგულისხმევი domain, რომელიც ახლა გამოიყენება, სასარგებლოა მანიპულაციებისთვის |
| $domain_options | `array` | Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options-ში შეყვანილი ყველა domain-ის ვარიანტის სია |

### Since {#since}

- 1.7.2
### წყარო {#source}

განსაზღვრულია [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812)-ში, ხაზზე 812


## აბრუნებს {#returns}
გამოსაყენებელი ახალი domain
