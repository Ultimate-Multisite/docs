---
id: wu_make_primary_domain_redirect_url
title: Filtar - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtrira URL preusmjeravanja nakon postavljanja domene kao primarne.

Omogućuje developerima prilagodbu mjesta na koje se korisnici preusmjeravaju nakon uspješnog postavljanja domene kao primarne. Prema zadanim postavkama preusmjerava na trenutačni URL na glavnom siteu ili na admin URL sitea koji se mijenja.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $redirect_url | `string` | Zadani URL preusmjeravanja. Ili trenutačni URL (ako je glavni site) ili admin URL trenutačnog sitea. |
| $current_site | `int` | ID sitea čija se domena postavlja kao primarna. |
| $domain | `\Domain` | Objekt domene koji je postavljen kao primaran. |
| $old_primary_domains | `array` | Niz ID-jeva domena koje su prethodno bile primarne. |

### Od

- 2.0.0
### Izvor

Definirano u [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) u retku 639


## Vraća
Filtrirani URL preusmjeravanja.
