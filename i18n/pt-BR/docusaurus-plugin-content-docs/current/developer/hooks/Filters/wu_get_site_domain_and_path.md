---
id: wu_get_site_domain_and_path
title: Filtro - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtro: wu_get_site_domain_and_path

Permite que os desenvolvedores manipulem os pares de domínio/caminho.

Isso pode ser útil para várias coisas, como implementar algum tipo de solução de staging, servidores diferentes, etc.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $d | `object` | O objeto atual contendo as chaves de domínio e caminho. |
| $path_or_subdomain | `string` | O caminho/subdomínio original passado para a função. |

### Desde

- 2.0.0

### Fonte

Definido em [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) na linha 235

## Retorna
Um objeto contendo as chaves de domínio e caminho.
