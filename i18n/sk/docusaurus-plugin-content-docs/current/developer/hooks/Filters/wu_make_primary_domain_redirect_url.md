---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtruje URL presmerovania po nastavení domény ako primárnej.

Umožňuje vývojárom prispôsobiť, kam budú používatelia presmerovaní po úspešnom nastavení domény ako primárnej. Predvolene presmeruje na aktuálnu URL na hlavnej lokalite alebo na admin URL upravovanej lokality.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $redirect_url | `string` | Predvolená URL presmerovania. Buď aktuálna URL (ak ide o hlavnú lokalitu), alebo admin URL aktuálnej lokality. |
| $current_site | `int` | ID lokality, ktorej doména sa nastavuje ako primárna. |
| $domain | `\Domain` | Objekt domény, ktorý bol nastavený ako primárny. |
| $old_primary_domains | `array` | Pole ID domén, ktoré boli predtým primárne. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) na riadku 639


## Návratová hodnota {#returns}
Filtrovaná URL presmerovania.
