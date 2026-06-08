---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

டெவலப்பர்கள் நெட்வொர்க் செயல்படுத்தல் சோதனையைத் தவிர்க்க (short-circuit) செய்ய இது அனுமதிக்கிறது.

composer-அடிப்படையிலான மற்றும் Bedrock போன்ற தனிப்பயன் அமைப்புகளைப் பயன்படுத்தும் போது இது மிகவும் பயனுள்ளதாக இருக்கும். அத்தகைய அமைப்புகளில், mu-plugins-ஐப் பயன்படுத்துவது இயல்பான நடைமுறையாக இருக்கும்.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | நாம் சோதனையைத் தவிர்க்க வேண்டுமா இல்லையா என்பதை இது குறிக்கும். இயல்பாகவே (default) இது `false` என்று இருக்கும். |

### Since

- 2.0.0
### Source

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272


## Returns
நீங்கள் சோதனையைத் தவிர்க்க விரும்பினால் `true`, இல்லையெனில் `false` என்று இது திருப்பி அனுப்பும்.
