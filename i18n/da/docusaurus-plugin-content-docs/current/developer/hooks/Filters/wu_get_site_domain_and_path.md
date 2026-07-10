---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Tillad udviklere at manipulere domæne-/sti-parrene.

Dette kan være nyttigt til en række ting, såsom at implementere en form for staging-løsning, forskellige servere osv.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $d | `object` | Det aktuelle objekt, der indeholder nøglerne domæne og sti. |
| $path_or_subdomain | `string` | Den oprindelige sti/subdomæne, der blev videregivet til funktionen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) på linje 235


## Returnerer {#returns}
Et objekt, der indeholder nøglerne domæne og sti.
