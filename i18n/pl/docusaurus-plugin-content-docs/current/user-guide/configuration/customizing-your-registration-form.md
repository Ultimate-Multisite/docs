---
title: Dostosowywanie Formularza Rejestracji
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Dostosowywanie formularza rejestracji

Aby Twoja sieć wyróżniała się na tle innych rozwiązań SaaS zbudowanych na platformie WordPress, Ultimate Multisite pozwala dostosować strony rejestracji i logowania za pomocą funkcji **Checkout Forms** (formularze zamówienia).

Choć są one łatwym i elastycznym sposobem na eksperymentowanie z różnymi podejściami przy pozyskiwaniu nowych klientów, najczęściej wykorzystuje się je do tworzenia spersonalizowanych formularzy rejestracyjnych. Ten artykuł pokaże Ci, jak to zrobić.

## Strony logowania i rejestracji:

Po zainstalowaniu Ultimate Multisite automatycznie tworzone są niestandardowe strony logowania i rejestracji na Twojej głównej witrynie. Możesz zmienić te domyślne strony w dowolnym momencie, przechodząc do **Ultimate Multisite > Settings > Login & Registration**.

![Strona ustawień logowania i rejestracji](/img/config/settings-general.png)

Przyjrzyjmy się każdej opcji, którą możesz dostosować na stronie **Login & Registration**:

  * **Enable registration:** Ta opcja włącza lub wyłącza rejestrację w Twojej sieci. Jeśli jest wyłączona, klienci nie będą mogli się zarejestrować ani wykupić subskrypcji Twoich produktów.

  * **Enable email verification:** Jeśli ta opcja jest włączona, klienci wykupujący darmowy plan lub płatny plan z okresem próbnym otrzymają e-mail weryfikacyjny i będą musieli kliknąć link weryfikacyjny, aby ich strony zostały utworzone.

  * **Default registration page:** To domyślna strona rejestracji. Strona ta musi być opublikowana na Twojej witrynie i zawierać formularz rejestracyjny (znany również jako checkout form) — gdzie Twoi klienci będą subskrybować Twoje produkty. Możesz utworzyć dowolną liczbę stron rejestracji i formularzy checkout, pamiętaj tylko, aby umieścić shortcode formularza checkout na stronie rejestracji, w przeciwnym razie formularz się nie pojawi.

  * **Use custom login page:** Ta opcja pozwala używać niestandardowej strony logowania zamiast domyślnej strony wp-login.php. Jeśli ta opcja jest włączona, możesz wybrać, która strona będzie używana do logowania w opcji **Default login page** (tuż poniżej).

  * **Obfuscate the original login url (wp-login.php):** Jeśli chcesz ukryć oryginalny adres URL logowania, możesz włączyć tę opcję. Jest to przydatne w zapobieganiu atakom brute-force. Gdy ta opcja jest włączona, Ultimate Multisite wyświetli błąd 404, gdy użytkownik spróbuje uzyskać dostęp do oryginalnego linku wp-login.php.

  * **Force synchronous site publication:** Po wykupieniu przez klienta subskrypcji produktu w sieci, nowa oczekująca witryna musi zostać przekonwertowana w prawdziwą witrynę sieciową. Proces publikacji odbywa się asynchronicznie poprzez kolejkę zadań (Job Queue). Włącz tę opcję, aby wymusić publikację w tym samym żądaniu co rejestracja.

Teraz przyjrzyjmy się innym opcjom, które również dotyczą procesu logowania i rejestracji. Znajdziesz je poniżej sekcji **Other options** na tej samej stronie Login & Registration:

  * **Default role:** To rola, jaką Twoi klienci będą mieli na swojej stronie po zakończeniu procesu rejestracji.

  * **Add users to the main site as well:** Włączenie tej opcji spowoduje również dodanie użytkownika do głównej witryny Twojej sieci po procesie rejestracji. Jeśli włączysz tę opcję, poniżej pojawi się również opcja ustawienia **domyślnej roli** tych użytkowników na Twojej stronie.

  * **Enable multiple accounts:** Pozwala użytkownikom mieć konta na różnych stronach Twojej sieci z tym samym adresem e-mail. Jeśli ta opcja jest wyłączona, Twoi klienci nie będą mogli utworzyć konta na innych stronach działających w Twojej sieci z tym samym adresem e-mail.

To wszystkie opcje związane z logowaniem i rejestracją, które możesz dostosować! Nie zapomnij zapisać ustawień po zakończeniu edycji.

## Używanie wielu formularzy rejestracyjnych:

Ultimate Multisite 2.0 oferuje edytor formularzy checkout, który pozwala tworzyć dowolną liczbę formularzy z różnymi polami, oferowanymi produktami itp.

Zarówno strony logowania, jak i rejestracji zawierają shortcode'y: **[wu_login_form]** na stronie logowania i **[wu_checkout]** na stronie rejestracji. Możesz dodatkowo dostosować stronę rejestracji, budując lub tworząc formularze checkout.

Aby uzyskać dostęp do tej funkcji, przejdź do menu **Checkout Forms** na pasku bocznym po lewej stronie.

![Menu Checkout Forms na pasku bocznym](/img/config/checkout-forms-list.png)

Na tej stronie możesz zobaczyć wszystkie swoje formularze checkout.

Jeśli chcesz utworzyć nowy, po prostu kliknij **Add Checkout Form** na górze strony.

Możesz wybrać jedną z trzech opcji jako punkt wyjścia: jednoetapowy (single step), wieloetapowy (multi-step) lub pusty (blank). Następnie kliknij **Go to the Editor**.

![Dodawanie formularza checkout z opcjami jednoetapowy, wieloetapowy lub pusty](/img/config/checkout-forms-list.png)

Alternatywnie możesz edytować lub duplikować już istniejące formularze, klikając opcje pod ich nazwą. Znajdziesz tam również opcje kopiowania shortcode'u formularza lub usunięcia formularza.

![Akcje po najechaniu na formularz checkout z opcjami edycji, duplikowania i usuwania](/img/config/checkout-form-hover-actions.png)

Jeśli wybierzesz opcję jednoetapową lub wieloetapową, formularz checkout będzie już wstępnie wypełniony podstawowymi krokami niezbędnymi do jego działania. Następnie, jeśli chcesz, możesz dodać do niego dodatkowe kroki.

### Edycja formularza checkout:

Jak już wspomnieliśmy, możesz tworzyć formularze checkout do różnych celów. W tym przykładzie będziemy pracować nad formularzem rejestracyjnym.

Po przejściu do edytora formularza checkout, nadaj swojemu formularzowi nazwę (która będzie używana tylko do wewnętrznych celów) oraz slug (używany na przykład do tworzenia shortcode'ów).

![Edytor formularza checkout z polami nazwy i sluga](/img/config/checkout-form-editor.png)

Formularze składają się z kroków i pól. Możesz dodać nowy krok, klikając **Add New Checkout Step**.

![Przycisk Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na pierwszej karcie okna modalnego wypełnij treść kroku formularza. Nadaj mu ID, nazwę i opis. Te elementy są używane głównie wewnętrznie.

![Karta treści kroku checkout z ID, nazwą i opisem](/img/config/checkout-form-step.png)

Następnie ustaw widoczność kroku. Możesz wybrać między **Always show** (zawsze pokazuj), **Only show for logged in users** (pokazuj tylko zalogowanym użytkownikom) lub **Only show for guests** (pokazuj tylko gościom).

![Opcje widoczności kroku checkout](/img/config/checkout-form-step.png)

Na koniec skonfiguruj styl kroku. To pola opcjonalne.

![Konfiguracja stylu kroku checkout](/img/config/checkout-form-step.png)

Teraz czas dodać pola do naszego pierwszego kroku. Po prostu kliknij **Add New Field** i wybierz typ sekcji, którą chcesz dodać.

![Przycisk Add New Field](/img/config/checkout-form-editor.png)![Lista rozwijana wyboru typu pola](/img/config/checkout-form-step.png)

Każde pole ma różne parametry do wypełnienia. Na początek wybierzemy pole **Username**.

![Konfiguracja pola Username](/img/config/checkout-form-step.png)![Parametry pola Username](/img/config/checkout-form-step.png)![Dodatkowe ustawienia pola Username](/img/config/checkout-form-step.png)

Możesz dodać tyle kroków i pól, ile potrzebujesz. Aby wyświetlić produkty do wyboru dla klientów, użyj pola Pricing Table. Jeśli chcesz pozwolić klientom wybrać szablon, dodaj pole Template Selection. I tak dalej.

_**Uwaga:** Jeśli utworzysz produkt po utworzeniu formularza checkout, będziesz musiał dodać produkt w sekcji Pricing table. Jeśli go nie dodasz, produkt nie pojawi się dla Twoich klientów na stronie rejestracji._

_**Uwaga 2:** username, email, password, site title, site URL, order summary, payment i submit button to obowiązkowe pola przy tworzeniu formularza checkout._

Podczas pracy nad formularzem checkout możesz zawsze użyć przycisku Preview, aby zobaczyć, jak Twoi klienci zobaczą formularz. Możesz również przełączać się między widokiem jako istniejący użytkownik lub odwiedzający.

![Przycisk podglądu w edytorze formularza checkout](/img/config/checkout-form-editor.png)![Podgląd formularza checkout jako odwiedzający lub istniejący użytkownik](/img/config/checkout-form-editor.png)

Na koniec, w sekcji **Advanced Options** możesz skonfigurować wiadomość dla strony **Thank You** (podziękowania), dodać snippety do śledzenia konwersji, dodać niestandardowy CSS do formularza checkout lub ograniczyć go do określonych krajów.

![Advanced Options ze stroną Thank You, śledzeniem konwersji i niestandardowym CSS](/img/config/checkout-form-advanced.png)

Możesz również ręcznie włączyć lub wyłączyć formularz checkout, przełączając tę opcję w prawej kolumnie, lub trwale usunąć formularz.

![Przełącznik aktywności i opcja usuwania formularza checkout](/img/config/checkout-form-active.png)

Nie zapomnij zapisać swojego formularza checkout!

![Przycisk Save Checkout Form](/img/config/checkout-form-save.png)

Aby uzyskać shortcode formularza, kliknij **Generate Shortcode** i skopiuj wynik wyświetlony w oknie modalnym.

![Okno modalne Generate Shortcode z shortcode'em do skopiowania](/img/config/checkout-form-editor.png)

_**Uwaga:** Musisz dodać ten shortcode do swojej strony rejestracji, aby formularz checkout się na niej pojawił._

## Wstępne wybieranie produktów i szablonów przez parametry URL:

Jeśli chcesz utworzyć niestandardowe tabele cenowe dla swoich produktów i wstępnie wybrać w formularzu checkout produkt lub szablon, który Twój klient wybierze z tabeli cenowej lub strony szablonów, możesz do tego użyć parametrów URL.

### **Dla planów:**

Przejdź do **Ultimate Multisite > Products > Wybierz plan**. Na górze strony powinieneś zobaczyć przycisk **Click to copy Shareable Link**. To jest link, którego możesz użyć do wstępnego wybrania tego konkretnego planu w formularzu checkout.

![Strona produktu z przyciskiem shareable link](/img/config/products-list.png)

Pamiętaj, że ten udostępniany link jest ważny tylko dla **Planów**. Nie możesz używać udostępnianych linków dla pakietów ani usług.

### Dla szablonów:

Jeśli chcesz wstępnie wybrać szablony stron w formularzu checkout, możesz użyć parametru: **?template_id=X** w adresie URL strony rejestracji. „X" należy zastąpić **numerem ID szablonu strony**. Aby uzyskać ten numer, przejdź do **Ultimate Multisite > Sites**.

Kliknij **Manage** tuż pod szablonem strony, którego chcesz użyć. Zobaczysz numer SITE ID. Po prostu użyj tego numeru, aby ten konkretny szablon strony był wstępnie wybrany w formularzu checkout. W naszym przypadku parametr URL wyglądałby tak: **?template_id=2**.

![Lista stron pokazująca ID szablonu strony](/img/config/site-templates-list.png)

Załóżmy, że strona naszej sieci to [**www.mynetwork.com**](http://www.mynetwork.com), a nasza strona rejestracji z formularzem checkout znajduje się pod adresem **/register**. Cały adres URL z wstępnie wybranym szablonem strony będzie wyglądał tak: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A jeśli chcesz, możesz wstępnie wybrać zarówno produkty, jak i szablony w formularzu checkout. Wystarczy skopiować udostępniany link planu i wkleić parametr szablonu na końcu. Będzie to wyglądać tak: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
