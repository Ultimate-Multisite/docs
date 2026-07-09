---
title: Rejestr zmian integracji WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Dziennik zmian integracji WooCommerce

Wersja 2.2.0 - Wydana 2026-07-01
* Nowe: Kwoty podatku Ultimate Multisite pojawiają się teraz jako osobne pozycje opłat WooCommerce przy checkout, dzięki czemu sumy podatków są bardziej czytelne przed płatnością.
* Nowe: Dodano opcjonalne ustawienie „Suspend Memberships Immediately on Failed Renewals” oraz filtr `wu_woo_suspend_on_payment_failure` dla witryn, które chcą zawieszać członkostwa po nieudanych odnowieniach w trakcie okna ponownych prób WooCommerce Subscriptions.
* Poprawka: Uzgodniono statusy WooCommerce Subscription, które mogły pozostawać niezsynchronizowane z członkostwami Ultimate Multisite po nieudanych lub przywróconych odnowieniach.
* Poprawka: Dodano walutę sklepu WooCommerce do listy walut Ultimate Multisite, gdy jej brakowało.
* Poprawka: Zachowano dane rozliczeniowe klienta podczas przekierowywania subskrybentów do checkout WooCommerce.
* Ulepszono: Dodano zgodność z Jetpack Autoloader 5.
* Ulepszono: Uporządkowano generowanie pakietu wydania, aby pliki zip z GitHub i marketplace unikały zagnieżdżonych katalogów stagingowych oraz plików deweloperskich.

Wersja 2.0.6 - Wydana 2026-01-16
* Ulepszenie: Dołączono podstawowe subskrypcje do dodatku. Nie wymaga już rozszerzenia Woocommerce Subscriptinos.

Wersja 2.0.5 - Wydana 2026-01-09
* Ulepszenie: Ładowanie tłumaczeń z glotpress API.
* Poprawka: Błąd krytyczny w niektórych builderach stron.
* poprawka: Nieskończone przekierowanie, gdy klient jest członkiem głównej witryny.

Wersja 2.0.4 - Wydana 2025-11-14
* Dodano: Tłumaczenia dla wielu dodatkowych języków.
* Zmieniono: Zmieniono nazwę na Ultimate Multisite: Woocommerce Integration.
* Dodano: Zgodność z Woocommerce 10.2.1.
* Dodano: Zgodność z Woocommerce Subscriptions 7.7.0.
* Poprawka: Zgodność z PHP 8.4
* Poprawka: Przekierowanie, gdy nie istnieje strona Account WC.

Wersja 2.0.3 - Wydana 2025-08-13
* Zmieniono: Włączono automatyczne aktualizacje z nowym marketplace.

Wersja 2.0.2 - Wydana 2025-07-05
* Zmieniono: Zmieniono nazwę na Multisite Ultimate: Woocommerce Integration.
* Dodano: Zgodność z Woocommerce 9.8.1.
* Dodano: Zgodność z Woocommerce Subscriptions 7.3.0.
* Poprawka: Anulowanie subskrypcji przez klienta.
* Poprawka: Błąd krytyczny podczas używania bloku checkout.
* Ulepszenie: Teraz zgodne z niestandardowymi tabelami zamówień wysokiej wydajności Woocommerce.
* Poprawka: Anulowanie przy checkout WooCommerce może nadal podnieść poziom członkostwa.

Wersja 2.0.1 - Wydana 2023-08-09

* Dodano: Zgodność z Woocommerce 7.9.0.
* Dodano: Zgodność z Woocommerce Subscriptions 5.3.0.
* Dodano: Obsługę aktualizacji członkostwa.
* Dodano: Powiadomienia o okresach próbnych i opłatach konfiguracyjnych w Woocommerce.
* Dodano: Identyfikację produktów Ultimate Multisite Woocommerce za pomocą wartości meta.
* Dodano: Wstawiono jednorazową poprawkę oznaczającą wszystkie produkty Woocommerce powiązane z Ultimate Multisite.
* Dodano: Usunięto produkty utworzone przez Ultimate Multisite z listy Woocommerce.
* Ulepszenie: Utworzono jednorazowy rabat Woocommerce do zastosowania w koszyku.
* Ulepszenie: Przywrócono rabat cykliczny do produktu Woocommerce.
* Ulepszenie: Dodano etykietę rabatu cyklicznego do produktu Woocommerce.
* Ulepszenie: Zapewniono typ produktu przy checkout.
* Poprawka: Utrzymano status członkostwa podczas procesu obniżania planu.
* Poprawka: Sprawdzono, czy subskrypcja istnieje, aby uniknąć błędów podczas procesu anulowania.
* Poprawka: Dodano datę rozpoczęcia subskrypcji do użycia w subskrypcjach Woocommerce.
* Wewnętrzne: Wdrożono nowy proces kompilacji PHP 8.1.

Wersja 2.0.0 - Całkowite przepisanie.

* Dodano: Metodę przetwarzania anulowania w celu usunięcia subskrypcji woo podczas zmiany bramki lub anulowania członkostwa;
* Dodano: Handler do obniżania i podnoszenia poziomu członkostw;
* Ulepszenie: Ładowanie zależności woocommerce w formularzu aktualizacji klienta w podwitrynach, aby umożliwić aktualizację Account;
* Ulepszenie: Prawidłowe ładowanie koszyka Woocommerce, jeśli nie istnieje;
* Ulepszenie: Zapewnienie, że jesteśmy na tabelach głównej witryny podczas przetwarzania checkout;
* Ulepszenie: Tworzenie zamówienia odnowienia Ultimo na podstawie wartości zamówienia subskrypcji Woocommerce, a nie ostatniej płatności;
* Poprawka: Link przycisku Przejdź do członkostwa WU;
* Poprawka: Ustawienie zamówienia Ultimo jako opłaconego, gdy odnowienie Woocommerce subscriptions zostało opłacone;
* Build: Dodano MPB jako builder;

Wersja 2.0.0-beta-5 - Wydana 2022-01-21

* Wewnętrzne: Dodano generator hooków i filtrów;
* Wewnętrzne: Dodano stuby Ultimate Multisite dla wygody deweloperów;
* Naprawiono: Zapobieganie tworzeniu wielu produktów, gdy nie jest to konieczne;

Wersja 2.0.0-beta.4 - 2021-09-23

* Poprawka: wymaganie, aby WooCommerce był aktywny w sieci zamiast tylko na głównej witrynie;
* Ulepszenie: dodano filtr umożliwiający używanie dodatku jako mu-plugin;

Wersja 2.0.0-beta.3 - 2021-05-28

* Poprawka: kontrola dostępu do Dashboard była zbyt agresywna;
* Ulepszenie: Dodano linki pomocy WooCommerce do górnego menu Ultimate Multisite;

Wersja 2.0.0-beta.2 - 2021-05-04

* Ulepszenie: tworzy oczekujące płatności w Ultimo przy tworzeniu zamówienia odnowienia WCS;
* Ulepszenie: wstępnie wypełnia pola rozliczeniowe danymi klienta Ultimate Multisite;
* Ulepszenie: ponownie dodaje pola rozliczeniowe dla bramek;

Wersja 2.0.0-beta.1 - 2021-05-04

* Początkowe wydanie beta

-- Starsze wersje --

Wersja 1.2.6 - 26/03/2020

* Naprawiono: Mała niezgodność z nowszymi wersjami WooCommerce Subscriptions;

Wersja 1.2.5 - 26/08/2019

* Naprawiono: Błąd w poprzednim wydaniu;

Wersja 1.2.4 - 22/08/2019

* Ulepszono: Dodano opcję natychmiastowego przekierowania do ekranu checkout WooCommerce po integracji;

Wersja 1.2.3 - 26/05/2019

* Naprawiono: E-mail płatności dla WooCommerce znikał w niektórych przypadkach brzegowych;

Wersja 1.2.2 - 27/02/2019

* Dodano: Obsługę opłat konfiguracyjnych w integracji WooCommerce Subscription;

Wersja 1.2.1 - 17/11/2018

* Naprawiono: Problemy ze zgodnością z Ultimate Multisite w wersji 1.9.0;

Wersja 1.2.0 - 10/09/2018

* Ulepszono: Nowy URL aktualizacji dla dodatków;
* Dodano: Obsługę beta dla WooCommerce Subscription;

Wersja 1.1.2 - 11/02/2018

* Naprawiono: Link do płatności generowany dynamicznie, aby reagować na zmiany endpointów WooCommerce;
* Ulepszono: Teraz wymuszamy status ukończonego dla naszych zamówień, gdy wywoływane jest payment_completed, aby upewnić się, że nasze hooki odnowienia uruchamiają się wtedy, gdy powinny;

Version 1.1.1 - 24/01/2018

* Naprawiono: Teraz sprawdza również, czy WooCommerce jest właśnie aktywowany w głównej witrynie;
* Naprawiono: Dodano przeciążenia, aby umożliwić tworzenie zamówienia z uwzględnieniem podatków;

Version 1.1.0 - 04/11/2017

* Naprawiono: Teraz etykieta przycisku integracji faktycznie zmienia się, aby odzwierciedlać ustawienia. Wymaga Ultimate Multisite 1.5.0;
* Naprawiono: WooCommerce Integration działa teraz nawet wtedy, gdy WooCommerce nie jest aktywny w sieci i jest aktywowany tylko w t^he głównej witrynie;

1.0.0 - Pierwsze wydanie
