---
title: Dziennik zmian VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Dziennik zmian VAT {#vat-changelog}

Wersja 1.0.7 - Wydano dnia 2026-02-03

* Poprawka: Numery VAT dla Niemiec (DE) nie przechodziły walidacji z powodu błędów MS_MAX_CONCURRENT_REQ usługi VIES SOAP. Przejście ze starszego API SOAP na oficjalne API VIES REST UE, co zapewnia bardziej niezawodną walidację.
* Poprawka: Numery VAT są teraz akceptowane, gdy usługa VIES jest tymczasowo niedostępna, zamiast być błędnie odrzucane. Tworzony jest wpis w dzienniku do późniejszej weryfikacji.
* Poprawka: Pole VAT/NIP jest teraz widoczne dla wszystkich krajów, a nie tylko członków UE. Numery podatkowe spoza UE (np. szwajcarskie numery CHE) są przechowywane do wyświetlania na fakturach bez walidacji VIES.
* Poprawka: Wyszukiwanie prefiksu VAT dla Grecji (GR), Monako (MC) i Wyspy Man było uszkodzone z powodu nieprawidłowej logiki wyszukiwania w tablicy.
* Ulepszenie: Usunięto niepotrzebną zależność deweloperską wp-cli-bundle, która mogła powodować błędy krytyczne przy użyciu z dodatkiem Site Exporter.
* Ulepszenie: Dodano kompleksowy zestaw testów jednostkowych (53 testy).

Wersja 1.0.6 - Wydano dnia 2026-01-25

* Poprawka: Transakcje B2B krajowe teraz prawidłowo naliczają VAT. Zgodnie z przepisami VAT UE, mechanizm odwrotnego obciążenia (reverse charge) ma zastosowanie tylko do transakcji B2B transgranicznych, a nie wtedy, gdy kraj klienta zgadza się z krajem firmy.

Wersja 1.0.5 - Wydano dnia 2026-01-22

* Poprawka: Dodatek nie ładował się lub nie działał prawidłowo.
* Zmiana: Źródło danych stawek VAT zmieniono z euvatrates.com na repozytorium ibericode/vat-rates, co zapewnia bardziej niezawodne i aktywnie utrzymywane dane.
* Poprawka: Naprawiono literówkę w wartości opcji super_reduced_rates.
* Ulepszenie: Dodano sprawdzenia na wartości null dla obsługi kodów krajów, aby zapobiec błędom.
* Zmiana: Usunięto dołączone pliki tłumaczeń na rzecz automatycznych aktualizacji za pomocą Traduttore.

Wersja: 1.0.3 - Wydano dnia 2025-09-28

* Zmieniono prefiks na ultimate-multisite; zaktualizowano domenę tekstu; podniesiono numer wersji.

Wersja 1.0.0-beta.4 - 2021-09-24

* Dodano: filtr wp_ultimo_skip_network_active_check dla konfiguracji opartych na mu-plugins;

Wersja 1.0.0 - 05/08/2021 - Wydanie początkowe
