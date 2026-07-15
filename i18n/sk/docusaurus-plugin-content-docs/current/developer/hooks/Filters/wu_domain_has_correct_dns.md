---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Umožňuje vývojárom pluginov pridať nové kontroly s cieľom definovať výsledky.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $result | `bool` | aktuálny výsledok. |
| $domain | `self` | Aktuálna inštancia domény. |
| $domains_and_ips | `array` | Zoznam domén a IP adries nájdených pri vyhľadávaní DNS. |

### Od verzie {#since}

- 2.0.4
### Zdroj {#source}

Definované v [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) na riadku 455


## Vracia {#returns}
Či je DNS správne nastavené alebo nie.
