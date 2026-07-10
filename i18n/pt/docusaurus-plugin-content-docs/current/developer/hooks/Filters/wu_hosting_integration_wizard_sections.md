---
id: wu_hosting_integration_wizard_sections
title: Filtro - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filtro: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Filtra as secções do assistente para a configuração da integração de alojamento.

Permite que addons adicionem, removam ou modifiquem secções do assistente.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $sections | `array` | Secções do assistente. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | A integração que está a ser configurada. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | A instância da página do assistente. |

### Desde {#since}

- 2.5.0
### Fonte {#source}

Definido em [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) na linha 196
