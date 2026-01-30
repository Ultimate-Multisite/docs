---
id: networks_pre_user_is_network_admin
title: "Filter - networks_pre_user_is_network_admin"
sidebar_label: "networks_pre_user_is_network_admin"
---

# Filter: networks_pre_user_is_network_admin

Filters the networks a user is the administrator of, to short-circuit the process.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | List of network IDs or false. Anything but null will short-circuit the process. |
| $ | `int` | User ID for which the networks should be returned. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688

