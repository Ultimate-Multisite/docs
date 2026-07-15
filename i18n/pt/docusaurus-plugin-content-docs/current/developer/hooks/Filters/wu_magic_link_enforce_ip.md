---
id: wu_magic_link_enforce_ip
title: Filtro - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtro: wu_magic_link_enforce_ip

Filtra se deve impor a verificação do endereço IP.

Defina como false para permitir que os tokens funcionem a partir de redes diferentes. Isto reduz a segurança, mas aumenta a usabilidade (por exemplo, para utilizadores móveis que mudam de rede).

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $enforce | `bool` | Se deve impor a correspondência do endereço IP. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) na linha 422
