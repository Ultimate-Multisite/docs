---
title: Szablony witryn
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Szablony witryn (v2)

_**UWAGA: Ten artykuł dotyczy Ultimate Multisite w wersji 2.x. Jeśli używasz wersji 1.x,**_ **zobacz ten artykuł** _**.**_

Naszym celem podczas tworzenia sieci premium za pomocą Ultimate Multisite jest zautomatyzowanie jak największej liczby procesów, a jednocześnie zapewnienie naszym klientom elastyczności i różnych opcji do wyboru podczas tworzenia ich witryn. Jednym z łatwych sposobów na osiągnięcie tej równowagi jest skorzystanie z funkcji szablonów witryn Ultimate Multisite.

## Czym jest szablon witryny?

Jak sama nazwa wskazuje, szablon witryny to bazowa witryna, której można użyć jako podstawy podczas tworzenia nowych witryn w Twojej sieci.

Oznacza to, że możesz utworzyć witrynę bazową, aktywować różne pluginy, ustawić aktywny motyw i dostosować ją w dowolny sposób. Następnie, gdy Twój klient utworzy nowe Account, zamiast otrzymać domyślną witrynę WordPress bez istotnej zawartości, otrzyma kopię Twojej witryny bazowej ze wszystkimi dostosowaniami i treściami już na miejscu.

Brzmi świetnie, ale jak utworzyć nowy szablon witryny? To tak proste, jak tylko możliwe.

## Tworzenie i edytowanie nowego szablonu witryny

Szablony witryn to po prostu zwykłe witryny w Twojej sieci. Aby utworzyć nowy szablon, możesz po prostu przejść do **Administracja siecią > Ultimate Multisite > Witryny > Dodaj witrynę.**

**![Przycisk dodawania witryny na stronie listy witryn](/img/config/site-templates-list.png)**

Otworzy to okno modalne, w którym zostaniesz poproszony o podanie **tytułu witryny, domeny/ścieżki witryny** oraz **typu witryny**. W polu rozwijanym **Typ witryny** upewnij się, że wybierasz **Szablon witryny** *.*

_![Modal dodawania szablonu witryny z listą rozwijaną typu witryny](/img/config/site-templates-list.png)_

Możesz także dodać opis widoczny dla klienta, aby wyjaśnić, co zawiera szablon:

![Pole opisu szablonu witryny na ekranie edycji szablonu witryny](/img/config/site-template-edit-description.png)

Na dole formularza zauważysz przełącznik **Kopiuj witrynę**. Pozwoli Ci to utworzyć nowy szablon witryny na podstawie istniejącego szablonu witryny jako punktu wyjścia, aby pomóc Ci zaoszczędzić czas zamiast tworzyć szablon witryny od zera.

![Modal dodawania szablonu witryny z przełącznikiem kopiowania witryny](/img/config/site-templates-list.png)

### Dostosowywanie zawartości szablonu witryny

Aby dostosować swój szablon witryny, po prostu przejdź do jego panelu Dashboard i wprowadź potrzebne zmiany. Możesz tworzyć nowe wpisy, strony, aktywować pluginy i zmieniać aktywny motyw. Możesz nawet przejść do personalizatora i zmieniać wszelkiego rodzaju opcje dostosowywania.

![Interfejs edycji szablonu witryny](/img/config/site-template-edit.png)

Wszystkie te dane zostaną skopiowane, gdy klient utworzy nową witrynę na podstawie tego szablonu witryny.

### Opcje zaawansowane

Jeśli potrafisz poruszać się w niestandardowym kodowaniu, możesz skorzystać z naszego Search and Replace API, aby automatycznie zastąpić informacje w nowej witrynie po jej utworzeniu. Jest to przydatne w takich przypadkach jak zastępowanie nazw firm na stronie „O nas”, zastępowanie kontaktowego adresu e-mail na stronie kontaktowej itp.

### Korzystanie z szablonów witryn

OK, więc utworzyłeś kilka różnych szablonów witryn z różnymi projektami, motywami i ustawieniami. Jak teraz sprawić, aby były przydatne w Twojej sieci?

Zasadniczo istnieją dwa podejścia, których możesz teraz użyć (nie jednocześnie):

  * Przypisanie jednego szablonu witryny do każdego z Twoich planów

**LUB**

  * Umożliwienie klientom samodzielnego wyboru szablonów witryn podczas rejestracji.

#### Tryb 1: Przypisz szablon witryny

W tym trybie Twoi klienci nie będą mogli wybrać szablonu podczas tworzenia Account, lecz to Ty określisz, który szablon powinien być używany w każdym z Twoich planów.

Aby to zrobić, musisz przejść do **Ultimate Multisite > Produkty > Edytuj**.

![Edytuj produkt, aby przypisać szablon witryny](/img/config/product-site-templates.png)

Przeniesie Cię to na stronę **Edytuj produkt**. W sekcji **Opcje produktu** znajdź kartę **Szablon witryny** i wybierz opcję **Przypisz szablon witryny** z pola rozwijanego. Spowoduje to wyświetlenie listy dostępnych szablonów witryn i pozwoli Ci wybrać tylko jeden szablon witryny przypisany do produktu.

![Karta szablonu witryny produktu z opcją przypisania szablonu witryny](/img/config/product-site-templates.png)

#### Tryb 2: Wybierz dostępny szablon witryny

W tym trybie dasz swoim klientom wybór podczas procesu rejestracji. Będą mogli wybierać spośród różnych szablonów witryn, które określisz w ustawieniach produktu. Masz możliwość ograniczenia szablonów witryn, spośród których mogą wybierać w ramach wybranego produktu. Pozwoli Ci to mieć różne zestawy szablonów witryn pod każdym produktem, co jest idealne do wyróżnienia różnych funkcji i możliwości produktu w wyższej cenie.

Na stronie **Edytuj produkt**. W sekcji **Opcje produktu** znajdź kartę **Szablon witryny** i wybierz opcję **Wybierz dostępny szablon witryny** z pola rozwijanego. Spowoduje to wyświetlenie listy dostępnych szablonów witryn i pozwoli Ci wybrać szablon witryny, który ma być dostępny. Możesz to zrobić, wybierając jego zachowanie: **Dostępny**, jeśli chcesz, aby szablon witryny został uwzględniony na liście. _**Niedostępny**_, jeśli nie chcesz, aby szablon witryny był wyświetlany jako opcja. Oraz **Wstępnie wybrany**, jeśli chcesz, aby jeden z wymienionych szablonów witryn był wybrany domyślnie.

![Wybór dostępnych szablonów witryn z opcjami zachowania](/img/config/product-site-templates.png)

### Tryb domyślny: wybór szablonu witryny w formularzu finalizacji zakupu

Jeśli chcesz, aby wszystkie Twoje szablony witryn były dostępne podczas rejestracji, albo nie chcesz wykonywać dodatkowej pracy polegającej na przypisywaniu lub określaniu szablonów witryn pod każdym tworzonym produktem, możesz po prostu ustawić wybór szablonu witryny w swoim **formularzu finalizacji zakupu**. Aby to zrobić, przejdź do **Ultimate Multisite > Formularze finalizacji zakupu** i kliknij **Edytuj** pod formularzem, który chcesz skonfigurować.

Spowoduje to wyświetlenie strony **Edytuj formularz finalizacji zakupu**. Znajdź pole **Wybór szablonu** i kliknij pod nim **Edytuj**.

Pojawi się okno modalne. W polu **Szablony witryn** możesz wybrać i wypisać wszystkie szablony witryn, które mają być dostępne podczas rejestracji. Szablony witryn wskazane tutaj będą dostępne niezależnie od tego, jaki produkt wybrał użytkownik.

![Pole wyboru szablonu w edytorze formularza płatności](/img/config/checkout-form-template-step.png)

W interfejsie użytkownika klienci widzą wybór szablonu podczas płatności i mogą wybrać projekt startowy dla swojej nowej witryny.

![Wybór szablonu w interfejsie użytkownika podczas rejestracji](/img/config/frontend-template-chooser.png)

### Opcje szablonów witryn

Dostępne są także inne funkcje szablonów witryn, które możesz włączać lub wyłączać w ustawieniach Ultimate Multisite.

![Opcje szablonów witryn w ustawieniach Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Zezwalaj na zmianę szablonu

Włączenie tej opcji pozwoli Twoim klientom zmienić szablon wybrany podczas procesu rejestracji po utworzeniu konta i witryny. Jest to przydatne z punktu widzenia klienta, ponieważ pozwala mu ponownie wybrać szablon, jeśli później okaże się, że jego pierwotny wybór nie był najlepszy dla jego konkretnych potrzeb.

#### Zezwalaj użytkownikom na używanie ich witryny jako szablonów

Ponieważ użytkownicy podwitryn poświęcili czas na zbudowanie i zaprojektowanie własnej witryny, mogą chcieć sklonować ją i używać jako jednego z szablonów witryn dostępnych podczas tworzenia kolejnej podwitryny w Twojej sieci. Ta opcja im to umożliwi.

#### Kopiuj media przy duplikowaniu szablonu

Zaznaczenie tej opcji skopiuje media przesłane do witryny szablonu do nowo utworzonej witryny. Można to nadpisać w każdym z planów.

#### **Zapobiegaj indeksowaniu szablonów witryn przez wyszukiwarki**

Szablony witryn omawiane w tym artykule są bazowe, ale nadal stanowią część Twojej sieci, co oznacza, że nadal są dostępne dla wyszukiwarek. Ta opcja pozwoli Ci ukryć szablony witryn, aby wyszukiwarki mogły je indeksować.

## Wstępne wypełnianie szablonów witryn za pomocą automatycznego wyszukiwania i zamiany

Jedną z najpotężniejszych funkcji Ultimate Multisite jest możliwość dodawania dowolnych pól tekstowych, kolorów i wyboru do formularza rejestracji. Gdy już przechwycimy te dane, możemy użyć ich do wstępnego wypełnienia treści w określonych częściach wybranego szablonu witryny. Następnie, gdy nowa witryna będzie publikowana, Ultimate Multisite zastąpi symbole zastępcze rzeczywistymi informacjami wprowadzonymi podczas rejestracji.

Na przykład, jeśli chcesz pobrać nazwę firmy użytkownika końcowego podczas rejestracji i automatycznie umieścić nazwę firmy na stronie głównej. Na stronie głównej witryny szablonu musisz dodać symbole zastępcze, jak na poniższym obrazie (symbole zastępcze powinny być dodane w podwójnych nawiasach klamrowych - {{placeholder_name}}).

![Strona główna z tekstem symbolu zastępczego w nawiasach klamrowych](/img/config/site-templates-list.png)

Następnie możesz po prostu dodać pasujące pole rejestracji w formularzu płatności, aby przechwycić te dane. Ten sam edytor formularza płatności używany do wyboru szablonu pozwala umieszczać pola niestandardowe obok wyboru szablonu:

![Wybór szablonu i pola rejestracji w edytorze formularza płatności](/img/config/checkout-form-template-step.png)

Twój klient będzie wtedy mógł wypełnić to pole podczas rejestracji.

![Formularz płatności w interfejsie użytkownika z wyborem szablonu](/img/config/frontend-template-chooser.png)

Ultimate Multisite automatycznie zastąpi symbole zastępcze danymi podanymi przez klienta.

![Symbole zastępcze zastąpione danymi klienta w witrynie](/img/config/site-templates-list.png)

### Rozwiązywanie problemu „szablonu pełnego symboli zastępczych”

Wszystko to jest świetne, ale natrafiamy na nieestetyczny problem: nasze szablony witryn — które mogą być odwiedzane przez naszych klientów — są teraz pełne nieładnych symboli zastępczych, które niewiele mówią.

Aby to rozwiązać, oferujemy opcję ustawienia fikcyjnych wartości dla symboli zastępczych i używamy tych wartości do wyszukiwania oraz zastępowania ich treści w witrynach szablonów podczas odwiedzin Twoich klientów.

Dostęp do edytora symboli zastępczych szablonu możesz uzyskać, przechodząc do **Ultimate Multisite > Ustawienia > Witryny**, a następnie klikając link **Edytuj symbole zastępcze** na pasku bocznym.

![Ustawienia szablonów witryn na stronie ustawień Witryn](/img/config/settings-sites-templates-section.png)

To przeniesie Cię do edytora treści symboli zastępczych, w którym możesz dodać symbole zastępcze i odpowiadającą im treść.

![Punkt wejścia do edytora treści symboli zastępczych szablonu](/img/config/settings-sites-templates-section.png)
