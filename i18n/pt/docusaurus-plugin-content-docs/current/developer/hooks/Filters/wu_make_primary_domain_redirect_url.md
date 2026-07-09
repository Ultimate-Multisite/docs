---
id: wu_make_primary_domain_redirect_url
title: Filtro - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtro: wu_make_primary_domain_redirect_url

Filtra a URL de redirecionamento após tornar um domínio primário.

Permite que os programadores personalizem para onde os utilizadores são redirecionados depois de definir com sucesso um domínio como primário. Por predefinição, redireciona para a URL atual no site principal ou para a URL de administração do site a ser modificado.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $redirect_url | `string` | A URL de redirecionamento predefinida. Ou a URL atual (se for o site principal) ou a URL de administração do site atual. |
| $current_site | `int` | O ID do site cujo domínio está a ser tornado primário. |
| $domain | `\Domain` | O objeto de domínio que foi tornado primário. |
| $old_primary_domains | `array` | Array de IDs de domínios que eram anteriormente primários. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) na linha 639


## Retorna
A URL de redirecionamento filtrada.
