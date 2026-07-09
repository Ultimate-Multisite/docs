---
id: signup_get_available_languages
title: Filtro - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtro: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtra a lista de idiomas disponíveis para cadastros de sites no front-end.

Passar um array vazio para este gancho desativará a saída da configuração no formulário de cadastro, e o idioma padrão será usado ao criar o site. Idiomas que ainda não estiverem instalados serão removidos.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $available_languages | `array` | Idiomas disponíveis. |

### Desde {#since}

- 4.4.0
### Fonte {#source}

Definido em [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) na linha 117
