---
id: wu_checkout_form_base_domains
title: Filtr - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtr: wu_checkout_form_base_domains

Filtruje współdzielone domeny bazowe formularza checkout, które nie powinny stać się rekordami mapowanych domen.

Użyj tego filtra, gdy integracja dostarcza dodatkowe domeny bazowe dla pól **Site URL** formularza checkout. Domeny zwrócone przez ten filtr są traktowane jako współdzielone hosty rejestracji zamiast niestandardowych domen dla poszczególnych witryn.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $domains | `array` | Współdzielone domeny bazowe zebrane z konfiguracji formularza checkout. |

### Od wersji

- 2.13.0

### Źródło

Zdefiniowano w `inc/functions/domain.php`.


## Zwraca

Tablicę znormalizowanych domen bazowych formularza checkout.
