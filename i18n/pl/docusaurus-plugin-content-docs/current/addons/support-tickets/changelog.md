---
title: Zmiany w historii zgłoszeń wsparcia
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Dziennik zmian dla biletów wsparcia {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Ulepszono: Usunięto katalog `vendor/` ze śledzenia w Git (jest to już pokryte przez .gitignore), co zmniejsza rozmiar repozytorium.
* Ulepszono: Przeprowadzono testy do wersji WordPress 7.0.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Naprawiono: Akceptacja wartości null w setterach modelu biletów z wartościami null.
* Naprawiono: Wszystkie bilety są teraz przechowywane w globalnych tabelach na poziomie całej sieci, co zapewnia prawidłową obsługę multisite.
* Naprawiono: Ukryto pola dla personelu i naprawiono przekierowanie na pustą stronę w formularzu nowego biletu dla klienta.
* Naprawiono: Zastąpiono nieokreślone wywołania `add_meta()` poprawnymi `update_meta()` do przechowywania metadanych.
* Naprawiono: Zastąpiono niezarejestrowany sprawdzenie uprawnień poprawnym `wu_view_all_support_tickets`.
* Naprawiono: Dodano brakujące obsługi AJAX dla akcji statusu biletu, przypisania i szybkiej edycji.
* Naprawiono: Poprawiono nazwę metody wykrywania odpowiedzi personelu w widokach biletów.
* Naprawiono: Skonsolidowano powtarzające się obsługa odpowiedzi i ujednolicono nazwy akcji nonce.
* Naprawiono: Dodano brakujący widok front-end dla shortcode'a `[wu_submit_ticket]`.
* Naprawiono: Dodano brakującą kolumnę `user_id` i naprawiono metodę `Support_Ticket::get_user_id()`.
* Naprawiono: Usunięto nadmiarowy podwójny znak zapytania w tagu opcji filtra priorytetu.
* Naprawiono: Dodano panel zarządzania biletami dla administratorów sieci dla superadminów.
* Ulepszono: Skonsolidowano CSS administracyjny do pojedynczego pliku arkusza stylów zewnętrznych.
* Ulepszono: Usunięto podmenu Ustawienia z menu administratora podstrony.
* Ulepszono: Ładowanie zasobów front-end tylko warunkowo, tylko na stronach biletów wsparcia.
* Ulepszono: Pomijanie autoloadera pluginów, gdy autoloader główny Bedrock już załadował zależności.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Dodano: Pełna funkcjonalność przeglądania biletów dla administratorów i front-endu.
* Dodano: Obsługę AJAX dla wysyłania odpowiedzi na bilety.
* Dodano: Obsługę funkcjonalności odpowiedzi na bilety z prawidłowym obsługiwaniem formularzy.
* Dodano: Prawidłowe wyświetlanie powiadomień przy wysyłaniu i odpowiadaniu na bilety w panelu administracyjnym.
* Dodano: Automatyczne powiązanie biletu z bieżącym użytkownikiem w przypadku samodzielnego zgłaszania przez klienta.
* Dodano: Ulepszenie bezpieczeństwa, aby zapobiec przejęciu własności biletu przez klientów.
* Dodano: Brakujące funkcje pomocnicze (np. `wu_format_date`, `wu_user_can_view_ticket`).
* Dodano: Prawidłowe pobieranie i obsługę załączników plików.
* Dodano: System powiadomień e-mail dla odpowiedzi na bilety i zmian statusu.
* Naprawiono: Formularz odpowiedzi na bilet zawiera teraz niezbędny ID biletu.
* Naprawiono: Problemy z widocznością powiadomień w widokach biletów administracyjnych.
* Naprawiono: Błędy składniowe w funkcjach biletów wsparcia.
* Ulepszono: Struktura bazy danych z odpowiednimi klasami zapytań i schematów dla odpowiedzi i załączników.
* Ulepszono: Migracja do właściwości (real properties) zamiast atrybutów dla modeli biletów.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Zaktualizowano: Zmieniono prefiks na `ultimate-multisite` dla spójności.
* Zaktualizowano: Standaryzacja domeny tekstu.
* Naprawiono: Drobne poprawki błędów i ulepszenia.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Pierwsze wydanie.
* Pełny system zarządzania biletami.
* Kontrola dostępu na wielu poziomach.
* System rozmów wątkowych.
* Obsługa załączników plików.
* System powiadomień e-mail.
* Interfejsy dla administratorów i klientów.
* Statystyki i raportowanie.
