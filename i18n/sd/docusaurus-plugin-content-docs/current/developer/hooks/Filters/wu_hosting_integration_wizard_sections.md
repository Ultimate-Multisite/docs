---
id: wu_hosting_integration_wizard_sections
title: فلٽر - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Filter: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

hosting integration سيٽ اپ لاءِ wizard حصن کي فلٽر ڪري ٿو.

addons کي wizard حصا شامل ڪرڻ، هٽائڻ، يا تبديل ڪرڻ جي اجازت ڏئي ٿو.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $sections | `array` | Wizard حصا. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | ترتيب ڏني ويندڙ integration. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | wizard صفحي جو instance. |

### کان وٺي {#since}

- 2.5.0
### ذريعو {#source}

[`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) ۾ line 196 تي بيان ٿيل.
