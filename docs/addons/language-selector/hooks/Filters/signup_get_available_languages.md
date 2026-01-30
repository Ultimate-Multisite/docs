---
id: signup_get_available_languages
title: "Filter - signup_get_available_languages"
sidebar_label: "signup_get_available_languages"
---

# Filter: signup_get_available_languages

Filters the list of available languages for front-end site signups.

Passing an empty array to this hook will disable output of the setting on the signup form, and the default language will be used when creating the site. Languages not already installed will be stripped.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Available languages. |

### Since

- 4.4.0
### Source

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) at line 125

