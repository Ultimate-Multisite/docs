---
id: wu_make_primary_domain_redirect_url
title: Filtre - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtre l'URL de redirection après avoir défini un domaine comme principal.

Permet aux développeurs de personnaliser l'endroit où les utilisateurs sont redirigés après avoir correctement défini un domaine comme principal. Par défaut, la redirection se fait vers l'URL actuelle du site principal, ou vers l'URL d'administration du site modifié.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | L'URL de redirection par défaut. Soit l'URL actuelle (si site principal) soit l'URL d'administration du site actuel. |
| $current_site | `int` | L'ID du site dont le domaine est rendu principal. |
| $domain | `\Domain` | L'objet domaine qui a été rendu principal. |
| $old_primary_domains | `array` | Tableau des ID des domaines qui étaient précédemment principaux. |

### Since

- 2.0.0

### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639

## Returns
L'URL de redirection filtrée.
