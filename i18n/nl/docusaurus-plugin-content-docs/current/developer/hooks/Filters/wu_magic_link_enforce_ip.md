---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter of IP-adresverificatie afdwingen.

Stel in op false om tokens te laten werken vanaf verschillende netwerken. Dit vermindert de beveiliging maar verhoogt de bruikbaarheid (bijv. voor mobiele gebruikers die van netwerk wisselen).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Of IP-adresmatching moet worden afgedwongen. |

### Since

- 2.0.0

### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
