---
title: Informacje o wydaniu
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Informacje o wydaniu

## Wersja 2.13.0 — wydana 2026-06-05

- Nowe: Dodano obsługę tenantów suwerennych dla przepływów konta klienta, checkout, rozliczeń, witryny, faktury, przełączania szablonów i mapowania domen, aby sieci tenantów mogły kierować klientów z powrotem do głównej witryny w celu wykonania działań zarządzanych.
- Nowe: Dodano kontrole danych uwierzytelniających odnowienia dla cyklicznych członkostw, aby bramki mogły wyłączać automatyczne odnowienie, gdy brakuje zapisanego porozumienia rozliczeniowego, subskrypcji lub tokenu sejfu.
- Nowe: Dodano publikowanie zwrotne weryfikowane HMAC dla oczekującego tworzenia witryn, aby provisioning od checkout do witryny był bardziej niezawodny na hostingach, gdzie zadania w tle są opóźnione.
- Nowe: Dodano punkty rozszerzeń dla deweloperów dla adresów URL SSO, domen bazowych formularza checkout i automatycznego tworzenia rekordów domen.
- Poprawka: SSO jest bardziej niezawodne w domenach mapowanych, anonimowych wizytach brokera, wylogowaniu i konfliktach zależności między pluginami.
- Poprawka: Oczekujące tworzenie witryny odzyskuje teraz działanie po przestarzałych flagach publikowania i zapobiega utknięciu klientów na ekranie tworzenia witryny.
- Poprawka: Rekordy domen nie są już tworzone dla współdzielonych domen bazowych formularza checkout, a nieużywane zadania w tle dostawcy hostingu są pomijane, gdy żadna integracja nie jest aktywna.
- Poprawka: Przypadki brzegowe checkout, adresu rozliczeniowego, resetowania hasła, weryfikacji e-mail, przełączania szablonów, wycieczek i dashboardu klienta nie blokują już normalnych przepływów klienta.
- Poprawka: E-maile rozsyłane masowo zachowują teraz prywatność odbiorców, jednocześnie unikając błędów krytycznych SMTP/pluginu, gdy listy odbiorców lub transporty poczty zawiodą.
- Poprawka: Przypadki brzegowe odnowień członkostwa, wyświetlania wygaśnięcia i pobierania płatności unikają teraz natychmiastowych wygaśnięć, awarii lub pominiętych wymaganych płatności.
- Ulepszono: Zgodność z WordPress jest testowana do wersji 7.0, produkcyjne zasoby Vue są przebudowywane ze źródeł npm, a pokrycie end-to-end Cypress obejmuje teraz więcej przepływów checkout, konfiguracji, SSO i bramek.

## Wersja 2.12.0 — wydana 2026-05-15

- Nowe: Dodano Hostinger (hPanel) jako obsługiwanego dostawcę hostingu z integracją mapowania domen
- Nowe: Eksporter witryn obsługuje teraz pakiety importu sieciowego w celu usprawnionego przywracania witryn w całej sieci
- Poprawka: E-maile rozsyłane masowo BCC używają teraz nagłówka undisclosed-recipients, aby zapobiec ujawnianiu adresów odbiorców
- Poprawka: Data wygaśnięcia członkostwa nie jest już uszkadzana podczas zapisywania z wartością niebędącą datą
- Poprawka: Aktualizacje członkostwa Stripe poprawnie usuwają teraz rabaty bez wywoływania przestarzałego API deleteDiscount
- Poprawka: Przekierowania SSO na witrynach z mapowanymi domenami są teraz ograniczane, aby zapobiec nieskończonym pętlom przekierowań
- Poprawka: Wybór w selektorze obrazów kreatora konfiguracji poprawnie aktualizuje teraz podstawowy model danych
- Poprawka: CLI Eksportera witryn zachowuje teraz poprawny domyślny wybór witryny sieciowej
- Ulepszono: Usunięto dołączony wp-cli z pakietu pluginu, zmniejszając rozmiar pluginu

## Wersja 2.11.0 — wydana 2026-05-11

- Nowe: Eksporty witryn pakują teraz samouruchamiający się `index.php`, dzięki czemu ZIP można zainstalować na świeżym hostingu bez osobnej instalacji pluginu.
- Nowe: Eksport sieci pozwala administratorom eksportować wszystkie podwitryny w jednym archiwum ze strony administracyjnej Eksportu witryny.
- Nowe: Przełącznik planu Zezwól na szablony witryn jest teraz wymuszany przez łańcuch awaryjny, poprawnie ograniczając dostępność szablonów dla limitów planu.
- Nowe: Edytor formularza checkout ostrzega, gdy produkt zostanie dodany bez skonfigurowanego wymaganego pola.
- Nowe: Karta ustawień Import/Eksport jasno opisuje teraz swój zakres i linkuje bezpośrednio do narzędzia Eksport witryny.

## Wersja 2.10.0 — wydana 2026-05-05

- Nowe: Prowadzony kreator konfiguracji PayPal do ręcznego wprowadzania danych uwierzytelniających z bramką flagi OAuth dla płynnej konfiguracji bramki.
- Nowe: Panel klienta przełączania szablonu przeprojektowany z kartą bieżącego szablonu, trwałą siatką i przyciskiem **Resetuj bieżący szablon**.
- Poprawka: Przełączanie szablonu nie zawiesza już UI przy niepowodzeniu AJAX.
- Poprawka: Stany uprawnień przełączania szablonu zabezpieczone przed nieautoryzowanym dostępem.
- Poprawka: Dane wejściowe nadpisania witryny weryfikowane przed zapisaniem.
- Poprawka: Monit o adres rozliczeniowy jest teraz pokazywany, gdy adres jest pusty.
- Poprawka: Rozwiązano powiadomienia o przestarzałej konwersji null na string w PHP 8.1.
- Poprawka: Currents ładowane leniwie przed hookiem init, aby zapobiec problemom z timingiem.
- Poprawka: Filtrowana ścieżka SSO respektowana we wszystkich przepływach logowania.
- Poprawka: Puste opcje tożsamości witryny zachowywane przy zapisie.

## Wersja 2.9.0 — wydana 2026-04-30

- Nowe: Eksport i import pojedynczej witryny dodano w **Narzędzia > Eksport i import**.
- Poprawka: Pliki ZIP eksportu są teraz serwowane przez uwierzytelniony endpoint pobierania.
- Poprawka: Naprawiono ryzyko wstrzyknięcia SQL i problemy z zapytaniami w zapytaniach oczekującego eksportu/importu.
- Poprawka: Oczekująca witryna nie była publikowana, gdy administrator ręcznie weryfikuje e-mail klienta.
- Poprawka: Osierocone rekordy pending_site są czyszczone, gdy brakuje członkostwa.
- Poprawka: Poprawiono padding nawigacji ustawień i nawigację kotwic wyszukiwania.
- Poprawka: Oczekujące witryny są teraz pokazywane jako pierwsze w widoku Wszystkie witryny.
- Poprawka: Dodano nagłówek User-Agent dostawcy zrzutów ekranu (mShots), aby zapobiec błędom 403.
- Poprawka: Rozwiązano cykliczną zależność harmonogramu cron importu.
- Poprawka: ID wycieczek znormalizowane do podkreśleń w kluczach ustawień użytkownika.
- Ulepszono: ZipArchive jest teraz używany zamiast Alchemy/Zippy dla lepszej zgodności.

## Wersja 2.8.0 — wydana 2026-04-29

- Nowe: przełącznik Enable Jumper dodany do UI ustawień Other Options.
- Nowe: kolumna Status dodana do tabeli listy formularzy checkout.
- Nowe: loader pliku sunrise dodatku dla niestandardowych rozszerzeń sunrise MU-plugin.
- Ulepszone: usunięto ustawienie zgody na raportowanie błędów ze strony ustawień.
- Poprawka: karta site na stronie podziękowania — obraz jest teraz ograniczony, a linki poprawnie ostylowane.
- Poprawka: dostawca zrzutów ekranu zmieniony z thum.io na WordPress.com mShots.
- Poprawka: Enable Registration i Default Role ustawiają teraz poprawne wartości domyślne przy świeżej instalacji.
- Poprawka: `get_site_url()` nie zwraca już pustej wartości, gdy domena zawiera port.
- Poprawka: pliki mediów klonowania są teraz kopiowane poprawnie, gdy ustawienie `copy_media` było puste.
- Poprawka: pamięć podręczna obiektów poprawnie unieważniana po zapisie sitemeta przy aktywacji sieciowej.
- Poprawka: domena niestandardowa automatycznie promowana do głównej po weryfikacji DNS dla domen 3-częściowych.
- Poprawka: oczekujące członkostwo anulowane, gdy wygasła płatność zostaje wyczyszczona.
- Poprawka: kontroler siły hasła ponownie podpinany po zamknięciu inline monitu logowania.
- Poprawka: zatrzymano nieskończone przeładowywanie strony podziękowania, gdy site jest już utworzony.
- Poprawka: opcja rejestracji rdzenia WP synchronizowana przy aktywacji pluginu i zapisie ustawień.
- Poprawka: dodano zabezpieczenie przed wartością null dla wygaśnięcia w `calculate_expiration` dla zgodności z PHP 8.4.
- Poprawka: zablokowano zduplikowane rejestracje, gdy klient ma już aktywne członkostwo.
- Poprawka: dodano sprawdzenie null dla `date_expiration` w checkout.
- Poprawka: wzmocniono udostępnianie site — ograniczenia, wnioskowanie członkostwa, promowanie domeny.
- Poprawka: etykieta statusu kontroli przedinstalacyjnej poprawiona na NOT Activated, gdy kontrola się nie powiedzie.
- Poprawka: domena checkout używana dla adresów URL weryfikacji e-maila.
- Poprawka: automatyczne logowanie po checkout, gdy nie ma pola hasła.
- Poprawka: darmowe członkostwa już nie wygasają — traktowane jako dożywotnie.
- Poprawka: bramka weryfikacji e-maila wstrzymuje publikację site do czasu, aż klient zweryfikuje e-mail.
- Poprawka: poprawiono bazową ścieżkę endpointu SES v2 API i trasę tożsamości.
- Poprawka: hook `wu_inline_login_error` emitowany w bloku catch przed wysłaniem.
