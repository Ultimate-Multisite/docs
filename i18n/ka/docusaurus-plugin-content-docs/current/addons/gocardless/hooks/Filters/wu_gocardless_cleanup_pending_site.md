---
id: wu_gocardless_cleanup_pending_site
title: ფილტრი - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# ფილტრი: wu_gocardless_cleanup_pending_site

გაეშვება გაუქმებული GoCardless წევრობისთვის ობოლი მოლოდინში მყოფი საიტის წაშლამდე.

დააბრუნეთ false ამ ფილტრიდან, რათა წაშლა აიცილოთ თავიდან.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $blog_id | `int` | მოლოდინში მყოფი საიტის WordPress ბლოგის ID. |
| $membership | `\WP_Ultimo\Models\Membership` | გაუქმებული წევრობა. |
| $old_status | `string` | სტატუსი გაუქმებამდე. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086)-ში, ხაზზე 1086
