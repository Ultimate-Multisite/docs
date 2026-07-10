---
id: wu_domain_has_correct_dns
title: Filtro - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtro: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Permite que desenvolvedores de extensões adicionem novas verificações para definir os resultados.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $result | `bool` | o resultado atual. |
| $domain | `self` | A instância de domínio atual. |
| $domains_and_ips | `array` | A lista de domínios e IPs encontrados na pesquisa DNS. |

### Desde {#since}

- 2.0.4
### Fonte {#source}

Definido em [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) na linha 455


## Retorna {#returns}
Se o DNS está configurado corretamente ou não.
