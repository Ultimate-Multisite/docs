---
id: wu_make_primary_domain_redirect_url
title: Filtro - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtro: wu_make_primary_domain_redirect_url

Filtra o URL de redirección despois de facer que un dominio sexa principal.

Permite aos desenvolvedores personalizar a onde se redirixen os usuarios despois de establecer correctamente un dominio como principal. Por defecto, redirixe ao URL actual no sitio principal, ou ao URL de administración do sitio que se está modificando.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $redirect_url | `string` | O URL de redirección predeterminado. Ou ben o URL actual (se é o sitio principal) ou o URL de administración do sitio actual. |
| $current_site | `int` | O ID do sitio cuxo dominio se está a facer principal. |
| $domain | `\Domain` | O obxecto de dominio que se fixo principal. |
| $old_primary_domains | `array` | Array de IDs de dominios que eran principais anteriormente. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) na liña 639


## Devolve {#returns}
O URL de redirección filtrado.
