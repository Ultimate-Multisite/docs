---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtrira preusmeritveni URL po nastavitvi domene kot primarne.

Razvijalcem omogoča prilagoditev, kam so uporabniki preusmerjeni po uspešni nastavitvi domene kot primarne. Privzeto preusmeri na trenutni URL na glavnem spletnem mestu ali na admin URL spletnega mesta, ki se spreminja.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $redirect_url | `string` | Privzeti preusmeritveni URL. Bodisi trenutni URL (če je glavno spletno mesto) bodisi admin URL trenutnega spletnega mesta. |
| $current_site | `int` | ID spletnega mesta, katerega domena se nastavlja kot primarna. |
| $domain | `\Domain` | Objekt domene, ki je bil nastavljen kot primaren. |
| $old_primary_domains | `array` | Polje ID-jev domen, ki so bile prej primarne. |

### Od različice

- 2.0.0
### Vir

Določeno v [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) v vrstici 639


## Vrne
Filtrirani preusmeritveni URL.
