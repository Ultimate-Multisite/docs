---
id: get_blogs_of_user
title: "Filter - get_blogs_of_user"
sidebar_label: "get_blogs_of_user"
---

# Filter: get_blogs_of_user

Replicates the original WP Filter here, for good measure.

Filters the list of sites a user belongs to.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | An array of site objects belonging to the user. |
| $user_id | `int` | User ID. |
| $all | `bool` | Whether the returned sites array should contain all sites, including those marked 'deleted', 'archived', or 'spam'. Default false. |

### Since

- 2.0.11
### Source

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851

