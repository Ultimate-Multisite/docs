---
id: get_site_url_for_previewer
title: Suodatin - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Suodatin: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Salli lisäosakehittäjien suodattaa esikatselussa käytettävä URL

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $domain | `string` | Oletusarvoinen verkkotunnus, jota käytetään juuri nyt; hyödyllinen muokkauksissa |
| $domain_options | `array` | Luettelo kaikista verkkotunnusvaihtoehdoista, jotka on syötetty kohdassa Ultimate Multisite Asetukset -&gt; Verkkoasetukset -&gt; Verkkotunnusvaihtoehdot |

### Alkaen {#since}

- 1.7.2
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) rivillä 812


## Palauttaa {#returns}
Uusi käytettävä verkkotunnus
