---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtrira URL za preusmjeravanje nakon postavljanja domena kao primarnog.

Omogućava programerima da prilagode gdje će korisnici biti preusmjereni nakon uspješnog postavljanja domena kao primarnog. Podrazumevano, preusmjerava na trenutni URL na glavnom sajtu, ili na admin URL sajt koji se mijenja.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Podrazumevani URL za preusmjeravanje. Ili je trenutni URL (ako je glavni sajt) ili admin URL trenutnog sajta. |
| $current_site | `int` | ID sajta čiji se domen postavlja kao primarni. |
| $domain | `\Domain` | Objekt domena koji je postavljen kao primarni. |
| $old_primary_domains | `array` | Niz ID-jeva domena koji su ranije bili primarni. |

### Od

- 2.0.0
### Izvor

Definisano u [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) na liniji 639


## Vraća
Filtrirani URL za preusmjeravanje.
