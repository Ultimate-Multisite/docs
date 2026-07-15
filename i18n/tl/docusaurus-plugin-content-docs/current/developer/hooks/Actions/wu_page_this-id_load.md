---
id: wu_page_this-id_load
title: 'Aksyon - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Pahintulutan ang mga developer ng pandagdag na magdagdag ng karagdagang hooks sa aming mga pahina.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $id | `string` | Ang ID ng pahinang ito. |
| $page_hook | `string` | Ang page hook ng pahinang ito. |
| $admin_page | `self` | Ang instance ng pahina. |

### Simula noong {#since}

- 1.8.2
- 2.0.4: Idinagdag ang ikatlong parameter: ang instance ng pahina.
### Pinagmulan {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) sa linya 332
