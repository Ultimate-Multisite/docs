---
title: Przepływ pracy migracji suwerennej
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Przepływ migracji suwerennej {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 wprowadza bramy weryfikacyjne dla przenoszenia standardowego subsite'u do infrastruktury najsuwerennego najemcy (sovereign tenant).

## Przed rozpoczęciem {#before-you-start}

Upewnij się, że masz:

- Aktualne kopie zapasowe źródłowego site.
- Włączone dodatki Multi-Tenancy.
- Gotową bazę danych, system plików i domenę docelowego najemcy.
- Powiązanie hosta bazy danych pasujące do środowiska docelowego.
- Dostęp do poleceń WP-CLI dla sieci.

## Zalecany przepływ pracy {#recommended-workflow}

1. Przygotuj bazę danych i system plików docelowego najemcy.
2. Zarejestruj lub zaktualizuj ustawienia izolacji najemcy.
3. Uruchom migrację najemcy.
4. Przydziel lub zweryfikuj użytkowników najemcy.
5. Opróżnij zadania migracyjne asynchroniczne.
6. Uruchom weryfikację migracji suwerennej.
7. Odwiedź najemcę za pomocą SSO.
8. Zmień DNS lub routowanie dopiero po pomyślnym przejściu weryfikacji.

## Bramy weryfikacyjne {#verification-gates}

Przepływ weryfikacyjny sprawdza migrację z kilku stron:

- Czy schemat najemcy istnieje i może być zapisany przez piszącego bazę danych najemcy.
- Czy skonfigurowany host bazy danych ma poprawne uprawnienia.
- Czy użytkownicy najemcy są obecni i zgadzają się z oczekiwaną liczbą użytkowników instalowanych suwerennie.
- Czy kolejka push asynchronicznych zadań może zostać pomyślnie opróżniona.
- Czy nie są już wymagane stare ścieżki danych po stronie sieci dla najemcy suwerennego.

Traktuj niepowodzenia weryfikacji jako blokady przed uruchomieniem. Napraw zgłoszony problem z bazą danych, użytkownikiem, kolejką lub routowaniem, a następnie ponownie uruchom weryfikację, zanim wystawisz najemcę na klientów.

## Pierwsza wizyta produkcyjna {#first-production-visit}

Po pomyślnym przejściu weryfikacji użyj opcji **Visit (SSO)** z ekranu zarządzania stroną po raz pierwszy dla administratora. Potwierdza to routowanie najemcy, obsługę tokenów SSO, przypisanie pochodzenia oraz tworzenie użytkowników po stronie najemcy w jednym kontrolowanym kroku.
