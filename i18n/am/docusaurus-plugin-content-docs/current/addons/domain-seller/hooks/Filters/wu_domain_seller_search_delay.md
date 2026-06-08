---
id: wu_domain_seller_search_delay
title: ማጣሪያ - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

የዶሜይን ፍለጋን የመዘግየት ጊዜ (debounce delay) በሚሊሰከንድ ይቆጣጠራል።

በኔትወርክ ግንኙነት ፍጥነቱ ዝቅተኛ ከሆነ፣ ይህን ዋጋ ከፍ በማድረግ የAPI ጥሪዎችን መቀነስ ይችላሉ።

## መለኪያዎች

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | በሚሊሰከንድ ያለው የመዘግየት ጊዜ። መነሻው 500 ነው። |

### ከዚህ ጊዜ ጀምሮ

- 2.1.0
### ምንጭ

በ[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) ውስጥ በ854ኛው መስመር ተገልጿል።
