---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter, ob die IP-Adressüberprüfung erzwungen werden soll.

Setzen Sie es auf false, um Tokens von verschiedenen Netzwerken aus funktionieren zu lassen. Dies reduziert die Sicherheit, erhöht jedoch die Benutzerfreundlichkeit (z. B. für mobile Nutzer, die Netzwerke wechseln).

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $enforce | `bool` | Ob die IP-Adressabgleichung erzwungen werden soll. |

### Seit

- 2.0.0

### Quelle

Definiert in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) in Zeile 422
