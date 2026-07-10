---
id: wu_page_added
title: Acțiune - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Permite dezvoltatorilor de plugin să ruleze accțiuni suplimentare în momentul înregistrării paginilor.

Spre deosebire de `wu_page_load`, care rulează doar când o pagină specifică este vizibilă, acest hook rulează la înregistrare pentru fiecare pagină de admin adăugată folosind codul Ultimate Multisite.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $page_id | `string` | ID-ul acestei pagini. |
| $page_hook | `string` | Numele hook-ului acestei pagini. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) la linia 228
