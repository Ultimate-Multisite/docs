---
title: Obsługa podatków
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Obsługa podatków

Ultimate Multisite ma moduł pobierania podatków wbudowany w nasz główny plugin, więc jeśli musisz pobierać podatki od sprzedaży w swoich planach, pakietach i usługach, możesz to łatwo zrobić bez konieczności instalowania jakichkolwiek dodatków.

Dla firm zlokalizowanych w Europie oferujemy **dodatek**, który dodaje narzędzia i funkcje, aby lepiej **wspierać zgodność z VAT**.

Ultimate Multisite nie składa deklaracji ani nie odprowadza podatków w Twoim imieniu do urzędu; po prostu pomagamy Ci pobrać odpowiednie podatki w momencie transakcji. **Nadal musisz odprowadzać podatki samodzielnie.**

## Włączanie pobierania podatków {#enabling-tax-collection}

Pobieranie podatków nie jest domyślnie włączone. Aby je włączyć, musisz przejść do **Ultimate Multisite > Ustawienia > Podatki** i przełączyć ustawienie Włącz podatki.

![Przełącznik Włącz podatki u góry strony ustawień podatków](/img/config/settings-taxes-enable.png)

Oto pełny widok strony ustawień podatków:

![Pełna strona ustawień podatków](/img/config/settings-taxes-full.png)

Możesz także wyświetlić ustawienia podatków dla poszczególnych produktów:

![Ustawienia podatków dla produktów](/img/config/settings-taxes.png)

### Podatek wykluczony vs. podatek wliczony {#tax-excluded-vs-tax-included}

Domyślnie wszystkie ceny Twoich produktów nie zawierają podatku, co oznacza, że podatki **nie są wliczone** w cenę produktu. Jeśli ustalimy, że klient powinien zapłacić podatki od danego zakupu, dodamy podatki **ponad** sumę częściową.

Jeśli wolisz, aby podatki były wliczone w cenę produktu, możesz to zrobić, włączając ustawienie **Podatek wliczony**.

![Wiersz przełącznika Podatek wliczony poniżej ustawienia Włącz podatki](/img/config/settings-taxes-inclusive.png)

Nie zapomnij **zapisać** wprowadzonych zmian.

###

## Tworzenie stawek podatkowych {#creating-tax-rates}

Po włączeniu pobierania podatków musisz utworzyć stawki podatkowe dla określonych lokalizacji za pomocą naszego edytora stawek podatkowych.

Możesz uzyskać dostęp do edytora, klikając przycisk **Zarządzaj stawkami podatkowymi** na pasku bocznym strony ustawień podatków.

![Link Zarządzaj stawkami podatkowymi w panelu Stawek podatkowych na stronie ustawień](/img/config/settings-taxes-manage-rates.png)

Na stronie edytora stawek podatkowych możesz dodać nowe stawki podatkowe, klikając przycisk **Dodaj nowy wiersz**.

![Tabela edytora stawek podatkowych z przyciskiem Dodaj nowy wiersz u góry](/img/config/tax-rates-editor.png)

Musisz nadać każdej stawce podatkowej **tytuł** (używany na fakturach). Następnie możesz wybrać **kraj** (wymagany), **stan/województwo** i **miasto** (oba opcjonalne), w których ten podatek będzie naliczany. Na koniec dodaj **stawkę podatku w procentach**.

### Kategorie podatkowe {#tax-categories}

Możesz także utworzyć wiele kategorii podatkowych, aby dodać różne stawki podatkowe dla różnych rodzajów produktów.

Kliknij **Dodaj nową kategorię podatkową**, następnie wpisz nazwę kategorii i naciśnij **Utwórz**.

![Przycisk Dodaj nową kategorię podatkową u góry edytora stawek podatkowych](/img/config/tax-categories-add.png)

![Pole wejściowe Nazwa kategorii podatkowej w oknie modalnym tworzenia kategorii](/img/config/tax-categories-create-modal.png)

Aby przeglądać kategorie, kliknij **Przełącz** i wybierz kategorię, do której chcesz dodać nowe podatki.

![Przycisk rozwijany Przełącz do zmiany między kategoriami podatkowymi](/img/config/tax-categories-switch.png)

![Menu rozwijane wyboru kategorii podatkowej pokazujące dostępne kategorie](/img/config/tax-categories-select.png)

Możesz ustawić kategorię podatkową dla konkretnego produktu, przechodząc do **strony edycji produktu**, a następnie do karty Podatki.

![Karta podatków produktu z kategorią podatkową i przełącznikiem opodatkowania](/img/config/product-taxes.png)

Na tym samym ekranie możesz wyłączyć przełącznik **Czy podlega opodatkowaniu?**, aby poinformować Ultimate Multisite, że nie powinien pobierać podatków od danego produktu.

## Wsparcie dla europejskiego VAT {#european-vat-support}

Jak wspomniano wcześniej, mamy dostępny dodatek dla klientów w UE, którzy mają dodatkowe wymagania wynikające z europejskich przepisów VAT.

Nasze narzędzia VAT pomagają w kilku ważnych kwestiach:

  * Łatwe ładowanie stawek VAT UE;

  * Pobieranie i weryfikacja numeru VAT — oraz odwrotne obciążenie dla podmiotów zwolnionych z VAT (takich jak firmy z ważnymi numerami VAT);

Aby zainstalować ten dodatek, przejdź do **Ultimate Multisite > Ustawienia**, a następnie kliknij link na pasku bocznym **Sprawdź nasze dodatki**.

![Pasek boczny strony ustawień z linkiem Sprawdź nasze dodatki](/img/config/settings-taxes-addons-link.png)

Zostaniesz przekierowany na naszą stronę dodatków. Tam możesz wyszukać **dodatek Ultimate Multisite VAT** i go zainstalować.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Następnie przejdź do **Administrator sieci > Wtyczki** i aktywuj ten dodatek w całej sieci.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Jeśli wrócisz do **karty Ustawienia podatków**, zobaczysz dostępne nowe opcje. Przełącz opcję **Włącz wsparcie VAT**, aby włączyć nowe narzędzia VAT. Nie zapomnij **zapisać** swoich ustawień!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pobieranie stawek podatku VAT {#pulling-on-vat-tax-rates}

Jednym z narzędzi dodawanych przez naszą integrację jest możliwość ładowania stawek podatkowych dla państw członkowskich UE. Można to zrobić, odwiedzając stronę edytora stawek podatkowych po włączeniu wsparcia VAT UE.

Na dole strony zobaczysz opcje pobierania VAT. Wybranie typu stawki i kliknięcie przycisku **Aktualizuj stawki VAT UE** pobierze i automatycznie wypełni tabelę stawkami podatkowymi dla każdego państwa członkowskiego UE. Następnie wystarczy je zapisać.

![Przycisk Aktualizuj stawki VAT UE u dołu edytora stawek podatkowych](/img/config/tax-rates-vat-pull.png)

Możesz także edytować wartości po ich pobraniu. Aby to zrobić, po prostu edytuj potrzebny wiersz tabeli i kliknij, aby zapisać nowe wartości.

### Weryfikacja VAT {#vat-validation}

Gdy wsparcie VAT jest włączone, Ultimate Multisite doda dodatkowe pole do formularza płatności, poniżej pola adresu rozliczeniowego. Pole pojawi się tylko dla klientów zlokalizowanych w UE.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite zweryfikuje następnie numer VAT i jeśli okaże się on prawidłowy, zostanie zastosowany mechanizm odwrotnego obciążenia, a stawka podatku dla tego zamówienia zostanie ustawiona na 0%.
