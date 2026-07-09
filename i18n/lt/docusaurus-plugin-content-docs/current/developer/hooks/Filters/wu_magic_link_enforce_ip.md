---
id: wu_magic_link_enforce_ip
title: Filtras - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtras: wu_magic_link_enforce_ip

Filtruoti, ar taikyti IP adreso patikrinimą.

Nustatykite į false, kad tokenai veiktų iš skirtingų tinklų. Tai sumažina saugumą, bet padidina naudojimo patogumą (pvz., mobiliųjų įrenginių naudotojams keičiant tinklus).

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $enforce | `bool` | Ar taikyti IP adreso atitikimą. |

### Nuo

- 2.0.0
### Šaltinis

Apibrėžta [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) 422 eilutėje
