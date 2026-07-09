---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

जेव्हा एखादे 'pending' नेटवर्क प्रकाशित होते, तेव्हा हे फंक्शन कार्यान्वित होते.

## पॅरामीटर्स (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | तयार झालेले नेटवर्क. |
| $membership | `\WP_Ultimo\Models\Membership` | सदस्यत्व (membership). |
| $pending_network | `array` | मूळ 'pending' नेटवर्कचा डेटा. |

### स्रोत (Source) {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) मध्ये लाइन १८१५ वर परिभाषित केले आहे.
