---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

ደንበኛው ሲጨመር ፕልጊን ገንቢዎች ተጨማሪ ነገሮችን እንዲያደርጉ ያስችላል።

ለምሳሌ፣ ደንበኛውን ወደ ዋናው ድረ-ገጽ (site) ተጠቃሚ (user) ለማድረግ የሚያስችሉ hooks የምናስቀምጥበት ቦታ እዚህ ላይ ነው።

## መለኪያዎች {#parameters}

| ስም | አይነት | መግለጫ |
|------|------|-------------|
| $customer | `\Customer` | ምናልባት የተፈጠረው ደንበኛ። |
| $checkout | `\Checkout` | የአሁኑ የቼክአውት ክፍል (class)። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ላይ በ1156ኛው መስመር ተገልጿል።
