---
title: Formularze realizacji transakcji
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formularze checkout

Formularze checkout to łatwy i elastyczny sposób eksperymentowania z różnymi podejściami podczas prób pozyskiwania nowych klientów.

Ultimate Multisite 2.0 oferuje edytor formularzy checkout, który pozwala tworzyć dowolną liczbę formularzy, z różnymi polami, oferowanymi produktami itd.

Aby uzyskać dostęp do tej funkcji, przejdź do menu Formularze checkout na lewym pasku bocznym.

![Lista formularzy checkout](/img/config/checkout-forms-list.png)

Na tej stronie możesz zobaczyć wszystkie posiadane formularze checkout.

Tabela listy zawiera kolumnę **Status**, dzięki czemu możesz potwierdzić, czy każdy formularz jest obecnie dostępny dla klientów:

| Status | Znaczenie |
|---|---|
| **Aktywny** | Formularza można używać wszędzie tam, gdzie opublikowano jego shortcode lub stronę rejestracji. |
| **Nieaktywny** | Formularz jest zapisany, ale wyłączony. Klienci nie mogą ukończyć za jego pomocą checkout, dopóki ponownie go nie włączysz. |

Użyj kolumny statusu przed edycją publicznego przepływu rejestracji, zwłaszcza gdy przechowujesz robocze lub sezonowe formularze checkout obok formularzy aktywnych.

Jeśli chcesz utworzyć nowy, po prostu kliknij Dodaj formularz checkout u góry strony.

Jako punkt wyjścia możesz wybrać jedną z tych trzech opcji: jednoetapowy, wieloetapowy lub pusty. Następnie kliknij, aby przejść do edytora.

Gdy wybierzesz **jednoetapowy** lub **wieloetapowy** jako punkt wyjścia, szablon formularza domyślnie zawiera teraz pole **Wybór szablonu**. To pole pozwala klientom wybrać szablon witryny podczas procesu rejestracji. Możesz je zostawić, usunąć lub zmienić jego położenie tak jak każdego innego pola w edytorze.

![Edytor formularza checkout](/img/config/checkout-form-editor.png)

Alternatywnie możesz edytować lub powielać formularze, które już masz, klikając opcje pod ich nazwą. Znajdziesz tam również opcje kopiowania shortcode formularza lub usunięcia formularza.

![Akcje po najechaniu na formularz checkout](/img/config/checkout-form-hover-actions.png)

#### Omówienie edytora formularza checkout

Edytor formularza checkout zapewnia kompleksowy interfejs do tworzenia formularzy rejestracyjnych. Oto omówienie układu edytora:

![Omówienie edytora formularza checkout](/img/config/checkout-form-editor-overview.png)

### Edytowanie formularza checkout

Możesz tworzyć formularze checkout do różnych celów. W tym przykładzie będziemy pracować nad formularzem rejestracyjnym.

Po przejściu do edytora formularza checkout nadaj formularzowi nazwę (będzie używana tylko do wewnętrznego odniesienia) oraz slug (używany na przykład do tworzenia shortcode’ów).

![Edytor formularza checkout](/img/config/checkout-form-editor.png)

Formularze składają się z etapów i pól. Możesz dodać nowy etap, klikając Dodaj nowy etap checkout.

![Dodaj nowy etap checkout](/img/config/checkout-form-add-step.png)

Na pierwszej karcie okna modalnego wypełnij treść etapu formularza. Nadaj mu ID, nazwę i opis. Te elementy są głównie używane wewnętrznie.

![Karta treści etapu formularza checkout](/img/config/checkout-form-step-content.png)

Następnie ustaw widoczność etapu. Możesz wybrać między „Zawsze pokazuj”, „Pokazuj tylko zalogowanym użytkownikom” lub „Pokazuj tylko gościom”.

![Karta widoczności etapu formularza checkout](/img/config/checkout-form-step-visibility.png)

Na koniec skonfiguruj styl etapu. Są to pola opcjonalne.

![Karta stylu etapu formularza checkout](/img/config/checkout-form-step-style.png)

Teraz czas dodać pola do naszego pierwszego etapu. Po prostu kliknij Dodaj nowe pole i wybierz typ sekcji, której chcesz użyć.

![Etap formularza checkout z polami](/img/config/checkout-form-step-with-fields.png)

Każde pole ma inne parametry do wypełnienia. Dla tego pierwszego wpisu wybierzemy pole „Nazwa użytkownika”.

![Lista rozwijana wyboru typu pola](/img/config/checkout-form-field-type-dropdown.png)

![Ustawienia treści pola nazwy użytkownika](/img/config/checkout-form-username-content.png)

![Ustawienia widoczności pola nazwy użytkownika](/img/config/checkout-form-username-visibility.png)

![Ustawienia stylu pola nazwy użytkownika](/img/config/checkout-form-username-style.png)

Możesz dodać tyle etapów i pól, ile potrzebujesz. Aby wyświetlić produkty, z których klienci mogą wybrać jeden, użyj pola Tabela cen. Jeśli chcesz pozwolić klientom wybrać szablon, dodaj pole Wybór szablonu. I tak dalej.

![Okno dialogowe Dodaj nowe pole](/img/config/checkout-form-add-field-dialog.png)

_**Uwaga:** nazwa użytkownika, e-mail, hasło, tytuł witryny, URL witryny, podsumowanie zamówienia, płatność i przycisk przesyłania są obowiązkowymi polami do utworzenia formularza checkout._

Podczas pracy nad formularzem checkout zawsze możesz użyć przycisku Podgląd, aby zobaczyć, jak formularz będzie wyglądał dla klientów. Możesz też przełączać widok między istniejącym użytkownikiem a odwiedzającym

![Przycisk podglądu formularza checkout](/img/config/checkout-form-preview-button.png)

![Modal podglądu formularza checkout](/img/config/checkout-form-preview-modal.png)

Na koniec w Opcjach zaawansowanych możesz skonfigurować wiadomość dla strony „Dziękujemy”, dodać fragmenty kodu do śledzenia konwersji, dodać niestandardowy CSS do formularza checkout lub ograniczyć go do określonych krajów.

![Opcje zaawansowane](/img/config/checkout-form-advanced.png)

Możesz też ręcznie włączyć lub wyłączyć formularz checkout, przełączając tę opcję w prawej kolumnie, albo trwale usunąć formularz.

![Przełącznik aktywności](/img/config/checkout-form-active.png)

Aby usunąć formularz, kliknij opcję usuwania w akcjach formularza:

![Opcja usuwania formularza checkout](/img/config/checkout-form-delete.png)

Nie zapomnij zapisać formularza checkout!

![Przycisk zapisu](/img/config/checkout-form-save.png)

Aby uzyskać shortcode formularza, kliknij Wygeneruj shortcode i skopiuj wynik pokazany w oknie modalnym.

![Przycisk zapisu z shortcode](/img/config/checkout-form-save.png)

### Pole Tabela cen

Pole **Tabela cen** wyświetla produkty w formularzu checkout, aby klienci mogli wybrać plan. Podczas edycji tego pola możesz skonfigurować kilka opcji:

![Ustawienia pola Tabela cen](/img/config/pricing-table-field-settings.png)

Oto jak tabela cen wygląda w formularzu rejestracyjnym na frontendzie:

![Tabela cen checkoutu na frontendzie](/img/config/frontend-checkout-pricing-table.png)

  * **Produkty**: Wybierz, które produkty wyświetlić oraz kolejność, w jakiej mają się pojawiać.
  * **Wymuś różne okresy**: Gdy ta opcja jest włączona, wszystkie produkty są wyświetlane niezależnie od tego, czy mają pasującą wariację ceny dla aktualnie wybranego okresu rozliczeniowego. Gdy jest wyłączona (domyślnie), produkty bez wariacji dla wybranego okresu są ukryte.
    ![Opcja wymuszania okresów w tabeli cen](/img/config/pricing-table-force-durations.png)
  * **Ukryj, gdy wstępnie wybrano**: Ukrywa tabelę cen, gdy plan został już wybrany przez URL (np. `/register/premium`).
  * **Szablon tabeli cen**: Wybierz szablon wizualny dla tabeli cen (Simple List, Legacy itd.).

Jeśli dodasz produkt do tabeli cen, zanim formularz będzie zawierał pola wymagane do ukończenia procesu checkoutu tego produktu, edytor wyświetli teraz ostrzeżenie. Użyj ostrzeżenia, aby dodać brakujące wymagane pole przed opublikowaniem lub zapisaniem zmian w aktywnym formularzu rejestracji.

### Dodawanie przełącznika wyboru okresu

Jeśli skonfigurowałeś [wariacje cen](creating-your-first-subscription-product#price-variations) w swoich produktach (np. ceny miesięczne i roczne), możesz dodać pole **Wybór okresu** do formularza checkoutu. To pole wyświetla przełącznik, który pozwala klientom przełączać się między okresami rozliczeniowymi, a tabela cen aktualizuje się dynamicznie w czasie rzeczywistym.

#### Krok 1: Skonfiguruj wariacje cen w swoich produktach

Przed dodaniem pola Wybór okresu upewnij się, że Twoje produkty mają skonfigurowane wariacje cen. Przejdź do **Ultimate Multisite > Products**, edytuj produkt i przejdź do karty **Wariacje cen**, aby dodać alternatywne okresy rozliczeniowe (np. roczny w obniżonej cenie).

![Karta wariacji cen w produkcie](/img/config/product-price-variations-tab.png)

#### Krok 2: Dodaj pole Wybór okresu do formularza checkoutu

1. Przejdź do **Ultimate Multisite > Checkout Forms** i edytuj swój formularz checkoutu.

2. Przewiń w dół do kroku, który zawiera pole **Tabela cen**, i kliknij **Dodaj nowe pole**.

3. W oknie wyboru typu pola kliknij **Period Select**.

![Okno Dodaj nowe pole pokazujące Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Skonfiguruj opcje okresu. Każda opcja wymaga:
   * **Czas trwania**: Liczba (np. `1`)
   * **Jednostka czasu trwania**: Typ okresu (dni, tygodnie, miesiące lub lata)
   * **Etykieta**: Tekst, który zobaczą klienci (np. „Miesięcznie”, „Rocznie”)

5. Kliknij **+ Dodaj opcję**, aby dodać więcej wyborów okresu. Te opcje muszą odpowiadać wariacjom cen skonfigurowanym w Twoich produktach.

![Ustawienia pola Wybór okresu](/img/config/period-selection-field-settings.png)

6. Wybierz **Szablon selektora okresu** (Clean jest domyślny i renderuje prosty, ostylowany selektor gotowy do własnego CSS).

7. Kliknij **Zapisz pole**.

#### Krok 3: Umieść pole nad tabelą cen

Aby zapewnić najlepsze doświadczenie użytkownika, upewnij się, że pole Wybór okresu pojawia się **przed** polem Tabela cen w kroku checkoutu. Możesz przeciągać pola, aby zmienić ich kolejność w edytorze formularza checkoutu. Dzięki temu klienci najpierw wybierają okres rozliczeniowy, a następnie widzą ceny dla tego okresu.

![Edytor formularza checkoutu pokazujący kolejność pól](/img/config/checkout-form-editor-with-fields.png)

#### Jak to działa na frontendzie

Po skonfigurowaniu klienci odwiedzający Twoją stronę rejestracji zobaczą selektor okresu nad tabelą cen. Gdy klikną inny okres rozliczeniowy:

  * Tabela cen natychmiast zaktualizuje się, aby pokazać ceny dla wybranego okresu (bez konieczności przeładowania strony).
  * Jeśli **Wymuś różne okresy** jest wyłączone w polu Tabela cen, produkty bez wariacji ceny dla wybranego okresu zostaną ukryte.
  * Jeśli **Wymuś różne okresy** jest włączone, wszystkie produkty pozostaną widoczne, nawet jeśli nie mają wariacji dla wybranego okresu (pokażą swoją domyślną cenę).

#### Wstępne wybieranie okresu rozliczeniowego przez URL

Możesz także wstępnie wybrać produkt i okres rozliczeniowy przez URL. Ultimate Multisite obsługuje następujące wzorce URL:

  * `/register/premium` — Wstępnie wybiera tylko produkt „Premium”
  * `/register/premium/12` — Wstępnie wybiera produkt i 12-miesięczny czas trwania
  * `/register/premium/1/year` — Wstępnie wybiera produkt z 1-rocznym czasem trwania

### Pole wyboru szablonu

Pole **Wybór szablonu** pozwala klientom wybrać szablon witryny podczas checkoutu. Jest teraz domyślnie uwzględnione w szablonach formularza checkoutu **jednoetapowego** i **wieloetapowego** dodanych w Ultimate Multisite v2.6.1.

#### Ręczne dodawanie pola

Jeśli pracujesz z formularzem utworzonym przed v2.6.1 albo rozpoczętym od pustego szablonu:

1. Przejdź do **Ultimate Multisite > Checkout Forms** i edytuj swój formularz checkoutu.
2. W kroku, w którym zbierane są dane witryny, kliknij **Dodaj nowe pole**.
3. Wybierz **Wybór szablonu** w oknie typu pola.
4. Skonfiguruj pole:
   - **Etykieta** — Nagłówek, który klienci widzą nad siatką szablonów (np. „Wybierz szablon witryny”).
   - **Wymagane** — Określa, czy klienci muszą wybrać szablon przed przejściem dalej.

#### Jak to działa

Gdy klient wybierze szablon podczas checkoutu, Ultimate Multisite użyje go podczas udostępniania jego nowej witryny. Pokazywane szablony pochodzą z Twojej listy **Szablony witryn** (**Ultimate Multisite > Site Templates**). Widoczne są tutaj tylko szablony oznaczone jako dostępne dla klientów.

### Domeny bazowe formularza checkoutu

Ultimate Multisite v2.13.0 traktuje domeny skonfigurowane w polach **URL witryny** formularza checkoutu jako domeny bazowe sieci. Użyj ustawień dostępnych domen tego pola, gdy chcesz, aby klienci tworzyli witryny pod jedną lub większą liczbą współdzielonych domen rejestracyjnych, takich jak `example.com` i `sites.example.com`.

Współdzielone domeny bazowe formularza finalizacji zakupu nie są traktowane jako mapowania domen niestandardowych dla poszczególnych witryn. Gdy klient tworzy witrynę w podkatalogu na jednej z takich baz, Ultimate Multisite nie tworzy rekordu mapowanej domeny, który sprawiłby, że współdzielony host należałby tylko do tej jednej witryny. Współdzielony host pozostaje dostępny dla witryn siostrzanych, które używają tej samej bazy formularza finalizacji zakupu.

Zachowaj domeny niestandardowe dla mapowanych hostów poszczególnych klientów, takich jak `customer-example.com`. Zachowaj domeny bazowe formularza finalizacji zakupu dla współdzielonych hostów rejestracji, z których może korzystać wiele witryn.

#### Usuwanie pola

Jeśli nie oferujesz szablonów witryn, usuń pole Template Selection ze swojego formularza. Klienci otrzymają wtedy dowolny domyślny szablon skonfigurowany w **Ultimate Multisite > Settings > Site Templates**.
