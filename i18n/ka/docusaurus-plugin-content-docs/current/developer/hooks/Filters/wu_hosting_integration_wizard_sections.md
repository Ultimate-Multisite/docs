---
id: wu_hosting_integration_wizard_sections
title: ფილტრი - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# ფილტრი: wu_hosting_integration_wizard_sections

ფილტრავს ოსტატის სექციებს ჰოსტინგის ინტეგრაციის დაყენებისთვის.

საშუალებას აძლევს დამატებებს, დაამატონ, წაშალონ ან შეცვალონ ოსტატის სექციები.

## პარამეტრები

| Name | Type | Description |
|------|------|-------------|
| $sections | `array` | ოსტატის სექციები. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | ინტეგრაცია, რომლის კონფიგურაციაც მიმდინარეობს. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | ოსტატის გვერდის ეგზემპლარი. |

### დანერგილია

- 2.5.0
### წყარო

განსაზღვრულია [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196)-ში, 196-ე ხაზზე
