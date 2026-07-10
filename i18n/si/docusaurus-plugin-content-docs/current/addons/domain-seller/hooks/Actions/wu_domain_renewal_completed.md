---
id: wu_domain_renewal_completed
title: ක්‍රියාව - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

වසමක් සාර්ථකව අලුත් කළ පසු ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | අලුත් කිරීම ආරම්භ කළ ගෙවීම. |
| $renewal_data | `array&lt;string,mixed&gt;` | අලුත් කිරීමේ metadata (domain_name, years, customer_id, ආදිය). |
| $result | `array&lt;string,mixed&gt;` | නව expiry_date ඇතුළුව registrar විසින් ආපසු ලබාදුන් raw result array. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) හි 594 වන පේළියේ අර්ථ දක්වා ඇත.
