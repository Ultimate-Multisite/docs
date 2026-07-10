---
id: wu_multi_tenancy_init
title: Action - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# Action: wu_multi_tenancy_init {#action-wumultitenancyinit}

Multi-Tenancy add-on ကို အပြည့်အဝ စတင်ဖွဲ့စည်းပြီးနောက် အလုပ်လုပ်သည့် Action ဖြစ်သည်။

## ပါရာမီတာများ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | add-on ၏ အကောင်အထည်ဖော်မှု (instance) ဖြစ်သည်။ phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ သည် WP Ultimo အတွက် စံနှုန်းသတ်မှတ်ထားသော prefix ဖြစ်သည်။ |

### စတင်ချိန် {#since}

- 1.0.0
### ရင်းမြစ် {#source}

[`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) ၏ ၁၂၄ လိုင်းတွင် သတ်မှတ်ထားသည်။
