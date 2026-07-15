---
id: wu_post_count_statuses
title: ફિલ્ટર - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

પ્લગઇન ડેવલપર્સને એ બદલવાની મંજૂરી આપે છે કે કયા post status ની ગણતરી થવી જોઈએ. સામાન્ય રીતે (By default), published અને private posts ની ગણતરી થાય છે.

## પરિમાણો (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | post status ની યાદી |
| $post_type | `string` | post type નો સ્લગ |

### ક્યારથી (Since) {#since}

- 1.9.1
### સ્ત્રોત (Source) {#source}

[inc/limitations/class-limit-post-types.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) માં લાઇન 119 પર વ્યાખ્યાયિત છે.

## પરત કરે છે (Returns) {#returns}
post status ની નવી એરે (array).
