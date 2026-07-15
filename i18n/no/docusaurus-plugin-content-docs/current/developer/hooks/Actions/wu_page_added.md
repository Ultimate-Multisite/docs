---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Lar plugin-utviklere kjøre ekstra kode når sider blir registrert.

I motsetning til `wu_page_load`, som bare kjører når en spesifikk side vises, kjører denne hooken ved registrering for hver admin-side som legges til ved hjelp av Ultimate Multisite-koden.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string` | ID-en til denne siden. |
| $page_hook | `string` | Hook-navnet til denne siden. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) på linje 228
