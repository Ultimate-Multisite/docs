---
id: wu_get_site_domain_and_path
title: Filtras - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtras: wu_get_site_domain_and_path

Leidžia kūrėjams keisti domeno / kelio poras.

Tai gali būti naudinga įvairiems dalykams, pavyzdžiui, įgyvendinant tam tikrą staging sprendimą, naudojant skirtingus serverius ir pan.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $d | `object` | Dabartinis objektas, kuriame yra domeno ir kelio raktai. |
| $path_or_subdomain | `string` | Pirminis kelias / subdomenas, perduotas funkcijai. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) 235 eilutėje


## Grąžina {#returns}
Objektą, kuriame yra domeno ir kelio raktai.
