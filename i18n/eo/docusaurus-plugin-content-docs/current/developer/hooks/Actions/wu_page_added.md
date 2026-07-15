---
id: wu_page_added
title: Ago - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Ago: wu_page_added

Permesas al plugin-programistoj ruli pliajn aferojn kiam paĝoj estas registritaj.

Male al wu_page_load, kiu ruliĝas nur kiam specifa paĝo estas vidata, ĉi tiu hook ruliĝas ĉe registrado por ĉiu administra paĝo aldonata per Ultimate Multisite-kodo.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $page_id | `string` | La ID de ĉi tiu paĝo. |
| $page_hook | `string` | La hook-nomo de ĉi tiu paĝo. |

### Ekde {#since}

- 2.0.0
### Fonto {#source}

Difinita en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ĉe linio 228
