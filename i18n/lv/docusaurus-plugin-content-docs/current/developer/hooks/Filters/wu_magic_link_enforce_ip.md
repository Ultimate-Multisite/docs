---
id: wu_magic_link_enforce_ip
title: Filtrs - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtrs: wu_magic_link_enforce_ip

Filtrē, vai piemērot IP adreses verifikāciju.

Iestatiet uz false, lai ļautu tokeniem darboties no dažādiem tīkliem. Tas samazina drošību, bet palielina lietojamību (piemēram, mobilajiem lietotājiem, kuri pārslēdzas starp tīkliem).

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $enforce | `bool` | Vai piemērot IP adreses atbilstības pārbaudi. |

### Kopš

- 2.0.0
### Avots

Definēts [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) 422. rindā
