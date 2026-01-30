---
id: wu_get_site_domain_and_path
title: "Filter - wu_get_site_domain_and_path"
sidebar_label: "wu_get_site_domain_and_path"
---

# Filter: wu_get_site_domain_and_path

Allow developers to manipulate the domain/path pairs.

This can be useful for a number of things, such as implementing some sort of staging solution, different servers, etc.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | The current object containing a domain and path keys. |
| $path_or_subdomain | `string` | The original path/subdomain passed to the function. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns
An object containing a domain and path keys.
