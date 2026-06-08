---
title: Zmiany w integracji z WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Dziennik zmian integracji WooCommerce

Wersja 2.0.6 - Wydana 2026-01-16
* Ulepszenie: Dodano podstawowe subskrypcje do dodatku. Nie wymaga już rozszerzenia WooCommerce Subscriptions.

Wersja 2.0.5 - Wydana 2026-01-09
* Ulepszenie: Ładowanie tłumaczeń z API glotpress.
* Naprawa: Krytyczny błąd w niektórych page builderach.
* Naprawa: Nieskończone przekierowanie, gdy klient jest członkiem głównej witryny.

Wersja 2.0.4 - Wydana 2025-11-14
* Dodano: Tłumaczenia dla znacznie większej liczby języków.
* Zmieniono: Zmieniona nazwa na Ultimate Multisite: Woocommerce Integration.
* Dodano: Kompatybilność z Woocommerce 10.2.1.
* Dodano: Kompatybilność z Woocommerce Subscriptions 7.7.0.
* Naprawa: Kompatybilność z PHP 8.4
* Naprawa: Przekierowanie, gdy nie istnieje strona konta WC.

Wersja 2.0.3 - Wydana 2025-08-13
* Zmieniono: Włączono automatyczne aktualizacje z nowym marketplace.

Wersja 2.0.2 - Wydana 2025-07-05
* Zmieniono: Zmieniona nazwa na Multisite Ultimate: Woocommerce Integration.
* Dodano: Kompatybilność z Woocommerce 9.8.1.
* Dodano: Kompatybilność z Woocommerce Subscriptions 7.3.0.
* Naprawa: Anulowanie subskrypcji przez klienta.
* Naprawa: Krytyczny błąd podczas używania bloku checkout.
* Ulepszenie: Teraz kompatybilne z niestandardowymi tabelami zamówień o wysokiej wydajności WooCommerce.
* Naprawa: Anulowanie w koszyku WooCommerce nadal może ulepszyć członkostwo.

Wersja 2.0.1 - Wydana 2023-08-09

* Dodano: Kompatybilność z Woocommerce 7.9.0.
* Dodano: Kompatybilność z Woocommerce Subscriptions 5.3.0.
* Dodano: Obsługa aktualizacji członkostwa.
* Dodano: Powiadomienia o okresach próbnych i opłatach początkowych w WooCommerce.
* Dodano: Identyfikacja produktów WooCommerce Ultimate Multisite za pomocą wartości meta.
* Dodano: Wprowadzono jednorazową poprawkę, aby oznaczyć wszystkie produkty WooCommerce związane z Ultimate Multisite.
* Dodano: Usunięto produkty utworzone przez Ultimate Multisite z listy WooCommerce.
* Ulepszenie: Utworzono niepowtarzalny rabat WooCommerce, który ma być stosowany do koszyka.
* Ulepszenie: Przywrócono powtarzalny rabat do produktu WooCommerce.
* Ulepszenie: Dodano etykietę rabatu powtarzalnego do produktu WooCommerce.
* Ulepszenie: Zapewniono typ produktu w koszyku.
* Naprawa: Utrzymanie statusu członkostwa podczas procesu obniżenia poziomu.
* Naprawa: Sprawdzenie, czy subskrypcja istnieje, aby uniknąć błędów podczas procesu anulowania.
* Naprawa: Dodanie daty rozpoczęcia subskrypcji do użycia w subskrypcjach WooCommerce.
* Wewnętrzne: Wdrożono nowy proces budowania PHP 8.1.

Wersja 2.0.0 - Pełne przepisanie.

* Dodano: Metodę anulowania procesu, aby usunąć subskrypcję woo przy zmianie bramki płatności lub anulowaniu członkostwa;
* Dodano: Obsługę obniżania i podnoszenia poziomu członkostwa;
* Ulepszenie: Ładowanie zależności WooCommerce na formularzu aktualizacji klienta w subsitach, aby umożliwić aktualizację konta;
* Ulepszenie: Poprawne ładowanie koszyka WooCommerce, jeśli nie istnieje;
* Ulepszenie: Zapewnienie, że podczas przetwarzania koszyka jesteśmy na tablicach głównej witryny;
* Ulepszenie: Ustawienie zamówienia odnowienia Ultimo na podstawie wartości zamówienia subskrypcji WooCommerce, a nie ostatniej płatności;
* Naprawa: Przejście do linku przycisku WU Membership;
* Naprawa: Ustawienie zamówienia Ultimo jako opłacone, gdy odnowienie subskrypcji WooCommerce zostało opłacone;
* Budowa: Dodano MPB jako builder.

Wersja 2.0.0-beta-5 - Wydana 2022-01-21

* Wewnętrzne: Dodano generator hooków i filtrów;
* Wewnętrzne: Dodano stubs Ultimate Multisite dla jakości życia dewelopera;
* Naprawiono: Zapobieganie tworzeniu wielu produktów, gdy nie jest to konieczne;

Wersja 2.0.0-beta.4 - 2021-09-23

* Naprawa: Wymaganie, aby WooCommerce był aktywny w sieci, a nie tylko na głównej witrynie;
* Ulepszenie: Dodano filtr, który pozwala używać dodatku jako mu-plugin.

Wersja 2.0.0-beta.3 - 2021-05-28

* Naprawa: Kontrola dostępu do dashboard była zbyt agresywna;
* Ulepszenie: Dodano linki pomocy WooCommerce do górnego menu Ultimate Multisite;

Wersja 2.0.0-beta.2 - 2021-05-04

* Ulepszenie: Tworzenie płatności oczekujących na Ultimo podczas tworzenia zamówienia odnowienia WCS;
* Ulepszenie: Wstępne wypełnianie pól rozliczeniowych danymi klienta Ultimate Multisite;
* Ulepszenie: Dodanie pól rozliczeniowych dla bramek płatności;

Wersja 2.0.0-beta.1 - 2021-05-04

* Początkowa wersja beta

-- Starsze wersje --

Wersja 1.2.6 - 26/03/2020

* Naprawiono: Mała niekompatybilność z nowszymi wersjami WooCommerce Subscriptions;

Wersja 1.2.5 - 26/08/2019

* Naprawiono: Błąd z poprzedniej wersji;

Wersja 1.2.4 - 22/08/2019

* Ulepszono: Dodano opcję przekierowania do ekranu koszyka WooCommerce po integracji natychmiast;

Wersja 1.2.3 - 26/05/2019

* Naprawiono: E-mail płatności dla WooCommerce zniknął w niektórych przypadkach brzegowych;

Wersja 1.2.2 - 27/02/2019

* Dodano: Obsługa opłat początkowych w integracji WooCommerce Subscription;

Wersja 1.2.1 - 17/11/2018

* Naprawiono: Problemy z kompatybilnością z wersją 1.9.0 Ultimate Multisite;

Wersja 1.2.0 - 10/09/2018

* Ulepszono: Nowy URL aktualizacji dla dodatków;
* Dodano: Beta wsparcie dla WooCommerce Subscription;

Wersja 1.1.2 - 11/02/2018

* Naprawiono: Link do Płatności jest generowany dynamicznie, aby reagować na zmiany w endpointach WooCommerce;
* Ulepszono: Teraz wymuszamy status ukończony dla naszych zamówień, gdy wywołany jest `payment_completed`, aby upewnić się, że nasze hooki odnowienia działają, gdy powinny;

Wersja 1.1.1 - 24/01/2018

* Naprawiono: Teraz sprawdza również, czy WooCommerce został tylko aktywowany na głównej witrynie;
* Naprawiono: Dodano nadpisywanie, aby umożliwić tworzenie zamówień z uwzględnieniem podatków;

Wersja 1.1.0 - 04/11/2017

* Naprawiono: Teraz etykieta przycisku integracji faktycznie zmienia się, aby odzwierciedlać ustawienia. Wymaga Ultimate Multisite 1.5.0;
* Naprawiono: Integracja WooCommerce działa teraz, nawet jeśli WooCommerce nie jest aktywny w sieci i aktywowany tylko na głównej witrynie;

1.0.0 - Wydanie początkowe
