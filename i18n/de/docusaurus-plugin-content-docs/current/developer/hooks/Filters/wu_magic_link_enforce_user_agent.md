---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Filter, ob die User-Agent-Überprüfung erzwungen werden soll.

Setzen Sie es auf false, um Tokens über verschiedene Browser/Devices hinweg funktionieren zu lassen. Dies reduziert die Sicherheit, erhöht jedoch die Benutzerfreundlichkeit.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Ob die Übereinstimmung des User-Agents erzwungen werden soll. |

### Since

- 2.0.0

### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
