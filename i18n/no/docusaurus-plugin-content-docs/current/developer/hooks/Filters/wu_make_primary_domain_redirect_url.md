---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Filtrerer omdirigerings-URL-en etter at et domene blir satt som primært.

Lar utviklere tilpasse hvor brukere blir omdirigert etter at de har satt et domene som primært. Som standard omdirigeres det til den nåværende URL-en på hovednettstedet, eller til admin-URL-en til nettstedet som blir endret.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $redirect_url | `string` | Standard omdirigerings-URL. Enten den nåværende URL-en (hvis hovednettsted) eller admin-URL-en til det aktuelle nettstedet. |
| $current_site | `int` | ID-en til nettstedet hvis domene blir satt som primært. |
| $domain | `\Domain` | Domeneobjektet som ble satt som primært. |
| $old_primary_domains | `array` | Array med ID-er til domener som tidligere var primære. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) på linje 639


## Returnerer {#returns}
Den filtrerte omdirigerings-URL-en.
