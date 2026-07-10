---
id: wu_domain_renewal_failed
title: ක්‍රියාව - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# ක්‍රියාව: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

වසම් අලුත් කිරීමේ උත්සාහයක් අසාර්ථක වූ පසු ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | අලුත් කිරීම ආරම්භ කළ ගෙවීම. |
| $renewal_data | `array&lt;string,mixed&gt;` | අලුත් කිරීමේ metadata (domain_name, years, ආදිය). |
| $error_message | `string` | ලියාපදිංචිකරුගෙන් ලැබෙන මිනිසුන්ට කියවිය හැකි දෝෂ පණිවිඩය. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) තුළ 630 පේළියේ අර්ථ දක්වා ඇත.
