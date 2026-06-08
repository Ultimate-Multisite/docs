---
title: Dziennik zmian Ultimate AI Connector dla Kompatybilnych Punktów Końcowych
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector for Compatible Endpoints — Historia zmian

## Wersja 2.0.0 — Wydana 2026-04-24

* Nowość: Wsparcie dla wielu dostawców — skonfiguruj wiele endpointów AI i kieruj żądania z automatycznym przełączaniem (fallback) między dostawcami.
* Poprawka: Integracja SDK dla wielu dostawców z poprawnymi ID dostawców, adresami rejestracji i zakresem filtrowania HTTP dla każdego dostawcy.
* Poprawka: Nowa karta dostawcy automatycznie się rozszerza po dodaniu; unieważnianie pamięci podręcznej skryptu podczas aktualizacji pluginu.
* Poprawka: Dynamiczna przestrzeń nazw klasy dostawcy dla `eval()` oraz automatyczne rozszerzanie się dla nowo dodanych dostawców.
* Poprawka: Używa stabilnych komponentów Card/CardBody/CardHeader/CardDivider (już nie eksperymentalnych) dla kompatybilności z WordPress 6.9+.
* Poprawka: Zastąpiono nieokreślony DragHandle unikalnym ikoną chwytu (unicode grip icon) do przeciągania dostawców w celu zmiany ich kolejności.
* Poprawka: Usunięto blokujące żądanie HTTP, które wywoływało się przy każdym ładowaniu strony.
* Ulepszenie: Przepływy pracy GitHub Actions zaktualizowano do Node.js 24.

## Wersja 1.0.0 — Wydanie początkowe
