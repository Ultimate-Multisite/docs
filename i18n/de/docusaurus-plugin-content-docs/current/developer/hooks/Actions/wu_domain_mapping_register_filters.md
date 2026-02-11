---
id: wu_domain_mapping_register_filters
title: Aktion - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Einige Plugins speichern die URL, bevor die Zuordnung aktiv war, oder bauen URLs auf eine andere Weise, die nicht in den oben genannten Filtern enthalten ist.

In solchen Fällen möchten wir zusätzliche Filter hinzufügen. Der zweite übergebene Parameter ist der mangle_url-Callback. Wir empfehlen, diesen Filter nicht direkt zu verwenden. Stattdessen verwenden Sie die Domain_Mapping::apply_mapping_to_url-Methode.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $mangle_url | `callable` | Der mangle-Callable. |
| $domain_mapper | `self` | Dieses Objekt. |

### Seit

- 2.0.0
### Quelle

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
