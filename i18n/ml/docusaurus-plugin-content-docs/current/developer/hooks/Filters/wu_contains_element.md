---
id: wu_contains_element
title: ഫിൽട്ടർ - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

ഡെവലപ്പർമാർക്ക് ആദ്യത്തെ തിരയൽ ഫലങ്ങൾ മാറ്റാൻ ഇത് അനുവദിക്കുന്നു.

ഇത് third-party builders-മാർക്കും മറ്റും ഉപയോഗപ്രദമാണ്.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | എലമെന്റ് കണ്ടന്റിൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ടോ എന്ന് ഇത് പരിശോധിക്കുന്നു. |
| $content | `string` | പരിശോധിക്കപ്പെടുന്ന കണ്ടന്റ്. |
| $element | `self` | നിലവിലെ എലമെന്റ്. |
| $post | `null\|\WP_Post` | പരിശോധിക്കാനുള്ള പോസ്റ്റ്. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) at line 534
