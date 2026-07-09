---
id: wu_hosting_integration_wizard_sections
title: Филтер - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Филтер: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Филтрира одељке чаробњака за подешавање интеграције хостинга.

Омогућава додацима да додају, уклоне или измене одељке чаробњака.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $sections | `array` | Одељци чаробњака. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Интеграција која се конфигурише. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Инстанца странице чаробњака. |

### Од верзије {#since}

- 2.5.0
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) у реду 196
