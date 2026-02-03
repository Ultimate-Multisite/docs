---
id: wu_make_primary_domain_redirect_url
title: Filtro - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
## Filtro: wu_make_primary_domain_redirect_url

Filtra la URL de redirección después de hacer un dominio principal.

Permite a los desarrolladores personalizar a dónde se redirigen los usuarios después de establecer con éxito un dominio como principal. Por defecto, redirige a la URL actual del sitio principal o a la URL de administración del sitio que se está modificando.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $redirect_url | `string` | La URL de redirección predeterminada. Puede ser la URL actual (si es el sitio principal) o la URL de administración del sitio actual. |
| $current_site | `int` | El ID del sitio cuyo dominio se está haciendo principal. |
| $domain | `\Domain` | El objeto de dominio que se hizo principal. |
| $old_primary_domains | `array` | Array de IDs de dominios que eran primarios anteriormente. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) en la línea 639

## Devuelve

La URL de redirección filtrada.
