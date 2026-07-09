---
id: wu_page_load
title: Veiksmas - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Veiksmas: wu_page_load {#action-wupageload}

Leidžia plugin kūrėjams pridėti papildomų hooks prie mūsų puslapių.

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

Apibrėžta [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) 318 eilutėje
