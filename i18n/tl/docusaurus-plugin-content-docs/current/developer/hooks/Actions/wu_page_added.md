---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aksyon: wu_page_added {#action-wupageadded}

Pinapayagan ang mga plugin developer na magpatakbo ng karagdagang mga bagay kapag nirerehistro ang mga pahina.

Hindi tulad ng wu_page_load, na tumatakbo lamang kapag tinitingnan ang isang partikular na pahina, tumatakbo ang hook na ito sa pagpaparehistro para sa bawat admin page na idinaragdag gamit ang Ultimate Multisite code.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $page_id | `string` | Ang ID ng pahinang ito. |
| $page_hook | `string` | Ang hook name ng pahinang ito. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) sa linya 228
