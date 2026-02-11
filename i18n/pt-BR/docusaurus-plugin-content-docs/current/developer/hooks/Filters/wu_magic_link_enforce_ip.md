---
id: wu_magic_link_enforce_ip
title: Filtro - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
Filter whether to enforce IP address verification.

Set to false to allow tokens to work from different networks. This reduces security but increases usability (e.g., for mobile users switching networks).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
