---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Inaruhusu watengenezaji kupita (short-circuit) uhakiki wa kuwasha mtandao.

Hii ni muhimu sana unapotumia mipangilio inayotegemea Composer na mipangilio mingine maalum, kama vile Bedrock, kwa mfano, ambapo kutumia plugins kama mu-plugins ndio kawaida.

## Vigezo (Parameters) {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kama tunapaswa kupita uhakiki au la. Inaanza kwa 'bandia' (false). |

### Tangu (Since) {#since}

- 2.0.0
### Chanzo (Source) {#source}

Imefafanuliwa katika [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) kwenye mstari wa 272


## Inarejesha (Returns) {#returns}
`true` ikiwa unataka kupita uhakiki, na `false` vinginevyo.
