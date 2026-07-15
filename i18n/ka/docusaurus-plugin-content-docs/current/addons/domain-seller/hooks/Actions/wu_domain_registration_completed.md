---
id: wu_domain_registration_completed
title: მოქმედება - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

გაეშვება მას შემდეგ, რაც დომენი წარმატებით დარეგისტრირდება.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | გადახდა, რომელმაც რეგისტრაცია გამოიწვია. |
| $registration_data | `array&lt;string,mixed&gt;` | რეგისტრაციის მეტამონაცემები (domain_name, provider_id, years, expiry_date და ა.შ.). |
| $result | `array&lt;string,mixed&gt;` | რეგისტრატორის მიერ დაბრუნებული დაუმუშავებელი შედეგების მასივი. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204)-ში, ხაზზე 1204
