---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Kinokontrol nito kung ipapatupad ba ang pag-verify gamit ang user agent.

Kapag itinalaga sa `false`, papayagan nito ang mga token na gumana sa iba't ibang browser o device. Nababawasan nito ang seguridad ngunit napapataas naman ang pagiging madaling gamitin (usability).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Kung ipapatupad ba ang pagtutugma ng user agent. |

### Since

- 2.0.0
### Source

Nakatakda sa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) sa linya 410
