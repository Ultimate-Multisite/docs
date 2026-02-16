---
title: Obsługa podatków
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Obsługa podatków

Ultimate Multisite ma wbudowany moduł pobierania podatków w głównej wtyczce, więc jeśli musisz pobierać podatki od sprzedaży swoich planów, pakietów i usług, możesz to łatwo zrobić bez instalowania dodatkowych rozszerzeń.

Dla firm z siedzibą w Europie oferujemy **dodatek**, który dodaje narzędzia i funkcje ułatwiające **zgodność z przepisami VAT**.

Ultimate Multisite nie składa deklaracji podatkowych ani nie odprowadza podatków w Twoim imieniu do urzędu skarbowego — po prostu pomagamy Ci pobrać odpowiednie podatki w momencie transakcji. **Nadal musisz samodzielnie odprowadzać podatki.**

## Włączanie pobierania podatków

Pobieranie podatków nie jest domyślnie włączone. Aby je włączyć, przejdź do **Ultimate Multisite > Ustawienia > Podatki** i włącz opcję Włącz podatki.

![Przełącznik Włącz podatki w ustawieniach podatkowych](/img/config/settings-taxes.png)

### Ceny bez podatku vs. ceny z podatkiem

Domyślnie wszystkie ceny produktów są podane bez podatku, co oznacza, że podatki **nie są wliczone** w cenę produktu. Jeśli ustalimy, że klient powinien zapłacić podatek od danego zakupu, dodamy podatek **do sumy częściowej**.

Jeśli wolisz, aby podatki były wliczone w cenę produktu, możesz to zrobić, włączając opcję **Cena z podatkiem**.

![Przełącznik opcji Cena z podatkiem](/img/config/settings-taxes.png)

Nie zapomnij **zapisać** wprowadzonych zmian.

### 

## Tworzenie stawek podatkowych

Po włączeniu pobierania podatków musisz utworzyć stawki podatkowe dla konkretnych lokalizacji za pomocą naszego edytora stawek podatkowych.

Możesz otworzyć edytor, klikając przycisk **Zarządzaj stawkami podatkowymi** na pasku bocznym strony ustawień podatków.

![Przycisk Zarządzaj stawkami podatkowymi na pasku bocznym](/img/config/settings-taxes.png)

Na stronie edytora stawek podatkowych możesz dodać nowe stawki, klikając przycisk **Dodaj nowy wiersz**.

![Edytor stawek podatkowych z przyciskiem Dodaj nowy wiersz](/img/config/settings-taxes.png)

Każda stawka podatkowa musi mieć **nazwę** (używaną na fakturach). Następnie możesz wybrać **kraj** (wymagany), **województwo/stan** i **miasto** (oba opcjonalne), gdzie ten podatek będzie naliczany. Na koniec dodaj **stawkę podatkową w procentach**.

### Kategorie podatkowe

Możesz również tworzyć wiele kategorii podatkowych, aby dodawać różne stawki podatkowe dla różnych rodzajów produktów.

Kliknij **Dodaj nową kategorię podatkową**, następnie wpisz nazwę kategorii i naciśnij **Utwórz**.

![Przycisk Dodaj nową kategorię podatkową](/img/config/settings-taxes.png)

![Tworzenie nowej kategorii podatkowej](/img/config/settings-taxes.png)

Aby przeglądać kategorie, kliknij **Przełącz** i wybierz kategorię, do której chcesz dodać nowe podatki.

![Przełączanie między kategoriami podatkowymi](/img/config/settings-taxes.png)

![Wybieranie kategorii podatkowej do wyświetlenia](/img/config/settings-taxes.png)

Możesz ustawić kategorię podatkową dla konkretnego produktu, przechodząc do **strony edycji produktu**, a następnie do zakładki Podatki.

![Zakładka podatków produktu z kategorią podatkową i przełącznikiem opodatkowania](/img/config/product-taxes.png)

Na tym samym ekranie możesz wyłączyć przełącznik **Czy podlega opodatkowaniu?**, aby poinformować Ultimate Multisite, że nie powinien pobierać podatków od tego produktu.

## Obsługa europejskiego VAT

Jak wspomniano wcześniej, mamy dostępny dodatek dla klientów w UE, którzy mają dodatkowe wymagania wynikające z europejskich przepisów VAT.

Nasze narzędzia VAT pomagają w kilku ważnych kwestiach:

  * Łatwe ładowanie stawek VAT UE;

  * Pobieranie i walidacja numeru VAT — oraz mechanizm odwrotnego obciążenia dla podmiotów zwolnionych z VAT (takich jak firmy z ważnymi numerami VAT);

Aby zainstalować ten dodatek, przejdź do **Ultimate Multisite > Ustawienia**, a następnie kliknij link **Sprawdź nasze dodatki** na pasku bocznym.

![Strona ustawień z linkiem do dodatków na pasku bocznym](/img/config/settings-taxes.png)

Zostaniesz przekierowany na naszą stronę z dodatkami. Tam możesz wyszukać **Ultimate Multisite VAT add-on** i zainstalować go.

![Dodatek VAT na stronie dodatków](/img/config/settings-taxes.png)

![Okno instalacji dodatku VAT](/img/config/settings-taxes.png)

Następnie przejdź do **Administracja sieci > Wtyczki** i aktywuj ten dodatek dla całej sieci.

![Aktywacja sieciowa dodatku VAT](/img/config/settings-taxes.png)

Jeśli wrócisz do **zakładki Ustawienia podatków**, zobaczysz nowe dostępne opcje. Włącz opcję **Włącz obsługę VAT**, aby aktywować nowe narzędzia VAT. Nie zapomnij **zapisać** ustawień!

![Przełącznik Włącz obsługę VAT w ustawieniach podatkowych](/img/config/settings-taxes.png)

### Pobieranie stawek VAT

Jednym z narzędzi, które dodaje nasza integracja, jest możliwość załadowania stawek podatkowych dla państw członkowskich UE. Można to zrobić, odwiedzając stronę edytora stawek podatkowych po włączeniu obsługi VAT UE.

Na dole strony zobaczysz opcje pobierania VAT. Wybranie typu stawki i kliknięcie przycisku **Aktualizuj stawki VAT UE** pobierze i automatycznie wypełni tabelę stawkami podatkowymi dla każdego państwa członkowskiego UE. Następnie wystarczy je zapisać.

### ![Opcje pobierania stawek VAT z przyciskiem Aktualizuj stawki VAT UE](/img/config/settings-taxes.png)

Możesz również edytować wartości po ich pobraniu. Aby to zrobić, po prostu edytuj potrzebny wiersz tabeli i kliknij, aby zapisać nowe wartości.

### Walidacja VAT

Gdy obsługa VAT jest włączona, Ultimate Multisite doda dodatkowe pole do formularza zamówienia, poniżej pola adresu rozliczeniowego. Pole pojawi się tylko dla klientów znajdujących się w UE.

![Pole numeru VAT w formularzu zamówienia](/img/config/settings-taxes.png)

Ultimate Multisite zweryfikuje numer VAT i jeśli okaże się prawidłowy, zostanie zastosowany mechanizm odwrotnego obciążenia, a stawka podatkowa dla tego zamówienia zostanie ustawiona na 0%.
