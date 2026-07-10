---
id: wu_domain_has_correct_dns
title: Filtry - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtr: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Pozwala deweloperom pluginów dodawać nowe sprawdzenia, aby określić wynik.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $result | `bool` | Aktualny wynik. |
| $domain | `self` | Aktualna instancja domeny. |
| $domains_and_ips | `array` | Lista domen i adresów IP znalezionych podczas wyszukiwania DNS. |

### Od {#since}

- 2.0.4
### Źródło {#source}

Zdefiniowane w [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) w linii 455


## Zwraca {#returns}
Informację, czy DNS jest poprawnie skonfigurowany, czy nie.
