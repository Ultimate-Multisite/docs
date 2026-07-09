---
id: wu_page_added
title: Tegevus - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Toiming: wu_page_added

Võimaldab lisandmoodulite arendajatel käivitada lisatoiminguid, kui lehed registreeritakse.

Erinevalt wu_page_load-ist, mis käivitub ainult siis, kui konkreetset lehte vaadatakse, käivitub see hook registreerimisel iga admini lehe puhul, mis lisatakse Ultimate Multisite koodi abil.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $page_id | `string` | The ID of this page. |
| $page_hook | `string` | The hook name of this page. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) real 228
