---
id: wu_page_added
title: Akcija - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Omogućava programerima pluginova da pokrenu dodatne stvari kada se stranice registruju.

Za razliku od `wu_page_load`-a, koji se pokreće samo kada se gleda određena stranica, ovaj hook se pokreće pri registraciji za svaku admin stranicu dodanu pomoću Ultimate Multisite koda.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID ove stranice. |
| $page_hook | `string` | Ime hook-a ove stranice. |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano je u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) na liniji 228
