---
id: wu_get_site_domain_and_path
title: Filtre - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Permet aux développeurs de manipuler les paires domaine/chemin.

Cela peut être utile pour plusieurs choses, comme la mise en place d'une solution de mise en scène, de serveurs différents, etc.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | L'objet actuel contenant les clés domaine et chemin. |
| $path_or_subdomain | `string` | Le chemin/sous-domaine original passé à la fonction. |

### Since {#since}

- 2.0.0

### Source {#source}

Défini dans [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) à la ligne 235

## Returns {#returns}
Un objet contenant les clés domaine et chemin.
