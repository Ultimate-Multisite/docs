---
id: wu_magic_link_enforce_ip
title: Filtro - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtro: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filtra se deve impor a verificação de endereço IP.

Defina como false para permitir que tokens funcionem a partir de redes diferentes. Isso reduz a segurança, mas aumenta a usabilidade (por exemplo, para usuários móveis alternando entre redes).

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) na linha 422
