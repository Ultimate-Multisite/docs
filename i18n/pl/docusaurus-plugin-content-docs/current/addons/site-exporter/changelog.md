---
title: Dziennik zmian Eksportatora Strony
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Dziennik zmian Site Exporter

Wersja: 1.0.6 - Wydano dnia 2026-05-11
* Nowość: Eksporty witryny teraz pakują samodzielnie uruchamiany plik index.php, dzięki czemu plik ZIP można zainstalować na świeżym hostingu bez konieczności osobnej instalacji pluginu.
* Nowość: Eksport sieci pozwala administratorom na eksport wszystkich podstron w jednym archiwum ze strony administracyjnej Site Export.

Wersja: 1.0.5 - Wydano dnia 2026-05-05
* Poprawka: Dodano `__callStatic` do stubu polyfill dla WP_CLI, aby obsłużyć metody niezamockowane, takie jak `get_config`, zapobiegając awariom uruchamiania testów.

Wersja: 1.0.4 - Wydano dnia 2025-11-25

* Poprawka: Kompatybilność z Ultimate Multisite 2.4.

Wersja: 1.0.2 - Wydano dnia 2025-09-28

* Zmieniono prefiks na ultimate-multisite; zaktualizowano domena tekstu; zwiększono numer wersji.

### Wersja 1.0.1 - Wydano dnia 2023-08-09 {#version-101---released-on-2023-08-09}

* Ulepszenie: Teraz upewnia się, że pobierana jest prawidłowa ścieżka pliku importera.
* Poprawka: Wyłączono pamięć podręczną obiektów, aby zapobiec błędom podczas importu.
* Poprawka: Naprawiono problem z linkiem do pobrania pluginu importera, który nie działał.

### Wersja 1.0.0 - Wydano dnia 2022-12-23 {#version-100---released-on-2022-12-23}

* Poprawka: Okno pop-up formularza eksportu nie ładowało się;
* Poprawka: Pliki Javascript nie ładowały się na stronie eksportu;
* Wewnętrzne: Nowy proces budowania;

### Wersja 1.0.0-beta.4 - Wydano dnia 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Wewnętrzne: Dodano generator hooków i filtrów;
* Wewnętrzne: Dodano stubsy WP Ultimo dla ułatwienia pracy dewelopera;
