---
id: switch_network
title: Action - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

এই অ্যাকশনটোৱে কলি কৰে যেতিয়া বৰ্তমানৰ নেটৱৰ্কৰ পৰিৱেশ (network context) সলনি হয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | যিটো নেটৱৰ্কলৈ সলনি হ'বলৈ গৈ আছে, তাৰ আইডি। |
| $old_network_id | `int` | পূৰ্বে বৰ্তমান থকা নেটৱৰ্কটোৰ আইডি। |

### Since {#since}

- 1.3.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) ফাইলৰ লাইন ৮৫৯ ত সংজ্ঞায়িত কৰা হৈছে।
