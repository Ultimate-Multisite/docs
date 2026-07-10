---
id: wu_pending_network_published
title: მოქმედება - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# მოქმედება: wu_pending_network_published {#action-wupendingnetworkpublished}

ამოქმედდება მომლოდინე ქსელის გამოქვეყნების შემდეგ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | შექმნილი ქსელი. |
| $membership | `\WP_Ultimo\Models\Membership` | membership. |
| $pending_network | `array` | საწყისი მომლოდინე ქსელის მონაცემები. |

### წყარო {#source}

განსაზღვრულია [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815)-ში, 1815-ე ხაზზე
