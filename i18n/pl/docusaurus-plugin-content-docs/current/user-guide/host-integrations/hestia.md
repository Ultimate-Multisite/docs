---
title: Integracja z Panelem Sterowania Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integracja z panelem Hestia

Ten przewodnik wyjaśnia, jak skonfigurować integrację Ultimate Multisite z Hestia, aby mapowane domeny w Twojej sieci były automatycznie dodawane (i usuwane) jako aliasy domen webowych w Hestia.

- Dokumentacja CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Oficjalna dokumentacja REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Jak to działa
- Gdy domena jest mapowana w Ultimate Multisite, integracja wywołuje API Hestia, aby uruchomić:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Gdy mapowanie domeny zostaje usunięte, uruchamiane jest:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcjonalnie dodaje/usuwa alias `www.` w zależności od ustawienia „Automatycznie twórz subdomenę www" w ustawieniach mapowania domen.

## Wymagania wstępne
- Istniejąca domena webowa Hestia, która już wskazuje na Twoją instalację WordPress. Integracja będzie dołączać aliasy do tej domeny bazowej.
- Włączony dostęp do API Hestia. Możesz uwierzytelniać się za pomocą hasła lub hasha/tokena API.

Zapoznaj się z dokumentacją REST API Hestia, aby dowiedzieć się, jak włączyć dostęp do API i poznać szczegóły uwierzytelniania:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguracja (Kreator → Integracje → Hestia)
Podaj następujące wartości:

- `WU_HESTIA_API_URL` (wymagane)
  - Bazowy endpoint API, zazwyczaj `https://twoj-host-hestia:8083/api/`.
- `WU_HESTIA_API_USER` (wymagane)
  - Użytkownik Hestia używany do poleceń API (często `admin`).
- `WU_HESTIA_API_PASSWORD` lub `WU_HESTIA_API_HASH` (co najmniej jedno)
  - Wybierz jedną metodę uwierzytelniania: hasło lub hash/token API.
- `WU_HESTIA_ACCOUNT` (wymagane)
  - Konto (właściciel) domeny webowej w Hestia; to pierwszy argument dla CLI.
- `WU_HESTIA_WEB_DOMAIN` (wymagane)
  - Istniejąca domena webowa Hestia obsługująca Twojego WordPressa (aliasy będą do niej dołączane).
- `WU_HESTIA_RESTART` (opcjonalne; domyślnie `yes`)
  - Czy restartować/przeładowywać usługi po zmianach aliasów.

Możesz pozwolić kreatorowi wstawić te stałe do `wp-config.php` lub zdefiniować je ręcznie.

## Weryfikacja konfiguracji
- W kroku „Testowanie" kreatora wtyczka wywołuje `v-list-web-domains <WU_HESTIA_ACCOUNT> json` przez API. Pomyślna odpowiedź potwierdza połączenie i uwierzytelnienie.
- Po zmapowaniu domeny sprawdź w Hestia: Web > domena bazowa > Aliasy. Powinieneś zobaczyć nowo dodany alias.

## Uwagi i wskazówki
- Upewnij się, że `WU_HESTIA_WEB_DOMAIN` już istnieje i należy do `WU_HESTIA_ACCOUNT`.
- Jeśli wymagany jest SSL, zarządzaj certyfikatami w Hestia. Ta integracja obecnie obsługuje tylko aliasy.
- Wtyczka może również dodawać/usuwać `www.<domena>` w zależności od ustawienia „subdomena www" w mapowaniu domen.

## Przykładowe wywołanie API (cURL)
Poniżej znajduje się przykład koncepcyjny (dostosuj do swojego środowiska). Dokładne parametry znajdziesz w oficjalnej dokumentacji.

```
POST https://twoj-host-hestia:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=TWOJE_HASLO_API  (lub &hash=TWOJ_HASH_API)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=siec.przyklad.com      (WU_HESTIA_WEB_DOMAIN)
&arg3=domena-klienta.com     (alias do dodania)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Aby usunąć alias, użyj `cmd=v-delete-web-domain-alias` z tymi samymi argumentami.

## Rozwiązywanie problemów
- Błąd HTTP z API: sprawdź, czy `WU_HESTIA_API_URL` jest dostępny i zawiera `/api`.
- Błędy uwierzytelniania: potwierdź poprawność `WU_HESTIA_API_USER` oraz `WU_HESTIA_API_PASSWORD` lub `WU_HESTIA_API_HASH`.
- „Brak konta/domeny bazowej" w logach: upewnij się, że `WU_HESTIA_ACCOUNT` i `WU_HESTIA_WEB_DOMAIN` są ustawione i prawidłowe w Hestia.

## Źródła
- REST API Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Dokumentacja CLI Hestia (Aliasy): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
