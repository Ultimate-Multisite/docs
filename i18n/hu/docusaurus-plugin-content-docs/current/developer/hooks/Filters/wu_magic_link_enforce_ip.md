---
id: wu_magic_link_enforce_ip
title: Szűrő - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Szűrő, amely meghatározza, kötelező-e az IP címszintű hitelesítés.

Ha `false`-ra állítja, akkor a token-ok más hálózatokból is működhetnek. Ez csökkenti a biztonságot, de növeli a használhatóságot (például mobil felhasználóknak, akik hálózatot váltanak).

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Az, hogy az IP címszintű eşleştirés kötelező-e. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Megértve a [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) fájlban, 422-sorban.
