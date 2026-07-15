---
id: wu_enforce_password_rules
title: Kichujio - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Inadhibiti kama sheria za ziada za nenosiri zitafuatwa.

Wakati inakuwa `true`, inafuatisha mahitaji ya urefu wa chini na aina za herufi. Inawashirikisha kiotomatiki kwa mipangilio ya "Super Strong" au wakati kipengele cha Nenosiri Imara cha Defender Pro kiko hai.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Kama sheria za ziada zinapaswa kufuatwa. |
| $strength_setting | `string` | Thamani ya mipangilio ya msimamizi (admin). |
| $defender_active | `bool` | Kama Nenosiri Imara la Defender Pro limefunguliwa (active). |

### Since {#since}

- 2.4.0
### Source {#source}

Imefafanuliwa katika [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) kwenye mstari wa 531
