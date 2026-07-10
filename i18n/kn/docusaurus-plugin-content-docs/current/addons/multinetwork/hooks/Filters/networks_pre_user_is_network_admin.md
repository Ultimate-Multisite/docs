---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

ಬಳಕೆದಾರರು ಆಡಳಿತಗಾರರಾಗಿರುವ ನೆಟ್‌ವರ್ಕ್‌ಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಇದರಿಂದ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೇರವಾಗಿ ಮುಗಿಸಬಹುದು (short-circuit).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | ನೆಟ್‌ವರ್ಕ್ ಐಡಿಗಳ ಪಟ್ಟಿ ಅಥವಾ false. null ಆಗದ ಯಾವುದೇ ಮೌಲ್ಯವು ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೇರವಾಗಿ ಮುಗಿಸುತ್ತದೆ. |
| $ | `int` | ಯಾವ ಬಳಕೆದಾರರ ನೆಟ್‌ವರ್ಕ್‌ಗಳನ್ನು ಮರಳಿ ಪಡೆಯಬೇಕೋ ಆ ಬಳಕೆದಾರರ ID. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688
