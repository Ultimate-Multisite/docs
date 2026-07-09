---
id: wu_should_create_domain_record_for_site
title: Filtre - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtre : wu_should_create_domain_record_for_site

Filtre indiquant si Ultimate Multisite doit créer un enregistrement de domaine pour un site nouvellement créé.

Utilisez ce filtre pour supprimer ou différer la création automatique d’un enregistrement de domaine pour les sites qui utilisent un domaine de base de formulaire de checkout partagé, un hôte interne ou un domaine qu’une autre intégration gérera séparément.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $create | `bool` | Indique si l’enregistrement de domaine doit être créé. |
| $site | `WP_Site` | L’objet du site nouvellement créé. |

### Depuis

- 2.13.0

### Source

Défini dans `inc/functions/domain.php`.


## Retours

Booléen indiquant s’il faut créer l’enregistrement de domaine.
