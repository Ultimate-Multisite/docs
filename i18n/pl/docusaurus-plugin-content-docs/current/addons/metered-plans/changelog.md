---
title: Zmiany w planach z limitem zużycia
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Dziennik zmian dla planów metrycznych

Wersja 1.1.0 - Wydana 2026-05-05
- Nowość: Rozliczenia za tokeny AI dla podstron multisite — śledź i rozlicz zużycie tokenów AI na różnych stronach klienta z możliwością konfigurowalnych stawek za token.
- Nowość: Mechanizm egzekwowania konektorów został przebudowany z dynamicznym wykrywaniem limitów i zapisem przez (write-through), co zapewnia dokładność w czasie rzeczywistym we wszystkich konektorach.
- Poprawka: Aktualizacje tabel bazy danych są teraz poprawnie zsynchronizowane z definicjami schematu BerlinDB, zapobiegając awariom aktualizacji przy nowych instalacjach.
- Poprawka: Callbacki aktualizacji bazy danych zmieniono na prawidłowy format, co rozwiązuje problem cichych awarii aktualizacji.
- Poprawka: W polu wprowadzania nadpłaty za zużycie AI (AI Usage Overage Markup) zaakceptowano teraz wartości ułamkowe.
- Poprawka: Naprawiono błędy krytyczne oraz problemy podwójnej inicjalizacji podczas ładowania pluginu.
- Ulepszenie: Dodano skrypt `check-env` npm, dzięki czemu środowiska deweloperskie samokonfigurują się przy pierwszym uruchomieniu.

### 1.0.3
* Zaktualizowano do Plugin Update Checker v5
* Dodano nowoczesne nagłówki pluginów WordPress
* Ulepszona kompatybilność z najnowszymi wersjami WordPress
* Poprawiona wydajność śledzenia zużycia

### 1.0.2
* Poprawki błędów i ulepszenia wydajności
* Ulepszone raportowanie zużycia

### 1.0.0
* Wydanie początkowe
* Podstawowa funkcjonalność rozliczeń metrycznych
* Śledzenie zużycia i obliczanie nadpłaty
* Automatyczne generowanie faktur
