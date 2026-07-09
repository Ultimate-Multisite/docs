---
id: wu_page_added
title: Aktioun - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aktioun: wu_page_added

Erlaabt plugin-Entwéckler, zousätzlech Saachen auszeféieren, wann Säite registréiert ginn.

Am Géigesaz zu wu_page_load, dat nëmme leeft, wann eng spezifesch Säit gekuckt gëtt, leeft dësen Hook bei der Registréierung fir all Admin-Säit, déi mat Ultimate Multisite Code derbäigesat gëtt.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $page_id | `string` | D'ID vun dëser Säit. |
| $page_hook | `string` | Den Hook-Numm vun dëser Säit. |

### Zënter

- 2.0.0
### Quell

Definéiert an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) op der Linn 228
