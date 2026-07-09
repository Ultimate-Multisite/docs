---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aksyon: wu_page_added {#action-wupageadded}

Pèmèt devlopè plugin yo kouri bagay anplis lè paj yo anrejistre.

Kontrèman ak wu_page_load, ki sèlman kouri lè yon paj espesifik ap parèt, hook sa a kouri pandan anrejistreman pou chak paj admin y ap ajoute lè yo sèvi ak kòd Ultimate Multisite.

## Paramèt {#parameters}

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $page_id | `string` | ID paj sa a. |
| $page_hook | `string` | Non hook paj sa a. |

### Depi {#since}

- 2.0.0
### Sous {#source}

Defini nan [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) nan liy 228
