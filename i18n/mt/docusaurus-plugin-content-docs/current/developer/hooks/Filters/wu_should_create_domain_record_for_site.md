---
id: wu_should_create_domain_record_for_site
title: Filtru - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtru: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Jiffiltra jekk Ultimate Multisite għandux joħloq rekord tad-domain għal sit maħluq ġdid.

Uża dan il-filtru biex trażżan jew tiddifferixxi l-ħolqien awtomatiku ta’ rekord tad-domain għal siti li jużaw domain bażi kondiviż tal-formola taċ-checkout, host intern, jew domain li integrazzjoni oħra se timmaniġġja separatament.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $create | `bool` | Jekk ir-rekord tad-domain għandux jinħoloq. |
| $site | `WP_Site` | L-oġġett tas-sit maħluq ġdid. |

### Minn {#since}

- 2.13.0

### Sors {#source}

Iddefinit f’`inc/functions/domain.php`.


## Jirritorna {#returns}

Boolean li jindika jekk għandux jinħoloq ir-rekord tad-domain.
