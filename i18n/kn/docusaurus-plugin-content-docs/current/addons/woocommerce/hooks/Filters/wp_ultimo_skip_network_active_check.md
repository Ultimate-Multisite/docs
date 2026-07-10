---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Developers-ಗಳಿಗೆ network activation check ಅನ್ನು bypass ಮಾಡಲು ಇದು ಅನುಮತಿಸುತ್ತದೆ.

composer-ಆಧಾರಿತ ಮತ್ತು Bedrock ನಂತಹ ಇತರ ಕಸ್ಟಮ್ ಸೆಟಪ್‌ಗಳನ್ನು ಬಳಸುವಾಗ ಇದು ಉಪಯುಕ್ತವಾಗಿದೆ, ಅಲ್ಲಿ mu-plugins ಅನ್ನು ಬಳಸುವುದೇ ಸಾಮಾನ್ಯ ನಿಯಮವಾಗಿದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ನಾವು ಚೆಕ್ ಅನ್ನು ಬಿಟ್ಟು ಹೋಗಬೇಕೇ ಅಥವಾ ಬೇಡವೇ, ಇದು default ಆಗಿ false ಆಗಿರುತ್ತದೆ. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272

## Returns {#returns}
ನೀವು ಚೆಕ್ ಅನ್ನು ಬಿಟ್ಟು ಹೋಗಲು ಬಯಸಿದರೆ `true`, ಇಲ್ಲದಿದ್ದರೆ `false` ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.
