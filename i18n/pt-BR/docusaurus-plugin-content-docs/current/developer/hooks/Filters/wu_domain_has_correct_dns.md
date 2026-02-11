---
id: wu_domain_has_correct_dns
title: Filtro - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtro: wu_domain_has_correct_dns

Permitir que desenvolvedores de plugins adicionem novas verificações para definir os resultados.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $result | `bool` | o resultado atual. |
| $domain | `self` | A instância de domínio atual. |
| $domains_and_ips | `array` | A lista de domínios e IPs encontrados na consulta DNS. |

### Desde

- 2.0.4
### Fonte

Definido em [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) na linha 455

## Retorna
Se o DNS está configurado corretamente ou não.
