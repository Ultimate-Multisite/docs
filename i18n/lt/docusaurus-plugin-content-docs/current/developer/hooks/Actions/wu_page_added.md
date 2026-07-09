---
id: wu_page_added
title: Veiksmas - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Veiksmas: wu_page_added {#action-wupageadded}

Leidžia plugin kūrėjams vykdyti papildomus veiksmus, kai puslapiai užregistruojami.

Skirtingai nei wu_page_load, kuris vykdomas tik tada, kai peržiūrimas konkretus puslapis, šis hook vykdomas registracijos metu kiekvienam administratoriaus puslapiui, pridedamam naudojant Ultimate Multisite kodą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $page_id | `string` | Šio puslapio ID. |
| $page_hook | `string` | Šio puslapio hook pavadinimas. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) 228 eilutėje
