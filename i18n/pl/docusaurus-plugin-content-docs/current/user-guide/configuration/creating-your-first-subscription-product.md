---
title: Tworzenie pierwszego produktu subskrypcyjnego
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Tworzenie pierwszego produktu subskrypcyjnego (v2)

_**WAŻNA UWAGA: Ten artykuł jest przeznaczony wyłącznie dla użytkowników Ultimate Multisite w wersji 2.x. Jeśli używasz wersji 1.x,**_ **_**zobacz ten artykuł**_**.

Aby zacząć prowadzić swoją sieć i sprzedawać swoje usługi potencjalnym użytkownikom, musisz mieć różne opcje subskrypcji. Jak tworzy się te produkty? Jakie typy produktów możesz oferować? W tym artykule omówimy wszystko, co musisz wiedzieć o produktach.

## Typ produktu

Z Ultimate Multisite możesz oferować swoim klientom dwie kategorie produktów: **plany** i **dodatki** **(Order Bump)**. Dodatki można podzielić na dwa typy: **pakiety** i **usługi**. Następnie omówimy ich różnice i szczególne cechy.

  * **Plany** : podstawowy produkt Ultimate Multisite. Twój klient może mieć członkostwo tylko wtedy, gdy jest ono przypisane do planu. Plan zapewnia Twoim klientom jedną lub więcej witryn (zależy to od konfiguracji Twojego planu) z ograniczeniami ustawionymi na stronie edycji produktu.

  * **Pakiety** : dodatki, które bezpośrednio wpływają na funkcjonalności planów Ultimate Multisite. Zmieniają ograniczenia lub dodają nowe zasoby, plugins albo themes do pierwotnego planu kupionego przez klienta. Na przykład podstawowy plan może pozwalać na 1000 wizyt miesięcznie, a Ty możesz udostępnić pakiet, który zwiększa tę liczbę do 10 000.

  * **Usługi:** dodatki, które nie zmieniają funkcjonalności Ultimate Multisite. Są to zadania, które wykonasz dla swojego klienta oprócz kupionego przez niego planu. Na przykład Twój klient może kupić plan pozwalający na jedną witrynę i dodatkowo zapłacić za dodatkową usługę, w ramach której zostanie wykonany projekt tej witryny.

## Zarządzanie produktami

Dla wielu karta **Products** w Ultimate Multisite **(Ultimate Multisite > Products)** może być utożsamiana z planami w tradycyjnym środowisku hostingowym.

W Ultimate Multisite karta Products definiuje strukturę i ograniczenia mające zastosowanie do konkretnego produktu lub usługi. Takie struktury obejmują opis produktu lub usługi, cenę, podatki i uprawnienia.

Ta sekcja pomoże Ci zrozumieć ten kluczowy fundament Ultimate Multisite.

![Strona listy produktów](/img/config/products-list.png)

## Dodawanie produktów

Niezależnie od tego, czy chodzi o plan, pakiet czy usługę, punktem wejścia do zdefiniowania nowej pozycji jest **Ultimate Multisite > Products > Add Product**.

![Przycisk Add Product](/img/config/product-add-button.png)

Interfejs zawiera dwie główne sekcje. Po lewej znajduje się kilka kart, które pomagają w definiowaniu produktu, a po prawej kilka sekcji służących do określenia ceny bazowej produktu, jego aktywnego stanu oraz obrazu produktu.

![Przegląd strony edycji produktu](/img/config/product-edit-full.png)

### Opis

Podstawowe informacje o produkcie można zdefiniować, podając nazwę i opis produktu. Te identyfikatory są wyświetlane wszędzie tam, gdzie wymagane są informacje o produkcie, na przykład przy wyborze planu i cen, na fakturach, przy ulepszeniach i tym podobnych.

![Sekcja opisu produktu](/img/config/product-description.png)

### Typ wyceny

Po prawej stronie interfejsu można zdefiniować cenę bazową.

![Sekcja wyceny i zapisywania](/img/config/product-pricing-save.png)

Ultimate Multisite obsługuje trzy różne typy wyceny. Opcja **płatny** prosi administratora sieci o informacje dotyczące ceny produktu i częstotliwości rozliczeń.

### Wycena

Komponent ceny definiuje bazową cenę produktu oraz interwał rozliczeniowy.

![Sekcja wyceny i zapisywania](/img/config/product-pricing-save.png)

tak więc przykładowa cena 29,99 USD z ustawieniem 1 miesiąca spowoduje naliczanie 29,99 USD każdego miesiąca. Podobnie cena 89,97 USD z ustawieniem 3 miesięcy spowoduje naliczanie tej kwoty co kwartał.

### Cykle rozliczeniowe

Sekcja cykli rozliczeniowych określa częstotliwość wspomnianego wcześniej interwału rozliczeniowego i jest ogólnie rozumiana w kontekście umów lub stałych okresów.

![Sekcja wyceny i zapisywania](/img/config/product-pricing-save.png)

Na przykład cena produktu 29,99 USD z interwałem 1 miesiąca i 12 cyklami rozliczeniowymi oznaczałaby naliczanie 29,99 USD miesięcznie za produkt przez kolejne 12 miesięcy. Innymi słowy, takie ustawienie ustanowiłoby stały okres z ceną 29,99 USD miesięcznie przez 12 miesięcy, a następnie zakończyłoby naliczanie opłat.

### Okres próbny

Włączenie przełącznika oferty próbnej pozwala administratorowi sieci zdefiniować okres próbny dla produktu.

![Sekcja wyceny i zapisywania](/img/config/product-pricing-save.png)

W okresie próbnym klienci mogą bezpłatnie korzystać z produktu i nie zostaną obciążeni opłatą, dopóki okres próbny się nie zakończy.

### Opłata konfiguracyjna

Możesz także zastosować opłatę konfiguracyjną do swojego planu.

![Sekcja wyceny i zapisywania](/img/config/product-pricing-save.png)

Oznacza to, że Twój klient zapłaci dodatkową kwotę przy pierwszym obciążeniu (oprócz ceny planu), odpowiadającą opłacie zdefiniowanej w tej sekcji.

### Aktywny

Przełącznik aktywności skutecznie określa, czy produkt jest dostępny dla klientów przy nowych rejestracjach.

![Przełącznik aktywności](/img/config/product-active.png)

Jeśli na tym planie są już istniejący klienci, ustawienie przełącznika w stanie wyłączonym skutecznie zachowuje plan dla dotychczasowych klientów, usuwając go z przyszłych rejestracji. **Istniejący klienci korzystający z planu nadal będą rozliczani**, dopóki nie zostaną przeniesieni na nowy plan lub usunięci z planu.

### Obraz produktu

Przycisk **Upload Image** pozwala administratorowi sieci skorzystać z biblioteki mediów, aby wybrać lub przesłać obraz produktu.

![Sekcja obrazu produktu](/img/config/product-image.png)

### Usuń

Przycisk **Delete Product** usuwa produkt z systemu. Pojawia się po opublikowaniu produktu.

![Sekcja usuwania produktu](/img/config/product-delete.png)

W przeciwieństwie do innych usunięć produkt nie trafia do żadnego kosza. Dlatego po usunięciu ta czynność jest nieodwracalna.

### Opcje produktu

Po zdefiniowaniu podstawowych informacji o produkcie opcje produktu pomagają administratorowi sieci dalej określić konkretne atrybuty produktu.

#### Ogólne

Karta **Ogólne** definiuje ogólne atrybuty produktu, które nie mają zastosowania do żadnych innych kart specyficznych dla produktu.

![Karta Ogólne](/img/config/product-general-tab.png)

Samoopisowy **slug produktu** definiuje slug, za pomocą którego produkt jest identyfikowany w adresach URL i innych obszarach Ultimate Multisite.

Ultimate Multisite obsługuje kilka typów produktów, mianowicie Plan, Pakiet i Usługę. Karty **Opcje produktu** są dynamicznie dostosowywane w zależności od określonego typu produktu.

**Rola klienta** określa rolę przypisywaną klientowi podczas tworzenia witryny. Zazwyczaj dla większości administratorów sieci będzie to domyślna rola Ultimate Multisite albo Administrator. Domyślną rolę Ultimate Multisite można ustawić w **Ultimate Multisite > Ustawienia > Logowanie i rejestracja**.

![Ustawienia roli klienta](/img/config/product-customer-role-settings.png)

#### Ulepszenia i obniżenia

Ta karta określa ścieżki ulepszeń i obniżeń dostępne dla klienta w ramach jego konkretnego poziomu.

Aby zrozumieć tę koncepcję, rozważ przykład, w którym niszowa instalacja Ultimate Multisite zapewnia swoim klientom rozwiązania do zarządzania nauczaniem. Aby to osiągnąć, zdefiniowano trzy plany (Basic, Plus i Premium), a dla każdego planu aktywowano określone pluginy (instrukcje dotyczące aktywowania pluginów znajdziesz dalej w tej sekcji).

Jeśli instalacja Ultimate Multisite obsługuje również witryny firmowe lub witryny eCommerce, plany te mogą wymagać zainstalowania i aktywowania innych pluginów.

W tym zakresie niepożądane i problematyczne byłoby umożliwienie klientom eLearning przechodzenia na plany eCommerce, ponieważ te plany, ceny i ograniczenia mogą nie być odpowiednio dopasowane.

Dlatego, aby ograniczyć ścieżkę klienta i zapobiegać incydentom, administrator sieci może zdefiniować grupę planów i w ramach tej grupy określić plany, na które klient może przejść.

![Karta Ulepszenia i obniżenia](/img/config/product-upgrades.png)

Aby zdefiniować grupę planów, określ zgodne plany na liście **grupa planów**. **Kolejność produktu** określa, jak plany są uporządkowane i wyświetlane — od najniższego do najwyższego.

Ultimate Multisite zawiera również funkcję **order bump**, dzięki której odpowiednie dodatkowe produkty i usługi mogą być dodawane do planów. Są one oferowane klientowi jako dodatkowe pozycje, które można dodać do planów podczas checkout lub w trakcie ulepszenia.

#### Warianty cenowe

Warianty cenowe pozwalają administratorowi sieci określić alternatywne poziomy cenowe w zależności od czasu trwania. To ustawienie umożliwia oferowanie tego samego produktu w miesięcznym, kwartalnym, rocznym lub dowolnym innym okresie rozliczeniowym. Na przykład możesz skonfigurować produkt za $29.99/miesiąc z obniżoną opcją roczną za $249.99/rok.

![Karta Warianty cenowe](/img/config/product-price-variations-tab.png)

Aby ustanowić warianty cenowe, ustaw przełącznik **Włącz warianty cenowe** jako aktywny i kliknij przycisk **Dodaj nowy wariant cenowy**.

![Warianty cenowe produktu](/img/config/product-price-variations.png)

Aby wprowadzić wariant, ustaw czas trwania, okres i cenę wariantu. Dodatkowe warianty można wprowadzić, klikając przycisk ponownie.

Na przykład, jeśli bazowa cena produktu wynosi $29.99 miesięcznie, możesz dodać:

  * **3 miesiące** za $79.99 (niewielka zniżka względem płatności miesięcznej)
  * **1 rok** za $249.99 (znaczna zniżka za roczne zobowiązanie)

:::tip Displaying a Billing Period Toggle on the Frontend

Same warianty cenowe nie dodają przełącznika ani przełącznika typu switch do frontend checkout. Aby umożliwić klientom przełączanie się między okresami rozliczeniowymi (np. miesięczny / roczny), musisz dodać pole **Wybór okresu** do formularza checkout. Zobacz [Formularze checkout: dodawanie przełącznika wyboru okresu](checkout-forms#adding-a-period-selection-toggle), aby uzyskać instrukcje krok po kroku.
:::

#### Podatki

Karta **Podatki** jest zgodna z ustawieniami podatków określonymi w **Ultimate Multisite > Ustawienia > Podatki**, a dokładniej ze zdefiniowanymi stawkami podatkowymi. Aby włączyć podatki i zdefiniować obowiązujące stawki podatkowe, zapoznaj się z dokumentacją w **Ultimate Multisite: Ustawienia**

![Karta Podatki](/img/config/product-taxes.png)

W poprzednim przykładzie zdefiniowaliśmy lokalną stawkę podatku 7,25% mającą zastosowanie do klientów w Kalifornii (Stany Zjednoczone Ameryki).

Po zdefiniowaniu stawki podatku w **Ultimate Multisite > Ustawienia > Zarządzaj stawkami podatkowymi** można ją wybrać na poziomie produktu.

![Karta Podatki](/img/config/product-taxes.png)

Aby wskazać, że produkt jest pozycją podlegającą opodatkowaniu, ustaw przełącznik **Podlega opodatkowaniu** jako aktywny i wybierz odpowiednią stawkę podatku z listy rozwijanej Kategoria podatkowa.

#### Szablony witryn

Zasadniczo szablony witryn to kompletne witryny WordPress, które są klonowane do witryny klienta na początku jego subskrypcji.

![Karta Szablony witryn](/img/config/product-site-templates.png)

Administrator sieci tworzy i konfiguruje witrynę szablonu jako zwykłą witrynę WordPress z aktywowanymi i skonfigurowanymi motywami, pluginami oraz treścią. Witryna szablonu jest klonowana klientowi dosłownie.

Ta karta pozwala administratorowi sieci określić zachowanie szablonów witryn przy nowej subskrypcji. Aby używać szablonów witryn dla tego planu, ustaw przełącznik **Zezwalaj na szablony witryn** w stan aktywny.

Gdy **Zezwalaj na szablony witryn** jest wyłączone, klienci w planie nie mogą wybierać szablonów, nawet jeśli formularz checkout, link do udostępniania lub parametr URL w innym przypadku udostępniałyby szablony. Ultimate Multisite egzekwuje teraz ten limit za pomocą łańcucha awaryjnego obejmującego dostępne punkty wejścia: najpierw sprawdzane są ustawienia planu, potem ustawienia szablonu formularza checkout, a następnie wstępnie wybrane lub podane przez URL szablony. Dzięki temu limity planów pozostają spójne i zapobiega to pojawianiu się szablonów dla produktów, które nie powinny ich oferować.

**Tryb wyboru szablonu site** określa zachowanie szablonów site podczas procesu subskrypcji.

Ustawienie **D** **omyślne** podąża za krokami w formularzu checkout. Jeśli administrator sieci zdefiniował krok wyboru szablonu w procesie checkout, a krok został zdefiniowany z szablonami, to ustawienie będzie respektować dyrektywy ustanowione w kroku checkout.

Określenie **P** **rzypisz szablon site** wymusza wybór wskazanego szablonu. W konsekwencji wszelkie kroki wyboru szablonu w procesie checkout zostają usunięte.

Na koniec **W** **ybierz dostępne szablony site** zastępuje szablony określone w kroku checkout szablonami wybranymi w tym ustawieniu. Można również zdefiniować wstępnie wybrany szablon, aby pomóc klientowi w wyborze.

Ostatecznie, jeśli administrator sieci chce, aby wybór szablonu odbywał się w krokach checkout, wystarczy ustawienie „ _default_ ”. Alternatywnie, aby usunąć i zablokować wybór szablonu oraz delegować wybór do ustawień planu, pożądane mogą być opcje „ _assign new template_ ” lub „ _choose available site templates_ ”.

#### Witryny

Karta **Sites** jest częścią funkcjonalności ograniczeń Ultimate Multisite.

![Karta Sites](/img/config/product-sites.png)

To ustawienie określa maksymalną liczbę witryn, które klient może utworzyć w ramach swojego członkostwa.

Aby włączyć ograniczenie, ustaw przełącznik **limit sites** w stan aktywny i określ maksymalną liczbę witryn w polu **site allowance**.

#### Wizyty

Karta **Visits** jest kolejną częścią systemu ograniczeń Ultimate Multisite. To ustawienie pozwala na zliczanie i późniejsze ograniczanie unikalnych odwiedzających witrynę klienta.

![Karta Visits](/img/config/product-visits.png)

Z perspektywy marketingowej administratorzy sieci mogą wykorzystać to ustawienie jako sposób zachęcania klientów do ulepszenia swojego planu po osiągnięciu limitów. To ustawienie może również pomóc administratorowi sieci ograniczać i zapobiegać nadmiernemu ruchowi na witrynach, aby zachować zasoby systemowe.

Aby skorzystać z tej funkcji, ustaw przełącznik **limit unique visits** w stan aktywny i określ maksymalną liczbę unikalnych odwiedzających w polu **unique visits quota**.

Po osiągnięciu tego limitu Ultimate Multisite przestanie obsługiwać witrynę klienta, zamiast wyświetlać komunikat wskazujący, że limity zostały przekroczone.

#### Użytkownicy

Ograniczenia „Users” w Ultimate Multisite pozwalają administratorowi sieci nakładać limity na liczbę użytkowników, których można utworzyć i przypisać do ról.

![Karta Users](/img/config/product-users.png)

Aby włączyć funkcję ograniczeń, ustaw przełącznik **limit user** w stan aktywny, przesuwając go w prawo.

Następnie dla każdej roli, która ma zostać ograniczona, ustaw przełącznik obok niej w stan aktywny i zdefiniuj maksymalny górny limit w odpowiednim polu.

#### Typy wpisów

Karta **Post Types** pozwala administratorowi sieci nakładać szczegółowe limity na rozbudowany zestaw typów wpisów w WordPress.

![Karta Post Types](/img/config/product-post-types.png)

Ze względu na konstrukcję WordPress wpisy i typy wpisów są istotnym komponentem jego podstawowej funkcjonalności, dlatego system ograniczeń Ultimate Multisite został zaprojektowany, aby pomagać administratorowi sieci w ustanawianiu i utrzymywaniu limitów.

Aby włączyć ten podsystem limitów, ustaw przełącznik **limit post types** w stan aktywny, przesuwając go w prawo.

Następnie dla każdego typu wpisu, który ma zostać ograniczony, włącz go, przesuwając przełącznik w prawo i określając maksymalny górny limit w odpowiednim polu.

#### Miejsce na dysku

Karta **Disk Space** pozwala administratorom sieci ograniczać przestrzeń zajmowaną przez klientów.

![Karta Disk Space](/img/config/product-disk-space.png)

Zazwyczaj w WordPress multisite pliki rdzenia są współdzielone między wszystkimi witrynami, a dla plików multimedialnych i przesłanych plików tworzone są indywidualne katalogi, do których mają zastosowanie te ustawienia i ograniczenia.

Aby włączyć ograniczenie użycia dysku, ustaw przełącznik **limit disk size per site** w stan aktywny, przesuwając go w prawo.

Następnie określ maksymalny górny limit w megabajtach w polu **disk space allowanc** e.

#### Domena niestandardowa

Przełączając tę opcję, możesz zezwolić na domeny niestandardowe konkretnie w tym planie.

![Karta Custom Domains](/img/config/product-custom-domains.png)

#### Motywy

Karta **Themes** w opcjach produktu pozwala administratorowi sieci udostępniać motywy klientom do wyboru oraz opcjonalnie wymuszać stan motywu.

![Karta Themes](/img/config/product-themes.png)

_**Uwaga: Aby motywy mogły być udostępnione klientom, muszą zostać włączone w sieci przez administratora sieci.**_

![Strona motywów sieciowych](/img/config/product-themes-network-enabled.png)

Opcja **visibility** określa, czy ten motyw jest widoczny dla klienta podczas przeglądania karty **Wygląd > Motywy** w jego witrynie. Ustawienie tej opcji na **Ukryty** usuwa motyw z widoku, a tym samym ogranicza możliwość jego wyboru i aktywacji.

![Karta Themes](/img/config/product-themes.png)

Wybór **behavior** pozwala administratorowi sieci zdefiniować stan motywu po utworzeniu witryny klienta.

W stanie **D** **ostępny** motyw zostaje udostępniony klientowi do samodzielnej aktywacji. Z kolei stan **Niedostępny** odbiera klientowi możliwość aktywowania motywu. Na koniec opcja **Wymuś aktywację** wymusza wybór i aktywację motywu, ustawiając go tym samym jako domyślny po utworzeniu witryny.

#### Wtyczki

Podobnie jak w karcie Motywy, Ultimate Multisite pozwala administratorowi sieci definiować widoczność wtyczek dla klientów, a także ich stan po utworzeniu nowej witryny.

![Karta Plugins](/img/config/product-plugins.png)

Lista rozwijana **visibility** pozwala, aby wtyczka była widoczna albo ukryta przed klientem podczas przeglądania jej w jego witrynie przez opcję menu Plugins.

Administrator sieci może dodatkowo modyfikować zachowanie pluginów, korzystając z opcji w menu rozwijanym zachowania.

![Zakładka pluginów](/img/config/product-plugins.png)

Wybór **Default** respektuje stan pluginu zdefiniowany w szablonie witryny wybranym przez klienta. Dlatego pluginy, które są aktywowane w szablonie, pozostaną aktywowane, gdy szablon zostanie sklonowany do witryny klienta.

Opcja **Force Activate** ustawia plugin w stanie aktywnym podczas tworzenia witryny, a odwrotnie **Force Inactivate** dezaktywuje plugin podczas tworzenia witryny. W obu tych przypadkach stan pluginu może zostać ręcznie zmieniony przez klienta za pośrednictwem menu WordPress Plugins.

Ustawienie **Force Activate & Lock** działa podobnie, ale uniemożliwia klientowi zmianę stanu pluginu. Dlatego ustawienie Force Activate and Lock wymusi aktywny stan pluginu i uniemożliwi klientowi jego dezaktywację. Podobnie ustawienie **Force Inactivate & Lock** wymusi nieaktywny stan pluginu i uniemożliwi użytkownikowi aktywację pluginu.

Administrator sieci może rozważyć ustawienia Force Activate & Lock oraz Force Inactivate & Lock w połączeniu z szablonami witryn, ponieważ te ustawienia, jeśli zostaną wybrane, mogą wpływać na pluginy i stany pluginów w szablonach.

#### Resetowanie ograniczeń

Zakładka **Reset Limitations** resetuje wszystkie niestandardowe limity zdefiniowane dla produktu. Aby zresetować ograniczenia, kliknij przycisk **reset limitations**.

![Zakładka resetowania ograniczeń](/img/config/product-reset-limitations.png)

Aby potwierdzić działanie, przesuń przełącznik **confirm reset** do stanu aktywnego po prawej stronie i kliknij przycisk **reset limitations**.

![Zakładka resetowania ograniczeń](/img/config/product-reset-limitations.png)

## Edytuj, duplikuj lub usuń produkt

Istniejące produkty można edytować, duplikować lub usuwać, przechodząc do **Ultimate Multisite > Products** i najeżdżając kursorem na nazwę istniejącego produktu.

![Akcje po najechaniu na produkt](/img/config/product-hover-actions.png)
