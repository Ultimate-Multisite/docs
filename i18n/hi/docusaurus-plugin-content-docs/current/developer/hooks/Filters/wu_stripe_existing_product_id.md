---
id: wu_stripe_existing_product_id
title: फ़िल्टर - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# फ़िल्टर: wu_stripe_existing_product_id

यह उस उत्पाद के ID को फ़िल्टर करता है जिसे जांचा जाना है। यदि यह ID मौजूद है, तो नई सदस्यता (subscription) इसी उत्पाद का उपयोग करेगी।

## पैरामीटर्स

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $product_id | `string` | जांच करने के लिए Stripe उत्पाद का ID। |
| $name | `string` | उत्पाद का नाम। |

### स्रोत

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) में लाइन 2741 पर परिभाषित।
