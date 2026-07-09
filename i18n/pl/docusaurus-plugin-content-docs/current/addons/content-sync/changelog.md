---
title: Zmiany w Content Sync
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Dziennik zmian Content Sync {#content-sync-changelog}

### Wersja 1.1.0 - Wydana 2025-12-31 {#version-110---released-on-2025-12-31}
* Nowość: Obsługa synchronizacji wszystkich typów postów (posty, strony, niestandardowe typy postów)
* Nowość: Filtrowanie typów postów w kroku wyboru treści
* Nowość: Krok wyboru strony źródłowej – synchronizacja ze wszystkich stron, a nie tylko ze strony głównej
* Nowość: Wstępny wybór stron potomnych dla stron szablonowych
* Nowość: Ekstrakcja mediów z `post_content` dla wszystkich typów postów
* Nowość: Synchronizacja taksonomii (kategorie, tagi, niestandardowe taksonomie)
* Zmieniono: Nazwa zmieniona z "Elementor Template Sync" na "Content Sync"
* Zmieniono: Krok "Select Templates" zmieniono na "Select Data"
* Ulepszono: Kod specyficzny dla Elementora działa teraz tylko dla typu postów `elementor_library`

### Wersja 1.0.0 - Wydana 2025-12-19 {#version-100---released-on-2025-12-19}
* Pierwsze wydanie
* Wielokrokowy wizard do wyboru szablonu i strony
* Przetwarzanie wsadowe z informacją o postępie w czasie rzeczywistym
* Pełna synchronizacja mediów z automatycznym ponownym mapowaniem ID
* Integracja ustawień z Ultimate Multisite
* Obsługa wykluczenia stron za pomocą ustawień sieci
* Czyszczenie cache Elementora po synchronizacji
* Zachowanie taksonomii szablonów
