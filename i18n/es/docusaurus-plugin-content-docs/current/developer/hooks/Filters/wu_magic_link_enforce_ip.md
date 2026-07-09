---
id: wu_magic_link_enforce_ip
title: Filtro - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtro: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filtra si se debe aplicar la verificación de dirección IP.

Establece en false para permitir que los tokens funcionen desde diferentes redes. Esto reduce la seguridad, pero aumenta la facilidad de uso (por ejemplo, para usuarios móviles que cambian de red).

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Desde {#since}

- 2.0.0
### Fuente {#source}

Definido en [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) en la línea 422
