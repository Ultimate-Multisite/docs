---
id: wu_hosting_integration_wizard_sections
title: Шүүлтүүр - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Хостинг интеграцын тохиргоонд зориулсан шидтэний хэсгүүдийг шүүнэ.

Нэмэлтүүдэд шидтэний хэсгүүдийг нэмэх, устгах эсвэл өөрчлөх боломж олгоно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $sections | `array` | Шидтэний хэсгүүд. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Тохируулж буй интеграц. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Шидтэний хуудасны экземпляр. |

### Хойш {#since}

- 2.5.0
### Эх сурвалж {#source}

[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196)-д 196-р мөрөнд тодорхойлсон.
