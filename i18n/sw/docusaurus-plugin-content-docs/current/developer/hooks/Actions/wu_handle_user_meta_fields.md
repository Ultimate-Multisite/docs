---
id: wu_handle_user_meta_fields
title: Kitendo - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Inaruhusu watengenezaji wa plugin kuhifadhi data ya meta ya mtumiaji kwa njia tofauti ikiwa wanahitaji.

## Vigezo {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $meta_repository | `array` | Orodha ya sehemu za meta, zilizopangwa kwa muundo wa nøkni => thamani. |
| $user | `\WP_User` | Kichwa cha mtumiaji wa WordPress. |
| $customer | `\Customer` | Kichwa cha mteja wa Ultimate Multisite. |
| $checkout | `\Checkout` | Darasa la checkout. |

### Tangu {#since}

- 2.0.4
### Chanzo {#source}

Imefafanuliwa katika [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) kwenye mstari wa 1244
