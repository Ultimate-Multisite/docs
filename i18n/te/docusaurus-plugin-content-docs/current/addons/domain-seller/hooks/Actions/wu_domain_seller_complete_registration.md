---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

చెల్లింపు (payment) ఒక స్థితికి మారినప్పుడు, అది డొమైన్ రిజిస్ట్రేషన్‌ను ట్రిగ్గర్ చేయవలసి వచ్చినప్పుడు ఇది పనిచేస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | చెల్లింపు ఆబ్జెక్ట్. |
| $old_status | `string` | మారడానికి ముందు ఉన్న పాత చెల్లింపు స్థితి. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266
