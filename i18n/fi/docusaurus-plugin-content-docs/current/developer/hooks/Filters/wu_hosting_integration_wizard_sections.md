---
id: wu_hosting_integration_wizard_sections
title: Suodatin - wu_hosting_integration_wizard_sections
sidebar_label: wu_hosting_integration_wizard_sections
_i18n_hash: 0fb1bc9682dd6f3004d8ad954e3e9926
---
# Suodatin: wu_hosting_integration_wizard_sections {#filter-wuhostingintegrationwizardsections}

Suodattaa ohjatun toiminnon osiot hosting-integraation määritystä varten.

Antaa lisäosien lisätä, poistaa tai muokata ohjatun toiminnon osioita.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $sections | `array` | Ohjatun toiminnon osiot. |
| $integration | `\WP_Ultimo\Integrations\Host_Providers\Base_Host_Provider\|\WP_Ultimo\Integrations\Integration` | Määritettävä integraatio. |
| $page | `\Hosting_Integration_Wizard_Admin_Page` | Ohjatun toiminnon sivun instanssi. |

### Alkaen {#since}

- 2.5.0
### Lähde {#source}

Määritelty tiedostossa [`inc/admin-pages/class-hosting-integration-wizard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-hosting-integration-wizard-admin-page.php#L196) rivillä 196
