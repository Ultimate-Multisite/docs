---
id: get_blogs_of_user
title: Filtrilo - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtrilo: get_blogs_of_user

Reproduktas la originalan WP-filtrilon ĉi tie, por bona mezuro.

Filtras la liston de retejoj al kiuj uzanto apartenas.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $sites | `object[]` | Tabelo de retejaj objektoj apartenantaj al la uzanto. |
| $user_id | `int` | Uzanto-ID. |
| $all | `bool` | Ĉu la resendita tabelo de retejoj enhavu ĉiujn retejojn, inkluzive tiujn markitajn kiel 'deleted', 'archived', aŭ 'spam'. Defaŭlte false. |

### Ekde

- 2.0.11
### Fonto

Difinita en [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ĉe linio 851
