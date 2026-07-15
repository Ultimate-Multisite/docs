---
id: wu_handle_user_meta_fields
title: क्रिया - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

यह प्लगइन डेवलपर्स को अनुमति देता है कि यदि उन्हें आवश्यकता हो, तो वे उपयोगकर्ता मेटा डेटा को अलग-अलग तरीकों से सहेज सकें।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | मेटा फ़ील्ड्स की सूची, जो key => value संरचना में व्यवस्थित है। |
| $user | `\WP_User` | वर्डप्रेस उपयोगकर्ता ऑब्जेक्ट। |
| $customer | `\Customer` | अल्टीमेट मल्टीसाइट ग्राहक ऑब्जेक्ट। |
| $checkout | `\Checkout` | चेकआउट क्लास। |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
