---
title: Tworzenie Twojego Pierwszego Produktu Subskrypcyjnego
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Tworzenie pierwszego produktu subskrypcyjnego (v2)

_**WAŻNA UWAGA: Ten artykuł dotyczy wyłącznie użytkowników Ultimate Multisite w wersji 2.x. Jeśli korzystasz z wersji 1.x,**_ **_**zobacz ten artykuł**_**.

Aby uruchomić swoją sieć i zacząć sprzedawać usługi potencjalnym użytkownikom, musisz mieć różne opcje subskrypcji. Jak tworzyć takie produkty? Jakie rodzaje produktów możesz oferować? W tym artykule omówimy wszystko, co musisz wiedzieć o produktach.

## Typ produktu

Dzięki Ultimate Multisite możesz oferować klientom dwie kategorie produktów: **plany** i **dodatki** **(Order Bump)**. Dodatki dzielą się na dwa typy: **pakiety** i **usługi**. Poniżej omówimy ich różnice i specyfikę.

  * **Plany**: podstawowy produkt Ultimate Multisite. Twój klient może mieć członkostwo tylko wtedy, gdy jest ono powiązane z planem. Plan zapewnia klientom jedną lub więcej stron (w zależności od konfiguracji planu) z ograniczeniami, które ustawiasz na stronie edycji produktu.

  * **Pakiety**: dodatki, które bezpośrednio wpływają na funkcjonalność planów Ultimate Multisite. Zmieniają ograniczenia lub dodają nowe zasoby, pluginy czy motywy do oryginalnego planu, który kupił klient. Na przykład podstawowy plan może pozwalać na 1000 wizyt miesięcznie, a Ty możesz udostępnić pakiet rozszerzający tę liczbę do 10 000.

  * **Usługi:** dodatki, które nie zmieniają funkcjonalności Ultimate Multisite. Są to zadania, które wykonasz dla klienta dodatkowo do zakupionego planu. Na przykład klient może kupić plan pozwalający na jedną stronę i dodatkowo zapłacić za usługę zaprojektowania tej strony.

## Zarządzanie produktami

Dla wielu osób zakładka **Produkty** w Ultimate Multisite **(Ultimate Multisite > Produkty)** może być porównywalna z planami w tradycyjnym środowisku hostingowym.

W Ultimate Multisite zakładka Produkty definiuje strukturę i ograniczenia dotyczące konkretnego produktu lub usługi. Takie struktury obejmują opis produktu lub usługi, cenę, podatki i uprawnienia.

Ta sekcja pomoże Ci zrozumieć ten podstawowy element Ultimate Multisite.

![Strona listy produktów](/img/config/products-list.png)

## Dodawanie produktów

Niezależnie od tego, czy chodzi o plan, pakiet czy usługę, punktem wyjścia do definiowania nowego elementu jest **Ultimate Multisite > Produkty > Dodaj produkt**.

![Przycisk Dodaj produkt](/img/config/product-add-button.png)

Interfejs zawiera dwie główne sekcje. Po lewej stronie znajduje się kilka zakładek, które pomagają w definiowaniu produktu, a po prawej stronie sekcje do ustawienia ceny bazowej produktu, jego stanu aktywności oraz obrazu produktu.

![Przegląd strony edycji produktu](/img/config/product-edit-full.png)

### Opis

Podstawowe informacje o produkcie można zdefiniować, podając nazwę i opis produktu. Te identyfikatory są wyświetlane wszędzie tam, gdzie wymagane są informacje o produkcie, np. przy wyborze planu i cennika, na fakturach, przy aktualizacjach itp.

![Sekcja opisu produktu](/img/config/product-description.png)

### Typ cenowy

Po prawej stronie interfejsu można zdefiniować cenę bazową.

![Sekcja cennika i zapisu](/img/config/product-pricing-save.png)

Ultimate Multisite obsługuje trzy różne typy cenowe. Opcja **płatny** wymaga od administratora sieci podania informacji o cenie produktu i częstotliwości rozliczeń.

### Cennik

Komponent cennika definiuje bazową cenę produktu i interwał rozliczeniowy.

![Sekcja cennika i zapisu](/img/config/product-pricing-save.png)

Na przykład cena 29,99 USD z ustawieniem 1 miesiąca oznacza naliczanie 29,99 USD co miesiąc. Podobnie cena 89,97 USD z ustawieniem 3 miesięcy oznacza naliczanie tej kwoty co kwartał.

### Cykle rozliczeniowe

Sekcja cykli rozliczeniowych określa częstotliwość wspomnianego interwału rozliczeniowego i jest zazwyczaj rozumiana w kontekście umów lub okresów stałych.

![Sekcja cennika i zapisu](/img/config/product-pricing-save.png)

Na przykład cena produktu 29,99 USD z interwałem 1 miesiąca i 12 cyklami rozliczeniowymi oznacza naliczanie 29,99 USD miesięcznie przez kolejne 12 miesięcy. Innymi słowy, takie ustawienie ustanawia okres ze stałą ceną 29,99 USD miesięcznie przez 12 miesięcy, po czym rozliczenia ustają.

### Okres próbny

Włączenie przełącznika oferty próbnej pozwala administratorowi sieci zdefiniować okres próbny dla produktu.

![Sekcja cennika i zapisu](/img/config/product-pricing-save.png)

W okresie próbnym klienci mogą swobodnie korzystać z produktu i nie są obciążani opłatami, dopóki okres próbny nie dobiegnie końca.

### Opłata instalacyjna

Możesz również dodać opłatę instalacyjną do swojego planu.

![Sekcja cennika i zapisu](/img/config/product-pricing-save.png)

Oznacza to, że klient zapłaci dodatkową kwotę przy pierwszej płatności (oprócz ceny planu), odpowiadającą opłacie zdefiniowanej w tej sekcji.

### Aktywny

Przełącznik aktywności określa, czy produkt jest dostępny dla klientów do nowych rejestracji.

![Przełącznik aktywności](/img/config/product-active.png)

Jeśli na tym planie są już istniejący klienci, ustawienie przełącznika w stanie wyłączonym skutecznie „dziadkuje" plan, usuwając go z przyszłych rejestracji. **Istniejący klienci na tym planie będą nadal rozliczani**, dopóki nie zostaną przeniesieni na nowy plan lub usunięci z planu.

### Obraz produktu

Przycisk **Prześlij obraz** pozwala administratorowi sieci korzystać z biblioteki mediów do wyboru lub przesłania obrazu produktu.

![Sekcja obrazu produktu](/img/config/product-image.png)

### Usuwanie

Przycisk **Usuń produkt** usuwa produkt z systemu. Pojawia się po opublikowaniu produktu.

![Sekcja usuwania produktu](/img/config/product-delete.png)

W przeciwieństwie do innych usunięć, produkt nie jest umieszczany w koszu. Po usunięciu akcja jest nieodwracalna.

### Opcje produktu

Po zdefiniowaniu podstawowych informacji o produkcie, opcje produktu pomagają administratorowi sieci dokładniej określić konkretne atrybuty produktu.

#### Ogólne

Zakładka **Ogólne** definiuje ogólne atrybuty produktu, które nie dotyczą żadnej z pozostałych zakładek specyficznych dla produktu.

![Zakładka Ogólne](/img/config/product-general-tab.png)

Oczywisty **slug produktu** definiuje slug, którym produkt jest identyfikowany w adresach URL i innych obszarach Ultimate Multisite.

Ultimate Multisite obsługuje kilka typów produktów: Plan, Pakiet i Usługa. Zakładki **Opcje produktu** są dynamicznie dostosowywane w zależności od określonego typu produktu.

**Rola klienta** określa rolę przypisywaną klientowi podczas tworzenia strony. Zazwyczaj dla większości administratorów sieci będzie to domyślna rola Ultimate Multisite lub Administrator. Domyślną rolę Ultimate Multisite można ustawić w **Ultimate Multisite > Ustawienia > Logowanie i rejestracja**.

![Ustawienia roli klienta](/img/config/product-customer-role-settings.png)

#### Aktualizacje i obniżenia

Ta zakładka określa ścieżki aktualizacji i obniżenia dostępne dla klienta w ramach jego konkretnego poziomu.

Aby zrozumieć tę koncepcję, rozważmy przykład, w którym niszowa instalacja Ultimate Multisite dostarcza rozwiązania do zarządzania nauczaniem dla swoich klientów. W tym celu definiuje się trzy plany (Basic, Plus i Premium), a dla każdego planu aktywowane są określone pluginy (instrukcje aktywacji pluginów znajdziesz w dalszej części tej sekcji).

Jeśli instalacja Ultimate Multisite obsługuje również strony biznesowe lub sklepy eCommerce, te plany mogą wymagać instalacji i aktywacji innych pluginów.

W tym zakresie niepożądane i problematyczne byłoby pozwolenie klientom eLearning na przejście do planów eCommerce, ponieważ te plany, ceny i ograniczenia mogą nie być odpowiednie.

Dlatego, aby ograniczyć ścieżkę klienta i zapobiec incydentom, administrator sieci może zdefiniować grupę planów i w ramach tej grupy określić plany, na które klient może przejść.

![Zakładka Aktualizacje i obniżenia](/img/config/product-upgrades.png)

Aby zdefiniować grupę planów, określ kompatybilne plany na liście **grupa planów**. **Kolejność produktów** określa, jak plany są uporządkowane i wyświetlane od najniższego do najwyższego.

Ultimate Multisite zawiera również funkcję **order bump**, w której odpowiednie produkty dodatkowe i usługi można dodawać do planów. Są one oferowane klientowi jako dodatkowe elementy, które można dodać do planów podczas finalizacji zamówienia lub aktualizacji.

#### Warianty cenowe

Warianty cenowe pozwalają administratorowi sieci określić alternatywne poziomy cenowe w zależności od czasu trwania. To ustawienie umożliwia ustalenie poziomów cenowych na 3 miesiące, 6 miesięcy lub rok, lub dowolny inny czas trwania i częstotliwość w zależności od przypadku użycia.

![Zakładka Warianty cenowe](/img/config/product-price-variations.png)

Aby ustalić warianty cenowe, ustaw przełącznik **włącz warianty cenowe** w stan aktywny i kliknij przycisk **Dodaj nowy wariant cenowy**.

Aby wprowadzić wariant, ustaw czas trwania, okres i cenę wariantu. Dodatkowe warianty można wprowadzić, klikając przycisk ponownie.

![Zakładka Warianty cenowe](/img/config/product-price-variations.png)

#### Podatki

Zakładka **Podatki** jest powiązana z ustawieniami podatkowymi określonymi w **Ultimate Multisite > Ustawienia > Podatki**, a konkretnie ze zdefiniowanymi stawkami podatkowymi. Aby włączyć podatki i zdefiniować obowiązujące stawki podatkowe, zobacz dokumentację w **Ultimate Multisite: Ustawienia**

![Zakładka Podatki](/img/config/product-taxes.png)

W poprzednim przykładzie zdefiniowaliśmy lokalną stawkę podatkową 7,25% obowiązującą dla klientów w Kalifornii (Stany Zjednoczone).

Po zdefiniowaniu stawki podatkowej w **Ultimate Multisite > Ustawienia > Zarządzaj stawkami podatkowymi** można ją wybrać na poziomie produktu.

![Zakładka Podatki](/img/config/product-taxes.png)

Aby wskazać, że produkt jest pozycją podlegającą opodatkowaniu, ustaw przełącznik **Podlega opodatkowaniu** w stan aktywny i wybierz odpowiednią stawkę podatkową z rozwijanej listy Kategoria podatkowa.

#### Szablony stron

W istocie szablony stron to kompletne strony WordPress, które są klonowane na stronę klienta na początku jego subskrypcji.

![Zakładka Szablony stron](/img/config/product-site-templates.png)

Administrator sieci tworzy i konfiguruje szablon strony jak zwykłą stronę WordPress z aktywowanymi i skonfigurowanymi motywami, pluginami i treścią. Szablon strony jest klonowany dosłownie do klienta.

Ta zakładka pozwala administratorowi sieci określić zachowanie szablonów stron przy nowej subskrypcji. Aby korzystać z szablonów stron, ustaw przełącznik **zezwalaj na szablony stron** w stan aktywny.

**Tryb wyboru szablonu strony** definiuje zachowanie szablonów stron podczas procesu subskrypcji.

Ustawienie **D** **omyślne** podąża za krokami w formularzu zamówienia. Jeśli administrator sieci zdefiniował krok wyboru szablonu w procesie finalizacji zamówienia i krok został zdefiniowany z szablonami, to ustawienie będzie respektować dyrektywy ustalone w kroku finalizacji.

Określenie **P** **rzypisz szablon strony** wymusza wybór określonego szablonu. W konsekwencji wszelkie kroki wyboru szablonu w procesie finalizacji zamówienia są usuwane.

Na koniec **W** **ybierz dostępne szablony stron** nadpisuje szablony określone w kroku finalizacji zamówienia szablonami wybranymi w tym ustawieniu. Można również zdefiniować wstępnie wybrany szablon, aby pomóc klientowi w wyborze.

Ostatecznie, jeśli administrator sieci chce, aby wybór szablonu odbywał się w krokach finalizacji zamówienia, ustawienie „_domyślne_" wystarczy. Alternatywnie, aby usunąć i zablokować wybór szablonu i delegować wybór do ustawień planu, opcje „_przypisz nowy szablon_" lub „_wybierz dostępne szablony stron_" mogą być pożądane.

#### Strony

Zakładka **Strony** jest częścią funkcjonalności ograniczeń Ultimate Multisite.

![Zakładka Strony](/img/config/product-sites.png)

To ustawienie określa maksymalną liczbę stron, które klient może utworzyć w ramach swojego członkostwa.

Aby włączyć ograniczenie, ustaw przełącznik **ogranicz strony** w stan aktywny i określ maksymalną liczbę stron w polu **limit stron**.

#### Wizyty

Zakładka **Wizyty** jest kolejną częścią systemu ograniczeń Ultimate Multisite. To ustawienie pozwala na zliczanie i następcze ograniczanie unikalnych odwiedzających stronę klienta.

![Zakładka Wizyty](/img/config/product-visits.png)

Z perspektywy marketingowej administratorzy sieci mogą wykorzystać to ustawienie jako sposób zachęcania klientów do aktualizacji planu po osiągnięciu limitów. To ustawienie może również pomóc administratorowi sieci ograniczyć i zapobiec nadmiernemu ruchowi na stronach w celu ochrony zasobów systemowych.

Aby korzystać z tej funkcji, ustaw przełącznik **ogranicz unikalne wizyty** w stan aktywny i określ maksymalną liczbę unikalnych odwiedzających w polu **limit unikalnych wizyt**.

Po osiągnięciu tego limitu Ultimate Multisite przestanie obsługiwać stronę klienta, zamiast tego wyświetlając komunikat informujący o przekroczeniu limitów.

#### Użytkownicy

Ograniczenia „Użytkownicy" w Ultimate Multisite pozwalają administratorowi sieci nałożyć limity na liczbę użytkowników, którzy mogą być tworzeni i przypisywani do ról.

![Zakładka Użytkownicy](/img/config/product-users.png)

Aby włączyć funkcję ograniczeń, ustaw przełącznik **ogranicz użytkowników** w stan aktywny, przesuwając go w prawo.

Następnie dla każdej roli, która ma być ograniczona, ustaw przełącznik obok niej w stan aktywny i zdefiniuj maksymalny górny limit w odpowiednim polu.

#### Typy wpisów

Zakładka **Typy wpisów** pozwala administratorowi sieci nałożyć szczegółowe limity na rozbudowany zestaw typów wpisów w WordPress.

![Zakładka Typy wpisów](/img/config/product-post-types.png)

Ze względu na konstrukcję WordPress, wpisy i typy wpisów są istotnym elementem jego podstawowej funkcjonalności, dlatego system ograniczeń Ultimate Multisite został zaprojektowany, aby pomóc administratorowi sieci w ustalaniu i utrzymywaniu limitów.

Aby włączyć ten podsystem limitów, ustaw przełącznik **ogranicz typy wpisów** w stan aktywny, przesuwając go w prawo.

Następnie dla każdego typu wpisu, który ma być ograniczony, włącz go przesuwając w prawo i określając maksymalny górny limit w odpowiednim polu.

#### Przestrzeń dyskowa

Zakładka **Przestrzeń dyskowa** pozwala administratorom sieci ograniczyć przestrzeń zużywaną przez klientów.

![Zakładka Przestrzeń dyskowa](/img/config/product-disk-space.png)

Zazwyczaj w WordPress multisite pliki podstawowe są współdzielone między wszystkimi stronami, a dla plików multimedialnych i przesłanych materiałów tworzone są indywidualne katalogi, do których te ustawienia i ograniczenia się odnoszą.

Aby włączyć ograniczenie użycia dysku, ustaw przełącznik **ogranicz rozmiar dysku na stronę** w stan aktywny, przesuwając go w prawo.

Następnie określ maksymalny górny limit w megabajtach w polu **limit przestrzeni dyskowej**.

#### Własna domena

Przełączając tę opcję, możesz zezwolić na własne domeny konkretnie w tym planie.

![Zakładka Własne domeny](/img/config/product-custom-domains.png)

#### Motywy

Zakładka **Motywy** w opcjach produktu pozwala administratorowi sieci udostępniać motywy klientom do wyboru i opcjonalnie wymuszać stan motywu.

![Zakładka Motywy](/img/config/product-themes.png)

_**Uwaga: Aby motywy były dostępne dla klientów, muszą być włączone sieciowo przez administratora sieci.**_

![Strona motywów sieciowych](/img/config/product-themes-network-enabled.png)

Opcja **widoczność** określa, czy motyw jest widoczny dla klienta podczas przeglądania zakładki **Wygląd > Motywy** w obrębie jego strony. Ustawienie tej opcji na **Ukryty** usuwa motyw z widoku i tym samym ogranicza możliwość jego wyboru i aktywacji.

![Zakładka Motywy](/img/config/product-themes.png)

Wybór **zachowanie** pozwala administratorowi sieci zdefiniować stan motywu podczas tworzenia strony klienta.

W stanie **D** **ostępny** motyw jest udostępniany klientowi do samodzielnej aktywacji. Odwrotnie, stan **Niedostępny** odbiera klientowi możliwość aktywacji motywu. Na koniec opcja **Wymuś aktywację** wymusza wybór i aktywację motywu, ustawiając go jako domyślny podczas tworzenia strony.

#### Pluginy

Podobnie jak zakładka Motywy, Ultimate Multisite pozwala administratorowi sieci definiować widoczność pluginów dla klientów oraz ich stan podczas tworzenia nowej strony.

![Zakładka Pluginy](/img/config/product-plugins.png)

Lista rozwijana **widoczność** pozwala, aby plugin był widoczny lub ukryty przed klientem podczas przeglądania na jego stronie przez opcję menu Pluginy.

Administrator sieci może dodatkowo manipulować zachowaniem pluginów, korzystając z opcji w liście rozwijanej zachowanie.

![Zakładka Pluginy](/img/config/product-plugins.png)

Wybór **Domyślne** respektuje stan plugina zdefiniowany w szablonie strony wybranym przez klienta. Tym samym pluginy aktywowane w szablonie pozostaną aktywowane, gdy szablon zostanie sklonowany na stronę klienta.

**Wymuś aktywację** ustawia plugin w stan aktywny podczas tworzenia strony, a odwrotnie **Wymuś dezaktywację** dezaktywuje plugin podczas tworzenia strony. W obu przypadkach stan plugina może być ręcznie zmieniony przez klienta poprzez menu Pluginy w WordPress.

Ustawienie **Wymuś aktywację i zablokuj** działa podobnie, ale uniemożliwia klientowi zmianę stanu plugina. Tym samym ustawienie Wymuś aktywację i zablokuj wymusi plugin w stan aktywny i uniemożliwi klientowi jego dezaktywację. Podobnie ustawienie **Wymuś dezaktywację i zablokuj** wymusi plugin w stan nieaktywny i uniemożliwi użytkownikowi aktywację plugina.

Administrator sieci może rozważyć ustawienia Wymuś aktywację i zablokuj oraz Wymuś dezaktywację i zablokuj w połączeniu z szablonami stron, ponieważ pluginy i stany pluginów w szablonach mogą być dotknięte przez te ustawienia, jeśli zostaną wybrane.

#### Resetuj ograniczenia

Zakładka **Resetuj ograniczenia** resetuje wszystkie niestandardowe limity zdefiniowane dla produktu. Aby zresetować ograniczenia, kliknij przycisk **resetuj ograniczenia**.

![Zakładka Resetuj ograniczenia](/img/config/product-reset-limitations.png)

Aby potwierdzić akcję, przesuń przełącznik **potwierdź reset** w stan aktywny po prawej stronie i kliknij przycisk **resetuj ograniczenia**.

![Zakładka Resetuj ograniczenia](/img/config/product-reset-limitations.png)

## Edycja, duplikowanie lub usuwanie produktu

Istniejące produkty można edytować, duplikować lub usuwać, przechodząc do **Ultimate Multisite > Produkty** i najeżdżając kursorem na nazwę istniejącego produktu.

![Akcje po najechaniu na produkt](/img/config/product-hover-actions.png)
