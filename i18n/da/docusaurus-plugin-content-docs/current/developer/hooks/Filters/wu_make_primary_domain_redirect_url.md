---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtrerer redirect-URL’en efter at have gjort et domæne primært.

Giver udviklere mulighed for at tilpasse, hvor brugere redirectes hen efter succesfuldt at have indstillet et domæne som primært. Som standard redirectes der til den aktuelle URL på hovedsitet eller til admin-URL’en for det site, der ændres.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $redirect_url | `string` | Standard redirect-URL’en. Enten den aktuelle URL (hvis hovedsite) eller admin-URL’en for det aktuelle site. |
| $current_site | `int` | ID’et for det site, hvis domæne gøres primært. |
| $domain | `\Domain` | Domæneobjektet, der blev gjort primært. |
| $old_primary_domains | `array` | Array af ID’er for domæner, der tidligere var primære. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) på linje 639


## Returnerer {#returns}
Den filtrerede redirect-URL.
