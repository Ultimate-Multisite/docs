---
id: wu_domain_registration_completed
title: ක්‍රියාව - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# ක්‍රියාව: wu_domain_registration_completed

වසමක් සාර්ථකව ලියාපදිංචි වූ පසු ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ලියාපදිංචිය ආරම්භ කළ ගෙවීම. |
| $registration_data | `array&lt;string,mixed&gt;` | ලියාපදිංචි මෙටාදත්ත (domain_name, provider_id, years, expiry_date, ආදිය). |
| $result | `array&lt;string,mixed&gt;` | රෙජිස්ට්‍රාර් විසින් ආපසු ලබාදුන් අමු ප්‍රතිඵල අරාව. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) හි 1204 වන පේළියේ නිර්වචනය කර ඇත.
