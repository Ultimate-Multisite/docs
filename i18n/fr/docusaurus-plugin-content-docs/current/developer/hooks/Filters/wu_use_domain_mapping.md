---
id: wu_use_domain_mapping
title: Filtre - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtre: wu_use_domain_mapping

Déterminer si une correspondance doit être utilisée

En général, vous ne souhaitez autoriser que les correspondances actives. Cependant, si vous souhaitez utiliser une logique plus avancée ou autoriser les domaines non actifs à être mappés également, filtrez simplement ici.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $is_active | `bool` | La correspondance doit-elle être considérée comme active? |
| $mapping | `\Domain` | Correspondance que nous inspectons |
| $domain | `string` |  |

### Source

Défini dans [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) à la ligne 391
