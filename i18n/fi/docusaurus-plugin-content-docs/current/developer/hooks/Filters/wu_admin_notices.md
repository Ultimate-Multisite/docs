---
id: wu_admin_notices
title: Suodatin - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Suodatin: wu_admin_notices

Salli kehittäjien suodattaa Ultimate Multisite:n lisäämiä hallintailmoituksia.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $notices | `array` | Luettelo kyseisen paneelin ilmoituksista. |
| $all_notices | `array` | Luettelo lisätyistä ilmoituksista paneeleittain eroteltuna. |
| $panel | `string` | Paneeli, josta ilmoitukset haetaan. |
| $filter | `string` | Onko ohitettavat ilmoitukset suodatettu pois. |
| $dismissed_messages | `array` | Luettelo ohitettujen ilmoitusten avaimista. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) rivillä 121


## Palauttaa {#returns}
