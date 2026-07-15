---
title: Dziennik zmian sprzedawcy domen
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Dziennik zmian Domain Seller

Wersja 1.3.0 - Wydana 2026-06-02
- Nowe: Dodano ostrzeżenie network-admin, gdy saldo resellera HostAfrica staje się zbyt niskie
- Nowe: Dodano automatyczne mapowanie nowo zarejestrowanych domen do witryny sieciowej
- Poprawka: Zastosowano wymagania pól rejestrującego tylko podczas rejestrowania nowej domeny
- Poprawka: Umożliwiono odrzucanie powiadomień o monitorowaniu salda
- Poprawka: Zapewniono zachowanie danych rozliczeniowych rejestrującego WooCommerce
- Poprawka: Wymuszono wymagania dotyczące kontaktu rejestrującego podczas rejestracji
- Poprawka: Uniemożliwiono tworzenie produktów rejestracji domen z narzutem 0%
- Poprawka: Zachowano wybory domen i ceny w trakcie przepływu sesji checkout
- Poprawka: Ulepszono wyświetlanie waluty cen domen HostAfrica
- Poprawka: Ulepszono zachowanie form-action checkout, aby zapobiec niezgodnościom query-var rdzenia WP
- Ulepszono: Dodano link do dokumentacji konfiguracji resellera HostAfrica w wskazówkach konfiguracji

Wersja 1.2.0 - Wydana 2026-05-25
- Nowe: Dodano HostAfrica jako integrację sprzedaży domen z obsługą checkout, kreatora konfiguracji, wyszukiwania, TLD/cen, rejestracji, odnowienia, transferu, nameserver, DNS, kodu EPP, blokady rejestratora i ochrony ID
- Nowe: Dodano Openprovider jako integrację sprzedaży domen z obsługą cen resellera, rejestracji, odnowienia, transferu, nameserver, DNS, kodu EPP, blokady rejestratora, prywatności WHOIS i synchronizacji TLD
- Nowe: Dodano Hostinger jako integrację sprzedaży domen używającą współdzielonego tokenu API Hostinger z integracji rdzenia do sprawdzania dostępności, rejestracji, aktualizacji nameserver, blokady rejestratora i prywatności WHOIS
- Ulepszono: Dodano docblocki akcji i filtrów cyklu życia domeny dla wskazówek integracyjnych dla deweloperów
- Ulepszono: Zaktualizowano metadane zgodności pluginu do WordPress 7.0 w pliku readme dodatku
- Ulepszono: Zaktualizowano szablony planowania używane do koordynacji nadchodzących wydań

Wersja 1.1.0 - Wydana 2026-05-08
- Nowe: Tworzenie rekordów DNS (add_dns_record) wdrożone dla rejestratorów ResellerClub, Enom i OpenSRS
- Poprawka: Domyślny parser rekordów DNS obsługuje teraz tokeny {DOMAIN} i {SITE_URL}
- Poprawka: Slugi pól checkout wyboru domeny otrzymały przestrzeń nazw, aby zapobiec kolizji z site_url

Wersja 1.0.8 - Wydana 2026-05-07
- Poprawka: Ceny domen ResellerClub pobierają teraz bieżące ceny kosztowe z prawidłowego endpointu API

Wersja 1.0.7 - Wydana 2026-05-06
* Poprawka: ResellerClub test_connection wysyła wymagany parametr tlds (#224)

Wersja 1.0.6 - Wydana 2026-05-05
* Poprawka: Rejestracja domen ResellerClub działa teraz poprawnie dzięki ulepszonej obsłudze odpowiedzi API i routingowi dostawcy sterowanemu przez rejestr
* Poprawka: Ulepszenia UX strony administracyjnej Register Domain
* Usunięto: Integracja rejestratora CyberPanel

Wersja 1.0.5 - Wydana 2026-04-02
* Nowe: Integracja rejestratora GoDaddy do rejestracji i zarządzania domenami
* Nowe: Integracja rejestratora NameSilo
* Nowe: Integracja rejestratora ResellerClub
* Nowe: Automatyczna weryfikacja domeny wysyłkowej SES przy zakupie i mapowaniu domeny
* Poprawka: Zabezpieczono stałe pluginu przed ponownym zdefiniowaniem w środowisku testowym
* Poprawka: Flagi MySQL są poprawnie dzielone na słowa w install-wp-tests.sh

Wersja 1.0.4 - Wydana 2026-03-14
* **Poprawka:** Niektóre brakujące zasoby css
* **Poprawka:** Błąd związany z niedostępnymi tlds

Wersja 1.0.3 - Wydana 2026-03-09
* **Poprawka:** Błędy reaktywnych właściwości Vue (domain_option, selected_domain, domain_provider) podczas używania starszego szablonu rejestracji z shortcode checkout
* **Poprawka:** Nieprawidłowe wyrównanie pola wprowadzania subdomeny i zbyt duży tekst w polu checkout wyboru domeny
* **Poprawka:** Ukryj blok podglądu „Twój URL będzie” gdy obecne jest pole wyboru domeny

Wersja 1.0.2 - Wydana 2026-03-01
* **Ulepszono:** Usunięto globalne ustawienia narzutu ze strony ustawień — ceny są teraz wyłącznie per produkt
* **Ulepszono:** Dodano link „Zarządzaj produktami domen” na stronie ustawień do szybkiej nawigacji
* **Ulepszono:** Jaśniejsze opisy pól i podpowiedzi dla ustawień produktu domeny (catch-all vs specyficzne dla TLD, typy narzutu, ceny wprowadzające)
* **Ulepszono:** Lepsze opisy na całej stronie ustawień (wyszukiwanie TLD, odnowienia, DNS, powiadomienia)

Wersja 1.0.1 - Wydana 2026-02-27

* **Nowe:** Narzędzie importu TLD do masowego zarządzania cenami
* **Nowe:** Obsługa cen wprowadzających dla produktów domen
* **Nowe:** Zestaw testów E2E z Cypress
* **Nowe:** Szablony e-mail dla powiadomień o cyklu życia domeny
* **Nowe:** Pola adresu rejestrującego w modalu administracyjnym rejestracji domeny, wstępnie wypełnione z ustawień
* **Nowe:** Interfejs zarządzania DNS klienta z obsługą dodawania, edycji i usuwania rekordów
* **Nowe:** Opcja checkout „Bring your own domain” z automatycznym mapowaniem domeny
* **Nowe:** Automatyczne generowanie URL witryny z nazwy domeny podczas checkout
* **Nowe:** Domyślna konfiguracja nameserverów i rekordów DNS w ustawieniach
* **Nowe:** Szczegóły rejestracji domeny i zarządzanie DNS na głównej stronie edycji domeny
* **Nowe:** Kreator konfiguracji automatycznie tworzy domyślny produkt domeny z rozsądnymi ustawieniami domyślnymi
* **Nowe:** Codzienna automatyczna synchronizacja TLD przez cron u wszystkich skonfigurowanych dostawców
* **Nowe:** Ochrona prywatności WHOIS z konfiguracją dla każdego produktu (zawsze włączona, wybór klienta lub wyłączona)
* **Nowe:** Pole wyboru prywatności WHOIS w checkout z wyświetlaniem ceny i obsługą trybu ciemnego
* **Nowe:** Strona administracyjna Register Domain do ręcznej rejestracji domeny
* **Nowe:** Automatyczne aktualizacje pluginu przez serwer aktualizacji Ultimate Multisite
* **Nowe:** Karta filtra typu produktu domeny w tabeli listy produktów ze stylizacją fioletowej odznaki
* **Nowe:** Pola kontaktowe rejestrującego (imię i nazwisko, adres, miasto, stan, kod pocztowy, kraj, telefon) w formularzu checkout domeny
* **Nowe:** Walidacja pól rejestrującego przed wywołaniem API rejestratora z jasnymi komunikatami błędów
* **Nowe:** Kanały logów specyficzne dla dostawcy dla zdarzeń rejestracji domen (np. domain-seller-namecheap.log)
* **Nowe:** Pola kontaktowe rejestrującego w głównym formularzu checkout rejestracji/signup (pokazywane podczas rejestrowania domeny)
* **Ulepszone:** Zastąpiono pole checkout Domain Search ujednoliconym polem Domain Selection obsługującym karty subdomeny, rejestracji i istniejącej domeny
* **Ulepszone:** Ustawienia produktu domeny renderują się inline na stronie edycji produktu przez główny system widgetów
* **Ulepszone:** Informacje o domenie klienta podpinają się do głównego widgetu mapowania domen zamiast samodzielnego metaboxa
* **Ulepszone:** Kreator importu TLD uproszczono do synchronizacji jednym kliknięciem od wszystkich dostawców
* **Ulepszone:** Sprawdzanie dostępności domen Namecheap używa zbiorczego wywołania API dla szybszego wyszukiwania
* **Ulepszone:** API cen Namecheap używa poprawnych parametrów i parsowania odpowiedzi
* **Ulepszone:** Scentralizowane przechowywanie TLD w jednej opcji sieciowej
* **Ulepszone:** Logowanie aktywności domen dla zmian DNS, transferów i zastosowania konfiguracji
* **Ulepszone:** Pełna synchronizacja TLD dla OpenSRS z użyciem głównej listy IANA i walidacji zbiorczej
* **Ulepszone:** Pełna synchronizacja TLD dla Namecheap z paginowanymi żądaniami API
* **Ulepszone:** Zastąpiono przestarzałe klasy dostawców wzorcem Integration Registry
* **Ulepszone:** Panel ustawień z konfiguracją DNS i transferów
* **Ulepszone:** Numery telefonów automatycznie formatowane do formatu rejestratora +CC.NNN
* **Ulepszone:** Walidacja pola telefonu usuwa znaki formatowania przed wysłaniem
* **Ulepszone:** Wymaganie wersji podniesione do Ultimate Multisite 2.4.12 z jaśniejszym powiadomieniem
* **Ulepszone:** Workflow CI używa poprawnego checkout zarówno dla addonu, jak i głównego pluginu
* **Ulepszone:** prepare_registrant_info() odczytuje z metadanych użytkownika zapisanych z checkout z awaryjnym użyciem adresu rozliczeniowego
* **Naprawione:** AJAX wyszukiwania domen nie działał dla niezalogowanych użytkowników podczas checkout
* **Naprawione:** AJAX cen domen nie działał dla niezalogowanych użytkowników podczas checkout
* **Naprawione:** Krytyczny błąd ponownej deklaracji klasy Spyc podczas uruchamiania poleceń WP-CLI
* **Naprawione:** Zbyt krótki timeout API sandbox Namecheap
* **Naprawione:** Tekst przycisku Select w wyszukiwaniu domen nie był widoczny na zielonym tle
* **Naprawione:** Rejestracja domeny kończyła się błędem „RegistrantFirstName is Missing” z powodu brakujących informacji kontaktowych
* **Naprawione:** Rekord domeny tworzony z blog_id=0, gdy witryna jeszcze nie istniała w momencie checkout
* **Naprawione:** Ustawienie domyślnych TLD zwracane jako ciąg znaków zamiast sparsowanej tablicy
* **Usunięte:** Samodzielna strona administracyjna Domain Management — teraz obsługiwana przez główne strony domen

Wersja 1.0.0 - Wydana 2025-09-28

**Duża przebudowa dla Ultimate Multisite v2**

* **Nowe:** Kompletna przebudowa z nowoczesną architekturą PHP 7.4+
* **Nowe:** Bezproblemowa integracja z systemem checkout Ultimate Multisite v2
* **Nowe:** Zarządzanie produktami domen z elastycznymi opcjami cenowymi
* **Nowe:** Architektura obsługi wielu dostawców domen
* **Nowe:** Integracja automatycznego odnawiania i subskrypcji
* **Nowe:** Interfejs zarządzania domenami klienta
* **Nowe:** Administracyjne monitorowanie domen i logi
* **Nowe:** Obsługa kuponów dla produktów domen
* **Nowe:** Kompleksowe zarządzanie ustawieniami
* **Nowe:** Przyjazna dla deweloperów, rozszerzalna baza kodu
* **Ulepszone:** Zaktualizowany dostawca OpenSRS z pełną obsługą funkcji
* **Ulepszone:** Nowoczesny UI spójny z Ultimate Multisite v2
* **Naprawione:** Cały przestarzały kod v1 zaktualizowano do standardów v2
* **Usunięte:** Zgodność ze starszą wersją v1 (zmiana niekompatybilna wstecz)

### Poprzednie wersje (v1 Legacy) {#previous-versions-v1-legacy}

### Wersja 0.0.3 - 20/08/2019 {#version-003---20082019}

* Naprawione: Niekompatybilność z Groundhogg CRM
* Uwaga: To było ostatnie wydanie zgodne z v1

### Wersja 0.0.2 - 07/12/2018 {#version-002---07122018}

* Naprawione: Usunięto pole License Key
* Naprawione: Brakujące karty planów, gdy plugin funkcji jest aktywny
* Ulepszone: Dodano przycisk pominięcia w polu rejestracji

### Wersja 0.0.1 - Pierwsze wydanie {#version-001---initial-release}

* Podstawowa integracja OpenSRS dla WP Ultimo v1
* Proste wyszukiwanie i rejestracja domen
* Uprawnienia domen oparte na planach
