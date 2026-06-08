---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

এটা pending network পাবলিছ হোৱাৰ পিছত ট্ৰিগাৰ হয়।

## প্যারামিটাৰসমূহ (Parameters)

| নাম (Name) | ধৰণ (Type) | বিৱৰণ (Description) |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | সৃষ্টি কৰা নেটৱৰ্কটো। |
| $membership | `\WP_Ultimo\Models\Membership` | মেম্বৰশ্বিপটো। |
| $pending_network | `array` | মূল pending network ডেটা। |

### উৎস (Source)

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) ফাইলৰ লাইন ১৮১৫ ত সংজ্ঞায়িত কৰা হৈছে।
