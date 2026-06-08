---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Pinapayagan nito ang mga developer ng plugin na magdagdag ng mga *hook* sa ating mga pahina.

## Mga Parameter

| Name | Type | Paglalarawan |
|------|------|-------------|
| $id | `string` | Ang ID ng pahinang ito. |
| $page_hook | `string` | Ang *page hook* ng pahinang ito. |
| $admin_page | `self` | Ang *instance* ng pahina. |

### Mula pa noong

- 1.8.2
- 2.0.4: Nagdagdag ng ikatlong parameter: ang *page instance*.
### Pinagmulan

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) sa linya 332
