---
title: Dziennik zmian Twórcy Strony Administracyjnej
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Zmiany w Admin Page Creator

### Wersja 1.9.0 - Wydana 2026-01-18

* Naprawiono: Błędy krytyczne (Fatal errors) podczas aktywacji.
* Przebudowano: Klasy źródła treści, aby używać cechy Singleton z prawidłową inicjalizacją konstruktora rodzica.
* Naprawiono: Błędy kompilacji szablonów Vue.js, które uniemożliwiały wyświetlanie selektora typu treści.
* Naprawiono: Brakujące właściwości danych Vue (template_id, external_link_url_embedable, external_link_url_checking).
* Naprawiono: Edytor TinyMCE nie inicjalizował się poprawnie po załadowaniu strony.
* Naprawiono: Plik wsparcia dla Divi nie był automatycznie ładowany za pomocą Composer.
* Naprawiono: Uszkodzona składnia PHP w klasie wsparcia Divi.
* Ulepszono: Organizacja i minifikacja zasobów JavaScript.
* Ulepszono: Kompatybilność z najnowszymi wersjami WordPress i page builderów.

= Wersja: 1.8.8 - Wydana 2025-09-28

* Zmieniono prefiks na ultimate-multisite; zaktualizowano domena tekstu; zwiększono numer wersji.

### Wersja 1.8.7 - 04/10/2023

* Naprawiono: Błąd krytyczny podczas próby dodania nowej strony admina;
* Naprawiono: Konflikt z prefiksem stylów Oxygen;

### Wersja 1.8.6 - 09/08/2023

* Dodano: Opcję wyświetlania danych z głównej witryny lub bieżącej podstrony.
* Dodano: Wsparcie dla edytora bloków WordPress (Gutenberg).
* Naprawiono: Naprawiono problem z nieładowaniem zasobów stron Brizy.

### Wersja 1.8.5 - 09/12/2020

* Naprawiono: Problem z ustawieniami ekranu (Screen Options), polegający na tym, że ukrycie menu nie znikało;

### Wersja 1.8.4 - 11/11/2020

* Naprawiono: Wsparcie dla Ultimate Multisite v2;

### Wersja 1.8.3 - 01/10/2020

* Naprawiono: Niekompatybilności z Beaver Builder z poprzedniej wersji;
* Naprawiono: Niespójności marginesów z WP 5.5;

### Wersja 1.8.2 - 21/09/2020

* Naprawiono: Małe niekompatybilności z WP 5.5;

### Wersja 1.8.1 - 05/08/2020

* Naprawiono: Niekompatybilność z Brizy 2.0;
* Naprawiono: Małe problemy z wydajnością podczas budowania listy menu;

### Wersja 1.8.0 - 27/04/2020

* Naprawiono: Powiadomienia ukrywane były pod paskiem górnym, gdy nie było wybrane żadne tryb marginesu;
* Dodano: Spersonalizowane strony mogą teraz zastępować wiele stron administracyjnych i podstron WordPress jednocześnie;
* Dodano: Administratorzy mogą teraz ukrywać strony admina za pomocą WP Admin Pages PRO;

### Wersja 1.7.9 - 01/04/2020

* Naprawiono: Brizy 1.10.118 i nowsze łamały wsparcie SVG na stronach admina;

### Wersja 1.7.8 - 26/03/2020

* Naprawiono: Błąd ucieczki (Escaping error) łamiący stronę edytora przy użyciu języka francuskiego;

### Wersja 1.7.7 - 04/03/2020

* Naprawiono: Mała niekompatybilność z Brizy Builder;
* Ulepszono: Zaktualizowano Freemius SDK do wersji 2.3.2;

### Wersja 1.7.6 - 10/02/2020

* Naprawiono: Przycisk edycji strony admina w prawym dolnym rogu nie działał na Widget Dashboard;
* Naprawiono: Mała niekompatybilność z Astra;
* Naprawiono: Nowa wersja Brizy łamała kompatybilność;

### Wersja 1.7.5 - 14/12/2019

* Naprawiono: Dodano nowy obsługa przypadku brzegowego (edge-case handler) do wypełniania elementów menu w opcji Zastąp Stronę;
* Naprawiono: Fonty Elementor nie działały;
* Ulepszono: Zaktualizowano Freemius SDK, aby wspierać ukrywanie wrażliwych informacji ze strony Account;

### Wersja 1.7.4 - 29/11/2019

* Naprawiono: Niekompatybilność z WooCommerce Memberships;
* Naprawiono: Komponent zakładki Oxygen Builder nie działał;
* Naprawiono: Beaver Themer nie działał;

### Wersja 1.7.3 - 12/07/2019

* Naprawiono: Strony znikały, gdy ich rodzic był konwertowany na inny typ strony admina;
* Ulepszono: Lepsze separatory tabeli listy między typami stron admina;
* Ulepszono: Przegląd bezpieczeństwa całego kodu pluginu;
* Ulepszono: Uwaga na ostrzeżenie w zakładce Separator, gdy funkcja nie jest dostępna dla danego typu menu/źródła treści;

### Wersja 1.7.2 - 01/07/2019

* Naprawiono: Zaktualizowano wersję Freemius SDK do 2.3.0;
* Naprawiono: Problem z niekompatybilnością z Flywheel;

### Wersja 1.7.1 - 27/06/2019

* Naprawiono: Widget Powitalny (Welcome Widget) jest teraz wyświetlany dla wszystkich ról;
* Naprawiono: Opcja ukrywania/wyświetlania menu Admin Pages nie jest dodawana, jeśli menu jest ukrywane za pomocą filtra udokumentowanego na https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Ulepszono: Ukrywanie menu Admin Pages teraz ukrywa również szablony utworzone ze spisu szablonów zapisanych w Beaver Builder na interfejsie builder;
* Dodano: Opcje masowego aktywowania i dezaktywowania stron admina;
* Dodano: Opcja wyświetlania stron na głównej witrynie.
* Dodano: Opcja zmiany nazwy etykiet menu na poziomie głównym i podrzędnym w trybie Zastąp.

### Wersja 1.7.0 - 04/06/2019

* Naprawiono: Problemy z niepokazywaniem się szablonów Oxygen;
* Dodano: Wsparcie dla tworzenia Widgetów!

### Wersja 1.6.1 - 22/05/2019

* Naprawiono: Literówki;
* Naprawiono: Podmenu nadpisywało poprzednie elementy podmenu o tym samym wartościowaniu porządku;
* Naprawiono: Duplikacja teraz resetuje slug duplikowanej strony;
* Ulepszono: Zaktualizowano pliki po pt_BR i es_ES;
* Ulepszono: Lista tabeli teraz wymienia również nazwę spersonalizowanych stron jako strony rodzicielskie.

### Wersja 1.6.0 - 21/05/2019

* Dodano: Linki zewnętrzne teraz wspierają ładowanie iframe.

### Wersja 1.5.5 - 17/05/2019

* Naprawiono: Wyświetlano ostrzeżenie, gdy strona została usunięta lub zduplikowana;
* Naprawiono: Ustawienia uprawnień nie były stosowane do administratorów;

### Wersja 1.5.4 - 08/05/2019

* Naprawiono: Niekompatybilności ze Sliced Invoices;
* Naprawiono: Mały problem z Oxygen;
* Naprawiono: Placeholder w nowym polu tytułu strony admina nie znikał podczas wpisywania tekstu (key-up);

### Wersja 1.5.3 - 03/05/2019

* Naprawiono: Niekompatybilność z opcjami stron Advanced Custom Field;
* Dodano: Opcja dodawania konkretnych użytkowników jako celów spersonalizowanych stron admina;

### Wersja 1.5.2 - 30/04/2019

* Naprawiono: Niekompatybilności z nowszymi wersjami Brizy;
* Dodano: Dodano tłumaczenie na język hiszpański – dzięki Johnowi Rozzo. Dziękujemy, John!
* Dodano: Beta wsparcie dla Oxygen Builder;

### Wersja 1.5.1 - 15/04/2019

* Naprawiono: Problem z placeholderami w edytorach Normal i HTML;
* Naprawiono: Admin Pages nie wyświetlały się w Tools -> Export;
* Naprawiono: Ładowanie skryptów i stylów tylko na naszych stronach;
* Dodano: Super Admini mogą teraz duplikować strony Admina;

### Wersja 1.5.0 - 29/03/2019

* Naprawiono: Małe błędy wykryte przez Sentry;
* Naprawiono: Przycisk Usuń nie działał na ekranie Edytuj Stronę Admina;
* Ulepszono: Zmieniono przycisk BeaverBuilder, aby było jasne, że wspierana jest również standardowa licencja BB;
* Dodano: Administratorzy mogą również ustawiać kolejność podmenu;
* Dodano: Tryb Zastąp ma teraz wsparcie dla wszystkich dostępnych elementów menu;

### Wersja 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Dodano: Uruchomiono jako plugin stand-alone na https://wpadminpagespro.com
* Dodano: Opcja usuwania elementu menu Admin Pages z menu po zakończeniu procesu tworzenia strony;
* Dodano: Opcja usuwania powiadomień admina ze stron admina;
* Dodano: Przetwarzanie treści, dzięki czemu można umieścić placeholder'y takie jak {{user:first_name}} i automatycznie zastąpić je metadanymi imienia użytkownika;
* Dodano: Edytor w linii (Inline Editor);
* Dodano: Skonsolidowana klasa rodzicielska źródła treści, aby ułatwić dodawanie nowych Page Builderów/Źródeł Treści w przyszłości;
* Dodano: Wsparcie dla zewnętrznych URL-i;

### Wersja 1.3.0 - 15/01/2019

* Naprawiono: Admin Pages nie pojawiały się na głównej witrynie w środowiskach multisite;
* Ulepszono: Usunięto niestandardowe typy treści Multisite Ultimate ze ekranu eksportu podstron;
* Dodano: Pasek górny z szybkimi akcjami dla administratorów sieci na stronach tworzenia;
* Dodano: OGROMNE! Wsparcie dla Elementor!
* Dodano: OGROMNE! Wsparcie dla Brizy!

### Wersja 1.2.1 - 17/11/2018

* Naprawiono: Uczyniono plugin kompatybilnym z Multisite Ultimate 1.9.0;

### Wersja 1.2.0 - 10/09/2018

* Dodano: Wsparcie PHP, jeśli WU_APC_ALLOW_PHP_PROCESSING jest ustawione na true w pliku wp-config.php. Nie używa to eval PHP, ale nadal może prowadzić do luk bezpieczeństwa. Używaj tego ostrożnie;
* Ulepszono: Aktualizator pluginu add-on;
* Ulepszono: Nowy URL dla serwera aktualizacji;

### Wersja 1.1.2 - 16/08/2018

* Naprawiono: Mały problem z WP Engine;

### Wersja 1.1.1 - 16/08/2018

* Naprawiono: Uprawnienia nie były poprawnie stosowane do stron zastępczych;

### Wersja 1.1.0 - 15/08/2018

* Dodano: Teraz wspierane są szablony Beaver Builder! Możesz używać swojego ulubionego page buildera do tworzenia spersonalizowanych stron admina;
* Dodano: Teraz jest możliwe zastąpienie treści domyślnych stron admina WordPress;
* Dodano: Teraz jest możliwe dołączenie stworzonej treści do góry lub do dołu domyślnych stron admina WordPress;

### 0.0.1
- Wydanie początkowe
