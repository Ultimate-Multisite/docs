---
id: wu_magic_link_enforce_user_agent
title: Sía - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Sía: wu_magic_link_enforce_user_agent

Sía hvort eigi að framfylgja sannprófun á user agent.

Stilltu á false til að leyfa tokens að virka í mismunandi vöfrum/tækjum. Þetta dregur úr öryggi en eykur notagildi.

## Færibreytur

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $enforce | `bool` | Hvort eigi að framfylgja samsvörun user agent. |

### Frá og með

- 2.0.0
### Uppruni

Skilgreint í [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) í línu 410
