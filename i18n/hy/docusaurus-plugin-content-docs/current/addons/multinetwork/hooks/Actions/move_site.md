---
id: move_site
title: Գործողություն - տեղափոխել կայքը
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Գործողություն՝ move_site

Գործարկվում է այն բանից հետո, երբ կայքը տեղափոխվել է նոր ցանց։

## Պարամետրեր {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | Տեղափոխված կայքի ID-ն։ |
| $old_network_id | `int` | Կայքի սկզբնական ցանցի ID-ն։ |
| $new_network_id | `int` | Այն ցանցի ID-ն, ուր կայքը տեղափոխվել է։ |

### Սկսած {#since}

- 1.3.0
### Աղբյուր {#source}

Սահմանված է [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587)-ում՝ 1587-րդ տողում
