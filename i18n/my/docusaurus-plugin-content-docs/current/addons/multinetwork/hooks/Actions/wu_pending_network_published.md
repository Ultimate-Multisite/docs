---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Pending network တစ်ခုကို ထုတ်ဝေပြီးတဲ့အခါမှာ ဒီ action ကို ခေါ်ယူအသုံးပြုပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | ဖန်တီးပြီးသား network ကို။ |
| $membership | `\WP_Ultimo\Models\Membership` | အဖွဲ့ဝင်အဆင့်အတန်း (membership) ကို။ |
| $pending_network | `array` | မူရင်း pending network ရဲ့ အချက်အလက်တွေ။ |

### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) ရဲ့ ၁၈၁၅ လိုင်းမှာ သတ်မှတ်ထားပါတယ်။
