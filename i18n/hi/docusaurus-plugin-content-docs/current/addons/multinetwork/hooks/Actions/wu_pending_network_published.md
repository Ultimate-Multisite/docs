---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

जब कोई पेंडिंग नेटवर्क प्रकाशित (published) हो जाता है, तो यह एक्शन ट्रिगर होता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | बनाया गया नेटवर्क। |
| $membership | `\WP_Ultimo\Models\Membership` | सदस्यता (membership)। |
| $pending_network | `array` | मूल पेंडिंग नेटवर्क का डेटा। |

### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) में लाइन 1815 पर परिभाषित।
