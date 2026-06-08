---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

የኔትወርክን የማንቃት ፍተሻ (network activation check) እንዲዘል (short-circuit) ለገንቢዎች የሚያስችል አማራጭ ነው።

ይህንን የሚያስፈልግበት ጊዜ፣ እንደ Bedrock ባሉ composer-based እና በሌሎች ብጁ (custom) ስብስቦች ላይ ሲሰሩ፣ በተለይም በmu-plugins የፕልጊን አጠቃቀም የተለመደ ከሆነ፣ በጣም ጠቃሚ ነው።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ፍተሻውን መዝለል አለብን ወይስ አልፈልግም? በቅድፋት (default) ዋጋው `false` ነው። |

### Since

- 2.0.0
### Source

በ[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ፋይል በ272ኛው መስመር ተገልጿል።

## Returns
ፍተሻውን መዝለል ከፈለጉ `true`፣ ካልሆነ ደግሞ `false` ይመልሳል።
