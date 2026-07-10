---
id: wu_checkout_form_base_domains
title: Filtr - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtr: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtruje współdzielone domeny bazowe formularza checkout, które nie powinny stać się rekordami mapowanych domen.

Użyj tego filtra, gdy integracja dostarcza dodatkowe domeny bazowe dla pól **Site URL** formularza checkout. Domeny zwrócone przez ten filtr są traktowane jako współdzielone hosty rejestracji zamiast niestandardowych domen dla poszczególnych witryn.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $domains | `array` | Współdzielone domeny bazowe zebrane z konfiguracji formularza checkout. |

### Od wersji {#since}

- 2.13.0

### Źródło {#source}

Zdefiniowano w `inc/functions/domain.php`.


## Zwraca {#returns}

Tablicę znormalizowanych domen bazowych formularza checkout.
