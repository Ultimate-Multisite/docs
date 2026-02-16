---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite to plugin do WordPress Multisite, który umożliwia oferowanie WaaS (Websites as a Service), czyli stron internetowych jako usługi. Zanim zagłębimy się w to, jak Ultimate Multisite może pomóc Twojej firmie i klientom, musimy najpierw poznać kilka podstawowych pojęć.

## WordPress Multisite

Większość z nas zna standardową instalację WordPress. Tworzysz ją przez panel sterowania swojego dostawcy hostingu lub — jeśli lubisz wyzwania — samodzielnie konfigurujesz serwer WWW i bazę danych, pobierasz pliki źródłowe i rozpoczynasz proces instalacji.

Takie podejście sprawdza się dla milionów stron WordPress na całym świecie, ale z perspektywy agencji czy dostawcy hostingu warto przez chwilę zastanowić się nad skalą.

O ile utworzenie jednej strony WordPress czy nawet stu za pomocą zautomatyzowanego panelu sterowania to pestka, o tyle problemy zaczynają się pojawiać przy zarządzaniu tymi stronami. Pozostawione bez nadzoru stają się łatwym celem dla złośliwego oprogramowania. Zarządzanie nimi wymaga wysiłku i zasobów, a choć istnieją zewnętrzne narzędzia i pluginy ułatwiające administrację stronami WordPress, fakt, że klienci zachowują dostęp administratora, sprawia, że te starania mogą łatwo pójść na marne.

WordPress ma wbudowaną funkcję o prostej nazwie „Multisite", której początki sięgają 2010 roku i premiery WordPress 3.0. Od tego czasu przeszła szereg aktualizacji wprowadzających nowe funkcje i poprawiających bezpieczeństwo.

W uproszczeniu WordPress Multisite można sobie wyobrazić tak: uniwersytet utrzymuje jedną instalację WordPress, ale każdy wydział prowadzi własną stronę.

Przyjrzyjmy się teraz podstawowej terminologii obecnej nie tylko w dokumentacji Ultimate Multisite, ale także w całej społeczności WordPress.

### Sieć

W terminologii WordPress sieć multisite to środowisko, w którym wiele podstron można zarządzać z jednego dashboardu. Choć tworzenie sieci multisite różni się w zależności od dostawcy hostingu, efekt końcowy to zazwyczaj kilka dodatkowych wpisów w pliku wp-config.php, które informują WordPress o pracy w tym trybie.

Istnieje kilka istotnych różnic między siecią multisite a samodzielną instalacją WordPress, które teraz pokrótce omówimy.

#### Subdomena czy podkatalog

Jedną z pierwszych decyzji, które musisz podjąć, jest wybór między konfiguracją z _podkatalogami_ a _subdomenami_. Ultimate Multisite działa równie dobrze z oboma opcjami, ale istnieją pewne różnice architektoniczne między tymi konfiguracjami.

W konfiguracji z _podkatalogami_ strony sieci dziedziczą ścieżkę opartą na głównej nazwie domeny. Na przykład strona o nazwie „site1" będzie miała pełny adres URL https://domain.com/site1. W konfiguracji z _subdomenami_ strona sieci będzie miała własną _subdomenę_ pochodzącą od głównej nazwy domeny. Strona o nazwie „site1" będzie więc miała adres https://site1.domain.com/.

Choć obie opcje są w pełni poprawne, użycie _subdomen_ oferuje pewne zalety, ale wymaga też więcej przemyślenia i planowania architektury.

Jeśli chodzi o DNS, użycie _podkatalogów_ to stosunkowo proste wyzwanie. Ponieważ strony sieci są po prostu podścieżkami głównej domeny, wystarczy jeden wpis DNS dla głównej nazwy domeny. Dla _subdomen_ sprawa jest nieco bardziej skomplikowana — wymaga albo osobnego wpisu CNAME dla każdej strony sieci, albo wpisu wieloznacznego (*) w rekordach DNS.

Kolejnym aspektem do rozważenia jest SSL i wydawanie certyfikatów SSL. W konfiguracji z _podkatalogami_ można użyć pojedynczego certyfikatu domenowego, ponieważ strony sieci są po prostu ścieżkami głównej domeny. Certyfikat dla domain.com będzie odpowiednio obsługiwał SSL dla https://domain.com/site1, https://domain.com/site2 i tak dalej.

W konfiguracji z _subdomenami_ najczęściej stosuje się certyfikat SSL typu wildcard. Ten typ certyfikatu zapewnia szyfrowanie dla domeny i jej _subdomen_. Certyfikat wildcard SSL będzie więc obsługiwał szyfrowanie dla https://site1.domain.com, https://site2.domain.com oraz samego https://domain.com.

Choć istnieją inne opcje, często są one ograniczone w zakresie i zastosowaniu oraz wymagają dodatkowej konfiguracji i analizy pod kątem przydatności.

#### Pluginy i motywy

Co WordPress daje, to też zabiera — przynajmniej z perspektywy klienta. W samodzielnej instalacji WordPress, jeśli administrator strony zainstaluje wadliwy plugin lub nie aktualizuje instalacji, jedyną ofiarą jest on sam. Jednak administrator instalujący wadliwy plugin w sieci multisite naraża każdą stronę w sieci.

Z tego powodu WordPress w trybie multisite odbiera administratorom stron możliwość instalowania pluginów i motywów, przenosząc ją na nowo utworzonego administratora sieci, czyli rolę „super admin". Ta uprzywilejowana rola może następnie decydować, czy pozwolić administratorom stron sieci widzieć menu pluginów w ich dashboardzie, a jeśli tak — czy takie uprawnienia obejmują _aktywowanie_ lub _dezaktywowanie_ pluginów.

W tym zakresie administrator sieci jest odpowiedzialny za instalowanie pluginów i motywów w sieci oraz delegowanie uprawnień do korzystania z nich poszczególnym stronom. Administratorzy stron nie mogą instalować pluginów i motywów ani uzyskiwać dostępu do tych, które nie zostały przypisane do ich strony.

#### Użytkownicy i administratorzy

W WordPress Multisite wszystkie strony sieci współdzielą tę samą bazę danych, a więc również tych samych użytkowników, role i uprawnienia. Najlepiej myśleć o tym tak, że wszyscy użytkownicy są członkami sieci, a nie konkretnej strony.

Biorąc to pod uwagę, może być niepożądane zezwalanie na tworzenie użytkowników, dlatego WordPress Multisite odbiera tę możliwość administratorom stron i przenosi ją na administratora sieci. Administrator sieci może z kolei delegować niezbędne uprawnienia administratorowi strony, aby umożliwić mu tworzenie kont użytkowników dla własnej strony.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Powtórzmy: choć konta użytkowników wydają się być powiązane ze stroną, w rzeczywistości są przypisane do sieci i dlatego muszą być unikalne w całej sieci. Mogą występować sytuacje, gdy nazwy użytkowników są niedostępne do rejestracji właśnie z tego powodu.

Choć nie jest to obce pojęcie w systemach korporacyjnych, to pojedyncze źródło rejestracji i uwierzytelniania użytkowników jest często trudne do zrozumienia dla osób znających samodzielne instalacje WordPress, gdzie administracja użytkownikami jest nieco prostsza.

#### Media

Podczas gdy strony sieci współdzielą jedną bazę danych w WordPress Multisite, utrzymują oddzielne ścieżki w systemie plików dla plików multimedialnych.

Standardowa lokalizacja WordPress (wp-content/uploads) pozostaje taka sama, jednak jej ścieżka jest modyfikowana, by odzwierciedlać unikalny identyfikator strony sieci. W rezultacie pliki multimedialne dla strony sieci znajdują się w wp-contents/uploads/site/[id].

#### Linki bezpośrednie

Wspomnieliśmy wcześniej, że konfiguracja z _subdomenami_ ma wyraźne zalety nad _podkatalogami_ i właśnie tutaj to widać: ścieżki.

W konfiguracji z _podkatalogami_ strona główna (pierwsza strona utworzona przy zakładaniu sieci) i podstrony sieci muszą współdzielić tę samą ścieżkę prowadzącą od nazwy domeny. Stwarza to potencjał dla wielu konfliktów.

Dla wpisów do strony głównej dodawana jest obowiązkowa ścieżka /blog/, aby zapobiec kolizjom ze stronami sieci. Oznacza to, że czytelne linki bezpośrednie, takie jak „Nazwa wpisu", będą prezentowane jako domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

W konfiguracji z _subdomenami_ takie działanie nie jest konieczne, ponieważ każda strona sieci korzysta z pełnej separacji domen i nie musi polegać na wspólnej ścieżce. Zamiast tego utrzymują własne odrębne ścieżki oparte na swojej _subdomenie_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Strony statyczne

W konfiguracji z _podkatalogami_ potencjał konfliktów nazw rozciąga się na strony statyczne, ponieważ strona główna i strony sieci współdzielą tę samą ścieżkę.

Aby temu zapobiec, WordPress umożliwia umieszczenie na czarnej liście pewnych nazw stron, żeby nie kolidowały z nazwami pierwszej strony. Zazwyczaj administrator sieci wpisuje tu główne ścieżki stron głównej witryny.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

W konfiguracji z _subdomenami_ możliwość konfliktów nazw jest minimalizowana przez _subdomenę_, ponieważ jest ona unikalna dla strony sieci i nie ma żadnego związku ze stroną główną.

### Rejestracja

W ustawieniach sieci WordPress Multisite dostępnych jest kilka nowych opcji rejestracji użytkowników, pozwalających nowym i istniejącym użytkownikom tworzyć strony.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

W przeciwieństwie do samodzielnych instalacji WordPress, strony sieci nie mają znanych opcji zezwalania na rejestrację użytkowników ani przypisywania tych rejestracji do ról.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Gdy tworzone są konta użytkowników, są one generowane na poziomie sieci. Zamiast należeć do jednej konkretnej strony, należą do sieci. Ma to wyraźne zalety i wady.

Na przykład załóżmy, że Twój WordPress Multisite działa w branży informacyjnej. Założyłbyś multisite, a następnie utworzył strony sieci dla finansów, technologii, rozrywki i innych obszarów zainteresowań, zachowując ogólną kontrolę nad pluginami i motywami. Każda strona sieci miałaby znacznie większą kontrolę nad wyglądem i doświadczeniem użytkownika niż niestandardowe typy wpisów czy zwykłe kategorie.

W tym przypadku, gdy użytkownik się loguje, loguje się do sieci i ostatecznie jest zalogowany również na każdej stronie sieci, zapewniając płynne doświadczenie. Gdyby Twój nowy serwis był oparty na subskrypcji, byłoby to idealne rozwiązanie.

Jeśli jednak zamierzonym celem i przeznaczeniem multisite jest oferowanie odrębnych stron sieci, które nie mają ze sobą żadnego związku, prawie zawsze wymagane są zewnętrzne lub dodatkowe pluginy do manipulowania rolami użytkowników.

### Domena i SSL

Porozmawiajmy o instalacji WordPress Multisite, która niemal umyka naszej uwadze — WordPress.com. Jest to zdecydowanie najbardziej rozbudowany przykład WordPress multisite i demonstruje jego rozległe możliwości dostosowywania i kształtowania do określonego celu.

W dzisiejszych czasach w nowoczesnym internecie używanie SSL jest niemal obowiązkowe, a administratorzy sieci WordPress multisite szybko stają przed tymi wyzwaniami.

W konfiguracji z _subdomenami_ strony są tworzone w oparciu o główną nazwę domeny. Strona o nazwie „site1" zostałaby utworzona jako „site1.domain.com". Używając certyfikatu SSL wildcard, administrator sieci może skutecznie rozwiązać to wyzwanie i zapewnić możliwości szyfrowania SSL dla sieci.

WordPress Multisite zawiera funkcję mapowania domen, która pozwala na powiązanie stron sieci z własnymi nazwami domen lub domenami innymi niż główna domena sieci.

Dla administratorów sieci stanowi to dodatkowy poziom złożoności zarówno w konfiguracji nazw domen, jak i w wydawaniu oraz utrzymywaniu certyfikatów SSL.

W tym zakresie, podczas gdy WordPress Multisite zapewnia możliwość mapowania [www.anotherdomain.com](http://www.anotherdomain.com) do „site1", administrator sieci musi sam rozwiązać problem zewnętrznego zarządzania wpisami DNS i wdrożenia certyfikatów SSL.

## Ultimate Multisite

Znając różnice między samodzielną instalacją WordPress a instalacją Multisite, przyjrzyjmy się, jak Ultimate Multisite staje się najlepszym arsenałem do świadczenia usługi Websites as a Service.

### Wprowadzenie

Ultimate Multisite to Twój szwajcarski scyzoryk, jeśli chodzi o tworzenie usługi Website as a Service (WaaS). Pomyśl o Wix.com, Squarespace, WordPress.com, a potem pomyśl o posiadaniu własnej takiej usługi.

Pod maską Ultimate Multisite wykorzystuje WordPress Multisite, ale robi to w sposób, który nie tylko rozwiązuje niezliczone wyzwania, przed którymi stają administratorzy sieci przy instalacjach multisite, ale także rozszerza możliwości, pozwalając na obsługę szerokiej gamy przypadków użycia.

W kolejnych sekcjach przyjrzymy się kilku typowym przypadkom użycia i kwestiom wymagającym uwagi.

### Przypadki użycia

#### Przypadek 1: Agencja

Zazwyczaj główne kompetencje agencji leżą w projektowaniu stron internetowych, podczas gdy takie aspekty jak hosting czy marketing są wymieniane jako usługi dodatkowe.

Dla agencji Ultimate Multisite oferuje niesamowitą propozycję wartości dzięki możliwościom hostowania i zarządzania wieloma stronami na jednej platformie. Jeszcze bardziej dla agencji, które standaryzują swoje projekty na konkretnych motywach, takich jak GeneratePress, Astra, OceanWP czy innych — mogą one wykorzystać możliwości Ultimate Multisite do automatycznej aktywacji tych motywów dla każdej nowej strony.

Podobnie, przy obfitości ofert z cenami agencyjnymi na popularne pluginy, użycie Ultimate Multisite pozwala agencjom wykorzystać istniejące inwestycje, zapewniając wspólną platformę, z której pluginy mogą być instalowane, utrzymywane i używane.

Najprawdopodobniej pożądana będzie konfiguracja z własnymi domenami i na szczęście Ultimate Multisite niezwykle ułatwia mapowanie domen i obsługę certyfikatów SSL dzięki integracjom z wieloma popularnymi dostawcami hostingu oraz usługami takimi jak Cloudflare i cPanel.

Umieszczając Ultimate Multisite za Cloudflare lub korzystając z jednego z tych dostawców, zarządzanie domenami i certyfikatami SSL staje się niemal trywialne.

Agencje, które wolą zachować ścisłą kontrolę nad tworzeniem stron, docenią łatwość, z jaką mogą tworzyć strony i wiązać je z klientami i planami przez usprawniony interfejs Ultimate Multisite.

![Interfejs zarządzania stronami Ultimate Multisite](/img/admin/sites-list.png)

Ścisła kontrola nad pluginami i motywami jest utrzymywana dla każdego produktu osobno przez intuicyjne interfejsy Ultimate Multisite, pozwalające na udostępnianie lub ukrywanie pluginów i motywów, a także określanie ich stanu aktywacji przy tworzeniu nowej strony.

![Interfejs ograniczeń pluginów produktu](/img/config/product-plugins.png)

Motywy oferują podobną funkcjonalność, pozwalając na aktywowanie lub ukrycie konkretnych motywów przy tworzeniu strony.

![Interfejs ograniczeń motywów produktu](/img/config/product-themes.png)

Agencje znajdą spokój ducha z Ultimate Multisite, mogąc robić to, co robią najlepiej — projektować wyjątkowe strony internetowe.

#### Przypadek 2: Dostawca niszowy

Jest takie stare powiedzenie: „rób jedną rzecz i rób ją dobrze". Dla wielu specjalistów oznacza to tworzenie produktu lub usługi wokół jednej głównej idei.

Może jesteś zapalonym golfistą promującym strony dla klubów, a może zapalonym graczem esportowym oferującym strony dla klanów. Albo kimś, kto promuje usługi rezerwacyjne dla restauracji?

Z wielu powodów chciałbyś świadczyć usługi oparte na wspólnym frameworku i platformie. Może to być związane z tym, że zaprojektowałeś lub zainwestowałeś w dedykowane pluginy zapewniające wymaganą funkcjonalność, lub może branżowe najlepsze praktyki wymagają pewnego rodzaju standardowego podejścia do projektowania.

Jedną z innowacyjnych funkcji Ultimate Multisite jest wykorzystanie stron szablonowych. Strona szablonowa to taka, gdzie motyw został zainstalowany i aktywowany, niezbędne pluginy zainstalowane i aktywowane, a przykładowe wpisy lub strony utworzone. Gdy klient tworzy nową stronę na podstawie szablonu, zawartość i ustawienia szablonu są kopiowane do nowo utworzonej strony.

Dla dostawcy niszowych stron i usług daje to niezrównaną przewagę w możliwości natychmiastowego tworzenia strony gotowej do działania z własnymi pluginami i projektem. Klient musi podać tylko minimalne informacje, by ukończyć usługę.

W zależności od wymagań może pasować zarówno konfiguracja z _podkatalogami_, jak i z _subdomenami_. W takim przypadku wybór architektury będzie między prostym certyfikatem SSL dla _podkatalogów_ a certyfikatem SSL wildcard dla _subdomen_.

#### Przypadek 3: Hosting stron WordPress

Istnieje mnóstwo sposobów na hostowanie stron WordPress, ale rzadko jest to tak proste jak udostępnienie klientowi przestrzeni z preinstalowaną wersją WordPress. Wynika to z tego, że wiele decyzji i kwestii musi się połączyć, by zapewnić sensowną usługę.

Ultimate Multisite wyróżnia się w tym obszarze, oferując kompleksowe rozwiązanie „pod klucz" do hostowania stron WordPress. W rozwiązaniu zawarte są podstawowe mechanizmy do świadczenia usług subskrypcyjnych, pobierania płatności, formularzy zamówień, kuponów rabatowych i komunikacji z klientami.

Większość prac związanych z poprawną instalacją, konfiguracją i utrzymaniem WordPress Multisite jest realizowana przez Ultimate Multisite w takim stopniu, że administratorzy sieci muszą rozważać jedynie aspekty związane z ich usługą lub niszą, takie jak poziomy produktów, ceny i oferty.

Dla programistów chcących integrować się z Ultimate Multisite, rozwiązanie oferuje również kompleksowe RESTful API i Webhooki do powiadomień o zdarzeniach.

Bez polegania na mnóstwie zewnętrznych pluginów i licencji, Ultimate Multisite zapewnia bogate w funkcje i porównywalne rozwiązanie do Wix, Squarespace, WordPress.com i innych.

### Kwestie architektury

Choć nie jest to kompleksowy przewodnik, poniższe punkty powinny służyć jako wskazówki do właściwego doboru technologii wspierających instalację Ultimate Multisite.

#### Hosting współdzielony vs. dedykowany

Niestety nie wszyscy dostawcy hostingu są równi i niektórzy praktykują ekstremalne zagęszczenie serwerów. Niskobudżetowi dostawcy zazwyczaj generują przychody poprzez maksymalizację gęstości serwerów. W rezultacie Twoja instalacja Ultimate Multisite może być tylko jedną z kilkuset stron na tym samym serwerze.

Bez odpowiednich zabezpieczeń ze strony dostawcy strony na współdzielonym serwerze doświadczają problemu „hałaśliwego sąsiada". To znaczy, że strona na tym samym serwerze zużywa tak dużo zasobów, że inne strony muszą konkurować o pozostałe. Często objawia się to stronami, które są wolne lub nie odpowiadają w odpowiednim czasie.

Jako dostawca hostingu sam odczujesz efekty w postaci słabych prędkości u klientów, niskiego pozycjonowania stron i wysokiego współczynnika odrzuceń, co często prowadzi do odchodzenia klientów szukających usług gdzie indziej.

Krótko mówiąc, tanio nie znaczy dobrze.

Ultimate Multisite jest znany ze współpracy z wieloma dobrymi dostawcami hostingu i integruje się z ich środowiskiem, zapewniając funkcje takie jak mapowanie domen i automatyczny SSL. Ci dostawcy cenią wydajność i zapewniają usługi wyższej klasy niż hosting współdzielony.

Listę kompatybilnych dostawców i pełne instrukcje konfiguracji dla każdego z nich znajdziesz w dokumentacji Compatible Providers.

#### Kwestie wydajności

Ultimate Multisite nie jest wolną aplikacją — wręcz przeciwnie, jest niezwykle szybki. Jednak działa tylko tak dobrze, jak pozwala na to bazowa aplikacja i infrastruktura, i może wykorzystywać tylko to, do czego ma dostęp.

Rozważ to: jesteś administratorem sieci instalacji Ultimate Multisite ze 100 stronami. Niektóre z nich radzą sobie dobrze i przyciągają wielu odwiedzających każdego dnia.

Ten scenariusz wyglądałby inaczej na mniejszą skalę, powiedzmy od jednej do pięciu stron, ale wkrótce problemy ze skalą stałyby się widoczne.

Bez uwagi pojedyncza strona Ultimate Multisite byłaby odpowiedzialna za obsługę żądań wszystkich odwiedzających wszystkie strony. Te żądania mogą dotyczyć dynamicznych stron PHP lub statycznych zasobów, takich jak arkusze stylów, JavaScript czy pliki multimedialne. Czy to jedna, czy sto stron, te zadania stają się powtarzalne, monotonne i marnotrawne. Niepotrzebne jest używanie mocy procesora i pamięci do przetwarzania pliku PHP, gdy wynik to ta sama statyczna informacja dla każdego żądania.

Podobnie jedno żądanie strony PHP lub HTML generuje z kolei wiele kolejnych żądań skryptów, arkuszy stylów i plików graficznych. Te żądania są kierowane bezpośrednio do Twojego serwera Ultimate Multisite.

Można łatwo rozwiązać ten problem, ulepszając serwer, ale nie rozwiązuje to drugiego problemu — opóźnień geograficznych. Tylko wiele serwerów w wielu lokalizacjach mogłoby właściwie rozwiązać ten problem.

Z tego powodu większość administratorów sieci korzysta z rozwiązań cache'owania front-endowego i sieci dostarczania treści (CDN) do obsługi żądań statycznych stron. Obsługa tych żądań i serwowanie zasobów zanim żądanie dotrze do serwera oszczędza zasoby przetwarzania, eliminuje opóźnienia, unika niepotrzebnych aktualizacji i maksymalizuje inwestycje w technologię.

Ultimate Multisite zawiera zaawansowany dodatek Cloudflare, umożliwiający administratorom sieci umieszczenie ich instalacji za Cloudflare i korzystanie nie tylko z możliwości cache'owania, ale także hostingu DNS, certyfikatów SSL i mechanizmów bezpieczeństwa.

#### Kopie zapasowe

Można zapytać 50 osób o radę dotyczącą kopii zapasowych i otrzymać 50 różnych opinii na temat strategii backupu. Odpowiedź brzmi: to zależy.

To, co nie podlega dyskusji, to że kopie zapasowe są wymagane i niemal nie do pomyślenia jest, aby nie były zarządzane przez dostawcę, szczególnie takiego, który oferuje usługę zarządzaną. W związku z tym klienci będą oczekiwać od administratora sieci zapewnienia i zarządzania tą usługą. Do kogo z kolei zwróci się administrator sieci, to zupełnie inny problem.

Na potrzeby tej sekcji ustalmy, że kopia zapasowa to kopia stanu systemu z momentu inicjacji backupu. Mówiąc prościej, cokolwiek jest stanem systemu w momencie tworzenia kopii zapasowej, ten stan jest uchwycony i zablokowany w backupie.

Z tym zrozumieniem odpowiedź na pytanie, jak wykonywać kopie zapasowe i co jest najlepsze dla Twojego środowiska, będzie w dużej mierze zależeć od Twoich wymagań i zdolności dostawcy hostingu do ich spełnienia. Jednak w kolejności od najbardziej do najmniej zdecydowanych, poniższe opcje powinny dać pewne wskazówki.

#### Snapshoty

Snapshoty to złote rozwiązanie dla kopii zapasowych, ponieważ są łatwe, nieskomplikowane (dopóki nie chcesz przywracać) i „po prostu działają". Wymagają jednak pewnej pomocy od dostawcy i dotyczą głównie sytuacji, gdy masz VPS (Virtual Private Server) lub podobne. Wielu dostawców wymienionych w naszej dokumentacji „Compatible Providers" oferuje kopie zapasowe niewymagające dalszej interwencji czy rozważań ze strony administratora sieci.

Podczas gdy tradycyjne kopie zapasowe dotyczą plików i baz danych, snapshot obejmuje cały dysk. Oznacza to, że nie tylko dane strony są uchwycone w snapshocie, ale także system operacyjny i konfiguracja. Dla wielu jest to wyraźna zaleta, ponieważ nowy system może być uruchomiony niemal natychmiast ze snapshota i wprowadzony do działania, zastępując chorą instancję. Podobnie proces odzyskiwania w celu pobrania plików wymaga jedynie podłączenia obrazu snapshota jako dysku do istniejącej instancji, aby uzyskać dostęp do plików i je skopiować.

Snapshoty mogą wiązać się z dodatkowym kosztem u dostawcy hostingu, ale są to koszty ubezpieczenia przed wypadkami.

#### Skrypty zewnętrzne

Nie brakuje zewnętrznych skryptów i rozwiązań do tworzenia kopii zapasowych zasobów WordPress i MySQL, które dobrze sprawdzą się z Ultimate Multisite, ponieważ jest to plugin WordPress korzystający z systemu plików i bazy danych WordPress. Rozwiązanie, które tworzy kopie zapasowe stron WordPress, odpowiednio pokryje potrzeby Ultimate Multisite.

Nie możemy polecić jednego skryptu ponad inny, ale nasza ogólna rada to przeprowadzenie kilku testów tworzenia i przywracania kopii zapasowych, aby upewnić się, że wyniki są zgodne z oczekiwaniami, oraz „dla pewności" ciągłe ocenianie skryptu i jego funkcjonalności, szczególnie tam, gdzie stosowana jest jakaś forma strategii backupu różnicowego.

Należy zauważyć, że te skrypty podczas działania zwiększają obciążenie systemu, co należy wziąć pod uwagę.

#### Pluginy

Niemal nie ma problemu w WordPress, którego nie można rozwiązać pluginem, a jeśli zarządzanie zewnętrznymi skryptami nie jest Twoją filiżanką kawy, to może plugin jest następną najlepszą opcją.

Choć pluginy różnią się opcjami i funkcjami, przeważnie wykonują tę samą funkcję — tworzą kopię plików WordPress i zawartości bazy danych. Później funkcjonalności się różnią, ponieważ niektóre pluginy mogą wysyłać kopie zapasowe do zewnętrznych usług, takich jak Google Drive lub Dropbox, lub do jakiegoś kompatybilnego serwisu przechowywania obiektów, takiego jak S3, Wasabi czy inne. Bardziej kompleksowe pluginy zapewniają kopie różnicowe lub jakąś strategię tworzenia kopii tylko danych, które się zmieniły, aby zaoszczędzić koszty zewnętrznego przechowywania.

Wybierając plugin, upewnij się, że obsługuje multisite. Ze względu na sposób działania, podczas tworzenia kopii zapasowej możesz spodziewać się tymczasowego obciążenia serwera do zakończenia procesu.

#### Domena i SSL

Wiele już powiedziano o nazwach domen w trybie multisite z _subdomenami_. Niemal uniwersalnym rozwiązaniem dla administratorów sieci jest użycie wieloznacznych wpisów DNS (wildcard).

![Przykład konfiguracji wieloznacznego wpisu DNS](/img/config/settings-domain-mapping.png)

Ten typ wpisu DNS z powodzeniem rozwiąże _subdomeny_ takie jak „site1.domain.com" i „site2.domain.com" na adres IP 1.2.3.4, wspierając tym samym Ultimate Multisite i w szerszym zakresie WordPress Multisite w trybie _subdomen_.

To może działać doskonale dla HTTP, ponieważ docelowy host jest odczytywany z nagłówków HTTP, ale rzadko dzisiejszy internet jest tak prosty, gdy bezpieczne transakcje HTTPS są niemal obowiązkowe.

Na szczęście istnieją proste opcje dla certyfikatów SSL. W trybie _podkatalogów_ można użyć zwykłego certyfikatu domenowego. Są one łatwo i bezpłatnie dostępne od dostawców hostingu, którzy mogą korzystać z bezpłatnej usługi LetsEncrypt lub innego źródła. W przeciwnym razie są komercyjnie dostępne od urzędów certyfikacji, jeśli jesteś w stanie wygenerować żądanie podpisania certyfikatu.

W trybie _subdomen_ użycie certyfikatu SSL wildcard będzie idealnie pasować do domeny wildcard i pozwoli certyfikatowi być autorytatywnym dla głównej domeny i wszystkich _subdomen_ bez dodatkowej konfiguracji.

Należy jednak zauważyć, że certyfikaty SSL wildcard mogą nie działać z usługami takimi jak Cloudflare, chyba że jesteś na planie enterprise lub ustawisz wpis na DNS only, w którym przypadku całe cache'owanie i optymalizacja są pomijane.

Gotowe rozwiązanie Ultimate Multisite rozwiązuje ten problem, demonstrując nasze szerokie doświadczenie z potrzebami WordPress multisite. Aktywacja tego prostego dodatku sprawi, że Ultimate Multisite użyje Twoich poświadczeń Cloudflare do automatycznego dodawania wpisów DNS dla stron sieci w Cloudflare i ustawiania ich trybu na „proxied". W ten sposób każda podstrona sieci, po utworzeniu, będzie miała pełną ochronę i korzyści Cloudflare, w tym SSL.

W zależności od natury i przeznaczenia Twojej instalacji Ultimate Multisite może istnieć potrzeba, aby klienci używali własnych domen. W takim przypadku administrator sieci musi rozwiązać dwa problemy. Pierwszy to hosting nazwy domeny, a drugi to certyfikaty SSL dla domeny.

Dla wielu użycie Cloudflare to prosta opcja. Klient musi tylko umieścić swoją domenę na Cloudflare, skierować CNAME do głównej domeny Ultimate Multisite i zmapować swoją domenę w Ultimate Multisite, aby zacząć korzystać z własnej nazwy domeny.

Poza tym trzeba szukać alternatywnych rozwiązań, dlatego Ultimate Multisite rekomenduje listę Compatible Providers. Dzieje się tak, ponieważ proces konfiguracji DNS i SSL może być nietrywiały. Jednak dzięki integracji Ultimate Multisite z tymi dostawcami złożoność jest znacznie usunięta, a procedura jest zautomatyzowana.

#### Pluginy

Jest wysoce prawdopodobne, że będziesz potrzebować dodatkowych pluginów, aby zapewnić funkcjonalność swoim klientom lub stronom sieci. Czy wszystkie pluginy działają z WordPress Multisite i Ultimate Multisite? Cóż, to zależy.

Choć większość pluginów można zainstalować w WordPress Multisite, ich aktywacja i licencjonowanie różnią się w zależności od autora.

Wyzwanie polega na tym, jak stosowane jest licencjonowanie — niektóre pluginy wymagają licencji na podstawie domeny. Oznaczałoby to, że dla niektórych pluginów administrator sieci musi ręcznie aktywować licencję dla każdego pluginu na każdej nowej stronie.

Dlatego najlepiej sprawdzić u autora pluginu, jak jego plugin działałby z WordPress Multisite i jakie specjalne wymagania lub procedury są potrzebne do jego licencjonowania.
