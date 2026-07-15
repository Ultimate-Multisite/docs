---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

플러ግ인 ገንቢዎች የሚያስፈልጋቸው ከሆነ የተጠቃሚ መረጃ (user meta data) በተለያዩ መንገዶች እንዲያስቀምጡ ያስችላል።

## መረጃዎች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | የሜታ መስኮች ዝርዝር፣ በkey => value መዋቅር የተደራጀ። |
| $user | `\WP_User` | የWordPress ተጠቃሚ ነገር (object)። |
| $customer | `\Customer` | የUltimate Multisite የደንበኛ ነገር (object)። |
| $checkout | `\Checkout` | የቼክአውት ክፍል (class)። |

### ከ {#since}

- 2.0.4
### ምንጭ {#source}

በ[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ላይ በ1244ኛው መስመር ተገልጿል።
