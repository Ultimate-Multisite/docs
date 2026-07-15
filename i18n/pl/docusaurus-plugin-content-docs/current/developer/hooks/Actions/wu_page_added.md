---
id: wu_page_added
title: Akcja - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Umożliwia deweloperom pluginów uruchomienie dodatkowych akcji, gdy strony są rejestrowane.

W przeciwieństwie do `wu_page_load`, który działa tylko wtedy, gdy użytkownik przegląda konkretną stronę, ten hook uruchamia się podczas rejestracji każdej strony administracyjnej dodanej za pomocą kodu Ultimate Multisite.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | Identyfikator tej strony. |
| $page_hook | `string` | Nazwa hooka tej strony. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) w linii 228
