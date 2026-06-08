---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

ይህ የሚያደርገው ለመፈተሽ ያለበትን የምርት (product) መለያ (ID) ነው። ይህ መለያ ካለ፣ አዲሱ የደንበኝነት ምዝገባ (subscription) ይህንን ምርት ይጠቀማል።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | መፈተሽ ያለበት የStripe ምርት መለያ (ID)። |
| $name | `string` | የምርት ስም (Product name)። |

### Source

በ[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) ፋይል ውስጥ በ2741ኛው መስመር ተገልጿል።
