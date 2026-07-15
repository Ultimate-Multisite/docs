---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

ప్లగిన్ డెవలపర్‌లు అవసరమైతే యూజర్ మెటా డేటాను వివిధ రకాలుగా సేవ్ చేయడానికి ఇది అనుమతిస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | మెటా ఫీల్డ్‌ల జాబితా, ఇది key => value రూపంలో ఉంటుంది. |
| $user | `\WP_User` | వర్డ్‌ప్రెస్ యూజర్ ఆబ్జెక్ట్. |
| $customer | `\Customer` | అల్టిమేట్ మల్టీసైట్ కస్టమర్ ఆబ్జెక్ట్. |
| $checkout | `\Checkout` | చెక్అవుట్ క్లాస్. |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
