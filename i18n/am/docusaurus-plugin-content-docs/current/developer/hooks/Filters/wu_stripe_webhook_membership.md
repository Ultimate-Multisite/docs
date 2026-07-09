---
id: wu_stripe_webhook_membership
title: ማጣሪያ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

ከዚህ webhook ጋር የተያያዘውን የአባልነት መዝገብ ያጣራል (filters)።

ይህ ማጣሪያ የተተገበረው አንድ አይነት Stripe ደንበኛ በተለያዩ ድረ-ገጾች ሲውል ሊፈጠሩ የሚችሉ ግጭቶችን ለመከላከል ነው።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | የአባልነት መረጃው (The membership object)። |
| $event | `\Stripe\Event` | የተቀበለው ክስተት (The event received)። |

### ምንጭ {#source}

በ[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) በ2035ኛው መስመር ተገልጿል።
