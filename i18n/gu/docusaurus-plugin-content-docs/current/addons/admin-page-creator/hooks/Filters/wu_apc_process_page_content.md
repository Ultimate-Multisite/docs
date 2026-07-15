---
id: wu_apc_process_page_content
title: ફિલ્ટર - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

ડેવલપર્સને અંતિમ કન્ટેન્ટમાં ફેરફાર કરવાની મંજૂરી આપે છે.

## પેરામીટર્સ (Parameters) {#parameters}

| Name | Type | વર્ણન (Description) |
|------|------|-------------|
| $content | `string` | રિપ્લેસમેન્ટ્સ (replacements) પછીનું કન્ટેન્ટ. |
| $content_before_processing | `string` | રિપ્લેસમેન્ટ્સ પહેલાનું કન્ટેન્ટ. |
| $to_replace | `array` | પ્લેસહોલ્ડર્સ (placeholders) ધરાવતું એરે. |
| $placeholder_count | `int` | મળેલા પ્લેસહોલ્ડર્સની સંખ્યા. |

### થી {#since}

- 1.4.0
### સ્ત્રોત (Source) {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) માં લાઇન 46 પર વ્યાખ્યાયિત છે.

## પરત કરે છે (Returns) {#returns}
ફેરફાર કર્યા પછીનું કન્ટેન્ટ.
