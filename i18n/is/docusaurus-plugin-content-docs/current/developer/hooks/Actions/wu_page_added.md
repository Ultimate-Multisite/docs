---
id: wu_page_added
title: Aðgerð - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aðgerð: wu_page_added {#action-wupageadded}

Leyfir plugin-hönnuðum að keyra viðbótarhluti þegar síður eru skráðar.

Ólíkt wu_page_load, sem keyrir aðeins þegar tiltekin síða er skoðuð, keyrir þessi hook við skráningu fyrir hverja admin-síðu sem er bætt við með Ultimate Multisite-kóða.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $page_id | `string` | ID þessarar síðu. |
| $page_hook | `string` | Hook-heiti þessarar síðu. |

### Síðan {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) á línu 228
