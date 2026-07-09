---
id: wu_page_load
title: Aksyon - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Aksyon: wu_page_load

Payagan ang mga developer ng plugin na magdagdag ng karagdagang hooks sa aming mga pahina.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $id | `string` | Ang ID ng pahinang ito. |
| $page_hook | `string` | Ang page hook ng pahinang ito. |
| $admin_page | `self` | Ang instance ng pahina. |

### Mula Noong

- 1.8.2
- 2.0.4: Idinagdag ang ikatlong parameter: ang instance ng pahina.
### Pinagmulan

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) sa linya 318
