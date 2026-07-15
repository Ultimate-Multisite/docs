---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filtert, ob die Überprüfung der IP-Adresse erzwungen wird.

Auf false setzen, damit tokens aus verschiedenen Netzwerken funktionieren. Dies verringert die Sicherheit, erhöht aber die Benutzerfreundlichkeit (z. B. für mobile Benutzer, die das Netzwerk wechseln).

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Seit {#since}

- 2.0.0
### Quelle {#source}

Definiert in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) in Zeile 422
