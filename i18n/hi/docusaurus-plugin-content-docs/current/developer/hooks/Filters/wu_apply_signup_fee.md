---
id: wu_apply_signup_fee
title: फ़िल्टर - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee {#filter-wuapplysignupfee}

यह फ़िल्टर निर्धारित करता है कि साइनअप शुल्क (signup fee) लागू किया जाना चाहिए या नहीं।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $add_signup_fee | `bool` | साइनअप शुल्क जोड़ना है या नहीं। |
| $product | `object` | सदस्यता स्तर (Membership level) का ऑब्जेक्ट। |
| $this | `\WP_Ultimo\Checkout\Cart` | पंजीकरण ऑब्जेक्ट। |

### से {#since}

- 3.1
### स्रोत {#source}

[`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) में लाइन 1769 पर परिभाषित।
