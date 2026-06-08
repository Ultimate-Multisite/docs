---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

পেমেন্টৰ এটা স্থিতিৰ পৰা আন এটা স্থিতি লৈ যোৱাৰ সময়ত (transition) এই অ্যাকশনটো ট্ৰيগাৰ হয়, যিটো ডোমেইন ৰেজিষ্ট্ৰেচন আৰম্ভ কৰিব লাগে।

## প্যারামিটাৰসমূহ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | পেমেন্ট অবজেক্টটো। |
| $old_status | `string` | পৰিৱৰ্তনৰ আগৰ পেমেন্ট স্থিতি। |

### কবেৰে পৰা (Since)

- 2.0.0
### উৎস (Source)

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) ফাইলৰ লাইন ২৬৬ ত সংজ্ঞায়িত কৰা হৈছে।
