---
id: wu_domain_has_correct_dns
title: Filtras - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtras: wu_domain_has_correct_dns

Leidžia įskiepių kūrėjams pridėti naujų patikrų, kad būtų galima apibrėžti rezultatus.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $result | `bool` | dabartinis rezultatas. |
| $domain | `self` | Dabartinis domeno egzempliorius. |
| $domains_and_ips | `array` | Domenų ir IP adresų, rastų atliekant DNS paiešką, sąrašas. |

### Nuo

- 2.0.4
### Šaltinis

Apibrėžta [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) 455 eilutėje


## Grąžina
Ar DNS sukonfigūruotas teisingai, ar ne.
