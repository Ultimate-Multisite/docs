---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Permet aux développeurs de plugins d'ajouter des hooks supplémentaires à nos pages.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $id | `string` | L'ID de cette page. |
| $page_hook | `string` | Le hook de page de cette page. |
| $admin_page | `self` | TThe instance de page. |

### Depuis

- 1.8.2
- 2.0.4 : Ajout du troisième paramètre : l'instance de page.

### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) à la ligne 318
