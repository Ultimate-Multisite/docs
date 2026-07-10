---
id: wu_bypass_unset_current_user
title: Filtrowanie - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtr: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Pozwala deweloperom ominąć kod usuwający bieżącego użytkownika.

Zwrócenie wartości innej niż `null` spowoduje pominięcie (bypass) usuwania bieżącego zalogowanego użytkownika. Może się to przydać w niektórych scenariuszach, na przykład przy pracy z podstronami, które są używane jako panele administracyjne.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` oznacza przejście dalej, wszystko inne oznacza pominięcie tego kroku. |
| $current_user | `false\|\WP_User` | Obiekt bieżącego użytkownika. |

### Od {#since}

- 2.0.11
### Źródło {#source}

Zdefiniowane w [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) w linii 221

## Zwraca {#returns}
