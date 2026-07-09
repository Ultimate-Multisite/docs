---
id: wu_sso_url
title: Filtr - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtr: wu_sso_url

Filtruje wygenerowane URL-e SSO, zanim zostaną zwrócone dla działań klienta między domenami.

Użyj tego filtra, gdy integracja musi dodać zaufany kontekst do linku SSO suwerennego tenant lub zastąpić URL brokera, zachowując walidację tokena Ultimate Multisite.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $sso_url | `string` | Wygenerowany URL SSO. |
| $user | `WP_User` | Użytkownik, który zostanie uwierzytelniony przez wizytę SSO. |
| $site_id | `int` | ID docelowej witryny dla wizyty. |
| $redirect_to | `string` | Docelowy URL po pomyślnej walidacji SSO. |

### Od wersji

- 2.13.0

### Źródło

Zdefiniowano w `inc/sso/class-sso.php`.


## Zwraca

Przefiltrowany URL SSO.
