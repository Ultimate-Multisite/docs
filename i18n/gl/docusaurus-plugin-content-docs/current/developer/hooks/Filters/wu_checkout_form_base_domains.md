---
id: wu_checkout_form_base_domains
title: Filtro - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtro: wu_checkout_form_base_domains

Filtra os dominios base compartidos do formulario de finalización da compra que non deberían converterse en rexistros de dominios mapeados.

Usa este filtro cando unha integración fornece dominios base adicionais para os campos **URL do sitio** do formulario de finalización da compra. Os dominios devoltos por este filtro trátanse como hosts de rexistro compartidos en lugar de dominios personalizados por sitio.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $domains | `array` | Dominios base compartidos recollidos da configuración do formulario de finalización da compra. |

### Desde {#since}

- 2.13.0

### Fonte {#source}

Definido en `inc/functions/domain.php`.


## Devolve {#returns}

Array de dominios base normalizados do formulario de finalización da compra.
