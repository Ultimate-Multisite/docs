---
title: Dziennik zmian Wielokompleksowy
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Zmiany w wersji Multi-Network

### 1.3.0 {#130}
* Nowość: Podgląd szablonu sieci — przeglądaj i podglądaj szablony sieci na panelu na żywo przed zakupem.
* Nowość: Wybór szablonu sieci przy kasie — klienci mogą wybrać szablon sieci podczas procesu rejestracji i finalizacji zakupu.
* Nowość: SSO za pomocą magicznego linku między sieciami — klienci mogą bezproblemowo uzyskiwać dostęp do podsieci za pomocą uwierzytelniania magicznym linkiem.
* Nowość: Klonowanie mediów sieciowych — media witryny są poprawnie duplikowane podczas klonowania sieci z szablonu.
* Poprawka: Klonowanie sieci działa teraz bez dodatku wielodostępności (multi-tenancy addon); prawa superadministratora są ponownie przyznawane po klonowaniu.
* Poprawka: Tworzenie sieci jest teraz kompatybilne z WooCommerce i wszystkimi bramkami płatności.
* Poprawka: Numer portu jest teraz uwzględniany podczas generowania domeny zapasowej.
* Poprawka: CSS wybieracza szablonów przeniesiono do ładowanego w kolejce arkusza stylów, co zapewnia prawidłowe wyświetlanie na wszystkich motywach.
* Poprawka: Dodano ochronę przed brakiem klucza `network_id` w zakresie zapytania witryny.
* Poprawka: Sprawdzenie uprawnień sieciowych przed przełączeniem kontekstu zapobiega błędom właściwości tabeli `wpdb`.

### 1.0.4 {#104}
* Poprawka: Tworzenie nowej sieci.
* Poprawka: Renderowanie menu.

### 1.0.3 {#103}
* Zaktualizowano do Plugin Update Checker v5
* Dodano nowoczesne nagłówki pluginów WordPress
* Poprawiono kompatybilność z najnowszymi wersjami WordPress

### 1.0.2 {#102}
* Poprawki błędów i ulepszenia wydajności
* Ulepszona izolacja sieci

### 1.0.0 {#100}
* Wydanie początkowe
* Podstawowa funkcjonalność multi-network
* Integracja z Ultimate Multisite
