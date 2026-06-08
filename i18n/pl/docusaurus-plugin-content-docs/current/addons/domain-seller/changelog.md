---
title: Dziennik zmian Sprzedawcy Domen
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Lista zmian dla Domain Seller

Wersja 1.1.0 - Wydana 2026-05-08
- Nowość: Zaimplementowano tworzenie rekordów DNS (add_dns_record) dla rejestratorów ResellerClub, Enom i OpenSRS
- Poprawka: Parser domyślnych rekordów DNS teraz toleruje tokeny {DOMAIN} i {SITE_URL}
- Poprawka: Slugi pól wyboru domeny w koszyku zostały nazwane w sposób zapobiegający kolizjom ze `site_url`

Wersja 1.0.8 - Wydana 2026-05-07
- Poprawka: Cennik domen ResellerClub teraz pobiera aktualne ceny kosztowe z poprawnego endpointu API

Wersja 1.0.7 - Wydana 2026-05-06
* Poprawka: Testowe połączenie ResellerClub wysyła wymagany parametr tlds (#224)

Wersja 1.0.6 - Wydana 2026-05-05
* Poprawka: Rejestracja domen ResellerClub działa poprawnie dzięki ulepszonemu obsłużeniu odpowiedzi API i routowaniu dostawców sterowanemu przez rejestr.
* Poprawka: Ulepszenia UX na stronie administracyjnej Rejestracja Domen
* Usunięto: Integracja rejestratora CyberPanel

Wersja 1.0.5 - Wydana 2026-04-02
* Nowość: Integracja rejestratora GoDaddy do rejestracji i zarządzania domenami
* Nowość: Integracja rejestratora NameSilo
* Nowość: Integracja rejestratora ResellerClub
* Nowość: Automatyczna weryfikacja wysyłanej domeny SES przy zakupie i mapowaniu
* Poprawka: Stałe wartości (konstanty) w pluginie Guard chronione przed redefinicją w środowisku testowym
* Poprawka: MySQL poprawnie rozdziela słowa w pliku install-wp-tests.sh

Wersja 1.0.4 - Wydana 2026-03-14
* **Poprawka:** Niektóre brakujące zasoby CSS
* **Poprawka:** Błąd związany z niedostępnymi TLD

Wersja 1.0.3 - Wydana 2026-03-09
* **Poprawka:** Błędy właściwości reaktywnej Vue (domain_option, selected_domain, domain_provider) przy użyciu starego szablonu rejestracji z krótkim kodem koszyka
* **Poprawka:** Nieprawidłowe wyrównanie pola wprowadzania poddomen i zbyt duży tekst w polu wyboru domeny w koszyku
* **Poprawka:** Ukrycie bloku podglądu „Twoja URL będzie” gdy obecne jest pole wyboru domeny

Wersja 1.0.2 - Wydana 2026-03-01
* **Ulepszenie:** Usunięto globalne ustawienia nadpisywania (markup) ze strony ustawień — cennik jest teraz wyłącznie na poziomie produktu
* **Ulepszenie:** Dodano link „Zarządzaj produktami domen” na stronie ustawień dla szybkiej nawigacji
* **Ulepszenie:** Jaśniejsze opisy pól i podpowiedzi dla ustawień produktu domen (catch-all vs TLD-specyficzne, typy nadpisywania, cennik wprowadzający)
* **Ulepszenie:** Lepsze opisy na całej stronie ustawień (szukaj TLD, odnowienia, DNS, powiadomienia)

Wersja 1.0.1 - Wydana 2026-02-27

* **Nowość:** Narzędzie do importu TLD do zarządzania cenami hurtowymi
* **Nowość:** Obsługa cen wprowadzających dla produktów domen
* **Nowość:** Zestaw testów E2E z Cypress
* **Nowość:** Szablony e-mail do powiadomień o cyklu życia domeny
* **Nowość:** Pola adresowe rejestratora na modalnym oknie rejestracji domen w panelu administracyjnym, wypełniane domyślnie z ustawień
* **Nowość:** Interfejs zarządzania DNS dla klientów z obsługą dodawania, edytowania i usuwania rekordów
* **Nowość:** Opcja „Własna domena” w koszyku z automatycznym mapowaniem domeny
* **Nowość:** Automatyczne generowanie URL strony z nazwy domeny podczas realizacji zamówienia
* **Nowość:** Domyślna konfiguracja nameserverów i rekordów DNS w ustawieniach
* **Nowość:** Szczegóły rejestracji domeny i zarządzanie DNS na głównym widoku edycji domeny
* **Nowość:** Asystent konfiguracji automatycznie tworzy domyślny produkt domenowy z rozsądnymi ustawieniami
* **Nowość:** Codyczna automatyczna synchronizacja TLD za pomocą cron dla wszystkich skonfigurowanych dostawców
* **Nowość:** Prywatność WHOIS z konfiguracją na poziomie produktu (zawsze włączone, wybór klienta lub wyłączone)
* **Nowość:** Pole wyboru prywatności WHOIS w koszyku z wyświetlaniem cen i obsługą trybu ciemnego
* **Nowość:** Strona administracyjna Rejestracja Domen do ręcznej rejestracji domen
* **Nowość:** Automatyczne aktualizacje pluginów przez serwer aktualizacji Ultimate Multisite
* **Nowość:** Zakładnik typu filtra produktu domenowego w tabeli listy produktów z stylizacją niebieskiej wstążki
* **Nowość:** Pola kontaktowe rejestratora (imię, adres, miasto, stan, kod pocztowy, kraj, telefon) w formularzu koszyka domen
* **Nowość:** Walidacja pól rejestratora przed wywołaniem API rejestratora z jasnymi komunikatami o błędach
* **Nowość:** Kanały logowania specyficzne dla dostawcy dla zdarzeń rejestracji domen (np. domain-seller-namecheap.log)
* **Nowość:** Pola kontaktowe rejestratora w głównym formularzu rejestracji/zamówienia (wyświetlane podczas rejestracji domeny)
* **Ulepszenie:** Pole wyszukiwania domen w koszyku zastąpione unifikowanym polem wyboru domen wspierającym zakładki poddomena, rejestracja i istniejąca domena
* **Ulepszenie:** Ustawienia produktu domenowego renderowane w linii na stronie edycji produktu za pomocą głównego systemu widgetów
* **Ulepszenie:** Informacje o domenie klienta podłączone do głównego widgetu mapowania domen zamiast samodzielnego metaboxu
* **Ulepszenie:** Asystent importu TLD uproszczony do synchronizacji jednym kliknięciem ze wszystkich dostawców
* **Ulepszenie:** Dostępność domen Namecheap używa wywołania API wsadowego dla szybszego wyszukiwania
* **Ulepszenie:** API cen Namecheap używa prawidłowych parametrów i parsowania odpowiedzi
* **Ulepszenie:** Centralne przechowywanie TLD w jednej opcji sieciowej
* **Ulepszenie:** Logowanie aktywności domen dla zmian DNS, transferów i zastosowania konfiguracji
* **Ulepszenie:** Pełna synchronizacja TLD dla OpenSRS z wykorzystaniem głównej listy IANA i walidacją wsadową
* **Ulepszenie:** Pełna synchronizacja TLD dla Namecheap z żądaniami API paginowanymi
* **Ulepszenie:** Stare klasy dostawców zastąpione wzorcem Integration Registry
* **Ulepszenie:** Panel ustawień z konfiguracją DNS i transferów
* **Ulepszenie:** Numery telefonów automatycznie formatowane do formatu +CC.NNN rejestratora
* **Ulepszenie:** Walidacja pola telefonu usuwa znaki formatujące przed wysłaniem
* **Ulepszenie:** Wymaganie wersji podniesione do Ultimate Multisite 2.4.12 z jaśniejszym komunikatem
* **Ulepszenie:** Workflow CI używa odpowiedniego koszyka zarówno dla pluginu dodatkowego, jak i głównego
* **Ulepszenie:** prepare_registrant_info() odczytuje z metadanych użytkownika zapisanych w koszyku z fallbackiem na adres rozliczeniowy
* **Naprawiono:** AJAX wyszukiwania domen zawodzi dla użytkowników nieściśle zalogowanych podczas realizacji zamówienia
* **Naprawiono:** AJAX cen domen zawodzi dla użytkowników nieściśle zalogowanych podczas realizacji zamówienia
* **Naprawiono:** Fatalny błąd redeklaracji klasy Spyc podczas uruchamiania poleceń WP-CLI
* **Naprawiono:** Timeout API sandbox Namecheap zbyt krótki
* **Naprawiono:** Tekst przycisku wyszukiwania domen nie był widoczny na zielonym tle
* **Naprawiono:** Rejestracja domeny zawodzi z błędem „RegistrantFirstName is Missing” z powodu braku informacji kontaktowych
* **Naprawiono:** Rekord domeny utworzony z blog_id=0, gdy strona nie istniała jeszcze w momencie realizacji zamówienia
* **Naprawiono:** Ustawienia domyślnych TLD zwracane jako ciąg znaków zamiast sparsowanej tablicy
* **Usunięto:** Samodzielna strona administracyjna Zarządzanie Domenami — teraz obsługiwana przez główne strony domen

Wersja 1.0.0 - Wydana 2025-09-28

**Duże przepisanie dla Ultimate Multisite v2**

* **Nowość:** Całkowite przepisanie z nowoczesną architekturą PHP 7.4+
* **Nowość:** Bezproblemowa integracja z systemem koszyka Ultimate Multisite v2
* **Nowość:** Zarządzanie produktami domenowymi z elastycznymi opcjami cenowymi
* **Nowość:** Architektura obsługi wielu dostawców domen
* **Nowość:** Integracja automatycznego odnawiania i subskrypcji
* **Nowość:** Interfejs zarządzania domenami klientów
* **Nowość:** Monitorowanie i logi domen administracyjnych
* **Nowość:** Obsługa kuponów dla produktów domenowych
* **Nowość:** Kompleksowe zarządzanie ustawieniami
* **Nowość:** Kod źródłowy łatwy do rozszerzenia dla deweloperów
* **Ulepszenie:** Zaktualizowany dostawca OpenSRS z pełnym wsparciem funkcji
* **Ulepszenie:** Nowoczesny interfejs użytkownika zgodny z Ultimate Multisite v2
* **Naprawiono:** Cały kod v1 przestarzały zaktualizowany do standardów v2
* **Usunięto:** Kompatybilność z v1 (zmiana łamiąca)

### Poprzednie wersje (v1 Legacy)

### Wersja 0.0.3 - 20/08/2019

* Naprawiono: Niekompatybilność z Groundhogg CRM
* Uwaga: Było to ostatnie wydanie kompatybilne z v1

### Wersja 0.0.2 - 07/12/2018

* Naprawiono: Usunięte pole Klucz Licencyjny
* Naprawiono: Zakładki planów brakujące, gdy aktywny jest plugin funkcyjny
* Ulepszenie: Dodano przycisk pomijania w polu rejestracji

### Wersja 0.0.1 - Wydanie początkowe

* Podstawowa integracja OpenSRS dla WP Ultimo v1
* Proste wyszukiwanie i rejestracja domen
* Uprawnienia domen oparte na planach
