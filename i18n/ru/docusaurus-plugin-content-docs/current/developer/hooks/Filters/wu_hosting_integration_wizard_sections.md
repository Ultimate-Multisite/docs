---
id: wu_hosting_integration_wizard_sections
title: Фильтр - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Фильтр: wu_hosting_integration_wizard_sections

Фильтрует разделы мастера для настройки интеграции хостинга.

Позволяет дополнениям добавлять, удалять или изменять разделы мастера.

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | Разделы мастера. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Интеграция, которую настраивают. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Экземпляр страницы мастера. |

### С версии

- 2.5.0

### Источник

Определено в [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) на строке 196
