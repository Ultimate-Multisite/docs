---
id: wu_get_checkout_variables
title: வடிகட்டி - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

செக்அவுட் பக்கத்தின் முன் அமைப்புகளை (pre-sets) வடிகட்ட (filter) प्लगइन உருவாக்குபவர்களுக்கு இது அனுமதிக்கிறது.

கவனமாக இருங்கள், இதில் சில கீகள் (keys) இல்லாவிட்டால், இது ஃபிரண்ட்-எண்டில் செக்அவுட் செயல்முறையை முற்றிலும் செயலிழக்கச் செய்யலாம்.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | உள்ளூர்மயமாக்கப்பட்ட மாறிகள் (Localized variables). |
| $checkout | `\Checkout` | செக்அவுட் வகுப்பு (The checkout class). |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) என்ற இடத்தில், 1970 வரியில் வரையறுக்கப்பட்டுள்ளது.

## Returns
புதிய மாறிகள் அணி (new variables array).
