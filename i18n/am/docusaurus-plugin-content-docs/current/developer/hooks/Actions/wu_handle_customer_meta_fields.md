---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

የፕልጊን ገንቢዎች የሚያስፈልጋቸው ከሆነ ሜታ ዳታን በተለያዩ መንገዶች እንዲያስቀምጡ ያስችላል።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | የሜታ መስኮች ዝርዝር፣ በቁልፍ (key) እና በዋጋ (value) የተደራጀ። |
| $customer | `\Customer` | የUltimate Multisite ደንበኛ ነገር (object)። |
| $checkout | `\Checkout` | የቼክአውት ክፍል (class)። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ፋይል ውስጥ በ1211ኛው መስመር ተገልጿል።
