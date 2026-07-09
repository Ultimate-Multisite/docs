---
id: wu_use_domain_mapping
title: Filtru - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtru: wu_use_domain_mapping {#filter-wuusedomainmapping}

Iddetermina jekk għandhiex tintuża mappatura

Tipikament, tkun trid tippermetti li jintużaw biss mappaturi attivi. Madankollu, jekk trid tuża loġika aktar avvanzata, jew tippermetti wkoll li domains mhux attivi jiġu mmappjati, sempliċement iffiltra hawn.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $is_active | `bool` | Il-mappatura għandha titqies bħala attiva? |
| $mapping | `\Domain` | Mappatura li qed nispezzjonaw |
| $domain | `string` |  |

### Sors {#source}

Iddefinit f’[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) fil-linja 391
