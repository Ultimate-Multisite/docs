---
id: wu_page_added
title: Aksie - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aksie: wu_page_added {#action-wupageadded}

Dit stel plugin-ontwikkelaars in staat om bykomende aksies uit te voer wanneer bladsye geregistreer word.

Verskillend van die `wu_page_load`, wat slegs loop wanneer 'n spesifieke bladsy gesien word, loop hierdie hook by registrasie vir elke admin-bladsy wat met Ultimate Multisite-kode bygevoeg word.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $page_id | `string` | Die ID van hierdie bladsy. |
| $page_hook | `string` | Die hook-naam van hierdie bladsy. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Bepaald in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) op lyn 228
