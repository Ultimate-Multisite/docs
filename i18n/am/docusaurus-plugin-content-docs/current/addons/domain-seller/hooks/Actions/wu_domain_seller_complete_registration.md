---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

ይህ ድርጊት (Action) ክፍያው ወደ ዶሜን ምዝገባ እንዲጀመር የሚያስገድድ ሁኔታ ሲቀየር የሚፈጠረው ነው።

## ፓራሜትሮች (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | የክፍያው አካይነት (object)። |
| $old_status | `string` | ከመቀየሩ በፊት የነበረው የክፍያ ሁኔታ። |

### Since {#since}

- 2.0.0
### Source {#source}

በ[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) በ266ኛው መስመር ተገልጿል።
