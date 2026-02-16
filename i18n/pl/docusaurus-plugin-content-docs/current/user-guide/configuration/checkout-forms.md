---
title: Formularze zamówienia
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Formularze zamówień

Formularze zamówień to prosty i elastyczny sposób na testowanie różnych podejść podczas pozyskiwania nowych klientów.

Ultimate Multisite 2.0 oferuje edytor formularzy zamówień, który pozwala tworzyć dowolną liczbę formularzy z różnymi polami, oferowanymi produktami itp.

Aby uzyskać dostęp do tej funkcji, przejdź do menu Checkout Forms na pasku bocznym po lewej stronie.

![Lista formularzy zamówień](/img/config/checkout-forms-list.png)

Na tej stronie zobaczysz wszystkie utworzone formularze zamówień.

Jeśli chcesz utworzyć nowy formularz, kliknij Add Checkout Form na górze strony.

Możesz wybrać jeden z trzech punktów wyjścia: jednostronicowy, wieloetapowy lub pusty. Następnie kliknij Go to the Editor.

![Edytor formularza zamówienia](/img/config/checkout-form-editor.png)

Możesz też edytować lub duplikować istniejące formularze, klikając opcje pod ich nazwą. Znajdziesz tam również możliwość skopiowania shortcode formularza lub jego usunięcia.

![Akcje po najechaniu na formularz zamówienia](/img/config/checkout-form-hover-actions.png)

### Edytowanie formularza zamówienia

Formularze zamówień możesz tworzyć do różnych celów. W tym przykładzie przygotujemy formularz rejestracyjny.

Po przejściu do edytora formularza zamówienia nadaj mu nazwę (używaną wyłącznie wewnętrznie) oraz slug (wykorzystywany np. do tworzenia shortcode'ów).

![Edytor formularza zamówienia](/img/config/checkout-form-editor.png)

Formularze składają się z kroków i pól. Nowy krok dodasz, klikając Add New Checkout Step.

![Dodawanie nowego kroku zamówienia](/img/config/checkout-form-add-step.png)

W pierwszej zakładce okna modalnego uzupełnij treść kroku formularza. Podaj ID, nazwę i opis. Te elementy są używane głównie wewnętrznie.

![Krok formularza zamówienia](/img/config/checkout-form-step.png)

Następnie ustaw widoczność kroku. Do wyboru masz: „Zawsze pokazuj", „Pokazuj tylko zalogowanym użytkownikom" lub „Pokazuj tylko gościom".

![Krok formularza zamówienia](/img/config/checkout-form-step.png)

Na koniec skonfiguruj styl kroku. To pola opcjonalne.

![Krok formularza zamówienia](/img/config/checkout-form-step.png)

Teraz pora dodać pola do pierwszego kroku. Kliknij Add New Field i wybierz typ sekcji, którą chcesz dodać.

![Krok formularza zamówienia z polami](/img/config/checkout-form-step.png)

Każde pole ma różne parametry do uzupełnienia. Na początek wybierzemy pole „Username".

![Krok formularza zamówienia](/img/config/checkout-form-step.png)

![Krok formularza zamówienia](/img/config/checkout-form-step.png)

![Krok formularza zamówienia](/img/config/checkout-form-step.png)

Możesz dodać dowolną liczbę kroków i pól. Aby wyświetlić produkty do wyboru dla klientów, użyj pola Pricing Table. Jeśli chcesz pozwolić klientom wybrać szablon, dodaj pole Template Selection. I tak dalej.

_**Uwaga:** pola username, email, password, site title, site URL, order summary, payment i submit button są wymagane do utworzenia formularza zamówienia._

Podczas pracy nad formularzem zamówienia możesz w każdej chwili użyć przycisku Preview, aby zobaczyć, jak formularz będzie wyglądał dla klientów. Możesz też przełączać widok między zalogowanym użytkownikiem a gościem.

![Zapisywanie formularza zamówienia](/img/config/checkout-form-save.png)

![Edytor formularza zamówienia](/img/config/checkout-form-editor.png)

W sekcji Advanced Options możesz skonfigurować treść strony „Dziękujemy", dodać fragmenty kodu do śledzenia konwersji, dodać własny CSS do formularza zamówienia lub ograniczyć jego dostępność do wybranych krajów.

![Opcje zaawansowane](/img/config/checkout-form-advanced.png)

Możesz też ręcznie włączyć lub wyłączyć formularz zamówienia, przełączając tę opcję w prawej kolumnie, albo trwale usunąć formularz.

![Przełącznik aktywności](/img/config/checkout-form-active.png)

Nie zapomnij zapisać formularza zamówienia!

![Przycisk zapisz](/img/config/checkout-form-save.png)

Aby uzyskać shortcode formularza, kliknij Generate Shortcode i skopiuj wynik wyświetlony w oknie modalnym.

![Przycisk zapisz z shortcode](/img/config/checkout-form-save.png)
