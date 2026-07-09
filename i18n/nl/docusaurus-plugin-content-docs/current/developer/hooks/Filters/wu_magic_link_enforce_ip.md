---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter of IP-adresverificatie moet worden afgedwongen.

Stel in op false om tokens vanaf verschillende netwerken te laten werken. Dit vermindert de beveiliging maar verhoogt de gebruiksvriendelijkheid (bijv. voor mobiele gebruikers die van netwerk wisselen).

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Sinds

- 2.0.0
### Bron

Gedefinieerd in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) op regel 422
