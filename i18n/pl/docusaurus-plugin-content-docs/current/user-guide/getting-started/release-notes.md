---
title: Notatki wydania
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Notatki wydania

## Wersja 2.12.0 — Wydano 2026-05-15

- Nowość: Dodano Hostinger (hPanel) jako obsługiwanego dostawcę hostingu z integracją mapowania domen.
- Nowość: Site Exporter teraz obsługuje pakiety importu sieciowego, co usprawnia przywracanie stron na poziomie całej sieci.
- Poprawka: E-maile rozsyłane przez BCC używają teraz nagłówka undisclosed-recipients, aby zapobiec ujawnieniu adresów odbiorców.
- Poprawka: Data wygaśnięcia członkostwa nie jest już uszkadzana podczas zapisywania z wartościami niebędącymi datami.
- Poprawka: Aktualizacje członkostwa Stripe poprawnie usuwają zniżki bez wywoływania przestarzałego API deleteDiscount.
- Poprawka: Przekierowania SSO na stronach z mapowaną domeną są teraz ograniczone, aby zapobiec nieskończonym pętlom przekierowań.
- Poprawka: Wybór w edytorze obrazów w kreatorze ustawień poprawnie aktualizuje podstawowy model danych.
- Poprawka: Site Exporter CLI teraz zachowuje prawidłowy domyślny wybór strony sieciowej.
- Ulepszenie: Usunięto pakiet wp-cli z pakietu pluginu, co zmniejszyło rozmiar pluginu.

## Wersja 2.11.0 — Wydano 2026-05-11

- Nowość: Eksporty stron teraz pakują samodzielnie uruchamiający się `index.php`, dzięki czemu plik ZIP można zainstalować na świeżym hoście bez osobnej instalacji pluginu.
- Nowość: Eksport sieciowy pozwala administratorom na eksport wszystkich podstron w jednym archiwum z panelu administracyjnego Site Export.
- Nowość: Przełączanie planu Site Templates jest teraz egzekwowane za pomocą łańcucha zapasowego, co prawidłowo ogranicza dostępność szablonów w zależności od limitów planu.
- Nowość: Edytor formularzy płatności ostrzega, gdy produkt jest dodawany bez skonfigurowanego wymaganego pola.
- Nowość: Zakład ustawień Import/Eksport teraz jasno opisuje swój zakres i linkuje bezpośrednio do narzędzia Site Export.

## Wersja 2.10.0 — Wydano 2026-05-05

- Nowość: Przeprowadzono ulepszenia w kreatorze ustawień PayPal dla ręcznego wprowadzania danych uwierzytelniających z bramą OAuth, co zapewnia płynną konfigurację bramki.
- Nowość: Panel klienta przełączania szablonów został przeprojektowany i zawiera kartę z bieżącym szablonem, trwałą siatkę oraz przycisk **Reset current template** (Resetuj bieżący szablon).
- Poprawka: Przełączanie szablonów nie zawiesza interfejsu użytkownika (UI) w przypadku awarii AJAX.
- Poprawka: Stany uprawnień do przełączania szablonów zabezpieczono przed nieautoryzowanym dostępem.
- Poprawka: Wprowadzane dane nadpisujące strony są walidowane przed zapisaniem.
- Poprawka: Okienko z prośbą o adres rozliczeniowy jest teraz wyświetlane, gdy adres jest pusty.
- Poprawka: Rozwiązano problemy z ostrzeżeniami o deprecjacji typu null-to-string w PHP 8.1.
- Poprawka: Currents jest ładowany leniwie przed hookiem init, aby zapobiec problemom czasowym.
- Poprawka: Filtrowana ścieżka SSO jest respektowana we wszystkich przepływach logowania.
- Poprawka: Opcje identyfikacji dla pustych stron są zachowywane podczas zapisywania.

## Wersja 2.9.0 — Wydano 2026-04-30

- Nowość: Dodano eksport i import pojedynczej strony w sekcji **Tools > Export & Import**.
- Poprawka: Pliki ZIP eksportu są teraz udostępniane przez autoryzowany punkt końcowy pobierania.
- Poprawka: Naprawiono ryzyko iniekcji SQL oraz problemy z zapytaniami w oczekujących eksportach/importach.
- Poprawka: Strona oczekująca nie jest publikowana, gdy administrator ręcznie weryfikuje e-mail klienta.
- Poprawka: Usunięto porzucone rekordy pending_site, gdy brakuje członkostwa.
- Poprawka: Naprawiono padding nawigacji ustawień oraz nawigację kotwicową wyszukiwania.
- Poprawka: Strony oczekujące są teraz wyświetlane jako pierwsze w widoku Wszystkie Strony.
- Poprawka: Dodano nagłówek User-Agent dostawcy zrzutów ekranu (mShots), aby zapobiec błędom 403.
- Poprawka: Rozwiązano cykl zależności w harmonogramie cron importu.
- Poprawka: ID tur zostały znormalizowane do podkreślników w kluczach ustawień użytkownika.
- Ulepszenie: Zamiast Alchemy/Zippy użyto teraz ZipArchive, co zapewnia lepszą kompatybilność.

## Wersja 2.8.0 — Wydano 2026-04-29

- Nowość: Dodano przełącznik Jumper w interfejsie ustawień Other Options.
- Nowość: Dodano kolumnę Status w tabeli list formularzy płatności.
- Nowość: Dodano ładowanie plików sunrise dla niestandardowych rozszerzeń MU-plugin sunrise.
- Ulepszenie: Usunięto opcję zgody na raportowanie błędów ze strony ustawień.
- Poprawka: Karta strony na stronie z podziękowaniem — obraz jest teraz ograniczony, a linki stylizowane poprawnie.
- Poprawka: Dostawca zrzutów ekranu zmieniony z thum.io na WordPress.com mShots.
- Poprawka: Enable Registration i Default Role ustawiają teraz poprawne domyślne wartości przy świeżej instalacji.
- Poprawka: `get_site_url()` nie zwraca już pustego, gdy domena zawiera port.
- Poprawka: Pliki multimedialne klonowane są teraz poprawnie, gdy ustawienie `copy_media` było puste.
- Poprawka: Cache obiektów jest poprawnie wyczyszczany po zapisie sitemeta network-activate.
- Poprawka: Domeny niestandardowe są automatycznie promowane do głównej po weryfikacji DNS dla domen składających się z 3 części.
- Poprawka: Członkostwo oczekujące jest anulowane, gdy wygasły płatności są czyszczone.
- Poprawka: Sprawdzacz siły hasła jest ponownie przypisywany po zamknięciu okienka logowania w linii.
- Poprawka: Zapobieganie nieskończonemu odświeżaniu strony na stronie z podziękowaniem, gdy strona została już utworzona.
- Poprawka: Opcja rejestracji WP core jest synchronizowana po aktywacji pluginu i zapisaniu ustawień.
- Poprawka: Dodano ochronę przed wartościami null w `calculate_expiration` dla kompatybilności z PHP 8.4.
- Poprawka: Podwójne rejestracje są blokowane, gdy klient ma już aktywne członkostwo.
- Poprawka: Dodano sprawdzenie null dla `date_expiration` w płatności.
- Poprawka: Ulepszono proces udostępniania stron — ograniczenia, wnioskowanie o członkostwo, promocja domeny.
- Poprawka: Status etykiety sprawdzenia wstępnej instalacji został poprawiony na NOT Activated, gdy sprawdzenie się nie powiodło.
- Poprawka: Domenę płatności używa się do adresów URL weryfikacji e-mail.
- Poprawka: Automatyczne logowanie po płatności, gdy nie ma pola na hasło.
- Poprawka: Członkostwa darmowe nie wygasają — traktowane jako na czas życia.
- Poprawka: Bramka weryfikacji e-mail zatrzymuje publikację strony, dopóki klient nie zweryfikuje e-maila.
- Poprawka: Poprawiono bazową ścieżkę API endpoint dla SES v2 oraz ścieżkę identyfikacji.
- Poprawka: Hook `wu_inline_login_error` jest emitowany w bloku przechwytywania pre-submit.
