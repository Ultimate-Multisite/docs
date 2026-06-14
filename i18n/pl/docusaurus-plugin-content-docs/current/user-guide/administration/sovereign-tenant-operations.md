---
title: Operacje Najemcy Suwerennego
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacje dla Najbardziej Suwerennych Najemców (Sovereign Tenant Operations)

Ultimate Multisite w wersji 1.2.0 wprowadza narzędzia operacyjne dla suwerennych najemców: podstrony działające z własną bazą danych, korzeniem systemu plików i kontekstem routingu, jednocześnie pozostając widoczne dla administratora sieci.

Używaj tej strony przy zarządzaniu izolowanymi stronami klientów, przekazywaniu zdalnych stron lub migracji przenoszących standardową podstronę do infrastruktury suwerennej.

## Co się zmienia dla administratorów

- **Bezstanowy autologin najemcy** — Administratorzy sieci mogą odwiedzać suwerenne najemcy bez polegania na długotrwałym stanie sesji współdzielonej. Token SSO jest ograniczony do konkretnego celu, zablokowany względem źródła (origin-pinned), chroniony przed odtwarzaniem i ma krótki czas ważności.
- **Routowanie świadome suwerenności** — Stare izolowane sieci i najemcy suwerenni rozwiązują się przez tę samą ścieżkę routingu strony, co zmniejsza różnice w procesie uruchamiania (bootstrap) między starymi a nowymi instalacjami izolowanymi.
- **Zweryfikowany stan migracji** — Weryfikacja migracji sprawdza dostęp użytkownika, uprawnienia pisania do bazy danych, status opróżniania kolejki oraz brak tabel legacy przed uznaniem najemcy za gotowego.
- **Bezpieczniejsze usuwanie (teardown)** — Usuwanie suwerenne teraz czysto usuwa dane uwierzytelniające najemcy, aby usunięte najemcy nie zostawiały po sobie starych dostępów do bazy danych.

## Odwiedzanie suwerennego najemcy

1. Otwórz **Network Admin > Ultimate Multisite > Sites**.
2. Wybierz suwerenne konto najemcy.
3. Użyj opcji **Visit (SSO)**, gdy jest dostępna, zamiast kopiowania haseł lub tworzenia tymczasowych kont administratora.

Przepływ odwiedzania generuje krótki token logowania dla tego najemcy i zapisuje zdarzenie SSO w ścieżce audytu najemcy. Jeśli przycisk zawiedzie, sprawdź, czy dom najemcy rozwiązuje się zgodnie z oczekiwaniem instalacji oraz czy najemca może dotrzeć do punktu końcowego SSO po stronie sieciowej.

## Lista kontrolna operacji dla stron zdalnych (Remote-site operations checklist)

Zanim zmienisz suwerenne lub zdalne konto najemcy, upewnij się, że:

Domena najemcy wskazuje na host, który posiada system plików najemcy.
Host bazy danych najemcy odpowiada skonfigowanemu powiązaniu hosta dla tej instalacji.
Polecenia weryfikacji migracji przechodzą pomyślnie dla najemcy.
Kolejki migracji asynchroniczne są opróżniane przed dokonaniem zmian DNS lub własności.
Użytkownik administracyjny najemcy został utworzony podczas migracji i może się zalogować przez SSO.

## Usuwanie najemców suwerennych

Usuwanie najemcy suwerennego jest destrukcyjne. Najpierw potwierdź status kopii zapasowej i eksportu, a następnie usuń go z ekranu zarządzania stroną. Przepływ wycofania (teardown) w wersji 1.2.0 usuwa poświadczenia bazy danych najemcy jako część czyszczenia, ale administratorzy powinni nadal sprawdzić, czy użytkownicy i foldery bazodanowe na poziomie hosta zostały usunięte, gdy używają zewnętrznych paneli hostingowych.

:::warning
Nie usuwaj najemcy suwerennego, dopóki weryfikacja migracji nie jest w toku lub podczas kolejkowania zadań push asynchronicznych. Poczekaj, aż weryfikacja się zakończy, aby wycofanie (teardown) nie usunę poświadczeń potrzebnych dla oczekujących zadań.
:::
