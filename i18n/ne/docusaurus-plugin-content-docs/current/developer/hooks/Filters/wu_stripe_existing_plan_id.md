---
id: wu_stripe_existing_plan_id
title: फिल्टर - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# फिल्टर: wu_stripe_existing_plan_id

जाँच गर्नुपर्ने योजनाको ID फिल्टर गर्छ। यदि यो अवस्थित छ भने, नयाँ सदस्यताले यही योजना प्रयोग गर्नेछ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $plan_id | `string` | जाँच गर्नुपर्ने Stripe योजनाको ID। |
| $membership_level | `object` | सदस्यता स्तर वस्तु। |

### स्रोत

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) मा लाइन 2653 मा परिभाषित गरिएको छ।
