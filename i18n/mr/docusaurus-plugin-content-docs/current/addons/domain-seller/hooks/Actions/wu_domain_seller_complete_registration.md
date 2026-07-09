---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

जेव्हा पेमेंट एका अशा स्थितीमध्ये बदलते (status) जी डोमेन नोंदणी (domain registration) सुरू करण्यासाठी आवश्यक आहे, तेव्हा हे ॲक्शन ट्रिगर होते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | पेमेंट ऑब्जेक्ट. |
| $old_status | `string` | बदलापूर्वीची मागील पेमेंट स्थिती. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) या फाईलमध्ये लाइन २६६ वर परिभाषित केले आहे.
