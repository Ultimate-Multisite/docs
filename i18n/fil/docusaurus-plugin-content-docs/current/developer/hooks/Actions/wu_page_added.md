---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Pinapayagan nito ang mga developer ng plugin na magpatakbo ng karagdagang mga bagay kapag nagre-register ng mga page.

Hindi tulad ng `wu_page_load`, na tumatakbo lang kapag may nakikitang specific na page, ang hook na ito ay tumatakbo sa oras ng pagre-register para sa bawat admin page na idinadagdag gamit ang Ultimate Multisite code.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | Ang ID ng page na ito. |
| $page_hook | `string` | Ang pangalan ng hook ng page na ito. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
