---
id: wu_page_this-id_before_render
title: 'Akcija - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render

Omogućava plugin developerima da dodaju dodatni sadržaj prije nego što odštampamo stranicu.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $page_id | `string` | ID ove stranice. |
| $page | `object` | Objekt stranice. |

### Od {#since}

- 1.8.2
### Izvor {#source}

Definisano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) na liniji 398
