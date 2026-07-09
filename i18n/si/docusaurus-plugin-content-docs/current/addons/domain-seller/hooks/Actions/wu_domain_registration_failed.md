---
id: wu_domain_registration_failed
title: ක්‍රියාව - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ඩොමේන් ලියාපදිංචි කිරීමේ උත්සාහයක් අසාර්ථක වූ පසු ක්‍රියාත්මක වේ.

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ලියාපදිංචිය ආරම්භ කළ ගෙවීම. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed සහ error_message ඇතුළත් ලියාපදිංචි මෙටාදත්ත. |
| $error_message | `string` | ලියාපදිංචි සේවාවෙන් ලැබුණු මිනිසාට කියවිය හැකි දෝෂ පණිවිඩය. |

### සිට

- 2.0.0
### මූලාශ්‍රය

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) හි 1250 වන පේළියේ නිර්වචනය කර ඇත
