---
id: wu_domain_has_correct_dns
title: Filtro - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtro: wu_domain_has_correct_dns

Permite aos desenvolvedores de plugins engadir novas comprobacións para definir os resultados.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $result | `bool` | o resultado actual. |
| $domain | `self` | A instancia de dominio actual. |
| $domains_and_ips | `array` | A lista de dominios e IP atopados na busca DNS. |

### Desde

- 2.0.4
### Fonte

Definido en [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) na liña 455


## Devolve
Se o DNS está configurado correctamente ou non.
