---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

ഒരു യൂസർ അഡ്മിനിസ്ട്രേറ്റർ ആയ നെറ്റ്‌വർക്കുകൾ ഫിൽട്ടർ ചെയ്യുക. ഇത് പ്രക്രിയയെ വേഗത്തിലാക്കാൻ (short-circuit) സഹായിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | നെറ്റ്‌വർക്ക് ഐഡികളുടെ ലിസ്റ്റ് അല്ലെങ്കിൽ false. null അല്ലാത്ത ഏത് മൂല്യവും പ്രക്രിയയെ തടസ്സപ്പെടുത്തും (short-circuit). |
| $ | `int` | നെറ്റ്‌വർക്കുകൾ തിരികെ നൽകേണ്ട യൂസർ ഐഡി. |

### Since

- 2.0.0
### Source

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) എന്ന ഫയലിലെ 688-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
