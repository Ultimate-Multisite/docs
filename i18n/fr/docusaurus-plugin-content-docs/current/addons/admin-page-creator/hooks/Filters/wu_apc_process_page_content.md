---
id: wu_apc_process_page_content
title: Could you please provide the Markdown/MDX content that needs to be translated?
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtre : wu_apc_process_page_content

Permet aux développeurs de modifier le contenu final

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $content | `string` | Contenu après remplacements. |
| $content_before_processing | `string` | Contenu avant remplacements. |
| $to_replace | `array` | Tableau contenant les espaces réservés. |
| $placeholder_count | `int` | Nombre d'espaces réservés trouvés. |

### Depuis

- 1.4.0

### Source

Défini dans [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) à la ligne 46

## Retourne

Contenu après modification.
