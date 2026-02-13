---
id: wu_hosting_integration_wizard_sections
title: Filtre - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filtre: wu_hosting_integration_wizard_sections

Filtre les sections du wizard pour la configuration de l'intégration d'hébergement.

Permet aux modules complémentaires d'ajouter, supprimer ou modifier les sections du wizard.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $sections | `array` | Sections du wizard. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | L'intégration en cours de configuration. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | L'instance de la page du wizard. |

### Depuis

- 2.5.0
### Source

Défini dans [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) à la ligne 196
