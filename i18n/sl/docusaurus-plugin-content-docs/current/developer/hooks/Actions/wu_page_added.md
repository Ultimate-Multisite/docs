---
id: wu_page_added
title: Dejanje - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Dejanje: wu_page_added {#action-wupageadded}

Omogoča razvijalcem pluginov, da zaženejo dodatne stvari, ko so strani registrirane.

Za razliko od wu_page_load, ki se zažene samo, ko se ogleduje določena stran, se ta hook zažene ob registraciji za vsako skrbniško stran, dodano z uporabo kode Ultimate Multisite.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string` | ID te strani. |
| $page_hook | `string` | Ime hooka te strani. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) v vrstici 228
