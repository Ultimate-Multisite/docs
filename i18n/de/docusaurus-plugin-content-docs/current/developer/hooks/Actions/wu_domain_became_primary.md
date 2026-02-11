---
id: wu_domain_became_primary
title: Aktion - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Ausgelöst, wenn ein Domain zur primären Domain für eine Website wird.

Diese Aktion wird ausgelöst, wenn das Flag primary_domain einer Domain auf true gesetzt wird, entweder beim Erstellen einer neuen primären Domain oder beim Aktualisieren einer bestehenden Domain, um sie primär zu machen.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Die Domain, die primär wurde. |
| $blog_id | `int` | Die Blog-ID der betroffenen Website. |
| $was_new | `bool` | Ob es sich um eine neu erstellte Domain handelt. |

### Seit

- 2.0.0

### Quelle

Definiert in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) in Zeile 560
