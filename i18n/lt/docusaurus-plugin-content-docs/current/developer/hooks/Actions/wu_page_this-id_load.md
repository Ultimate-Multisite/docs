---
id: wu_page_this-id_load
title: 'Veiksmas - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Leisti plugin kūrėjams pridėti papildomų hooks į mūsų puslapius.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $id | `string` | Šio puslapio ID. |
| $page_hook | `string` | Šio puslapio page hook. |
| $admin_page | `self` | Puslapio egzempliorius. |

### Nuo {#since}

- 1.8.2
- 2.0.4: Pridėtas trečias parametras: puslapio egzempliorius.
### Šaltinis {#source}

Apibrėžta [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) 332 eilutėje
