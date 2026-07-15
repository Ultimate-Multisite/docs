---
id: wu_domain_registration_completed
title: Գործողություն - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Գործարկվում է այն բանից հետո, երբ դոմենը հաջողությամբ գրանցվել է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Վճարումը, որը գործարկեց գրանցումը։ |
| $registration_data | `array&lt;string,mixed&gt;` | Գրանցման մետատվյալներ (domain_name, provider_id, years, expiry_date և այլն)։ |
| $result | `array&lt;string,mixed&gt;` | Գրանցողի կողմից վերադարձված հում արդյունքների զանգվածը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ֆայլում՝ 1204-րդ տողում։
