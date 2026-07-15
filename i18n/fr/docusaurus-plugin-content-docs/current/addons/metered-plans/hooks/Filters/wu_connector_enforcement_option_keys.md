---
id: wu_connector_enforcement_option_keys
title: Filtre - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filtre : wu_connector_enforcement_option_keys

Permet de filtrer la liste des clés d'options des fournisseurs d'IA appliquées depuis le site principal.

Ajoutez des clés d'options pour les plugins de fournisseurs d'IA personnalisés ou tiers afin que leurs paramètres soient également hérités du site principal sur les sous-sites.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Noms des clés d'options à appliquer (inclut déjà les clés de connecteur découvertes dynamiquement et EXTRA_PROVIDER_OPTIONS). |

### Depuis {#since}

- 1.2.0
### Source {#source}

Défini dans [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) à la ligne 206
