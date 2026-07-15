---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

ડેવલપર્સને નેટવર્ક એક્ટિવેશન ચેકને ટૂંકમાં (short-circuit) કરવાની મંજૂરી આપે છે.

આ ત્યારે ઉપયોગી છે જ્યારે તમે composer-based અને અન્ય કસ્ટમ સેટઅપ્સનો ઉપયોગ કરી રહ્યા હોવ, જેમ કે Bedrock, જ્યાં mu-plugins તરીકે પ્લગઇન્સનો ઉપયોગ સામાન્ય હોય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | જો આપણે ચેક છોડવો છે કે નહીં, ડિફોલ્ટ તરીકે false હોય છે. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272


## Returns {#returns}
જો તમે ચેક છોડવા માંગતા હો, તો `true`, અન્યથા `false`.
