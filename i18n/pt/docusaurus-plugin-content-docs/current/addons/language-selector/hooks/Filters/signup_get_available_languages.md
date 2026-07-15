---
id: signup_get_available_languages
title: Filtro - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtro: signup_get_available_languages

Filtra a lista de idiomas disponíveis para registos de site no front-end.

Passar um array vazio para este hook irá desativar a apresentação da definição no formulário de registo, e o idioma padrão será utilizado ao criar o site. Idiomas ainda não instalados serão removidos.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $available_languages | `array` | Idiomas disponíveis. |

### Desde {#since}

- 4.4.0
### Fonte {#source}

Definido em [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) na linha 117
