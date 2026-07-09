---
id: wu_page_added
title: Akcia - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Akcia: wu_page_added

Umožňuje vývojárom doplnkov spúšťať dodatočné veci pri registrácii stránok.

Na rozdiel od wu_page_load, ktorý sa spustí iba vtedy, keď sa zobrazuje konkrétna stránka, tento hook sa spúšťa pri registrácii pre každú stránku administrácie pridávanú pomocou kódu Ultimate Multisite.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $page_id | `string` | ID tejto stránky. |
| $page_hook | `string` | Názov hooku tejto stránky. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) na riadku 228
