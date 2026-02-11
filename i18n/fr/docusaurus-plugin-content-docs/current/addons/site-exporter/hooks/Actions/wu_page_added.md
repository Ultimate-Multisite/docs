---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Permet aux développeurs de plugins d'exécuter des actions supplémentaires lors de l'enregistrement des pages.

Contrairement à wu_page_load, qui ne s'exécute que lorsqu'une page spécifique est affichée, ce hook s'exécute lors de l'enregistrement de chaque page d'administration ajoutée via le code WP Ultimo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID de cette page. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Le hook généré pour cette page. |

### Since

- 2.0.0

### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) à la ligne 203
