---
title: Szablony witryn
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Szablony Witryn (v2)

_**UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x. Jeśli używasz wersji 1.x,**_ **zobacz ten artykuł** _**.**_

Naszym celem przy tworzeniu profesjonalnej sieci z Ultimate Multisite jest maksymalna automatyzacja procesów, przy jednoczesnym zapewnieniu klientom elastyczności i różnych opcji do wyboru podczas tworzenia ich witryn. Jednym z prostych sposobów na osiągnięcie tej równowagi jest wykorzystanie funkcji Szablonów Witryn w Ultimate Multisite.

## Czym jest Szablon Witryny?

Jak sama nazwa wskazuje, Szablon Witryny to gotowa witryna bazowa, która może służyć jako fundament przy tworzeniu nowych witryn w Twojej sieci.

Oznacza to, że możesz stworzyć witrynę bazową, aktywować różne pluginy, ustawić aktywny motyw i dostosować ją według własnych potrzeb. Następnie, gdy Twój klient tworzy nowe konto, zamiast otrzymać domyślną witrynę WordPress bez żadnej sensownej zawartości, dostanie kopię Twojej witryny bazowej ze wszystkimi ustawieniami i treściami już na miejscu.

Brzmi świetnie, ale jak stworzyć nowy szablon witryny? To naprawdę banalnie proste.

## Tworzenie i edycja nowego Szablonu Witryny

Szablony Witryn to po prostu zwykłe witryny w Twojej sieci. Aby utworzyć nowy szablon, przejdź do **Administracja sieci > Ultimate Multisite > Witryny > Dodaj witrynę.**

**![Przycisk dodawania witryny na stronie listy witryn](/img/config/site-templates-list.png)**

Otworzy się okno modalne z polami **Tytuł witryny, Domena/ścieżka witryny** oraz **Typ witryny**. W polu rozwijanym **Typ witryny** upewnij się, że wybierasz opcję **Szablon Witryny** *.*

_![Okno dodawania szablonu witryny z rozwijaną listą typu witryny](/img/config/site-templates-list.png)_

Na dole formularza znajdziesz przełącznik **Kopiuj witrynę**. Pozwala on utworzyć nowy szablon witryny na podstawie istniejącego szablonu jako punktu wyjścia, co pomoże Ci zaoszczędzić czas zamiast tworzyć szablon od zera.

![Okno dodawania szablonu witryny z przełącznikiem kopiowania witryny](/img/config/site-templates-list.png)

### Dostosowywanie zawartości Szablonu Witryny

Aby dostosować swój szablon witryny, po prostu przejdź do jego panelu administracyjnego i wprowadź potrzebne zmiany. Możesz tworzyć nowe wpisy, strony, aktywować pluginy i zmieniać aktywny motyw. Możesz nawet użyć Konfiguratora, aby zmienić wszelkie opcje personalizacji.

Wszystkie te dane zostaną skopiowane, gdy klient utworzy nową witrynę na podstawie tego Szablonu Witryny.

### Opcje zaawansowane

Jeśli znasz się na kodowaniu, możesz skorzystać z naszego API wyszukiwania i zamiany, aby automatycznie zastępować informacje w nowej witrynie po jej utworzeniu. Jest to przydatne na przykład do zamiany nazwy firmy na stronie O nas, zastąpienia adresu e-mail na stronie Kontakt itp.

### Korzystanie z Szablonów Witryn

Stworzyłeś więc kilka różnych Szablonów Witryn z różnymi projektami, motywami i ustawieniami. Jak teraz wykorzystać je w swojej sieci?

Zasadniczo masz dwa podejścia do wyboru (nie można ich stosować jednocześnie):

  * Przypisanie jednego Szablonu Witryny do każdego z Twoich Planów

**LUB**

  * Pozwolenie klientom na samodzielny wybór szablonów witryn podczas rejestracji.

#### Tryb 1: Przypisz Szablon Witryny

W tym trybie Twoi klienci nie będą mogli wybrać szablonu podczas tworzenia konta — to Ty określasz, który szablon ma być używany w każdym z Twoich Planów.

Aby to zrobić, przejdź do **Ultimate Multisite > Produkty > Edytuj**.

![Edycja produktu w celu przypisania szablonu witryny](/img/config/product-site-templates.png)

Przeniesie Cię to na stronę **Edycja produktu**. W sekcji **Opcje produktu** znajdź zakładkę **Szablon witryny** i wybierz opcję **Przypisz Szablon Witryny** z pola rozwijanego. Wyświetli się lista dostępnych szablonów witryn, z której możesz wybrać tylko jeden szablon dedykowany dla produktu.

![Zakładka szablonu witryny produktu z opcją przypisania szablonu](/img/config/product-site-templates.png)

#### Tryb 2: Wybierz dostępny Szablon Witryny

W tym trybie dajesz swoim klientom możliwość wyboru podczas rejestracji. Będą mogli wybrać spośród różnych szablonów witryn, które zdefiniujesz w ustawieniach produktu. Możesz ograniczyć szablony dostępne do wyboru w ramach wybranego produktu. Pozwala to mieć różne zestawy szablonów witryn dla każdego produktu, co jest idealne do wyróżnienia różnych funkcji i możliwości w droższych produktach.

Na stronie **Edycja produktu**, w sekcji **Opcje produktu**, znajdź zakładkę **Szablon witryny** i wybierz opcję **Wybierz dostępny Szablon Witryny** z pola rozwijanego. Wyświetli się lista dostępnych szablonów witryn, z której możesz wybrać te, które mają być dostępne. Możesz to zrobić, wybierając dla każdego Zachowanie: **Dostępny** jeśli chcesz, aby szablon witryny był na liście. _**Niedostępny**_ jeśli nie chcesz, aby szablon witryny pojawiał się jako opcja. I **Wstępnie wybrany** jeśli chcesz, aby jeden z wymienionych szablonów był domyślnie zaznaczony.

![Wybór dostępnych szablonów witryn z opcjami zachowania](/img/config/product-site-templates.png)

### Tryb domyślny: Wybór szablonu witryny w formularzu Checkout

Jeśli chcesz, aby wszystkie Twoje szablony witryn były dostępne podczas rejestracji, lub wolisz uniknąć dodatkowej pracy związanej z przypisywaniem lub określaniem szablonów witryn dla każdego tworzonego produktu — możesz po prostu ustawić wybór szablonu witryny w swoim **Formularzu Checkout**. Aby to zrobić, przejdź do **Ultimate Multisite > Formularze Checkout**. Następnie kliknij **Edytuj** przy formularzu, który chcesz skonfigurować.

![Strona listy formularzy checkout](/img/config/checkout-forms-list.png)

Przeniesie Cię to na stronę **Edycja formularza Checkout**. Znajdź pole **Wybór szablonu** i kliknij pod nim **Edytuj**.

![Edytor formularza checkout z polem wyboru szablonu](/img/config/checkout-form-editor.png)

Pojawi się okno modalne. W polu **Szablony witryn** możesz wybrać i wymienić wszystkie szablony witryn, które mają być dostępne podczas rejestracji. Szablony witryn określone tutaj będą dostępne niezależnie od tego, jaki produkt wybierze użytkownik.

![Pole szablonów witryn w edytorze formularza checkout](/img/config/checkout-form-step.png)

### Opcje Szablonów Witryn

Istnieją dodatkowe funkcje szablonów witryn, które możesz włączyć lub wyłączyć w ustawieniach Ultimate Multisite.

![Opcje szablonów witryn w ustawieniach Ultimate Multisite](/img/config/settings-sites.png)

#### Zezwól na zmianę szablonu

Włączenie tej opcji pozwoli Twoim klientom zmienić szablon, który wybrali podczas rejestracji, już po utworzeniu konta i witryny. Jest to przydatne z punktu widzenia klienta, ponieważ pozwala mu ponownie wybrać szablon, jeśli później okaże się, że pierwotny wybór nie był najlepszy dla jego konkretnych potrzeb.

#### Zezwól użytkownikom na używanie ich witryny jako szablonów

Ponieważ użytkownicy podwitryn poświęcili czas na budowanie i projektowanie własnej witryny, mogą chcieć ją sklonować i używać jako jednego z dostępnych szablonów witryn przy tworzeniu kolejnej podwitryny w Twojej sieci. Ta opcja im to umożliwi.

#### Kopiuj multimedia przy duplikacji szablonu

Zaznaczenie tej opcji spowoduje skopiowanie multimediów przesłanych na witrynę szablonową do nowo utworzonej witryny. Można to nadpisać w każdym z planów.

#### **Zapobiegaj indeksowaniu Szablonów Witryn przez wyszukiwarki**

Szablony witryn omówione w tym artykule są bazowymi witrynami, ale wciąż stanowią część Twojej sieci, co oznacza, że wyszukiwarki mogą je znaleźć. Ta opcja pozwoli Ci ukryć szablony witryn przed indeksowaniem przez wyszukiwarki.

## Wypełnianie Szablonów Witryn z automatycznym wyszukiwaniem i zamianą

Jedną z najpotężniejszych funkcji Ultimate Multisite jest możliwość dodawania dowolnych pól tekstowych, kolorów i pól wyboru do formularza rejestracji. Po zebraniu tych danych możemy ich użyć do wstępnego wypełnienia treści w określonych częściach wybranego szablonu witryny. Następnie, gdy nowa witryna jest publikowana, Ultimate Multisite zastąpi symbole zastępcze rzeczywistymi informacjami wprowadzonymi podczas rejestracji.

Na przykład, jeśli chcesz pobrać nazwę firmy od użytkownika końcowego podczas rejestracji i automatycznie umieścić ją na stronie głównej — na stronie głównej szablonu musisz dodać symbole zastępcze, jak na obrazku poniżej (symbole zastępcze należy dodawać w podwójnych nawiasach klamrowych - {{nazwa_symbolu}}).

![Strona główna z tekstem zastępczym w nawiasach klamrowych](/img/config/site-templates-list.png)

Następnie możesz po prostu dodać odpowiadające pole rejestracji w formularzu checkout, aby zebrać te dane:

![Formularz checkout z odpowiadającym polem rejestracji](/img/config/checkout-form-editor.png)

Twój klient będzie mógł wypełnić to pole podczas rejestracji.

![Pole rejestracji wypełnione przez klienta](/img/config/checkout-form-step.png)

![Podgląd formularza rejestracji](/img/config/checkout-form-editor.png)

Ultimate Multisite automatycznie zastąpi symbole zastępcze danymi podanymi przez klienta.

![Symbole zastępcze zastąpione danymi klienta na witrynie](/img/config/site-templates-list.png)

### Rozwiązanie problemu „szablonu pełnego symboli zastępczych"

To wszystko świetnie, ale pojawia się pewien problem: teraz nasze szablony witryn — które mogą odwiedzać nasi klienci — są pełne brzydkich symboli zastępczych, które niewiele mówią.

Aby to rozwiązać, oferujemy opcję ustawienia fikcyjnych wartości dla symboli zastępczych i używamy tych wartości do wyszukiwania i zamiany ich zawartości na witrynach szablonowych podczas odwiedzin Twoich klientów.

Dostęp do edytora symboli zastępczych szablonów uzyskasz, przechodząc do **Ultimate Multisite > Ustawienia > Witryny**, a następnie klikając link **Edytuj symbole zastępcze** na pasku bocznym.

![Ustawienia symboli zastępczych na stronie ustawień witryn](/img/config/settings-sites.png)

Przeniesie Cię to do edytora zawartości symboli zastępczych, gdzie możesz dodawać symbole zastępcze i ich odpowiednią zawartość.

![Edytor zawartości symboli zastępczych szablonu](/img/config/settings-sites.png)
