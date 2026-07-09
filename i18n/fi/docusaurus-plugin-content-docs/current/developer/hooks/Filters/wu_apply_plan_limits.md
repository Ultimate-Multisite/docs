---
id: wu_apply_plan_limits
title: Suodatin - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Suodatin: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Salli plugin-kehittäjien ohittaa rajoitukset.

Voit käyttää tätä suodatinta mielivaltaisen koodin ajamiseen ennen kuin mikään rajoituksista käynnistetään. Jos suodattimesi palauttaa minkä tahansa truthy-arvon, prosessi jatkuu; jos se palauttaa minkä tahansa falsy-arvon, koodi palaa eikä mikään alla olevista hookeista suoriteta.

### Alkaen {#since}

- 1.7.0
### Lähde {#source}

- Määritelty tiedostossa [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) rivillä 52
- Määritelty tiedostossa [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) rivillä 98
## Palauttaa {#returns}
