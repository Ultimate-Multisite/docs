---
id: wu_page_added
title: Radnja - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Omogućuje razvijateljima pluginova pokretanje dodatnih stvari kada se stranice registriraju.

Za razliku od wu_page_load, koji se pokreće samo kada se određena stranica pregledava, ovaj hook pokreće se pri registraciji za svaku administratorsku stranicu dodanu pomoću koda Ultimate Multisite.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $page_id | `string` | ID ove stranice. |
| $page_hook | `string` | Naziv hooka ove stranice. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) u retku 228
