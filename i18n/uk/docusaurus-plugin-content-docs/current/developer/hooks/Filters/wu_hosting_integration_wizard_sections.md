---
id: wu_hosting_integration_wizard_sections
title: Filter - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections

Фільтрує секції майстра для налаштування інтеграції хостингу.

Дозволяє аддонам додавати, видаляти або змінювати секції майстра.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $sections | `array` | Секції майстра. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Інтеграція, яку налаштовують. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Екземпляр сторінки майстра. |

### З версії {#since}

- 2.5.0
### Джерело {#source}

Визначено в [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) на рядку 196
