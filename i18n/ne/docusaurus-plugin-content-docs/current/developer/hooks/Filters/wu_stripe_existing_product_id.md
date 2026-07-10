---
id: wu_stripe_existing_product_id
title: फिल्टर - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# फिल्टर: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

जाँच गर्नुपर्ने उत्पादनको ID फिल्टर गर्छ। यदि यो अवस्थित छ भने, नयाँ subscription ले यही उत्पादन प्रयोग गर्नेछ।

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | जाँच गर्नुपर्ने Stripe उत्पादनको ID। |
| $name | `string` | उत्पादनको नाम। |

### स्रोत {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) मा पङ्क्ति 2741 मा परिभाषित गरिएको छ।
