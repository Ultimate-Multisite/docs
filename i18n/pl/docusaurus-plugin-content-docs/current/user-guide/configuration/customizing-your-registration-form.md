---
title: Dostosowywanie formularza rejestracyjnego
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Dostosowywanie formularza rejestracji

Aby Twoja sieć wyróżniała się spośród wszystkich innych SaaS zbudowanych na platformie WordPress, Ultimate Multisite pozwala dostosować strony rejestracji i logowania za pomocą naszej funkcji **Checkout Forms**.

Chociaż są one łatwym i elastycznym sposobem na eksperymentowanie z różnymi podejściami podczas prób konwersji nowych klientów, najczęściej używa się ich do tworzenia spersonalizowanych formularzy rejestracji. Ten artykuł ma pokazać, jak możesz to zrobić.

## Strony logowania i rejestracji: {#login-and-registration-pages}

Po instalacji Ultimate Multisite automatycznie tworzy niestandardowe strony logowania i rejestracji w Twojej głównej witrynie. Możesz zmienić te domyślne strony w dowolnym momencie, przechodząc do strony **Ultimate Multisite > Settings > Login & Registration**.

![Strona ustawień logowania i rejestracji](/img/config/settings-general.png)

Oto pełny widok strony ustawień logowania i rejestracji:

![Pełna strona ustawień logowania i rejestracji](/img/config/settings-login-registration-full.png)

Przyjrzyjmy się każdej z opcji, które możesz dostosować na stronie **Login & Registration**:

  * **Enable registration:** Ta opcja włączy lub wyłączy rejestrację w Twojej sieci. Jeśli zostanie wyłączona, Twoi klienci nie będą mogli się zarejestrować ani subskrybować Twoich produktów.

  * **Enable email verification:** Jeśli ta opcja jest włączona, klienci, którzy subskrybują bezpłatny plan lub płatny plan z okresem próbnym, otrzymają e-mail weryfikacyjny i będą musieli kliknąć link weryfikacyjny, aby ich witryny zostały utworzone.

  * **Default registration page:** To jest domyślna strona rejestracji. Ta strona musi być opublikowana w Twojej witrynie i zawierać formularz rejestracji (znany również jako formularz checkout) — tam Twoi klienci będą subskrybować Twoje produkty. Możesz utworzyć tyle stron rejestracji i formularzy checkout, ile chcesz; pamiętaj tylko, aby umieścić shortcode formularza checkout na stronie rejestracji, w przeciwnym razie się nie pojawi.

  * **Use custom login page:** Ta opcja pozwala użyć dostosowanej strony logowania innej niż domyślna strona wp-login.php. Jeśli ta opcja jest włączona, możesz wybrać, która strona będzie używana do logowania w opcji **Default login page** (tuż poniżej).

  * **Obfuscate the original login url (wp-login.php)** : Jeśli chcesz ukryć oryginalny URL logowania, możesz włączyć tę opcję. Jest to przydatne do zapobiegania atakom brute-force. Jeśli ta opcja jest włączona, Ultimate Multisite wyświetli błąd 404, gdy użytkownik spróbuje uzyskać dostęp do oryginalnego linku wp-login.php

  * **Force synchronous site publication:** Po tym, jak klient zasubskrybuje produkt w sieci, nowa oczekująca witryna musi zostać przekonwertowana na prawdziwą witrynę sieciową. Proces publikacji odbywa się asynchronicznie przez Job Queue. Włącz tę opcję, aby wymusić publikację w tym samym żądaniu co rejestracja.

Teraz zobaczmy inne opcje, które nadal są istotne dla procesu logowania i rejestracji. Znajdują się one tuż pod **Other options** na tej samej stronie Login & registration:

  * **Default role:** To jest rola, którą Twoi klienci będą mieć w swojej witrynie po procesie rejestracji.

  * **Enable Jumper:** Włącza skrót Jumper w obszarze administratora. Jumper pozwala administratorom szybko przechodzić do ekranów Ultimate Multisite, obiektów sieciowych i innych obsługiwanych miejsc docelowych bez przeglądania każdego menu. Wyłącz go, jeśli wolisz ukryć to narzędzie szybkiej nawigacji w interfejsie administratora.

  * **Add users to the main site as well:** Włączenie tej opcji doda również użytkownika do głównej witryny Twojej sieci po procesie rejestracji. Jeśli włączysz tę opcję, tuż poniżej pojawi się również opcja ustawienia **default role** tych użytkowników w Twojej witrynie.

  * **Enable multiple accounts:** Pozwala użytkownikom mieć konta w różnych witrynach Twojej sieci z tym samym adresem e-mail. Jeśli ta opcja jest wyłączona, Twoi klienci nie będą mogli utworzyć konta w innych witrynach działających w Twojej sieci z tym samym adresem e-mail.

I to wszystkie opcje związane z logowaniem i rejestracją, które możesz dostosować! Nie zapomnij zapisać ustawień po zakończeniu ich edycji.

## Korzystanie z wielu formularzy rejestracji: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 oferuje edytor formularzy checkout, który pozwala tworzyć tyle formularzy, ile chcesz, z różnymi polami, oferowanymi produktami itd.

Zarówno strony logowania, jak i rejestracji są osadzone za pomocą shortcode’ów: **[wu_login_form]** na stronie logowania i**[wu_checkout]** na stronie rejestracji. Możesz dalej dostosować stronę rejestracji, budując lub tworząc formularze checkout.

Aby uzyskać dostęp do tej funkcji, przejdź do menu **Checkout Forms** na lewym pasku bocznym.

![Menu Checkout Forms na pasku bocznym](/img/config/checkout-forms-list.png)

Na tej stronie możesz zobaczyć wszystkie formularze checkout, które posiadasz.

Jeśli chcesz utworzyć nowy, po prostu kliknij **Add Checkout Form** u góry strony.

Możesz wybrać jedną z tych trzech opcji jako punkt wyjścia: jednoetapowy, wieloetapowy lub pusty. Następnie kliknij **Go to the Editor**.

![Dodawanie Checkout Form z opcjami jednoetapowy, wieloetapowy lub pusty](/img/config/checkout-forms-list.png)

Alternatywnie możesz edytować lub duplikować formularze, które już masz, klikając opcje pod ich nazwą. Znajdziesz tam również opcje skopiowania shortcode’u formularza lub usunięcia formularza.

![Akcje po najechaniu na formularz checkout: edytuj, duplikuj i usuń](/img/config/checkout-form-hover-actions.png)

Jeśli wybierzesz jednoetapowy lub wieloetapowy, formularz checkout będzie już wstępnie wypełniony podstawowymi krokami potrzebnymi do działania. Następnie, jeśli chcesz, możesz dodać do niego dodatkowe kroki.

### Edycja Checkout Form: {#editing-a-checkout-form}

Jak wspomnieliśmy wcześniej, możesz tworzyć formularze checkout do różnych celów. W tym przykładzie będziemy pracować nad formularzem rejestracji.

Po przejściu do edytora formularza checkout nadaj formularzowi nazwę (która będzie używana wyłącznie jako odniesienie wewnętrzne) oraz slug (używany na przykład do tworzenia shortcode’ów).

![Edytor formularza finalizacji zakupu z polami nazwy i sluga](/img/config/checkout-form-name-slug.png)

Formularze składają się z kroków i pól. Możesz dodać nowy krok, klikając **Dodaj nowy krok finalizacji zakupu**.

![Przycisk Dodaj nowy krok finalizacji zakupu](/img/config/checkout-form-add-step.png)

Na pierwszej karcie okna modalnego uzupełnij treść kroku formularza. Nadaj mu ID, nazwę i opis. Te elementy są używane głównie wewnętrznie.

![Karta treści kroku finalizacji zakupu z ID, nazwą i opisem](/img/config/checkout-form-step-content.png)

Następnie ustaw widoczność kroku. Możesz wybrać między **Zawsze pokazuj**, **Pokazuj tylko zalogowanym użytkownikom** lub **Pokazuj tylko gościom**.

![Opcje widoczności kroku finalizacji zakupu](/img/config/checkout-form-step-visibility.png)

Na koniec skonfiguruj styl kroku. Są to pola opcjonalne.

![Konfiguracja stylu kroku finalizacji zakupu](/img/config/checkout-form-step-style.png)

Teraz czas dodać pola do naszego pierwszego kroku. Po prostu kliknij **Dodaj nowe pole** i wybierz typ sekcji, którego chcesz użyć.

![Przycisk Dodaj nowe pole](/img/config/checkout-form-add-field-button.png)![Lista rozwijana wyboru typu pola](/img/config/checkout-form-field-type-dropdown.png)

Każde pole ma inne parametry do uzupełnienia. Dla tego pierwszego wejścia wybierzemy pole **Nazwa użytkownika**.

![Konfiguracja pola Nazwa użytkownika](/img/config/checkout-form-username-content.png)![Parametry pola Nazwa użytkownika](/img/config/checkout-form-username-visibility.png)![Dodatkowe ustawienia pola Nazwa użytkownika](/img/config/checkout-form-username-style.png)

Możesz dodać tyle kroków i pól, ile potrzebujesz. Aby wyświetlić produkty, spośród których klienci mogą wybrać jeden, użyj pola Tabela cen. Jeśli chcesz pozwolić klientom wybrać szablon, dodaj pole Wybór szablonu. I tak dalej.

![Edytor formularza finalizacji zakupu z polem wyboru szablonu](/img/config/checkout-form-with-template-field.png)

_**Uwaga:** Jeśli utworzysz produkt po utworzeniu formularza finalizacji zakupu, musisz dodać produkt w sekcji Tabela cen. Jeśli go nie dodasz, produkt nie pojawi się klientom na stronie rejestracji._

_**Uwaga 2:** nazwa użytkownika, e-mail, hasło, tytuł witryny, URL witryny, podsumowanie zamówienia, płatność i przycisk przesłania to pola obowiązkowe do utworzenia formularza finalizacji zakupu._

Podczas pracy nad formularzem finalizacji zakupu możesz zawsze użyć przycisku Podgląd, aby zobaczyć, jak klienci zobaczą formularz. Możesz też przełączać widok między istniejącym użytkownikiem a odwiedzającym.

![Przycisk Podgląd w edytorze formularza finalizacji zakupu](/img/config/checkout-form-preview-button.png)![Podgląd formularza finalizacji zakupu jako odwiedzający lub istniejący użytkownik](/img/config/checkout-form-preview-modal.png)

Na koniec w **Opcjach zaawansowanych** możesz skonfigurować komunikat dla strony **Dziękujemy**, dodać fragmenty kodu do śledzenia konwersji, dodać własny CSS do formularza finalizacji zakupu lub ograniczyć go do określonych krajów.

![Opcje zaawansowane ze stroną Dziękujemy, śledzeniem konwersji i własnym CSS](/img/config/checkout-form-advanced.png)

Możesz także ręcznie włączyć lub wyłączyć formularz finalizacji zakupu, przełączając tę opcję w prawej kolumnie, albo trwale usunąć formularz.

![Przełącznik aktywności i opcja usunięcia formularza finalizacji zakupu](/img/config/checkout-form-active.png)

Nie zapomnij zapisać formularza finalizacji zakupu!

![Przycisk Zapisz formularz finalizacji zakupu](/img/config/checkout-form-save.png)

Aby uzyskać shortcode formularza, kliknij **Wygeneruj shortcode** i skopiuj wynik pokazany w oknie modalnym.

![Modal Wygeneruj shortcode z shortcode do skopiowania](/img/config/checkout-form-editor.png)

_**Uwaga:** Musisz dodać ten shortcode do swojej strony rejestracji, aby ten formularz finalizacji zakupu został do niej dodany._

## Wstępne wybieranie produktów i szablonów za pomocą parametrów URL: {#pre-selecting-products-and-templates-via-url-parameters}

Jeśli chcesz tworzyć niestandardowe tabele cen dla swoich produktów i wstępnie wybierać w formularzu finalizacji zakupu produkt lub szablon, który klient wybiera z tabeli cen lub strony szablonów, możesz użyć do tego parametrów URL.

### **Dla planów:** {#for-plans}

Przejdź do **Ultimate Multisite > Produkty > Wybierz plan**. U góry strony powinien być widoczny przycisk **Kliknij, aby skopiować link do udostępnienia**. To jest link, którego możesz użyć, aby wstępnie wybrać ten konkretny plan w formularzu finalizacji zakupu.

![Strona produktu z przyciskiem linku do udostępnienia](/img/config/products-list.png)

Pamiętaj, że ten link do udostępnienia jest ważny tylko dla **Planów**. Nie możesz używać linków do udostępnienia dla pakietów ani usług.

### Dla szablonów: {#for-templates}

Jeśli chcesz wstępnie wybrać szablony witryn w formularzu finalizacji zakupu, możesz użyć parametru: **?template_id=X** w URL strony rejestracji. „X” trzeba zastąpić **numerem ID szablonu witryny**. Aby uzyskać ten numer, przejdź do **Ultimate Multisite > Witryny**.

Kliknij **Zarządzaj** tuż pod szablonem witryny, którego chcesz użyć. Zobaczysz numer SITE ID. Użyj tego numeru dla tego konkretnego szablonu witryny, aby został wstępnie wybrany w formularzu finalizacji zakupu. W naszym przypadku parametr URL będzie wyglądał tak: **?template_id=2**.

![Lista witryn pokazująca ID szablonu witryny](/img/config/site-templates-list.png)

Załóżmy, że witryna naszej sieci to [**www.mynetwork.com**](http://www.mynetwork.com), a nasza strona rejestracji z formularzem finalizacji zakupu znajduje się na stronie **/register**. Pełny URL z wstępnie wybranym szablonem witryny będzie wyglądał tak: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Jeśli chcesz, możesz wstępnie wybrać w formularzu finalizacji zakupu zarówno produkty, jak i szablony. Wystarczy skopiować link do udostępnienia planu i wkleić parametr szablonu na końcu. Będzie to wyglądać tak: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
