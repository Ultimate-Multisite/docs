---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Actie: wu_page_added

Laat pluginontwikkelaars extra dingen uitvoeren wanneer pagina's worden geregistreerd.

In tegenstelling tot de wu_page_load, die alleen wordt uitgevoerd wanneer een specifieke pagina wordt bekeken, wordt deze hook tijdens registratie uitgevoerd voor elke adminpagina die wordt toegevoegd met Ultimate Multisite code.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | De ID van deze pagina. |
| $page_hook | `string` | De hooknaam van deze pagina. |

### Since

- 2.0.0

### Source

Gedefinieerd in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
