---
id: wu_apc_process_page_content
title: "Filter - wu_apc_process_page_content"
sidebar_label: "wu_apc_process_page_content"
---

# Filter: wu_apc_process_page_content

Allow developers to mess with the final content

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Content after replacements. |
| $content_before_processing | `string` | Content pre replecements. |
| $to_replace | `array` | Array containing the placeholders hold. |
| $placeholder_count | `int` | Number of placeholders found. |

### Since

- 1.4.0
### Source

Defined in [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) at line 46


## Returns
Content after modification.
