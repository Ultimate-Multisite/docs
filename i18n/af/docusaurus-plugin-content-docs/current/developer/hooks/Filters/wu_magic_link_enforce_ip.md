---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter wat bepaal of IP-adresverifikasie afgedwing moet word.

Stel dit op `false` om tokens toe te laat om van verskillende netwerke te werk. Dit verminder die sekuriteit, maar verhoog die gebruiksgemak (byvoorbeeld vir mobiele gebruikers wat netwerke skakel).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Of IP-adresooreenstemming afgedwing moet word. |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
