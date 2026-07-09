---
id: signup_get_available_languages
title: Filtr - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtr: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtruje listę dostępnych języków podczas rejestracji na stronie front-end.

Przekazanie pustej tablicy do tego hooka wyłączy wyświetlanie ustawienia na formularzu rejestracji, a język domyślny zostanie użyty podczas tworzenia strony. Języki, które nie są już zainstalowane, zostaną usunięte.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $available_languages | `array` | Dostępne języki. |

### Od {#since}

- 4.4.0
### Źródło {#source}

Zdefiniowane w [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) w linii 117
