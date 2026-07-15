---
id: wu_should_create_domain_record_for_site
title: Süzgüç - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Täze döredilen site üçin Ultimate Multisite-niň domen ýazgysyny döretmelidigini filterleýär.

Paýlaşylýan checkout-form esasy domenini, içerki hosty ýa-da başga bir integrasiýanyň aýratyn dolandyrjak domenini ulanýan site-ler üçin awtomatik domen-ýazgy döretmegi basyp ýatyrmak ýa-da soňa goýmak üçin bu filter-i ulanyň.

## Parametrler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Domen ýazgysynyň döredilmelidigini görkezýär. |
| $site | `WP_Site` | Täze döredilen site obýekti. |

### Şondan bäri {#since}

- 2.13.0

### Çeşme {#source}

`inc/functions/domain.php` içinde kesgitlenen.


## Gaýtarýar {#returns}

Domen ýazgysyny döretmelidigini görkezýän Boolean.
