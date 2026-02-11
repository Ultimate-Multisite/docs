---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Ermöglicht Entwicklern, die Domain-/Pfadpaare zu manipulieren.

Dies kann für verschiedene Zwecke nützlich sein, z. B. bei der Implementierung einer Art Staging-Lösung, bei unterschiedlichen Servern usw.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Das aktuelle Objekt, das Domain- und Pfadschlüssel enthält. |
| $path_or_subdomain | `string` | Der ursprünglich an die Funktion übergebene Pfad/Subdomain. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns
Ein Objekt, das Domain- und Pfadschlüssel enthält.
