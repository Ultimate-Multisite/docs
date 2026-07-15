---
id: wu_page_added
title: Gweithred - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Gweithred: wu_page_added

Caniatáu i ddatblygwyr plugin redeg pethau ychwanegol pan gaiff tudalennau eu cofrestru.

Yn wahanol i wu_page_load, sy’n rhedeg dim ond pan fo tudalen benodol yn cael ei gweld, mae’r hook hwn yn rhedeg wrth gofrestru ar gyfer pob tudalen weinyddu sy’n cael ei hychwanegu gan ddefnyddio cod Ultimate Multisite.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $page_id | `string` | ID y dudalen hon. |
| $page_hook | `string` | Enw hook y dudalen hon. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ar linell 228
