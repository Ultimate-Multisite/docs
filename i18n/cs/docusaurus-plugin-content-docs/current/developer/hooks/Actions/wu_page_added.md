---
id: wu_page_added
title: Akce - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Umožňuje vývojářům pluginů spouštět další akce, když jsou stránky registrovány.

Na rozdíl od `wu_page_load`, který se spouští pouze, když je zobrazována konkrétní stránka, tento hook se spouští při registraci pro každou administrační stránku, která je přidána pomocí kódu Ultimate Multisite.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $page_id | `string` | ID této stránky. |
| $page_hook | `string` | Název hooku této stránky. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) na řádku 228
