---
id: wu_get_site_domain_and_path
title: Filtrs - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtrs: wu_get_site_domain_and_path

Ļauj izstrādātājiem manipulēt ar domēna/ceļa pāriem.

Tas var būt noderīgi vairākām lietām, piemēram, kāda veida staging risinājuma ieviešanai, dažādiem serveriem utt.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $d | `object` | Pašreizējais objekts, kas satur domēna un ceļa atslēgas. |
| $path_or_subdomain | `string` | Sākotnējais ceļš/apakšdomēns, kas nodots funkcijai. |

### Kopš

- 2.0.0
### Avots

Definēts [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) 235. rindā


## Atgriež
Objektu, kas satur domēna un ceļa atslēgas.
