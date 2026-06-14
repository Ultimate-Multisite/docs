---
title: Sovereign Migracijos Procesas
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Przepływ migracji suwerennej

Ultimate Multisite: Multi-Tenancy 1.2.0 wprowadza bramy weryfikacji migracji dla przenoszenia standardowego subsite'u do infrastruktury najsuwerennego najemcy (sovereign tenant).

## Zanim zaczniesz

Upewnij się, że masz:

- Aktualne kopie zapasowe źródłowego site.
- Włączone dodatki Multi-Tenancy.
- Gotową bazę danych, system plików i domenę docelowego najemcy (tenant).
- Powiązanie hosta bazy danych pasujące do środowiska docelowego.
- Dostęp do poleceń WP-CLI dla sieci.

## Zalecany przepływ pracy

1. Przygotuj bazę danych i system plików docelowego najemcy.
2. Zarejestruj lub zaktualizuj ustawienia izolacji najemcy (tenant isolation settings).
3. Uruchom migrację najemcy.
4. Przydziel lub zweryfikuj użytkowników najemcy.
5. Opróżnij zadania migracji asynchronicznych (async migration jobs).
6. Uruchom weryfikację migracji suwerennej.
7. Odwiedź najemcę za pomocą SSO.
8. Zmień DNS lub routing dopiero po pomyślnym przejściu weryfikacji.

## Bramy weryfikacji

Przepływ weryfikacji sprawdza migrację z kilku stron:

- Schemat najemcy istnieje i może być zapisany przez piszącego bazę danych najemcy (tenant database writer).
- Konfigurowany host bazy danych ma poprawne uprawnienia.
- Użytkownicy najemcy są obecni i zgadzają się z oczekiwaną liczbą użytkowników instalowanych suwerennie.
- Kolejka zadań asynchronicznych (async push queue) może zostać pomyślnie opróżniona.
- Stare ścieżki danych po stronie sieciowe nie są już wymagane dla najemcy suwerennego.

Traktuj niepowodzenia weryfikacji jako blokady przed uruchomieniem. Napraw zgłoszony problem z bazą danych, użytkownikiem, kolejką lub routingiem, a następnie ponownie uruchom weryfikację, zanim wystawisz najemcę na klientów.

## Pierwsza wizyta produkcyjna

Po pomyślnym przejściu weryfikacji użyj opcji **Visit (SSO)** z ekranu zarządzania stroną dla pierwszej wizyty administratora. Potwierdza to routing najemcy, obsługę tokenów SSO, przypisanie pochodzenia (origin pinning) oraz tworzenie użytkowników po stronie najemcy w jednym kontrolowanym kroku.
